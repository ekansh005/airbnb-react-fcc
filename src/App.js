import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container">
        <Hero></Hero>
        <section className="experiences">{cards}</section>
      </div>
    </div>
  );
}

export default App;
