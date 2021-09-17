---
title: Les concepts de base des grilles CSS
slug: Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout
tags:
  - CSS
  - CSS Grids
  - Grilles CSS
  - Guide
  - Intermédiaire
translation_of: Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout
original_slug: Web/CSS/CSS_Grid_Layout/Les_concepts_de_base
---
<div>{{CSSRef}}</div>

<p>{{PreviousMenuNext("", "Web/CSS/CSS_Grid_Layout/Placer_les_éléments_sur_les_lignes_d_une_grille_CSS","Web/CSS/CSS_Grid_Layout")}}</p>

<p>Le module <a href="/fr/docs/Web/CSS/CSS_Grid_Layout">CSS Grid Layout</a> ajoute à CSS une grille à deux dimensions. Les grilles peuvent être utilisées pour agencer des pages entières ou de petits éléments d'interface. Cet article introduit CSS Grid Layout, et la terminologie de la spécification CSS Grid Layout Level 1. Les fonctionnalités évoquées seront expliquées plus en détail dans le reste du guide.</p>

<h2 id="Qu'est-ce_qu'une_grille">Qu'est-ce qu'une grille ?</h2>

<p>Une grille est un ensemble de lignes horizontales et verticales qui se croisent – les premières définissant les rangées, et les secondes les colonnes. Les éléments sont placés sur la grille en fonction de ces rangées et colonnes. Les fonctionnalités sont les suivantes :</p>

<h3 id="Pistes_à_taille_fixe_ou_variable">Pistes à taille fixe ou variable</h3>

<p>On peut créer une grille avec des pistes à taille fixes en utilisant une unité comme le pixel. Pour les pistes à taille variable on peut utiliser le pourcentage ou la nouvelle unité <code>fr</code> créée à cet effet.</p>

<h3 id="Placement_des_éléments">Placement des éléments</h3>

<p>Pour placer les éléments sur la grille, on peut utiliser le numéro ou le nom d'une ligne, ou cibler une zone particulière. La grille contient aussi un algorithme pour placer les éléments qui n'ont pas été placés explicitement.</p>

<h3 id="Création_de_pistes_supplémentaires_pour_du_contenu">Création de pistes supplémentaires pour du contenu</h3>

<p>Lorsqu'une grille explicite n'est pas définie, la spécification prend en charge le contenu défini en dehors d'une grille en ajoutant des colonnes et des rangées. Cela comprend des fonctionnalités telles qu'« ajouter autant de colonnes que possible dans le conteneur ».</p>

<h3 id="Contrôle_de_l'alignement">Contrôle de l'alignement</h3>

<p>On peut contrôler l'alignement des éléments dans une zone de la grille, ainsi que celui de l'ensemble de la grille.</p>

<h3 id="Contrôle_des_contenus_qui_se_chevauchent">Contrôle des contenus qui se chevauchent</h3>

<p>Il peut arriver que l'on place plusieurs éléments dans une même cellule, ou que des zones se chevauchent. La superposition peut être contrôlée à l'aide de la propriété {{cssxref("z-index")}}.</p>

<p>La grille est une spécification puissante qui peut être combinée avec d'autres modules CSS tels que <a href="/fr/docs/Web/CSS/CSS_Flexible_Box_Layout">flexbox</a>. Le point de départ est le <strong>conteneur</strong>.</p>

<h2 id="Le_conteneur">Le conteneur</h2>

<p>À partir du moment où on crée un <em>conteneur</em> en déclarant la propriété <code>display: grid</code> ou <code>display: inline-grid</code> sur un élément, tous les <em>enfants directs </em>de cet élément deviennet des <em>éléments de grille</em>.</p>

<p>Cet exemple montre une div avec une classe <code>.wrapper</code>, avec cinq éléments enfants.</p>

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div&gt;Un&lt;/div&gt;
  &lt;div&gt;Deux&lt;/div&gt;
  &lt;div&gt;Trois&lt;/div&gt;
  &lt;div&gt;Quatre&lt;/div&gt;
  &lt;div&gt;Cinq&lt;/div&gt;
&lt;/div&gt;
</pre>

<p>On transforme <code>.wrapper</code> en conteneur.</p>

<pre class="brush: css">.wrapper {
  display: grid;
}
</pre>

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

<p>{{ EmbedLiveSample('Le_conteneur', '200', '330') }}</p>

<p>Tous les enfants directs sont maintenant des éléments de grille. On ne voit pas la différence dans un navigateur, car la grille n'a qu'une seule colonne. Vous trouverez sans doute utile de travailler avec Firefox, qui propose un <a href="/fr/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts">inspecteur de grille</a> dans les outils de développement. En inspectant la grille dans Firefox, vous pouvez voir une petite icône à côté de la valeur <code>grid</code>. Un clic dessus permet d'afficher la grille correspondante dans le navigateur.</p>

<p><img alt="Using the Grid Highlighter in DevTools to view a grid" src="screen_shot_2017-03-17_at_14.47.48.png"></p>

<p>Cet outil vous permettra de mieux comprendre le fonctionnement de CSS Grid Layout.</p>

<p>Pour que notre exemple ressemble vraiment à une grille nous devons ajouter des colonnes.</p>

<h2 id="Les_pistes">Les pistes</h2>

<p>Les propriétés {{cssxref("grid-template-columns")}} et {{cssxref("grid-template-rows")}} permettent de définir des colonnes et des rangées. Celles-ci définissent les pistes. Une <em>piste</em> est l'espace entre deux lignes d'une grille. L'image ci-dessous colore une piste de la grille – correspondant à la première rangée de la grille.</p>

<p><img alt="" src="1_grid_track.png"></p>

<p>On peut ajouter la propriété <code>grid-template-columns</code> à notre exemple précédent, pour définir la taille des colonnes.</p>

<p>Nous avons créé une grille avec trois pistes de 200 pixels de large. Chaque élément sera disposé dans l'une des cellules de la grille.</p>

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div&gt;Un&lt;/div&gt;
  &lt;div&gt;Deux&lt;/div&gt;
  &lt;div&gt;Trois&lt;/div&gt;
  &lt;div&gt;Quatre&lt;/div&gt;
  &lt;div&gt;Cinq&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
</pre>

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

<p>{{ EmbedLiveSample('grid_first', '610', '140') }}</p>


<h3 id="L'unité_fr">L'unité fr</h3>

<p>Les pistes peuvent être définies à l'aide de n'importe quelle unité de mesure. Les grilles proposent aussi une nouvelle unité de mesure pour aider à la création de pistes flexibles. Cette unité, <code>fr</code>, représente une fraction de l'espace disponible dans le conteneur de la grille. Le code suivant crée trois colonnes égales qui se redimensionnent en fonction de l'espace disponible.</p>

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div&gt;Un&lt;/div&gt;
  &lt;div&gt;Deux&lt;/div&gt;
  &lt;div&gt;Trois&lt;/div&gt;
  &lt;div&gt;Quatre&lt;/div&gt;
  &lt;div&gt;Cinq&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</pre>

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

<p>{{ EmbedLiveSample("L'unité_fr", '220', '140') }}</p>

<p>L'exemple suivant crée une grille avec une colonne de <code>2fr</code>, et deux colonnes de <code>1fr</code>. L'espace disponible est divisé en quatre. Les deux premières fractions sont allouées à la première colonne, et chacune des colonnes suivante dispose d'une fraction.</p>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}
</pre>

<p>Dans ce dernier exemple nous utilisons à la fois des dimensions absolues et des relatives. La première colonne faisant 500px, cette valeur est soustraite de l'espace disponible. L'espace restant est divisé en trois et alloué proportionnellement aux deux colonnes spécifiées avec l'unité relative <code>fr</code>.</p>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: 500px 1fr 2fr;
}
</pre>

<h3 id="Utiliser_la_notation_repeat()_pour_définir_les_pistes">Utiliser la notation <code>repeat()</code> pour définir les pistes</h3>

<p>Pour les grilles comprenant de nombreuses pistes on peut utiliser la notation <code>repeat()</code> pour répéter toute ou une partie des pistes définies. Par exemple la définition de grille :</p>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</pre>

<p>peut également s'écrire :</p>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</pre>

<p>Dans l'exemple suivant on crée une grille avec une première colonne de 20px de large, puis une section répétant 6 fois une piste de 1fr, et enfin on termine par une colonne de 20px de large.</p>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: 20px repeat(6, 1fr) 20px;
}
</pre>

<p>Cette notation accepte une liste de pistes, on peut donc l'utiliser pour répéter un motif. Dans l'exemple qui suit la grille aura 10 colonnes : une colonne de 1fr suivie d'une colonne de 2fr, ceci répété 5 fois.</p>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr 2fr);
}
</pre>

<h3 id="Grille_implicite_et_grille_explicite">Grille implicite et grille explicite</h3>

<p>Dans ces exemples nous avons défini nos colonnes à l'aide de la propriété {{cssxref("grid-template-columns")}}, et nous avons laissé la grille créer les rangées. Ces rangées font partie de la grille implicite.La grille explicite est constituée des pistes définies par les propriétés {{cssxref("grid-template-columns")}} et {{cssxref("grid-template-rows")}}. Si un élément est placé en dehors de la grille ainsi définie, ou que la quantité de contenu nécessite d'étendre la grille, alors la grille ajoute implicitement des colonnes et rangées. Les dimensions de ces pistes auront par défaut la valeur auto, c'est-à dire qu'elles s'ajusteront à leur contenu.</p>

<p>On peut définir une taille pour les pistes de la grille implicite grâce aux propriéts {{cssxref("grid-auto-rows")}} et {{cssxref("grid-auto-columns")}}.</p>

<p>Dans l'exemple ci-après nous utilisons <code>grid-auto-rows</code> pour que les rangées de la grille implicite fassent 200 pixels de haut.</p>

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div&gt;Un&lt;/div&gt;
  &lt;div&gt;Deux&lt;/div&gt;
  &lt;div&gt;Trois&lt;/div&gt;
  &lt;div&gt;Quatre&lt;/div&gt;
  &lt;div&gt;Cinq&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
}
</pre>

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

<p>{{ EmbedLiveSample('Grille_implicite_et_grille_explicite', '230', '420') }}</p>

<h3 id="Dimensionner_une_piste_avec_minmax">Dimensionner une piste avec <code>minmax</code></h3>

<p>Que l'on crée une grille explicite, ou que l'on définisse la taille des pistes créées implicitement, il peut être utile d'assigner une taille minimum, qui s'agrandit pour s'adapter au contenu. Par exemple on peut souhaiter que les rangées ne soient jamais moins hautes que 100 pixels, mais qu'elles aillent jusqu'à 300 pixels de haut si le contenu le nécessite.</p>

<p>La fonction {{cssxref("minmax()", "minmax()")}} permet ce comportement. Dans l'exemple suivant nous utilisons <code>minmax()</code> comme valeur de la propriété {{cssxref("grid-auto-rows")}}. Les rangées créées automatiquement feront un minimum de 100 pixels, et un maximum de <code>auto</code>, ce qui signifie que la taille s'adaptera à la hauteur du contenu.</p>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
</pre>

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
}</pre>

<pre class="brush: html">&lt;div class="wrapper"&gt;
   &lt;div&gt;Un&lt;/div&gt;
   &lt;div&gt;Deux
     &lt;p&gt;Davantage de contenu.&lt;/p&gt;
     &lt;p&gt;On dépasse les 100 pixels.&lt;/p&gt;
   &lt;/div&gt;
   &lt;div&gt;Trois&lt;/div&gt;
   &lt;div&gt;Quatre&lt;/div&gt;
   &lt;div&gt;Cinq&lt;/div&gt;
&lt;/div&gt;
</pre>

<p>{{ EmbedLiveSample('Dimensionner_une_piste_avec_minmax', '240', '470') }}</p>

<h2 id="Lignes_de_grille">Lignes de grille</h2>

<p>Il faut noter que l'on définit les pistes d'une grille, et pas les lignes qui en résultent. La grille génère des lignes numérotées que l'on utilise pour positionner les éléments. Dans notre grille de trois colonnes et deux rangées, nous avons quatre lignes de colonnes.</p>

<p><img alt="Grid Lines" src="grid2.jpg"></p>

<p>Les lignes sont numérotées selon le sens de lecture du document. Dans un langage qui se lit de gauche à droite, la ligne 1 est située à gauche, dans un langage qui se lit de droite à gauche elle est située à droite. Les lignes peuvent aussi être nommées, comme nous le verrons plus loin dans ces pages.</p>

<h3 id="Positionnement_des_éléments_sur_les_lignes">Positionnement des éléments sur les lignes</h3>

<p>Nous explorerons le placement sur les lignes plus en détail dans un prochain article, l'exemple qui suit montre comment l'utiliser de façon simple.</p>

<p>Lorsque nous plaçons un élément nous ciblons une ligne plutôt qu'une piste. Nous plaçons ici les deux premiers éléments en utilisant les propriétés {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-row-start")}} et {{cssxref("grid-row-end")}}. En allant de gauche à droite, le premier élément est placé sur la ligne de colonne 1, et va jusqu'à la ligne de colonne 4, qui dans ce cas est la dernière. Il est placé sur la ligne de rangée 1, et va jusqu'à la ligne 3, s'étendant ainsi sur deux rangées.</p>

<p>Le second élément commence sur la ligne de colonne 1 et s'étend sur une seule piste. C'est la largeur par défaut, donc il n'est pas nécessaire de spécifier la ligne de fin. Il s'étend aussi sur deux rangées de la ligne 3 à la ligne 5. Les autres éléments se placeront dans les espaces vides de la grille.</p>

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div class="box1"&gt;Un&lt;/div&gt;
  &lt;div class="box2"&gt;Deux&lt;/div&gt;
  &lt;div class="box3"&gt;Trois&lt;/div&gt;
  &lt;div class="box4"&gt;Quatre&lt;/div&gt;
  &lt;div class="box5"&gt;Cinq&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}
.box2 {
  grid-column-start: 1;
  grid-row-start: 3;
  grid-row-end: 5;
}
</pre>

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


<p>{{ EmbedLiveSample('Positionnement_des_éléments_sur_les_lignes', '230', '420') }}</p>

<p>Pensez à utiliser l'<a href="/fr/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts">Inspecteur de grille</a> dans les outils de développement pour voir comment les éléments se placent sur les lignes d'une grille items.</p>

<h2 id="Les_cellules">Les cellules</h2>

<p>Une <em>cellule</em> est la plus petite unité sur une grille, conceptuellement similaire à une cellule de tableau. Comme nous l'avons vu lorsqu'une grille est définie sur un élément ses enfants viennent se positionner chacun dans l'une des cellules de la grille. Dans l'image ci-dessous la première cellule est colorée.</p>

<p><img alt="The first cell of the grid highlighted" src="1_grid_cell.png"></p>

<h2 id="Les_zones">Les zones</h2>

<p>Un élément peut s'étendre sur plusieurs cellules d'une rangée ou d'une colonne, et cela crée une <em>zone</em>. Les zones doivent être rectangulaires - on ne peut pas créer de forme en L par exemple. La zone colorée ci-dessous s'étend sur deux rangées et deux colonnes.</p>

<p><img alt="A grid area" src="1_grid_area.png"></p>

<h2 id="Les_gouttières">Les gouttières</h2>

<p>Les <em>gouttière</em><em>s</em> entre les cellules sont définies à l'aide des propriétés {{cssxref("grid-column-gap")}} et {{cssxref("row-gap")}}, ou de la propriété raccourcie {{cssxref("gap")}}. Dans l'exemple ci-dessous nous créons une gouttière de dix pixels de large entre les colonnes, et une gouttière de 1em de hauteur entre les rangées.</p>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 1em;
}
</pre>

<div class="note">
<p><strong>Note :</strong> Les anciens navigateurs utilisent {{cssxref("column-gap")}}, {{cssxref("row-gap")}}, {{cssxref("gap")}} avec le préfixe <code>grid-</code> soit : {{cssxref("grid-column-gap")}}, {{cssxref("row-gap")}} et {{cssxref("gap")}}.</p>

<p>Les navigateurs actuels retirent progressivement ce préfixe (la version préfixée sera maintenue sous forme d'alias). À l'heure actuelle, certains navigateurs ne prennent pas encore la version sans préfixe et c'est pourquoi certains exemples de ce guide continuent d'utiliser les versions préfixées avec <code>grid-</code>.</p>
</div>

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div&gt;Un&lt;/div&gt;
  &lt;div&gt;Deux&lt;/div&gt;
  &lt;div&gt;Trois&lt;/div&gt;
  &lt;div&gt;Quatre&lt;/div&gt;
  &lt;div&gt;Cinq&lt;/div&gt;
&lt;/div&gt;
</pre>

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

<p>{{ EmbedLiveSample('Les_gouttières') }}</p>

<p>L'espace utilisé par les gouttières sera pris en compte avant l'assignation de la place restante aux pistes définies avec l'unité <code>fr</code>. La taille des gouttières est calculée comme celle des pistes, mais on ne peut pas placer d'élément dans une gouttière. Au niveau du positionnement des éléments sur les lignes, la gouttière se comporte comme une ligne épaisse.</p>

<h2 id="Grilles_imbriquées">Grilles imbriquées</h2>

<p>Un élément placé dans une grille peut aussi être le conteneur d'une autre grille. Dans l'exemple suivant nous retrouvons la grille de trois colonnes créée plus haut, avec deux éléments explicitement positionnés. Le premier élément contient lui-même des éléments. Comme ils ne sont pas des enfants directs de la grille principale, ils se positionnent normalement dans le flux.</p>

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div class="box box1"&gt;
    &lt;div class="nested"&gt;a&lt;/div&gt;
    &lt;div class="nested"&gt;b&lt;/div&gt;
    &lt;div class="nested"&gt;c&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="box box2"&gt;Deux&lt;/div&gt;
  &lt;div class="box box3"&gt;Trois&lt;/div&gt;
  &lt;div class="box box4"&gt;Quatre&lt;/div&gt;
  &lt;div class="box box5"&gt;Cinq&lt;/div&gt;
&lt;/div&gt;
</pre>

<p><img alt="Nested grid in flow" src="grid3.jpg"></p>

<p>En définissant la propriété <code>display:grid</code> sur l'élément <code>box1</code>, il devient lui-même une grille et ses enfants se positionnent sur cette grille.</p>

<pre class="brush: css">.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</pre>

<pre class="brush: css hidden">* {box-sizing: border-box;}
.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
}
.box {
    border: 2px solid #ffa94d;
    border-radius: 5px;
    background-color: #ffd8a8;
    padding: 1em;
    color: #d9480f;
}
.nested {
    border: 2px solid #ffec99;
    border-radius: 5px;
    background-color: #fff9db;
    padding: 1em;
}
</pre>

<p>{{ EmbedLiveSample('Grilles_imbriquées', '600', '340') }}</p>

<p>Dans ce cas la grille imbriquée n'est pas liée à la grille qui la contient. Elle n'hérite pas des {{cssxref("gap")}}, et ses lignes ne s'alignent pas avec celles de la grille parent.</p>

<h3 id="Sous-grille">Sous-grille</h3>

<p>Dans le brouillon de travaille pour la spécification de niveau 2 pour CSS Grid, il existe une fonctionnalité nommée <em>sous-grille</em> qui permet de créer des grilles imbriquées qui utilisent la définition de la grille parent. <em>Ceci n'est implémenté dans aucun navigateur pour le moment, et la spécification peut encore changer.</em> Pour l'utiliser telle qu'elle est définie actuellement il faudrait modifier l'exemple suivant et remplacer <code>display: grid</code> par <code>display: subgrid, </code>et supprimer la définition des pistes. La piste imbriquée utiliserait les pistes de la grille parent pour positionner ses éléments.</p>

<p>Selon la version actuelle de la spécifiction, il faudrait éditer l'exemple de grille imbriquée précédent et remplacer <code>grid-template-columns: repeat(3, 1fr)</code> en <code>grid-template-columns: subgrid</code>. La grille imbriquée utilisera alors la grille parente pour inscrire ses éléments dans le document.</p>

<pre class="brush: css">.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: subgrid;
}
</pre>

<h2 id="Superposer_les_éléments_avec_z-index">Superposer les éléments avec <code>z-index</code></h2>

<p>Plusieurs éléments peuvent être placés dans la même cellule. Si nous retournons à notre exemple avec les items positionnés par numéros de ligne, nous pouvons modifier cela pour que deux items se chevauchent.</p>

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div class="box box1"&gt;Un&lt;/div&gt;
  &lt;div class="box box2"&gt;Deux&lt;/div&gt;
  &lt;div class="box box3"&gt;Trois&lt;/div&gt;
  &lt;div class="box box4"&gt;Quatre&lt;/div&gt;
  &lt;div class="box box5"&gt;Cinq&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}
.box2 {
  grid-column-start: 1;
  grid-row-start: 2;
  grid-row-end: 4;
}
</pre>

<pre class="brush: css hidden">* {box-sizing: border-box;}
.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}
.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</pre>

<p>{{ EmbedLiveSample('Superposer_les_éléments_avec_z-index', '230', '420') }}</p>

<p>L'élément <code>box2</code> est maintenant superposé avec <code>box1</code>, et comme il arrive après dans le code source il s'affiche par-dessus.</p>

<h3 id="Contrôler_l’ordre_de_superposition">Contrôler l’ordre de superposition</h3>

<p>On peut contrôler l'ordre dans lequel les éléments s'empilent en utilisant la propriété <code>z-index</code>. Si nous donnons à <code>box2</code> un <code>z-index</code> inférieur à celui de <code>box1</code>, l'élément <code>box2</code> s'affichera sous <code>box1</code> dans la pile.</p>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  z-index: 2;
}
.box2 {
  grid-column-start: 1;
  grid-row-start: 2;
  grid-row-end: 4;
  z-index: 1;
}
</pre>

<pre class="brush: html hidden">&lt;div class="wrapper"&gt;
    &lt;div class="box box1"&gt;Un&lt;/div&gt;
    &lt;div class="box box2"&gt;Deux&lt;/div&gt;
   &lt;div class="box box3"&gt;Trois&lt;/div&gt;
   &lt;div class="box box4"&gt;Quatre&lt;/div&gt;
   &lt;div class="box box5"&gt;Cinq&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css hidden">* {box-sizing: border-box;}
.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
}
.box {
    border: 2px solid #ffa94d;
    border-radius: 5px;
    background-color: #ffd8a8;
    padding: 1em;
    color: #d9480f;
}
</pre>

<p>{{ EmbedLiveSample("Contrôler_l’ordre_de_superposition", '230', '420') }}</p>

<h2 id="La_suite">La suite</h2>

<p>Dans cet article nous avons parcouru rapidement la spécification CSS Grid Layout. Essayez de jouer avec les exemples, avant de passer aux parties suivantes de ce guide pour commencer à vraiment plonger dans le détail de la CSS Grid Layout.</p>

<p>{{PreviousMenuNext("", "Web/CSS/CSS_Grid_Layout/Placer_les_éléments_sur_les_lignes_d_une_grille_CSS","Web/CSS/CSS_Grid_Layout")}}</p>
