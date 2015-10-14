$(document).ready(function() {
	var songsUrls = [
		"https://www.youtube.com/watch?v=jofNR_WkoCE", // What Does The Fox Say?
		"https://www.youtube.com/watch?v=9bZkp7q19f0", // PSY - GANGNAM STYLE
		"https://youtu.be/SkTt9k4Y-a8?t=2m19s", // LMFAO - Sorry For Party Rocking
		"https://youtu.be/PWgvGjAhvIw?t=1m7s", // OutKast - Hey Ya!
		"https://youtu.be/otCpCn0l4Wo?t=14s", // MC Hammer - U Can't Touch This
		"https://youtu.be/gy1B3agGNxw?t=51s", // Epic Sax Guy
		"https://youtu.be/vTIIMJ9tUc8?t=27s", // Tônico com Guaraná
		"https://www.youtube.com/watch?v=5NV6Rdv1a3I", // Daft Punk - Get Lucky
		"https://youtu.be/y6120QOlsfU?t=30s", // darude sandstorm
		"https://youtu.be/Qkuu0Lwb5EM?t=19s", // who let the dogs out
		"https://www.youtube.com/watch?v=4O9OCrkSLzs" // When mom isn't home
	];

	var size = songsUrls.length;

	$(".js-generate-song-button").on("click", function() {
		var index = Math.floor(Math.random() * size);
		var url = songsUrls[index];
		window.open(url);
	});
});
