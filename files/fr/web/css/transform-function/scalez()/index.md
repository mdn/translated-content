---
title: scaleZ()
slug: Web/CSS/transform-function/scaleZ()
tags:
  - CSS
  - Fonction
  - Reference
  - Transformations CSS
translation_of: Web/CSS/transform-function/scaleZ()
---
<div>{{CSSRef}}</div>

<p>La fonction <strong><code>scaleZ()</code></strong> modifie la coordonnée en Z de chaque point de l'élément avec un facteur multiplicateur donné. Si ce facteur vaut 1, l'opération appliqué sera l'identité. L'homothétie n'est pas isotropique et les angles de l'élément ne sont pas conservés. La valeur obtenue par cette fonction est de type {{cssxref("&lt;transform-function&gt;")}}.</p>

<div>{{EmbedInteractiveExample("pages/css/function-scaleZ.html")}}</div>

<p><code>scaleZ(sz)</code> est une notation raccourcie équivalente à <code>scale3d(1, 1, sz)</code>.</p>

<p><code>scaleZ(-1)</code> définit une symétrie axiale selon l'axe Z qui passe par l'origine (définie grâce à la propriété {{cssxref("transform-origin")}}).</p>

<p>Dans les exemples interactifs ci-avant, <code>perspective: 500px;</code> a été utilisée afin de créer un espace en trois dimensions et <code>transform-style: preserve-3d</code> permet de positionner les éléments enfants dans cet espace 3D.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">scaleZ(s)
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>s</code></dt>
 <dd>Une valeur de type {{cssxref("&lt;number&gt;")}} qui représente le facteur d'échelle à appliquer sur la côte (coordonnées en Z) de chaque point de l'élément.</dd>
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
   <td colspan="2" rowspan="2">Cette transformation s'applique sur l'espace en trois dimensions et ne peut donc être représentée sous la forme d'une transformation plane.</td>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr>1<mtd>0</mtd><mtd>0</mtd></mtr><mtr>0<mtd>1</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>s</mtd></mtr></mtable> </mfenced> </math></td>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>s</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;toto&lt;/p&gt;
&lt;p class="translation"&gt;Translaté&lt;/p&gt;
&lt;p class="homothetie"&gt;Échelle&lt;/p&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">p {
  width: 50px;
  height: 50px;
  background-color: teal;
}

.translation{
  /* On ajoute une perspective pour créer un volume 3D */
  transform: perspective(500px) translateZ(100px);
}

.homothetie{
  /* On ajoute une perspective pour créer un volume 3D */
  transform: perspective(500px) scaleZ(2) translateZ(100px);
}
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples","100%","200")}}</p>

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
   <td>{{SpecName("CSS Transforms 2", "#funcdef-scalez", "scaleZ()")}}</td>
   <td>{{Spec2("CSS Transforms 2")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>Voir la page sur le type de donnée <code><a href="/fr/docs/Web/CSS/transform-function#compatibilité_des_navigateurs">&lt;transform-function&gt;</a></code> pour les informations de compatibilité associées.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><code><a href="/fr/docs/Web/CSS/transform-function/scaleX()">scaleX()</a></code></li>
 <li><code><a href="/fr/docs/Web/CSS/transform-function/scaleY()">scaleY()</a></code></li>
 <li>{{cssxref("transform")}}</li>
 <li>{{cssxref("&lt;transform-function&gt;")}}</li>
 <li>{{cssxref("transform-origin")}}</li>
</ul>
