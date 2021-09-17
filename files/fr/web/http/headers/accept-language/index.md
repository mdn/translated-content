---
title: Accept-Language
slug: Web/HTTP/Headers/Accept-Language
tags:
  - En-tête HTTP
  - En-tête de requête
  - HTTP
  - Négociation de contenu
  - Reference
translation_of: Web/HTTP/Headers/Accept-Language
---
<div>{{HTTPSidebar}}</div>

<p>L'en-tête <strong><code>Accept-Language</code></strong> de la requête HTTP indique quelles sont les langues que le client est capable de comprendre, et quelle variante locale est préférée. En utilisant la <a href="/fr-FR/docs/Web/HTTP/Content_negotiation">négociation de contenu</a>, le serveur choisit alors l'une des propositions, l'utilise et informe le client de son choix par l'entête de réponse {{HTTPHeader("Content-Language")}}. Les navigateurs définissent les valeurs adéquates pour cet entête en fonction de la langue de leur interface utilisateur, et même si un utilisateur peut la changer, cela se produit rarement (et cela est vu d'un mauvais œil, dans la mesure où cela permet l'identification par empreinte numérique).</p>

<p>Cet en-tête est une indication destinée à être utilisée lorsque le serveur n'a aucun moyen de déterminer la langue d'une autre manière, comme une URL spécifique, qui est contrôlée par une décision explicite de l'utilisateur. Il est recommandé que le serveur ne passe jamais outre une décision explicite. Le contenu d'<code>Accept-Language</code> est souvent hors du contrôle de l'utilisateur (comme lors d'un voyage et de l'utilisation d'un cybercafé à l'étranger) ; l'utilisateur peut également vouloir visiter une page dans une langue que celle des paramètres régionaux de son interface utilisateur.</p>

<p>Si le serveur ne peut servir aucune langue qui corresponde, il peut théoriquement renvoyer un code d'erreur {{HTTPStatus ("406")}} (Not Acceptable). Mais, pour une meilleure expérience utilisateur, cela est rarement fait et la façon de faire la plus courante est d'ignorer l'en-tête <code>Accept-Language</code> dans ce cas.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Type d'en-tête</th>
   <td>{{Glossary("Request header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>non</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Simple header", "CORS-safelisted request-header")}}</th>
   <td>oui</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Accept-Language: &lt;langue&gt;
Accept-Language: &lt;locale&gt;
Accept-Language: *

// Type multiples, pondérés par la syntaxe {{glossary("quality values", "valeur de qualité")}} :
Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5</pre>

<h2 id="Directives">Directives</h2>

<dl>
 <dt><code>&lt;langue&gt;</code></dt>
 <dd>Une langue exprimée sous la forme de 2 ou 3 caractères.</dd>
 <dt><code>&lt;locale&gt;</code></dt>
 <dd>Une balise de langue complète. En plus de la langue elle-même, elle peut contenir des informations additionnelles après un<code>'-'</code>. L'information supplémentaire la plus courante est la variante de pays (telle que<code>'en-US'</code>) ou le type d'alphabet à utiliser (comme<code>'sr-Lat'</code>). D'autres variantes comme le type d'orthographe (<code>'de-DE-1996'</code>) ne sont pas habituellement utilisées dans le contexte de cet en-tête.</dd>
 <dt><code>*</code></dt>
 <dd>Toute langue ; <code>'*'</code> est utilisé comme un joker.</dd>
 <dt><code>;q=</code> (pondération q-factor)</dt>
 <dd>Une quantité numérique donnant un ordre de préférence et qui utilise une <a href="/en-US/docs/Glossary/Quality_values">valeur de qualité</a> relative, appelée <em>poids</em>.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<pre>Accept-Language: de

Accept-Language: de-CH

Accept-Language: en-US,en;q=0.5
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Titre</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "Accept-Language", "5.3.5")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Context</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("http.headers.Accept-Language")}}</p>

<h2 id="Voir_également">Voir également</h2>

<ul>
 <li>HTTP <a href="/fr-FR/docs/Web/HTTP/Content_negotiation">négociation de contenu</a></li>
 <li>En-tête avec le résultat de la négociation de contenu : {{HTTPHeader("Content-Language")}}</li>
 <li>Autres en-têtes similaires : {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept")}}</li>
</ul>
