import BlogListCard from "./BlogListCard";
import "../App.css";

const BlogList = ({ blogs }) => {
	return (
		<ol className="blog-ordered-list">
			{blogs.map((blog) => (
					<li className='blog-item' key={blog.id}>
						<BlogListCard blog={blog} />
					</li>
			))}
		</ol>
	);
};

export default BlogList;
