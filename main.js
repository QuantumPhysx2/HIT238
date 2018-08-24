if ("serviceWorker" in navigator) {
	window.addEventListener("load", function() {
		navigator.serviceWorker.register("gimble.js").then(function(registration) {
			console.log("Success", registration.scope);
		}, function(err) {
			console.log("Fail", err);
		})
	})
};
