import { Header, Footer } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyle, { Wrapper } from "./GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default App;
