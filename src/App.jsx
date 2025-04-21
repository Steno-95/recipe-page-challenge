import Card from "./components/Card/Card";
import Footer from "./Footer";

function App() {
  return (
    <div className="bg-[var(--main-bg)] flex flex-col items-center min-h-[100vh]">
      <Card />
      <Footer />
    </div>
  );
}

export default App;
