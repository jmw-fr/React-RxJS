import "./styles.css";
import { useObservable } from "rxjs-hooks";
import { interval } from "rxjs";
import { map } from "rxjs/operators";

export default function App() {
  const value = useObservable(() => interval(500).pipe(map((val) => val * 3)));

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <h1>Incremental number: {value}</h1>
    </div>
  );
}
