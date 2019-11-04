const express = require('express');

const app = express();

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

// data
let items = require('./items.json');

// routes

// get all items
app.get('/api/items', (req, res) => {
	res.json(items);
});

// get an item
app.get('/api/items/:id', (req, res) => {
	const paramId = JSON.parse(req.params.id);
	const item = items.find(item => item.id === paramId);
	if (item) {
		res.json(item);
	} else {
		res.json({
			message: `item ${paramId} doesn't exist`
		});
	}
});
