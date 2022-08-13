---
title: Mejoras SVG en Firefox 3
slug: Mozilla/Firefox/Releases/3/SVG_improvements
tags:
  - Firefox 3
  - SVG
  - Todas_las_Categorías
translation_of: Mozilla/Firefox/Releases/3/SVG_improvements
original_slug: Mejoras_SVG_en_Firefox_3
---
<div>{{FirefoxSidebar}}</div>

<p>Firefox 3 ofrece una mejor implementación de <a href="es/SVG">Gráficos Vectoriales Escalables (SVG)</a> en comparación con versiones anteriores de Firefox. Aunque estas características están documentadas en otros sitios, este artículo puede servir como una lista que indique fácilmente qué características se han añadido en Firefox 3.</p>

<ul>
 <li>Se ha implementado el elemento <code>foreignObject</code> ({{ Bug(326966) }}). Vea la <a class="external" href="http://www.w3.org/TR/SVG11/extend.html#ForeignObjectElement">especificación</a> o <a class="external" href="http://weblogs.mozillazine.org/roc/archives/2006/06/the_future_is_now.html">este artículo</a> para más detalles.</li>
 <li>Implementado el elemento <code>pattern</code> (<a class="external" href="http://www.w3.org/TR/SVG11/pservers.html#PatternElement">especificación</a>).</li>
 <li>Implementado el elemento <code>mask</code> (<a class="external" href="http://www.w3.org/TR/SVG11/masking.html#MaskElement">especificación</a>).</li>
 <li>Implementados nuevos filtros (<a class="external" href="http://www.w3.org/TR/SVG11/filters.html">especificación</a>):
  <ul>
   <li><code>filter</code></li>
   <li><code>feDistantLight</code></li>
   <li><code>fePointLight</code></li>
   <li><code>feSpotLight</code></li>
   <li><code>feBlend</code></li>
   <li><code>feColorMatrix</code></li>
   <li><code>feConvolveMatrix</code></li>
   <li><code>feComponentTransfer</code>, <code>feFuncR</code>, <code>feFuncG</code>, <code>feFuncB</code>, <code>feFuncA</code></li>
   <li><code>feComposite</code></li>
   <li><code>feConvolveMatrix</code></li>
   <li><code>feDiffuseLighting</code></li>
   <li><code>feDistantLight</code></li>
   <li><code>feFlood</code></li>
   <li><code>feGaussianBlur</code></li>
   <li><code>feMerge</code>, <code>feMergeNode</code></li>
   <li><code>feMorphology</code></li>
   <li><code>feOffset</code></li>
   <li><code>fePointLight</code></li>
   <li><code>feSpecularLighting</code></li>
   <li><code>feTurbulence</code></li>
   <li><code>feTile</code></li>
  </ul>
 </li>
 <li>Se han arreglado varios fallos en la manipulación del elemento <code>&lt;a&gt;</code> en SVG; ver {{ Bug(267664) }}, {{ Bug(268135) }}, {{ Bug(316248) }}, {{ Bug(317270) }} y {{ Bug(320724) }}.</li>
 <li>Se han implementado los métodos de DOM en SVG <code>getNumberOfChars()</code>, <code>getComputedTextLength()</code>, <code>getSubStringLength()</code>, <code>getStartPositionOfChar()</code>, <code>getEndPositionOfChar()</code>, <code>getRotationOfChar()</code> y <code>getCharNumAtPosition()</code>.</li>
 <li>Implementación del atributo <code>xml:space</code> (<a class="external" href="http://www.w3.org/TR/SVG/text.html#WhiteSpace">especificación</a>).</li>
 <li>Se ha implementado el comportamiento por defecto de <code>fill</code>/<code>stroke</code> (<a class="external" href="http://www.w3.org/TR/SVG/painting.html#SpecifyingPaint">especificación</a>).</li>
 <li>Se implementan ya las unidades <code>em</code> y <code>ex</code> para indicar longitudes ({{ Bug(305859) }}).</li>
</ul>

<h3 id="Vea_tambi.C3.A9n" name="Vea_tambi.C3.A9n">Vea también</h3>

<ul>
 <li><a href="es/SVG">SVG</a></li>
 <li><a href="es/SVG_en_Firefox">SVG en Firefox</a></li>
 <li><a href="es/Firefox_3_para_desarrolladores">Firefox 3 para desarrolladores</a></li>
</ul>

<p> </p>

<div class="noinclude"> </div>

<p>{{ languages( { "en": "en/SVG_improvements_in_Firefox_3", "fr": "fr/Am\u00e9liorations_SVG_dans_Firefox_3", "ja": "ja/SVG_improvements_in_Firefox_3", "pl": "pl/Poprawki_SVG_w_Firefoksie_3" } ) }}</p>
