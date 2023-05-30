/** @format */

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Error404 from "./components/pages/Errors";
import Home from "./components/pages/Home";
import VideosIndex from "./components/pages/VideosIndex";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="*" element={<Error404 />} />
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/videos/:identificador_de_video" Component={VideosIndex} />
			</Routes>
		</Router>
	);
}

export default App;