import React from "react";
import { Text } from "react-native";
import { loadComponent } from "./utils/loadComponent";

function System(props) {
  const {
    system,
    system: { remote, url, module },
  } = props;

  if (!system || !remote || !url || !module) {
    return <h2>No system specified</h2>;
  }

  const Component = React.lazy(loadComponent(remote, "default", module, url));

  return (
    <React.Suspense fallback="Loading MicroApp...">
      <Component />
    </React.Suspense>
  );
}

function App() {
  const [system, setSystem] = React.useState({});

  function setApp2() {
    setSystem({
      remote: "app1",
      url: "http://localhost:9000/app1.container.bundle?platform=web",
      module: "./App.js",
    });
  }

  function setApp3() {
    setSystem({
      remote: "app2",
      url: "http://localhost:9001/app2.container.bundle?platform=web",
      module: "./App.js",
    });
  }

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      }}
    >
      <h1>Dynamic System Host</h1>
      <h2>Web Host App</h2>
      <p>
        The Dynamic System will take advantage Module Federation{" "}
        <strong>remotes</strong> and <strong>exposes</strong>. It will not load
        any components or modules that have been loaded already.
      </p>
      <button onClick={setApp2}>Load App 1</button>
      <button onClick={setApp3}>Load App 2</button>
      <div style={{ marginTop: "2em" }}>
        <System system={system} />
      </div>
    </div>
  );
}

export default App;
