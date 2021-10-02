---
title: Navigator.serviceWorker
slug: Web/API/Navigator/serviceWorker
tags:
  - API
  - Navigateur
  - Propriété
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
translation_of: Web/API/Navigator/serviceWorker
---
<p>{{APIRef("Service Workers API")}}</p>

<p>Le <code><strong>Navigator.serviceWorker</strong></code> est une propriété en lecture seule qui renvoie un objet {{domxref("ServiceWorkerContainer")}}, et qui permet d'accéder à l'enregistrement, la suppression, la mise à jour, et la communication avec les objets {{domxref("ServiceWorker")}} pour le <a href="https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window">document  associé</a>.</p>

<h2 id="syntaxe">syntaxe</h2>

<pre class="syntaxbox">var workerContainerInstance = navigator.serviceWorker;
</pre>

<h3 id="Valeur">Valeur</h3>

<p>L'objet {{domxref("ServiceWorkerContainer")}}.</p>

<p> </p>

<h2 id="Exemples">Exemples</h2>

<p>Le code ci-dessous vérifie si le navigateur supporte les service workers.</p>

<pre><code>if ('serviceWorker' in navigator) {
  // Supported!
}</code></pre>

<p> </p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#navigator-service-worker', 'navigator.serviceWorker')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("api.Navigator.serviceWorker")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/ServiceWorker_API">ServiceWorker API</a></li>
 <li><a href="/en-US/docs/Web/API/ServiceWorker_API/Using_Service_Workers">Utilisation de Service Workers</a></li>
</ul>
