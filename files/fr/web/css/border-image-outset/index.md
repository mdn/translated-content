---
title: border-image-outset
slug: Web/CSS/border-image-outset
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/border-image-outset
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>border-image-outset</code></strong> définit la distance avec laquelle la bordure est déplacée par rapport à la boîte de bordure.</p>

<div>{{EmbedInteractiveExample("pages/css/border-image-outset.html")}}</div>

<p>Les fragments de l'image de bordure qui sont affichées en dehors de la boîte de bordure suite à l'utilisation de cette propriété n'entraîneront pas la création de barres de défilement. Ces zones ne capturent ni n'entraînent d'événements de pointeur par rapport à l'élément concerné.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* border-image-outset :                 */
/* Une même valeur pour les quatre côtés */
border-image-outset: 1.5;

/* border-image-outset :              */
/* Première valeur : côtés verticaux  */
/* Seconde valeur : côtés horizontaux */
border-image-outset: 1 1.2;

/* border-image-outset :               */
/* Première valeur : côté haut         */
/* Deuxième valeur : côtés horizontaux */
/* Troisième valeur : côté bas         */
border-image-outset: 30px 2 45px;

/* border-image-outset :          */
/* Première valeur : côté haut    */
/* Deuxième valeur : côté droit   */
/* Troisième valeur : côté bas    */
/* Quatrième valeur : côté gauche */
border-image-outset: 7px 12px 14px 5px;

/* Valeurs globales */
border-image-outset: inherit;
border-image-outset: initial;
border-image-outset: unset;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>&lt;length&gt;</code></dt>
 <dd>Une valeur de longueur (cf. type {{cssxref("&lt;length&gt;")}}) qui indique l'espace duquel on peut dépasser de la boîte de bordure. Les valeurs négatives ne sont pas autorisées.</dd>
 <dt><code>&lt;number&gt;</code></dt>
 <dd>Une valeur numérique (cf. type {{cssxref("&lt;number&gt;")}}) qui sera multipliée par la valeur calculée de {{cssxref("border-width")}} afin de déterminer la longueur de l'espace duquel dépasser.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">p {
  border-image-source: url("https://mdn.mozillademos.org/files/10470/border.png");
  border-image-slice: 30;
  border-image-width: 20px;
  border-image-repeat: round;
  border-image-outset: 10px;
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
   <td>{{SpecName('CSS3 Backgrounds', '#the-border-image-outset', 'border-image-outset')}}</td>
   <td>{{Spec2('CSS3 Backgrounds')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<div>{{cssinfo}}</div>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.border-image-outset")}}</p>
