if ("serviceWorker" in navigator) {
	window.addEventListener("load", function() {
		navigaator.serviceWorker.register("/main.js").then(function(registration) {
			console.log("Success", registration.scope);
		}, function(err) {
			console.log("Fail", err);
		})
	})
};
