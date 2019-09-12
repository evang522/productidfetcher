const utilities = {
	getCheckoutPathWithId: (id) =>`/checkout/?products[0][id]=${id}&products[0][quantity]=1`,
}

$.getJSON('http://localhost/api/studio')
	.then(response => {
		const id = response._embedded.items[0].products[0].id;

		// window.location.replace(`http://localhost:3000/studios/checkout/${id}`);

		$('.studio-checkout-link').html(`
		<a href=http://localhost:3000${utilities.getCheckoutPathWithId(id)}>
			<button>Studio Product Checkout </button>
		</a>
		`)

	})
	.catch(err => {
		$('studio-checkout-link').text('...Something didn\'t work out fetching studio link');
	})


$.getJSON('http://localhost/api/event')
	.then(response => {
		const id = response._embedded.items[5].nextEventOccurrence.id;
		return $.getJSON('http://localhost/api/eventoccurrence/' + id);
	})
	.then(response => {
		const id = response.products[0].id
		$('.event-checkout-link').html(`
		<a href=http://localhost:3000${utilities.getCheckoutPathWithId(id)}>
			<button>Free Event Product Checkout</button>
		</a>
		`)
	})
	.catch(err => {
		$('event-checkout-link').text('...Something didn\'t work out fetching event link');
	})

$.getJSON('http://localhost/api/event')
	.then(response => {
		const id = response._embedded.items[1].nextEventOccurrence.id;
		return $.getJSON('http://localhost/api/eventoccurrence/' + id);
	})
	.then(response => {
		const id = response.products[0].id
		$('.paid-event-checkout-link').html(`
		<a href=http://localhost:3000${utilities.getCheckoutPathWithId(id)}>
			<button>Paid Event Product Checkout</button>
		</a>
		`)
	})
	.catch(err => {
		$('.paid-event-checkout-link').text('...Something didn\'t work out fetching paid event link');
	})

