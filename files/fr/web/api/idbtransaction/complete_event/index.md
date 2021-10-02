---
title: complete
slug: Web/API/IDBTransaction/complete_event
translation_of: Web/API/IDBTransaction/complete_event
---
<p>Le gestionnaire <strong>complete</strong> est exécuté lorsqu'une transaction est complétée avec succès.</p>

<h2 id="Informations_générales">Informations générales</h2>

<dl>
 <dt style="float: left; text-align: right; width: 120px;">Spécification</dt>
 <dd style="margin: 0 0 0 120px;"><a href="http://www.w3.org/TR/IndexedDB/#request-api">IndexedDB</a></dd>
 <dt style="float: left; text-align: right; width: 120px;">Interface</dt>
 <dd style="margin: 0 0 0 120px;">Event</dd>
 <dt style="float: left; text-align: right; width: 120px;">Propagation</dt>
 <dd style="margin: 0 0 0 120px;">Non</dd>
 <dt style="float: left; text-align: right; width: 120px;">Annulable</dt>
 <dd style="margin: 0 0 0 120px;">Non</dd>
 <dt style="float: left; text-align: right; width: 120px;">Cible</dt>
 <dd style="margin: 0 0 0 120px;">IDBTransaction</dd>
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
 </tbody>
</table>

<h2 id="Exemple">Exemple</h2>

<pre class="brush:js;">var transaction = db.transaction(["customers"], IDBTransaction.versionchange);

transaction.oncomplete = function( event ) {
  ...
}

// qui est équivalent à
transaction.addEventListener("complete", function( event ) {
  ...
});
</pre>

<h2 id="Evénements_liés">Evénements liés</h2>

<ul>
 <li>{{event("success")}}</li>
 <li>{{event("error")}}</li>
 <li>{{event("abort")}}</li>
 <li>{{event("complete")}}</li>
 <li>{{event("upgradeneeded")}}</li>
 <li>{{event("blocked")}}</li>
 <li>{{event("versionchange")}}</li>
</ul>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/IndexedDB/Using_IndexedDB">Utilisation d'indexedDB</a></li>
</ul>
