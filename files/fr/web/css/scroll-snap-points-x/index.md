---
title: scroll-snap-points-x
slug: Web/CSS/scroll-snap-points-x
tags:
  - CSS
  - Déprécié
  - Propriété
  - Reference
translation_of: Web/CSS/scroll-snap-points-x
---
<div>{{CSSRef}}{{deprecated_header}}</div>

<p>La propriété <strong><code>scroll-snap-points-x</code></strong> définit le positionnement horizontal des points d'accroche dans le conteneur de défilement auquel ils s'appliquent.</p>

<pre class="brush: css no-line-numbers">/* Valeur avec un mot-clé */
scroll-snap-points-x: none;

/* Répétition des points d'accroche */
scroll-snap-points-x: repeat(400px);

/* Valeurs globales */
scroll-snap-points-x: inherit;
scroll-snap-points-x: initial;
scroll-snap-points-x: unset;
</pre>

<h2 id="Syntaxe">Syntaxe</h2>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>Le conteneur ne possède pas de points d'accroche. Les éléments contenus à l'intérieur peuvent définir leurs propres points d'accroche.</dd>
 <dt><code>repeat(&lt;length-percentage&gt;)</code></dt>
 <dd>Cette valeur permet de définir un intervalle de répétition pour les points d'accroche, en commençant par le bord (pertinent) du conteneur. Seules les longueurs positives sont autorisées. Les pourcentages sont relatifs à la largeur du conteneur.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div id="container"&gt;
  &lt;div&gt;1&lt;/div&gt;
  &lt;div&gt;2&lt;/div&gt;
  &lt;div&gt;3&lt;/div&gt;
&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">#container {
  width: 200px;
  overflow: auto;
  white-space: nowrap;
  scroll-snap-points-x: repeat(100%);
  scroll-snap-type: mandatory;
  font-size: 0;
}

#container &gt; div {
  width: 200px;
  height: 200px;
  display: inline-block;
  line-height: 200px;
  text-align: center;
  font-size: 100px;
}

#container &gt; div:nth-child(even) {
  background-color: #87ea87;
}

#container &gt; div:nth-child(odd) {
  background-color: #87ccea;
}</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples", 220, 220)}}</p>

<h2 id="Spécifications">Spécifications</h2>

<p>Cette propriété avait été définie dans <a href="http://www.w3.org/TR/2015/WD-css-snappoints-1-20150326/#scroll-snap-points">un brouillon de spécification pour le module CSS sur les points d'accroche</a> mais <a href="https://github.com/w3c/csswg-drafts/commit/922af86be789222b8490c92038d1a5142e1c1198">a ensuite été retirée</a> de la spécification pour être remplacée par <a href="https://lists.w3.org/Archives/Public/www-style/2015Nov/0266.html">l'accroche basée sur les éléments</a>.</p>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.scroll-snap-points-x")}}</p>
