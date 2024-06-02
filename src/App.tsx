import { Link, Route, Routes } from "react-router-dom";
import {
  AltText,
  Contrast,
  EmptyButtons,
  EmptyLinks,
  Labels,
  Landing,
  Lang,
} from "./pages";
import { Steps } from "./components/Steps";

function App() {
  return (
    <>
      <header>
        <h1 lang="en">Testing One Million Project</h1>
        <Link to="/" className="logo">
          Inicio
        </Link>
        <Steps />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="alt" element={<AltText />} />
          <Route path="contrast" element={<Contrast />} />
          <Route path="labels" element={<Labels />} />
          <Route path="empty-buttons" element={<EmptyButtons />} />
          <Route path="empty-links" element={<EmptyLinks />} />
          <Route path="lang" element={<Lang />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
