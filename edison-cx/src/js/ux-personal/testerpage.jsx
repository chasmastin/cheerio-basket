import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

module.exports = {
	Component: connect(
		(state) => {
			return {
			}
		},
		(dispatch) => {
			return {
				setScreen: (screen) => {
					dispatch({
						type: 'SET_SCREEN',
						screen: screen
					})
				}
			}
		}
	)(({setScreen}) => {
		return <img src="images/ux-personal/service-directions-checkout.png" onClick={() => setScreen('service-directions-checkout')} style={{width:'100%'}} />
	}),
	Reducer: (state, action) => {
		return {}
	},
	Name: 'service-resume-checkout'
}