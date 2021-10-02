---
title: Worker.onmessage
slug: Web/API/Worker/onmessage
tags:
  - API
  - Property
  - Reference
translation_of: Web/API/Worker/onmessage
---
<p>{{ APIRef("Web Workers API") }}</p>

<p>La propriété <strong><code>onmessage</code></strong> de l'interface {{domxref("Worker")}} représente un {{event("Event_handlers", "event handler")}}, à savoir une fonction qui est appelée lorsque l'événement {{event("message")}} survient. Ces événements sont du type {{domxref("MessageEvent")}} et sont appelés quand le parent du worker reçoit un message (c’est-à-dire à partir de la méthode {{domxref("DedicatedWorkerGlobalScope.postMessage")}}).</p>

<div class="note">
<p><strong>Note :</strong> Le contenu du message est fourni par la propriété <code>data</code> de l'événement {{event("message")}}.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">myWorker.onmessage = function(e) { ... }</pre>

<h2 id="Exemple">Exemple</h2>

<p>L'extrait de code suivant illustre la création d'un objet {{domxref("Worker")}} utilisant le constructeur {{domxref("Worker.Worker", "Worker()")}}. Les messages sont passés au worker lorsque la valeur de l'élément de formulaire <code>first</code> change. Un gestionnaire onmessage est également présent pour s'occuper des messages retournés par le worker.</p>

<pre class="brush: js">var myWorker = new Worker("worker.js");

first.onchange = function() {
  myWorker.postMessage([first.value,second.value]);
  console.log('Message envoyé au worker');
}

myWorker.onmessage = function(e) {
  result.textContent = e.data;
  console.log('Message reçu du worker');
}
</pre>

<p>Dans le script <code>worker.js</code>, un gestionnaire <code>onmessage</code> se charge des messages en provenance du script principal :</p>

<pre class="brush: js">onmessage = function(e) {
  console.log('Message reçu du script principal');
  var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
  console.log('Renvoi d\'un message au script principal');
  postMessage(workerResult);
}</pre>

<p>Remarquez comment dans le script principal, <code>onmessage</code> doit être appelée par <code>myWorker</code>, tandis que dans le script du worker vous avez juste besoin d'appeler <code>onmessage</code> parce que le worker est en réalité le contexte global ({{domxref("DedicatedWorkerGlobalScope")}}).</p>

<p>Pour un exemple complet, consulter notre <a href="https://github.com/mdn/simple-web-worker">Exemple basique de worker dédié</a> (<a href="http://mdn.github.io/simple-web-worker/">lancez le worker dédié</a>).</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "#handler-worker-onmessage", "Worker.onmessage")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>


<p>{{Compat("api.Worker.onmessage")}}</p>
</div>

<h2 id="Voir_aussi">Voir aussi</h2>

<p>L'interface {{domxref("Worker")}} à laquelle elle appartient.</p>
