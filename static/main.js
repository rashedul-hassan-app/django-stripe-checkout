console.log("Hello world");

fetch("/config/")
	.then((result) => {
		return result.json();
	})
	.then((data) => {
		const stripe = Stripe(data.publicKey);
	});
