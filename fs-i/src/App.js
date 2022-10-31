import "./App.css";
import BlogList from "./Components/BlogList";
import { useState, useEffect } from "react";

let URL = process.env.REACT_APP_URL_ENDPOINT;
console.log(URL);

function App() {
	const [blogs, setBlogs] = useState([]);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(URL)
			.then((res) => {
				if (!res.ok) {
					throw Error("Could not fetch the data for that resource");
				}
				return res.json();
			})
			.then((data) => {
				setBlogs(data);
				setIsPending(false);
				setError(null);
			})
			.catch((err) => {
				setIsPending(false);
				setError(err.message);
			});
	}, []);

	return (
		<div className="App">
			<BlogList blogs={blogs} />
		</div>
	);
}

export default App;
