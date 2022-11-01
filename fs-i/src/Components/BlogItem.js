import "../App.css";

const BlogItem = (props) => {
	return (
		<div className="blog-item">
			<h2>{props.title}</h2>
			<p>{props.text}</p>
		</div>
	);
};

export default BlogItem;
