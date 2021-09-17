---
title: translateZ()
slug: Web/CSS/transform-function/translateZ()
tags:
  - CSS
  - Fonction
  - Reference
  - Transformations CSS
translation_of: Web/CSS/transform-function/translateZ()
---
<div>{{CSSRef}}</div>

<p>La fonction <strong><code>translateZ()</code></strong> permet de déplacer un élément selon l'axe z de l'espace tridimensionnel. Cette transformation est caractérisée par une valeur de longueur (type {{cssxref("&lt;length&gt;")}}) qui définit l'amplitude du mouvement. La valeur obtenue par cette fonction est de type {{cssxref("&lt;transform-function&gt;")}}.</p>

<div>{{EmbedInteractiveExample("pages/css/function-translateZ.html")}}</div>

<p><code>translateZ(tz)</code> est un raccourci équivalent à <code>translate3d(0, 0, tz)</code>.</p>

<p>Dans les exemples interactifs ci-avant, <code>perspective: 500px;</code> a été utilisée afin de créer un espace en trois dimensions et <code>transform-style: preserve-3d</code> permet de positionner les éléments enfants (les 6 faces du cube) dans cet espace 3D.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">translateZ(t)
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>t</code></dt>
 <dd>Une valeur de type {{cssxref("&lt;length&gt;")}} qui représente la composante en Z du vecteur de translation appliqué. Cet argument ne peut pas être de type {{cssxref("&lt;percentage&gt;")}}, si c'est le cas, la propriété qui contient la transformation est considérée comme invalide.</dd>
</dl>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Coordonnées cartésiennes sur ℝ<sup>2</sup></th>
   <th scope="col">Coordonnées homogènes sur ℝℙ<sup>2</sup></th>
   <th scope="col">Coordonnées cartésiennes sur ℝ<sup>3</sup></th>
   <th scope="col">Coordonnées homogènes sur ℝℙ<sup>3</sup></th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td colspan="2" rowspan="2">Cette transformation s'applique en trois dimensions et ne peut donc être représentée sur un plan.</td>
   <td colspan="1" rowspan="2">Une translation n'est pas une transformation linéaire sur ℝ<sup>3</sup> et ne peut donc pas être représentée avec une matrice dans le système cartésien.</td>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>t</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;toto&lt;/p&gt;
&lt;p class="transformation"&gt;truc&lt;/p&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">p {
  width: 50px;
  height: 50px;
  background-color: teal;
}

.transformation {
  /* On ajoute une perspective pour créer un */
  /* espace 3D. L'utilisateur regarde « depuis »*/
  /* 500px et on avance l'élément vers l'utili- */
  /* sateur de 200px */
  transform: perspective(500px) translateZ(200px);
}
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples")}}</p>

<p>Si la valeur fournie à <code>perspective()</code> est inférieure à l'argument de <code>translateZ()</code> (ex. <code>transform: perspective(200px) translateZ(300px);</code>), l'élément transformé ne sera pas visible car il sera situé au-delà de l'espace projeté sur l'écran. Plus l'écart entre ces deux arguments est faible, plus l'élément paraîtra proche de l'utilisateur.</p>

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
   <td>{{SpecName('CSS Transforms 2', '#transform-functions', 'transform')}}</td>
   <td>{{Spec2('CSS Transforms 2')}}</td>
   <td>Ajout des fonctions de transformations 3D au module standard <em>CSS Transforms</em></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>Voir la page sur le type de donnée <code><a href="/fr/docs/Web/CSS/transform-function#compatibilité_des_navigateurs">&lt;transform-function&gt;</a></code> pour les informations de compatibilité associées.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("&lt;transform-function&gt;")}}</li>
 <li><a href="/fr/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms">Les transformations CSS</a></li>
 <li>{{cssxref("transform")}}</li>
 <li>{{cssxref("transform-function/translateX", "translateX()")}} et {{cssxref("transform-function/translateY()", "translateY()")}}</li>
</ul>
