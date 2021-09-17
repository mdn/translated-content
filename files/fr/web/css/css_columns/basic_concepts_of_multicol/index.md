---
title: Concepts de base pour la disposition multi-colonnes
slug: Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol
tags:
  - CSS
  - Guide
translation_of: Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol
original_slug: Web/CSS/CSS_Columns/Concepts_base_multi-colonnes
---
<div>{{CSSRef}}</div>

<p>La disposition sur plusieurs colonnes (« <em>Multiple-column Layout</em> » ou « <em>multicol</em> » en anglais) est un module de spécification pour organiser du contenu sur un ensemble de colonnes, à la façon des colonnes dans un journal imprimé. Dans ce guide, nous verrons comment fonctionne cette spécification et quelques cas d'exemples.</p>

<h2 id="Concepts_et_terminologie">Concepts et terminologie</h2>

<p>La disposition multi-colonnes se distinguent des autres dispositions CSS car elle fragmente le contenu, y compris les éléments descendants, en colonnes. Cela se produira de façon analogue en fragmentant sur des pages avec le module de spécification <a href="/fr/docs/Web/CSS/CSS_Pages">CSS Paged Media</a>.</p>

<p>Les propriétés définies dans cette spécification sont :</p>

<ul>
 <li>{{cssxref("column-width")}}</li>
 <li>{{cssxref("column-count")}}</li>
 <li>{{cssxref("columns")}}</li>
 <li>{{cssxref("column-rule-color")}}</li>
 <li>{{cssxref("column-rule-style")}}</li>
 <li>{{cssxref("column-rule-width")}}</li>
 <li>{{cssxref("column-rule")}}</li>
 <li>{{cssxref("column-span")}}</li>
 <li>{{cssxref("column-fill")}}</li>
 <li>{{cssxref("column-gap")}}</li>
</ul>

<p>En ajoutant <code>column-count</code> ou <code>column-width</code> à un élément, on le transforme en conteneur multi-colonnes. Les colonnes sont des boîtes anonymes et sont décrites comme des « boîtes de colonne » dans la spécification.</p>

<h2 id="Definir_des_colonnes">Definir des colonnes</h2>

<p>Afin de créer un conteneur multi-colonnes, il est nécessaire d'utiliser au moins une propriété <code>column-*</code> (<code>column-count</code> ou <code>column-width</code>).</p>

<h3 id="La_propriété_column-count">La propriété <code>column-count</code></h3>

<p>La propriété <code>column-count</code> définit le nombre de colonnes sur lesquelles on veut afficher le contenu. Le navigateur affectera l'espace nécessaire à chaque boîte de colonne afin d'en créer le nombre indiqué.</p>

<p>Dans l'exemple qui suit, on utilise la propriété <code>column-count</code> afin de créer trois colonnes au sein de l'élément <code>.container</code>. Le contenu, y compris l'élément fils de <code>.container</code> est alors divisé en trois colonnes.</p>

<p>{{EmbedGHLiveSample("css-examples/multicol/basics/column-count.html", '100%', 550)}}</p>

<p>Dans l'exemple qui précède, le contenu est intégré dans des paragraphes avec une mise en forme par défaut. Aussi, il y a une marge au dessus de chaque paragraphe. On peut voir comment cette marge décale la première ligne de texte vers le bas. Cela se produit car un conteneur multi-colonnes crée un nouveau contexte de formatage de bloc, ce qui signifie que les marges des éléments fils ne <a href="/fr/docs/Web/CSS/Modèle_de_boîte_CSS/Fusion_des_marges">fusionnent</a> pas avec les marges du conteneur.</p>

<h3 id="La_propriété_column-width">La propriété <code>column-width</code></h3>

<p>La propriété <code>column-width</code> est utilisé afin de définir la largeur optimale pour chaque boîte de colonne. Si on déclare une valeur pour <code>column-width</code>, le navigateur calculera combien de colonnes de cette taille peuvent être intégrées puis répartira l'espace supplémentaire équitablement entre les colonnes. Aussi mieux vaut-il voir <code>column-width</code> comme une largeur minimale plutôt que comme une largeur exacte, l'espace restant étant rajouté ensuite.</p>

<p>Il existe un seul cas où la boîte de colonne peut être plus petite que <code>column-width</code> : lorsqu'il n'y a qu'une seule colonne et que l'espace disponible est inférieur à <code>column-width</code>.</p>

<p>Dans l'exemple qui suit, on utilise la propriété <code>column-width</code> avec une valeur de 200px et on obtient donc autant de colonnes de 200 pixels que possible avec l'espace restant partagé équitablement entre les différentes colonnes.</p>

<p>{{EmbedGHLiveSample("css-examples/multicol/basics/column-width.html", '100%', 550)}}</p>

<h3 id="Utiliser_column-count_et_column-width">Utiliser <code>column-count</code> et <code>column-width</code></h3>

<p>Si on définit les deux propriétés pour un conteneur multi-colonnes, <code>column-count</code> agira comme un maximum pour le nombre de colonnes. Le comportement décrit avant pour <code>column-width</code> aura bien lieu, jusqu'à ce que le nombre de colonnes décrit par <code>column-count</code> soit atteint. Ensuite, aucune autre colonne ne sera ajoutée et l'espace restant sera réparti entre les colonnes existantes (et ce même si l'espace restant permettrait de rajouter une ou plusieurs colonnes de largeur <code>column-width</code>).</p>

<p>Lorsqu'on utilise les deux propriétés ensemble, on peut obtenir un nombre de colonnes réel inférieur à la valeur fournie avec <code>column-count</code>.</p>

<p>Dans l'exemple suivant, on utilise <code>column-width</code> avec une valeur de 200px et <code>column-count</code> avec une valeur de 2. S'il y a de l'espace pour plus de deux colonnes, on aura uniquement deux colonnes. S'il n'y a pas assez d'espace pour deux colonnes de 200 pixels, il n'y en aura qu'une.</p>

<p>{{EmbedGHLiveSample("css-examples/multicol/basics/column-count-width.html", '100%', 550)}}</p>

<h3 id="La_propriété_raccourcie_columns">La propriété raccourcie <code>columns</code></h3>

<p>La <a href="/fr/docs/Web/CSS/Propriétés_raccourcies">propriété raccourcie</a> <code>columns</code> peut être utilisée afin de définir à la fois <code>column-count</code> et <code>column-width</code>. Si on utilise une unité de longueur, la valeur sera utilisée pour <code>column-width</code>, si on utilise un entier, la valeur sera utilisée pour <code>column-count</code>. Les deux peuvent être définies simultanément en étant séparées d'un espace.</p>

<p>Ce fragment de code CSS donnera donc le même résultat que pour le premier exemple où <code>column-count</code> vaut 3.</p>

<pre>.container {
  columns: 3;
}</pre>

<p>Ce fragment de code CSS donnera le même résultat que pour le deuxième exemple où <code>column-width</code> vaut <code>200px</code>.</p>

<pre>.container {
  columns: 200px;
}</pre>

<p>Enfin, ce fragment de code CSS donnera le même résultat que le troisième exemple où les deux propriétés <code>column-count</code> et <code>column-width</code> sont définies.</p>

<pre>.container {
  columns: 2 200px;
}</pre>

<h2 id="Prochaines_étapes">Prochaines étapes</h2>

<p>Dans ce guide, nous avons vu des cas d'utilisation simples avec une disposition multi-colonnes. Dans le prochain article, nous verrons <a href="/fr/docs/Web/CSS/CSS_Columns/Styling_Columns">comment mettre en forme chacune des colonnes</a>.</p>
