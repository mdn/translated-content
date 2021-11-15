---
title: content_security_policy
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy
---
<div>{{AddonSidebar}}</div>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row" style="width: 30%;">Type</th>
   <td><code>String</code></td>
  </tr>
  <tr>
   <th scope="row">Obligatoire</th>
   <td>Non</td>
  </tr>
  <tr>
   <th scope="row">Exemple</th>
   <td>
    <pre class="brush: json">
"content_security_policy": "default-src 'self'"</pre>
   </td>
  </tr>
 </tbody>
</table>

<p>Les extensions ont une politique de sécurité de contenu qui leur est appliquée par défaut. La stratégie par défaut restreint les sources à partir desquelles elles peuvent charger les ressources <a href="/fr/docs/HTML/Element/script">&lt;script&gt;</a> et <a href="/docs/Web/HTML/Element/object">&lt;object&gt;</a>, et interdit les pratiques potentiellement dangereuses telles que l’utilisation d’<code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/eval">eval()</a></code>. Voir la <a href="/fr/Add-ons/WebExtensions/Content_Security_Policy#Default_content_security_policy">politique de sécurité de contenu par défaut</a> pour en savoir plus sur ces implications.</p>

<p>Vous pouvez utiliser la clé <code>"content_security_policy"</code> pour desserrer ou resserrer la politique par défaut. Cette clé est spécifiée de la même manière que l’en-tête HTTP Content-Security-Policy. Voir l’<a href="/fr/docs/HTTP/CSP">utilisation de la politique de sécurité de contenu</a> pour une description générale de la syntaxe de CSP.</p>

<p>Par exemple, vous pouvez utiliser cette clé pour :</p>

<ul>
 <li>permettre à l’extension de charger des scripts et des objets hors de son paquet, en fournissant leurs URL dans les directives {{CSP("script-src")}} or {{CSP("object-src")}} ;</li>
 <li>permettre à l’extension d’exécuter des scripts en ligne, en <a href="/fr/docs/HTTP/Headers/Content-Security-Policy/script-src#Unsafe_inline_script">fournissant le hash du script dans la directive <code>"script-src"</code></a> ;</li>
 <li>permettre à l’extension d’utiliser <code>eval()</code> et des fonctionnalités similaires, en incluant <code>'unsafe-eval'</code> dans la directive {{CSP("script-src")}} ;</li>
 <li>limiter les sources autorisées pour d’autres types de contenu, tels que les images et les feuilles de style, en utilisant la <a href="https://publicsuffix.org/list/">directive de politique</a> appropriée.</li>
</ul>

<p>Il existe des restrictions sur la politique que vous pouvez spécifier ici :</p>

<ul>
 <li>La politique doit inclure au moins les directives {{CSP("script-src")}} et les {{CSP("object-src")}}, et la directive {{CSP("script-src")}} doit contenir le mot-clé <code>'self'</code>.</li>
 <li>Les sources distantes doivent utiliser le schéma <code>https:</code>.</li>
 <li>Les sources distantes ne doivent pas utiliser de caractères génériques pour les domaines dans la <a href="https://publicsuffix.org/list/">liste des suffixes publics</a> (ainsi, « *.co.uk » et « *.blogspot.com » ne sont pas autorisés, même si « *.foo.blogspot.com » est autorisé).</li>
 <li>Toutes les sources doivent spécifier un hôte.</li>
 <li>Les seuls schémas autorisés pour les sources sont : <code>blob:</code>, <code>filesystem:</code>, <code>moz-extension:</code>, et <code>https:</code>.</li>
 <li>Les seuls <a href="/fr/docs/HTTP/Headers/Content-Security-Policy/default-src#Sources">mots-clés</a> autorisés sont : <code>'none'</code>, <code>'self'</code>, et <code>'unsafe-eval'</code>.</li>
</ul>

<h2 id="Exemple">Exemple</h2>

<h3 id="Examples_valides">Examples valides</h3>

<p>Autoriser les scripts distants de "https://example.com" : <sup>(<em>voir note</em> <a href="/fr/Add-ons/WebExtensions/manifest.json/content_security_policy$edit#exampleNote_1">1</a>)</sup></p>

<pre class="brush: json">"content_security_policy": "script-src 'self' https://example.com; object-src 'self'"</pre>

<p>Autoriser les scripts distants depuis n’importe quel sous-domaine de « jquery.com » :</p>

<pre class="brush: json">"content_security_policy": "script-src 'self' https://*.jquery.com; object-src 'self'"</pre>

<p>Autoriser <a href="/fr/Add-ons/WebExtensions/Content_Security_Policy#eval()_et_amis"><code>eval()</code> et ses amis </a>:</p>

<pre class="brush: json">"content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self';"</pre>

<p>Autoriser le script en ligne : <code>"&lt;script&gt;alert('Hello, world.');&lt;/script&gt;"</code> :</p>

<pre class="brush: json">"content_security_policy": "script-src 'self' 'sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng='; object-src 'self'"</pre>

<p>Conserver le reste de la politique, mais exiger également que les images soient empaquetées avec l’extension :</p>

<pre class="brush: json">"content_security_policy": "script-src 'self'; object-src 'self'; img-src 'self'"</pre>

<p>Exiger que tous les types de contenu soient empaquetés avec l’extension :</p>

<pre class="brush: json">"content_security_policy": "default-src 'self'"
</pre>

<h3 id="Exemples_non_valides">Exemples non valides</h3>

<p>Politique qui omet la directive <code>"object-src"</code> :</p>

<pre class="brush: json">"content_security_policy": "script-src 'self' https://*.jquery.com;"</pre>

<p>Politique qui omet le mot-clé <code>"self"</code> dans la directive <code>"script-src"</code> :</p>

<pre class="brush: json">"content_security_policy": "script-src https://*.jquery.com; object-src 'self'"</pre>

<p>Le schéma pour une source distante n’est pas <code>https:</code> :</p>

<pre class="brush: json">"content_security_policy": "script-src 'self' http://code.jquery.com; object-src 'self'"</pre>

<p>Le caractère générique est utilisé avec un domaine générique :</p>

<pre class="brush: json">"content_security_policy": "script-src 'self' https://*.blogspot.com; object-src 'self'"</pre>

<p>La source spécifie un schéma mais aucun hôte :</p>

<pre class="brush: json">"content_security_policy": "script-src 'self' https:; object-src 'self'"</pre>

<p>La directive inclut le mot-clé non pris en charge <code>'unsafe-inline'</code> :</p>

<pre class="brush: json">"content_security_policy": "script-src 'self' 'unsafe-inline'; object-src 'self'"</pre>

<p>1. <em>Note : l</em><em>es exemples valides montrent l’utilisation correcte des clés dans CSP. Toutefois, les extensions avec </em><em><code>'unsafe-eval'</code>, <code>'unsafe-inline'</code>, des blobs, des scripts ou des sources distantes dans leur CSP ne sont pas autorisées à être répertoriées sur addons.mozilla.org en raison de problèmes de sécurité majeurs.</em></p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("webextensions.manifest.content_security_policy")}}</p>
