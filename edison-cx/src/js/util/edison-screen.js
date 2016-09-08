'use strict'

if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    'use strict';
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}

if (typeof Object.assign != 'function') {
  Object.assign = function(target) {
    'use strict';
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}

const React = require('react')
const PropTypes = React.PropTypes
const ReactDOM = require('react-dom')
const Redux = require('redux')
const createStore = Redux.createStore
const applyMiddleware = Redux.applyMiddleware
const combineReducers = Redux.combineReducers
const ReactRedux = require('react-redux')
const connect = ReactRedux.connect
const Provider = ReactRedux.Provider
const thunk = require('redux-thunk')

const EdisonScreenView = function (props) {
	var currentScreen = props.currentScreen
	var children = props.children
	if (children == null) return null;
	var selected = React.Children.toArray(children).find(function (e) {
		return currentScreen == e.props.Name
	})
	if (selected == null && React.Children.count(children) > 0) {
		selected = React.Children.toArray(children)[0];
	}
	return selected
}

const EdisonScreenComponent = connect(
	function (state) {
		return {
			'currentScreen': state.screen.current
		}
	},
	function (dispatch) {
		return {
			setScreen: function (screen) {
				dispatch({
					'type': 'SET_SCREEN',
					'screen': screen
				})
			}
		}
	}
)(EdisonScreenView)

const EdisonScreenReducer = function (state, action) {
	if (typeof state == "undefined") {
		state = { current: null }
	}
	if (action.type == 'SET_SCREEN') {
		return Object.assign({}, state, { current: action.screen })
	}
	return state
}

const connectSocketIOEvents = function (store, socket_io_url) {
	console.log("connectSocketIOEvents")
	console.log(socket_io_url)
	let namespace = require('socket.io-client')(socket_io_url)
	console.log(namespace)
	if (namespace) {
		console.log("connected")
		namespace.on('connect', function () {
			console.log('[socket.io] connect')
		})
		namespace.on('connect_error', function (error) {
			console.log('[socket.io] connect_error')
			console.log(error)
		})
		namespace.on('connect_timeout', function () {
			console.log('[socket.io] connect_timeout')
		})
		namespace.on('reconnect', function (number) {
			console.log('[socket.io] reconnect')
			console.log(number)
		})
		namespace.on('reconnect_attempt', function () {
			console.log('[socket.io] reconnect_attempt')
		})
		namespace.on('reconnecting', function (number) {
			console.log('[socket.io] reconnection attempt #'+ number);
		})
		namespace.on('reconnect_error', function (error) {
			console.log('[socket.io] reconnect_error')
			console.log(error)
		})
		namespace.on('reconnect_failed', function () {
			console.log('[socket.io] reconnect_failed')
		})
		namespace.on('update', function (msg) {
			console.log('[backstage] update event received')
			console.log(msg)
			store.dispatch({
				type: 'SET_BACKSTAGE',
				state: msg.state
			})
		})
	}
}

const connectSocketIO = function (store) {
	console.log("connectSocketIO")
	let isChromeOS = window.location.protocol == "chrome-extension:"
	let isCordova = !isChromeOS && document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1
	if (isCordova) {
		document.addEventListener('deviceready', (function () { connectSocketIOEvents(store, 'http://130.211.57.196/backstage') }) )
	} else if (isChromeOS) {
		connectSocketIOEvents(store, 'http://130.211.57.196/backstage')
	} else {
		connectSocketIOEvents(store, '/backstage')
	}
}

module.exports = {
	Component: EdisonScreenComponent,
	Reducer: EdisonScreenReducer,
	Name: 'screen',
	render: function (screens, element, reducers) {
		// Needed for onTouchTap 
		// http://stackoverflow.com/a/34015469/988941 
		require('react-tap-event-plugin')()

		if (reducers == null) {
			reducers = {}
		}
		reducers.screen = function (state, action) {
			state = EdisonScreenReducer(state, action)
			if (action.type == 'SET_BACKSTAGE') {
				let screen = screens.find(function (e) { return e.Name == action.state } )
				if (!screen) {
					screen = screens[0]
				}
				return Object.assign({}, state, { current: screen.Name })
			}
			return state
		}

		screens.forEach(function (e) { return reducers[e.Name] = e.Reducer })

		let store = createStore(combineReducers(reducers))
		
		ReactDOM.render(
			React.createElement(
				Provider,
				{'store': store},
				React.createElement(
					EdisonScreenComponent,
					null,
					screens.map(function(e){
						return React.createElement(e.Component, { key: e.Name, Name: e.Name })
					})
				)
			),
			element
		)
		connectSocketIO(store)
	}
}