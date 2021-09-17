---
title: font-variant-east-asian
slug: Web/CSS/font-variant-east-asian
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/font-variant-east-asian
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>font-variant-east-asian</code></strong> contrôle l'utilisation des glyphes alternatifs pour les scripts japonais, chinois et d'Asie orientale.</p>

<pre class="brush:css no-line-numbers">font-variant-east-asian: normal;
font-variant-east-asian: ruby;
font-variant-east-asian: jis78;              /* &lt;east-asian-variant-values&gt; */
font-variant-east-asian: jis83;              /* &lt;east-asian-variant-values&gt; */
font-variant-east-asian: jis90;              /* &lt;east-asian-variant-values&gt; */
font-variant-east-asian: jis04;              /* &lt;east-asian-variant-values&gt; */
font-variant-east-asian: simplified;         /* &lt;east-asian-variant-values&gt; */
font-variant-east-asian: traditional;        /* &lt;east-asian-variant-values&gt; */
font-variant-east-asian: full-width;         /* &lt;east-asian-width-values&gt; */
font-variant-east-asian: proportional-width; /* &lt;east-asian-width-values&gt; */
font-variant-east-asian: ruby full-width jis83;

/* Valeurs globales */
font-variant-east-asian: inherit;
font-variant-east-asian: initial;
font-variant-east-asian: unset;
</pre>

<h2 id="Syntaxe">Syntaxe</h2>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>normal</code></dt>
 <dd>Ce mot-clé désactive les glyphes alternatifs.</dd>
 <dt><code>ruby</code></dt>
 <dd>Ce mot-clé force l'utilisation de glyphes spécifiques pour les caractères ruby. Généralement, ceux-ci sont plus petits et légèrement plus gras pour améliorer le contraste. Ce mot-clé correspond aux valeurs OpenType <code>ruby</code>.</dd>
 <dt><code>&lt;east-asian-variant-values&gt;</code></dt>
 <dd>Ces valeurs définissent un ensemble de variantes de glypes logographiques à utiliser pour l'affichage. Les valeurs possibles sont :
 <table class="standard-table">
  <tbody>
   <tr>
    <th>Mot-clé</th>
    <th>Standard dans lequel sont définis les glyphs</th>
    <th>Équivalent OpenType</th>
   </tr>
   <tr>
    <td><code>jis78</code></td>
    <td><a href="https://en.wikipedia.org/wiki/JIS_X_0208#First_standard">JIS X 0208:1978</a></td>
    <td><code>jp78</code></td>
   </tr>
   <tr>
    <td><code>jis83</code></td>
    <td><a href="https://en.wikipedia.org/wiki/JIS_X_0208#Second_standard">JIS X 0208:1983</a></td>
    <td><code>jp83</code></td>
   </tr>
   <tr>
    <td><code>jis90</code></td>
    <td><a href="https://en.wikipedia.org/wiki/JIS_X_0208#Third_standard">JIS X 0208:1990</a></td>
    <td><code>jp90</code></td>
   </tr>
   <tr>
    <td><code>jis04</code></td>
    <td><a href="https://en.wikipedia.org/wiki/JIS_X_0213">JIS X 0213:2004</a></td>
    <td><code>jp04</code></td>
   </tr>
   <tr>
    <td><code>simplified</code></td>
    <td>Aucun, ce sont les glyphes chinois simplifiés qui sont utilisés.</td>
    <td><code>smpl</code></td>
   </tr>
   <tr>
    <td><code>traditional</code></td>
    <td>Aucun, ce sont les glyphes chinois traditionnels qui sont utilisés.</td>
    <td><code>trad</code></td>
   </tr>
  </tbody>
 </table>
 </dd>
 <dt><em>&lt;<em>east-asian-width-values</em></em>&gt;</dt>
 <dd>Ces valeurs permettent de contrôler le dimensionnement des symboles pour les caractères des langues d'Asie orientale. Deux valeurs sont possibles :
 <ul>
  <li><code>proportional-width</code> qui active l'ensemble de caractères d'Asie orientale qui n'ont pas tous la même largeur. Elle correspond aux valeurs OpenType <code>pwid</code>.</li>
  <li><code>full-width</code> qui active l'ensemble de caractères d'Asie orientale où les caractères ont tous la même taille et forme carrée. Elle correspond aux valeurs OpenType <code>fwid</code>.</li>
 </ul>
 </dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush:css">exemple {
  font-variant-east-asian: ruby;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p class="exemple"&gt;!&lt;/p&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples")}}</p>

<p>{{LiveSampleLink("Exemples","Lien vers l'exemple")}}</p>

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
   <td>{{SpecName('CSS3 Fonts', '#propdef-font-variant-east-asian', 'font-variant-east-asian')}}</td>
   <td>{{Spec2('CSS3 Fonts')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.font-variant-east-asian")}}</p>
