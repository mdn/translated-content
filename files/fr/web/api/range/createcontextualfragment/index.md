---
title: Range.createContextualFragment()
slug: Web/API/Range/createContextualFragment
translation_of: Web/API/Range/createContextualFragment
---
<p>La méthode <strong><code>Range.createContextualFragment()</code></strong> retourne un {{domxref("DocumentFragment")}} en invoquant l’algorithme d’analyse de fragment HTML ou l’algorithme d’analyse de fragment XML, avec le début du <code>range</code> (le <em>parent</em> du nœud sélectionné) comme nœud de contexte. L’algorithme d’analyse de fragment HTML est utilisé si le <code>range</code> appartient à un <code>Document</code> dont le bit « HTMLness » est défini. Dans le cas du HTML, si le nœud de contexte est censé être <code>html</code>, pour des raisons historiques l’algorithme d’analyse de fragment est invoqué avec <code>body</code> pour contexte à la place.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>documentFragment</em> = <em>range</em>.createContextualFragment( <em>chaineHTML</em> )
</pre>

<h3 id="Param.C3.A8tres">Paramètres</h3>

<dl>
 <dt><em>chaineHTML</em></dt>
 <dd>Une chaîne contenant du texte et des balises à convertir en un fragment de document.</dd>
</dl>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js">var chaineHTML = "&lt;div&gt;Je suis un nœud div&lt;div&gt;";
var range = document.createRange();
// fait que le parent de la première div du document devient le nœud de contexte
range.selectNode(document.getElementsByTagName("div").item(0));
var documentFragment = range.createContextualFragment(chaineHTML);
document.body.appendChild(documentFragment);
</pre>

<h2 id="Specifications">Spécification</h2>

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
      <td>{{SpecName('DOM Parsing', '#idl-def-range-createcontextualfragment(domstring)', 'Range.createContextualFragment()')}}</td>
      <td>{{Spec2('DOM Parsing')}}</td>
      <td>Définition initiale.</td>
    </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Range.createContextualFragment")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/DOM/DOM_Reference">Index des interfaces DOM</a></li>
</ul>
