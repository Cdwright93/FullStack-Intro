import BlogListCard from "./BlogListCard";

const BlogList = ({ blogs }) => {
	return (
		<div className="blog-list">
			{blogs.map((blog) => (
				<div className="blog-preview" key={blog.id}>
					<BlogListCard blog={blog} />
				</div>
			))}
		</div>
	);
};

export default BlogList;
