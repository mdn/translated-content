---
title: mask-image
slug: Web/CSS/mask-image
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/mask-image
---
<div>{{CSSRef}}</div>

<p>La propriété CSS <strong><code>mask-image</code></strong> définit l'image qui sera utilisée comme masque pour un élément.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* Valeur avec un mot-clé */
mask-image: none;

/* Valeur de type &lt;mask-source&gt; */
mask-image: url(masks.svg#mask1);

/* Valeurs de type &lt;image&gt; */
mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);
mask-image: image(url(mask.png), skyblue);

/* Gestion de plusieurs masques */
mask-image: image(url(mask.png), skyblue, linear-gradient(rgba(0, 0, 0, 1.0), transparent);

/* Valeurs globales */
mask-image: inherit;
mask-image: initial;
mask-image: unset;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>Le masque défini par ce mot-clé sera une image noire transparente.</dd>
 <dt><code>&lt;mask-source&gt;</code></dt>
 <dd>Une référence {{cssxref("&lt;url&gt;")}} vers un masque ({{SVGElement("mask")}}) ou une image CSS.</dd>
 <dt>{{cssxref("&lt;image&gt;")}}</dt>
 <dd>Une image utilisée pour le masque.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css;">#masked {
  width: 100px;
  height: 100px;
  background-color: #8cffa0;
  -webkit-mask-image: url(https://mdn.mozillademos.org/files/12676/star.svg);
  mask-image: url(https://mdn.mozillademos.org/files/12676/star.svg);
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div id="masked"&gt;&lt;/div&gt;
</pre>

<p>{{EmbedLiveSample("Exemples", "100px", "100px",'', '', 'hide-codepen-jsfiddle') }}</p>

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
   <td>{{SpecName("CSS Masks", "#the-mask-image", "mask-image")}}</td>
   <td>{{Spec2("CSS Masks")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.mask-image")}}</p>
