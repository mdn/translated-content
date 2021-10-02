---
title: 'Window: storage event'
slug: Web/API/Window/storage_event
tags:
  - API
  - Evènement
  - Reference
  - Stockage
  - Stockage Web
  - Window
translation_of: Web/API/Window/storage_event
---
<div>{{APIRef}}</div>

<p>L'événement <strong><code>storage</code></strong> de l'interface {{domxref("Window")}} se déclenche lorsqu'une de stockage (<code>localStorage</code>) a été modifiée dans le contexte d'un autre document.</p>

<table class="properties">
 <thead>
 </thead>
 <tbody>
  <tr>
   <th>Bulles</th>
   <td>Non</td>
  </tr>
  <tr>
   <th>Annulable</th>
   <td>Non</td>
  </tr>
  <tr>
   <th>Interface</th>
   <td>{{domxref("StorageEvent")}}</td>
  </tr>
  <tr>
   <th>Propriété de gestionnaire d'événements</th>
   <td>{{domxref("WindowEventHandlers.onstorage", "onstorage")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<p>Consignez l'élément <code>sampleList</code> sur la console lorsque l'événement <code>storage</code> se déclenche :</p>

<pre class="brush: js">window.addEventListener('storage', () =&gt; {
  // Lorsque le stockage local change, vider la liste sur
  // la console.
  console.log(JSON.parse(window.localStorage.getItem('sampleList')));
});</pre>

<p>La même action peut être réalisée ) l'aide de la propriété du gestionnaire d'événements <code><a href="/en-US/docs/Web/API/WindowEventHandlers/onstorage">onstorage</a></code> :</p>

<pre class="brush: js">window.onstorage = () =&gt; {
  // Lorsque le stockage local change, vider la liste dans
  // la console.
  console.log(JSON.parse(window.localStorage.getItem('sampleList')));
};
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'indices.html#event-storage', 'storage')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Window.storage_event")}}</p>

<h2 id="Voir_également">Voir également</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Web_Storage_API">Web Storage API</a></li>
 <li><a href="/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API">Using the Web Storage API</a></li>
</ul>
