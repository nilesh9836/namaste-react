// const header = React.createElement("h1", {
//     id: "heading"
// }, "Test 1");
// //React ELement(Object) => HTML(Browser Understand)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);

//const div = React.createElement("div",{id: "parent"},React.createElement("div",{id: "child"},"I'm inside child"));
const div = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" }, "I'm inside child1"),
    React.createElement("div", { id: "child" }, "I'm inside child2")]);//
const root = ReactDOM.createRoot(document.getElementById("root"));
//render replace the root
root.render(div);
