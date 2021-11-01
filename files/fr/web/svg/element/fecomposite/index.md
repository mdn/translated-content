---
title: <feComposite>
slug: Web/SVG/Element/feComposite
tags:
  - Element
  - SVG
  - SVG Filter
translation_of: Web/SVG/Element/feComposite
---
<div>{{SVGRef}}</div>

<p>La primitive de filtre <a href="/fr/docs/Web/SVG">SVG</a> <strong><code>&lt;feComposite&gt;</code></strong> effectue la combinaison de deux images en entrée, pixel par pixel, en utilisant une des opérations de composition de Porter-Duff: <code>over</code><em>, </em><code>in</code><em>, </em><code>atop</code><em>, </em><code>out</code><em>, </em><code>xor</code>, et <code>lighter</code>. Il est également possible d'appliquer une opération de type <code>arithmetic</code> (avec un résultat borné entre [0..1]).</p>

<p>L'opération <code>arithmetic</code> est utile pour combiner le résultat de {{SVGElement("feDiffuseLighting")}} et {{SVGElement("feSpecularLighting")}} avec des textures. Si l'opération <code>arithmetic</code> est choisie, chaque pixel est calculé à l'aide de la formule suivante:</p>

<pre class="brush: plain">result = k1*i1*i2 + k2*i1 + k3*i2 + k4
</pre>

<p>où</p>

<ul>
 <li><code>i1</code> et <code>i2</code> indiquent les valeurs des pixels correspondant aux images en entrée, {{SVGAttr("in")}} et {{SVGAttr("in2")}} respectivement</li>
 <li><code>k1, k2, k3</code> et <code>k4</code> indiquent les valeurs des attributs du même nom</li>
</ul>

<h2 id="Contexte_d'utilisation">Contexte d'utilisation</h2>

<p>{{svginfo}}</p>

<h2 id="Attributs">Attributs</h2>

<h3 id="Attributs_globaux">Attributs globaux</h3>

<ul>
 <li><a href="/fr/docs/Web/SVG/Attribute#Attributs_de_présentation">Attributs de base</a></li>
 <li><a href="/fr/docs/Web/SVG/Attribute#Presentation_attributes">Attributs de présentation</a></li>
 <li><a href="/fr/docs/Web/SVG/Attribute#Attributs_de_primitives_de_filtre">Attributs de primitive de filtre</a></li>
 <li>{{SVGAttr("class")}}</li>
 <li>{{SVGAttr("style")}}</li>
</ul>

<h3 id="Attributs_spécifiques">Attributs spécifiques</h3>

<ul>
 <li>{{SVGAttr("in")}}</li>
 <li>{{SVGAttr("in2")}}</li>
 <li>{{SVGAttr("operator")}}</li>
 <li>{{SVGAttr("k1")}}</li>
 <li>{{SVGAttr("k2")}}</li>
 <li>{{SVGAttr("k3")}}</li>
 <li>{{SVGAttr("k4")}}</li>
</ul>

<h2 id="Interface_DOM">Interface DOM</h2>

<p>Cet élément implémente l'interface {{domxref("SVGFECompositeElement")}}.</p>

<h2 id="Exemple">Exemple</h2>

<h3 id="SVG">SVG</h3>

<pre>&lt;svg width="330" height="195" viewBox="0 0 1100 650" version="1.1"
     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"&gt;
  &lt;title&gt;Example feComposite - Examples of feComposite operations&lt;/title&gt;
  &lt;desc&gt;Four rows of six pairs of overlapping triangles depicting
        the six different feComposite operators under different
        opacity values and different clearing of the background.&lt;/desc&gt;
	&lt;defs&gt;
    &lt;desc&gt;Define two sets of six filters for each of the six compositing operators.
          The first set wipes out the background image by flooding with opaque white.
          The second set does not wipe out the background, with the result
          that the background sometimes shines through and is other cases
          is blended into itself (i.e., "double-counting").&lt;/desc&gt;
    &lt;filter id="overFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%"&gt;
      &lt;feFlood flood-color="#ffffff" flood-opacity="1" result="flood"/&gt;
      &lt;feComposite in="SourceGraphic" in2="BackgroundImage" operator="over" result="comp"/&gt;
      &lt;feMerge&gt; &lt;feMergeNode in="flood"/&gt; &lt;feMergeNode in="comp"/&gt; &lt;/feMerge&gt;
    &lt;/filter&gt;
    &lt;filter id="inFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%"&gt;
      &lt;feFlood flood-color="#ffffff" flood-opacity="1" result="flood"/&gt;
      &lt;feComposite in="SourceGraphic" in2="BackgroundImage" operator="in" result="comp"/&gt;
      &lt;feMerge&gt; &lt;feMergeNode in="flood"/&gt; &lt;feMergeNode in="comp"/&gt; &lt;/feMerge&gt;
    &lt;/filter&gt;
    &lt;filter id="outFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%"&gt;
      &lt;feFlood flood-color="#ffffff" flood-opacity="1" result="flood"/&gt;
      &lt;feComposite in="SourceGraphic" in2="BackgroundImage" operator="out" result="comp"/&gt;
      &lt;feMerge&gt; &lt;feMergeNode in="flood"/&gt; &lt;feMergeNode in="comp"/&gt; &lt;/feMerge&gt;
    &lt;/filter&gt;
    &lt;filter id="atopFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%"&gt;
      &lt;feFlood flood-color="#ffffff" flood-opacity="1" result="flood"/&gt;
      &lt;feComposite in="SourceGraphic" in2="BackgroundImage" operator="atop" result="comp"/&gt;
      &lt;feMerge&gt; &lt;feMergeNode in="flood"/&gt; &lt;feMergeNode in="comp"/&gt; &lt;/feMerge&gt;
    &lt;/filter&gt;
    &lt;filter id="xorFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%"&gt;
      &lt;feFlood flood-color="#ffffff" flood-opacity="1" result="flood"/&gt;
      &lt;feComposite in="SourceGraphic" in2="BackgroundImage" operator="xor" result="comp"/&gt;
      &lt;feMerge&gt; &lt;feMergeNode in="flood"/&gt; &lt;feMergeNode in="comp"/&gt; &lt;/feMerge&gt;
    &lt;/filter&gt;
    &lt;filter id="arithmeticFlood" filterUnits="objectBoundingBox"
            x="-5%" y="-5%" width="110%" height="110%"&gt;
      &lt;feFlood flood-color="#ffffff" flood-opacity="1" result="flood"/&gt;
      &lt;feComposite in="SourceGraphic" in2="BackgroundImage" result="comp"
                   operator="arithmetic" k1=".5" k2=".5" k3=".5" k4=".5"/&gt;
      &lt;feMerge&gt; &lt;feMergeNode in="flood"/&gt; &lt;feMergeNode in="comp"/&gt; &lt;/feMerge&gt;
    &lt;/filter&gt;
    &lt;filter id="overNoFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%"&gt;
      &lt;feComposite in="SourceGraphic" in2="BackgroundImage" operator="over" result="comp"/&gt;
    &lt;/filter&gt;
    &lt;filter id="inNoFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%"&gt;
      &lt;feComposite in="SourceGraphic" in2="BackgroundImage" operator="in" result="comp"/&gt;
    &lt;/filter&gt;
    &lt;filter id="outNoFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%"&gt;
      &lt;feComposite in="SourceGraphic" in2="BackgroundImage" operator="out" result="comp"/&gt;
    &lt;/filter&gt;
    &lt;filter id="atopNoFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%"&gt;
      &lt;feComposite in="SourceGraphic" in2="BackgroundImage" operator="atop" result="comp"/&gt;
    &lt;/filter&gt;
    &lt;filter id="xorNoFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%"&gt;
      &lt;feComposite in="SourceGraphic" in2="BackgroundImage" operator="xor" result="comp"/&gt;
    &lt;/filter&gt;
    &lt;filter id="arithmeticNoFlood" filterUnits="objectBoundingBox"
            x="-5%" y="-5%" width="110%" height="110%"&gt;
      &lt;feComposite in="SourceGraphic" in2="BackgroundImage" result="comp"
                   operator="arithmetic" k1=".5" k2=".5" k3=".5" k4=".5"/&gt;
    &lt;/filter&gt;
    &lt;path id="Blue100" d="M 0 0 L 100 0 L 100 100 z" fill="#00ffff" /&gt;
    &lt;path id="Red100" d="M 0 0 L 0 100 L 100 0 z" fill="#ff00ff" /&gt;
    &lt;path id="Blue50" d="M 0 125 L 100 125 L 100 225 z" fill="#00ffff" fill-opacity=".5" /&gt;
    &lt;path id="Red50" d="M 0 125 L 0 225 L 100 125 z" fill="#ff00ff" fill-opacity=".5" /&gt;
    &lt;g id="TwoBlueTriangles"&gt;
      &lt;use xlink:href="#Blue100"/&gt;
      &lt;use xlink:href="#Blue50"/&gt;
    &lt;/g&gt;
    &lt;g id="BlueTriangles"&gt;
      &lt;use transform="translate(275,25)" xlink:href="#TwoBlueTriangles"/&gt;
      &lt;use transform="translate(400,25)" xlink:href="#TwoBlueTriangles"/&gt;
      &lt;use transform="translate(525,25)" xlink:href="#TwoBlueTriangles"/&gt;
      &lt;use transform="translate(650,25)" xlink:href="#TwoBlueTriangles"/&gt;
      &lt;use transform="translate(775,25)" xlink:href="#TwoBlueTriangles"/&gt;
      &lt;use transform="translate(900,25)" xlink:href="#TwoBlueTriangles"/&gt;
    &lt;/g&gt;
  &lt;/defs&gt;

  &lt;rect fill="none" stroke="blue" x="1" y="1" width="1098" height="648"/&gt;
  &lt;g font-family="Verdana" font-size="40" shape-rendering="crispEdges"&gt;
    &lt;desc&gt;Render the examples using the filters that draw on top of
          an opaque white surface, thus obliterating the background.&lt;/desc&gt;
    &lt;g enable-background="new"&gt;
      &lt;text x="15" y="75"&gt;opacity 1.0&lt;/text&gt;
      &lt;text x="15" y="115" font-size="27"&gt;(with feFlood)&lt;/text&gt;
      &lt;text x="15" y="200"&gt;opacity 0.5&lt;/text&gt;
      &lt;text x="15" y="240" font-size="27"&gt;(with feFlood)&lt;/text&gt;
      &lt;use xlink:href="#BlueTriangles"/&gt;
      &lt;g transform="translate(275,25)"&gt;
        &lt;use xlink:href="#Red100" filter="url(#overFlood)" /&gt;
        &lt;use xlink:href="#Red50" filter="url(#overFlood)" /&gt;
        &lt;text x="5" y="275"&gt;over&lt;/text&gt;
      &lt;/g&gt;
      &lt;g transform="translate(400,25)"&gt;
        &lt;use xlink:href="#Red100" filter="url(#inFlood)" /&gt;
        &lt;use xlink:href="#Red50" filter="url(#inFlood)" /&gt;
        &lt;text x="35" y="275"&gt;in&lt;/text&gt;
      &lt;/g&gt;
      &lt;g transform="translate(525,25)"&gt;
        &lt;use xlink:href="#Red100" filter="url(#outFlood)" /&gt;
        &lt;use xlink:href="#Red50" filter="url(#outFlood)" /&gt;
        &lt;text x="15" y="275"&gt;out&lt;/text&gt;
      &lt;/g&gt;
      &lt;g transform="translate(650,25)"&gt;
        &lt;use xlink:href="#Red100" filter="url(#atopFlood)" /&gt;
        &lt;use xlink:href="#Red50" filter="url(#atopFlood)" /&gt;
        &lt;text x="10" y="275"&gt;atop&lt;/text&gt;
      &lt;/g&gt;
      &lt;g transform="translate(775,25)"&gt;
        &lt;use xlink:href="#Red100" filter="url(#xorFlood)" /&gt;
        &lt;use xlink:href="#Red50" filter="url(#xorFlood)" /&gt;
        &lt;text x="15" y="275"&gt;xor&lt;/text&gt;
      &lt;/g&gt;
      &lt;g transform="translate(900,25)"&gt;
        &lt;use xlink:href="#Red100" filter="url(#arithmeticFlood)" /&gt;
        &lt;use xlink:href="#Red50" filter="url(#arithmeticFlood)" /&gt;
        &lt;text x="-25" y="275"&gt;arithmetic&lt;/text&gt;
      &lt;/g&gt;
    &lt;/g&gt;
    &lt;g transform="translate(0,325)" enable-background="new"&gt;
    &lt;desc&gt;Render the examples using the filters that do not obliterate
          the background, thus sometimes causing the background to continue
          to appear in some cases, and in other cases the background
          image blends into itself ("double-counting").&lt;/desc&gt;
      &lt;text x="15" y="75"&gt;opacity 1.0&lt;/text&gt;
      &lt;text x="15" y="115" font-size="27"&gt;(without feFlood)&lt;/text&gt;
      &lt;text x="15" y="200"&gt;opacity 0.5&lt;/text&gt;
      &lt;text x="15" y="240" font-size="27"&gt;(without feFlood)&lt;/text&gt;
      &lt;use xlink:href="#BlueTriangles"/&gt;
      &lt;g transform="translate(275,25)"&gt;
        &lt;use xlink:href="#Red100" filter="url(#overNoFlood)" /&gt;
        &lt;use xlink:href="#Red50" filter="url(#overNoFlood)" /&gt;
        &lt;text x="5" y="275"&gt;over&lt;/text&gt;
      &lt;/g&gt;
      &lt;g transform="translate(400,25)"&gt;
        &lt;use xlink:href="#Red100" filter="url(#inNoFlood)" /&gt;
        &lt;use xlink:href="#Red50" filter="url(#inNoFlood)" /&gt;
        &lt;text x="35" y="275"&gt;in&lt;/text&gt;
      &lt;/g&gt;
      &lt;g transform="translate(525,25)"&gt;
        &lt;use xlink:href="#Red100" filter="url(#outNoFlood)" /&gt;
        &lt;use xlink:href="#Red50" filter="url(#outNoFlood)" /&gt;
        &lt;text x="15" y="275"&gt;out&lt;/text&gt;
      &lt;/g&gt;
      &lt;g transform="translate(650,25)"&gt;
        &lt;use xlink:href="#Red100" filter="url(#atopNoFlood)" /&gt;
        &lt;use xlink:href="#Red50" filter="url(#atopNoFlood)" /&gt;
        &lt;text x="10" y="275"&gt;atop&lt;/text&gt;
      &lt;/g&gt;
      &lt;g transform="translate(775,25)"&gt;
        &lt;use xlink:href="#Red100" filter="url(#xorNoFlood)" /&gt;
        &lt;use xlink:href="#Red50" filter="url(#xorNoFlood)" /&gt;
        &lt;text x="15" y="275"&gt;xor&lt;/text&gt;
      &lt;/g&gt;
      &lt;g transform="translate(900,25)"&gt;
        &lt;use xlink:href="#Red100" filter="url(#arithmeticNoFlood)" /&gt;
        &lt;use xlink:href="#Red50" filter="url(#arithmeticNoFlood)" /&gt;
        &lt;text x="-25" y="275"&gt;arithmetic&lt;/text&gt;
      &lt;/g&gt;
    &lt;/g&gt;
  &lt;/g&gt;
&lt;/svg&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>Cette image affine le résultat désiré.</p>

<p><img alt="Example feComposite — Examples of feComposite operations" src="https://www.w3.org/TR/SVG11/images/filters/feComposite.png"></p>

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
   <td>{{SpecName('Filters 1.0', '#feCompositeElement', '&lt;feComposite&gt;')}}</td>
   <td>{{Spec2('Filters 1.0')}}</td>
   <td>Ajoute la valeur <code>lighter</code> pour l'attribut <code>operator</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('SVG1.1', 'filters.html#feCompositeElement', '&lt;feComposite&gt;')}}</td>
   <td>{{Spec2('SVG1.1')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("svg.elements.feComposite")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{SVGElement("filter")}}</li>
 <li>{{SVGElement("animate")}}</li>
 <li>{{SVGElement("set")}}</li>
 <li>{{SVGElement("feBlend")}}</li>
 <li>{{SVGElement("feColorMatrix")}}</li>
 <li>{{SVGElement("feComponentTransfer")}}</li>
 <li>{{SVGElement("feConvolveMatrix")}}</li>
 <li>{{SVGElement("feDiffuseLighting")}}</li>
 <li>{{SVGElement("feDisplacementMap")}}</li>
 <li>{{SVGElement("feFlood")}}</li>
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
