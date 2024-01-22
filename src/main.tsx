import { render } from "preact/compat";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/crawl-testing",
		element: <div>Hello world!</div>,
	},
	{
		path: "/crawl-testing/lower",
		element: <div>Hello from lower.</div>,
	},
]);

// biome-ignore lint/style/noNonNullAssertion: <explanation>
render(<RouterProvider router={router} />, document.getElementById("app")!);
