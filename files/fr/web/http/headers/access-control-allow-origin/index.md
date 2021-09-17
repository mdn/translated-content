---
title: Access-Control-Allow-Origin
slug: Web/HTTP/Headers/Access-Control-Allow-Origin
translation_of: Web/HTTP/Headers/Access-Control-Allow-Origin
---
<div>{{HTTPSidebar}}</div>

<p>L'entête <code><strong>Access-Control-Allow-Origin</strong></code> renvoie une réponse indiquant si les ressources peuvent être partagées avec une <a href="/fr/docs/Glossaire/Origine">origine</a> donnée.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Header type</th>
   <td>{{Glossary("Response header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>no</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Access-Control-Allow-Origin: *
Access-Control-Allow-Origin: &lt;origin&gt;
Access-Control-Allow-Origin: null
</pre>

<h2 id="Directives">Directives</h2>

<dl>
 <dt>*</dt>
 <dd>Pour les demandes sans informations d’identification, le serveur peut spécifier « * » comme un caractère générique, permettant ainsi à n’importe quelle origine d'accéder à la ressource.</dd>
 <dt>&lt;origin&gt;</dt>
 <dd>Spécifie un URI qui peut accéder à la ressource. Il n'est possible de spécifier qu'une seule origine.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>Pour permettre à n'importe quelle ressource d'accéder à vos ressources, vous pouvez indiquer :</p>

<pre>Access-Control-Allow-Origin: *</pre>

<p>Pour permettre <code>https://developer.mozilla.org</code> d'accéder à vos ressources, vous pouvez indiquer :</p>

<pre>Access-Control-Allow-Origin: https://developer.mozilla.org</pre>

<h3 id="CORS_et_le_cache">CORS et le cache</h3>

<p>Si le serveur spécifie un hôte d'origine plutôt que "*", il doit également inclure "<em>Origin</em>" dans l'en-tête de réponse "<em><a href="/fr/docs/Web/HTTP/Headers/Vary">Vary</a></em>" pour indiquer aux clients que les réponses du serveur seront différentes en fonction de la valeur de la demande d'origine entête.</p>

<pre>Access-Control-Allow-Origin: https://developer.mozilla.org
Vary: Origin</pre>

<h2 id="Caractéristiques">Caractéristiques</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Caractéristiques</th>
   <th scope="col">Statue</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Fetch','#http-access-control-allow-origin', 'Access-Control-Allow-Origin')}}</td>
   <td>{{Spec2("Fetch")}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité">Compatibilité</h2>

<p>{{Compat("http.headers.Access-Control-Allow-Origin")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTTPHeader("Origin")}}</li>
 <li>{{HTTPHeader("Vary")}}</li>
</ul>
