---
title: 'Window: vrdisplayconnect event'
slug: Web/API/Window/vrdisplayconnect_event
tags:
  - Evènement
  - Reference
  - WebVR
  - onvrdisplayconnect
  - vrdisplayconnect
translation_of: Web/API/Window/vrdisplayconnect_event
---
<div>{{APIRef("Window")}}</div>

<div>
<p>L'événement <strong><code>vrdisplayconnect</code></strong> de l'<a href="/en-US/docs/Web/API/WebVR_API">API WebVR</a> est déclenché lorsqu'un écran VR compatible est connecté à l'ordinateur.</p>
</div>

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
   <td>{{domxref("VRDisplayEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">Propriété de gestionnaire d'événements</th>
   <td><code><a href="/en-US/docs/Web/API/Window/onvrdisplayconnect">onvrdisplayconnect</a></code></td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<p>Vous pouvez utiliser l'événement <code>vrdisplayconnect</code> dans une méthode <code><a href="/en-US/docs/Web/API/EventTarget/addEventListener">addEventListener</a></code> :</p>

<pre class="brush: js">window.addEventListener('vrdisplayconnect', function() {
  info.textContent = 'Affichage connecté.';
  reportDisplays();
});</pre>

<p>Ou utilisez la propriété du gestionnaire d'événements <code><a href="/en-US/docs/Web/API/Window/onvrdisplayconnect">onvrdisplayconnect</a></code> :</p>

<pre class="brush: js">window.onvrdisplayconnect = function() {
  info.textContent = 'Affichage connecté.';
  reportDisplays();
};</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentair</th>
  </tr>
  <tr>
   <td>{{SpecName('WebVR 1.1', '#dom-window-onvrdisplayconnect', 'vrdisplayconnect')}}</td>
   <td>{{Spec2('WebVR 1.1')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Window.vrdisplayconnect_event")}}</p>

<h2 id="Voir_également">Voir également</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/WebVR_API">WebVR API homepage</a></li>
 <li><a href="http://mozvr.com/">MozVr.com</a> — démos, téléchargements et autres ressources de l'équipe Mozilla VR.</li>
</ul>
