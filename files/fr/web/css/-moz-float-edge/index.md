---
title: '-moz-float-edge'
slug: Web/CSS/-moz-float-edge
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/-moz-float-edge
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<p>La propriété <strong><code>-moz-float-edge</code></strong> définit si les propriétés de hauteur et de larguer d'un élément incluent la marge, la bordure et/ou le remplissage (<em>padding</em>).</p>

<pre class="brush:css no-line-numbers">/* Valeurs avec un mot-clé */
-moz-float-edge: border-box;
-moz-float-edge: content-box;
-moz-float-edge: margin-box;
-moz-float-edge: padding-box;

/* Valeurs globales */
-moz-float-edge: inherit;
-moz-float-edge: initial;
-moz-float-edge: unset;
</pre>

<h2 id="Syntaxe">Syntaxe</h2>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>border-box</code></dt>
 <dd>Les propriétés de hauteur et de largeur incluent le contenu, le remplissage et la bordure mais pas la marge.</dd>
 <dt><code>content-box</code></dt>
 <dd>Les propriétés de hauteur et de largeur incluent le contenu, mais pas le remplissage, la bordure et la marge.</dd>
 <dt><code>margin-box</code></dt>
 <dd>Les propriétés de hauteur et de largeur incluent le contenu, le remplissage, la bordure et la marge.</dd>
 <dt><code>padding-box</code></dt>
 <dd>Les propriétés de hauteur et de largeur incluent le contenu et le remplissage mais pas la bordure ni la marge.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.box {
  display: block;
  height: 5px;
  margin: 0.5em auto 0.5em auto;
  color: gray;
  -moz-float-edge: margin-box;
  box-sizing: border-box;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="html">&lt;div class="box"&gt;
   &lt;p&gt;
      Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
   &lt;/p&gt;
&lt;/div&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemples')}}</p>

<h2 id="Spécifications">Spécifications</h2>

<p>Cette pseudo-classe est une pseudo-classe propriétaire liée à Gecko/Mozilla et ne fait partie d'aucune spécification.</p>

<p>{{cssinfo}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{bug(432891)}}</li>
</ul>
