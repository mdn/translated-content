---
title: focusout
slug: Web/API/Element/focusout_event
translation_of: Web/API/Element/focusout_event
original_slug: Web/Events/focusout
---
<p>L'évènement <code><strong>focusout</strong> </code>est déclenché lorsqu'un élément du DOM est sur le point de perdre le focus. La différence principale entre cet événement et <a href="/en-US/docs/Mozilla_event_reference/blur_(event)">blur</a> est que ce dernier ne se propage pas.</p>

<h2 id="Informations_générales">Informations générales</h2>

<dl>
 <dt style="float: left; text-align: right; width: 120px;">Spécification</dt>
 <dd style="margin: 0 0 0 120px;"><a href="http://www.w3.org/TR/DOM-Level-3-Events/#event-type-focusout">DOM L3</a></dd>
 <dt style="float: left; text-align: right; width: 120px;">Interface</dt>
 <dd style="margin: 0 0 0 120px;">{{domxref("FocusEvent")}}</dd>
 <dt style="float: left; text-align: right; width: 120px;">Propagation</dt>
 <dd style="margin: 0 0 0 120px;">Oui</dd>
 <dt style="float: left; text-align: right; width: 120px;">Annulable</dt>
 <dd style="margin: 0 0 0 120px;">Non</dd>
 <dt style="float: left; text-align: right; width: 120px;">Cible</dt>
 <dd style="margin: 0 0 0 120px;">{{domxref("Element")}}</dd>
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
   <td>Event target losing focus.</td>
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
   <td><code>relatedTarget</code> {{readonlyInline}}</td>
   <td>{{domxref("EventTarget")}} (DOM element)</td>
   <td>Event target receiving focus.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Element.focusout_event")}}</p>

<h2 id="Evénements_liés">Evénements liés</h2>

<ul>
 <li>{{event("focus")}}</li>
 <li>{{event("blur")}}</li>
 <li>{{event("focusin")}}</li>
 <li>{{event("focusout")}}</li>
</ul>
