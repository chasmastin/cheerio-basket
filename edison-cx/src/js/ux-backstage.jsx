import React from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';

import AppBar from 'material-ui/AppBar'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import Chip from 'material-ui/Chip'
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider'
import FlatButton from 'material-ui/FlatButton'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'

import DockIcon from 'material-ui/svg-icons/hardware/dock'
import ContentCopyIcon from 'material-ui/svg-icons/content/content-copy'
import SmartphoneIcon from 'material-ui/svg-icons/hardware/smartphone'
import TabletIcon from 'material-ui/svg-icons/hardware/tablet'
import ComputerIcon from 'material-ui/svg-icons/hardware/computer'
import TVIcon from 'material-ui/svg-icons/hardware/tv'

import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import {Step, Stepper, StepButton} from 'material-ui/Stepper'
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar'

const constants = require('./backstage-constants.js')

// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
require('react-tap-event-plugin')();

let reducers = {
    App: (state, action) => {
        if (typeof state == "undefined") {
            state = {
                API_URL: null,
                state: 'blank'
            }
            state.moments = constants.moments
            state.available = {}
            state.available[constants.blank.name] = constants.blank;
            constants.moments.forEach(function(moment) {
                moment.screens.forEach(function(screen) {
                    state.available[screen.name] = screen
                })
            })
        }
        if (action.type == 'SET_API_URL') {
            return Object.assign({}, state, { API_URL: action.API_URL })
        }
        if (action.type == 'SET_STATE') {
            return Object.assign({}, state, { state: action.state })
        }
        return state
    }
}

const store = createStore(
    combineReducers(reducers),
    applyMiddleware(thunk)
)

// start load initial state
jQuery.ajax("/env", {
    method: 'GET',
}).done(function(results) {
    store.dispatch({
        type: 'SET_API_URL',
        API_URL: results.API_URL
    })
}).then(function() {
    jQuery.ajax(store.getState().App.API_URL +'/backstage').done(function(results) {
        store.dispatch({
            type:'SET_STATE',
            state: results.state
        })
    })
})
// end load initial state

const setBackstageState = function(newState) {
    return function (dispatch, getState) {
        jQuery.ajax( getState().App.API_URL +'/backstage', {
            method : 'PATCH',
            contentType : 'application/json',
            data : JSON.stringify([{ "op": "replace", "path": "/state", "value": newState }])
        }).done(function(results) {
            dispatch({
                type: 'SET_STATE',
                state: results.state
            })
        })
    }
}

const getBackstageScreen = function(name) {
    let result = constants.moments
        .map((moment) => moment.screens)
        .reduce((previous, screens) => previous.concat(screens), [])
        .find((screen) => screen.name == name)

    if (result == null) result = constants.blank

    return result
}

const BackstageView = ({current, moments, setState}) => {
    let result =
        <div className="backstage">
            <AppBar
                title="Backstage Prototype Controls"
                iconElementLeft={
                    <IconMenu
                        iconButtonElement={ <IconButton><MenuIcon color="white" /></IconButton> }
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}} >
                        <MenuItem
                            leftIcon={<TabletIcon />}
                            primaryText="Car"
                            onClick={() => window.open("/ux-car/", "_blank") } />
                        <MenuItem
                            leftIcon={<SmartphoneIcon />}
                            primaryText="Personal Device"
                            onClick={() => window.open("/ux-personal/", "_blank") } />
                        <MenuItem
                            leftIcon={<DockIcon />}
                            primaryText="Welcome Kiosk"
                            onClick={() => window.open("/ux-welcome/", "_blank") } />
                        <MenuItem
                            leftIcon={<DockIcon />}
                            primaryText="Recipe Kiosk"
                            onClick={() => window.open("/ux-recipe/", "_blank") } />
                        <MenuItem
                            leftIcon={<TabletIcon />}
                            primaryText="Associate Device"
                            onClick={() => window.open("/ux-associate/", "_blank") } />
                        <Divider />
                        <MenuItem
                            leftIcon={<ContentLink />}
                            primaryText="Open All"
                            onClick={() => {
                                window.open("/ux-car/", "_blank")
                                window.open("/ux-personal/", "_blank")
                                window.open("/ux-welcome/", "_blank")
                                window.open("/ux-recipe/", "_blank")
                                window.open("/ux-associate/", "_blank")
                            }}  />
                        
                    </IconMenu>
                }
                iconElementRight={
                    <Chip style={{marginTop:"8px"}}>{ getBackstageScreen(current).label }</Chip>
                }
                />
        
            { moments.map((moment, index) => {
                return <MomentView key={moment.name} moment={moment} setState={setState} current={current} index={index} />
            }) }
        </div>

    return result
}

const MomentView = ({current, moment, setState, index}) => {
    let stepIndex = moment.screens.findIndex((e) => e.name == current)
    let hrIndex = 0;

    let result = 
        <Card>
            <CardHeader
                title={ (index+1) + ". "+ moment.label}
                subtitle={moment.subtitle} 
                avatar={"images/ux-backstage/thumbnails/"+ (index+1)+"-"+moment.name+".png"}
                actAsExpander={true}
                showExpandableButton={true} />
            <CardText
                 expandable={true}
                 dangerouslySetInnerHTML={{__html: moment.description}} />
            <CardActions
                 expandable={true}>
                {moment.screens.map((screen) => {
                    let result = null;
                    if (screen.hr == true) {
                        result = <hr key={"hr" + hrIndex++} />
                    } else {
                        result = 
                            <FlatButton key={screen.name} label={screen.label} onClick={() => setState(screen.name)}/>
                    }
                    return result
                })}
            </CardActions>
        </Card>

    return result
}

const ScreenView = ({screen, setState}) => {
    let result = 
        <li><button className="btn btn-default btn-lg" onClick={() => setState(screen.name)}>{ screen.label }</button></li>
    return result
}

const BackstageComponent = connect(
    (state) => {
        return {
            current: state.App.state,
            moments: state.App.moments
        }
    },
    (dispatch) => {
        return {
            setState: function(newState) {
                dispatch(setBackstageState(newState))
            }
        }
    }
)(BackstageView)

render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <BackstageComponent />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('instance')
)
