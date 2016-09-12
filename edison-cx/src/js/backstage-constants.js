const constants = {
	blank: {
		name: "blank",
		label: "Inital",
		bootstrapColor: "info"
	},
	moments: [
		{
			name: 'coca_cola',
			label: 'Coca Cola',
			price: '$13.74',
			itempic:"http://www.ruralking.com/media/catalog/product/cache/1/image/378x378/9df78eab33525d08d6e5fb8d27136e95/c/o/coca_cola.jpg",
			description: '<p> Coca Cola - 12 pack, 144 fl oz </p>',
			screens: [
				{
          			name: "more-info1",
          			label: "Additional Information"
        		},
        		{
          			name: "remove-item",
          			label: "Remove Item"
        		}
			]
		},
		{
			name: 'cream_chicken',
			label: 'Campbells Cream of Chicken and Mushroom Soup',
			price: '$1.79',
			itempic:"https://ll-us-i5.wal.co/asr/e99d2ea9-226b-42f2-89a6-08dbe5196a7a_1.1d43bd958ae633e66e015d3535d5172a.jpeg",
			description: '<p> Cream of Chicken and Mushroom Soup, 10.5oz </p>',
			screens: [
				{
          			name: "more-info2",
          			label: "Additional Information"
        		}
			]
		},
		{
			name: 'suave_shampoo',
			label: 'Suave Shampoo',
			price: '$2.69',
			itempic:"https://smedia.webcollage.net/rwvfp/wc/cp/16255861/module/suave/_cp/products/1372381765806/tab-bd764dd8-8c58-4c4e-b61d-650f132a8fcd/88fecc15-482f-4886-a5dd-8ac9853d0ab8.w960.jpg",
			description: '<p> Suave Professionals Almond & Shea Butter Moisturizing Shampoo, 28 Fl Oz </p>',
			screens: [
				{
          			name: "more-info3",
          			label: "Additional Information"
        		}
			]
		},
		{
			name: 'hvalley_ranch',
			label: 'Hidden Valley Ranch',
			price: "$3.66",
			itempic:"https://images.jet.com/md5/8851f7f05c2b8725907e422ed5aed962.500",
			description: '<p> Hidden Valley Ranch, Ranch Original Dressing, 24oz Squeeze Bottle </p>',
			screens: [
				{
          			name: "more-info4",
          			label: "Additional Information"
        		}
			]
		},
		{
			name: 'folgers_black_silk',
			label: 'Folgers Coffee Black Silk',
			price: '$8.29',
			itempic:"https://images-na.ssl-images-amazon.com/images/I/91Tr6%2Bgs9ML._SX522_.jpg",
			description: '<p> Folgers Black Silk Ground Coffee, 24.2 oz </p>',
			screens: [
				{
          			name: "more-info5",
          			label: "Additional Information"
        		}
			]
		},
		{
			name: 'folgers_colombian',
			label: 'Folgers Coffee 100% Colombian',
			price: '$8.20',
			itempic:"https://ll-us-i5.wal.co/asr/a350884d-fd47-42dd-bbb2-e054bf6c0abc_1.1cc73acea297000eb3e38c4b977c6a48.jpeg",
			description: '<p> Folgers 100% Colombian Medium Dark Roast Ground Coffee, 24.2 oz</p>',
			screens: [
				{
          			name: "more-info6",
          			label: "Additional Information"
        		}
			]
		},
		{
		name: 'coca_cola_cherry',
			label: 'Coca-Cola Cherry Cans',
			price: '$13.00',
			itempic:"http://www.usgoods.eu/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/0/0/0004900003103_500x500.jpg",
			description: '<p> Coke Cola Cherry Cola - 12 pack, 144 fl oz </p>',
			screens: [
				{
          			name: "more-info7",
          			label: "Additional Information"
        		}
			]
		},
				{
		name: 'maxwell_coffee_breakfast',
			label: 'Maxwell House Coffee',
			price: '$7.29',
			itempic:"https://ll-us-i5.wal.co/asr/e595cc4e-cbf7-4ead-ac7b-74fa0582cb0c_2.fb8363e26348e03476e2dbd72e501c6c.jpeg",
			description: '<p> Maxwell House Breakfast Blend Mild Coffee, 29.3 oz </p>',
			screens: [
				{
          			name: "more-info8",
          			label: "Additional Information"
        		}
			]
		},
		{
		name: 'suave_shampoo_conditioner',
			label: 'Suave Shampoo + Conditioner',
			price: '$4.98',
			itempic:"https://ll-us-i5.wal.co/asr/a85a2974-a643-48cd-982c-1725babf02f7_1.6dfd328b48bb93e34370cd7697eea247.jpeg",
			description: '<p> Suave Professionals Almond and Shea Butter Shampoo and Conditioner 28 oz, Pack of 2 </p>',
			screens: [
				{
          			name: "more-info9",
          			label: "Additional Information"
        		}
			]
		},
		{
		name: 'life_cereal',
			label: 'Quaker Life Cereal',
			price: '$3.16',
			itempic:"https://ll-us-i5.wal.co/asr/fe5a2eca-8f5d-4ad0-8762-4f6ce8faeccf_1.7cd6de3dc591289e4144d87c58b9e8f4.jpeg",
			description: '<p> Quaker Life Original Cereal, 18 oz </p>',
			screens: [
				{
          			name: "more-info10",
          			label: "Additional Information"
        		}
			]
		},		
		{
		name: 'corn_flakes_small',
			label: 'Kellogs Corn Flakes',
			price: '$2.82',
			itempic:"https://ll-us-i5.wal.co/asr/c55ee9cf-c8ce-4d0f-b9e0-c966fea562d5_1.5bcd4598b5eba3a7a4c81157a53f9465.jpeg",
			description: '<p> Kelloggs Corn Flakes Cereal, 12 oz </p>',
			screens: [
				{
          			name: "more-info11",
          			label: "Additional Information"
        		}
			]
		},		
		{
		name: 'corn_flakes_big',
			label: 'Kelloggs Corn Flakes',
			price: '$3.13',
			itempic:"https://ll-us-i5.wal.co/asr/f58f7c32-bb3e-43c8-baf4-d2b18281a279_1.c41a0ccb9ad035964a0bfad8e42dc1e1.jpeg",
			description: '<p> Kelloggs Corn Flakes Cereal, 18 oz</p>',
			screens: [
				{
          			name: "more-info12",
          			label: "Additional Information"
        		}
			]
		},		
		{
		name: 'c_toast_crunch',
			label: 'Cinnamon Toast Crunch',
			price: '$4.70',
			itempic:"https://ll-us-i5.wal.co/asr/e9611295-e4b7-484a-9f76-c03bcc988026_3.4b62422fdf51d99cc88ce82bd11e47d5.jpeg",
			description: '<p> Cinnamon Toast Crunch™ Cereal 23.6 oz. Box </p>',
			screens: [
				{
          			name: "more-info13",
          			label: "Additional Information"
        		}
			]
		},		
		{
		name: 'wholesome_b_sugar',
			label: 'Organic Brown Sugar ',
			price: '$3.66',
			itempic:"https://ll-us-i5.wal.co/asr/5a7b497a-0d8c-494f-9b1c-2fe486513dfc_1.799fbe9587b9b7d51e368309fb2f9750.jpeg",
			description: '<p> Wholesome! Organic Light Brown Sugar, 24 oz </p>',
			screens: [
				{
          			name: "more-info14",
          			label: "Additional Information"
        		}
			]
		},

	]
}

module.exports = constants