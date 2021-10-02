---
title: Response.ok
slug: Web/API/Response/ok
tags:
  - API
  - Experimental
  - Fetch
  - Property
  - Reference
  - Response
  - ok
translation_of: Web/API/Response/ok
---
<div>{{APIRef("Fetch")}}</div>

<p>La propriété en lecture seule <code><strong>ok</strong></code> de l'interface {{domxref("Response")}} contient un booléen correspondant au succès (codes de statut compris entre 200 et 299) ou à l'échec de la réponse.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox">var <var>myOK</var> = <var>response</var>.ok;</pre>

<h3 id="Value">Valeur</h3>

<p>Un {{domxref("Boolean")}}.</p>

<h2 id="Example">Exemple</h2>

<p>Dans <a href="https://github.com/mdn/fetch-examples/tree/master/fetch-response">notre exemple</a> (voir <a href="https://mdn.github.io/fetch-examples/fetch-response/">la démonstration en ligne</a>) nous créons un nouvel objet {{domxref("Request")}} en utilisant le constructeur {{domxref("Request.Request","Request()")}} avec le chemin vers un JPG en argument. On récupère (<em>fetch</em> en anglais) ensuite la requête en utilisant {{domxref("GlobalFetch.fetch()")}}, on extrait un <em>blob</em> de la réponse en utilisant {{domxref("Body.blob")}} pour créer un objet URL grâce à {{domxref("URL.createObjectURL")}} et l'afficher dans une balise {{htmlelement("img")}}.</p>

<div class="note">
<p><strong>Note :</strong> Nous affichons la valeur de la propriété <code>ok</code> de la réponse dans la console en haut du bloc <code>fetch()</code>.</p>
</div>

<pre class="brush: js">var myImage = document.querySelector('img');

var myRequest = new Request('flowers.jpg');

fetch(myRequest).then(function(response) {
  console.log(response.ok); // retourne true si la réponse est retournée avec succès 
  response.blob().then(function(myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
});</pre>

<h2 id="Specifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Fetch','#dom-response-ok','ok')}}</td>
   <td>{{Spec2('Fetch')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Response.ok")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Service_Worker_API">API ServiceWorker</a></li>
 <li><a href="/fr/docs/Web/HTTP/CORS">Contrôle d'accès HTTP (CORS)</a></li>
 <li><a href="/fr/docs/Web/HTTP">HTTP</a></li>
</ul>
