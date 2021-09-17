---
title: text-emphasis-color
slug: Web/CSS/text-emphasis-color
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/text-emphasis-color
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>text-emphasis-color</code></strong> définit la couleur utilisée pour dessiner les marques d'emphase. Celle-ci peut être (re)définie grâce à la propriété raccourcie {{cssxref("text-emphasis")}}.</p>

<pre class="brush:css no-line-numbers">/* Valeur initiale */
text-emphasis-color: currentColor;

/* Valeur de couleur */
/* Type &lt;color&gt; */
text-emphasis-color: #555;
text-emphasis-color: blue;
text-emphasis-color: rgba(90, 200, 160, 0.8);
text-emphasis-color: transparent;

/* Valeurs globales */
text-emphasis-color: inherit;
text-emphasis-color: initial;
text-emphasis-color: unset;
</pre>

<h2 id="Syntaxe">Syntaxe</h2>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>&lt;color&gt;</code></dt>
 <dd>Définit la couleur utilisée pour les marques. Si on ne définit pas de couleur, ce sera la couleur courante du texte qui sera utilisée.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;&lt;em&gt;Coucou&lt;/em&gt;, je suis &lt;em&gt;là&lt;/em&gt;&lt;/p&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">em {
  text-emphasis-style: sesame;
  text-emphasis-color: blue;
}</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples")}}</p>

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
   <td>{{SpecName('CSS3 Text Decoration', '#text-emphasis-color-property', 'text-emphasis')}}</td>
   <td>{{Spec2('CSS3 Text Decoration')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.text-emphasis-color")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref('text-emphasis-style')}}</li>
 <li>{{cssxref('text-emphasis')}}.</li>
 <li>{{cssxref('text-emphasis-position')}}</li>
 <li>Le type de données {{cssxref("&lt;color&gt;")}}</li>
 <li>D'autres propriétés relatives aux couleurs {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} et {{cssxref("column-rule-color")}}</li>
 <li><a href="/fr/docs/Web/HTML/Applying_color">Appliquer des couleurs sur des éléments HTML</a></li>
</ul>
