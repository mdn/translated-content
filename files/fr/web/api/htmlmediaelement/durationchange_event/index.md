---
title: 'HTMLMediaElement: durationchange'
slug: Web/API/HTMLMediaElement/durationchange_event
translation_of: Web/API/HTMLMediaElement/durationchange_event
---
<p>L'évènement <strong><code>durationchange</code> </strong>est déclenché quand l'attribut de durée est mis à jour.</p>

<h2 id="Informations_générales">Informations générales</h2>

<dl>
 <dt style="float: left; text-align: right; width: 120px;">Spécification</dt>
 <dd style="margin: 0 0 0 120px;"><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-durationchange">HTML5 media</a></dd>
 <dt style="float: left; text-align: right; width: 120px;">Interface</dt>
 <dd style="margin: 0 0 0 120px;">{{domxref("Event")}}</dd>
 <dt style="float: left; text-align: right; width: 120px;">Propagation</dt>
 <dd style="margin: 0 0 0 120px;">Non</dd>
 <dt style="float: left; text-align: right; width: 120px;">Annulable</dt>
 <dd style="margin: 0 0 0 120px;">Non</dd>
 <dt style="float: left; text-align: right; width: 120px;">Cible</dt>
 <dd style="margin: 0 0 0 120px;">{{domxref("Element")}}</dd>
 <dt style="float: left; text-align: right; width: 120px;">Default Action</dt>
 <dd style="margin: 0 0 0 120px;">Aucune.</dd>
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
 </tbody>
</table>

<h2 id="Evénements_liés">Evénements liés</h2>

<ul>
 <li>{{event("playing")}}</li>
 <li>{{event("waiting")}}</li>
 <li>{{event("seeking")}}</li>
 <li>{{event("seeked")}}</li>
 <li>{{event("ended")}}</li>
 <li>{{event("loadedmetadata")}}</li>
 <li>{{event("loadeddata")}}</li>
 <li>{{event("canplay")}}</li>
 <li>{{event("canplaythrough")}}</li>
 <li>{{event("durationchange")}}</li>
 <li>{{event("timeupdate")}}</li>
 <li>{{event("play")}}</li>
 <li>{{event("pause")}}</li>
 <li>{{event("ratechange")}}</li>
 <li>{{event("volumechange")}}</li>
 <li>{{event("suspend")}}</li>
 <li>{{event("emptied")}}</li>
 <li>{{event("stalled")}}</li>
</ul>
