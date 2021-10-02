---
title: gamepaddisconnected
slug: Web/API/Window/gamepaddisconnected_event
translation_of: Web/API/Window/gamepaddisconnected_event
---
<p>L'événement <code>gamepaddisconnected</code> est déclenché lorsque le navigateur détecte le fait qu'une manette ait été débranchée.</p>

<h2 id="Informations_générales">Informations générales</h2>

<dl>
 <dt style="float: left; text-align: right; width: 120px;">Spécification</dt>
 <dd style="margin: 0 0 0 120px;"><a href="http://www.w3.org/TR/gamepad/#the-gamepaddisconnected-event">Gamepad</a></dd>
 <dt style="float: left; text-align: right; width: 120px;">Interface</dt>
 <dd style="margin: 0 0 0 120px;">{{domxref("Event")}}</dd>
 <dt style="float: left; text-align: right; width: 120px;">Propagation</dt>
 <dd style="margin: 0 0 0 120px;">Non</dd>
 <dt style="float: left; text-align: right; width: 120px;">Annulable</dt>
 <dd style="margin: 0 0 0 120px;">Non</dd>
 <dt style="float: left; text-align: right; width: 120px;">Cible</dt>
 <dd style="margin: 0 0 0 120px;">DefaultView (<code>&lt;window&gt;</code>)</dd>
 <dt style="float: left; text-align: right; width: 120px;">Action par défaut</dt>
 <dd style="margin: 0 0 0 120px;">Aucune</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Property</th>
   <th scope="col">Type</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>target</code> {{readonlyInline}}</td>
   <td>{{domxref("EventTarget")}}</td>
   <td>The event target (the topmost target in the DOM tree).</td>
  </tr>
  <tr>
   <td><code>type</code> {{readonlyInline}}</td>
   <td>{{domxref("DOMString")}}</td>
   <td>The type of event.</td>
  </tr>
  <tr>
   <td><code>bubbles</code> {{readonlyInline}}</td>
   <td>{{jsxref("Boolean")}}</td>
   <td>Whether the event normally bubbles or not.</td>
  </tr>
  <tr>
   <td><code>cancelable</code> {{readonlyInline}}</td>
   <td>{{jsxref("Boolean")}}</td>
   <td>Whether the event is cancellable or not.</td>
  </tr>
  <tr>
   <td><code>gamepad</code> {{readonlyInline}}</td>
   <td>{{domxref("Gamepad")}}</td>
   <td>The single gamepad attribute provides access to the associated gamepad data for this event.</td>
  </tr>
 </tbody>
</table>

<h2 id="Evénements_liés">Evénements liés</h2>

<ul>
 <li><a href="/fr/docs/Web/Reference/Events/gamepadconnected">gamepadconnected</a></li>
</ul>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/API/Gamepad/Using_Gamepad_API">Utilisation de l'API Gamepad</a></li>
</ul>
