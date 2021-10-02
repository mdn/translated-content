---
title: Construire des dispositions courantes avec des grilles CSS
slug: Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout
tags:
  - CSS
  - CSS Grids
  - Grilles CSS
  - Guide
  - Intermédiaire
translation_of: Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout
original_slug: >-
  Web/CSS/CSS_Grid_Layout/Construire_des_dispositions_courantes_avec_des_grilles_CSS
---
<div>{{CSSRef}}</div>

<p>{{PreviousMenuNext("Web/CSS/CSS_Grid_Layout/Modèle_de_grille_et_autres_modèles_de_disposition","","Web/CSS/CSS_Grid_Layout")}}</p>

<p>Pour clôturer ces différents guides, nous allons maintenant voir différentes dispositions sur lesquelles nous appliquerons des techniques avec les grilles CSS. Nous prendrons un exemple qui utilise <a href="/fr/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas">les zones nommées d'une grille</a>, un système de grille flexible avec 12 colonnes et aussi une liste de produits avec un placement automatique. Comme nous le verrons, il existe plusieurs méthodes pour accéder à chaque résultat. À vous de choisir la méthode qui vous paraît la plus pertinente et utile pour les problèmes que vous avez à résoudre et les dispositions que vous devez implémenter.</p>

<h2 id="Une_disposition_adaptative_avec_une_à_trois_colonnes_en_utilisant_grid-template-areas">Une disposition adaptative avec une à trois colonnes en utilisant <code>grid-template-areas</code></h2>

<p>De nombreux sites web sont construits comme une variation autour de cette disposition avec du contenu, une ou plusieurs barres latérale, un en-tête et un pied de page. Pour que le site soit <em>responsive</em>, on peut souhaiter avoir une seule colonne pour certaines tailles d'affichage, ajouter une barre latérale lorsqu'on a plus d'espace et enfin, avoir trois colonnes pour les écrans les plus larges.</p>

<p><img alt="Image of the three different layouts created by redefining our grid at two breakpoints." src="11-responsive-areas.png"></p>

<p>Ici, on crée une disposition avec des zones nommées comme on a pu le voir <em><a href="/fr/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas">dans l'article correspondant</a></em>.</p>

<p>Dans le document on a un conteneur qui contient un en-tête, un pied de page, du contenu principal, une barre de navigation, une barre latérale et un bloc dans lequel on souhaite placer de la publicité.</p>

<pre class="brush: css hidden">* {box-sizing: border-box;}

.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  font: 1.2em Helvetica, arial, sans-serif;
}

.wrapper &gt; * {
  border: 2px solid #f08c00;
  background-color: #ffec99;
  border-radius: 5px;
  padding: 10px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</pre>

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;header class="main-head"&gt;L'en-tête&lt;/header&gt;
  &lt;nav class="main-nav"&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href=""&gt;Nav 1&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=""&gt;Nav 2&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=""&gt;Nav 3&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;
  &lt;article class="content"&gt;
    &lt;h1&gt;L'article principal&lt;/h1&gt;
    &lt;p&gt;
       Dans cette disposition, on affiche les zones dans le même
       ordre que dans le document pour les écrans dont la largeur
       est inférieure à 500 pixels. On passe à une disposition sur
       deux colonnes ou trois colonnes en redéfinissant la grille
       et le placement des objets sur la grille.
    &lt;/p&gt;
  &lt;/article&gt;
  &lt;aside class="side"&gt;Barre latérale&lt;/aside&gt;
  &lt;div class="ad"&gt;Publicité&lt;/div&gt;
  &lt;footer class="main-footer"&gt;Le pied de page&lt;/footer&gt;
&lt;/div&gt;
</pre>

<p>On utilise {{cssxref("grid-template-areas")}} afin de créer la disposition. On nomme les zones en dehors des différentes <em>media queries</em>. Les propriétés sont nommées grâce à la propriété {{cssxref("grid-area")}}.</p>

<pre class="brush: css">.main-head {
  grid-area: header;
}
.content {
  grid-area: content;
}
.main-nav {
  grid-area: nav;
}
.side {
  grid-area: sidebar;
}
.ad {
  grid-area: ad;
}
.main-footer {
  grid-area: footer;
}
</pre>

<p>Avec ces différentes règles, on n'a pas encore de disposition, uniquement des noms qu'on pourra utiliser. Ensuite, on définit la disposition qu'on aura par défaut et qui sera utilisée pour les mobiles. Dans cette règle, on garde le même ordre que celui utilisé dans le document (cf. <em><a href="/fr/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility">le guide sur les grilles CSS et l'accessibilité</a></em>). On ne définit aucune piste (colonne ou ligne) mais cela suffit pour décrire une disposition sur une seule colonne, les lignes seront créées implicitement lorsqu'elles seront nécessaires.</p>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    "header"
    "nav"
    "content"
    "sidebar"
    "ad"
    "footer";
}
</pre>

<p>Après cette disposition par défaut pour les appareils mobiles, on peut ajouter une <a href="/fr/docs/Web/CSS/Media_Queries">requête média (<em>media query</em>)</a> et redéfinir la disposition lorsqu'on a plus d'espace et qu'on peut afficher deux colonnes :</p>

<pre class="brush: css">@media (min-width: 500px) {
  .wrapper {
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "header  header"
      "nav     nav"
      "sidebar content"
      "ad      footer";
  }
  nav ul {
    display: flex;
    justify-content: space-between;
  }
}
</pre>

<p>On peut voir la disposition organisée dans la valeur pour la propriété {{cssxref("grid-template-areas")}}. L'en-tête <code>header</code> s'étale sur deux colonnes et le bloc <code>nav</code> également. Sur la troisième ligne, on a la barre latérale (<code>sidebar</code>) à côté du contenu (<code>content</code>). Sur la quatrième ligne, on a le bloc pour la publicité (<code>ad</code>) qui apparaît sous la barre latérale et enfin le pied de page qui apparaît sous le contenu. On utilise une boîte flexible pour la barre de navigation afin de l'étaler sur une ligne homogène.</p>

<p>Enfin, on ajoute une autre requête de média pour la disposition avec trois colonnes :</p>

<pre class="brush: css">@media (min-width: 700px) {
  .wrapper {
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas:
      "header header  header"
      "nav    content sidebar"
      "nav    content ad"
      "footer footer  footer"
   }
   nav ul {
     flex-direction: column;
   }
}
</pre>

<p>Cette disposition en trois colonnes possède une première colonne qui s'étend sur <code>1fr</code>, une colonne centrale qui s'étend sur <code>4fr</code> et une dernière colonne qui mesure également <code>1fr</code>. Cela signifie que l'espace disponible dans le conteneur est découpé en 6 et que chacun de ces morceaux est affecté à une de ces pistes.</p>

<p>Dans cette disposition, la barre de navigation est affichée dans la colonne à gauche, à côté du contenu. Sur la colonne à droite, on a la barre latérale au-dessus de la publicité. Le pied de page, quant à lui, s'étale sur tout le bas du conteneur. Ici aussi, on utilise une boîte flexible en colonne pour la barre de navigation.</p>

<p>{{EmbedLiveSample('Une_disposition_adaptative_avec_une_à_trois_colonnes_en_utilisant_grid-template-areas', '800', '430')}}</p>

<p>Cet exemple est assez simple mais permet d'illustrer comme utiliser une grille afin de réorganiser le contenu pour différentes tailles d'écran. On voit par exemple comment on déplace le bloc <code>ad</code> dans les différentes organisations. L'utilisation des noms pour les zones permet de prototyper rapidement de nouvelles dispositions. Vous pouvez toujours utiliser la grille pour agencer votre prototype même si ce n'est pas la technologie que vous utiliserez pour votre site ou votre application en production.</p>

<h2 id="Une_disposition_flexible_avec_12_colonnes">Une disposition flexible avec 12 colonnes</h2>

<p>Si vous travaillez avec un <em>framework</em> ou avec un système de grille, vous êtes peut-être habitué-e à travailler sur une grille avec 12 ou 16 colonnes. On peut recréer ce genre de système avec une grille CSS. Pour commencer, on crée une grille avec 12 colonnes dont chaque piste mesure <code>1fr</code>-unit et commence par une ligne intitulée <code>col-start</code>. Autrement dit, on aura 12 colonnes intitulées <code>col-start</code>.</p>

<pre class="brush: css hidden">.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  font: 1.2em Helvetica, arial, sans-serif;
}
.wrapper &gt; * {
  border: 2px solid #f08c00;
  background-color: #ffec99;
  border-radius: 5px;
  padding: 10px;
}
</pre>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-gap: 20px;
}
</pre>

<p>Pour voir comment ce système fonctionne, on place quatre éléments dans le conteneur :</p>

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div class="item1"&gt;Début à la première colonne, s'étend sur 3 colonnes.&lt;/div&gt;
  &lt;div class="item2"&gt;Début à la colonne 6, s'étend sur 4 colonnes et deux lignes.&lt;/div&gt;
  &lt;div class="item3"&gt;Début à la colonne 2 de la ligne 2, s'étend sur 2 colonnes.&lt;/div&gt;
  &lt;div class="item4"&gt;Début à la colonne 3, s'étend jusqu'à la fin de la grille.&lt;/div&gt;
&lt;/div&gt;
</pre>

<p>Et on place ces éléments sur la grille en utilisant les noms utilisés précédemment, avec le mot-clé <code>span</code> :</p>

<pre class="brush: css">.item1 {
  grid-column: col-start / span 3;
}
.item2 {
  grid-column: col-start 6 / span 4 ;
  grid-row: 1 / 3;
}
.item3 {
  grid-column: col-start 2 / span 2;
  grid-row: 2;
}
.item4 {
  grid-column: col-start 3 / -1;
  grid-row: 3;
}
</pre>

<p>{{EmbedLiveSample('Une_disposition_flexible_avec_12_colonnes', '800', '330')}}</p>

<p>Comme nous l'avons vu dans <a href="/fr/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines">le guide sur le nommage des lignes</a>, on utilise les noms des colonnes pour placer nos éléments. On a ici 12 colonnes avec le même nom, on utilise donc ce nom et l'indice qui indique le numéro. On pourrait tout aussi bien utiliser seulement le numéro si on voulait se passer des noms pour les lignes.</p>

<p>Plutôt que d'indiquer le numéro de la dernière colonne pour chaque élément, on a ici utilisé le mot-clé <code>span</code> pour indiquer la taille de chaque élément. Cette approche permet de revoir plus clairement la taille de chaque élément lorsqu'on ajoute une nouvelle disposition pour une nouvelle taille d'écran. Dans la capture qui suit, on peut voir comment les blocs sont positionnés sur la grilles. Pour cela, on a utilisé <a href="/fr/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts">l'inspecteur de grille de Firefox</a> qui indique de façon claire comment les objets sont placés.</p>

<p><img alt="Showing the items placed on the grid with grid tracks highlighted." src="11-grid-inspector-12col.png"></p>

<p>Il y a certainement certaines différences fondamentales avec les systèmes que vous auriez pu utiliser précédemment. On voit par exemple qu'il n'est pas nécessaire d'ajouter de règles supplémentaires pour créer une ligne. Généralement, il faut ajouter des contrôles pour éviter que les éléments remontent sur les lignes au-dessus. Avec une grille CSS, ce n'est pas un problème, les lignes supérieures sont laissées vides. La disposition étant <em>stricte</em>, on peut très bien laisser des espaces dans notre plan. Il n'est pas non plus nécessaire de définir des classes spécifiques afin d'indenter les différents objets, il suffit ici d'indiquer la colonne de début et la colonne de fin.</p>

<h2 id="Construire_une_disposition_avec_ce_système_à_12_colonnes">Construire une disposition avec ce système à 12 colonnes</h2>

<p>Pour voir comment cette méthode fonctionne en pratique, nous allons créé le même plan que celui que nous avons vu avec les zones nommées et {{cssxref("grid-template-areas")}} mais en utilisant désormais ce système à 12 colonnes. Commençons avec la même structure que celle utilisée plus haut avec les zones nommées :</p>

<pre class="brush: css hidden">* {box-sizing: border-box;}

.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  font: 1.2em Helvetica, arial, sans-serif;
}

.wrapper &gt; * {
  border: 2px solid #f08c00;
  background-color: #ffec99;
  border-radius: 5px;
  padding: 10px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</pre>

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;header class="main-head"&gt;L'en-tête&lt;/header&gt;
  &lt;nav class="main-nav"&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href=""&gt;Nav 1&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=""&gt;Nav 2&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=""&gt;Nav 3&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;
  &lt;article class="content"&gt;
    &lt;h1&gt;L'article principal&lt;/h1&gt;
    &lt;p&gt;
       Dans cette disposition, on affiche les zones dans le même
       ordre que dans le document pour les écrans dont la largeur
       est inférieure à 500 pixels. On passe à une disposition sur
       deux colonnes ou trois colonnes en redéfinissant la grille
       et le placement des objets sur la grille.
    &lt;/p&gt;
  &lt;/article&gt;
  &lt;aside class="side"&gt;Barre latérale&lt;/aside&gt;
  &lt;div class="ad"&gt;Publicité&lt;/div&gt;
  &lt;footer class="main-footer"&gt;Le pied de page&lt;/footer&gt;
&lt;/div&gt;
</pre>

<p>On initialise la grille avec nos 12 colonnes :</p>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-gap: 20px;
}
</pre>

<p>Là encore, nous allons adapter la disposition en fonction de la taille de la zone d'affichage mais ici, nous utiliserons les colonnes nommées. Pour chaque type d'affichage, nous allons utiliser 12 colonnes et faire varier le nombre de pistes sur lequel s'étalent les objets à afficher.</p>

<p>Commençons par le mobile : on souhaite gérer les écrans les plus étroits par défaut. Ici aussi, on respecte l'ordre des éléments indiqués par le code source du document et tous les objets s'étalent tout au long de la grille.</p>

<pre class="brush: css">.wrapper &gt; * {
  grid-column: col-start / span 12;
}
</pre>

<p>Pour la prochaine taille, on veut obtenir une disposition sur deux colonnes. Ici, l'en-tête et la barre de navigation occuperont toute une ligne horizontale, il n'est donc pas nécessaire d'indiquer de positionnement pour eux. La barre latérale commence sur la première colonne intitulée <code>col-start</code> et s'étend sur 3 colonnes et commence à partir de la troisième ligne (les deux premières étant occupées par l'en-tête et la barre de navigation).</p>

<p>Le panneau dédié à la publicité est affiché sous la barre latérale et commence à partir de la quatrième ligne. On a ensuite le contenu et le pied de page qui commencent à partir de la quatrième colonne et s'étendent sur 9 pistes pour occuper le reste de la grille.</p>

<pre class="brush: css">@media (min-width: 500px) {
  .side {
    grid-column: col-start / span 3;
    grid-row: 3;
  }
  .ad {
    grid-column: col-start / span 3;
    grid-row: 4;
  }
  .content, .main-footer {
    grid-column: col-start 4 / span 9;
  }
  nav ul {
    display: flex;
    justify-content: space-between;
  }
}
</pre>

<p>Voyons alors la disposition sur trois colonnes. Pour ce plan, l'en-tête s'étale aussi sur toute la largeur de la grille, la barre de navigation devient verticale, à côté on a le contenu puis la barre latérale. Le pied de page s'étale, lui aussi, sur toute la largeur du conteneur.</p>

<pre class="brush: css">@media (min-width: 700px) {
  .main-nav {
    grid-column: col-start / span 2;
    grid-row: 2 / 4;
  }
  .content {
    grid-column: col-start 3 / span 8;
    grid-row: 2 / 4;
  }
  .side {
    grid-column: col-start 11 / span 2;
    grid-row: 2;
  }
  .ad {
    grid-column: col-start 11 / span 2;
    grid-row: 3;
  }
  .main-footer {
    grid-column: col-start / span 12;
  }
  nav ul {
    flex-direction: column;
  }
}
</pre>

<p>{{EmbedLiveSample('Construire_une_disposition_avec_ce_système_à_12_colonnes', '800', '430')}}</p>

<p>On peut à nouveau profiter de <a href="/fr/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts">l'inspecteur de grille</a> pour voir comment se compose effectivement notre disposition :</p>

<p><img alt="Showing the layout with grid tracks highlighted by the grid inspector." src="11-grid-inspector-12col-layout.png"></p>

<p>On notera qu'il n'a pas été nécessaire de redéfinir explicitement la position de chaque élément pour chaque résolution. On a pu hériter des emplacements des résolutions précédentes. On gagne donc à travailler en considérant les résolutions mobiles en premier lieu. On tire également parti du placement automatique géré par la grille avec l'ordre, logique, des éléments du documents. Dans le dernier exemple, nous allons voir comment le placement automatique sur la grille peut aider à positionner des objets..</p>

<h2 id="Une_liste_produit_utilisant_le_placement_automatique">Une liste produit utilisant le placement automatique</h2>

<p>De nombreuses dispositions sont essentiellement composée de <em>cartes</em> ou <em>tuiles</em> : des listes produit, des galeries d'image, etc. Avec une grille, on peut facilement créer ce genre de liste de façon adaptative, sans avoir à ajouter de <a href="/fr/docs/Web/CSS/Media_Queries">requêtes de média</a>. Dans l'exemple qui suit, nous allons combiner les grilles CSS et les boîtes flexibles afin d'obtenir une liste de produits.</p>

<p>Le document utilisé contient une liste d'objets non ordonnée. Pour chaque produit, on a un titre, un texte dont la taille n'est pas fixe et un lien pour effectuer une action.</p>

<pre class="brush: html">&lt;ul class="listing"&gt;
  &lt;li&gt;
    &lt;h2&gt;Produit n°1&lt;/h2&gt;
    &lt;div class="body"&gt;&lt;p&gt;Le descriptif du produit sera écrit ici.&lt;/p&gt;&lt;/div&gt;
    &lt;div class="cta"&gt;&lt;a href=""&gt;Faire quelque chose !&lt;/a&gt;&lt;/div&gt;
  &lt;/li&gt;
   &lt;li&gt;
     &lt;h2&gt;Produit n°2&lt;/h2&gt;
     &lt;div class="body"&gt;&lt;p&gt;Le descriptif du produit sera écrit ici.&lt;/p&gt;&lt;/div&gt;
     &lt;div class="cta"&gt;&lt;a href=""&gt;Faire quelque chose !&lt;/a&gt;&lt;/div&gt;
   &lt;/li&gt;
   &lt;li class="wide"&gt;
     &lt;h2&gt;Produit n°3&lt;/h2&gt;
     &lt;div class="body"&gt;&lt;p&gt;Le descriptif du produit sera écrit ici.&lt;/p&gt;
     &lt;p&gt;Ce produit possède un descriptif beaucoup plus long.&lt;/p&gt;
     &lt;p&gt;Vraiment plus long&lt;/p&gt;
     &lt;p&gt;Peut-être faudrait-il le gérer différemment ?&lt;/p&gt;&lt;/div&gt;
     &lt;div class="cta"&gt;&lt;a href=""&gt;Faire quelque chose !&lt;/a&gt;&lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
     &lt;h2&gt;Produit n°4&lt;/h2&gt;
     &lt;div class="body"&gt;&lt;p&gt;Le descriptif du produit sera écrit ici.&lt;/p&gt;&lt;/div&gt;
     &lt;div class="cta"&gt;&lt;a href=""&gt;Faire quelque chose !&lt;/a&gt;&lt;/div&gt;
    &lt;/li&gt;
     &lt;li&gt;
     &lt;h2&gt;Produit n°5&lt;/h2&gt;
     &lt;div class="body"&gt;&lt;p&gt;Le descriptif du produit sera écrit ici.&lt;/p&gt;&lt;/div&gt;
      &lt;div class="cta"&gt;&lt;a href=""&gt;Faire quelque chose !&lt;/a&gt;&lt;/div&gt;
    &lt;/li&gt;
&lt;/ul&gt;
</pre>

<pre class="brush: css hidden">* {box-sizing: border-box;}
img {max-width: 100%; display: block;}
body {
  font: 1.2em Helvetica, arial, sans-serif;
}

a:link, a:visited {
  text-decoration: none;
  color: #f08c00;
}

h2 {
  background-color: #f08c00;
  color: #fff;
  text-align: center;
  margin: 0;
  padding: 20px;
}
</pre>

<p>Nous allons créer une grille avec un nombre de colonnes adaptable et chacune des colonnes sera flexible. On indique qu'une colonne doit avoir une largeur minimale de 200 pixels et que l'espace restant doit être réparti équitablement (toutes les colonnes auront donc la même largeur). Pour obtenir ce résultat, on utilise la fonction <code>minmax()</code> avec la notation <code>repeat</code> pour la propriété <code>grid-template-columns</code> qui permet de dimensionner les pistes.</p>

<pre class="brush: css">.listing {
  list-style: none;
  margin: 2em;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));
}
</pre>

<p>Dès qu'on ajoute cette règle, les objets s'organisent sur la grille. Si on chance la taille de la fenêtre, le nombre de colonne s'adaptera, sans qu'il soit nécessaire d'ajouter des requêtes de média ou de définir la grille.</p>

<p>On peut ensuite améliorer chacune des boîtes en utilisant les boîtes flexibles. Pour les éléments de la liste ({{HTMLElement("li")}}), on utilise <code>display: flex</code> et <code>flex-direction</code> avec la valeur <code>column</code>. On ajoute une marge automatique pour la classe <code>.cta</code> afin que cette barre soit placée en bas de la boîte.</p>

<pre class="brush: css">.listing li {
  border: 1px solid #ffe066;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
.listing .cta {
  margin-top: auto;
  border-top: 1px solid #ffe066;
  padding: 10px;
  text-align: center;
}
.listing .body {
  padding: 10px;
}
</pre>

<p>Voici un exemple où, d'après moi, l'utilisation des boîtes flexibles est pertinente par rapport à une autre grille : on ne fait qu'aligner ou organiser des objets sur un seul axe, ce qui est très bien géré avec une boîte flexible.</p>

<p>{{EmbedLiveSample('Une_liste_produit_utilisant_le_placement_automatique', '800', '900')}}</p>

<h2 id="empecher_les_espaces_avec_dense">Empêcher les espaces avec dense</h2>

<p>Le résultat est plutôt abouti mais on a parfois des cartes qui ont beaucoup plus de contenu. Si on veut que celles-ci soient plus large (pour éviter qu'elles soient trop hautes), on peut les étaler sur deux pistes. Pour cela, on a utilisé la classe <code>wide</code> sur l'objet avec plus de contenu et on ajoute une règle {{cssxref("grid-column-end")}} avec la valeur <code>span 2</code>. Désormais, lorsque la grille devra placer un élément de ce type, elle lui affectera deux colonnes. Cela signifie aussi que pour certaines tailles d'affichage, on aura un espace dans la grille lorsqu'il n'y aura pas suffisamment d'espace pour placer un objet sur deux colonnes :</p>

<p><img alt="The layout has gaps as there is not space to layout a two track item." src="11-grid-auto-flow-sparse.png"></p>

<p>Si on veut éviter ces trous, on peut utiliser la règle {{cssxref("grid-auto-flow")}}<code>: dense </code>sur le conteneur de la grille. Attention à utiliser cette valeur car l'ordre logique n'est plus respecté. Aussi, il ne faut utiliser cette valeur uniquement lorsqu'il n'y a pas d'ordre pour les objets. Avec cette valeur, la navigation au clavier (<em>tab order</em>) continue de suivre l'ordre des éléments du document et pas l'ordre d'affichage des objets sur la grille.</p>

<pre class="brush: html hidden">&lt;ul class="listing"&gt;
  &lt;li&gt;
    &lt;h2&gt;Item One&lt;/h2&gt;
    &lt;div class="body"&gt;&lt;p&gt;The content of this listing item goes here.&lt;/p&gt;&lt;/div&gt;
    &lt;div class="cta"&gt;&lt;a href=""&gt;Call to action!&lt;/a&gt;&lt;/div&gt;
  &lt;/li&gt;
   &lt;li&gt;
     &lt;h2&gt;Item Two&lt;/h2&gt;
     &lt;div class="body"&gt;&lt;p&gt;The content of this listing item goes here.&lt;/p&gt;&lt;/div&gt;
     &lt;div class="cta"&gt;&lt;a href=""&gt;Call to action!&lt;/a&gt;&lt;/div&gt;
   &lt;/li&gt;
   &lt;li class="wide"&gt;
     &lt;h2&gt;Item Three&lt;/h2&gt;
     &lt;div class="body"&gt;&lt;p&gt;The content of this listing item goes here.&lt;/p&gt;
     &lt;p&gt;This one has more text than the other items.&lt;/p&gt;
     &lt;p&gt;Quite a lot more&lt;/p&gt;
     &lt;p&gt;Perhaps we could do something different with it?&lt;/p&gt;&lt;/div&gt;
     &lt;div class="cta"&gt;&lt;a href=""&gt;Call to action!&lt;/a&gt;&lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
     &lt;h2&gt;Item Four&lt;/h2&gt;
     &lt;div class="body"&gt;&lt;p&gt;The content of this listing item goes here.&lt;/p&gt;&lt;/div&gt;
     &lt;div class="cta"&gt;&lt;a href=""&gt;Call to action!&lt;/a&gt;&lt;/div&gt;
    &lt;/li&gt;
     &lt;li&gt;
     &lt;h2&gt;Item Five&lt;/h2&gt;
     &lt;div class="body"&gt;&lt;p&gt;The content of this listing item goes here.&lt;/p&gt;&lt;/div&gt;
      &lt;div class="cta"&gt;&lt;a href=""&gt;Call to action!&lt;/a&gt;&lt;/div&gt;
    &lt;/li&gt;
&lt;/ul&gt;
</pre>

<pre class="brush: css hidden">* {box-sizing: border-box;}
img {max-width: 100%; display: block;}
body {
  font: 1.2em Helvetica, arial, sans-serif;
}
a:link, a:visited {
  text-decoration: none;
  color: #f08c00;
}
h2 {
  background-color: #f08c00;
  color: #fff;
  text-align: center;
  margin: 0;
  padding: 20px;
}
.listing li {
  border: 1px solid #ffe066;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
.listing .cta {
  margin-top: auto;
  border-top: 1px solid #ffe066;
  padding: 10px;
  text-align: center;
}
.listing .body {
  padding: 10px;
}
</pre>

<pre class="brush: css">.listing {
  list-style: none;
  margin: 2em;
  display: grid;
  grid-gap: 20px;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));
}
.listing .wide {
  grid-column-end: span 2;
}
</pre>

<p>{{EmbedLiveSample('empecher_les_espaces_avec_dense', '800', '900')}}</p>

<p>Cette technique de placement automatiquement peut s'avérer extrêmement utile si vous devez gérer du contenu produit par un CMS pour un ensemble d'objets qui se ressemblent et auxquels vous ajoutez une classe lors de la génération en HTML.</p>

<h2 id="Aller_plus_loin">Aller plus loin</h2>

<p>La meilleure façon d'apprendre à utiliser les grilles CSS est de continuer à construire des exemples comme ceux que nous avons vus ici. Prenez un cas d'utilisation que vous auriez construit avec un <em>framework</em> ou avec un autre mode de disposition et voyez si vous pouvez le construire à l'aide d'une grille. N'oubliez pas de trouver des exemples de disposition encore impossibles à construire avec les méthodes actuelles : prenez différentes sources d'inspiration comme les magazines et affiches. Le modèle de grille offre un nouvel éventail de possibilités et il serait dommage de rester sur nos acquis.</p>

<ul>
 <li>Vous pouvez consulter le <a href="https://labs.jensimmons.com/"><em>Layout Labs</em> de Jen Simmons (en anglais)</a>, elle a créé différentes disposition en se basant sur une variété d'exemples.</li>
 <li>Pour d'autres exemples, vous pouvez vous référer à <em><a href="https://gridbyexample.com">Grid by Example</a></em> qui contient des exemples pour des grilles plus petites, des fragments d'interface utilisateur ou des dispositions pour des pages entières.</li>
</ul>

<p>{{PreviousMenuNext("Web/CSS/CSS_Grid_Layout/Modèle_de_grille_et_autres_modèles_de_disposition","","Web/CSS/CSS_Grid_Layout")}}</p>
