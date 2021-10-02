---
title: DedicatedWorkerGlobalScope.name
slug: Web/API/DedicatedWorkerGlobalScope/name
tags:
  - API
  - DOM
  - Nom
  - Propriétés
  - Worker
translation_of: Web/API/DedicatedWorkerGlobalScope/name
---
<div>{{APIRef("Web Workers API")}}</div>

<p>La propriété en lecture seule <code><strong>name</strong></code> de l'interface {{domxref("DedicatedWorkerGlobalScope")}} renvoie le nom qui a été (facultativement) donné au  {{domxref("Worker")}} lors de sa création. C'est le nom que le constructeur {{domxref("Worker.Worker", "Worker()")}} peut transmettre pour obtenir une référence à {{domxref("DedicatedWorkerGlobalScope")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var nameObj = self.name;</pre>

<h3 id="Valeur">Valeur</h3>

<p>Une {{domxref("DOMString")}} (<em>chaîne de caractères</em>).</p>

<h2 id="Exemple">Exemple</h2>

<p>Un worker est créé en utilisant un constructeur avec une option de <code>name</code> :</p>

<pre class="brush: js">var myWorker = new Worker("worker.js", { name : "myWorker" });</pre>

<p>le {{domxref("DedicatedWorkerGlobalScope")}} aura désormais le nom de "myWorker", qui peut être renvoyé pendant l'exécution</p>

<pre class="brush: js">self.name</pre>

<p>à l'intérieur du worker.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#dom-dedicatedworkerglobalscope-name', 'name')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.DedicatedWorkerGlobalScope.name")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("DedicatedWorkerGlobalScope")}}</li>
</ul>
