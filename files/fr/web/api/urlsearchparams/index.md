---
title: URLSearchParams
slug: Web/API/URLSearchParams
translation_of: Web/API/URLSearchParams
---
<p>{{ApiRef("URL API")}}</p>

<p>L’interface <strong><code>URLSearchParams</code></strong> définit des méthodes utilitaires pour travailler avec la <em>chaîne de requête</em> (les paramètres <code>GET</code>) d’une URL.</p>

<p>Un objet implémentant <code>URLSearchParams</code> peut être directement utilisé dans une structure {{jsxref("Statements/for...of", "for...of")}}, au lieu de {{domxref('URLSearchParams.entries()', 'entries()')}} : <code>for (var p of mySearchParams)</code> ou son équivalent <code>for (var p of mySearchParams.entries())</code>.</p>

<h2 id="Constructeur">Constructeur</h2>

<dl>
 <dt>{{domxref("URLSearchParams.URLSearchParams", 'URLSearchParams()')}}</dt>
 <dd>Constructeur renvoyant un objet <code>URLSearchParams</code>.</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<p><em>Cette interface n’hérite d’aucune propriété.</em></p>

<h2 id="Méthodes">Méthodes</h2>

<p><em>Cette interface n’hérite d’aucune méthode.</em></p>

<dl>
 <dt>{{domxref("URLSearchParams.append()")}}</dt>
 <dd>Ajoute une paire clé / valeur spécifiée en tant que nouveau paramètre de recherche.</dd>
 <dt>{{domxref("URLSearchParams.delete()")}}</dt>
 <dd>Supprime le paramètre de recherche donné et sa valeur associée de la liste de tous les paramètres de recherche.</dd>
 <dt>{{domxref("URLSearchParams.entries()")}}</dt>
 <dd>Retourne un {{jsxref("Iteration_protocols","iterator")}} permettant de parcourir toutes les paires clé / valeur contenues dans cet objet.</dd>
 <dt>{{domxref("URLSearchParams.get()")}}</dt>
 <dd>Retourne la première valeur associée au paramètre de recherche donné.</dd>
 <dt>{{domxref("URLSearchParams.getAll()")}}</dt>
 <dd>Retourne toutes les valeurs associées au paramètre de recherche donné.</dd>
 <dt>{{domxref("URLSearchParams.has()")}}</dt>
 <dd>Retourne un {{jsxref("Boolean")}} indiquant si un tel paramètre de recherche existe.</dd>
 <dt>{{domxref("URLSearchParams.keys()")}}</dt>
 <dd>Retourne un {{jsxref("Iteration_protocols", "iterator")}} permettant de parcourir toutes les <strong>clés</strong> des paires clé / valeur contenues dans cet objet.</dd>
 <dt>{{domxref("URLSearchParams.set()")}}</dt>
 <dd>Définit la valeur associée à un paramètre de recherche donné à la valeur donnée. S’il y avait plusieurs valeurs, les autres sont supprimées.</dd>
 <dt>{{domxref("URLSearchParams.sort()")}}</dt>
 <dd>Trie toutes les paires clé / valeur, s’il y en a, par leurs clés.</dd>
 <dt>{{domxref("URLSearchParams.toString()")}}</dt>
 <dd>Retourne une chaîne contenant une chaîne de requête pouvant être utilisée dans une URL.</dd>
 <dt>{{domxref("URLSearchParams.values()")}}</dt>
 <dd>Retourne un {{jsxref("Iteration_protocols", "iterator")}} permettant de parcourir toutes les <strong>valeurs</strong> des paires clé / valeur contenues dans cet objet.</dd>
</dl>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js">var paramsString = "q=URLUtils.searchParams&amp;topic=api";
var searchParams = new URLSearchParams(paramsString);

// Itère sur les paramètres de recherche.
for (let p of searchParams) {
  console.log(p);
}

searchParams.has("topic") === true; // true
searchParams.get("topic") === "api"; // true
searchParams.getAll("topic"); // ["api"]
searchParams.get("foo") === null; // true
searchParams.append("topic", "webdev");
searchParams.toString(); // "q=URLUtils.searchParams&amp;topic=api&amp;topic=webdev"
searchParams.set("topic", "More webdev");
searchParams.toString(); // "q=URLUtils.searchParams&amp;topic=More+webdev"
searchParams.delete("topic");
searchParams.toString(); // "q=URLUtils.searchParams"
</pre>

<h2 id="Spécifications">Spécifications</h2>

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
   <td>{{SpecName('URL', '#urlsearchparams', "URLSearchParams")}}</td>
   <td>{{Spec2('URL')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.URLSearchParams")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li>Autres interfaces liées aux URL : {{domxref("URL")}}, {{domxref("URLUtils")}}.</li>
 <li><a href="https://developers.google.com/web/updates/2016/01/urlsearchparams?hl=en">Google Developers: Easy URL manipulation with URLSearchParams</a></li>
</ul>
