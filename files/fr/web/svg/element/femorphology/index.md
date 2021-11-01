---
title: <feMorphology>
slug: Web/SVG/Element/feMorphology
tags:
  - Element
  - SVG
  - SVG Filter
translation_of: Web/SVG/Element/feMorphology
---
<div>{{SVGRef}}</div>

<p>La primitive de filtre <a href="/fr/docs/Web/SVG">SVG</a> <strong><code>&lt;feMorphology&gt;</code></strong> est utilisée pour éroder ou dilater l'image en entrée. Cela permet d'appliquer des effets de mise en gras ou d'amincissement.</p>

<h2 id="Contexte_d'utilisation">Contexte d'utilisation</h2>

<p>{{svginfo}}</p>

<h2 id="Attributs">Attributs</h2>

<h3 id="Attributs_globaux">Attributs globaux</h3>

<ul>
 <li><a href="/fr/docs/Web/SVG/Attribute#Attributs_de_base">Attributs de base</a></li>
 <li><a href="/fr/docs/Web/SVG/Attribute#Attributs_de_présentation">Attributs de présentation</a></li>
 <li><a href="/fr/docs/Web/SVG/Attribute#Attributs_de_primitives_de_filtre">Attributs de primitive de filtre</a></li>
 <li>{{SVGAttr("class")}}</li>
 <li>{{SVGAttr("style")}}</li>
</ul>

<h3 id="Attributs_spécifiques">Attributs spécifiques</h3>

<ul>
 <li>{{SVGAttr("in")}}</li>
 <li>{{SVGAttr("operator")}}</li>
 <li>{{SVGAttr("radius")}}</li>
</ul>

<h2 id="Interface_DOM">Interface DOM</h2>

<p>Cet élément implémente l'interface {{domxref("SVGFEMorphologyElement")}}.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Sur_du_contenu_SVG">Sur du contenu SVG</h3>

<h4 id="SVG">SVG</h4>

<pre class="brush: html; highlight[3,6]">&lt;svg xmlns="http://www.w3.org/2000/svg" width="300" height="180"&gt;
  &lt;filter id="erode"&gt;
    &lt;feMorphology operator="erode" radius="1"/&gt;
  &lt;/filter&gt;
  &lt;filter id="dilate"&gt;
    &lt;feMorphology operator="dilate" radius="2"/&gt;
  &lt;/filter&gt;
  &lt;text y="1em"&gt;Texte normal&lt;/text&gt;
  &lt;text id="thin" y="2em"&gt;Texte mince&lt;/text&gt;
  &lt;text id="thick" y="3em"&gt;Text gras&lt;/text&gt;
&lt;/svg&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css; highlight[7,11]">text {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3em;
}

#thin {
  filter: url(#erode);
}

#thick {
  filter: url(#dilate);
}</pre>

<p>{{EmbedLiveSample("Sur_du_contenu_SVG", 340, 180)}}</p>

<h3 id="Sur_du_contenu_HTML">Sur du contenu HTML</h3>

<h4 id="SVG_2">SVG</h4>

<pre class="brush: html; highlight[3,6]">&lt;svg xmlns="http://www.w3.org/2000/svg" width="0" height="0"&gt;
  &lt;filter id="erode"&gt;
    &lt;feMorphology operator="erode" radius="1"/&gt;
  &lt;/filter&gt;
  &lt;filter id="dilate"&gt;
    &lt;feMorphology operator="dilate" radius="2"/&gt;
  &lt;/filter&gt;
&lt;/svg&gt;

&lt;p&gt;Texte normal&lt;/p&gt;
&lt;p id="thin"&gt;Texte mince&lt;/p&gt;
&lt;p id="thick"&gt;Text gras&lt;/p&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css; highlight[8,12]">p {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3em;
}

#thin {
  filter: url(#erode);
}

#thick {
  filter: url(#dilate);
}</pre>

<p>{{EmbedLiveSample("Sur_du_contenu_HTML", 340, 180)}}</p>

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
   <td>{{SpecName("Filters 1.0", "#feMorphologyElement", "&lt;feMorphology&gt;")}}</td>
   <td>{{Spec2("Filters 1.0")}}</td>
   <td>Aucun changement</td>
  </tr>
  <tr>
   <td>{{SpecName("SVG1.1", "filters.html#feMorphologyElement", "&lt;feMorphology&gt;")}}</td>
   <td>{{Spec2("SVG1.1")}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("svg.elements.feMorphology")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{SVGElement("filter")}}</li>
 <li>{{SVGElement("animate")}}</li>
 <li>{{SVGElement("set")}}</li>
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
 <li>{{SVGElement("feMerge")}}</li>
 <li>{{SVGElement("feOffset")}}</li>
 <li>{{SVGElement("feSpecularLighting")}}</li>
 <li>{{SVGElement("feTile")}}</li>
 <li>{{SVGElement("feTurbulence")}}</li>
 <li><a href="/fr/docs/Web/SVG/Tutoriel/filtres">Tutoriel SVG: Filtres</a></li>
</ul>
