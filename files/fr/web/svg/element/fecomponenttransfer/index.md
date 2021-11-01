---
title: <feComponentTransfer>
slug: Web/SVG/Element/feComponentTransfer
tags:
  - Element
  - SVG
  - SVG Filter
translation_of: Web/SVG/Element/feComponentTransfer
---
<div>{{SVGRef}}</div>

<p>La primitive de filtre <a href="/fr/docs/Web/SVG">SVG</a> <strong><code>&lt;feComponentTransfer&gt;</code></strong> permet d'effectuer un remappage des composantes de couleur (rouge, bleu, vert et alpha) de chaque pixel. Cela permet notamment de régler la luminosité, le constraste, la balance des couleurs ou encore le seuillage.</p>

<p>Les calculs sont effectués sur les valeurs de couleur non prémultipliées. Chaque canal de couleur est modifié en utilisant le résultat des éléments {{SVGElement("feFuncR")}}, {{SVGElement("feFuncB")}}, {{SVGElement("feFuncG")}}, et {{SVGElement("feFuncA")}} placés à l'intérieur de la balise.</p>

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
</ul>

<h2 id="Interface_DOM">Interface DOM</h2>

<p>Cet élément implémente l'interface {{domxref("SVGFEComponentTransferElement")}}.</p>

<h2 id="Exemple">Exemple</h2>

<h3 id="SVG">SVG</h3>

<pre class="brush: html; highlight[12-17,20-24,27-31,34-38]">&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300"&gt;
  &lt;defs&gt;
    &lt;linearGradient id="rainbow" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100%" y2="0"&gt;
      &lt;stop offset="0" stop-color="#ff0000"&gt;&lt;/stop&gt;
      &lt;stop offset="0.2" stop-color="#ffff00"&gt;&lt;/stop&gt;
      &lt;stop offset="0.4" stop-color="#00ff00"&gt;&lt;/stop&gt;
      &lt;stop offset="0.6" stop-color="#00ffff"&gt;&lt;/stop&gt;
      &lt;stop offset="0.8" stop-color="#0000ff"&gt;&lt;/stop&gt;
      &lt;stop offset="1" stop-color="#800080"&gt;&lt;/stop&gt;
    &lt;/linearGradient&gt;
    &lt;filter id="identity" x="0" y="0" width="100%" height="100%"&gt;
      &lt;feComponentTransfer&gt;
        &lt;feFuncR type="identity"&gt;&lt;/feFuncR&gt;
        &lt;feFuncG type="identity"&gt;&lt;/feFuncG&gt;
        &lt;feFuncB type="identity"&gt;&lt;/feFuncB&gt;
        &lt;feFuncA type="identity"&gt;&lt;/feFuncA&gt;
      &lt;/feComponentTransfer&gt;
    &lt;/filter&gt;
    &lt;filter id="table" x="0" y="0" width="100%" height="100%"&gt;
      &lt;feComponentTransfer&gt;
        &lt;feFuncR type="table" tableValues="0 0 1 1"&gt;&lt;/feFuncR&gt;
        &lt;feFuncG type="table" tableValues="1 1 0 0"&gt;&lt;/feFuncG&gt;
        &lt;feFuncB type="table" tableValues="0 1 1 0"&gt;&lt;/feFuncB&gt;
      &lt;/feComponentTransfer&gt;
    &lt;/filter&gt;
    &lt;filter id="linear" x="0" y="0" width="100%" height="100%"&gt;
      &lt;feComponentTransfer&gt;
        &lt;feFuncR type="linear" slope="0.5" intercept="0"&gt;&lt;/feFuncR&gt;
        &lt;feFuncG type="linear" slope="0.5" intercept="0.25"&gt;&lt;/feFuncG&gt;
        &lt;feFuncB type="linear" slope="0.5" intercept="0.5"&gt;&lt;/feFuncB&gt;
      &lt;/feComponentTransfer&gt;
    &lt;/filter&gt;
    &lt;filter id="gamma" x="0" y="0" width="100%" height="100%"&gt;
      &lt;feComponentTransfer&gt;
        &lt;feFuncR type="gamma" amplitude="4" exponent="7" offset="0"&gt;&lt;/feFuncR&gt;
        &lt;feFuncG type="gamma" amplitude="4" exponent="4" offset="0"&gt;&lt;/feFuncG&gt;
        &lt;feFuncB type="gamma" amplitude="4" exponent="1" offset="0"&gt;&lt;/feFuncB&gt;
      &lt;/feComponentTransfer&gt;
    &lt;/filter&gt;
  &lt;/defs&gt;

  &lt;g font-weight="bold"&gt;
    &lt;text x="0" y="5%"&gt;Default&lt;/text&gt;
    &lt;rect x="0" y="8%" width="100%" height="20"&gt;&lt;/rect&gt;
    &lt;text x="0" y="26%"&gt;Identity&lt;/text&gt;
    &lt;rect x="0" y="29%" width="100%" height="20" style="filter:url(#identity)"&gt;&lt;/rect&gt;
    &lt;text x="0" y="47%"&gt;Table lookup&lt;/text&gt;
    &lt;rect x="0" y="50%" width="100%" height="20" style="filter:url(#table)"&gt;&lt;/rect&gt;
    &lt;text x="0" y="68%"&gt;Linear function&lt;/text&gt;
    &lt;rect x="0" y="71%" width="100%" height="20" style="filter:url(#linear)"&gt;&lt;/rect&gt;
    &lt;text x="0" y="89%"&gt;Gamma function&lt;/text&gt;
    &lt;rect x="0" y="92%" width="100%" height="20" style="filter:url(#gamma)"&gt;&lt;/rect&gt;
  &lt;/g&gt;
&lt;/svg&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">rect {
  fill: url(#rainbow);
}</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemple", "100%", 340)}}</p>

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
   <td>{{SpecName('Filters 1.0', '#feComponentTransferElement', '&lt;feComponentTransfer&gt;')}}</td>
   <td>{{Spec2('Filters 1.0')}}</td>
   <td>Spécifie que les fonctions de transfert non définies sont traitées comme si elles avaient été définies avec pour  {{SVGAttr("type")}} <code>identity</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('SVG1.1', 'filters.html#feComponentTransferElement', '&lt;feComponentTransfer&gt;')}}</td>
   <td>{{Spec2('SVG1.1')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("svg.elements.feComponentTransfer")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{SVGElement("filter")}}</li>
 <li>{{SVGElement("feBlend")}}</li>
 <li>{{SVGElement("feColorMatrix")}}</li>
 <li>{{SVGElement("feComposite")}}</li>
 <li>{{SVGElement("feConvolveMatrix")}}</li>
 <li>{{SVGElement("feDiffuseLighting")}}</li>
 <li>{{SVGElement("feDisplacementMap")}}</li>
 <li>{{SVGElement("feFlood")}}</li>
 <li>{{SVGElement("feFuncA")}}</li>
 <li>{{SVGElement("feFuncB")}}</li>
 <li>{{SVGElement("feFuncG")}}</li>
 <li>{{SVGElement("feFuncR")}}</li>
 <li>{{SVGElement("feGaussianBlur")}}</li>
 <li>{{SVGElement("feImage")}}</li>
 <li>{{SVGElement("feMerge")}}</li>
 <li>{{SVGElement("feMorphology")}}</li>
 <li>{{SVGElement("feOffset")}}</li>
 <li>{{SVGElement("feSpecularLighting")}}</li>
 <li>{{SVGElement("feTile")}}</li>
 <li>{{SVGElement("feTurbulence")}}</li>
 <li><a href="/fr/docs/Web/SVG/Tutoriel/filtres" title="en/SVG/Tutorial/Filter_effects">Tutoriel SVG: Filtres</a></li>
</ul>
