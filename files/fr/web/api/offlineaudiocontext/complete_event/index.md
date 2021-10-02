---
title: complete
slug: Web/API/OfflineAudioContext/complete_event
translation_of: Web/API/OfflineAudioContext/complete_event
original_slug: Web/Events/complete
---
<div>
<p>L'événement <strong>complete</strong> est déclenché lorsque le rendu d'un {{domxref("OfflineAudioContext")}} est terminé.</p>
</div>

<h2 id="Informations_générales">Informations générales</h2>

<dl>
 <dt style="float: left; text-align: right; width: 120px;">Spécification</dt>
 <dd style="margin: 0 0 0 120px;">{{SpecName('Web Audio API', '#OfflineAudioCompletionEvent-section', 'OfflineAudioCompletionEvent')}}</dd>
 <dt style="float: left; text-align: right; width: 120px;">Interface</dt>
 <dd style="margin: 0 0 0 120px;">{{domxref("OfflineAudioCompletionEvent")}}</dd>
 <dt style="float: left; text-align: right; width: 120px;">Propagation</dt>
 <dd style="margin: 0 0 0 120px;">?</dd>
 <dt style="float: left; text-align: right; width: 120px;">Annulable</dt>
 <dd style="margin: 0 0 0 120px;">?</dd>
 <dt style="float: left; text-align: right; width: 120px;">Cible</dt>
 <dd style="margin: 0 0 0 120px;">{{domxref("OfflineAudioContext")}}</dd>
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
   <td><code>renderedBuffer</code> {{readonlyInline}}</td>
   <td>{{domxref("AudioBuffer")}}</td>
   <td>The buffer containing the result of the processing of an {{domxref("OfflineAudioContext")}}.</td>
  </tr>
 </tbody>
</table>

<h2 id="Evénements_liés">Evénements liés</h2>

<p><em>Aucun</em></p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#OfflineAudioCompletionEvent-section', 'OfflineAudioCompletionEvent')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web_Audio_API">Web Audio API</a></li>
</ul>
