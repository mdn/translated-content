---
title: <feImage>
slug: Web/SVG/Element/feImage
tags:
  - SVG
  - SVG Filter
translation_of: Web/SVG/Element/feImage
---
<div>{{SVGRef}}</div>

<p>La primitive de filtre <a href="/fr/docs/Web/SVG">SVG</a> <strong><code>&lt;feImage&gt;</code></strong> extrait les données d'une image d'une source externe et retourne les pixels récupérés en sortie (autrement dit, si l'image récupérée est une image SVG, elle sortira comme raster)</p>

<h2 id="Contexte_d'utilisation">Contexte d'utilisation</h2>

<p>{{svginfo}}</p>

<h2 id="Attributs">Attributs</h2>

<h3 id="Attributs_globaux">Attributs globaux</h3>

<ul>
 <li><a href="/fr/docs/Web/SVG/Attribute#Attributs_de_base">Attributs de base</a></li>
 <li><a href="/fr/docs/Web/SVG/Attribute#Attributs_de_base">Attributs de présentation</a></li>
 <li><a href="/fr/docs/Web/SVG/Attribute#Attributs_de_primitives_de_filtre">Attributs de primitives de filtre</a></li>
 <li><a href="/fr/docs/Web/SVG/Attribute#Attributs_de_primitives_de_filtre">Attributs XLink</a></li>
 <li>{{SVGAttr("class")}}</li>
 <li>{{SVGAttr("style")}}</li>
 <li>{{SVGAttr("externalResourcesRequired")}}</li>
</ul>

<h3 id="Attributs_spécifiques">Attributs spécifiques</h3>

<ul>
 <li>{{SVGAttr("preserveAspectRatio")}}</li>
 <li>{{SVGAttr("xlink:href")}}</li>
</ul>

<h2 id="Interface_DOM">Interface DOM</h2>

<p>Cet élément implémente l'interface {{domxref("SVGFEImageElement")}}.</p>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: html">&lt;svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"&gt;
  &lt;defs&gt;
    &lt;filter id="image"&gt;
      &lt;feImage xlink:href="/files/6457/mdn_logo_only_color.png"/&gt;
    &lt;/filter&gt;
  &lt;/defs&gt;

  &lt;rect x="10%" y="10%" width="80%" height="80%"
      style="filter:url(#image);"/&gt;
&lt;/svg&gt;</pre>

<p>{{EmbedLiveSample("Exemple", 200, 200)}}</p>

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
   <td>{{SpecName("Filters 1.0", "#feImageElement", "&lt;feImage&gt;")}}</td>
   <td>{{Spec2("Filters 1.0")}}</td>
   <td>Ajoute l'attribut {{SVGAttr("href")}} et déprécie {{SVGAttr("xlink:href")}}. Ajoute l'attribut {{SVGAttr("crossorigin")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName("SVG1.1", "filters.html#feImageElement", "&lt;feImage&gt;")}}</td>
   <td>{{Spec2("SVG1.1")}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("svg.elements.feImage")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{SVGElement("filter")}}</li>
 <li>{{SVGElement("animate")}}</li>
 <li>{{SVGElement("animateTransform")}}</li>
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
 <li>{{SVGElement("feMerge")}}</li>
 <li>{{SVGElement("feMorphology")}}</li>
 <li>{{SVGElement("feOffset")}}</li>
 <li>{{SVGElement("feSpecularLighting")}}</li>
 <li>{{SVGElement("feTile")}}</li>
 <li>{{SVGElement("feTurbulence")}}</li>
 <li><a href="/fr/docs/Web/SVG/Tutoriel/filtres">Tutoriel SVG: Les filtres</a></li>
</ul>
