import Footer from "./components/Footer";
import LeftBody from "./components/LeftBody";
import Navbar from "./components/Navbar";
import RightBody from "./components/RightBody";

import './App.css'

function App() {
  return (
    <div className="align-center h-screen bg-gray-100 px-8">
      {/* Navbar Component */}
      <Navbar />
      {/* content of the body */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
        {/* Left Side Body */}
        <div className="md:col-span-3">
          <LeftBody />
        </div>
        {/* Right Side Body */}
        <div className="md:col-span-2">
          <RightBody />
        </div>
      </div>
      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
