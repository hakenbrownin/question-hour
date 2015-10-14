$(document).ready(function() {
	var songsUrls = [
		"https://www.youtube.com/watch?v=jofNR_WkoCE",
		"https://www.youtube.com/watch?v=9bZkp7q19f0",
		"https://www.youtube.com/watch?v=y6Sxv-sUYtM",
 		"https://www.youtube.com/watch?v=NdJQopRuH1E",
		"https://youtu.be/SkTt9k4Y-a8?t=2m19s",
 		"https://youtu.be/PWgvGjAhvIw?t=1m7s",
 		"https://youtu.be/otCpCn0l4Wo?t=14s"
	];

	var size = songsUrls.length;

	$(".js-generate-song-button").on("click", function() {
		var index = Math.floor(Math.random() * size);
		var url = songsUrls[index];
		window.open(url);
	});
});