import Layout from "./components/Layout";
import MapComponent from "./components/MapComponent";

function App() {
  return (
    <Layout>
      <div className="dark:bg-zinc-900 bg-white w-full h-screen flex justify-center items-center">
        <MapComponent />
      </div>
    </Layout>
  );
}

export default App;
