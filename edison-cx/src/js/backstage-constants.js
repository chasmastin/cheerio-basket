const constants = {
	blank: {
		name: "blank",
		label: "Initial",
		bootstrapColor: "info"
	},
	moments: [
		{
			name: 'planning',
			label: 'Planning: Automating Smarter Choices',
			subtitle: 'Integrates with your life to take the \'plan\' out of planning',
			description: '<p>Maria opens her Walmart smart guide which shows her a snapshot of how she’s been succeeding on her budget and wellness goals along with suggestions for her upcoming trip.</p> <p>Realizing she has only 30 minutes to shop, the smart guide re-optimizes her shopping experience and generates a dynamic, personalized shopping itinerary and predictive selection of items based on her goals, purchase history, and preferences.</p> <p>Items to pick-up as a package are auto-bundled to maximize her limited shopping time and enable her to also squeeze in an appointment booking.</p>',
			screens: [
				{
          			name: "car-calendar",
          			label: "Car Homescreen"
        		},
        		{
          			name: "car-notification",
          			label: "SmartFridge Notification"
        		},
        		{
          			name: "car-read-notification",
          			label: "Read Message"
        		},
        		{
          			name: "car-confirm-add-berries",
          			label: "Confirm Add Berries"
        		},
        		{
          			name: "car-add-anything-else",
          			label: "(Add Anything Else?)"
        		},
        		{
          			name: "car-confirm-oats",
          			label: "Confirm Oats"
        		},
        		{
          			name: "car-offer-help",
          			label: "(Offer Help)"
        		},
        		{
          			name: "car-resume-calendar",
          			label: "Resume Homescreen"
        		},
        		{
          			name: "car-parking",
          			label: "Parking Suggestion"
        		},
        		{
          			name: "car-parking-done",
          			label: "Parking Done"
        		},

        		{ hr: true },

				{
					name: "planning-opening",
					label: "App Opening Screen"
				},
				{
					name: "planning-item-added",
					label: "Item Added"
				},
				{
					name: "planning-summary",
					label: "Summary"
				},
				{
					name: "planning-detail",
					label: "Detail"
				},
				
			]
		},
		{
			name: 'entrance',
			label: 'Guided Store Experience',
			subtitle: 'Knows who you are and where you are to provide the right experience',
			description: '<p>Proximity to the store pairs her digital profile to enable the store and associates to welcome, know and help her.</p> <p>Maria enters the store and receives a hypersound greeting, a directed audio hello that only she hears and a message about a virtual reality fitness event that she and her family might enjoy.</p> <p>She receives feedback that the smart guide has initiated in-store mode, and can start providing directions and real time item recognition.</p>',
			screens: [
				{
					name: "entrance-generic",
					label: "Generic Screen"
				},
				{
					name: "entrance-welcome",
					label: "Welcome Message"
				},
				{
					name: "entrance-docking",
					label: "Store Connecting"
				},
				{
					name: "entrance-personalized",
					label: "Personalized Signage"
				},	
			]
		},
		{
			name: 'discovery',
			label: 'Discovery & Inspiration: Personally Relevant Recommendations',
			subtitle: 'Inspires you and presents choices that support your goals',
			description: '<p>Maria needs a quick solution for what her family will eat for dinner tonight.</p> <p>Based on image recognition of fresh ingredients in her basket and home pantry, she is presented with an inspirational recipe for a meal to cook tonight and shown additional missing dish ingredients which she can easily add to her pickup package.</p> <p>The recommendation is perfectly portioned for her family of five. Her totals are updated in real-time as fresh recommendations help to optimize her basket to further support her health and budget goals.</p>',
			screens: [
				{
					name: "discovery-carrots-directions",
					label: "Carrots Directions"
				},
				{
					name: "discovery-carrots-added",
					label: "Carrots Added"
				},
				{
					name: "discovery-blueberry-directions",
					label: "Blueberry Directions"
				},
				{
					name: "discovery-blueberry-added",
					label: "Blueberry Added"
				},
				{
					name: "discovery-broccoli-directions",
					label: "Broccoli Directions"
				},
				{
					name: "discovery-broccoli-added",
					label: "Broccoli Added"
				},
				{ hr:true },
				{
					name: "discovery-attract",
					label: "Discovery Attract Loop"
				},
				{
					name: "discovery-nearby",
					label: "Cart nearby reaction"
				},
				{
					name: "discovery-recipe-detail",
					label: "Recipe Detail"
				},
				{
					name: "discovery-add-confirmation",
					label: "Added recipe and ingredients"
				},
				{
					name: "discovery-nearby-return",
					label: "Recipe options return screen",
				},
				{
					name: "discovery-calcium-directions",
					label: "Calcium Directions"
				}
			]
		},
		{
			name: 'help',
			label: 'Help: On-demand Digital Assistance',
			subtitle: 'Empowers you to quickly help yourself with digital tools',
			description: '<p>Walmart’s digital assistant acts as Maria’s trusted wellness assistant through the combination of understanding her health goals and keeping track of her fresh purchases nutrient data.</p> <p>Based on her home fridge contents and current fresh produce basket, the digital assistant notifies Maria that she’s short on vitamins to meet her diet goal and recommends a custom supplement which can be fabricated for her in real-time at the Health Bar.</p> <p>She asks to have the supplement added to her pick-up order. She then signals that she would like help from a Health & Wellness associate.</p> <ol><li>Wayfinding</li><li>Suggest Subscription</li><li>Confirm Subscription</li><li>Recommend Fish Oil</li><li>Refine By Type</li><li>Refine By Quantity</li><li>Highlight Match</li></ol>',
			screens: [
				// {
				// 	name: "help-wayfinding",
				// 	label: "Wayfinding"
				// },
				// {
				// 	name: "help-suggest-subscription",
				// 	label: "Suggest Subscription"
				// },
				// {
				// 	name: "help-confirm-subscription",
				// 	label: "Confirm Subscription",
				// },
				// {
				// 	name: "help-recommend-fish-oil",
				// 	label: "Recommend Fish Oil"
				// },
				// {
				// 	name: "help-refine-by-type",
				// 	label: "Refine By Type"
				// },
				// {
				// 	name: "help-refine-by-quantity",
				// 	label: "Refine By Quantity"
				// },
				// {
				// 	name: "help-highlight-match",
				// 	label: "Highlight Match"
				// },
			]
		},
		{
			name: 'service',
			label: 'Service: Easy Access to Empowered Associates',
			subtitle: 'Guides you to digitally empowered associates capable of seamless support',
			description: '<p>An associate, wearing a smart device that enables knowledge about customers and store products, finds and greets Maria.</p> <p>Summer is approaching, and Maria wants an economical solution to keep everyone in her family sun safe.  The associate provides quick 1:1 consultation on a new foundation with SPF for Maria and sunscreen with friendly bottles for her kids.</p> <p>Maria heads over to her pre-booked Tele-Health appointment to get an opinion about an insect bite on her arm.</p>',
			screens: [
				{
					name: "service-directions-checkout",
					label: "Checkout Directions"
				},
				{
					name: "service-meds-notification",
					label: "Meds Notification"
				},
				{
					name: "service-meds-reminder",
					label: "Meds Reminder"
				},
				{
					name: "service-call-associate", 
					label: "Call Associate"
				},
				{ hr: true },
				{
					name: "service-meet-associate",
					label: "Meet Associate"
				},
				{
					name: "service-customer-detail",
					label: "Associate: Customer Detail"
				},
				{
					name: "service-customer-profile",
					label: "Associate: Customer Profile"
				},
				{ hr: true },
				{
					name: "service-meds-confirmation", 
					label: "Meds Confirmation"
				},
				{
					name: "service-resume-checkout",
					label: "Resume Checkout"
				},
			]
		},
		{
			name: 'checkout',
			label: 'Checkout & Exit: Life not Lines',
			subtitle: 'Respects your time with no lines and powers your life and goals',
			description: '<p>Moving towards the exit, Maria simply taps a button to validate she’s done with her shopping and the store connects her payment profile to today’s trip. She receives a hypersound message confirming she’s all set to go as she exits.</p> <p>The smart guide updates Maria’s profile for future needs, suggestions and reminders.</p> <p>As she walks out towards her car to pick up her pre-packaged goods, she receives a visual message summarizing what she’s accomplished on budget and on wellness.</p>',
			screens: [
				{
					name: "checkout-total",
					label: "Checkout Total"
				},
				{
					name: "checkout-total-detail",
					label: "Checkout Total Detail"
				},
				{
					name: "checkout-thanks",
					label: "Thank You"
				},
				{
					name: "checkout-post-shopping",
					label: "Post Shopping"
				}
			]
		}
	]
}

module.exports = constants