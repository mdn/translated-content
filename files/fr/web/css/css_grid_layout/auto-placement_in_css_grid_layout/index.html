---
title: Le placement automatique sur une grille CSS
slug: Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout
tags:
  - CSS
  - CSS Grids
  - Grilles CSS
  - Guide
  - Intermédiaire
translation_of: Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout
original_slug: Web/CSS/CSS_Grid_Layout/Placement_automatique_sur_une_grille_CSS
---
<div>{{CSSRef}}</div>

<p>{{PreviousMenuNext("Web/CSS/CSS_Grid_Layout/Utiliser_des_lignes_nommées_sur_une_grille", "Web/CSS/CSS_Grid_Layout/Alignement_des_boîtes_avec_les_grilles_CSS","Web/CSS/CSS_Grid_Layout")}}</p>

<p>En plus de pouvoir placer des objets de façon précise sur une grille, la spécification pour les grilles CSS définit le comportement obtenu lorsque certains des objets ne sont pas placés sur la grille (voire aucun). Pour voir comment fonctionne le placement automatique, il suffit de créer une grille avec un ensemble d'objets. Sans fournir aucune information de placement, ces objets se placeront chacun sur une cellule de la grille.</p>


<h2 id="Placement_automatique">Placement automatique</h2>

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
  grid-gap: 10px;
}
</pre>

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div&gt;Un&lt;/div&gt;
  &lt;div&gt;Deux&lt;/div&gt;
  &lt;div&gt;Trois&lt;/div&gt;
  &lt;div&gt;Quatre&lt;/div&gt;
  &lt;div&gt;Cinq&lt;/div&gt;
&lt;/div&gt;
</pre>

<p>{{EmbedLiveSample('Placement_automatique', '500', '230')}}</p>
</div>

<h2 id="Définir_des_règles_pour_le_placement_automatique">Définir des règles pour le placement automatique</h2>

<p>Comme on peut le voir dans l'exemple précédent, si on crée une grille sans définir de placement, tous les objets occuperont chacun une cellule de la grille. Par défaut, les objets sont placés au fur et à mesure sur les lignes horizontales de la grille. Si on a créé des lignes supplémentaires avec <code>grid-template-rows</code>, les objets suivants seront placés sur ces lignes. En revanche, si la grille ne possède pas suffisamment de lignes sur la grille explicite, de nouvelles lignes, implicites, seront créées.</p>

<h3 id="Dimensionner_les_lignes_de_la_grille_implicite">Dimensionner les lignes de la grille implicite</h3>

<p>Par défaut, les lignes implicites créées automatiquement ont une taille automatique. Autrement dit, elles seront dimensionnées pour contenir les éléments qu'elles doivent placer sans que ceux-ci dépassent.</p>

<p>Il est toutefois possible de contrôler la taille de ces lignes grâce à la propriété <code>grid-auto-rows</code>. Ainsi, si on veut que les lignes créées automatiquement mesurent 100 pixels de haut, on utilisera :</p>

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
  grid-gap: 10px;
  grid-auto-rows: 100px;
}
</pre>

<p>{{EmbedLiveSample('Dimensionner_les_lignes_de_la_grille_implicite', '500', '330')}}</p>

<h3 id="Dimensionner_les_lignes_avec_minmax">Dimensionner les lignes avec minmax()</h3>
<p>On peut utiliser la fonction {{cssxref("minmax","minmax()")}} pour la valeur de {{cssxref("grid-auto-rows")}} afin de créer des lignes avec une taille minimale mais qui puissent être plus grandes si le contenu est plus grand que cette taille minimale.</p>

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

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div&gt;Un&lt;/div&gt;
  &lt;div&gt;Deux&lt;/div&gt;
  &lt;div&gt;Trois&lt;/div&gt;
  &lt;div&gt;Quatre
    &lt;br&gt;Cette cellule
    &lt;br&gt;a du contenu
    &lt;br&gt;supplémentaire
    &lt;br&gt;et max vaut auto
    &lt;br&gt;afin que la ligne
    &lt;br&gt;se développe.
  &lt;/div&gt;
  &lt;div&gt;Five&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
</pre>

<p>{{EmbedLiveSample('Dimensionner_les_lignes_avec_minmax', '500', '330')}}</p>

<h3 id="Dimensionner_les_lignes_avec_une_liste_de_pistes">Dimensionner les lignes avec une liste de pistes</h3>

<p>On peut aussi passer en argument une liste de pistes qui se répèteront. Dans l'exemple ci-après, on crée une piste implicite pour une ligne de 100 pixels et une seconde de <code>200px</code>. Ce motif sera utilisé tant que du contenu sera ajouté à la grille implicite.</p>

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

<pre class="brush: html">&lt;div class="wrapper"&gt;
   &lt;div&gt;Un&lt;/div&gt;
   &lt;div&gt;Deux&lt;/div&gt;
   &lt;div&gt;Trois&lt;/div&gt;
   &lt;div&gt;Quatre&lt;/div&gt;
   &lt;div&gt;Cinq&lt;/div&gt;
   &lt;div&gt;Six&lt;/div&gt;
   &lt;div&gt;Sept&lt;/div&gt;
   &lt;div&gt;Huit&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: 100px 200px;
}
</pre>

<p>{{EmbedLiveSample('Dimensionner_les_lignes_avec_une_liste_de_pistes', '500', '330')}}</p>


<h3 id="Utiliser_le_placement_automatique_pour_les_colonnes">Utiliser le placement automatique pour les colonnes</h3>

<p>On peut également paramétrer la grille pour que les objets soient placés automatiquement en suivant les colonnes de la grille. Pour obtenir ce résultat, on utilisera la propriété {{cssxref("grid-auto-flow")}} avec la valeur <code>column</code>. Dans ce cas, la grille ajoutera les objets dans les lignes verticales définies avec {{cssxref("grid-template-rows")}}. Lorsqu'une colonne sera pleine, les prochains objets seront placés dans la colonne explicite suivante ou dans une colonne implicite créée automatiquement s'il n'y a plus assez de colonnes explicites. La taille des pistes pour les colonnes implicites peut être définie avec {{cssxref("grid-auto-columns")}}, cette dernière fonctionne de façon analogue à {{cssxref("grid-auto-rows")}}.</p>

<p>Dans le prochain exemple, on crée une grille avec trois lignes qui mesurent chacune 200 pixels de haut. On utilise le placement automatique en colonne. La première colonne qui sera créée mesurera 300 pixels de large, ensuite on aura une colonne de 100 pixels de large et ainsi de suite jusqu'à ce que tous les éléments puissent être placés.</p>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-rows: repeat(3, 200px);
  grid-gap: 10px;
  grid-auto-flow: column;
  grid-auto-columns: 300px 100px;
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

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div&gt;Un&lt;/div&gt;
  &lt;div&gt;Deux&lt;/div&gt;
  &lt;div&gt;Trois&lt;/div&gt;
  &lt;div&gt;Quatre&lt;/div&gt;
  &lt;div&gt;Cinq&lt;/div&gt;
  &lt;div&gt;Six&lt;/div&gt;
  &lt;div&gt;Sept&lt;/div&gt;
  &lt;div&gt;Huit&lt;/div&gt;
&lt;/div&gt;
</pre>

<p>{{EmbedLiveSample('Utiliser_le_placement_automatique_pour_les_colonnes', '500', '640')}}</p>

<h2 id="Lordre_des_éléments_placés_automatiquement">L'ordre des éléments placés automatiquement</h2>

<p>Une grille peut contenir un mélange d'éléments. Certains éléments peuvent avoir une position définie et d'autres être placés automatiquement. Ce placement automatique peut s'avérer utile lorsque l'ordre des éléments dans le document est celui qu'on veut utiliser pour organiser la grille : il n'y a alors pas besoin d'écrire de règles CSS pour positionner les éléments un par un. La spécification détaille exhaustivement <a href="https://drafts.csswg.org/css-grid/#auto-placement-algo">l'algorithme de placement des objets sur la grille</a>, mais voyons ici les quelques règles simples qu'il faut principalement retenir.</p>

<h3 id="Modification_de_lordre_du_document">Modification de l'ordre du document</h3>

<p>Le placement des éléments qui n'ont pas eu d'ordre défini sont placés selon l'algorithme décrit dans la section  <em>“order modified document order”</em>. Cela signifie que si on utilise uniquement la propriété <code>order</code>, les éléments seront placés selon cet ordre plutôt que selon l'ordre indiqué par le DOM. Sinon, l'ordre des éléments sera celui décrit par le document source.</p>

<h3 id="Les_éléments_avec_des_propriétés_de_placement">Les éléments avec des propriétés de placement</h3>

<p>La grille commencera par placer les éléments pour lesquels on a défini une position. Dans l'exemple qui suit, on a une grille avec 12 éléments, l'élément 2 et l'élément 5 sont placés en utilisant les lignes. On put voir comment ces deux éléments sont placés et comment les autres sont placés automatiquement dans les espaces restants. Les objets placés automatiquement seront placés avant les éléments qui sont placés, dans l'ordre du DOM.</p>

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

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div&gt;Un&lt;/div&gt;
  &lt;div&gt;Deux&lt;/div&gt;
  &lt;div&gt;Trois&lt;/div&gt;
  &lt;div&gt;Quatre&lt;/div&gt;
  &lt;div&gt;Cinq&lt;/div&gt;
  &lt;div&gt;Six&lt;/div&gt;
  &lt;div&gt;Sept&lt;/div&gt;
  &lt;div&gt;Huit&lt;/div&gt;
  &lt;div&gt;Neuf&lt;/div&gt;
  &lt;div&gt;Dix&lt;/div&gt;
  &lt;div&gt;Onze&lt;/div&gt;
  &lt;div&gt;Douze&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  grid-gap: 10px;
}
.wrapper div:nth-child(2) {
  grid-column: 3;
  grid-row: 2 / 4;
}
.wrapper div:nth-child(5) {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
</pre>

<p>{{EmbedLiveSample('Les_éléments_avec_des_propriétés_de_placement', '500', '450')}}</p>

<h3 id="Gérer_les_éléments_qui_sétalent_sur_plusieurs_pistes">Gérer les éléments qui s'étalent sur plusieurs pistes</h3>

<p>On peut utiliser les propriétés de placement tout en tirant parti du placement automatique. Dans le prochain exemple, on complète la disposition en indiquant que les éléments 1, 4 et 9 (4n+1) doivent occuper deux pistes, pour les colonnes et pour les lignes. Pour obtenir ce résultat, on utilise les propriétés {{cssxref("grid-column-end")}} et {{cssxref("grid-row-end")}} avec la valeur <code>span 2</code>. La ligne de début sera déterminée automatiquement et la ligne de fin sera deux pistes plus loin.</p>

<p>On peut voir coment cela laisse des espaces dans la grille car lorsqu'un élément placé automatiquement n'a pas suffisamment de place sur une piste, une nouvelle ligne sera créée jusqu'à ce que l'élément ait la place.</p>

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

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div&gt;Un&lt;/div&gt;
  &lt;div&gt;Deux&lt;/div&gt;
  &lt;div&gt;Trois&lt;/div&gt;
  &lt;div&gt;Quatre&lt;/div&gt;
  &lt;div&gt;Cinq&lt;/div&gt;
  &lt;div&gt;Six&lt;/div&gt;
  &lt;div&gt;Sept&lt;/div&gt;
  &lt;div&gt;Huit&lt;/div&gt;
  &lt;div&gt;Neuf&lt;/div&gt;
  &lt;div&gt;Dix&lt;/div&gt;
  &lt;div&gt;Onze&lt;/div&gt;
  &lt;div&gt;Douze&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  grid-gap: 10px;
}
.wrapper div:nth-child(4n+1) {
  grid-column-end: span 2;
  grid-row-end: span 2;
  background-color: #ffa94d;
}
.wrapper div:nth-child(2) {
  grid-column: 3;
  grid-row: 2 / 4;
}
.wrapper div:nth-child(5) {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
</pre>

<p>{{EmbedLiveSample('Gérer_les_éléments_qui_sétalent_sur_plusieurs_pistes', '500', '770')}}</p>

<h3 id="Combler_les_espaces">Combler les espaces</h3>

<p>En dehors des éléments placés explicitement, la grille place les éléments automatiques en respectant l'ordre du DOM. C'est généralement le résultat qu'on souhaite lorsqu'on met en forme un document comme un formulaire. Toutefois on veut parfois obtenir une disposition plus dense, sans vide entre les différents éléments.</p>

<p>Pour cela, sur le conteneur, on ajoute la propriété {{cssxref("grid-auto-flow")}} avec la valeur <code>dense</code>. C'est la même propriété qu'on utilise pour modifier l'ordre du flux avec <code>column</code>. On peut aussi obtenir une disposition dense, rangée par colonne en utilisant les deux valeurs pour la propriété : <code>grid-auto-flow: column dense</code>.</p>

<p>Avec cette valeur, la grille cherchera donc à combler les espaces qu'elle a laissés quitte à ne pas respecter l'ordre du DOM. En revanche, l'ordre de la navigation au clavier (<em>tab order</em>) suivra toujours l'ordre du document. Nous étudierons cet aspect plus en détails dans <a href="/fr/docs/Web/CSS/CSS_Grid_Layout/Les_grilles_CSS_et_l_accessibilit%C3%A9">un article sur l'accessibilité</a>.</p>

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

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div&gt;Un&lt;/div&gt;
  &lt;div&gt;Deux&lt;/div&gt;
  &lt;div&gt;Trois&lt;/div&gt;
  &lt;div&gt;Quatre&lt;/div&gt;
  &lt;div&gt;Cinq&lt;/div&gt;
  &lt;div&gt;Six&lt;/div&gt;
  &lt;div&gt;Sept&lt;/div&gt;
  &lt;div&gt;Huit&lt;/div&gt;
  &lt;div&gt;Neuf&lt;/div&gt;
  &lt;div&gt;Dix&lt;/div&gt;
  &lt;div&gt;Onze&lt;/div&gt;
  &lt;div&gt;Douze&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.wrapper div:nth-child(4n+1) {
  grid-column-end: span 2;
  grid-row-end: span 2;
  background-color: #ffa94d;
}
.wrapper div:nth-child(2) {
  grid-column: 3;
  grid-row: 2 / 4;
}
.wrapper div:nth-child(5) {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  grid-gap: 10px;
  grid-auto-flow: dense;
}
</pre>

<p>{{EmbedLiveSample('Combler_les_espaces', '500', '730')}}</p>

<h3 id="Les_éléments_anonymes_de_la_grille">Les éléments anonymes de la grille</h3>

<p>Dans la spécification, on utilise le concept d'élément anonyme. Ces éléments sont ceux qui sont créés lorsqu'on a une chaîne de caractères dans le conteneur de la grille et que celle-ci n'est pas contenue dans un autre élément. Dans l'exemple ci-après, on a trois éléments sur la grille : le premier est un élément anonyme car il n'est placé dans aucun élément, il sera alors placé automatiquement. Les deux éléments suivants sont placés dans des <code>div</code> et peuvent être placés automatiquement ou grâce à une autre méthode de positionnement.</p>

<pre class="brush: css">&lt;div class="grid"&gt;
  Je suis une chaîne de caractères et je serai placé
  automatiquement.
  &lt;div&gt;Un élément de la grille&lt;/div&gt;
  &lt;div&gt;Un élément de la grille&lt;/div&gt;
&lt;/div&gt;
</pre>

<p>Les éléments anonymes sont toujours placés automatiquement car on ne peut pas les cibler autrement. Aussi, si on a du texte sans balise dans la grille, il faut se rappeler que celui-ci peut être placé à un endroit imprévu du fait des règles de placement automatique.</p>

<h3 id="Les_cas_dutilisation_pour_le_placement_automatique">Les cas d'utilisation pour le placement automatique</h3>

<p>Le placement automatique peut être utile lorsqu'on a un ensemble d'objets qui se ressemblent. Ce peut être des éléments qui n'ont pas d'ordre logique particulier : une galerie de photos, une liste de produits. Dans ces cas de figure, on peut choisir d'utiliser une disposition dense afin de combler les trous de la grille. Dans l'exemple qui représente la galerie d'images, on a certaines images en paysage et d'autres en portrait (lorsqu'on utilise la classe <code>landscape</code> l'élément s'étend sur deux colonnes). On utilise ensuite <code>grid-auto-flow: dense</code> afin de créer une grille dense.</p>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 10px;
  grid-auto-flow: dense;
  list-style: none;
  margin: 1em auto;
  padding: 0;
  max-width: 800px;
}
.wrapper li {
  border: 1px solid #ccc;
}
.wrapper li.landscape {
  grid-column-end: span 2;
}
.wrapper li img {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</pre>

<pre class="brush: html">&lt;ul class="wrapper"&gt;
  &lt;li&gt;&lt;img src="http://placehold.it/200x300" alt="placeholder"&gt;&lt;/li&gt;
  &lt;li class="landscape"&gt;&lt;img src="http://placehold.it/350x200" alt="placeholder"&gt;&lt;/li&gt;
  &lt;li class="landscape"&gt;&lt;img src="http://placehold.it/350x200" alt="placeholder"&gt;&lt;/li&gt;
  &lt;li class="landscape"&gt;&lt;img src="http://placehold.it/350x200" alt="placeholder"&gt;&lt;/li&gt;
  &lt;li&gt;&lt;img src="http://placehold.it/200x300" alt="placeholder"&gt;&lt;/li&gt;
  &lt;li&gt;&lt;img src="http://placehold.it/200x300" alt="placeholder"&gt;&lt;/li&gt;
  &lt;li class="landscape"&gt;&lt;img src="http://placehold.it/350x200" alt="placeholder"&gt;&lt;/li&gt;
  &lt;li&gt;&lt;img src="http://placehold.it/200x300" alt="placeholder"&gt;&lt;/li&gt;
  &lt;li&gt;&lt;img src="http://placehold.it/200x300" alt="placeholder"&gt;&lt;/li&gt;
  &lt;li&gt;&lt;img src="http://placehold.it/200x300" alt="placeholder"&gt;&lt;/li&gt;
&lt;/ul&gt;
</pre>

<p>{{EmbedLiveSample('Les_cas_dutilisation_pour_le_placement_automatique', '500', '1300')}}</p>

<p>Le placement automatique peut également aider à disposer des éléments d'interface utilisateur qui ont un ordre logique. Dans l'exemple suivant, on voit comment manipuler les listes de définition. Les listes de définition sont intéressantes car il n'y a pas de niveau de regroupement pour regrouper un terme et ses définitions. Dans cet exemple, on autorise le placement automatique mais on a une classe pour qu'un élément <code>dt</code> démarre sur la première ligne et que l'élément  <code>dd</code> sur la  ligne 2. On s'assure ainsi que les termes sont bien en face de chaque définition, peu importe le nombre de définitions qu'on a pour un terme.</p>

<h3 id="Autre_exemple">Autre exemple</h3>

<pre class="brush: css hidden">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}
</pre>

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;dl&gt;
    &lt;dt&gt;Mammals&lt;/dt&gt;
    &lt;dd&gt;Cat&lt;/dd&gt;
    &lt;dd&gt;Dog&lt;/dd&gt;
    &lt;dd&gt;Mouse&lt;/dd&gt;
    &lt;dt&gt;Fish&lt;/dt&gt;
    &lt;dd&gt;Guppy&lt;/dd&gt;
    &lt;dt&gt;Birds&lt;/dt&gt;
    &lt;dd&gt;Pied Wagtail&lt;/dd&gt;
    &lt;dd&gt;Owl&lt;/dd&gt;
  &lt;dl&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">dl {
  display: grid;
  grid-template-columns: auto 1fr;
  max-width: 300px;
  margin: 1em;
  line-height: 1.4;
}
dt {
  grid-column: 1;
  font-weight: bold;
}
dd {
  grid-column: 2;
}
</pre>

<p>{{EmbedLiveSample('Autre_exemple', '500', '230')}}</p>

<div class="note">
<p><strong>Note :</strong> Voir <a href="https://www.sitepoint.com/understanding-masonry-layout/">cet article de SitePoint</a> à propos de la disposition en briques pour d'autres cas d'utilisation.</p>
</div>

<h2 id="Quest-ce_que_le_placement_automatique_ne_permet_pas_de_réaliser_actuellement">Qu'est-ce que le placement automatique ne permet pas de réaliser (actuellement) ?</h2>

<p>Certaines questions se posent encore. Actuellement on ne peut pas cibler toutes les autres cellules de la grille. On ne peut pas non plus définir une règle pour « placer tous les éléments automatiquement après la prochaine ligne intitulée <code>n</code> » (pour que certaines lignes soient sautées). Cette question <a href="https://github.com/w3c/csswg-drafts/issues/796">est décrite sur le dépôt GitHub du CSSWG</a>, n'hésitez pas à ajouter vos exemples de scénarios.</p>

<p>Si vous rencontrez des cas d'utilisation problématiques avec le placement automatique et les grilles, vous pouvez consulter les <em>issues</em> existantes et les compléter ou ajouter les vôtres. Cela permettra que les prochaines versions de la spécification soient meilleures.</p>

<p>{{PreviousMenuNext("Web/CSS/CSS_Grid_Layout/Utiliser_des_lignes_nommées_sur_une_grille", "Web/CSS/CSS_Grid_Layout/Alignement_des_boîtes_avec_les_grilles_CSS","Web/CSS/CSS_Grid_Layout")}}</p>
