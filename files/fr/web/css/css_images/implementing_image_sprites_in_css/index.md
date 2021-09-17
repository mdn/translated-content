---
title: Les sprites CSS
slug: Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS
tags:
  - Avancé
  - CSS
  - Guide
translation_of: Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS
original_slug: Web/CSS/CSS_Images/Sprites_CSS
---
<div>{{CSSRef}}</div>

<p>Les <em>sprites</em> sont utilisées dans de nombreuses applications web où de multiples images sont utilisées. Au lieu d'avoir une image par fichier, on économise de la bande passante et de la mémoire en les envoyant toute dans le même fichier, ainsi, le nombre de requêtes HTTP diminue. On utilise alors <code>background-position</code> pour choisir l'image qu'on souhaite utiliser.</p>

<div class="note">
<p><strong>Note :</strong> Avec HTTP/2, il peut être plus judicieux d'utiliser de nombreuses « petites » requêtes.</p>
</div>

<h2 id="Implémentation">Implémentation</h2>

<p>Supposons qu'une image est affichée pour chaque élement de la classe <code>toolbtn</code> :</p>

<pre class="brush:css">.toolbtn {
  background: url('myfile.png');
  display: inline-block;
  height: 20px;
  width: 20px;
}</pre>

<p>Une position peut être ajoutée avec les valeurs x et y après {{cssxref("url()")}} pour décaler l'image de fond ({{cssxref("background")}}). Cela fonctionne aussi avec {{cssxref("background-position")}}. Par exemple :</p>

<pre class="brush:css">#btn1 {
  background-position: -20px 0px;
}

#btn2 {
  background-position: -40px 0px;
}</pre>

<p>L'élément avec l'ID « btn1 » bouge vers la gauche de 20 pixels et l'élément avec l'ID « btn2 » vers la gauche de 40 pixels (en présumant que ces deux éléments aient aussi la classe <code>toolbtn</code>).</p>

<p>De la même manière, vous pouvez faire un effet de transition au survol :</p>

<pre class="brush:css">#btn:hover {
  background-position: <var>&lt;pixels shifted right&gt;</var>px <var>&lt;pixels shifted down&gt;</var>px;
}</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://css-tricks.com/snippets/css/perfect-css-sprite-sliding-doors-button/">Une démonstration sur CSS Tricks</a></li>
</ul>
