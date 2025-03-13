const welcome = {
  greeting: "Hi",
  title: "React",
};
function App() {
  return (
    <div>
      <h1>
        {welcome.greeting} {welcome.title}{" "}
      </h1>
      <label htmlFor="search">Search</label>
      <input type="text" id="search" />
    </div>
  );
}

export default App;
