---
title: <feMergeNode>
slug: Web/SVG/Element/feMergeNode
tags:
  - Element
  - SVG
  - SVG Filter
translation_of: Web/SVG/Element/feMergeNode
---
<div>{{SVGRef}}</div>

<p>L'élément SVG <code>feMergeNode</code> se place à l'intérieur d'un élément {{ SVGElement("feMerge") }}. Il prend en entrée le résultat d'un filtre afin qu'il soit traité par son parent.</p>

<h2 id="Contexte_d'utilisation">Contexte d'utilisation</h2>

<p>{{svginfo}}</p>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: html">&lt;svg width="200" height="200"
 xmlns="http://www.w3.org/2000/svg"
 xmlns:xlink="http://www.w3.org/1999/xlink"&gt;

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
    &lt;rect x="40" y="40" width="100" height="100"
        style="stroke: #000000; fill: green;" /&gt;
&lt;/svg&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemple', 200, 200)}}</p>

<h2 id="Attributs">Attributs</h2>

<h3 id="Attributs_globaux">Attributs globaux</h3>

<ul>
 <li><a href="/fr/docs/Web/SVG/Attribute#Attributs_de_base" title="en/SVG/Attribute#Core">Attributs de base</a></li>
</ul>

<h3 id="Attributs_spécifiques">Attributs spécifiques</h3>

<ul>
 <li>{{ SVGAttr("in") }}</li>
</ul>

<h2 id="Interface_DOM">Interface DOM</h2>

<p>Cet élément implémente l'interface {{domxref("SVGFEMergeNodeElement")}}.</p>

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
   <td>{{SpecName('Filters 1.0', '#elementdef-femergenode', '&lt;feMergeNode&gt;')}}</td>
   <td>{{Spec2('Filters 1.0')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('SVG1.1', 'filters.html#feMergeNodeElement', '&lt;feMergeNode&gt;')}}</td>
   <td>{{Spec2('SVG1.1')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("svg.elements.feMergeNode")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{ SVGElement("filter") }}</li>
 <li>{{ SVGElement("animate") }}</li>
 <li>{{ SVGElement("set") }}</li>
 <li>{{ SVGElement("feMerge") }}</li>
 <li><a href="/fr/docs/Web/SVG/Tutoriel/filtres" title="en/SVG/Tutorial/Filter_effects">Tutoriel SVG: Filtres</a></li>
</ul>
