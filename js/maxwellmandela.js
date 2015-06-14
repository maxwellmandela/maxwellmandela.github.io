var maxwellmandela = angular.module("MaxwellMandela", ['lumx']);

maxwellmandela.controller("AboutMeController", function($scope){
	$scope.aboutme = [
		{
			"primary_data":[{
				"name":"Maxwell Mandela",
				"desc":"Hi, I'm Maxwell Mandela, Developer, Designer, blogger, a lil foodie and an everyday student. I read as much as I wish I wrote, and I listen to Hans Zimmer 7hrs a day(I probably don't realize because I code alot)",
				"sub_name":"I'm a social Machine"
			}]
		}
	];

	$scope.iam_a = [
		{
			"job":"Web Developer",
			"color":"icon--red",
			"icon":"mdi-xml"
		},
		{
			"job":"Web/Mobile Designer",
			"color":"icon--blue",
			"icon":"mdi-cellphone-link"
		},
		{
			"job":"a very Curious fast learner",
			"color":"icon--green",
			"icon":"mdi-library"
		}
	];

	$scope.iknow = [
		{"lang":"PHP, MySQL, SQL"},
		{"lang":"CSS3, HTML5, JS"},
		{"lang":"Wordpress(themes+plugins), Codeigniter"},
		{"lang":"Jquery, Bootstrap, Angular Js"}
	];

	$scope.im_into = [
		{
			"like":"Books(Dan Brown)",
			"color":"icon--grey",
			"icon":"mdi-book-open"
		},
		{
			"like":"Sci-fi Films(The Matrix)",
			"color":"icon--black",
			"icon":"mdi-video"
		},
		{
			"like":"Music(Hans Zimmer)",
			"color":"icon--pink",
			"icon":"mdi-music-note"
		}
	];

});

maxwellmandela.controller("ContactController", function($scope){
	$scope.contact_detail = [
		{
			"contact_icon":"mdi mdi-email",
			"color":"icon--red",
			"contact_title":"maxywhyner94@gmail.com"
		},
		{
			"contact_icon":"mdi mdi-email",
			"color":"icon--red",
			"contact_title":"mxmandela@gmail.com"
		},
		{
			"contact_icon":"mdi mdi-phone",
			"color":"icon--green",
			"contact_title":"+254716261703"
		},
		{
			"contact_icon":"mdi mdi-map-marker",
			"color":"icon--blue",
			"contact_title":"Nairobi, Kenya"
		},
	];
});