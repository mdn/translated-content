---
title: scroll-snap-stop
slug: Web/CSS/scroll-snap-stop
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/scroll-snap-stop
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p>La propriété <strong><code>scroll-snap-stop</code></strong> définit la façon dont un conteneur de défilement peut « passer outre » certaines positions d'accroche.</p>

<pre class="brush:css no-line-numbers">/* Valeurs avec un mot-clé */
scroll-snap-stop: normal;
scroll-snap-stop: always;

/* Valeurs globales */
scroll-snap-type: inherit;
scroll-snap-type: initial;
scroll-snap-type: unset;
</pre>

<h2 id="Syntaxe">Syntaxe</h2>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>normal</code></dt>
 <dd>Lorsque la zone d'affichage ({{Glossary("viewport")}}) du conteneur défile, elle peut passer sur certaines positions d'accroche.</dd>
 <dt><code>always</code></dt>
 <dd>Le conteneur de défilement ne peut pas passer sur une position d'accroche. Le conteneur doit « s'accrocher » dès la première position d'accroche de l'élément.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">/* setup */
:root, body {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
  font-family: monospace;
}
.container {
  display: flex;
  overflow: auto;
  outline: 1px dashed lightgray;
  flex: none;
}

.container.x {
  width: 100%;
  height: 128px;
  flex-flow: row nowrap;
}

.container.y {
  width: 256px;
  height: 256px;
  flex-flow: column nowrap;
}
/* definite scroll snap */
.mandatory-scroll-snapping &gt; div {
  scroll-snap-stop: always;
}
.proximity-scroll-snapping &gt; div {
  scroll-snap-stop: normal;
}
/* scroll-snap */
.x.mandatory-scroll-snapping {
  scroll-snap-type: x mandatory;
}

.y.mandatory-scroll-snapping {
  scroll-snap-type: y mandatory;
}

.x.proximity-scroll-snapping {
  scroll-snap-type: x proximity;
}

.y.proximity-scroll-snapping {
  scroll-snap-type: y proximity;
}

.container &gt; div {
  text-align: center;
  scroll-snap-align: center;
  flex: none;
}

.x.container &gt; div {
  line-height: 128px;
  font-size: 64px;
  width: 100%;
  height: 128px;
}

.y.container &gt; div {
  line-height: 256px;
  font-size: 128px;
  width: 256px;
  height: 256px;
}
/* appearance fixes */
.y.container &gt; div:first-child {
  line-height: 1.3;
  font-size: 64px;
}
/* coloration */
.container &gt; div:nth-child(even) {
  background-color: #87EA87;
}

.container &gt; div:nth-child(odd) {
  background-color: #87CCEA;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div class="container x mandatory-scroll-snapping" dir="ltr"&gt;
  &lt;div&gt;X Mand. LTR &lt;/div&gt;
  &lt;div&gt;2&lt;/div&gt;
  &lt;div&gt;3&lt;/div&gt;
  &lt;div&gt;4&lt;/div&gt;
  &lt;div&gt;5&lt;/div&gt;
&lt;/div&gt;

&lt;div class="container x proximity-scroll-snapping" dir="ltr"&gt;
  &lt;div&gt;X Proximity LTR&lt;/div&gt;
  &lt;div&gt;2&lt;/div&gt;
  &lt;div&gt;3&lt;/div&gt;
  &lt;div&gt;4&lt;/div&gt;
  &lt;div&gt;5&lt;/div&gt;
&lt;/div&gt;

&lt;div class="container y mandatory-scroll-snapping" dir="ltr"&gt;
  &lt;div&gt;Y Mand. LTR&lt;/div&gt;
  &lt;div&gt;2&lt;/div&gt;
  &lt;div&gt;3&lt;/div&gt;
  &lt;div&gt;4&lt;/div&gt;
  &lt;div&gt;5&lt;/div&gt;
&lt;/div&gt;

&lt;div class="container y proximity-scroll-snapping" dir="ltr"&gt;
  &lt;div&gt;Y Prox. LTR&lt;/div&gt;
  &lt;div&gt;2&lt;/div&gt;
  &lt;div&gt;3&lt;/div&gt;
  &lt;div&gt;4&lt;/div&gt;
  &lt;div&gt;5&lt;/div&gt;
&lt;/div&gt;

&lt;div class="container x mandatory-scroll-snapping" dir="rtl"&gt;
  &lt;div&gt;X Mandatory RTL&lt;/div&gt;
  &lt;div&gt;2&lt;/div&gt;
  &lt;div&gt;3&lt;/div&gt;
  &lt;div&gt;4&lt;/div&gt;
  &lt;div&gt;5&lt;/div&gt;
&lt;/div&gt;

&lt;div class="container x proximity-scroll-snapping" dir="rtl"&gt;
  &lt;div&gt;X Proximity RTL&lt;/div&gt;
  &lt;div&gt;2&lt;/div&gt;
  &lt;div&gt;3&lt;/div&gt;
  &lt;div&gt;4&lt;/div&gt;
  &lt;div&gt;5&lt;/div&gt;
&lt;/div&gt;

&lt;div class="container y mandatory-scroll-snapping" dir="rtl"&gt;
  &lt;div&gt;Y Mand. RTL&lt;/div&gt;
  &lt;div&gt;2&lt;/div&gt;
  &lt;div&gt;3&lt;/div&gt;
  &lt;div&gt;4&lt;/div&gt;
  &lt;div&gt;5&lt;/div&gt;
&lt;/div&gt;

&lt;div class="container y proximity-scroll-snapping" dir="rtl"&gt;
  &lt;div&gt;Y Prox. RTL&lt;/div&gt;
  &lt;div&gt;2&lt;/div&gt;
  &lt;div&gt;3&lt;/div&gt;
  &lt;div&gt;4&lt;/div&gt;
  &lt;div&gt;5&lt;/div&gt;
&lt;/div&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples", "100%", "1630")}}</p>

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
   <td>{{SpecName("CSS Scroll Snap Points", "#propdef-scroll-snap-stop", "scroll-snap-stop")}}</td>
   <td>{{Spec2("CSS Scroll Snap Points")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.scroll-snap-stop")}}</p>
