---
title: mask-mode
slug: Web/CSS/mask-mode
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/mask-mode
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p>La propriété <strong><code>mask-mode</code></strong> détermine si le masque défini par {{cssxref("mask-image")}} est considéré comme un masque de luminance ou un masque alpha (transparence).</p>

<pre class="brush:css no-line-numbers">/* Valeurs avec un mot-clé */
mask-mode: alpha;
mask-mode: luminance;
mask-mode: match-source;

/* Gestion de plusieurs masques */
mask-mode: alpha, match-source;

/* Valeurs globales */
mask-mode: inherit;
mask-mode: initial;
mask-mode: unset;
</pre>

<h2 id="Syntaxe">Syntaxe</h2>

<p>La propriété <code>mask-mode</code> est définie avec un ou plusieurs mots-clés parmi ceux de la liste suivante, séparés par des virgules.</p>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>alpha</code></dt>
 <dd>Ce mot-clé indique que ce sont les valeurs du canal alpha (le canal de transparence) qui sont utilisées comme valeurs de masque.</dd>
 <dt><code>luminance</code></dt>
 <dd>Ce mot-clé indique que ce sont les valeurs de luminance qui sont utilisées comme valeurs de masque.</dd>
 <dt><code>match-source</code></dt>
 <dd>
 <p>Si la propriété {{cssxref("mask-image")}} est de type <code>&lt;mask-source&gt;</code>, les valeurs de luminance de l'image doivent être utilisée comme valeurs pour le masque.</p>

 <p>Si elle est de type {{cssxref("&lt;image&gt;")}}, ce seront les valeurs de transparence (canal alpha) qui seront utilisées.</p>
 </dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="Alpha">Alpha</h3>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">#masked {
  width: 100px;
  height: 100px;
  background: blue linear-gradient(red, blue);
  -webkit-mask-image: url(https://mdn.mozillademos.org/files/12668/MDN.svg);
  mask-image: url(https://mdn.mozillademos.org/files/12668/MDN.svg);
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-mode: alpha;
  mask-mode: alpha;
}
</pre>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div id="masked"&gt;&lt;/div&gt;
</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{EmbedLiveSample("Alpha", "110px", "130px")}}</p>

<h3 id="Luminance">Luminance</h3>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">#masked {
  width: 100px;
  height: 100px;
  background-color: #8cffa0;
  -webkit-mask-image: url(https://mdn.mozillademos.org/files/12668/MDN.svg);
  mask-image: url(https://mdn.mozillademos.org/files/12668/MDN.svg);
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-mode: luminance;
  mask-mode: luminance;
}
</pre>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;div id="masked"&gt;&lt;/div&gt;
</pre>

<h4 id="Résultat_2">Résultat</h4>

<p>{{EmbedLiveSample("Luminance", "110px", "130px")}}</p>

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
   <td>{{SpecName("CSS Masks", "#the-mask-mode", "mask-mode")}}</td>
   <td>{{Spec2("CSS Masks")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.mask-mode")}}</p>
