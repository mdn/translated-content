---
title: CSSValueList
slug: Web/API/CSSValueList
tags:
  - API
  - CSSValueList
  - DOM
  - Interface
  - Reference
translation_of: Web/API/CSSValueList
---
<div>{{APIRef("DOM")}}</div>

<p>L'interface <code><strong>CSSValueList</strong></code> dérive de l'interface {{domxref("CSSValue")}} et fournit l'abstraction d'une collection ordonnée de valeurs CSS.</p>

<p>Certaines propriétés autorisent une liste vide dans leur syntaxe. Dans ce cas, ces propriétés prennent l'identifiant <code>none</code>. Ainsi, une liste vide signifie que la propriété a une valeur <code>none</code> (<em>aucune valeur</em>).</p>

<p>Les éléments dans <code>CSSValueList</code> sont accessibles par un index integral commençant à 0.</p>

<p>{{InheritanceDiagram}}</p>

<h2 id="Propriétés">Propriétés</h2>

<p><em>Hérite des propriétés de son parent {{domxref("CSSValue")}}</em>.</p>

<dl>
 <dt>{{domxref("CSSValueList.length")}} {{readonlyInline}}</dt>
 <dd>Un <code>unsigned long</code> représentant le nombre de <code>CSSValues</code> (<em>valeurs CSS</em>) dans la liste.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{domxref("CSSValueList.item()")}}</dt>
 <dd>Cette méthode est utilisée pour  récupérer une {{domxref("CSSValue")}} <em>(valeur CSS</em>) par index ordinal. L'ordre dans cette collection représente l'ordre des valeurs dans la propriété de style CSS. Si index est supérieur ou égal au nombre de valeurs de la liste, elle renvoie <code>null</code>.</dd>
</dl>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Style', 'css.html#CSS-CSSValuesList', 'CSSValuesList')}}</td>
   <td>{{Spec2('DOM2 Style')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>
<div>


<p>{{Compat("api.CSSValueList")}}</p>
</div>

<h2 id="Voir_aussi">Voir aussi</h2>
</div>

<ul>
 <li>{{domxref("CSSPrimitiveValue")}}</li>
 <li>{{domxref("CSSValue")}}</li>
</ul>
