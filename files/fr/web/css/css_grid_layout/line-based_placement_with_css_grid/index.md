---
title: Placer les éléments sur les lignes d'une grille CSS
slug: Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid
tags:
  - CSS
  - CSS Grids
  - Grilles CSS
  - Guides
  - Intermédiaire
translation_of: Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid
original_slug: Web/CSS/CSS_Grid_Layout/Placer_les_éléments_sur_les_lignes_d_une_grille_CSS
---
<div>{{CSSRef}}</div>

<p>{{PreviousMenuNext("Web/CSS/CSS_Grid_Layout/Les_concepts_de_base", "Web/CSS/CSS_Grid_Layout/D%C3%A9finir_des_zones_sur_une_grille","Web/CSS/CSS_Grid_Layout")}}</p>

<p>Dans <a href="/fr/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">l'article sur les concepts de base</a>, nous avons vu comment positionner des éléments en utilisant des numéros de lignes. Nous allons désormais étudier cette fonctionnalité de positionnement plus en détail.</p>

<p>Commencer par utiliser les lignes numérotées est plutôt logique car toutes les grilles possèdent des lignes numérotées. Ces lignes forment les colonnes et les lignes horizontales de la grille, elles sont numérotées à partir de 1. On notera aussi que la numérotation des lignes varie selon le mode d'écriture du document. Dans un document écrit de gauche à droite comme le français, la ligne numéro 1 est située à l'extrêmité gauche de la grille. Si l'écriture va de droite à gauche, la ligne numéro 1 sera celle qui est située le plus à droite. Nous explorerons ces notions sur les modes d'écriture dans <a href="/fr/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes">un prochain guide</a>.</p>

<h2 id="Un_exemple_simple">Un exemple simple</h2>

<p>Dans cet exemple simple, on a une grille avec trois pistes pour les colonnes et trois pistes pour les lignes, on a donc 4 lignes pour chaque dimension.</p>

<p>Dans le conteneur, on a quatre éléments fils. Si aucune autre règle de placement n'est indiquée, ces éléments seront placés automatiquement et la grille remplira les quatre premières cellules. Si vous utilisez <a href="/fr/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts">l'outil de mise en évidence des grilles de Firefox</a>, vous pouvez voir les colonnes et les lignes horizontales formées par la grille.</p>

<p><img alt="Our Grid highlighted in DevTools" src="3_hilighted_grid.png"></p>

<pre class="brush: css hidden">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper &gt; div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</pre>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}
</pre>

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div class="box1"&gt;Un&lt;/div&gt;
  &lt;div class="box2"&gt;Deux&lt;/div&gt;
  &lt;div class="box3"&gt;Trois&lt;/div&gt;
  &lt;div class="box4"&gt;Quatre&lt;/div&gt;
&lt;/div&gt;
</pre>

<p>{{EmbedLiveSample('Un_exemple_simple', '300', '330')}}</p>

<h2 id="Positionner_les_éléments_d'une_grille_grâce_au_numéro_de_ligne">Positionner les éléments d'une grille grâce au numéro de ligne</h2>

<p>On peut placer les éléments d'une grille en utilisant les numéros de lignes qui définissent la zone allouée à l'élément. Si on souhaite que le premier élément commence tout à gauche et occupe une colonne, qu'il commence sur la première ligne et s'étale sur quatre lignes, on pourra utiliser les règles suivantes :</p>

<pre class="brush: css">.box1 {
   grid-column-start: 1;
   grid-column-end: 2;
   grid-row-start: 1;
   grid-row-end: 4;
}
</pre>

<p>Lorsqu'on positionne des objets sur la grille, les autres continueront d'être placés selon les règles de placement automatique. Nous verrons ces règles dans <a href="/fr/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout">un prochain guide</a> mais grâce à cet exemple, on peut voir que les cellules vides sont remplies au fur et à mesure par les objets qui ne sont pas placés explicitement.</p>

<p>On peut placer chacun des éléments individuellement et on peut également choisir de laisser certaines cellules vides. Un des avantages de la grille CSS est qu'on peut créer des espaces sans avoir à utiliser des marges ou d'autres méthodes de contournement.</p>

<pre class="brush: css hidden">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper &gt; div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</pre>

<pre class="brush: html">&lt;div class="wrapper"&gt;
   &lt;div class="box1"&gt;Un&lt;/div&gt;
   &lt;div class="box2"&gt;Deux&lt;/div&gt;
   &lt;div class="box3"&gt;Trois&lt;/div&gt;
   &lt;div class="box4"&gt;Quatre&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.box2 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}
.box3 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.box4 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
}
</pre>

<p>{{EmbedLiveSample("Positionner_les_éléments_d'une_grille_grâce_au_numéro_de_ligne", '300', '330')}}</p>


<h2 id="Les_propriétés_raccourcies_grid-column_et_grid-row">Les propriétés raccourcies <code>grid-column</code> et <code>grid-row</code></h2>

<p>On a écrit beaucoup de règles pour positionner chaque élément. Heureusement, il existe des propriétés raccourcies qui permettent d'avoir une syntaxe plus concise. Les propriétés {{cssxref("grid-column-start")}} et {{cssxref("grid-column-end")}} peuvent être combinées pour former la propriété raccourcie {{cssxref("grid-column")}} et de la même façon, {{cssxref("grid-row-start")}} et  {{cssxref("grid-row-end")}} peuvent être synthétisées avec {{cssxref("grid-row")}}.</p>

<pre class="brush: css hidden">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper &gt; div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</pre>

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div class="box1"&gt;Un&lt;/div&gt;
  &lt;div class="box2"&gt;Deux&lt;/div&gt;
  &lt;div class="box3"&gt;Trois&lt;/div&gt;
  &lt;div class="box4"&gt;Quatre&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.box1 {
  grid-column: 1 / 2;
  grid-row: 1 / 4;
}
.box2 {
  grid-column: 3 / 4;
  grid-row: 1 / 3;
}
.box3 {
  grid-column: 2 / 3;
  grid-row: 1 /  2;
}
.box4 {
  grid-column: 2 / 4;
  grid-row: 3 / 4;
}
</pre>

<p>{{EmbedLiveSample('Les_propriétés_raccourcies_grid-column_et_grid-row', '300', '330')}}</p>

<h2 id="La_taille_par_défaut">La taille par défaut</h2>

<p>Dans les exemples précédents, on a défini chaque ligne et colonne de fin pour chaque élément. Mais si en pratique, on souhaite qu'un élément n'occupe qu'une seule piste, on peut omettre <code>grid-column-end</code> ou <code>grid-row-end</code>. Par défaut, les éléments occupent une seule piste. Notre exemple initial, avec les propriétés détaillées peut donc être réécrit de cette façon :</p>

<pre class="brush: css hidden">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper &gt; div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</pre>

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div class="box1"&gt;Un&lt;/div&gt;
  &lt;div class="box2"&gt;Deux&lt;/div&gt;
  &lt;div class="box3"&gt;Trois&lt;/div&gt;
  &lt;div class="box4"&gt;Quatre&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.box1 {
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: 4;
}
.box2 {
  grid-column-start: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}
.box3 {
  grid-column-start: 2;
  grid-row-start: 1;
}
.box4 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
}
</pre>

<p>{{EmbedLiveSample('La_taille_par_défaut', '300', '330')}}</p>

<h3 id="Tailles_par_défaut_avec_les_propriétés_raccourcies">Tailles par défaut avec les propriétés raccourcies</h3>

<p>Avec les propriétés raccourcies, on obtient le code suivant (sans aucune barre oblique ni seconde valeur pour les éléments qui n'occupent qu'une seule piste).</p>

<pre class="brush: css hidden">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper &gt; div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</pre>

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div class="box1"&gt;Un&lt;/div&gt;
  &lt;div class="box2"&gt;Deux&lt;/div&gt;
  &lt;div class="box3"&gt;Trois&lt;/div&gt;
  &lt;div class="box4"&gt;Quatre&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.box1 {
  grid-column: 1 ;
  grid-row: 1 / 4;
}
.box2 {
  grid-column: 3 ;
  grid-row: 1 / 3;
}
.box3 {
  grid-column: 2 ;
  grid-row: 1 ;
}
.box4 {
  grid-column: 2 / 4;
  grid-row: 3 ;
}
</pre>

<p>{{EmbedLiveSample('Tailles_par_défaut_avec_les_propriétés_raccourcies', '300', '330')}}</p>

<h2 id="La_propriété_grid-area">La propriété <code>grid-area</code></h2>

<p>On peut aller plus loin et définir une zone pour chaque élément grâce à une seule propriété : {{cssxref("grid-area")}}. Cette propriété raccourcie permet d'utiliser les valeurs des propriétés suivantes (dans cet ordre) :</p>

<ul>
 <li><code>grid-row-start</code></li>
 <li><code>grid-column-start</code></li>
 <li><code>grid-row-end</code></li>
 <li><code>grid-column-end</code></li>
</ul>

<pre class="brush: css hidden">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper &gt; div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</pre>

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div class="box1"&gt;Un&lt;/div&gt;
  &lt;div class="box2"&gt;Deux&lt;/div&gt;
  &lt;div class="box3"&gt;Trois&lt;/div&gt;
  &lt;div class="box4"&gt;Quatre&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.box1 {
  grid-area: 1 / 1 / 4 / 2;
}
.box2 {
  grid-area: 1 / 3 / 3 / 4;
}
.box3 {
  grid-area: 1 / 2 / 2 / 3;
}
.box4 {
  grid-area: 3 / 2 / 4 / 4;
}
</pre>

<p>{{EmbedLiveSample('La_propriété_grid-area', '300', '330')}}</p>

<p>L'ordre des valeurs utilisé pour <code>grid-area</code> peut sembler un peu étrange quand on connaît celui utilisé par les propriétés raccourcies pour les marges (<em>margin</em>) et le remplissage (<em>padding</em>). Cet ordre s'explique car les grilles CSS fonctionnent avec les différents modes d'écriture et on utilise des propriétés et des valeurs <em>logiques</em> plutôt que des propriétés et des valeurs <em>physiques</em>. Nous aborderons ce point dans <a href="/fr/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes">un prochain article</a> mais il faut retenir ici que l'ordre des valeurs correspond aux directions logiques suivantes :</p>

<ul>
 <li><code>block-start</code></li>
 <li><code>block-end</code></li>
 <li><code>inline-start</code></li>
 <li><code>inline-end</code></li>
</ul>

<p>On travaille ici en anglais ou en français, une langue qui s'écrit de gauche à droite. La ligne physique correspondant à la ligne logique <code>block-start</code> est donc la ligne en haut du conteneur, <code>block-end</code> correspond à la ligne en bas du conteneur, <code>inline-start</code> correspond à la colonne la plus à gauche (le point de départ de l'écriture pour une ligne) et <code>inline-end</code> correspond à la dernière colonne, celle qui est située à l'extrémité droite de la grille.</p>

<p>Lorsqu'on définit une zone d'une grille grâce à la propriété <code>grid-area</code>, on commence par définir les lignes de « début » : <code>block-start</code> et <code>inline-start</code> puis les lignes de « fin » avec <code>block-end</code> et <code>inline-end</code>. Cela peut paraître étrange quand on est habitué à manipuler des propriétés physiques qui progressent dans le sens horaire : haut, droit, bas, gauche mais cet ordre paraît plus pertinent quand on considère que les sites web peuvent être multi-directionnels selon le mode d'écriture.</p>

<h2 id="Compter_à_rebours">Compter à rebours</h2>

<p>On peut également compter à l'envers, à partir des lignes de fin. Pour un document écrit en français, cela correspond à la colonne la plus à droite et à la ligne la plus basse. Pour faire référence à la dernière ligne, on peut utiliser la valeur <code>-1</code> et on peut compter à rebours au fur et à mesure de cette façon (ainsi, <code>-2</code> fait référence à l'avant-dernière ligne). Attention, ici, la dernière ligne correspond à la dernière ligne <em>explicite</em> de la grille, telle qu'elle est définie par <code>grid-template-columns</code> et <code>grid-template-rows</code>. Ce comptage ne prend pas en compte les lignes ou les colonnes qui sont ajoutées implicitement dans la grille.</p>

<p>Dans le prochain exemple, on renverse la disposition de la grille en travaillant à partir du bas et de la droite.</p>

<pre class="brush: css hidden">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper &gt; div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</pre>

<pre class="brush: html">&lt;div class="wrapper"&gt;
   &lt;div class="box1"&gt;Un&lt;/div&gt;
   &lt;div class="box2"&gt;Deux&lt;/div&gt;
   &lt;div class="box3"&gt;Trois&lt;/div&gt;
   &lt;div class="box4"&gt;Quatre&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.box1 {
  grid-column-start: -1;
  grid-column-end: -2;
  grid-row-start: -1;
  grid-row-end: -4;
}
.box2 {
  grid-column-start: -3;
  grid-column-end: -4;
  grid-row-start: -1;
  grid-row-end: -3;
}
.box3 {
  grid-column-start: -2;
  grid-column-end: -3;
  grid-row-start: -1;
  grid-row-end: -2;
}
.box4 {
  grid-column-start: -2;
  grid-column-end: -4;
  grid-row-start: -3;
  grid-row-end: -4;
}
</pre>

<p>{{EmbedLiveSample('Compter_à_rebours', '300', '330')}}</p>

<h3 id="Étirer_un_élément_sur_la_grille">Étirer un élément sur la grille</h3>

<p>Étant donné qu'on peut utiliser les numéros de lignes pour la première et la dernière, on peut facilement étirer un élément pour que celui-ci occupe toute la largeur et/ou toute la hauteur de la grille avec :</p>

<pre class="brush: css">.item {
  grid-column: 1 / -1;
}
</pre>

<h2 id="Les_gouttières">Les gouttières</h2>

<p>La spécification pour les grilles CSS permet également d'ajouter des espaces (« gouttières ») entre les colonnes et entre les lignes grâce aux propriétés {{cssxref("grid-column-gap")}} et {{cssxref("row-gap")}}. Celles-ci permettent de définir un espace, de la même façon que la propriété {{cssxref("column-gap")}} permet d'obtenir un espace pour un mode de disposition avec plusieurs colonnes.</p>

<div class="note">
<p><strong>Note :</strong> Les anciens navigateurs utilisent {{cssxref("column-gap")}}, {{cssxref("row-gap")}}, {{cssxref("gap")}} avec le préfixe <code>grid-</code> soit : {{cssxref("grid-column-gap")}}, {{cssxref("row-gap")}} et {{cssxref("gap")}}.</p>

<p>Les navigateurs actuels retirent progressivement ce préfixe (la version préfixée sera maintenue sous forme d'alias). À l'heure actuelle, certains navigateurs ne prennent pas encore la version sans préfixe et c'est pourquoi certains exemples de ce guide continuent d'utiliser les versions préfixées avec <code>grid-</code>.</p>
</div>

<p>Les gouttières apparaissent uniquement entre les pistes de la grille, elles n'ajoutent pas d'espace en haut, en bas, à gauche ou à droite du conteneur. Voyons comment ajouter des espaces sur l'exemple précédent grâce à ces propriétés :</p>

<pre class="brush: css hidden">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper &gt; div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</pre>

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div class="box1"&gt;Un&lt;/div&gt;
  &lt;div class="box2"&gt;Deux&lt;/div&gt;
  &lt;div class="box3"&gt;Trois&lt;/div&gt;
  &lt;div class="box4"&gt;Quatre&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.box1 {
  grid-column: 1 ;
  grid-row: 1 / 4;
}
.box2 {
  grid-column: 3 ;
  grid-row: 1 / 3;
}
.box3 {
  grid-column: 2 ;
  grid-row: 1 ;
}
.box4 {
  grid-column: 2 / 4;
  grid-row: 3 ;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  grid-column-gap: 20px;
  grid-row-gap: 1em;
}
</pre>

<p>{{EmbedLiveSample('Les_gouttières', '300', '350') }}</p>

<h3 id="Les_propriétés_raccourcies_pour_les_gouttières">Les propriétés raccourcies pour les gouttières</h3>

<p>Les deux propriétés que nous venons de voir peuvent être synthétisées grâce à la propriété raccourcie {{cssxref("gap")}}. Si on fournit une seule valeur, celle-ci s'appliquera pour les espaces entre les colonnes et entre les lignes. Avec deux valeurs, la première sera utilisée pour <code>grid-row-gap</code> et la seconde pour <code>grid-column-gap</code>.</p>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  grid-gap: 1em 20px;
}
</pre>

<p>Par rapport au positionnement sur les lignes, les gouttières agissent comme si la ligne avait gagné en largeur ou en hauteur. Tout ce qui commence sur une ligne commencera après cet espace et on ne peut placer aucun élément dans cette gouttière. Aussi, si on veut qu'une gouttière agisse comme une piste classique dans laquelle on peut placer des objets, il suffira de définir une nouvelle piste plutôt qu'une gouttière.</p>

<h2 id="Utiliser_le_mot-clé_span">Utiliser le mot-clé <code>span</code></h2>

<p>On a vu comment indiquer la ligne de début et la ligne de fin avec des numéros. Il est aussi possible de définir la taille d'un élément en indiquant le numéro de la ligne de départ et le nombre de pistes sur lequel s'étale l'élément.</p>

<pre class="brush: css hidden">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper &gt; div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</pre>

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div class="box1"&gt;Un&lt;/div&gt;
  &lt;div class="box2"&gt;Deux&lt;/div&gt;
  &lt;div class="box3"&gt;Trois&lt;/div&gt;
  &lt;div class="box4"&gt;Quatre&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.box1 {
  grid-column: 1;
  grid-row: 1 / span 3;
}
.box2 {
  grid-column: 3;
  grid-row: 1 / span 2;
}
.box3 {
  grid-column: 2;
  grid-row: 1;
}
.box4 {
  grid-column: 2 / span 2;
  grid-row: 3;
}
</pre>

<p>{{EmbedLiveSample('Utiliser_le_mot-clé_span', '300', '330')}}</p>

<p>Le mot-clé <code>span</code> peut également être utilisé dans les valeurs des propriétés <code>grid-row-start</code>/<code>grid-row-end</code> et <code>grid-column-start</code>/<code>grid-column-end</code>. Les deux fragments de code qui suivent créeront la même zone. Dans le premier, on indique la ligne de début puis la ligne de fin en indiquant que l'élément occupe trois lignes. La zone commencera donc sur la première ligne et occupera 3 lignes, jusqu'à la ligne 4.</p>

<pre class="brush: css">.box1 {
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: span 3;
}
</pre>

<p>Dans le deuxième exemple, on indique la ligne de fin et le nombre de lignes occupées par l'élément avec <code>span 3</code>. Cela signifie que l'élément partira de la ligne 4 et occupera 3 lignes jusqu'à la ligne 1.</p>

<pre class="brush: css">.box1 {
  grid-column-start: 1;
  grid-row-start: span 3;
  grid-row-end: 4;
}
</pre>

<p>Pour vous familiariser avec le positionnement des éléments d'une grille en utilisant les lignes, vous pouvez essayer de construire certaines dispositions fréquemment utilisées en plaçant des éléments sur des grilles avec plus ou moins de pistes. Il faut garder à l'esprit que, lorsqu'on ne place pas explicitement tous les éléments, les éléments restants seront positionnés automatiquement. Cela peut tout à fait être l'objectif recherché mais si ce n'est pas le cas et que vous voyez un élément à un endroit inapproprié, vérifiez que vous lui avez affecté une position au sein de la grille.</p>

<p>Il faut aussi se rappeler que lorsqu'on place les éléments explicitement sur la grille, ceux-ci peuvent se chevaucher. Cela permet d'obtenir certains effets mais attention aux erreurs lorsque c'est la mauvaise ligne de début ou de fin qui est indiquée. Pour régler ce problème, on peut utiliser <a href="/fr/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts">l'outil de mise en évidence de la grille CSS dans Firefox</a> pour analyser une grille compliquée.</p>

<p>{{PreviousMenuNext("Web/CSS/CSS_Grid_Layout/Les_concepts_de_base", "Web/CSS/CSS_Grid_Layout/D%C3%A9finir_des_zones_sur_une_grille","Web/CSS/CSS_Grid_Layout")}}</p>
