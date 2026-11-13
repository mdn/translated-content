---
title: Les zones d'une grille
slug: Web/CSS/Guides/Grid_layout/Grid_template_areas
l10n:
  sourceCommit: 32bdfdb82cf91ce9942b694286dec62be2cc20aa
---

Dans le [guide sur la disposition en grille basée sur les lignes](/fr/docs/Web/CSS/Guides/Grid_layout/Line-based_placement), nous avons étudié les lignes de la grille et comment positionner les éléments par rapport à ces lignes. Lorsque vous utilisez la disposition en grille CSS, vous avez toujours des lignes, ce qui peut être un moyen simple de placer des éléments sur votre grille. Cependant, il existe une méthode alternative pour positionner les éléments sur la grille, que vous pouvez utiliser seule ou en combinaison avec la disposition basée sur les lignes. Cette méthode consiste à placer nos éléments en utilisant des zones de modèle nommées. Vous voyez très rapidement pourquoi nous appelons parfois cela la méthode de l'art ASCII pour la disposition en grille&nbsp;!

## Nommer une zone de grille

Vous avez déjà rencontré la propriété {{CSSxRef("grid-area")}}. C'est cette propriété qui peut prendre comme valeur les quatre lignes utilisées pour positionner une zone de grille.

```css
.boite1 {
  grid-area: 1 / 1 / 4 / 2;
}
```

Ce que nous faisons ici en définissant les quatre lignes, c'est définir la zone en définissant les lignes qui entourent cette zone.

![La zone de grille définie par les lignes](4_area.png)

On peut également définir une zone en lui donnant un nom puis en définissant l'emplacement de cette zone grâce à la propriété {{CSSxRef("grid-template-areas")}}. Vous pouvez choisir les noms de vos zones. Par exemple, si nous souhaitons créer la disposition illustrée ci-dessous, nous pouvons identifier quatre zones principales.

- Un en-tête
- Un pied de page
- Une barre latérale
- Le contenu principale

![Une image montrant une disposition simple à deux colonnes avec un en-tête et un pied de page](4_layout.png)

Avec {{CSSxRef("grid-area")}}, on affecte un nom à chacune de ces zones. Pour le moment, aucune disposition n'a été créée mais on a des noms qu'on peut utiliser dans notre disposition&nbsp;:

```css
.en-tete {
  grid-area: hd;
}
.pied-page {
  grid-area: ft;
}
.contenu {
  grid-area: main;
}
.barre-laterale {
  grid-area: sd;
}
```

Une fois ces noms définis, on peut créer la disposition. Cette fois, plutôt que de placer les éléments grâce aux numéros de ligne définis sur les éléments eux-mêmes, on crée toute la disposition dans le conteneur de la grille. Ici, nous créons une grille à 9 colonnes et définissons que les zones `hd` et `ft` s'étendent sur les 9 colonnes, tandis que `sd` s'étend sur trois colonnes et `main` sur six. Chaque zone ne s'étend que sur une seule ligne.

```css
.enveloppe {
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

.enveloppe {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 940px;
  margin: 0 auto;
}

.enveloppe > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="enveloppe">
  <div class="en-tete">En-tête</div>
  <div class="barre-laterale">Barre latérale</div>
  <div class="contenu">Contenu</div>
  <div class="pied-page">Pied de page</div>
</div>
```

{{EmbedLiveSample("Nommer une zone de grille", 300, 305)}}

Grâce à cette méthode, il n'est pas nécessaire de gérer chacun des éléments individuellement. Tout est organisé au travers du conteneur. La disposition est décrite grâce à la propriété {{CSSxRef("grid-template-areas")}}.

## Laisser une cellule vide

Nous avons entièrement rempli notre grille avec des zones dans cet exemple, sans laisser d'espace blanc. Cependant, cette méthode de mise en page vous permet de laisser des cellules de la grille vides. Pour laisser une cellule vide, utilisez le point, `.`. Si nous souhaitons afficher uniquement le pied de page directement sous le contenu principal, nous devons laisser vides les trois cellules situées sous la barre latérale.

```css
.en-tete {
  grid-area: hd;
}
.pied-page {
  grid-area: ft;
}
.contenu {
  grid-area: main;
}
.barre-laterale {
  grid-area: sd;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.enveloppe {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 940px;
  margin: 0 auto;
}

.enveloppe > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.enveloppe {
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
<div class="enveloppe">
  <div class="en-tete">En-tête</div>
  <div class="barre-laterale">Barre latérale</div>
  <div class="contenu">Contenu</div>
  <div class="pied-page">Pied de page</div>
</div>
```

{{EmbedLiveSample("Laisser une cellule vide", 300, 305)}}

Pour rendre la disposition plus claire, on peut utiliser plusieurs caractères `.`. Tant qu'il y a au moins un espace entre les points, ceux-ci sont considérés comme une seule cellule. Pour une mise en page complexe, il est avantageux d'avoir les lignes et les colonnes bien alignées. Cela permet en effet de voir directement, dans le code CSS, à quoi ressemble cette disposition.

## Occuper plusieurs cellules

Dans notre exemple, chaque zone couvre plusieurs cellules de la grille et nous y parvenons en répétant plusieurs fois le nom de cette zone de grille, séparé par des espaces. Vous pouvez ajouter des espaces supplémentaires pour que vos colonnes restent bien alignées dans la valeur de `grid-template-areas`. Vous pouvez constater que nous avons procédé ainsi pour que les zones `hd` et `ft` s'alignent avec `main`.

La zone que vous créez en enchaînant les noms de zones doit être rectangulaire, à l'heure actuelle, il n'existe aucun moyen de créer une zone en forme de L. La spécification indique toutefois qu'une version future pourrait offrir cette fonctionnalité. Vous pouvez toutefois faire s'étendre des zones sur plusieurs lignes aussi facilement que sur plusieurs colonnes. Par exemple, nous pouvons faire en sorte que notre barre latérale s'étende jusqu'à la fin du pied de page en remplaçant le `.` par `sd`.

```css
.en-tete {
  grid-area: hd;
}
.pied-page {
  grid-area: ft;
}
.contenu {
  grid-area: main;
}
.barre-laterale {
  grid-area: sd;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.enveloppe {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 940px;
  margin: 0 auto;
}

.enveloppe > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.enveloppe {
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
<div class="enveloppe">
  <div class="en-tete">En-tête</div>
  <div class="barre-laterale">Barre latérale</div>
  <div class="contenu">Contenu</div>
  <div class="pied-page">Pied de page</div>
</div>
```

{{EmbedLiveSample("Occuper plusieurs cellules", 300, 305)}}

La valeur de {{CSSxRef("grid-template-areas")}} doit afficher une grille complète, sinon elle est considérée comme invalide (et la propriété est ignorée). Cela signifie qu'il faut le même nombre de cellules pour chaque ligne (si une cellule est vide, on l'indique avec un point). Si des zones ne sont pas rectangulaires, c'est également considéré comme invalide.

## Redéfinir une grille avec des requêtes de média

Notre disposition fait désormais partie de notre feuille de style CSS. On peut donc l'adapter très facilement pour différentes résolutions. On peut redéfinir la position des objets sur la grille ou la grille elle-même, ou les deux simultanément.

Lors de cette opération, définissez les noms de vos zones en dehors de toute _media query_. Ainsi, la zone de contenu est toujours appelée `main`, peu importe où elle est placée sur la grille.

Pour la disposition vue précédemment, on peut souhaiter avoir une disposition très basique pour les affichages étroits, en définissant une grille à une seule colonne et en empilant nos quatre éléments sur quatre lignes.

```css hidden
* {
  box-sizing: border-box;
}

.enveloppe {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 940px;
  margin: 0 auto;
}

.enveloppe > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.en-tete {
  grid-area: hd;
}
.pied-page {
  grid-area: ft;
}
.contenu {
  grid-area: main;
}
.barre-laterale {
  grid-area: sd;
}

.enveloppe {
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

Nous pouvons ensuite redéfinir cette disposition à l'intérieur des [requêtes de média](/fr/docs/Web/CSS/Guides/Media_queries/Using) pour passer à une disposition sur deux colonnes, et éventuellement à trois colonnes si l'espace disponible est encore plus large. Notez que pour la disposition la plus large, nous conservons la grille à neuf colonnes, en redéfinissant l'emplacement des éléments à l'aide de `grid-template-areas`.

```css
@media (width >= 30em) {
  .enveloppe {
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      "hd hd hd hd   hd   hd   hd   hd   hd"
      "sd sd sd main main main main main main"
      "sd sd sd  ft  ft   ft   ft   ft   ft";
  }
}
@media (width >= 60em) {
  .enveloppe {
    grid-template-areas:
      "hd hd hd   hd   hd   hd   hd   hd hd"
      "sd sd main main main main main ft ft";
  }
}
```

```html hidden
<div class="enveloppe">
  <div class="en-tete">En-tête</div>
  <div class="barre-laterale">Barre latérale</div>
  <div class="contenu">Contenu</div>
  <div class="pied-page">Pied de page</div>
</div>
```

{{EmbedLiveSample("Redéfinir une grille avec des requêtes de média", 550, 330)}}

## Utiliser `grid-template-areas` pour des éléments d'interface utilisateur

La plupart des exemples illustrent une utilisation de la grille pour la disposition principale de la page. Toutefois, une grille peut également être utile pour les petits éléments. Utiliser {{CSSxRef("grid-template-areas")}} est assez pratique, car elle permet de voir facilement à quoi ressemble l'élément.

### Exemple d'objet média

Dans l'exemple qui suit, nous créons un «&nbsp;[objet média](/fr/docs/Web/CSS/How_to/Layout_cookbook/Media_objects)&nbsp;». Il s'agit d'un composant avec un espace pour une image ou un autre média d'un côté et du contenu de l'autre. L'image peut être affichée à droite ou à gauche de la boîte.

![Images montrant un exemple de conception d'objet média](4_media_objects.png)

Notre grille est une grille de pistes à deux colonnes, avec une colonne pour l'image dimensionnée à `1fr` et le texte à `3fr`. Si vous souhaitez une zone d'image d'une largeur fixe, définissez la colonne de l'image avec une largeur en pixels et attribuez `1fr` à la zone de texte. Une piste de colonne unique de `1fr` occupe alors l'espace restant.

Nous donnons à la zone de l'image le nom de zone de grille `img` et à la zone de texte le nom `content`, puis nous pouvons les disposer à l'aide de la propriété `grid-template-areas`.

```css
* {
  box-sizing: border-box;
}

.media {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "img content";
  margin-bottom: 1em;
}

.media .image {
  grid-area: img;
  background-color: #ffd8a8;
}

.media .texte {
  grid-area: content;
  padding: 10px;
}
```

```html
<div class="media">
  <div class="image"></div>
  <div class="texte">
    Dans cet exemple, on peut utiliser grid-template-areas pour échanger les
    places du texte et du media.
  </div>
</div>
```

{{EmbedLiveSample("Exemple d'objet média", 300, 200)}}

### Afficher l'image de l'autre côté

Si on a besoin d'afficher l'image d l'autre côté, il suffit de redéfinir une grille pour laquelle la piste qui mesure `1fr` est en dernier et d'échanger les valeurs dans {{CSSxRef("grid-template-areas")}}.

```css
* {
  box-sizing: border-box;
}

.media {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "img content";
  margin-bottom: 1em;
}

.media.retourne {
  grid-template-columns: 3fr 1fr;
  grid-template-areas: "content img";
}

.media .image {
  grid-area: img;
  background-color: #ffd8a8;
}

.media .texte {
  grid-area: content;
  padding: 10px;
}
```

```html
<div class="media retourne">
  <div class="image"></div>
  <div class="texte">
    Dans cet exemple, on peut utiliser grid-template-areas pour échanger les
    places du texte et du media.
  </div>
</div>
```

{{EmbedLiveSample("Afficher l'image de l'autre côté", 300, 200)}}

## Les propriétés raccourcies pour les grilles CSS

Regardons différentes façons de placer des éléments sur nos grilles et de nombreuses propriétés utilisées pour définir la grille, c'est le bon moment pour jeter un œil à quelques raccourcis disponibles pour définir la grille et de nombreuses choses à son sujet en une seule ligne de CSS.

Cela peut rapidement devenir difficile à lire pour d'autres développeur·euse·s, ou même pour vous-même à l'avenir. Cependant, ils font partie de la spécification et il est probable que vous les rencontrez dans des exemples ou en utilisation par d'autres développeur·euse·s, même si vous choisissez de ne pas les utiliser.

Avant d'utiliser un raccourci, il convient de se rappeler que les raccourcis permettent non seulement de définir de nombreuses propriétés en une seule fois, mais qu'ils **réinitialisent** également tout ce que vous ne définissez pas (ou ne pouvez pas définir) dans le raccourci à leurs valeurs initiales. Par conséquent, si vous utilisez un raccourci, soyez conscient qu'il peut réinitialiser des choses que vous avez appliquées ailleurs.

Les deux propriétés raccourcies du conteneur de grille sont la propriété raccourcie de grille explicite {{CSSxRef("grid-template")}} et la propriété raccourcie de définition de grille {{CSSxRef("grid")}}.

### `grid-template`

La propriété raccourcie {{CSSxRef("grid-template")}} définit les propriétés longues suivantes&nbsp;:

- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-areas")}}

On appelle cette propriété _propriété raccourcie de grille explicite_, car elle définit les valeurs que vous contrôlez lorsque vous définissez une grille explicite, et non celles qui affectent les éventuelles pistes de lignes ou de colonnes que le navigateur peut créer implicitement.

Le code suivant crée une disposition avec {{CSSxRef("grid-template")}} qui est identique à celle créée précédemment dans ce guide.

```css
.enveloppe {
  display: grid;
  grid-template:
    "hd hd hd hd   hd   hd   hd   hd   hd" minmax(100px, auto)
    "sd sd sd main main main main main main" minmax(100px, auto)
    "ft ft ft ft   ft   ft   ft   ft   ft" minmax(100px, auto)
    / 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
```

La première valeur correspond à celle de `grid-template-areas` mais on déclare également les tailles de chaque ligne à la fin de chaque ligne (avec `minmax(100px, auto)`).

Après la valeur de `grid-template-areas`, on a un barre oblique (`/`) puis une liste de pistes qui définit les colonnes explicitement.

### `grid`

La propriété raccourcie {{CSSxRef("grid")}} va un cran plus loin et définit également les propriétés utilisées par la grille implicite. Vous allez donc paramétrer&nbsp;:

- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-areas")}}
- {{CSSxRef("grid-auto-rows")}}
- {{CSSxRef("grid-auto-columns")}}
- {{CSSxRef("grid-auto-flow")}}

Vous pouvez utiliser cette syntaxe de la même manière que le raccourci {{CSSxRef("grid-template")}}. Sachez simplement que lorsque vous le faites, vous réinitialisez les autres valeurs définies par la propriété.

```css
.enveloppe {
  display: grid;
  grid:
    "hd hd hd hd   hd   hd   hd   hd   hd" minmax(100px, auto)
    "sd sd sd main main main main main main" minmax(100px, auto)
    "ft ft ft ft   ft   ft   ft   ft   ft" minmax(100px, auto)
    / 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
```

Revenez sur les autres fonctionnalités offertes par cette propriété raccourcie en examinant le [placement automatique dans une disposition en grille](/fr/docs/Web/CSS/Guides/Grid_layout/Auto-placement) et la propriété `grid-auto-flow`.

## Étapes suivantes

Si vous suivez les [guides sur les grilles](/fr/docs/Web/CSS/Guides/Grid_layout#guides), vous pouvez créer des dispositions en grille avec le [placement basé sur les lignes](/fr/docs/Web/CSS/Guides/Grid_layout/Line-based_placement) ou des zones de modèle nommées. Examinez maintenant la création de [dispositions en grille avec des lignes de grille nommées](/fr/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines).
