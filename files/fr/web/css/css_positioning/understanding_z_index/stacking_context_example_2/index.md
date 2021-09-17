---
title: Exemple d'empilement 2
slug: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2
tags:
  - Avancé
  - CSS
  - Guide
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2
original_slug: Web/CSS/Comprendre_z-index/Exemple_2
---
<div>{{PreviousMenuNext("Web/CSS/Comprendre_z-index/Exemple_1","Web/CSS/Comprendre_z-index/Exemple_3", "Web/CSS/Comprendre_z-index")}}</div>

<h2 id="Deuxième_exemple">Deuxième exemple</h2>

<p>Ce deuxième exemple est très simple, mais il est essentiel à la compréhension du concept de <em>contexte d'empilement</em>. Nous avons les 4 mêmes blocs que l'exemple précédent, mais maintenant, nous appliquons des propriétés {{cssxref("z-index")}} aux deux niveaux de la hiérarchie.</p>

<p>{{ EmbedLiveSample('Exemple', '352', '270') }}</p>

<p>Vous pouvez voir que le bloc <em>DIV #2</em> (z-index : 2) est au dessus du bloc <em>DIV #3</em> (z-index : 1), parce qu'ils appartiennent tout les deux au même contexte d'empilement (celui de la racine), donc les valeurs de <code>z-index</code> régissent l'empilement des éléments.</p>

<p>Ce qui peut apparaitre comme étrange, c'est que le bloc <em>DIV #2</em> (z-index : 2) est au dessus du bloc <em>DIV #4</em> (z-index : 10), malgré leurs valeurs de <code>z-index</code>. La raison est qu'ils n'appartiennent pas au même contexte d'empilement. Le bloc <em>DIV #4</em> appartient au contexte d'empilement créé par le bloc <em>DIV #3</em>, et, comme expliqué précédemment, le bloc <em>DIV #3</em> (et tout son contenu) est au dessous du bloc <em>DIV #2</em>.</p>

<p>Pour mieux comprendre la situation, voici la hiérarchie du contexte d'empilement :</p>

<ul>
 <li>Contexte d'empilement racine
  <ul>
   <li>DIV #2 (z-index 2)</li>
   <li>DIV #3 (z-index 1)
    <ul>
     <li>DIV #4 (z-index 10)</li>
    </ul>
   </li>
  </ul>
 </li>
</ul>

<div class="note">
  <p><strong>Note :</strong> Il est important de se souvenir qu'en général, la hiérarchie HTML est différente de la hiérarchie du contexte d'empilement. Dans la hiérarchie du contexte d'empilement, les éléments qui ne créent pas un contexte d'empilement sont regroupés avec leur parents.</p>
</div>

<h2 id="Exemple">Exemple</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">div {
  font: 12px Arial;
}

span.bold {
  font-weight: bold;
}

#div2 {
  z-index: 2;
}

#div3 {
  z-index: 1;
}

#div4 {
  z-index: 10;
}

#div1,#div3 {
  height: 80px;
  position: relative;
  border: 1px dashed #669966;
  background-color: #ccffcc;
  padding-left: 5px;
}

#div2 {
  opacity: 0.8;
  position: absolute;
  width: 150px;
  height: 200px;
  top: 20px;
  left: 170px;
  border: 1px dashed #990000;
  background-color: #ffdddd;
  text-align: center;
}

#div4 {
  opacity: 0.8;
  position: absolute;
  width: 200px;
  height: 70px;
  top: 65px;
  left: 50px;
  border: 1px dashed #000099;
  background-color: #ddddff;
  text-align: left;
  padding-left: 10px;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;br/&gt;

&lt;div id="div1"&gt;
  &lt;br/&gt;&lt;span class="bold"&gt;DIV #1&lt;/span&gt;
  &lt;br/&gt;position: relative;
  &lt;div id="div2"&gt;
    &lt;br/&gt;&lt;span class="bold"&gt;DIV #2&lt;/span&gt;
    &lt;br/&gt;position: absolute;
    &lt;br/&gt;z-index: 2;
  &lt;/div&gt;
&lt;/div&gt;

&lt;br/&gt;

&lt;div id="div3"&gt;
  &lt;br/&gt;&lt;span class="bold"&gt;DIV #3&lt;/span&gt;
  &lt;br/&gt;position: relative;
  &lt;br/&gt;z-index: 1;
  &lt;div id="div4"&gt;
    &lt;br/&gt;&lt;span class="bold"&gt;DIV #4&lt;/span&gt;
    &lt;br/&gt;position: absolute;
    &lt;br/&gt;z-index: 10;
  &lt;/div&gt;
&lt;/div&gt;
</pre>


<div>{{PreviousMenuNext("Web/CSS/Comprendre_z-index/Exemple_1","Web/CSS/Comprendre_z-index/Exemple_3", "Web/CSS/Comprendre_z-index")}}</div>
