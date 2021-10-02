---
title: CSSValue
slug: Web/API/CSSValue
tags:
  - API
  - DOM
  - Interface
  - Reference
translation_of: Web/API/CSSValue
---
<div>{{APIRef ("DOM")}}</div>

<div>L'interface <strong>CSSValue</strong> représente la valeur calculée actuelle d'une propriété CSS.</div>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{domxref("CSSValue.cssText")}}</dt>
 <dd>
 <p>Une {{domxref ("DOMString")}} représentant la valeur actuelle.</p>
 </dd>
 <dt>{{domxref("CSSValue.cssValueType")}} {{readonlyInline}}</dt>
 <dd>Un raccourci non signé ( <code>unsigned short</code> ) représentant un code définissant le type de valeur. Les valeurs possibles sont:
 <table class="standard-table">
  <tbody>
   <tr>
    <td class="header">Constant</td>
    <td class="header">Description</td>
   </tr>
   <tr>
    <td><code>CSS_CUSTOM</code></td>
    <td>
     <p>La valeur est une valeur personnalisée.</p>
    </td>
   </tr>
   <tr>
    <td><code>CSS_INHERIT</code></td>
    <td>La valeur est héritée et cssText contient "inherit".</td>
   </tr>
   <tr>
    <td><code>CSS_PRIMITIVE_VALUE</code></td>
    <td>La valeur est une valeur primitive et une instance de l'interface {{domxref ("CSSPrimitiveValue")}} peut être obtenue en utilisant des méthodes de casting spécifiques à la liaison sur cette instance de l'interface CSSValue.</td>
   </tr>
   <tr>
    <td><code>CSS_VALUE_LIST</code></td>
    <td>La valeur est une liste CSSValue et une instance de l'interface {{domxref ("CSSValueList")}} peut être obtenue en utilisant des méthodes de casting spécifiques à la liaison sur cette instance de l'interface CSSValue.</td>
   </tr>
  </tbody>
 </table>
 </dd>
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
   <td>{{SpecName('DOM2 Style', 'css.html#CSS-CSSValue', 'CSSValue')}}</td>
   <td>{{Spec2('DOM2 Style')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>
<div>


<p>{{Compat("api.CSSValue")}}</p>
</div>

<h2 id="Voir_aussi">Voir aussi</h2>
</div>

<ul>
 <li>{{domxref("CSSPrimitiveValue")}}</li>
 <li>{{domxref("CSSValueList")}}</li>
</ul>
