---
title: scaleX()
slug: Web/CSS/transform-function/scaleX()
tags:
  - CSS
  - Fonction
  - Reference
  - Transformations CSS
translation_of: Web/CSS/transform-function/scaleX()
---
<div>{{CSSRef}}</div>

<p>La fonction <strong><code>scaleX()</code></strong> permet de modifier l'abscisse de chaque sommet de l'élément par un facteur multiplicateur. L'homothétie obtenue n'est pas isotropique et les angles de l'élément ne sont pas conservés.</p>

<p><img src="scalex.png"></p>

<p><code>scaleX(sx)</code> est une notation raccourcie équivalente à <code>scale(sx, 1)</code> ou à <code>scale3d(sx, 1, 1)</code>.</p>

<p><code>scaleX(-1)</code> définit une symétrie axiale par rapport à un axe vertical passant par l'origine du repère (définie grâce à la propriété {{cssxref("transform-origin")}}).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">scaleX(<em>s</em>)
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>s</code></dt>
 <dd>Une valeur de type {{cssxref("&lt;number&gt;")}} qui représente le facteur d'échelle de l'homothétie.</dd>
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
   <td colspan="1" rowspan="2"><math> <mfenced> <mtable> <mtr><mtd>s</mtd><mtd>0</mtd></mtr> <mtr><mtd>0</mtd><mtd>1</mtd></mtr> </mtable> </mfenced> </math></td>
   <td><math> <mfenced><mtable><mtr>s<mtd>0</mtd><mtd>0</mtd></mtr><mtr>0<mtd>1</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr>s<mtd>0</mtd><mtd>0</mtd></mtr><mtr>0<mtd>1</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr>s<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
  </tr>
  <tr>
   <td><code>[s 0 0 1 0 0]</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<h3 id="Origine_inchangée">Origine inchangée</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;p&gt;toto&lt;/p&gt;
&lt;p class="transformation"&gt;truc&lt;/p&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">p {
  width: 50px;
  height: 50px;
  background-color: teal;
}

.transformation {
  transform: scaleX(2);
  background-color: blue;
}
</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{EmbedLiveSample("Origine_inchangée","100%","200")}}</p>

<h3 id="Origine_déplacée">Origine déplacée</h3>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;p&gt;toto&lt;/p&gt;
&lt;p class="transformation"&gt;bar&lt;/p&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">p {
  width: 50px;
  height: 50px;
  background-color: teal;
}

.transformation {
  transform: scaleX(2);
  transform-origin: left;
  background-color: blue;
}
</pre>

<h4 id="Résultat_2">Résultat</h4>

<p>{{EmbedLiveSample("Origine_déplacée","100%","200")}}</p>

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
   <td>{{SpecName("CSS3 Transforms", "#funcdef-transform-scalex", "scaleX()")}}</td>
   <td>{{Spec2("CSS3 Transforms")}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>Voir la page sur le type de donnée <code><a href="/fr/docs/Web/CSS/transform-function#compatibilité_des_navigateurs">&lt;transform-function&gt;</a></code> pour les informations de compatibilité associées.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><code><a href="/fr/docs/Web/CSS/transform-function/scaleY()">scaleY()</a></code></li>
 <li><code><a href="/fr/docs/Web/CSS/transform-function/scaleZ()">scaleZ()</a></code></li>
 <li>{{cssxref("transform")}}</li>
 <li>{{cssxref("&lt;transform-function&gt;")}}</li>
 <li>{{cssxref("transform-origin")}}</li>
</ul>
