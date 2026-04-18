import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Hygiene from "./components/Hygiene";
import Sanitation from "./components/Sanitation";
import Videos from "./components/Videos";
import AIFriend from "./components/AIFriend";
import About from "./pages/About";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />

      <Hygiene />

      <Sanitation />

      <Videos />

      <AIFriend />

      <About />
    </div>
  );
}

export default App;