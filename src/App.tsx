import './App.css';
import image2 from "../src/assets/images/card2.svg";
import image3 from "../src/assets/images/card3.svg";
import image from "../src/assets/images/card.svg";
import {StyledCard} from './styledCard/StyledCard';

function App() {
    return (
        <div className="App">

             <StyledCard src={image} title="Headline" text="Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.."/>
             <StyledCard src={image2} title="Hello" text="Sit sit sapien sit tempusrisu ut."/>
             <StyledCard src={image3} title="Line" text="Faucibus. Faucibus ut."/>

        </div>
    );
}

export default App;
