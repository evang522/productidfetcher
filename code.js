$.getJSON('http://localhost/api/studio')
	.then(response => {
		const id = response._embedded.items[0].products[0].id;
		window.location.replace(`http://localhost:3000/studios/checkout/${id}`);

	});
