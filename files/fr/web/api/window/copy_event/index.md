---
title: 'Window: copy event'
slug: Web/API/Window/copy_event
tags:
  - API
  - Clippboard API
  - Copie
  - Event
  - Evènement
  - Reference
  - Window
  - copy
translation_of: Web/API/Window/copy_event
---
<div>{{APIRef}}</div>

<p>L'événement <strong><code>copy</code></strong> se déclenche lorsque l'utilisateur lance une action de copie via l'interface utilisateur du nagivateur.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Bulles</th>
   <td>Oui</td>
  </tr>
  <tr>
   <th scope="row">Annulable</th>
   <td>Oui</td>
  </tr>
  <tr>
   <th scope="row">Interface</th>
   <td>{{domxref("ClipboardEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">Propriété de gestionnaire d'événement</th>
   <td>{{domxref("HTMLElement/oncopy", "oncopy")}}</td>
  </tr>
 </tbody>
</table>

<p>La cible d'origine de cet événement est le {{domxref ("Element")}} qui était la cible prévue de l'action de copie. Vous pouvez écouter cet événement sur l'interface {{domxref ("Window")}} pour le gérer dans les phases de capture ou de bullage. Pour plus de détails sur cet événement, veuillez consulter la page sur le <a href="/en-US/docs/Web/API/Element/copy_event">Element: copy event</a>.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">window.addEventListener('copy', (event) =&gt; {
    console.log('action de copie lancée')
});</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Clipboard API', '#clipboard-event-copy')}}</td>
   <td>{{Spec2('Clipboard API')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Window.copy_event")}}</p>

<h2 id="Voir_également">Voir également</h2>

<ul>
 <li>Événements liés: {{domxref("Window/cut_event", "cut")}}, {{domxref("Window/paste_event", "paste")}}</li>
 <li>Cet événement sur {{domxref("Element")}} cible: {{domxref("Element/copy_event", "copy")}}</li>
 <li>Cet événement sur {{domxref("Document")}} cible: {{domxref("Document/copy_event", "copy")}}</li>
</ul>
