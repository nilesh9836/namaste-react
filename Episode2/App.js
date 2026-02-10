// const header = React.createElement("h1", {
//     id: "heading"
// }, "Test 1");
// //React ELement(Object) => HTML(Browser Understand)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);

//const div = React.createElement("div",{id: "parent"},React.createElement("div",{id: "child"},"I'm inside child"));
import React from "react";
import ReactDOM from "react-dom/client";
const heading1 = <h1>Heading JSX</h1>;
const Title = () => (<h1>Title </h1>);
const Heading2 = () =>{
   return <div>
    {heading1}
    <Title/>
    {Title()}
     <h2>Heading from component✅</h2>
    </div>
};
// const div = React.createElement("div", { id: "parent" },
//     [React.createElement("div", { id: "heading",key:"01" }, "I'm inside child1"),
//     React.createElement("div", { id: "heading",key: "02" }, "I'm inside child2")]);//
const root = ReactDOM.createRoot(document.getElementById("root"));
//render replace the root
root.render(<Heading2/>);
