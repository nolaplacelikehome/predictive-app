import React from 'react'
import { Link } from 'react-router-dom';
import "../../../dist/css/Buttons/HomeButtons.css";

export default function HomeButtons() {
	return (
		<div className='btn-container'>
			<button className='btn btn-filled'><a href="#">Rent Now</a></button>
			<button className='btn btn-outlined'><Link to="list">List a Home</Link></button>
		</div>
	)
}
