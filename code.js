$.getJSON('http://localhost/api/studio')
	.then(response => {
		const id = response._embedded.items[0].products[0].id;
		$('.checkout-link').html(`<a href="http://localhost:3000/studios/checkout/${id}">Here it is</a>`);

	});
