---
title: 'Window: languagechange event'
slug: Web/API/Window/languagechange_event
tags:
  - Evènement
  - Expérimentale
  - HTML DOM
  - Reference
  - Window
translation_of: Web/API/Window/languagechange_event
---
<div>{{APIRef}}</div>

<p>L'événement <strong><code>languagechange</code></strong> est déclenché sur l'objet d'étendue globale lorsque la langue préférée de l'utilisateur change.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Bulles</th>
   <td>Non</td>
  </tr>
  <tr>
   <th scope="row">Annulable</th>
   <td>Non</td>
  </tr>
  <tr>
   <th scope="row">Interface</th>
   <td>{{domxref("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">Propriété de gestionnaire d'événements</th>
   <td>{{domxref("WindowEventHandlers/onlanguagechange", "onlanguagechange")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<p>Vous pouvez utiliser l'événement <code>languagechange</code> dans une méthode {{domxref("EventTarget/addEventListener", "addEventListener")}} :</p>

<pre class="brush: js">window.addEventListener('languagechange', function() {
  console.log('languagechange event detected!');
});</pre>

<p>Ou utilisez la propriété du gestionnaire d'événements <code><a href="/en-US/docs/Web/API/WindowEventHandlers/onlanguagechange">onlanguagechange</a></code> :</p>

<pre class="brush: js">window.onlanguagechange = function(event) {
  console.log('languagechange event detected!');
};</pre>

<h2 id="Spécification">Spécification</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ SpecName('HTML WHATWG', 'indices.html#event-languagechange', 'languagechange') }}</td>
   <td>{{ Spec2('HTML WHATWG') }}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Window.languagechange_event")}}</p>

<h2 id="Voir_également">Voir également</h2>

<ul>
 <li>{{domxref("NavigatorLanguage.language", "navigator.language")}}</li>
 <li>{{domxref("NavigatorLanguage.languages", "navigator.languages")}}</li>
 <li>{{domxref("Navigator")}}</li>
 <li>{{domxref("Window.onlanguagechange")}}</li>
</ul>
