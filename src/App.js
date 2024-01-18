import React from "react";
import "./App.css";

import { createWorkerFactory, useWorker } from "@shopify/react-web-worker";

const createWorker = createWorkerFactory(() => import("./worker"));
const worker = createWorker();
const result = await worker.hello("Demo");

function App() {
  // this works too within the
  const worker = useWorker(createWorker);
  const runOnce = React.useRef(false);
  const asyncResult = React.useRef(null);
  const [result2, setResult2] = React.useState(null);

  if (!runOnce.current) {
    runOnce.current = true;
    (async () => {
      // does run 👇
      await worker.hello("Demo 2");
    })();
  }

  // I did not get it to work inside useEffect unfortunately

  return (
    <>
      <h1>Workers tests</h1>
      <p>Worker 1 result: {result}</p>
    </>
  );
}

export default App;
