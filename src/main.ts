import "./style.css";
import "./basic/1.ts";
import "./basic/2.ts";
import "./basic/3.ts";
import "./basic/4.ts";
import "./basic/5.ts";
import "./basic/6.ts";
import "./basic/7.ts";
import "./generics/1.ts";
import "./generics/2.ts";
import "./generics/3.ts";
import "./generics/4.ts";
import "./generics/5.ts";
import "./generics/6.ts";

import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
