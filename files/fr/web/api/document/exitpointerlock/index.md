---
title: Document.exitPointerLock()
slug: Web/API/Document/exitPointerLock
tags:
  - API
  - DOM
  - Experimental
  - Méthode
  - Reference
translation_of: Web/API/Document/exitPointerLock
---
<div>{{APIRef("DOM")}}{{SeeCompatTable}}</div>

<p>La méthode <strong><code>exitPointerLock()</code></strong> permet de relâcher un pointeur de façon asynchrone lorsque le pointeur était auparavant mobilisé par la méthode {{domxref("Element.requestPointerLock()")}}.</p>

<p>Pour connaître le succès ou l'échec de cette requête, il faut surveiller les évènements {{event("pointerlockchange")}} et {{event("pointerlockerror")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">document.exitPointerLock();
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('Pointer Lock','l#extensions-to-the-document-interface','Document')}}</td>
   <td>{{Spec2('Pointer Lock')}}</td>
   <td>Extension de l'interface <code>Document</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Document.exitPointerLock")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("Document.pointerLockElement")}}</li>
 <li>{{domxref("Element.requestPointerLock()")}}</li>
 <li><a href="/fr/docs/WebAPI/Pointer_Lock">L'API <em>Pointer Lock</em></a></li>
</ul>
