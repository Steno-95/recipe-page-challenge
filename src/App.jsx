import Card from "./components/Card/Card";
import Footer from "./Footer";

function App() {
  return (
    <div className="bg-[var(--main-bg)] flex flex-col items-center min-h-[100vh] ">
      <div className="md:my-20">
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
