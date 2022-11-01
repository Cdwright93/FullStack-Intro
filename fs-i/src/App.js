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

	return (
		<div className="App">
			<h1>Blog List</h1>
			<ol className="blog-ordered-list">
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
