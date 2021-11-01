---
title: <filter>
slug: Web/SVG/Element/filter
tags:
  - Element
  - SVG
translation_of: Web/SVG/Element/filter
---
<div>{{SVGRef}}</div>

<p>L'élément <a href="/fr/docs/Web/SVG">SVG</a> <strong><code>&lt;filter&gt;</code></strong> sert de conteneur pour définir des opérations de filtre. Il n'est jamais affiché par lui-même, il est référencé en utilisant l'attribut {{SVGAttr("filter")}} sur un élément SVG ou via la propriété  {{Glossary("CSS")}} {{cssxref("filter")}}.</p>

<h2 id="Contexte_d'utilisation">Contexte d'utilisation</h2>

<p>{{svginfo}}</p>

<h2 id="Attributs">Attributs</h2>

<h3 id="Attributs_globaux">Attributs globaux</h3>

<ul>
 <li><a href="/fr/docs/Web/SVG/Attribute#Attributs_de_base">Attributs de base</a></li>
 <li><a href="/fr/docs/Web/SVG/Attribute#Attributs_de_présentation">Attributs de présentation</a></li>
 <li><a href="/fr/docs/Web/SVG/Attribute#Attributs_XLink">Attributs XLink</a></li>
 <li>{{SVGAttr("class")}}</li>
 <li>{{SVGAttr("style")}}</li>
 <li>{{SVGAttr("externalResourcesRequired")}}</li>
</ul>

<h3 id="Attributs_spécifiques">Attributs spécifiques</h3>

<ul>
 <li>{{SVGAttr("x")}}</li>
 <li>{{SVGAttr("y")}}</li>
 <li>{{SVGAttr("width")}}</li>
 <li>{{SVGAttr("height")}}</li>
 <li>{{SVGAttr("filterRes")}}</li>
 <li>{{SVGAttr("filterUnits")}}</li>
 <li>{{SVGAttr("primitiveUnits")}}</li>
 <li>{{SVGAttr("xlink:href")}}</li>
</ul>

<h2 id="Interface_DOM">Interface DOM</h2>

<p>Cet élément implémente l'interface {{domxref("SVGFilterElement")}}.</p>

<h2 id="Exemple">Exemple</h2>

<h4 id="SVG">SVG</h4>

<pre class="brush: html">&lt;svg width="230" height="120"
 xmlns="http://www.w3.org/2000/svg"
 xmlns:xlink="http://www.w3.org/1999/xlink"&gt;

 &lt;filter id="blurMe"&gt;
  &lt;feGaussianBlur in="SourceGraphic" stdDeviation="5"/&gt;
 &lt;/filter&gt;

 &lt;circle cx="60"  cy="60" r="50" fill="green" /&gt;

 &lt;circle cx="170" cy="60" r="50" fill="green"
          filter="url(#blurMe)" /&gt;
&lt;/svg&gt;</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{EmbedLiveSample("Exemple",232,124,"/files/4227/feGaussianBlur.png")}}</p>

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
   <td>{{SpecName("Filters 1.0", "#FilterElement", "&lt;filter&gt;")}}</td>
   <td>{{Spec2("Filters 1.0")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("SVG1.1", "filters.html#FilterElement", "&lt;filter&gt;")}}</td>
   <td>{{Spec2("SVG1.1")}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("svg.elements.filter")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{SVGElement("feBlend")}}</li>
 <li>{{SVGElement("feColorMatrix")}}</li>
 <li>{{SVGElement("feComponentTransfer")}}</li>
 <li>{{SVGElement("feComposite")}}</li>
 <li>{{SVGElement("feConvolveMatrix")}}</li>
 <li>{{SVGElement("feDiffuseLighting")}}</li>
 <li>{{SVGElement("feDisplacementMap")}}</li>
 <li>{{SVGElement("feDropShadow")}}</li>
 <li>{{SVGElement("feFlood")}}</li>
 <li>{{SVGElement("feGaussianBlur")}}</li>
 <li>{{SVGElement("feImage")}}</li>
 <li>{{SVGElement("feMerge")}}</li>
 <li>{{SVGElement("feMorphology")}}</li>
 <li>{{SVGElement("feOffset")}}</li>
 <li>{{SVGElement("feSpecularLighting")}}</li>
 <li>{{SVGElement("feTile")}}</li>
 <li>{{SVGElement("feTurbulence")}}</li>
 <li><a href="/fr/docs/Web/SVG/Tutoriel/filtres">Tutoriel SVG: Filtres</a></li>
</ul>
