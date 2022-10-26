# Fullstack-Intro useEffect and fetch
- _Approach_: For this assignment we are going to be leveraging the useEffect hook from react and the fetch API to retrieve a list of blogs from mockapi and display them to the page. The useEffect hook will be used to control when the fetch API is called inside of a react component.


## Instructions

1) Project Setup
- Create a new github repository called fullstack-intro and add the link to populi
- Clone the repository and initialize it by running ```'npx create-react-app .'``` inside the project directory and running ```'npm i react-router-dom'``` to install react router.
- Open App.js and replace the initial code with the following code:

```
import "./App.css";

const sampleBlogs = [
  {
    createdAt: "2022-06-30T04:03:07.069Z",
    author: "Marion Roberts DDS",
    text: "Vitae quaerat nostrum dolor. Eius non totam autem unde ea consequatur quia. Laborum exercitationem sed.\nQui quam corrupti voluptatem autem. Voluptatum in et voluptas quisquam id doloremque nostrum unde. Consequuntur ea qui.\nSed consequuntur voluptas nemo ea laborum neque distinctio quo iusto. Temporibus aut quisquam. Laboriosam fugit eum sint corporis sequi minus iste molestiae quos. Quae aut earum quasi facilis hic et.",
    title: "sapiente",
    id: "1",
  },
  {
    createdAt: "2022-06-30T04:16:20.950Z",
    author: "Dr. Martha Herman",
    text: "Et consequatur earum et in quam. Tenetur ipsam dolores. Eius aperiam est.\nRerum laborum ut. Accusantium amet qui impedit laudantium. Aut et minus perspiciatis voluptates. Mollitia modi maiores non. Qui animi assumenda distinctio repellendus reiciendis tenetur esse quia magnam. Quo natus minus sed.\nEa quod nulla hic est et libero enim et. Occaecati voluptas ut minus impedit aperiam. Dolore atque cumque ut accusamus enim. Dicta qui minima et doloremque quam veniam voluptatibus. Nihil repellat et. Laboriosam quia voluptatem.",
    title: "nemo",
    id: "2",
  },
  {
    createdAt: "2022-06-30T09:57:45.633Z",
    author: "Francis McDermott",
    text: "Consequatur nostrum adipisci doloribus commodi. Dolore enim minus. Assumenda sint molestiae. Voluptatem repellat ad. Quasi incidunt accusantium ipsum voluptate aut modi.\nSed id labore recusandae commodi. Ullam neque ab. At similique veritatis. Voluptas similique deserunt nihil praesentium qui. Dolore velit ea doloremque quae quo modi.\nOccaecati id nobis architecto ut beatae et. Consequuntur aut eveniet cum optio. Non dolores asperiores optio consequatur sequi.",
    title: "omnis",
    id: "3",
  },
  {
    createdAt: "2022-06-30T01:29:57.446Z",
    author: "Miss Rickey Schmidt",
    text: "In corrupti adipisci. Qui eaque voluptatem at. Libero et omnis ullam. Soluta quas provident iste autem quae saepe et dolor.\nDolores quos voluptate quibusdam qui harum inventore. Quae pariatur reprehenderit dignissimos non qui itaque veniam quod magni. Deserunt veritatis qui natus eligendi. Aut adipisci eum voluptatem libero similique. Aut delectus nam. Ullam dolor nostrum consectetur aut sit illum magni.\nCum nemo harum earum sed. Nobis et in cumque placeat. Odio alias sint ab. Ratione amet fuga vitae aut dolorum.",
    title: "expedita",
    id: "4",
  },
  {
    createdAt: "2022-06-29T19:17:08.325Z",
    author: "Marcella Jacobson",
    text: "Voluptatibus laboriosam culpa ut aut ea ipsum alias itaque. Placeat qui et. Quam ipsa non unde fugiat cupiditate dignissimos.\nUt ut rerum veniam sit deserunt. Molestiae ut quis molestiae quis autem aliquid. Non beatae sequi minus voluptatem enim accusantium quia dolorem.\nDolorum vel aperiam est pariatur id. Sunt et nam. Sit eligendi dolorem ullam dicta quo ipsa omnis. Assumenda accusantium tempora qui temporibus cum rerum error necessitatibus. Nisi consectetur fuga qui nisi eaque maxime quia pariatur.",
    title: "similique",
    id: "5",
  },
];

const App = () => {
	return (
		<div className="App-header">
		</div>
	);
}

export default App;
```

2) Implement Blog List
- _Approach_: Before implementing the useEffect and fetch functionality, we will use sampleBlogs to scaffold out the app UI first. For simplicity, we will create all the components in the ./src/App.js file.
- Create a new state variable in ```<App/>``` called blogs, initialized to sampleBlogs (or a copy of sampleBlogs using the spread operator). [1]
- Create two new components ```<BlogList/>``` and ```<BlogListCard/>```. Both should have simple enclosing div's in the JSX return statement for now. [2]
- Add an instance of ```<BlogList/>``` to the JSX of ```<App/>```.
- Pass the blogs state variable in as a prop to ```<BlogList/>``` in the JSX of ```<App/>```. [3]
- In the JSX of ```<BlogList/>```, add a map function that maps through the blogs array coming from the props and return a ```<BlogListCard/>``` in the map for every blog in the array of blogs. Additionally in the map, pass in the blog parameter as a prop to the ```<BlogListCard/>```. [4]
- In ```<BlogListCard/>```, 
	- Display the title of the blog coming in through props in an h2 tag.
	- Display the author of the blog coming in through props in a p tag.
	- Display the text of the blog coming in through props in a p tag.
- If you implemented the above correctly, you should be able to visit localhost:3000 and see the sample blogs rendered to the page as a list of ```<BlogListCard/>```'s.

### High Level
3: Implement Fetch and useEffect
- _Approach_: Now that we have the sampleBlogs displaying to the page, we are going to fetch the actual blog list from the mock api endpoint. 
- Create a new file ./.env	
	- _Note_: This file does NOT go into the ./src folder. It should be in the root folder on the same level as package.json.
- In ./.env, add the following environment variable
	- REACT_APP_URL_ENDPOINT=https://62a8b06d943591102ba80fee.mockapi.io
	- _Important_: Specifically for react applications, all environment variables MUST be prefixed with REACT_APP.
- In the global scope above ```<App/>```, create a new variable called urlEndpoint and set it equal to the REACT_APP_URL_ENDPOINT environment variable.
- In the body of ```<App/>```, add an invocation of the useEffect hook with an empty function passed in as the first argument and an empty array passed in as the second.
	- _Note_:
		- The empty function passed into useEffect is known as an effect function.
		- The empty array is called the dependency array and is necessary to prevent repeated calls of the effect function every time ```<App/>``` renders. If we did not have the empty array here (try taking it out once you have the app up and running to see what happens), the effect function would trigger every time ```<App/>``` rerenders which will happen every time setBlogs is called. This triggering an endless loop of rerendering.
- Inside the effect function you just created, write a new async function called fetchBlogs. Fetch blogs should:
	- Invoke the fetch api with the url {urlEndpoint}/blogs and assign that to a variable called result.
		- _Note_: This awaited invocation of fetch is going to make an HTTP request to the url string passed into the fetch() function. The variable result will be an object containing the HTTP result of the request; which includes the response payload as well as information of the response itself. 
	- Invoke the .json() method on result and assign that to a variable called blogs.
		- _Note_: The result.json() method retrieves the actual data/payload of the response and assigns it to the variable result. 
	- Call the setBlogs setter function on blogs.
	- _Suggestion_: console.log() result and blogs to see the result of the fetch() call.
- Inside the effect function and below the fetchBlogs function definition, call fetchBlogs()
- If you implemented the above correctly, you should see the entire list of 50 blog posts fetched from mockapi rendered to the page. 

### Expanded
3: Implement Fetch and useEffect
- _Approach_: Now that we have the sampleBlogs displaying to the page, we are going to fetch the actual blog list from the mock api endpoint. 
- Create a new file ./.env	
	- _Note_: This file does NOT go into the ./src folder. It should be in the root folder on the same level as package.json.
- In ./.env, add the following environment variable
	- REACT_APP_URL_ENDPOINT=https://62a8b06d943591102ba80fee.mockapi.io
	- _Important_: Specifically for react applications, all environment variables MUST be prefixed with REACT_APP.
- In the global scope above```<App/>```, create a new variable called urlEndpoint and set it equal to the REACT_APP_URL_ENDPOINT environment variable.[5]
- In the body of ```<App/>```, add an invocation of the useEffect hook with an empty function passed in as the first argument and an empty array passed in as the second. [6]
	- _Note_:
		- The empty function passed into useEffect is known as an effect function.
		- The empty array is called the dependency array and is necessary to prevent repeated calls of the effect function every time ```<App/>``` renders. If we did not have the empty array here (try taking it out once you have the app up and running to see what happens), the effect function would trigger every time ```<App/>``` rerenders which will happen every time setBlogs is called. This triggering an endless loop of rerendering.
- Inside the effect function you just created, write a new async function called fetchBlogs. [7]
- Inside the fetchBlogs async function,	
	- Create a new variable called result and set it equal to await fetch() with the string {urlEndpoint}/blogs passed in as the argument. [8]
		- _Note_: This awaited invocation of fetch is going to make an HTTP request to the url string passed into the fetch() function. The variable result will be an object containing the HTTP result of the request; which includes the response payload as well as information of the response itself. 
	- Create a new variable below result and set it equal to await result.json() [9]
		- _Note_: The result.json() method retrieves the actual data/payload of the response and assigns it to the variable result. 
	- Call setBlogs with the result variable passed in as the argument.
- Just under the fetchBlogs async function and still inside the effect function, invoke fetchBlogs.[10]
- If you implemented the above correctly, you should see the entire list of 50 blog posts fetched from mockapi rendered to the page.
​
## Code References:
- [1]
```
const [blogs, setBlogs] = useState([...sampleBlogs]);
```
​
- [2]
```
const BlogListCard = (props) => {
  return (
		<div>
		</div>
	;
};
​
const BlogList = (props) => {
  return (
    <div>
    </div>
  );
};
```
​
- [3]
```
<BlogList blogs={blogs} />
```
​
- [4]
```
{blogs.map((blog, index) => {
	return <BlogListCard blog={blog} key={index} />;
})}
```
​
- [5]
```
const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;
```
​
- [6]
```
useEffect(()=>{})
```
​
- [7]
```
const fetchBlogs = async () => {
​
 }
```
​
- [8]
```
const result = await fetch(
		`${urlEndpoint}/blogs`
	);
```
​
- [9]
```
const blogs = await result.json();
```
​
- [10]
```
useEffect(() => {
	const fetchBlogs = async () => {
		const result = await fetch(
			`${urlEndpoint}/blogs`
		);
		const blogs = await result.json();
		console.log(blogs)
		setBlogs(blogs);
	};
	fetchBlogs();
}, []);
```
