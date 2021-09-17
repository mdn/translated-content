---
title: mask-type
slug: Web/CSS/mask-type
tags:
  - CSS
  - Propriété
  - Reference
  - SVG
translation_of: Web/CSS/mask-type
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>mask-type</code></strong> définit si un masque sera utilisé comme un masque de <em>luminance</em> ou comme un masque de transparence (aussi appelé masque <em>alpha</em>). Cette propriété s'applique sur l'élément SVG {{SVGElement("mask")}}. Le comportement de cette propriété peut être surchargée par la propriété {{cssxref("mask-mode")}} qui définit sur quel élément le masque est appliqué. De façon générale, les masques alpha sont appliqués plus rapidement que les masques de luminance.</p>

<pre class="brush:css no-line-numbers">/* Valeurs avec un mot-clé */
mask-type: luminance;
mask-type: alpha;

/* Valeurs globales */
mask-type: inherit;
mask-type: initial;
mask-type: unset;
</pre>

<h2 id="Syntaxe">Syntaxe</h2>

<p>La propriété <code>mask-type</code> est définie avec un mot-clé parmi ceux définis ci-après.</p>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>luminance</code></dt>
 <dd>Un mot-clé qui indique que l'image du masque doit être utilisée comme un masque de luminance. Autrement dit, ce sont <a href="https://fr.wikipedia.org/wiki/Luminance_relative">les valeurs de luminance relatives</a> qui seront utilisées lorsque le masque sera appliqué.</dd>
 <dt><code>alpha</code></dt>
 <dd>Un mot-clé qui indique que l'image du masque doit être utilisée comme un masque de transparence. Autrement dit, ce sont les valeurs du <a href="https://fr.wikipedia.org/wiki/Canal_alpha">canal alpha</a> de l'image qui seront utilisées lorsque le masque sera appliqué.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="setting_an_alpha_mask">Définir un masque alpha</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div class="redsquare"&gt;&lt;/div&gt;
&lt;svg version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0"&gt;
  &lt;defs&gt;
    &lt;mask id="m" maskContentUnits="objectBoundingBox"
      style="mask-type:alpha"&gt;
      &lt;rect x=".1" y=".1" width=".8" height=".8"
          fill="red" fill-opacity="0.7"/&gt;
    &lt;/mask&gt;
  &lt;/defs&gt;
&lt;/svg&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">.redsquare {
  height: 100px;
  width: 100px;
  background-color: rgb(128, 128, 128);
  border: solid 1px black;
  mask: url("#m");
}</pre>

<h4 id="result">Résultat</h4>

<p>{{EmbedLiveSample('setting_an_alpha_mask', '100%', '102')}}</p>

<h3 id="setting_a_luminance_mask">Définir un masque de luminance</h3>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;div class="redsquare"&gt;&lt;/div&gt;
&lt;svg version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0"&gt;
  &lt;defs&gt;
    &lt;mask id="m" maskContentUnits="objectBoundingBox"
      style="mask-type:luminance"&gt;
      &lt;rect x=".1" y=".1" width=".8" height=".8"
          fill="red" fill-opacity="0.7"/&gt;
    &lt;/mask&gt;
  &lt;/defs&gt;
&lt;/svg&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">.redsquare {
  height: 100px;
  width: 100px;
  background-color: rgb(128, 128, 128);
  border: solid 1px black;
  mask: url("#m");
}</pre>

<h4 id="result_2">Result</h4>

<p>{{EmbedLiveSample('setting_a_luminance_mask', '100%', '102')}}</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS Masks', '#the-mask-type', 'mask-type')}}</td>
   <td>{{Spec2('CSS Masks')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.mask-type")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("mask")}}</li>
 <li>{{cssxref("mask-mode")}}</li>
</ul>
