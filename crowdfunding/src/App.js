import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Section1 from "./components/Section1";
import Backers from "./components/Backers";
import About from "./components/About";
import Modal from "./components/Modal"

const  App = () => {
  return (
   <fragment>
     <Header />
     <Showcase />
     <Section1 />
     <Backers />
     <About />
     <Modal />
   </fragment>
  );
}

export default App;
