---
title: <mpath>
slug: Web/SVG/Element/mpath
tags:
  - Element
  - SVG
  - SVG Animation
translation_of: Web/SVG/Element/mpath
---
<div>{{SVGRef}}</div>

<p>L'élément <strong><code>&lt;mpath&gt;</code></strong> se place dans un élément {{SVGElement("animateMotion")}}, il permet de référencer un élément {{SVGElement("path")}} pour définir le chemin utilisé par l'animation.</p>

<h2 id="Contexte_d'utilisation">Contexte d'utilisation</h2>

<p>{{svginfo}}</p>

<h2 id="Attributs">Attributs</h2>

<h3 id="Attributs_globaux">Attributs globaux</h3>

<ul>
 <li><a href="/fr/docs/Web/SVG/Attribute#Attributs_de_base" title="en/SVG/Attribute#Core">Attributs de base</a></li>
 <li><a href="/fr/docs/Web/SVG/Attribute#Attributs_XLink" title="en/SVG/Attribute#XLink">Attributs Xlink</a></li>
 <li>{{SVGAttr("externalResourcesRequired")}}</li>
</ul>

<h3 id="Attributs_spécifiques">Attributs spécifiques</h3>

<ul>
 <li>{{SVGAttr("xlink:href")}}</li>
</ul>

<h2 id="Interface_DOM">Interface DOM</h2>

<p>Cet élément implémente l'interface {{domxref("SVGMPathElement")}}.</p>

<h2 id="Exemple">Exemple</h2>

<h3 id="SVG">SVG</h3>

<pre class="brush: html; highlight[23]">&lt;svg width="100%" height="100%"  viewBox="0 0 500 300"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink" &gt;

  &lt;rect x="1" y="1" width="498" height="298"
        fill="none" stroke="blue" stroke-width="2" /&gt;

  &lt;!-- Affiche le chemin en bleu avec trois cercles
       au début, au milieu et à la fin du chemin --&gt;
  &lt;path id="path1" d="M100,250 C 100,50 400,50 400,250"
        fill="none" stroke="blue" stroke-width="7.06"  /&gt;
  &lt;circle cx="100" cy="250" r="17.64" fill="blue"  /&gt;
  &lt;circle cx="250" cy="100" r="17.64" fill="blue"  /&gt;
  &lt;circle cx="400" cy="250" r="17.64" fill="blue"  /&gt;

  &lt;!-- Triangle qui sera déplacé le long du chemin.
       Il est définit avec une orientation verticale, la base du triangle
       est centrée horizontalement juste au-dessus de l'origine. --&gt;
  &lt;path d="M-25,-12.5 L25,-12.5 L 0,-87.5 z"
        fill="yellow" stroke="red" stroke-width="7.06"  &gt;
    &lt;!-- Référence le path à utiliser --&gt;
    &lt;animateMotion dur="6s" repeatCount="indefinite" rotate="auto" &gt;
       &lt;mpath xlink:href="#path1"/&gt;
    &lt;/animateMotion&gt;
  &lt;/path&gt;
&lt;/svg&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemple", 250, 165)}}</p>

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
   <td>{{SpecName("SVG Animations 2", "#MPathElement", "&lt;mpath&gt;")}}</td>
   <td>{{Spec2("SVG Animations 2")}}</td>
   <td>Aucun changement</td>
  </tr>
  <tr>
   <td>{{SpecName("SVG1.1", "animate.html#MPathElement", "&lt;mpath&gt;")}}</td>
   <td>{{Spec2("SVG1.1")}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("svg.elements.mpath")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{SVGElement("animateMotion")}}</li>
</ul>
