/* eslint-disable no-unused-vars */
import "./App.css";
import BlogList from "./Components/BlogList";
import { useState, useEffect } from "react";
import OptionBar from "./Components/OptionBar";

let URL = process.env.REACT_APP_URL_ENDPOINT;
console.log(URL);

function App() {
	const [blogs, setBlogs] = useState([]);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const [sortBy, setSortBy] = useState("createdAt");
	const [order, setOrder] = useState("desc");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [search, setSearch] = useState("");

	const fetchBlogs = async () => {
		setLoading(true);
		try {
			const res = await fetch(
				`${URL}/blogs?_limit=${limit}&_page=${page}&_sortby=${sortBy}&_order=${order}`
			);
			const data = await res.json();
			setBlogs(data);
			setLoading(false);
		} catch (err) {
			setError(err.message);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetch(
			`${URL}/blogs?_limit=${limit}&_page=${page}&_sort=${sortBy}&_order=${order}`
		)
			.then((res) => res.json())
			.then((data) => {
				setBlogs(data);
			});
	}, [limit, page, sortBy, order]);

	const handleSearch = (limit, page, sortBy, order) => {
		setLimit(limit);
		setPage(page);
		setSortBy(sortBy);
		setOrder(order);
	};

	return (
		<div className="App">
			<h1>Blog List</h1>
			<BlogList blogs={blogs} />
		</div>
	);
}

export default App;
