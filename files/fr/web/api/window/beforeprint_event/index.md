---
title: beforeprint
slug: Web/API/Window/beforeprint_event
tags:
  - Evènement
  - Reference
translation_of: Web/API/Window/beforeprint_event
original_slug: Web/Events/beforeprint
---
<p>L'événement <code><strong>beforeprint</strong></code> est déclenché lorsque le document associé est sur le point d'être imprimé ou qu'un "aperçu avant impression" est lancé.</p>

<h2 id="Informations_générales">Informations générales</h2>

<dl>
 <dt style="float: left; text-align: right; width: 120px;">Spécification</dt>
 <dd style="margin: 0 0 0 120px;"><a href="https://html.spec.whatwg.org/multipage/webappapis.html#printing">HTML5</a></dd>
 <dt style="float: left; text-align: right; width: 120px;">Interface</dt>
 <dd style="margin: 0 0 0 120px;">Event</dd>
 <dt style="float: left; text-align: right; width: 120px;">Propagation</dt>
 <dd style="margin: 0 0 0 120px;">Non</dd>
 <dt style="float: left; text-align: right; width: 120px;">Annulable</dt>
 <dd style="margin: 0 0 0 120px;">Non</dd>
 <dt style="float: left; text-align: right; width: 120px;">Cible</dt>
 <dd style="margin: 0 0 0 120px;">DefaultView (<code>&lt;window&gt;</code>)</dd>
 <dt style="float: left; text-align: right; width: 120px;">Action par défaut</dt>
 <dd style="margin: 0 0 0 120px;">Aucune</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>En utilisant <code>window.addEventListener()</code> :</p>

<pre class="notranslate">window.addEventListener("beforeprint", (evenement) =&gt; {
  console.log("Before print");
});</pre>

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
 <li><a href="/en-US/docs/Mozilla_event_reference/afterprint">afterprint</a></li>
</ul>
