import steveImage from "../src/assets/Steve_Jobs_Headshot_2010-CROP_(cropped_2).jpg";
import navImage from "../src/assets/Screenshot (93).png";
import Form from "./Form.jsx";

export default function Steve() {
  return (
    <>
      <nav>
        <img src={navImage} />
        <ul id="navebarList">
          <li>
            <a href="./index.html">Home</a>
          </li>
          <li>
            <a href="CounterPage">Counter</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
      <section id="mainContent">
        <img id="stevePng" src={steveImage} />
        <div id="personContent">
          <h1>Steve jobs</h1>
          <h3>"Think different"</h3>
          <p>
            Steven Paul Jobs was an American businessman, inventor, and investor
            best known for co-founding the technology giant Apple Inc. Jobs was
            also the founder of NeXT and chairman and majority shareholder of
            Pixar.
          </p>
          <button>Buy an iPhone</button>
        </div>
      </section>
      <Form name="Vishnu" />
    </>
  );
}
