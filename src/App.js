import Postlist from "./API/Postlist";
import Helmet from "react-helmet";

function App() {
  return (
    <div className="App bg-red-200 h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Time Solat</title>
      </Helmet>
      <Postlist />
    </div>
  );
}

export default App;
