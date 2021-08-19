import Navbar from "./components/Navbar";
import BlogScreen from "./screens/BlogScreen";
import FooterScreen from "./screens/FooterScreen";
import HowItWorksScreen from "./screens/HowItWorksScreen";
import LandingScreen from "./screens/LandingScreen";
import PopularDishesScreen from "./screens/PopularDishesScreen";
import PopularScreen from "./screens/PopularScreen";
import SpecialScreen from "./screens/SpecialScreen";

function App() {
  return (
    <>
      <Navbar />
      <LandingScreen />
      <PopularScreen />
      <HowItWorksScreen />
      <PopularDishesScreen />
      <SpecialScreen />
      <BlogScreen />
      <FooterScreen />
    </>
  );
}

export default App;
