import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MonComponent from './MonComponent';
import Children from './ChildrenComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));

const name = "John Doe";
const job = "Dev";

root.render(
	<>
		{/* Ce composant est un element react */}
		<Children>
			<MonComponent userName={name} metier={job} />
		</Children>
	</>
);

reportWebVitals();
