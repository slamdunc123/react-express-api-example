import React, { useState, useEffect } from 'react';

// http
import axios from 'axios';

// css
import './Items.scss';

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
			<table>
				<thead>
					<tr>
						<td>Name</td>
						<td>Description</td>
					</tr>
				</thead>
				<tbody>
					{items.length > 0 &&
						items.map((item, index) => (
							<tr key={index}>
								<td>{item.name}</td>
								<td>{item.description}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default Items;
