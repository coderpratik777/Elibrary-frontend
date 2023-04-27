import MainContainer from "../MainContainer/maincontainer";
import { Adsection , Adsection2 } from "./adsection";
import Footer from "./footer";
import Services from "./services";

function Home() {
  return (
    <div>
      <Adsection/>
      <Services/>
      <MainContainer/>
      <Adsection2/>
      <Footer/>
    </div>
  );
}

export default Home;
