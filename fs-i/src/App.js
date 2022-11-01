/* eslint-disable no-unused-vars */
import "./App.css";
import { useState, useEffect } from "react";
import BlogItem from "./Components/BlogItem";

let URL = process.env.REACT_APP_URL_ENDPOINT;
console.log(URL);

//taking the URL from the .env file we will retrieve blogs from the mock api
// once we get the initial blog data it will be displayed on the page in a standard ordered list
// we will also make a component that will allow the user to sort, filter, and search the blogs
// we will use a useEffect hook to make the api call and store the data in a state variable

function App() {
	const [blogs, setBlogs] = useState([]);
	const [search, setSearch] = useState("");
	const [sort, setSort] = useState("asc");
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(10);

	useEffect(() => {
		fetch(`${URL}?_page=${page}&_limit=${limit}&_sort=title&_order=${sort}`)
			.then((res) => res.json())
			.then((data) => {
				setBlogs(data);
			});
	}, [sort, page, search, limit]);

	const handleSearch = (e) => {
		setSearch(e.target.value);
	};
	const handleSort = (e) => {
		setSort(e.target.value);
	};
	const handlePage = (e) => {
		setPage(e.target.value);
	};
	const handleLimit = (e) => {
		setLimit(e.target.value);
	};

	const optionBar = (
		<div className="option-bar">
			<input
				type="text"
				placeholder="Search"
				value={search}
				onChange={handleSearch}
			/>
			<select value={sort} onChange={handleSort}>
				<option value="asc">Ascending</option>
				<option value="desc">Descending</option>
			</select>
			<select value={page} onChange={handlePage}>
				<option value="1">Page 1</option>
				<option value="2">Page 2</option>
				<option value="3">Page 3</option>
				<option value="4">Page 4</option>
				<option value="5">Page 5</option>
			</select>
			<select value={limit} onChange={handleLimit}>
				<option value="10">Limit 10</option>
				<option value="20">Limit 20</option>
				<option value="30">Limit 30</option>
				<option value="40">Limit 40</option>
				<option value="50">Limit 50</option>
			</select>
		</div>
	);
	return (
		<div className="App">
			<h1>Blog List</h1>
			<ol className="blog-ordered-list">
				{optionBar}
				{blogs.map((blog) => {
					console.log(blog);
					return (
						<li key={blog.id}>
							<BlogItem title={blog.title} text={blog.text} />
						</li>
					);
				})}
			</ol>
		</div>
	);
}

export default App;
