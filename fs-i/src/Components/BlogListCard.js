import "../App.css";


const BlogListCard = (props) => {
	return (
		<div>
			<h2>{props.blog.title}</h2>
			<p>{props.blog.author}</p>
			<p>{props.blog.text}</p>
		</div>
	);
};

export default BlogListCard;
