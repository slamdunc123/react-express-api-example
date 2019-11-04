import React, { useState, useEffect } from 'react';

// http
import axios from 'axios';

const Items = () => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		axios.get('api/items').then(res => {
			const itemsData = res.data;
			console.log(itemsData);
			setItems(itemsData);
		});
	}, []);

	return (
		<div>
			{items.length > 0 ? (
				items.map((item, index) => (
					<div key={index}>
						<div>{item.name}</div>
					</div>
				))
			) : (
				<h5>No items</h5>
			)}
		</div>
	);
};

export default Items;
