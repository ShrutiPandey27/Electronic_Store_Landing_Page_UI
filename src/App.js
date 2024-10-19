
import './App.css';
import PreNavbar from './components/PreNavBar';
import Navbar from './components/Navbar.js';
import{BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu from "./components/HotAccMenu.js"
import HotAccessories from "./components/HotAccessories.js"
import ProductReview from "./components/ProductReview.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"

function App() {
  return (
   
    <Router>
<PreNavbar/>

<Navbar/>
<Slider start={data.banner.start}/>
<Offers offer={data.offer}/>
<Heading text="star product"/>
<StarProduct starProduct={data.starProduct}/>
<Heading  text="hot accessories"/>
<HotAccessoriesMenu/>
{/* <Route exact path="/music">
  <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>
</Route> */}
<Routes>
<Route exact path="/music"  element = {<HotAccessories music = {data.hotAccessories.music} musicCover = {data.hotAccessoriesCover.music}/>}/>
</Routes>

<Routes>
<Route exact path="/smartDevice"  element = {<HotAccessories smartDevice = {data.hotAccessories.smartDevice} smartDeviceCover = {data.hotAccessoriesCover.smartDevice}/>}/>
</Routes>

<Routes>
<Route exact path="/home"  element = {<HotAccessories home = {data.hotAccessories.home} homeCover = {data.hotAccessoriesCover.home}/>}/>
</Routes>

<Routes>
<Route exact path="/lifeStyle"  element = {<HotAccessories lifeStyle = {data.hotAccessories.lifeStyle} lifeStyleCover = {data.hotAccessoriesCover.lifeStyle}/>}/>
</Routes>

<Routes>
<Route exact path="/mobileAccessories"  element = {<HotAccessories mobileAccessories = {data.hotAccessories.mobileAccessories} mobileAccessoriesCover = {data.hotAccessoriesCover.mobileAccessories}/>}/>
</Routes>


<Heading text="product reviews"/>
<ProductReview productReviews={data.productReviews}/>


<Heading text="videos"/>
<Videos videos={data.videos}/>

<Heading text="IN THE PRESS"/>

<Banner banner={data.banner}/>


</Router>
  );
}

export default App;
