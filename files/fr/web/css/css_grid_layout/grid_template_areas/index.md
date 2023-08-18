---
title: Définir des zones sur une grille
slug: Web/CSS/CSS_grid_layout/Grid_template_areas
---

{{CSSRef}}

{{PreviousMenuNext("Web/CSS/CSS_Grid_Layout/Placer_les_éléments_sur_les_lignes_d_une_grille_CSS", "Web/CSS/CSS_Grid_Layout/Utiliser_des_lignes_nommées_sur_une_grille","Web/CSS/CSS_Grid_Layout")}}

Dans [le guide précédent](/fr/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid), on a étudié les lignes formées par une grille et comment positionner des objets sur ces lignes. Lorsqu'on utilise une grille CSS, on a toujours ces lignes et celles-ci permettent d'avoir une disposition simple. Toutefois, il existe une autre méthode de disposition avec les grilles, qu'on peut utiliser seule ou combinée avec les lignes. Avec cette méthode, on place les éléments sur des _zones_ de la grille. Nous allons voir dans ce guide comment cela fonctionne voire comment on peut faire de l'ASCII-art en CSS avec les grilles !

## Donner un nom à une zone de grille

On a déjà utilisé la propriété {{cssxref("grid-area")}} précédemment. C'est cette propriété qui utilise les numéros des lignes comme valeur pour positionner une zone de grille :

```css
.box1 {
  grid-area: 1 / 1 / 4 / 2;
}
```

Ici, on définit les quatre lignes qui entourent la zone en question :

![The Grid Area defined by lines](4_area.png)

On peut également définir une zone en lui donnant un nom puis en définissant l'emplacement de cette zone grâce à la propriété {{cssxref("grid-template-areas")}}. Vous pouvez choisir les noms de vos zones, on peut par exemple créer une disposition avec quatre zones :

- Un en-tête (_header_)
- Un pied de page (_footer_)
- Une barre latérale (_sidebar_)
- Le contenu principale (_content_)

![An image showing a simple two column layout with header and footer](4_layout.png)

Avec {{cssxref("grid-area")}}, on affecte un nom à chacune de ces zones. Pour le moment, aucune disposition n'a été créée mais on a des noms qu'on pourra utiliser dans notre disposition :

```css
.header {
  grid-area: hd;
}
.footer {
  grid-area: ft;
}
.content {
  grid-area: main;
}
.sidebar {
  grid-area: sd;
}
```

Grâce à ces noms, on peut créer l'organisation. Cette fois, plutôt que de placer les objets grâce aux numéros de ligne, on définit la disposition dans le conteneur de la grille :

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    "hd hd hd hd   hd   hd   hd   hd   hd"
    "sd sd sd main main main main main main"
    "ft ft ft ft   ft   ft   ft   ft   ft";
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 940px;
  margin: 0 auto;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="header">En-tête</div>
  <div class="sidebar">Barre latérale</div>
  <div class="content">Contenu</div>
  <div class="footer">Pied de page</div>
</div>
```

{{EmbedLiveSample("Donner_un_nom_à_une_zone_de_grille", '300', '330')}}

Grâce à cette méthode, il n'est pas nécessaire de gérer chacun des éléments individuellement. Tout est organisé au travers du conteneur. La disposition est décrite grâce à la propriété {{cssxref("grid-template-areas")}}.

## Laisser une cellule vide

Dans l'exemple précédent, toute la grille est occupée… On peut également utiliser cette méthode pour laisser des cellules vides. Pour cela, il faut utiliser un point à la place d'un nom de zone. Aussi, si on veut que le pied de page soit uniquement affiché sous le contenu, il faudra avoir trois cellules vides sous la barre latérale.

```css
.header {
  grid-area: hd;
}
.footer {
  grid-area: ft;
}
.content {
  grid-area: main;
}
.sidebar {
  grid-area: sd;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 940px;
  margin: 0 auto;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    "hd hd hd hd   hd   hd   hd   hd   hd"
    "sd sd sd main main main main main main"
    ".  .  .  ft   ft   ft   ft   ft   ft";
}
```

```html
<div class="wrapper">
  <div class="header">En-tête</div>
  <div class="sidebar">Barre latérale</div>
  <div class="content">Contenu</div>
  <div class="footer">Pied de page</div>
</div>
```

{{EmbedLiveSample("Laisser_une_cellule_vide", '300', '330')}}

Si on veut que la disposition soit bien représentée, on peut utiliser plusieurs points. Tant que ceux-ci ne sont pas séparés par un espace, ils compteront pour une seule cellule. Dans le cas d'une disposition complexe, cela permet d'avoir des lignes et colonnes clairement alignées, y compris dans la règle CSS.

## Occuper plusieurs cellules

Dans notre exemple, chacune des zones occupe plusieurs cellules car on a répété le nom de la zone avec des espaces entre (on peut ajouter plus d'espaces si besoin, afin d'avoir une disposition lisible, c'est ce qu'on a fait précédemment pour que `hd` et `ft` soient alignés avec `main`).

La zone qu'on crée avec les noms doit être rectangulaires. Actuellement, il n'existe pas de méthode pour créer une zone avec une forme de L (bien que la spécification indique qu'une prochaine version pourrait couvrir cette fonctionnalité). On peut toutefois agrandir des lignes horizontales aussi simplement que des colonnes. Par exemple, on pourrait avoir la barre latérale qui descend jusqu'en bas en remplaçant les points par `sd`.

```css
.header {
  grid-area: hd;
}
.footer {
  grid-area: ft;
}
.content {
  grid-area: main;
}
.sidebar {
  grid-area: sd;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 940px;
  margin: 0 auto;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    "hd hd hd hd   hd   hd   hd   hd   hd"
    "sd sd sd main main main main main main"
    "sd sd sd  ft  ft   ft   ft   ft   ft";
}
```

```html hidden
<div class="wrapper">
  <div class="header">En-tête</div>
  <div class="sidebar">Barre latérale</div>
  <div class="content">Contenu</div>
  <div class="footer">Pied de page</div>
</div>
```

{{EmbedLiveSample("Occuper_plusieurs_cellules", '300', '330')}}

La valeur utilisée pour {{cssxref("grid-template-areas")}} doit obligatoirement décrire une grille complète, sinon elle est considérée invalide et la propriété est ignorée. Cela signifie qu'il faut le même nombre de cellules pour chaque ligne (si une cellule est vide, on l'indiquera avec un point). Si des zones ne sont pas rectangulaires, cela sera également considéré comme invalide.

## Redéfinir une grille avec des _media queries_

Notre disposition fait désormais partie de notre feuille de style CSS. On peut donc l'adapter très facilement pour différentes résolutions. On peut redéfinir la position des objets sur la grille ou la grille elle-même, ou les deux simultanément.

Pour ce faire, on définit les noms des zones en dehors de toute _media query_ afin de pouvoir y accéder quel que soit l'endroit où la zone sera placée.

Pour la disposition vue précédemment, on définit ici une disposition par défaut sur une seule colonne pour les affichages étroits. On a donc une seule piste sur laquelle s'empilent les objets :

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 940px;
  margin: 0 auto;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.header {
  grid-area: hd;
}
.footer {
  grid-area: ft;
}
.content {
  grid-area: main;
}
.sidebar {
  grid-area: sd;
}

.wrapper {
  display: grid;
  grid-auto-rows: minmax(100px, auto);
  grid-template-columns: 1fr;
  grid-template-areas:
    "hd"
    "main"
    "sd"
    "ft";
}
```

On peut ensuite redéfinir la disposition à l'intérieur des différentes _media queries_ utilisées pour avoir une disposition sur deux colonnes, voire trois lorsque l'espace le permet. On notera que pour la disposition la plus large, on a une grille organisée sur 9 colonnes/pistes et on redéfinit l'emplacement des objets avec `grid-template-areas`.

```css
@media (min-width: 500px) {
  .wrapper {
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      "hd hd hd hd   hd   hd   hd   hd   hd"
      "sd sd sd main main main main main main"
      "sd sd sd  ft  ft   ft   ft   ft   ft";
  }
}
@media (min-width: 700px) {
  .wrapper {
    grid-template-areas:
      "hd hd hd   hd   hd   hd   hd   hd hd"
      "sd sd main main main main main ft ft";
  }
}
```

```html hidden
<div class="wrapper">
  <div class="header">En-tête</div>
  <div class="sidebar">Barre latérale</div>
  <div class="content">Contenu</div>
  <div class="footer">Pied de page</div>
</div>
```

{{EmbedLiveSample("Redéfinir_une_grille_avec_des_media_queries", '550', '330')}}

## Utiliser `grid-template-areas` pour des éléments d'interface utilisateur

La plupart des exemples illustrent une utilisation de la grille pour la disposition principale de la page. Toutefois, une grille peut également être utile pour les petits éléments. {{cssxref("grid-template-areas")}} est assez pratique car elle permet de voir facilement à quoi ressemblera l'élément.

### Exemple d'objet média

Dans l'exemple qui suit, on crée un objet « media » qui servira de composant pour afficher un media (une image par exemple) d'un côté et un texte de l'autre. On pourra ainsi voir l'effet obtenu en changeant la disposition avec l'image à droite ou à gauche.

![Images showing an example media object design](4_media_objects.png)

Ici, la grille se compose de deux pistes en colonnes. La colonne pour l'image est dimensionnée avec `1fr` et celle pour le texte reçoit `3fr`. Si on souhaitait utiliser une largeur fixe pour l'image, on aurait pu utiliser des pixels pour définir la taille de la colonne et utiliser `1fr` pour la zone du texte. Cette colonne de `1fr` aurait alors occupé le reste de l'espace.

Pour la zone dédiée à l'image, on crée une zone de grille intitulée `img` et pour le texte, on crée une seconde zone intitulée `content`. Ensuite, on utilise ces noms pour créer l'organisation via la propriété `grid-template-areas`.

```css
* {
  box-sizing: border-box;
}

.media {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 400px;
}
.media {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "img content";
  margin-bottom: 1em;
}

.media .image {
  grid-area: img;
  background-color: #ffd8a8;
}

.media .text {
  grid-area: content;
  padding: 10px;
}
```

```html
<div class="media">
  <div class="image"></div>
  <div class="text">
    Dans cet exemple, on peut utiliser grid-template-areas pour échanger les
    places du texte et du media.
  </div>
</div>
```

{{EmbedLiveSample("Exemple_d'objet_média", '300', '200')}}

### Afficher l'image de l'autre côté

Si on a besoin d'afficher l'image d l'autre côté, il suffit de redéfinir une grille pour laquelle la piste qui mesure `1fr` est en dernier et d'échanger les valeurs dans {{cssxref("grid-template-areas")}}.

```css
* {
  box-sizing: border-box;
}

.media {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 400px;
}
.media {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "img content";
  margin-bottom: 1em;
}

.media.flipped {
  grid-template-columns: 3fr 1fr;
  grid-template-areas: "content img";
}

.media .image {
  grid-area: img;
  background-color: #ffd8a8;
}

.media .text {
  grid-area: content;
  padding: 10px;
}
```

```html
<div class="media flipped">
  <div class="image"></div>
  <div class="text">
    Dans cet exemple, on peut utiliser grid-template-areas pour échanger les
    places du texte et du media.
  </div>
</div>
```

{{EmbedLiveSample("Afficher_l'image_de_l'autre_côté", '300', '200') }}

## Les propriétés raccourcies pour les grilles CSS

Nous avons vu différentes façons de placer des objets sur une grille et plusieurs des propriétés utilisées pour définir une grille. Voyons maintenant les propriétés raccourcies qui sont disponibles pour les grilles CSS et qui permettent de rendre le code un peu plus concis.

Attention, ces propriétés peuvent parfois devenir complexes à lire, que ce soit pour les autres développeurs qui liraient votre code voire pour vous-même d'ici quelques semaines. Cependant, elles font partie de la spécification et vous pourrez les rencontrer dans des exemples ou dans d'autres bases de code.

Avant d'utiliser une propriété raccourcie, il est préférable de se rappeler qu'une propriété raccourcie permet d'en définir plusieurs grâce à une seule règle **mais aussi** qu'une propriété raccourcie réinitialise les propriétés avec leurs valeurs initiales lorsqu'elles ne sont pas déclarées via la propriété raccourcie. Aussi, si vous utilisez une propriété raccourcie, sachez qu'elle peut réinitialiser une propriété que vous auriez utilisé autre part.

Les deux propriétés raccourcies pour les grilles sont `grid-template` et `grid`.

### `grid-template`

La propriété {{cssxref("grid-template")}} permet de définir les propriétés suivantes :

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}

Cette propriété est appelée propriété raccourcie « explicite » car elle permet de paramétrer les aspects d'une grille définie explicitement. Elle n'a pas d'impact sur les propriétés qui créeraient des lignes ou colonnes implicites.

Le fragment de code suivant crée une disposition identique à celle que nous avons vu plus haut dans cet article.

```css
.wrapper {
  display: grid;
  grid-template:
    "hd hd hd hd   hd   hd   hd   hd   hd" minmax(100px, auto)
    "sd sd sd main main main main main main" minmax(100px, auto)
    "ft ft ft ft   ft   ft   ft   ft   ft" minmax(100px, auto)
    / 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
```

La première valeur correspond à celle de `grid-template-areas` mais on déclare également les tailles de chaque ligne à la fin de chaque ligne (avec `minmax(100px, auto)`).

Après la valeur de `grid-template-areas`, on a un barre oblique (/) puis une liste de pistes qui définit les colonnes explicitement.

### `grid`

La propriété {{cssxref("grid")}} va un cran plus loin et définit également les propriétés utilisées par la grille implicite. Elle permet de paramétrer :

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-flow")}}

Cette propriété réinitialise également la propriété {{cssxref("gap")}} avec la valeur `0` mais, en revanche, elle ne permet pas de définir des espaces.

On peut utiliser la même syntaxe qu'avec {{cssxref("grid-template")}} mais attention, cela réinitialisera les valeurs des autres propriétés :

```css
.wrapper {
  display: grid;
  grid:
    "hd hd hd hd   hd   hd   hd   hd   hd" minmax(100px, auto)
    "sd sd sd main main main main main main" minmax(100px, auto)
    "ft ft ft ft   ft   ft   ft   ft   ft" minmax(100px, auto)
    / 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
```

Dans les articles suivants, nous verrons les fonctionnalités offertes par cette propriété raccourcie, notamment pour le placement automatique et pour la propriété `grid-auto-flow`.

Après ces quelques guides, vous devriez désormais être en mesure de créer des grilles et de placer les éléments sur des lignes ou grâce à des zones nommées. Prenez le temps de construire certains motifs « classiques » à l'aide de grille pour mieux apprendre en manipulant. Au fur et à mesure, vous aurez des questions et arriverez sur des scénarios que nous n'avons pas encore évoqués. Dans la suite de ces articles, nous nous intéresserons plus en détails aux autres éléments de la spécification afin de pouvoir créer des dispositions plus complexes.

{{PreviousMenuNext("Web/CSS/CSS_Grid_Layout/Placer_les_éléments_sur_les_lignes_d_une_grille_CSS", "Web/CSS/CSS_Grid_Layout/Utiliser_des_lignes_nommées_sur_une_grille","Web/CSS/CSS_Grid_Layout")}}
