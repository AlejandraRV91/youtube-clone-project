/** @format */

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/views/Home";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
			</Routes>
		</Router>
	);
}

export default App;
