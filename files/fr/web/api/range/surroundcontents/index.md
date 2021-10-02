---
title: Range.surroundContents()
slug: Web/API/Range/surroundContents
translation_of: Web/API/Range/surroundContents
---
<div>{{ApiRef("DOM")}}</div>

<p>La méthode <strong><code>Range.surroundContents()</code></strong> déplace le contenu du {{ domxref("Range") }} dans un nouveau nœud, plaçant le nouveau nœud au début du <code>range</code> spécifié.</p>

<p>Cette méthode est à peu près équivalente à :</p>

<pre class="brush: js">newNode.appendChild(range.extractContents());
range.insertNode(newNode)</pre>

<p>Après déplacement, les bornes du <code>range</code> incluent <code>newNode</code>.</p>

<p>Cependant, une exception sera levée si le {{ domxref("Range") }} découpe un nœud non-{{ domxref("Text") }} sur une seule de ses bornes. C’est-à-dire que, contrairement à l’alternative ci-dessus, s’il y a des nœuds partiellement sélectionnés, ils ne seront pas clonés ; à la place, l’opération échouera.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox"><em>range</em>.surroundContents(<em>newNode</em>);
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><em>newNode</em></dt>
 <dd>Un {{ domxref("Node") }} à insérer à l’emplacement du <code>range</code>.</dd>
</dl>

<h2 id="Example">Exemple</h2>

<pre class="brush:js">var range = document.createRange();
var newNode = document.createElement("p");

range.selectNode(document.getElementsByTagName("div").item(0));
range.surroundContents(newNode);
</pre>

<h2 id="Specification">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-range-surroundcontents', 'Range.surroundContents()')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Pas de changement.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Traversal_Range', 'ranges.html#Level2-Range-method-surroundContents', 'Range.surroundContents()')}}</td>
   <td>{{Spec2('DOM2 Traversal_Range')}}</td>
   <td>Spécification initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Range.surroundContents")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/DOM/DOM_Reference">L’index des interfaces DOM</a></li>
</ul>
