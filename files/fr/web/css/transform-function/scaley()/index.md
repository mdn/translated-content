---
title: scaleY()
slug: Web/CSS/transform-function/scaleY()
tags:
  - CSS
  - Fonction
  - Reference
  - Transformations CSS
translation_of: Web/CSS/transform-function/scaleY()
---
<div>{{CSSRef}}</div>

<p>La fonction <strong><code>scaleY()</code></strong> modifie l'ordonnée de chaque sommet de l'élément avec un facteur multiplicateur. L'homothétie n'est pas isotropique et les angles de l'élément ne sont pas conservés. La valeur obtenue par cette fonction est de type {{cssxref("&lt;transform-function&gt;")}}.</p>

<p><img src="scaley.png"></p>

<p><code>scaleY(sy)</code> est une notation raccourcie équivalente à <code>scale(1, sy)</code> ou à <code>scale3d(1, sy, 1)</code>.</p>

<p><code>scaleY(-1)</code> définit une symétrie axiale selon un axe horizontal, passant par l'origine du repère (cette origine est définie grâce à la propriété {{cssxref("transform-origin")}}).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">scaleY(s)
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>s</code></dt>
 <dd>Une valeur de type {{cssxref("&lt;number&gt;")}} qui indique le facteur d'échelle pour l'homothétie.</dd>
</dl>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Coordonnées cartésiennes sur ℝ<sup>2</sup></th>
   <th scope="col">Coordonnées homogènes sur ℝℙ<sup>2</sup></th>
   <th scope="col">Coordonnées cartésiennes sur ℝ<sup>3</sup></th>
   <th scope="col">Coordonnées homogènes sur ℝℙ<sup>3</sup></th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr>1<mtd>0</mtd></mtr> <mtr><mtd>0</mtd><mtd>s</mtd></mtr> </mtable> </mfenced> </math></td>
   <td><math> <mfenced><mtable><mtr>1<mtd>0</mtd><mtd>0</mtd></mtr><mtr>0<mtd>s</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr>1<mtd>0</mtd><mtd>0</mtd></mtr><mtr>0<mtd>s</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr><mtr>0<mtd>s</mtd><mtd>0</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
  </tr>
  <tr>
   <td><code>[1 0 0 s 0 0]</code></td>
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
  transform: scaleY(2);
  background-color: blue;
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
   <td>{{SpecName("CSS3 Transforms", "#funcdef-transform-scaley", "scaleY()")}}</td>
   <td>{{Spec2("CSS3 Transforms")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>Voir la page sur le type de donnée <code><a href="/fr/docs/Web/CSS/transform-function#compatibilité_des_navigateurs">&lt;transform-function&gt;</a></code> pour les informations de compatibilité associées.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><code><a href="/fr/docs/Web/CSS/transform-function/scaleX()">scaleX()</a></code></li>
 <li><code><a href="/fr/docs/Web/CSS/transform-function/scaleZ()">scaleZ()</a></code></li>
 <li>{{cssxref("transform")}}</li>
 <li>{{cssxref("&lt;transform-function&gt;")}}</li>
 <li>{{cssxref("transform-origin")}}</li>
</ul>
