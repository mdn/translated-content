---
title: ServiceWorker.onstatechange
slug: Web/API/ServiceWorker/onstatechange
tags:
  - API
  - Propriété
  - Reference
translation_of: Web/API/ServiceWorker/onstatechange
---
<div>{{SeeCompatTable}}{{APIRef("Service Workers API")}}</div>

<p>Une propriété {{domxref("EventListener")}} appelée quand un évenement de type <code>statechange</code> est déclenché; c'est le cas dès que le {{domxref("ServiceWorker.state")}} change.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">ServiceWorker.onstatechange = function(statechangeevent) { ... }
ServiceWorker.addEventListener('statechange', function(statechangeevent) { ... } )</pre>

<h2 id="Examples">Examples</h2>

<p>Ce fragment de code présente <a href="https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html">un exemple d'enregistrement d'évenements pour le service worker</a> (<a href="https://googlechrome.github.io/samples/service-worker/registration-events/">démo live</a>). Le code écoute pour tout changement du {{domxref("ServiceWorker.state")}} et retourne sa valeur.</p>

<pre class="brush: js">var serviceWorker;
if (registration.installing) {
  serviceWorker = registration.installing;
  document.querySelector('#kind').textContent = 'installé';
} else if (registration.waiting) {
  serviceWorker = registration.waiting;
  document.querySelector('#kind').textContent = 'en attente';
} else if (registration.active) {
  serviceWorker = registration.active;
  document.querySelector('#kind').textContent = 'actif';
}

if (serviceWorker) {
  logState(serviceWorker.state);
  serviceWorker.addEventListener('statechange', function(e) {
  logState(e.target.state);
  });
}</pre>

<p>Notez que quand l'évenement <code>statechange</code> est déclenché, la référence du service worker peut avoir changée. Par exemple :</p>

<pre class="brush: js">navigator.serviceWorker.register(..).then(function(swr) {
  swr.installing.state == "installé"
  swr.installing.onstatechange = function() {
    swr.installing == null;
    // Ici, swr.waiting OU swr.active peuvent valoir true. Parce que l'évènement
    // statechange est mis en queue, pendant que le worker sous jacent est peut être en
    // état d'attente et sera immédiatement activé si possible.
  }
})</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#service-worker-onstatechange-attribute', 'ServiceWorker.onstatechange')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>Définition intiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("api.ServiceWorker.onstatechange")}}</p>
