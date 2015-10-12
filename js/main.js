$(document).ready(function() {

	var songsUrls = [
		"https://www.youtube.com/watch?v=jofNR_WkoCE",
		"https://www.youtube.com/watch?v=9bZkp7q19f0"
	];

	var size = songsUrls.length;

	$(".js-generate-song-button").on("click", function() {		
		var index = Math.floor(Math.random() * size);
		var url = songsUrls[index];

		window.open(url);
	});	

});