import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="pt-20"> {/* Top padding to offset fixed navbar */}
        <Hero />
        {/* Add more sections here like Features, Services, Demos, etc. */}
      </main>
    </div>
  );
}

export default App;
