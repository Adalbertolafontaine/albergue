import './style.css'

import { mapa } from "./mapas";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class = "">
   <div class="">
    <aside class= ""></aside>
    <main class= "" id="map"></main>
   </div>
  </div>
`
 mapa()
//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
