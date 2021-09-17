---
title: Exemple d'empilement 1
slug: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1
tags:
  - Avancé
  - CSS
  - Guide
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1
original_slug: Web/CSS/Comprendre_z-index/Exemple_1
---
<div>{{PreviousMenuNext("Web/CSS/Comprendre_z-index/L'empilement_de_couches","Web/CSS/Comprendre_z-index/Exemple_2", "Web/CSS/Comprendre_z-index")}}</div>

<h2 id="Premier_exemple">Premier exemple</h2>

<p>Commençons par un exemple simple, dans le contexte d'empilement racine nous avons deux blocs <em>DIV</em> (<em>DIV #1</em> et <em>DIV #3</em>), tout deux positionnés relativement, mais sans propriété {{ cssxref("z-index") }}. Dans le bloc <em>DIV #1</em> il y a un bloc <em>DIV #2</em> en position absolue, alors que dans le bloc <em>DIV #3</em> il y a un bloc <em>DIV #4</em> en position absolue, tout deux également sans propriété <code>z-index</code>.</p>

<p>Le seul et unique contexte d'empilement est le contexte racine. Sans <code>z-index</code>, les éléments sont empilés dans leur ordre d'apparition dans le code HTML.</p>

<p><img alt="Figure 5a : Exemple de contexte d'empilement 1" src="understanding_zindex_05a.png"></p>

<p>Si on assigne au bloc <em>DIV #2</em> une valeur de <code>z-index</code> positive (non nulle et non automatique), il est rendu par dessus tous les autres blocs.</p>

<p><img alt="Figure 5b : Exemple de contexte d'empilement 1" src="understanding_zindex_05b.png"></p>

<p>Si maintenant on assigne également au bloc <em>DIV #4</em> une valeur de <code>z-index</code> positive, plus grande que celle du <em>DIV #2</em>, le bloc <em>DIV #4</em> est rendu par dessus tous les autres, y compris par dessus le bloc <em>DIV #2</em>.</p>

<p><img alt="Figure 5c : Exemple de contexte d'empilement 1" src="understanding_zindex_05c.png"></p>

<p>Dans le dernier exemple, vous pouvez voir que les blocs <em>DIV #2</em> et <em>DIV #4</em> ne sont pas frères, parce qu'ils appartiennent à des parents différents dans la hiérarchie des éléments HTML. Néanmoins, l'empilement du bloc <em>DIV #4</em>, tout en respectant le bloc <em>DIV #2</em>, peut être contrôlé avec la propriété <code>z-index</code>. Il se fait que les éléments <em>DIV #1</em> et <em>DIV #3</em> n'ayant pas de <code>z-index</code> défini, ils ne créent pas de contexte d'empilement. Cela signifie que l'ensemble de leur contenu, y compris les blocs <em>DIV #2</em> et <em>DIV #3</em>, appartient au contexte d'empilement de la racine.</p>

<p>Dans le contexte d'empilement, les blocs <em>DIV #1</em> et <em>DIV #3</em> sont simplement assimilés dans l'élément racine, et la hiérarchie résultante est la suivante :</p>

<ul>
 <li>Contexte d'empilement racine
  <ul>
   <li>DIV #2 (z-index 1)</li>
   <li>DIV #4 (z-index 2)</li>
  </ul>
 </li>
</ul>

<div class="note">
  <p><strong>Note :</strong> Les blocs <em>DIV #1</em> et <em>DIV #3</em> ne sont pas translucides. Il est important de se souvenir que d'assigner une valeur d'opacité inférieure à 1 à un élément positionné, crée implicitement un contexte d'empilement, de la même façon que l'ajout de propriétés <code>z-index</code>. Et cet exemple montre ce qui arrive lorsqu'un élément parent ne crée pas de contexte d'empilement.
  </p>
</div>

<h2 id="Exemple"><strong>Exemple</strong></h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.bold {
  font-weight: bold;
  font: 12px Arial;
}
#div1,
#div3 {
  height: 80px;
  position: relative;
  border: 1px dashed #669966;
  background-color: #ccffcc;
  padding-left: 5px;
}

#div2 {
  opacity: 0.8;
  z-index: 1;
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
  z-index: 2;
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

<h3 id="HTML"><strong>HTML</strong></h3>

<pre class="brush: html">&lt;div id="div1"&gt;
  &lt;br/&gt;
  &lt;span class="bold"&gt;DIV #1&lt;/span&gt;
  &lt;br/&gt;position: relative;
  &lt;div id="div2"&gt;
    &lt;br/&gt;&lt;span class="bold"&gt;DIV #2&lt;/span&gt;
    &lt;br/&gt;position: absolute;
     &lt;br/&gt;z-index: 1;
  &lt;/div&gt;
&lt;/div&gt;

&lt;br/&gt;

&lt;div id="div3"&gt;
  &lt;b/&gt;&lt;span class="bold"&gt;DIV #3&lt;/span&gt;
  &lt;br/&gt;position: relative;
  &lt;div id="div4"&gt;
    &lt;br/&gt;&lt;span class="bold"&gt;DIV #4&lt;/span&gt;
    &lt;br/&gt;position: absolute;
    &lt;br/&gt;z-index: 2;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemple')}}</p>

<div>{{PreviousMenuNext("Web/CSS/Comprendre_z-index/L'empilement_de_couches","Web/CSS/Comprendre_z-index/Exemple_2", "Web/CSS/Comprendre_z-index")}}</div>
