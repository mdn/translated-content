---
title: rotateZ()
slug: Web/CSS/transform-function/rotateZ()
tags:
  - CSS
  - Fonction
  - Reference
  - Transformations CSS
translation_of: Web/CSS/transform-function/rotateZ()
---
<div>{{CSSRef}}</div>

<p>La fonction <strong><code>rotateZ()</code></strong> définit une transformation qui déplace l'élément autour de l'axe Z, sans déformer cet élément. L'angle de rotation est défini par l'argument passé à la fonction. Si l'angle indiqué est positif, le mouvement sera appliqué dans le sens horaire et sinon il sera appliqué dans le sens inverse des aiguilles d'une montre.</p>

<div>{{EmbedInteractiveExample("pages/css/function-rotateZ.html")}}</div>

<p>L'axe de la rotation passe par l'origine du repère, définie par la propriété {{cssxref("transform-origin")}}.</p>

<p><code>rotateZ(a)</code> est une notation raccourcie équivalente à <code>rotate3D(0, 0, 1, a)</code>.</p>

<div class="note">
  <p><strong>Note :</strong> Contrairement aux rotations appliqués dans le plan, la composition de rotations dans l'espace n'est pas commutative. Autrement dit, l'ordre dans lequel on applique les rotations est déterminant.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">rotateZ(<em>a</em>)
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>a</code></dt>
 <dd>Une valeur de type {{cssxref("&lt;angle&gt;")}} qui représente l'angle de la rotation. Un angle positif indique une rotation appliquée dans le sens horaire, un angle négatif applique une rotation dans le sens anti-horaire.</dd>
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
   <td colspan="2" rowspan="2">Cette transformation s'applique dans l'espace (3D) et ne peut pas être représentée en deux dimensions.</td>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr><mtd>cos(a)</mtd><mtd>-sin(a)</mtd><mtd>0</mtd></mtr><mtr><mtd>sin(a)</mtd><mtd>cos(a)</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
   <td colspan="1" rowspan="2"><math><mfenced><mtable><mtr><mtd>cos(a)</mtd><mtd>-sin(a)</mtd><mtd>0</mtd><mtd>0</mtd></mtr><mtr><mtd>sin(a)</mtd><mtd>cos(a)</mtd><mtd>0</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
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
  transform: rotateZ(45deg);
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
   <td>{{SpecName("CSS Transforms 2", "#funcdef-rotatez", "rotateZ()")}}</td>
   <td>{{Spec2("CSS Transforms 2")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>Voir la page sur le type de donnée <code><a href="/fr/docs/Web/CSS/transform-function#compatibilité_des_navigateurs">&lt;transform-function&gt;</a></code> pour les informations de compatibilité associées.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("transform")}}</li>
 <li>{{cssxref("&lt;transform-function&gt;")}}</li>
</ul>
