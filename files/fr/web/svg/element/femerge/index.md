---
title: <feMerge>
slug: Web/SVG/Element/feMerge
tags:
  - Element
  - SVG Filter
translation_of: Web/SVG/Element/feMerge
---
<div>{{SVGRef}}</div>

<p>La primitive de filtre SVG <strong><code>&lt;feMerge&gt;</code></strong> permet d'empiler les résultats de différentes opérations de filtre les uns par dessus les autres. La liste des images à empiler est définit par une liste d'élément {{ SVGElement("feMergeNode") }} à l'intérieur de la balise. Pour y parvenir, stocker au préalable les résultats des filtres voulus dans un buffer temporaire grâce à l'attribut {{ SVGAttr("result") }}.</p>

<h2 id="Contexte_d'utilisation">Contexte d'utilisation</h2>

<p>{{svginfo}}</p>

<h2 id="Exemple">Exemple</h2>

<h3 id="SVG">SVG</h3>

<pre class="brush: html; highlight[7-10]">&lt;svg width="200" height="200"
  xmlns="http://www.w3.org/2000/svg"&gt;

  &lt;filter id="feOffset" x="-40" y="-20" width="100" height="200"&gt;
    &lt;feOffset in="SourceGraphic" dx="60" dy="60" /&gt;
    &lt;feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur2" /&gt;
    &lt;feMerge&gt;
      &lt;feMergeNode in="blur2" /&gt;
      &lt;feMergeNode in="SourceGraphic" /&gt;
    &lt;/feMerge&gt;
  &lt;/filter&gt;

  &lt;rect x="40" y="40" width="100" height="100"
    style="stroke: #000000; fill: green; filter: url(#feOffset);" /&gt;
&lt;/svg&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemple', 200, 200)}}</p>

<h2 id="Attributs">Attributs</h2>

<h3 id="Attributs_globaux">Attributs globaux</h3>

<ul>
 <li><a href="/fr/docs/Web/SVG/Attribute#Attributs_de_base">Attributs de base</a></li>
 <li><a href="/fr/docs/Web/SVG/Attribute#Attributs_de_présentation">Attributs de présentation</a></li>
 <li><a href="/fr/docs/Web/SVG/Attribute#Attributs_de_primitives_de_filtre">Attributs de primitives de filtres</a></li>
 <li>{{SVGAttr("class")}}</li>
 <li>{{SVGAttr("style")}}</li>
</ul>

<h3 id="Attributs_spécifiques">Attributs spécifiques</h3>

<p><em>Aucun</em></p>

<h2 id="Interface_DOM">Interface DOM</h2>

<p>Cet élément implémente l'interface {{domxref("SVGFEMergeElement")}}.</p>

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
   <td>{{SpecName('Filters 1.0', '#feMergeElement', '&lt;feMerge&gt;')}}</td>
   <td>{{Spec2('Filters 1.0')}}</td>
   <td>Aucun changement</td>
  </tr>
  <tr>
   <td>{{SpecName('SVG1.1', 'filters.html#feMergeElement', '&lt;feMerge&gt;')}}</td>
   <td>{{Spec2('SVG1.1')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("svg.elements.feMerge")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{SVGElement("filter")}}</li>
 <li>{{SVGElement("feBlend")}}</li>
 <li>{{SVGElement("feColorMatrix")}}</li>
 <li>{{SVGElement("feComponentTransfer")}}</li>
 <li>{{SVGElement("feComposite")}}</li>
 <li>{{SVGElement("feConvolveMatrix")}}</li>
 <li>{{SVGElement("feDiffuseLighting")}}</li>
 <li>{{SVGElement("feDisplacementMap")}}</li>
 <li>{{SVGElement("feFlood")}}</li>
 <li>{{SVGElement("feGaussianBlur")}}</li>
 <li>{{SVGElement("feImage")}}</li>
 <li>{{SVGElement("feMergeNode")}}</li>
 <li>{{SVGElement("feMorphology")}}</li>
 <li>{{SVGElement("feOffset")}}</li>
 <li>{{SVGElement("feSpecularLighting")}}</li>
 <li>{{SVGElement("feTile")}}</li>
 <li>{{SVGElement("feTurbulence")}}</li>
 <li><a href="/fr/docs/Web/SVG/Tutoriel/filtres">Tutoriel SVG: Filtres</a></li>
</ul>
