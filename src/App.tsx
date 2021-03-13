import "./styles.css";
import { useObservable, useEventCallback } from "rxjs-hooks";
import { interval } from "rxjs";
import { map } from "rxjs/operators";

export default function App() {
  const value = useObservable(() => interval(500).pipe(map((val) => val * 3)));

  const [clickCallback, [description, x, y]] = useEventCallback(
    (event$) =>
      event$.pipe(
        map((event: any) => {
          return [event.target.innerHTML, event.clientX, event.clientY];
        })
      ),
    ["nothing", 0, 0]
  );

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <h1>Incremental number: {value}</h1>

      <h1>
        click position: {x}, {y}
      </h1>
      <h1>"{description}" was clicked.</h1>
      <button onClick={clickCallback}>click me</button>
      <button onClick={clickCallback}>click you</button>
      <button onClick={clickCallback}>click him</button>
    </div>
  );
}
