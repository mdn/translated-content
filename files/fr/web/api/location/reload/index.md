---
title: 'Location : reload()'
slug: Web/API/Location/reload
translation_of: Web/API/Location/reload
browser-compat: api.Location.reload
---
<div>{{ APIRef("HTML DOM") }}</div>

<p>La méthode <code><strong>Location.reload()</strong></code> recharge la ressource depuis l'URL actuelle.</p>

<p>Le rechargement peut être bloqué avec une exception <a href="/fr/docs/Web/API/DOMException"><code>DOMException</code></a>  <code>SECURITY_ERROR</code>. Cela se produit si <a href="/fr/docs/Glossary/Origin">l'origine</a> du script qui invoque <code>location.reload()</code> est différente de l'origine de la page qui possède l'objet <a href="/fr/docs/Web/API/Location"><code>Location</code></a>. Voir <a href="/fr/docs/Web/Security/Same-origin_policy">les règles sur l'origine</a> pour plus d'informations.</p>

<h2 id="syntaxe">Syntaxe</h2>

<pre class="brush: js">
location.reload();
</pre>

<h2 id="location.reload_n_a_pas_de_paramètre">location.reload() n'a pas de paramètre</h2>

<p>Firefox prend en charge un paramètre booléen non-standard <a href="https://searchfox.org/mozilla-central/source/dom/base/Location.cpp#551"><code>forceGet</code></a> pour la méthode <code>location.reload()</code>, qui permet à Firefox de passer outre le cache et d'effectuer un rafraîchissement forcé du document. Toutefois, pour tous les autres navigateurs, tout argument utilisé en appelant <code>location.reload()</code> sera ignoré et n'aura aucun effet.</p>

<p>Il est toutefois possible que vous rencontriez des occurrences de <code>location.reload(true)</code> dans du code existant basé sur l'hypothèse que ce rafraîchissement forcé aurait lieu dans tous les navigateurs. Une recherche GitHub "<code>location.reload(true)</code>" renvoie <a href="https://github.com/search?q=%22location.reload%28true%29%22&type=code">plusieurs centaines de milliers de résultats</a>.</p>

<p>Historiquement, une version de Netscape Navigator a introduit la prise en charge de cet argument et cela s'est retrouvé dans Firefox. À un moment, le groupe de travail du W3C sur les API Web <a href="https://www.w3.org/2005/06/tracker/webapi/issues/69">a ouvert le sujet</a> pour étudier son ajout à la spécification pour <code>location.reload()</code>. Toutefois, il n'a jamais été ajouté formellement.</p>

<p>En résumé, ce paramètre booléen ne fait pas partie de la spécification actuelle <code>location.reload()</code> et n'en a en fait jamais fait partie.</p>

<h2 id="spécifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="voir_aussi">Voir aussi</h2>

<ul>
  <li>L'interface <a href="/fr/docs/Web/API/Location"><code>Location</code></a> à laquelle appartient cette méthode.</li>
  <li>Des méthodes semblables&nbsp;: <a href="/fr/docs/Web/API/Location/assign"><code>Location.assign()</code></a> et <a href="/fr/docs/Web/API/Location/replace"><code>Location.replace()</code></a>.</li>
</ul>
