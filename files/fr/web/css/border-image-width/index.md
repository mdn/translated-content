---
title: border-image-width
slug: Web/CSS/border-image-width
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/border-image-width
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>border-image-width</code></strong> définit la largeur de la bordure imagée.</p>

<div>{{EmbedInteractiveExample("pages/css/border-image-width.html")}}</div>

<p>Si <code>border-image-width</code> est supérieur à {{cssxref("border-width")}}, la bordure imagée s'étendra au-delà du <em>padding</em> voire du contenu.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* Valeur avec un mot-clé */
border-image-width: auto;

/* Longueur */
/* Type &lt;length&gt; */
border-image-width: 1rem;

/* Valeur proportionnelle */
/* Type &lt;percentage&gt; */
border-image-width: 25%;

/* Valeur numérique */
/* Type &lt;number&gt; */
border-image-width: 3;

/* épaisseur verticale | horizontale */
border-image-width: 2em 3em;

/* haut | côtés horizontaux | bas */
border-image-width: 5% 15% 10%;

/* haut | droit | bas | gauche */
border-image-width: 5% 2em 10% auto;

/* Valeurs globales */
border-image-width: inherit;
border-image-width: initial;
border-image-width: unset;
</pre>

<p>La propriété <code>border-image-width</code> est définie avec une, deux, trois ou quatre valeurs parmi celles de la liste qui suit.</p>

<ul>
 <li>Lorsqu'une valeur est utilisée, c'est cette valeur qui est utilisée pour les quatre côtés</li>
 <li>Lorsque deux valeurs sont utilisées, la premières s'applique aux côtés haut et bas et la seconde aux côté gauche et droit</li>
 <li>Lorsque trois valeurs sont utilisées, la première s'applique au côté haut, la deuxième aux côtés gauche et droit et la troisième au côté bas.</li>
 <li>Lorsque quatre valeurs sont utilisées, elles s'appliquent (dans cet ordre) au côté haut, droit, bas et gauche (dans le sens horaire).</li>
</ul>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>&lt;length-percentage&gt;</code></dt>
 <dd>Une longueur ou un pourcentage représentant la largeur de la bordure. Cette longueur peut être absolue (ex. <code>px</code>) ou relative (ex. <code>rem</code>). Les pourcentages sont relatifs à la largeur de la boîte de bordure. Les valeurs négatives sont considérées invalides<code>.</code></dd>
 <dt><code>&lt;number&gt;</code></dt>
 <dd>Représente un multiple de <a href="/fr/docs/Web/CSS/Valeur_calculée">la valeur calculée</a> de la propriété {{cssxref("border-width")}} de l'élément. Les valeurs négatives sont considérées invalides.</dd>
 <dt><code>auto</code></dt>
 <dd>L'épaisseur de la bordure imagée est égale à la largeur ou à la hauteur (selon ce qui peut s'appliquer) de la propriété {{cssxref("border-image-slice")}} correspondante. Si l'image ne possède pas de dimensions intrinsèques, c'est la valeur calculée de <code>border-width</code> qui sera utilisée à la place.</dd>
 <dt><code>inherit</code></dt>
 <dd>Un mot-clé qui indique que les quatre valeurs sont héritées des valeurs calculées pour la propriété de l'élément parent.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">p {
  border: 20px solid;
  border-image: url("https://mdn.mozillademos.org/files/10470/border.png") 30 round;
  border-image-width: 16px;
  padding: 40px;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
  At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
  no sea takimata sanctus est Lorem ipsum dolor sit amet.
&lt;/p&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemples', '480', '320')}}</p>

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
   <td>{{SpecName('CSS3 Backgrounds', '#the-border-image-width', 'border-image-width')}}</td>
   <td>{{Spec2('CSS3 Backgrounds')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.border-image-width")}}</p>
