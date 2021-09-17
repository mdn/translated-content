---
title: font-family
slug: Web/CSS/@font-face/font-family
tags:
  - CSS
  - Descripteur
  - Reference
translation_of: Web/CSS/@font-face/font-family
---
<div>{{CSSRef}}</div>

<p>Le descripteur <strong><code>font-family</code></strong> permet aux auteurs d'un document de définir la police de caractères à utiliser au sein d'une règle @ {{cssxref("@font-face")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: css">/* Valeurs de chaînes de caractères */
/* Type &lt;string&gt;                    */
font-family: "police de caractères a";
font-family: 'une autre police';

/* Valeur de type &lt;custom-ident&gt; */
font-family: exemplepolice;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>&lt;family-name&gt;</code></dt>
 <dd>Définit le nom de la police de caractères.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<pre class="brush: css">@font-face {
  font-family: exemplepolice;
  src: url('exemplepolice.ttf');
}
</pre>

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
   <td>{{SpecName('CSS3 Fonts', '#font-family-desc', 'font-family')}}</td>
   <td>{{Spec2('CSS3 Fonts')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.at-rules.font-face.font-family")}}</p>
