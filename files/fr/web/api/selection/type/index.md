---
title: Selection.type
slug: Web/API/Selection/type
tags:
  - API
  - Experimental
  - Propriété
  - Reference
  - Type
translation_of: Web/API/Selection/type
---
<div>{{APIRef("DOM")}}{{SeeCompatTable}}</div>

<p>La propriété en lecture simple <strong><code>type</code></strong> de l'interface {{domxref("Selection")}} retourne un {{domxref("DOMString")}} décrivant le type de la sélection courante.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><em>value</em> =<em> sel</em>.type
</pre>

<h3 id="Value">Value</h3>

<p>Une {{domxref("DOMString")}} décrivant le type de la sélection courante. Les valeurs possibles sont :</p>

<ul>
 <li><code>None</code>: Aucune sélection courante.</li>
 <li><code>Caret</code>: La sélection est réduite (le curseur est dans un texte mais il n'y a pas de plage sélectionnée).</li>
 <li><code>Range</code>: Une plage est sélectionnnée.</li>
</ul>

<h2 id="Exemple">Exemple</h2>

<p>Dans cet exemple le gestionnaire d'évènemenet est activé à chaque changement de la sélection. <code>console.log(selection.type)</code> retourne <code>Caret</code> ou <code>Range</code> selon que le curseur est sur un simple caractère ou qu'une plage est sélectionée.</p>

<pre class="brush: js">var selection;

document.onselectionchange = function() {
  console.log('New selection made');
  selection = document.getSelection();
  console.log(selection.type);
};</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Selection API', '#dom-selection-type', 'Selection.type')}}</td>
   <td>{{Spec2('Selection API')}}</td>
   <td>Courant</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.Selection.type")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("Selection")}}</li>
</ul>
