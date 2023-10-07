---
title: Construire des dispositions courantes avec des grilles CSS
slug: Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids
---

{{CSSRef}}

{{PreviousMenuNext("Web/CSS/CSS_Grid_Layout/Modèle_de_grille_et_autres_modèles_de_disposition","","Web/CSS/CSS_Grid_Layout")}}

Pour clôturer ces différents guides, nous allons maintenant voir différentes dispositions sur lesquelles nous appliquerons des techniques avec les grilles CSS. Nous prendrons un exemple qui utilise [les zones nommées d'une grille](/fr/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas), un système de grille flexible avec 12 colonnes et aussi une liste de produits avec un placement automatique. Comme nous le verrons, il existe plusieurs méthodes pour accéder à chaque résultat. À vous de choisir la méthode qui vous paraît la plus pertinente et utile pour les problèmes que vous avez à résoudre et les dispositions que vous devez implémenter.

## Une disposition adaptative avec une à trois colonnes en utilisant `grid-template-areas`

De nombreux sites web sont construits comme une variation autour de cette disposition avec du contenu, une ou plusieurs barres latérale, un en-tête et un pied de page. Pour que le site soit _responsive_, on peut souhaiter avoir une seule colonne pour certaines tailles d'affichage, ajouter une barre latérale lorsqu'on a plus d'espace et enfin, avoir trois colonnes pour les écrans les plus larges.

![Image of the three different layouts created by redefining our grid at two breakpoints.](11-responsive-areas.png)

Ici, on crée une disposition avec des zones nommées comme on a pu le voir _[dans l'article correspondant](/fr/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)_.

Dans le document on a un conteneur qui contient un en-tête, un pied de page, du contenu principal, une barre de navigation, une barre latérale et un bloc dans lequel on souhaite placer de la publicité.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  font:
    1.2em Helvetica,
    arial,
    sans-serif;
}

.wrapper > * {
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
```

```html
<div class="wrapper">
  <header class="main-head">L'en-tête</header>
  <nav class="main-nav">
    <ul>
      <li><a href="">Nav 1</a></li>
      <li><a href="">Nav 2</a></li>
      <li><a href="">Nav 3</a></li>
    </ul>
  </nav>
  <article class="content">
    <h1>L'article principal</h1>
    <p>
      Dans cette disposition, on affiche les zones dans le même ordre que dans
      le document pour les écrans dont la largeur est inférieure à 500 pixels.
      On passe à une disposition sur deux colonnes ou trois colonnes en
      redéfinissant la grille et le placement des objets sur la grille.
    </p>
  </article>
  <aside class="side">Barre latérale</aside>
  <div class="ad">Publicité</div>
  <footer class="main-footer">Le pied de page</footer>
</div>
```

On utilise {{cssxref("grid-template-areas")}} afin de créer la disposition. On nomme les zones en dehors des différentes _media queries_. Les propriétés sont nommées grâce à la propriété {{cssxref("grid-area")}}.

```css
.main-head {
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
```

Avec ces différentes règles, on n'a pas encore de disposition, uniquement des noms qu'on pourra utiliser. Ensuite, on définit la disposition qu'on aura par défaut et qui sera utilisée pour les mobiles. Dans cette règle, on garde le même ordre que celui utilisé dans le document (cf. _[le guide sur les grilles CSS et l'accessibilité](/fr/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)_). On ne définit aucune piste (colonne ou ligne) mais cela suffit pour décrire une disposition sur une seule colonne, les lignes seront créées implicitement lorsqu'elles seront nécessaires.

```css
.wrapper {
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
```

Après cette disposition par défaut pour les appareils mobiles, on peut ajouter une [requête média (_media query_)](/fr/docs/Web/CSS/Media_Queries) et redéfinir la disposition lorsqu'on a plus d'espace et qu'on peut afficher deux colonnes :

```css
@media (min-width: 500px) {
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
```

On peut voir la disposition organisée dans la valeur pour la propriété {{cssxref("grid-template-areas")}}. L'en-tête `header` s'étale sur deux colonnes et le bloc `nav` également. Sur la troisième ligne, on a la barre latérale (`sidebar`) à côté du contenu (`content`). Sur la quatrième ligne, on a le bloc pour la publicité (`ad`) qui apparaît sous la barre latérale et enfin le pied de page qui apparaît sous le contenu. On utilise une boîte flexible pour la barre de navigation afin de l'étaler sur une ligne homogène.

Enfin, on ajoute une autre requête de média pour la disposition avec trois colonnes :

```css
@media (min-width: 700px) {
  .wrapper {
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas:
      "header header  header"
      "nav    content sidebar"
      "nav    content ad"
      "footer footer  footer";
  }
  nav ul {
    flex-direction: column;
  }
}
```

Cette disposition en trois colonnes possède une première colonne qui s'étend sur `1fr`, une colonne centrale qui s'étend sur `4fr` et une dernière colonne qui mesure également `1fr`. Cela signifie que l'espace disponible dans le conteneur est découpé en 6 et que chacun de ces morceaux est affecté à une de ces pistes.

Dans cette disposition, la barre de navigation est affichée dans la colonne à gauche, à côté du contenu. Sur la colonne à droite, on a la barre latérale au-dessus de la publicité. Le pied de page, quant à lui, s'étale sur tout le bas du conteneur. Ici aussi, on utilise une boîte flexible en colonne pour la barre de navigation.

{{EmbedLiveSample('Une_disposition_adaptative_avec_une_à_trois_colonnes_en_utilisant_grid-template-areas', '800', '430')}}

Cet exemple est assez simple mais permet d'illustrer comme utiliser une grille afin de réorganiser le contenu pour différentes tailles d'écran. On voit par exemple comment on déplace le bloc `ad` dans les différentes organisations. L'utilisation des noms pour les zones permet de prototyper rapidement de nouvelles dispositions. Vous pouvez toujours utiliser la grille pour agencer votre prototype même si ce n'est pas la technologie que vous utiliserez pour votre site ou votre application en production.

## Une disposition flexible avec 12 colonnes

Si vous travaillez avec un _framework_ ou avec un système de grille, vous êtes peut-être habitué-e à travailler sur une grille avec 12 ou 16 colonnes. On peut recréer ce genre de système avec une grille CSS. Pour commencer, on crée une grille avec 12 colonnes dont chaque piste mesure `1fr` - unit et commence par une ligne intitulée `col-start`. Autrement dit, on aura 12 colonnes intitulées `col-start`.

```css hidden
.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  font:
    1.2em Helvetica,
    arial,
    sans-serif;
}
.wrapper > * {
  border: 2px solid #f08c00;
  background-color: #ffec99;
  border-radius: 5px;
  padding: 10px;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-gap: 20px;
}
```

Pour voir comment ce système fonctionne, on place quatre éléments dans le conteneur :

```html
<div class="wrapper">
  <div class="item1">Début à la première colonne, s'étend sur 3 colonnes.</div>
  <div class="item2">
    Début à la colonne 6, s'étend sur 4 colonnes et deux lignes.
  </div>
  <div class="item3">
    Début à la colonne 2 de la ligne 2, s'étend sur 2 colonnes.
  </div>
  <div class="item4">
    Début à la colonne 3, s'étend jusqu'à la fin de la grille.
  </div>
</div>
```

Et on place ces éléments sur la grille en utilisant les noms utilisés précédemment, avec le mot-clé `span` :

```css
.item1 {
  grid-column: col-start / span 3;
}
.item2 {
  grid-column: col-start 6 / span 4;
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
```

{{EmbedLiveSample('Une_disposition_flexible_avec_12_colonnes', '800', '330')}}

Comme nous l'avons vu dans [le guide sur le nommage des lignes](/fr/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines), on utilise les noms des colonnes pour placer nos éléments. On a ici 12 colonnes avec le même nom, on utilise donc ce nom et l'indice qui indique le numéro. On pourrait tout aussi bien utiliser seulement le numéro si on voulait se passer des noms pour les lignes.

Plutôt que d'indiquer le numéro de la dernière colonne pour chaque élément, on a ici utilisé le mot-clé `span` pour indiquer la taille de chaque élément. Cette approche permet de revoir plus clairement la taille de chaque élément lorsqu'on ajoute une nouvelle disposition pour une nouvelle taille d'écran. Dans la capture qui suit, on peut voir comment les blocs sont positionnés sur la grilles. Pour cela, on a utilisé [l'inspecteur de grille de Firefox](/fr/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts) qui indique de façon claire comment les objets sont placés.

![Showing the items placed on the grid with grid tracks highlighted.](11-grid-inspector-12col.png)

Il y a certainement certaines différences fondamentales avec les systèmes que vous auriez pu utiliser précédemment. On voit par exemple qu'il n'est pas nécessaire d'ajouter de règles supplémentaires pour créer une ligne. Généralement, il faut ajouter des contrôles pour éviter que les éléments remontent sur les lignes au-dessus. Avec une grille CSS, ce n'est pas un problème, les lignes supérieures sont laissées vides. La disposition étant _stricte_, on peut très bien laisser des espaces dans notre plan. Il n'est pas non plus nécessaire de définir des classes spécifiques afin d'indenter les différents objets, il suffit ici d'indiquer la colonne de début et la colonne de fin.

## Construire une disposition avec ce système à 12 colonnes

Pour voir comment cette méthode fonctionne en pratique, nous allons créé le même plan que celui que nous avons vu avec les zones nommées et {{cssxref("grid-template-areas")}} mais en utilisant désormais ce système à 12 colonnes. Commençons avec la même structure que celle utilisée plus haut avec les zones nommées :

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  font:
    1.2em Helvetica,
    arial,
    sans-serif;
}

.wrapper > * {
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
```

```html
<div class="wrapper">
  <header class="main-head">L'en-tête</header>
  <nav class="main-nav">
    <ul>
      <li><a href="">Nav 1</a></li>
      <li><a href="">Nav 2</a></li>
      <li><a href="">Nav 3</a></li>
    </ul>
  </nav>
  <article class="content">
    <h1>L'article principal</h1>
    <p>
      Dans cette disposition, on affiche les zones dans le même ordre que dans
      le document pour les écrans dont la largeur est inférieure à 500 pixels.
      On passe à une disposition sur deux colonnes ou trois colonnes en
      redéfinissant la grille et le placement des objets sur la grille.
    </p>
  </article>
  <aside class="side">Barre latérale</aside>
  <div class="ad">Publicité</div>
  <footer class="main-footer">Le pied de page</footer>
</div>
```

On initialise la grille avec nos 12 colonnes :

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-gap: 20px;
}
```

Là encore, nous allons adapter la disposition en fonction de la taille de la zone d'affichage mais ici, nous utiliserons les colonnes nommées. Pour chaque type d'affichage, nous allons utiliser 12 colonnes et faire varier le nombre de pistes sur lequel s'étalent les objets à afficher.

Commençons par le mobile : on souhaite gérer les écrans les plus étroits par défaut. Ici aussi, on respecte l'ordre des éléments indiqués par le code source du document et tous les objets s'étalent tout au long de la grille.

```css
.wrapper > * {
  grid-column: col-start / span 12;
}
```

Pour la prochaine taille, on veut obtenir une disposition sur deux colonnes. Ici, l'en-tête et la barre de navigation occuperont toute une ligne horizontale, il n'est donc pas nécessaire d'indiquer de positionnement pour eux. La barre latérale commence sur la première colonne intitulée `col-start` et s'étend sur 3 colonnes et commence à partir de la troisième ligne (les deux premières étant occupées par l'en-tête et la barre de navigation).

Le panneau dédié à la publicité est affiché sous la barre latérale et commence à partir de la quatrième ligne. On a ensuite le contenu et le pied de page qui commencent à partir de la quatrième colonne et s'étendent sur 9 pistes pour occuper le reste de la grille.

```css
@media (min-width: 500px) {
  .side {
    grid-column: col-start / span 3;
    grid-row: 3;
  }
  .ad {
    grid-column: col-start / span 3;
    grid-row: 4;
  }
  .content,
  .main-footer {
    grid-column: col-start 4 / span 9;
  }
  nav ul {
    display: flex;
    justify-content: space-between;
  }
}
```

Voyons alors la disposition sur trois colonnes. Pour ce plan, l'en-tête s'étale aussi sur toute la largeur de la grille, la barre de navigation devient verticale, à côté on a le contenu puis la barre latérale. Le pied de page s'étale, lui aussi, sur toute la largeur du conteneur.

```css
@media (min-width: 700px) {
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
```

{{EmbedLiveSample('Construire_une_disposition_avec_ce_système_à_12_colonnes', '800', '430')}}

On peut à nouveau profiter de [l'inspecteur de grille](/fr/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts) pour voir comment se compose effectivement notre disposition :

![Showing the layout with grid tracks highlighted by the grid inspector.](11-grid-inspector-12col-layout.png)

On notera qu'il n'a pas été nécessaire de redéfinir explicitement la position de chaque élément pour chaque résolution. On a pu hériter des emplacements des résolutions précédentes. On gagne donc à travailler en considérant les résolutions mobiles en premier lieu. On tire également parti du placement automatique géré par la grille avec l'ordre, logique, des éléments du documents. Dans le dernier exemple, nous allons voir comment le placement automatique sur la grille peut aider à positionner des objets..

## Une liste produit utilisant le placement automatique

De nombreuses dispositions sont essentiellement composée de _cartes_ ou _tuiles_ : des listes produit, des galeries d'image, etc. Avec une grille, on peut facilement créer ce genre de liste de façon adaptative, sans avoir à ajouter de [requêtes de média](/fr/docs/Web/CSS/Media_Queries). Dans l'exemple qui suit, nous allons combiner les grilles CSS et les boîtes flexibles afin d'obtenir une liste de produits.

Le document utilisé contient une liste d'objets non ordonnée. Pour chaque produit, on a un titre, un texte dont la taille n'est pas fixe et un lien pour effectuer une action.

```html
<ul class="listing">
  <li>
    <h2>Produit n°1</h2>
    <div class="body"><p>Le descriptif du produit sera écrit ici.</p></div>
    <div class="cta"><a href="">Faire quelque chose !</a></div>
  </li>
  <li>
    <h2>Produit n°2</h2>
    <div class="body"><p>Le descriptif du produit sera écrit ici.</p></div>
    <div class="cta"><a href="">Faire quelque chose !</a></div>
  </li>
  <li class="wide">
    <h2>Produit n°3</h2>
    <div class="body">
      <p>Le descriptif du produit sera écrit ici.</p>
      <p>Ce produit possède un descriptif beaucoup plus long.</p>
      <p>Vraiment plus long</p>
      <p>Peut-être faudrait-il le gérer différemment ?</p>
    </div>
    <div class="cta"><a href="">Faire quelque chose !</a></div>
  </li>
  <li>
    <h2>Produit n°4</h2>
    <div class="body"><p>Le descriptif du produit sera écrit ici.</p></div>
    <div class="cta"><a href="">Faire quelque chose !</a></div>
  </li>
  <li>
    <h2>Produit n°5</h2>
    <div class="body"><p>Le descriptif du produit sera écrit ici.</p></div>
    <div class="cta"><a href="">Faire quelque chose !</a></div>
  </li>
</ul>
```

```css hidden
* {
  box-sizing: border-box;
}
img {
  max-width: 100%;
  display: block;
}
body {
  font:
    1.2em Helvetica,
    arial,
    sans-serif;
}

a:link,
a:visited {
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
```

Nous allons créer une grille avec un nombre de colonnes adaptable et chacune des colonnes sera flexible. On indique qu'une colonne doit avoir une largeur minimale de 200 pixels et que l'espace restant doit être réparti équitablement (toutes les colonnes auront donc la même largeur). Pour obtenir ce résultat, on utilise la fonction `minmax()` avec la notation `repeat` pour la propriété `grid-template-columns` qui permet de dimensionner les pistes.

```css
.listing {
  list-style: none;
  margin: 2em;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

Dès qu'on ajoute cette règle, les objets s'organisent sur la grille. Si on chance la taille de la fenêtre, le nombre de colonne s'adaptera, sans qu'il soit nécessaire d'ajouter des requêtes de média ou de définir la grille.

On peut ensuite améliorer chacune des boîtes en utilisant les boîtes flexibles. Pour les éléments de la liste ({{HTMLElement("li")}}), on utilise `display: flex` et `flex-direction` avec la valeur `column`. On ajoute une marge automatique pour la classe `.cta` afin que cette barre soit placée en bas de la boîte.

```css
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
```

Voici un exemple où, d'après moi, l'utilisation des boîtes flexibles est pertinente par rapport à une autre grille : on ne fait qu'aligner ou organiser des objets sur un seul axe, ce qui est très bien géré avec une boîte flexible.

{{EmbedLiveSample('Une_liste_produit_utilisant_le_placement_automatique', '800', '900')}}

## Empêcher les espaces avec dense

Le résultat est plutôt abouti mais on a parfois des cartes qui ont beaucoup plus de contenu. Si on veut que celles-ci soient plus large (pour éviter qu'elles soient trop hautes), on peut les étaler sur deux pistes. Pour cela, on a utilisé la classe `wide` sur l'objet avec plus de contenu et on ajoute une règle {{cssxref("grid-column-end")}} avec la valeur `span 2`. Désormais, lorsque la grille devra placer un élément de ce type, elle lui affectera deux colonnes. Cela signifie aussi que pour certaines tailles d'affichage, on aura un espace dans la grille lorsqu'il n'y aura pas suffisamment d'espace pour placer un objet sur deux colonnes :

![The layout has gaps as there is not space to layout a two track item.](11-grid-auto-flow-sparse.png)

Si on veut éviter ces trous, on peut utiliser la règle {{cssxref("grid-auto-flow")}}`: dense` sur le conteneur de la grille. Attention à utiliser cette valeur car l'ordre logique n'est plus respecté. Aussi, il ne faut utiliser cette valeur uniquement lorsqu'il n'y a pas d'ordre pour les objets. Avec cette valeur, la navigation au clavier (_tab order_) continue de suivre l'ordre des éléments du document et pas l'ordre d'affichage des objets sur la grille.

```html hidden
<ul class="listing">
  <li>
    <h2>Item One</h2>
    <div class="body"><p>The content of this listing item goes here.</p></div>
    <div class="cta"><a href="">Call to action!</a></div>
  </li>
  <li>
    <h2>Item Two</h2>
    <div class="body"><p>The content of this listing item goes here.</p></div>
    <div class="cta"><a href="">Call to action!</a></div>
  </li>
  <li class="wide">
    <h2>Item Three</h2>
    <div class="body">
      <p>The content of this listing item goes here.</p>
      <p>This one has more text than the other items.</p>
      <p>Quite a lot more</p>
      <p>Perhaps we could do something different with it?</p>
    </div>
    <div class="cta"><a href="">Call to action!</a></div>
  </li>
  <li>
    <h2>Item Four</h2>
    <div class="body"><p>The content of this listing item goes here.</p></div>
    <div class="cta"><a href="">Call to action!</a></div>
  </li>
  <li>
    <h2>Item Five</h2>
    <div class="body"><p>The content of this listing item goes here.</p></div>
    <div class="cta"><a href="">Call to action!</a></div>
  </li>
</ul>
```

```css hidden
* {
  box-sizing: border-box;
}
img {
  max-width: 100%;
  display: block;
}
body {
  font:
    1.2em Helvetica,
    arial,
    sans-serif;
}
a:link,
a:visited {
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
```

```css
.listing {
  list-style: none;
  margin: 2em;
  display: grid;
  grid-gap: 20px;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
.listing .wide {
  grid-column-end: span 2;
}
```

{{EmbedLiveSample('Empêcher_les_espaces_avec_dense', '800', '900')}}

Cette technique de placement automatiquement peut s'avérer extrêmement utile si vous devez gérer du contenu produit par un CMS pour un ensemble d'objets qui se ressemblent et auxquels vous ajoutez une classe lors de la génération en HTML.

## Aller plus loin

La meilleure façon d'apprendre à utiliser les grilles CSS est de continuer à construire des exemples comme ceux que nous avons vus ici. Prenez un cas d'utilisation que vous auriez construit avec un _framework_ ou avec un autre mode de disposition et voyez si vous pouvez le construire à l'aide d'une grille. N'oubliez pas de trouver des exemples de disposition encore impossibles à construire avec les méthodes actuelles : prenez différentes sources d'inspiration comme les magazines et affiches. Le modèle de grille offre un nouvel éventail de possibilités et il serait dommage de rester sur nos acquis.

- Vous pouvez consulter le [_Layout Labs_ de Jen Simmons (en anglais)](https://labs.jensimmons.com/), elle a créé différentes disposition en se basant sur une variété d'exemples.
- Pour d'autres exemples, vous pouvez vous référer à _[Grid by Example](https://gridbyexample.com)_ qui contient des exemples pour des grilles plus petites, des fragments d'interface utilisateur ou des dispositions pour des pages entières.

{{PreviousMenuNext("Web/CSS/CSS_Grid_Layout/Modèle_de_grille_et_autres_modèles_de_disposition","","Web/CSS/CSS_Grid_Layout")}}
