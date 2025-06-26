import Header from "./Header.js"
import Acca from "./Acca.js"
import KickOff from "./kickOff.js"
import Learn from "./Learn.js"
import Placement from "./Placement.js"
import Wcu from "./Wcu.js"
import Eligibility from "./Eligibility.js"
import Footer from "./Footer.js"
import "./responsive.css"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="section" id="acca">
          <Acca />
        </section>

        <section className="section" id="why-choose-us">
          <Wcu />
        </section>

        <section id="eligibility">
          <Eligibility />
        </section>

        <section className="section" id="learn">
          <Learn />
        </section>

        <section  id="placement">
          <Placement />
        </section>

        <section className="section" id="kick-off">
          <KickOff />
        </section>


      </main>
      <section id="contact-us">
        <Footer />
      </section>
    </div>
  );
}

export default App;
