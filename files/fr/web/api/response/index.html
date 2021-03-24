---
title: Response
slug: Web/API/Response
tags:
  - API
  - Experimental
  - Fetch
  - Fetch API
  - Interface
  - Reference
  - Response
translation_of: Web/API/Response
---
<div>{{APIRef("Fetch API")}}</div>

<p>L'interface <strong><code>Response</code></strong> de l'API de <a href="/en-US/docs/Web/API/Fetch_API">fetch</a> représente la réponse d'une requête initialisée.</p>

<p>Vous pouvez créer un nouvel objet <code>Response</code> en utilisant le constructeur {{domxref("Response.Response()")}}. Cependant, vous rencontrerez plus fréquemment l'objet Response comme étant le résultat d'une opération de l'API, par exemple, un service worker {{domxref("Fetchevent.respondWith")}}, ou un simple {{domxref("GlobalFetch.fetch()")}}.</p>

<h2 id="Constructeur">Constructeur</h2>

<dl>
 <dt>{{domxref("Response.Response","Response()")}}</dt>
 <dd>Crée un nouvel objet <code>Response</code>.</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{domxref("Response.headers")}} {{readonlyinline}}</dt>
 <dd>Contient les objets {{domxref("Headers")}} associés à la réponse.</dd>
 <dt>{{domxref("Response.ok")}} {{readonlyinline}}</dt>
 <dd>Contient un booléen statuant s'il s'agit d'une réponse indiquant un succès (statut HTTP entre 200 et 299) ou non.</dd>
 <dt>{{domxref("Response.redirected")}} {{ReadOnlyInline}}</dt>
 <dd>Indique si oui ou non la réponse est le résultat d'une (ou plusieurs) redirection(s), c'est-à-dire que sa liste d'URLs a plus d'une entrée.</dd>
 <dt>{{domxref("Response.status")}} {{readonlyinline}}</dt>
 <dd>Contient le status code de la réponse (par exemple <code>200</code> en cas de réussite).</dd>
 <dt>{{domxref("Response.statusText")}} {{readonlyinline}}</dt>
 <dd>Contient le message du statut correspondant au status code (à savoir : <code>OK</code> pour le code <code>200</code> par exemple).</dd>
 <dt>{{domxref("Response.type")}} {{readonlyinline}}</dt>
 <dd>Contient le type de la réponse (par exemple, <code>basic</code>, <code>cors</code>).</dd>
 <dt>{{domxref("Response.url")}} {{readonlyinline}}</dt>
 <dd>Contient l'URL de la réponse.</dd>
 <dt>{{domxref("Response.useFinalURL")}}</dt>
 <dd>Contient un booléen statuant s'il s'agit de l'URL finale de la réponse.</dd>
</dl>

<p>Par ailleurs, <code>Response</code> implémente également une propriété {{domxref("Body")}}, voici les propriétés qui lui sont propres :</p>

<dl>
 <dt>{{domxref("Body.body")}} {{readonlyInline}}</dt>
 <dd>Un simple getter utilisé afin d'exposer un {{domxref("ReadableStream")}} permettant de lire le contenu du body.</dd>
 <dt>{{domxref("Body.bodyUsed")}} {{readonlyInline}}</dt>
 <dd>Stocke un {{domxref("Boolean")}} qui indique si le body a déjà été utilisé dans la réponse ou non.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{domxref("Response.clone()")}}</dt>
 <dd>Crée un clone de l'objet <code>Response</code>.</dd>
 <dt>{{domxref("Response.error()")}}</dt>
 <dd>Retourne un nouvel objet <code>Response</code> associé à une erreur réseau.</dd>
 <dt>{{domxref("Response.redirect()")}}</dt>
 <dd>Crée une nouvelle réponse avec une URL différente permettant de rediriger l'utilisateur.</dd>
</dl>

<p><code>Response</code> implémente {{domxref("Body")}}, voici les différentes méthodes qui sont disponibles:</p>

<dl>
 <dt>{{domxref("Body.arrayBuffer()")}}</dt>
 <dd>Prend le stream de la {{domxref("Response")}} et le lit jusqu'à la fin. Renvoie une promise qui retourne un {{domxref("ArrayBuffer")}} lorsqu'elle est résolue.</dd>
 <dt>{{domxref("Body.blob()")}}</dt>
 <dd>Prend le stream de la {{domxref("Response")}} et le lit jusqu'à la fin. Renvoie une promise qui retourne un {{domxref("Blob")}} lorsqu'elle est résolue.</dd>
 <dt>{{domxref("Body.formData()")}}</dt>
 <dd>Prend le stream de la {{domxref("Response")}} et le lit jusqu'à la fin. Renvoie une promise qui retourne un {{domxref("FormData")}} lorsqu'elle est résolue.</dd>
 <dt>{{domxref("Body.json()")}}</dt>
 <dd>Prend le stream de la {{domxref("Response")}} et le lit jusqu'à la fin. Renvoie une promise qui retourne le résultat du parsing du body text, comme {{jsxref("JSON")}} ,lorsqu'elle est résolue.</dd>
 <dt>{{domxref("Body.text()")}}</dt>
 <dd>Prend le stream de la {{domxref("Response")}} et le lit jusqu'à la fin. Renvoie une promise qui est résolue avec un {{domxref("USVString")}} (text).</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>Dans notre <a href="https://github.com/mdn/fetch-examples/tree/gh-pages/basic-fetch">exemple basique d'utilisation de fetch </a>(<a href="http://mdn.github.io/fetch-examples/basic-fetch/">exemple</a>), nous utilisons un simple appel <code>fetch()</code> pour récupérer une image et l'afficher dans un tag {{htmlelement("img")}}. L'appel <code>fetch()</code> retourne une promise qui est résolue avec un objet <code>Response</code> associé à l'opération de récupération de la ressource. Vous remarquerez que puisque nous récupérons une image, nous avons besoin d'utiliser {{domxref("Body.blob")}} (disponible dans le body de la {{domxref("Response")}}) pour attribuer le bon MIME type à la réponse.</p>

<pre class="brush: js">var myImage = document.querySelector('.my-image');
fetch('flowers.jpg').then(function(response) {
  return response.blob();
}).then(function(blob) {
  var objectURL = URL.createObjectURL(blob);
  myImage.src = objectURL;
});</pre>

<p>Vous pouvez également utiliser le constructeur {{domxref("Response.Response()")}} pour créer votre propre objet <code>Response</code>:</p>

<pre class="brush: js">var myResponse = new Response();</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Fetch','#response-class','Response')}}</td>
   <td>{{Spec2('Fetch')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Response")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/ServiceWorker_API">ServiceWorker API</a></li>
 <li><a href="/en-US/docs/Web/HTTP/Access_control_CORS">HTTP access control (CORS)</a></li>
 <li><a href="/en-US/docs/Web/HTTP">HTTP</a></li>
</ul>
