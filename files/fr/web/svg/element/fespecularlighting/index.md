---
title: <feSpecularLighting>
slug: Web/SVG/Element/feSpecularLighting
tags:
  - Element
  - SVG
  - SVG Filter
  - SVG Light Source
translation_of: Web/SVG/Element/feSpecularLighting
---
<div>{{SVGRef}}</div>

<p>La primitive de filtre <a href="/fr/docs/Web/SVG">SVG</a> <strong><code>&lt;feSpecularLighting&gt;</code></strong> éclaire une image en utilisant son canal alpha en tant que relief. L'image résultante est une image RGBA qui dépend de la couleur de la lumière, de sa position et du relief de l'image en entrée. Le calcul de l'éclairage se fait suivant le <a href="https://fr.wikipedia.org/wiki/Ombrage_de_Phong">modèle d'illumination de Phong</a>.</p>

<p>La lumière crée par cette primitive de filtre peut être combinée avec une image de texture à l'aide de l'opérateur <code>arithmetic</code> de la primitive de filtre {{SVGElement("feComposite")}}. De multiples sources lumineuses peuvent être simulées en ajoutant plusieurs éléments à la texture.</p>

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
 <li>{{SVGAttr("surfaceScale")}}</li>
 <li>{{SVGAttr("specularConstant")}}</li>
 <li>{{SVGAttr("specularExponent")}}</li>
 <li>{{SVGAttr("kernelUnitLength")}}</li>
</ul>

<h2 id="Interface_DOM">Interface DOM</h2>

<p>Cet élément implémente l'interface {{domxref("SVGFESpecularLightingElement")}}.</p>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: html; highlight[4-7]">&lt;svg height="200" width="200" viewBox="0 0 220 220"
    xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;filter id = "filter"&gt;
    &lt;feSpecularLighting result="specOut"
        specularExponent="20" lighting-color="#bbbbbb"&gt;
      &lt;fePointLight x="50" y="75" z="200"/&gt;
    &lt;/feSpecularLighting&gt;
    &lt;feComposite in="SourceGraphic" in2="specOut"
        operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/&gt;
  &lt;/filter&gt;
  &lt;circle cx="110" cy="110" r="100" style="filter:url(#filter)"/&gt;
&lt;/svg&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemple", 220, 220)}}</p>

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
   <td>{{SpecName('Filters 1.0', '#feSpecularLightingElement', '&lt;feSpecularLighting&gt;')}}</td>
   <td>{{Spec2('Filters 1.0')}}</td>
   <td>Suppression de la limitation sur l'attribut <code>specularExponent</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('SVG1.1', 'filters.html#feSpecularLightingElement', '&lt;feSpecularLighting&gt;')}}</td>
   <td>{{Spec2('SVG1.1')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("svg.elements.feSpecularLighting")}}</p>

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
 <li>{{SVGElement("feDistantLight")}}</li>
 <li>{{SVGElement("feFlood")}}</li>
 <li>{{SVGElement("feGaussianBlur")}}</li>
 <li>{{SVGElement("feImage")}}</li>
 <li>{{SVGElement("feMerge")}}</li>
 <li>{{SVGElement("feMorphology")}}</li>
 <li>{{SVGElement("feOffset")}}</li>
 <li>{{SVGElement("fePointLight")}}</li>
 <li>{{SVGElement("feSpotLight")}}</li>
 <li>{{SVGElement("feTile")}}</li>
 <li>{{SVGElement("feTurbulence")}}</li>
 <li><a href="/fr/docs/Web/SVG/Tutoriel/filtres">Tutoriel SVG: Filtres</a></li>
</ul>
