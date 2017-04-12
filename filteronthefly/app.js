(function(){
'use strict';

angular.module('filterList',[])
.controller('filterListController', filterListController)
.service('filterListControllerService', filterListControllerService);

filterListController.$inject = ['filterListControllerService'];
function filterListController(filterListControllerService){
var list = this;
var service = filterListControllerService;

list.items = service.getItems();
list.clog = function(){
	console.log(this.items.length);
}

}

function filterListControllerService(){
var service = this;

var items = [
	{
		'name': 'Meteor Crater',
		'description': 'Meteor impact site with a small museum',
		'image' : 'images/meteorcrater.jpg',
		'alt' : 'Meteor Crater'
	},
	{
		'name': 'Grand Canyon Village',
		'description': 'Canyon',
		'image' : 'images/gcv.jpg',
		'alt' : 'Grand Canyon Village'
	},
	{
		'name': 'Montezuma Castle National Monument',
		'description': 'Preserved cliff dwellings of the Sinagua',
		'image' : 'images/mc.jpg',
		'alt' : 'Montezuma Castle National Monument'
	},
	{
		'name': 'Saguaro National Park',
		'description': 'Saguaro cacti and ancient petroglyphs',
		'image' : 'images/snp.jpg',
		'alt' : 'Saguaro National Park'
	},
	{
		'name': 'Monument Valley',
		'description': 'Tribal park with red rock buttes & mesas',
		'image' : 'images/mv.jpg',
		'alt' : 'Monument Valley'
	},
	{
		'name': 'Antelope Canyon',
		'description': 'Canyon',
		'image' : 'images/ac.jpg',
		'alt' : 'Antelope Canyon'
	},
	{
		'name': 'Havasu Falls',
		'description': 'Waterfall',
		'image' : 'images/hf.jpg',
		'alt' : 'Havasu Falls'
	},
	{
		'name': 'Lake Powell',
		'description': 'lakes, marinas, canyons, jet ski and camping',
		'image' : 'images/lp.jpg',
		'alt' : 'Lake Powell'
	},
	{
		'name': 'Titan Missile Museum',
		'description': 'Former missile silo turned museum',
		'image' : 'images/tmm.jpg',
		'alt' : 'Titan Missile Museum'
	},
	{
		'name': 'The Wave',
		'description': 'Unique rock formation accessed by trails',
		'image' : 'images/tw.jpg',
		'alt' : 'The Wave'
	},
	{
		'name': 'Beaver Falls',
		'description': 'Cascading pools over limestone terraces',
		'image' : 'images/bf.jpg',
		'alt' : 'Beaver Falls'
	},
	{
		'name': 'Horseshoe Bend',
		'description': 'Horseshoe shaped bend in colorado river',
		'image' : 'images/hb.jpg',
		'alt' : 'Horseshoe Bend'
	}
];

service.getItems = function(){
	return items;
}

}
})();
