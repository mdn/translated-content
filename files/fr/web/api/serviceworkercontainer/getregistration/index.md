---
title: ServiceWorkerContainer.getRegistration()
slug: Web/API/ServiceWorkerContainer/getRegistration
translation_of: Web/API/ServiceWorkerContainer/getRegistration
---
<p>{{APIRef("Service Workers API")}}</p>

<p>La méthode <strong><code>getRegistration()</code></strong> de l'interface {{domxref("ServiceWorkerContainer")}} fournis un objet {{domxref("ServiceWorkerRegistration")}} dont la porté inclue l'URL du document. Cette méthode retourne une {{jsxref("Promise")}} qui se résout avec un {{domxref("ServiceWorkerRegistration")}} ou <code>undefined</code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>serviceWorkerContainer</em>.getRegistration(<em>scope</em>).then(function(<em>serviceWorkerRegistration</em>) { ... });</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>scope</code> {{optional_inline}}</dt>
 <dd>Un identifiant unique pour l'enregistrement du service worker que vous voulez récupérer. L'URL de porté de l'enregistrement . C'est souvent une URL relative.</dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Une {{domxref("Promise")}} qui est résolue avec un objet {{domxref("ServiceWorkerRegistration")}} ou <code>undefined</code>.</p>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js">navigator.serviceWorker.getRegistration('/app').then(function(registration) {
  if(registration){
    document.querySelector('#status').textContent = 'ServiceWorkerRegistration found.';
  }
});
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statuts</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#dom-serviceworkercontainer-getregistration', 'ServiceWorkerContainer: getRegistration')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>


<p>{{Compat("api.ServiceWorkerContainer.getRegistration")}}</p>
</div>
