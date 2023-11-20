import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
		<div style={{ display: "flex", gap: "1rem", flexWrap:'wrap', flexDirection: "column" }}>
			<div>
				<Link to='add'>
					<button>Add Form</button>
				</Link>
			</div>
			<Outlet />
		</div>
	)
};

export default RootLayout;