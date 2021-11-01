---
title: x
slug: Web/SVG/Attribute/x
tags:
  - Attribut
  - NeedsCompatTable
  - NeedsUpdate
  - SVG
translation_of: Web/SVG/Attribute/x
---
<div>{{SVGRef}}</div>

<p>L'attribut <strong><code>x</code></strong> indique une coordonnée en x pour le système des coordonnées de l'utilisateur. L'effet de cette coordonnée dépend de l'élément sur lequel elle est utilisée. La plupart du temps, elle représente l'abscisse du coin en haut à gauche de la région rectangulaire pour l'élément. Cet attribut a la même syntaxe que <code><a href="https://www.w3.org/TR/SVG11/types.html#DataTypeLength">&lt;length&gt;</a></code></p>

<p>Si cet attribut n'est pas défini, on aura le même effet que si on avait utilisé la valeur <strong>0</strong>. Les éléments {{SVGElement("filter")}} et {{SVGElement("mask")}} font exception à cette règle, la valeur par défaut pour cet attribut est ici <strong>-10%</strong>.</p>

<h2 id="Contexte_d'utilisation">Contexte d'utilisation</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">Catégories</th>
   <td>Aucune</td>
  </tr>
  <tr>
   <th scope="row">Type de valeur</th>
   <td><code><a href="/fr/docs/Web/SVG/Content_type#Coordinate">&lt;coordinate&gt;</a></code></td>
  </tr>
  <tr>
   <th scope="row">Peut être animée</th>
   <td>Oui</td>
  </tr>
  <tr>
   <th scope="row">Spécifications</th>
   <td><a href="https://www.w3.org/TR/SVG/text.html#AltGlyphElementXAttribute">SVG 1.1 (seconde édition) : élément <code>altGlyph</code></a><br>
    <a href="https://www.w3.org/TR/SVG/interact.html#CursorElementXAttribute">SVG 1.1 (seconde édition) : élément <code>cursor</code></a><br>
    <a href="https://www.w3.org/TR/SVG/filters.html#fePointLightXAttribute">SVG 1.1 (seconde édition) : élément <code>fePointLight</code></a><br>
    <a href="https://www.w3.org/TR/SVG/filters.html#feSpotLightXAttribute">SVG 1.1 (seconde édition) : élément <code>feSpotLight</code></a><br>
    <a href="https://www.w3.org/TR/SVG/filters.html#FilterElementXAttribute">SVG 1.1 (seconde édition) : élément <code>filter</code></a><br>
    <a href="https://www.w3.org/TR/SVG/extend.html#ForeignObjectElementXAttribute">SVG 1.1 (seconde édition) : élément <code>foreignObject</code></a><br>
    <a href="https://www.w3.org/TR/SVG/text.html#GlyphRefElementXAttribute">SVG 1.1 (seconde édition) : élément <code>glyphRef</code></a><br>
    <a href="https://www.w3.org/TR/SVG/struct.html#ImageElementXAttribute">SVG 1.1 (seconde édition) : élément <code>image</code></a><br>
    <a href="https://www.w3.org/TR/SVG/pservers.html#PatternElementXAttribute">SVG 1.1 (seconde édition) : élément <code>pattern</code></a><br>
    <a href="https://www.w3.org/TR/SVG/shapes.html#RectElementXAttribute">SVG 1.1 (seconde édition) : élément <code>rect</code></a><br>
    <a href="https://www.w3.org/TR/SVG/struct.html#SVGElementXAttribute">SVG 1.1 (seconde édition) : élément <code>svg</code></a><br>
    <a href="https://www.w3.org/TR/SVG/text.html#TextElementXAttribute">SVG 1.1 (seconde édition) : élément <code>text</code></a><br>
    <a href="https://www.w3.org/TR/SVG/struct.html#UseElementXAttribute">SVG 1.1 (seconde édition) : élément <code>use</code></a><br>
    <a href="https://www.w3.org/TR/SVG/filters.html#FilterPrimitiveXAttribute">SVG 1.1 (seconde édition) : primitive de filtre</a><br>
    <a href="https://www.w3.org/TR/SVG/masking.html#MaskElementXAttribute">SVG 1.1 (seconde édition) : élément <code>mask</code></a><br>
    <a href="https://www.w3.org/TR/SVG/text.html#TSpanElementXAttribute">SVG 1.1 (seconde édition) : élément <code>tspan</code></a></td>
  </tr>
 </tbody>
</table>

<p>{{page("/fr/docs/Web/SVG/Content_type","coordinate")}}</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: xml">&lt;?xml version="1.0"?&gt;
&lt;svg width="120" height="120"
     viewBox="0 0 120 120"
     xmlns="https://www.w3.org/2000/svg"&gt;

  &lt;rect x="10" y="10" width="100" height="100"/&gt;
&lt;/svg&gt;</pre>

<h2 id="Éléments">Éléments</h2>

<p>On peut utiliser l'attribut <code>x</code> sur les éléments suivants :</p>

<ul>
 <li><a href="/fr/docs/Web/SVG/Element#Éléments_de_primitives_de_filtre">Les éléments de primitives de filtres</a></li>
 <li>{{SVGElement("altGlyph")}}</li>
 <li>{{SVGElement("fePointLight")}}</li>
 <li>{{SVGElement("feSpotLight")}}</li>
 <li>{{SVGElement("filter")}}</li>
 <li>{{SVGElement("foreignObject")}}</li>
 <li>{{SVGElement("glyphRef")}}</li>
 <li>{{SVGElement("image")}}</li>
 <li>{{SVGElement("pattern")}}</li>
 <li>{{SVGElement("rect")}}</li>
 <li>{{SVGElement("svg")}}</li>
 <li>{{SVGElement("text")}}</li>
 <li>{{SVGElement("use")}}</li>
 <li>{{SVGElement("mask")}}</li>
 <li>{{SVGElement("tref")}}</li>
 <li>{{SVGElement("tspan")}}</li>
</ul>
