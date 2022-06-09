import './App.css';

// import logo from './logo.svg';
import './App.css';
import Ethos from "./components/Ethos/Ethos";
import Info from "./components/Info/Info";
import Navbar from "./components/Navbar/Navbar";
import Story from "./components/Story/Story";
import Roadmap from "./components/Roadmap/Roadmap";
import Qtion from "./components/Qtion/Qtion";
import Levels from "./components/Levels/Levels";
import Team from "./components/Team/Team";
import JoinUs from "./components/JoinUs/JoinUs";
import Footer from "./components/Footer/Footer";
import Collection from "./components/Collection/Collection";



// }
const App = () => (
    <div>
      <Navbar />
      <Collection />
      <Info />
      <Ethos />
      <Story />
      <Roadmap />
      <Qtion />
      <Levels />
      <Team />
      <JoinUs />
      <Footer />
    </div>
);
export default App;

// export default App;
