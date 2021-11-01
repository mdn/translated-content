---
title: <radialGradient>
slug: Web/SVG/Element/radialGradient
tags:
  - Element
  - SVG
  - SVG Dégradé
translation_of: Web/SVG/Element/radialGradient
---
<div>{{SVGRef}}</div>

<div>L'élément <a href="/fr/docs/Web/SVG">SVG </a><strong><code>&lt;radialGradient&gt;</code></strong> permet de définir un dégradé radial afin de dessiner un contour, ou de remplir des éléments SVG.</div>

<h2 id="Contexte_d'utilisation">Contexte d'utilisation</h2>

<p>{{svginfo}}</p>

<h2 id="Attributs">Attributs</h2>

<h3 id="Attributs_globaux">Attributs globaux</h3>

<ul>
 <li><a href="/fr/docs/Web/SVG/Attribute#Attributs_de_base">Attributs de base</a> »</li>
 <li><a href="/fr/docs/Web/SVG/Attribute#Attributs_de_pr%C3%A9sentation">Références des attributs SVG</a> »</li>
 <li><a href="/fr/docs/Web/SVG/Attribute#Attributs_XLink">Attributs Xlink</a> »</li>
 <li>{{SVGAttr("class")}}</li>
 <li>{{SVGAttr("style")}}</li>
 <li>{{SVGAttr("externalResourcesRequired")}}</li>
</ul>

<h3 id="Attributs_spécifiques">Attributs spécifiques</h3>

<ul>
 <li>{{SVGAttr("gradientUnits")}}</li>
 <li>{{SVGAttr("gradientTransform")}}</li>
 <li>{{SVGAttr("cx")}}</li>
 <li>{{SVGAttr("cy")}}</li>
 <li>{{SVGAttr("r")}}</li>
 <li>{{SVGAttr("fx")}}</li>
 <li>{{SVGAttr("fy")}}</li>
 <li>{{SVGAttr("fr")}}</li>
 <li>{{SVGAttr("spreadMethod")}}</li>
 <li>{{SVGAttr("xlink:href")}}</li>
</ul>

<h2 id="DOM_Interface">DOM Interface</h2>

<p>Cet élément implémente l'interface {{domxref("SVGRadialGradientElement")}}.</p>

<h2 id="Exemple">Exemple</h2>

<h3 id="SVG">SVG</h3>

<pre class="brush: html">&lt;svg width="120" height="120" viewBox="0 0 120 120"
   xmlns="http://www.w3.org/2000/svg"&gt;

  &lt;defs&gt;
    &lt;radialGradient id="exampleGradient"&gt;
      &lt;stop offset="10%" stop-color="gold"/&gt;
      &lt;stop offset="95%" stop-color="green"/&gt;
    &lt;/radialGradient&gt;
  &lt;/defs&gt;

  &lt;circle fill="url(#exampleGradient)" cx="60" cy="60" r="50"/&gt;
&lt;/svg&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{ EmbedLiveSample('Exemple', 120, 120, '', 'Web/SVG/Element/radialGradient') }}</p>

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
   <td>{{SpecName('SVG2', 'pservers.html#RadialGradients', '&lt;radialGradient&gt;')}}</td>
   <td>{{Spec2('SVG2')}}</td>
   <td>Added <code>fr</code> attribute</td>
  </tr>
  <tr>
   <td>{{SpecName('SVG1.1', 'pservers.html#RadialGradients', '&lt;radialGradient&gt;')}}</td>
   <td>{{Spec2('SVG1.1')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("svg.elements.radialGradient")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{SVGElement("linearGradient")}}</li>
</ul>
