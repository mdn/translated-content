---
title: Range.selectNode()
slug: Web/API/Range/selectNode
tags:
  - API
  - DOM
  - Méthode
  - Range
translation_of: Web/API/Range/selectNode
---
<p>{{ApiRef("DOM")}}</p>

<p>La méthode <code>Range.selectNode()</code> définit le {{domxref ("Range")}} destiné à contenir le {{domxref("Node")}} et son contenu. Le {{domxref ("Node")}} parent du début et de la fin du {{domxref("Range")}} sera le même que le parent du <em>noeudDeReference</em>.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox"><em>range</em>.selectNode(<em>noeudDeReference</em>);
</pre>

<h3 id="Parameters">Paramètres</h3>

<dl>
 <dt><em>noeudDeReference</em></dt>
 <dd>Le {{domxref("Node")}} à choisir à l'intérieur d'un <code>{domxref("Range")}}</code>.</dd>
</dl>

<h2 id="Example">Exemple</h2>

<pre class="brush:js">var range = document.createRange();
var noeudDeReference = document.getElementsByTagName("div").item(0);

range.selectNode(noeudDeReference);</pre>

<h2 id="Specification">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-range-selectnode', 'Range.selectNode()')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Aucun changement.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Traversal_Range', 'ranges.html#Level2-Range-method-selectNode', 'Range.selectNode()')}}</td>
   <td>{{Spec2('DOM2 Traversal_Range')}}</td>
   <td>Spécification initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Range.selectNode")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Document_Object_Model">Référence du DOM</a></li>
</ul>
