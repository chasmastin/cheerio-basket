import {render} from './util/edison-screen.js'

render(
	[
		require('./ux-personal/planning-opening.jsx'),
		require('./ux-personal/planning-item-added.jsx'),
		require('./ux-personal/planning-summary.jsx'),
		require('./ux-personal/planning-detail.jsx'),

		require('./ux-personal/entrance-generic.jsx'),
		require('./ux-personal/entrance-docking.jsx'),
		require('./ux-personal/entrance-personalized.jsx'),

		require('./ux-personal/discovery-carrots-directions.jsx'),
		require('./ux-personal/discovery-carrots-added.jsx'),
		require('./ux-personal/discovery-blueberry-directions.jsx'),
		require('./ux-personal/discovery-blueberry-added.jsx'),
		require('./ux-personal/discovery-broccoli-directions.jsx'),
		require('./ux-personal/discovery-broccoli-added.jsx'),
		require('./ux-personal/discovery-attract.jsx'),
		require('./ux-personal/discovery-nearby.jsx'),
		require('./ux-personal/discovery-recipe-detail.jsx'),
		require('./ux-personal/discovery-add-confirmation.jsx'),
		require('./ux-personal/discovery-nearby-return.jsx'),
		require('./ux-personal/discovery-calcium-directions.jsx'),

		require('./ux-personal/service-directions-checkout.jsx'),
		require('./ux-personal/service-meds-notification.jsx'),
		require('./ux-personal/service-meds-reminder.jsx'),
		require('./ux-personal/service-call-associate.jsx'),
		require('./ux-personal/service-meet-associate.jsx'),
		require('./ux-personal/service-customer-detail.jsx'),
		require('./ux-personal/service-customer-profile.jsx'),
		require('./ux-personal/service-meds-confirmation.jsx'),	
		require('./ux-personal/service-resume-checkout.jsx'),	
		
		require('./ux-personal/checkout-total.jsx'),
		require('./ux-personal/checkout-total-detail.jsx'),
		require('./ux-personal/checkout-thanks.jsx'),
		require('./ux-personal/checkout-post-shopping.jsx'),

	],
	document.getElementById('list')
)