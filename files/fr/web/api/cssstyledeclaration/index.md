---
title: CSSStyleDeclaration
slug: Web/API/CSSStyleDeclaration
tags:
  - API
  - CSSOM
  - Interface
  - NeedsCompatTable
  - NeedsMarkupWork
  - Reference
translation_of: Web/API/CSSStyleDeclaration
---
<p>{{ APIRef("CSSOM") }}</p>

<p><code>CSSStyleDeclaration</code> représente une collection de paires propriété/valeur CSS. Elle est utilisée dans quelques API :</p>

<ul>
 <li>{{domxref("HTMLElement.style")}} - pour manipuler le style d'un seul élément (&lt;elem style="..."&gt;) ;</li>
 <li>(AFAIRE : à reformuler) est une interface avec le <a href="http://www.w3.org/TR/1998/REC-CSS2-19980512/syndata.html#block">declaration block</a> renvoyé par la propriété <code><a href="/en/DOM/cssRule.style">style</a></code> d'une <code>cssRule</code> dans une <a href="/fr/docs/Web/API/StyleSheet">feuille de style</a>, lorsque la règle est une <a href="/en/DOM/cssRule#CSSStyleRule">CSSStyleRule</a> ;</li>
 <li><code>CSSStyleDeclaration</code> est également une interface en <strong>lecture seule</strong> pour le résultat de <a href="/fr/docs/Web/API/Window/getComputedStyle">window.getComputedStyle()</a>.</li>
</ul>

<h2 id="Syntax">Attributs</h2>

<dl>
 <dt>{{domxref("CSSStyleDeclaration.cssText")}}</dt>
 <dd>Représentation textuelle du bloc de déclaration. La définition de cet attribut modifie le style.</dd>
 <dt>{{domxref("CSSStyleDeclaration.length")}} {{readonlyInline}}</dt>
 <dd>Le nombre de propriétés. Voir la méthode {{domxref("CSSStyleDeclaration.item",'item()')}} ci-dessous.</dd>
 <dt>{{domxref("CSSStyleDeclaration.parentRule")}} {{readonlyInline}}</dt>
 <dd>Le contenant {{domxref("CSSRule")}}.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{domxref("CSSStyleDeclaration.getPropertyPriority()")}}</dt>
 <dd>Retourne la priorité facultative "important".</dd>
 <dt>{{domxref("CSSStyleDeclaration.getPropertyValue()")}}</dt>
 <dd>Retourne la valeur de la propriété avec un nom de propriété.</dd>
 <dt>{{domxref("CSSStyleDeclaration.item()")}}</dt>
 <dd>Retourne un nom de propriété.</dd>
 <dt>{{domxref("CSSStyleDeclaration.removeProperty()")}}</dt>
 <dd>Supprime une propriété du bloc de déclaration CSS.</dd>
 <dt>{{domxref("CSSStyleDeclaration.setProperty()")}}</dt>
 <dd>Modifie une propriété CSS existante ou crée une nouvelle propriété CSS dans le bloc de déclaration.</dd>
 <dt>{{domxref("CSSStyleDeclaration.getPropertyCSSValue()")}} {{obsolete_inline}}</dt>
 <dd>Uniquement supporté via getComputedStyle dans Firefox. Retourne la valeur de la propriété en tant que {{domxref("CSSPrimitiveValue")}} ou <code>null</code> pour les <a href="/fr/docs/Web/CSS/Propriétés_raccourcies">propriétés raccourcies</a>.</dd>
</dl>

<h2 id="Example">Exemple</h2>

<pre class="brush: js">var objStyle = document.styleSheets[0].cssRules[0].style;
console.log(objStyle.cssText);

for (var i = objStyle.length; i--;) {
  var chaineNom = objStyle[i];
  objStyle.removeProperty(chaineNom);
}

console.log(objStyle.cssText);</pre>

<h2 id="Notes">Notes</h2>

<p>Le bloc de déclaration est la partie de la règle de mise en forme qui apparaît dans les accolades et qui fournit les définitions de mise en forme (pour le sélecteur, la partie qui précède les accolades).</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/CSS/CSS_Properties_Reference">Référence des propriétés CSS</a></li>
</ul>

<h2 id="Specification">Spécifications</h2>

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
   <td>{{SpecName('CSSOM', '#the-cssstyledeclaration-interface', 'CSSStyleDeclaration')}}</td>
   <td>{{Spec2('CSSOM')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Style', 'css.html#CSS-CSSStyleDeclaration', 'CSSPrimitiveValue')}}</td>
   <td>{{Spec2('DOM2 Style')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>
