import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Category from "./components/Category";
import Resipe from "./pages/Resipe";

function App() {
  return (
    <div>
      <Header />
      <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/meal/:id" element={<Resipe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
