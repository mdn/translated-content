---
title: Arrière-plans et bordures
slug: Learn/CSS/Building_blocks/Backgrounds_and_borders
translation_of: Learn/CSS/Building_blocks/Backgrounds_and_borders
original_slug: Apprendre/CSS/Building_blocks/Backgrounds_and_borders
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks")}}

Dans cette leçon, nous verrons quelques-unes des mises en forme créatives autorisées par les bordures et les arrière-plans CSS. On peut ajouter des dégradés, des images de fond, et des coins arrondis, les arrière-plans et les bordures répondent à de nombreux besoins de mise en forme CSS.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Compétences informatique basiques,
        <a
          href="/fr/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >logiciels de base installés</a
        >, connaissance simple en
        <a href="/fr/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >manipulation de fichiers</a
        >, les bases du HTML (voir
        <a href="/fr/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction au HTML</a
        >), et une esquisse du fonctionnement du CSS (voir
        <a href="/fr/docs/Learn/CSS/First_steps">premiers pas en CSS</a>. )
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>Apprendre comment mettre en forme l'arrière-plan et les bordures.</td>
    </tr>
  </tbody>
</table>

## Mettre en forme l'arrière-plan avec CSS

La propriété CSS [`background`](/fr/docs/Web/CSS/background) est un raccourci pour une famille de propriétés concernant l'arrière-plan. Nous les explorons dans cette partie. On peut rencontrer dans une feuille de style des déclarations de la propriété `background` difficiles à analyser, tant le nombre de valeurs qu'on peut lui passer est important.

```css
.box {
  background: linear-gradient(105deg, rgba(255,255,255,.2) 39%, rgba(51,56,57,1) 96%) center center / 400px 200px no-repeat,
  url(big-star.png) center no-repeat, rebeccapurple;
}
```

Nous reviendrons un peu plus loin sur le fonctionnement des raccourcis. Pour l'instant, passons en revue les propriétés CSS des arrière-plans.

### Couleurs d'arrière-plan

La propriété [`background-color`](/fr/docs/Web/CSS/background-color) définit la couleur d'arrière-plan d'un élément HTML. La propriété accepte comme valeur n'importe quelle [`<color>`](/fr/docs/Web/CSS/color_value). La `background-color` s'étend sous le contenu dans la zone de remplissage (padding box) de l'élément.

Dans l'exemple ci-dessous, nous ajoutons des couleurs de fond à une boîte, un titre et un élément [`<span>`](/fr/docs/Web/HTML/Element/span).

**Expérimentez avec ce code, en faisant varier les valeurs [\<color>](/fr/docs/Web/CSS/color_value) dans les différentes déclarations.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/color.html", '100%', 700)}}

### Images d'arrière-plan

La propriété [`background-image`](/fr/docs/Web/CSS/background-image) permet d'afficher une image dans l'arrière-plan d'un élément. L'exemple ci-dessous montre deux boîtes — l'une avec une image de fond trop grande ([balloons.jpg](https://mdn.github.io/css-examples/learn/backgrounds-borders/balloons.jpg)), l'autre avec comme fond une petite image représentant une étoile ([star.png](https://mdn.github.io/css-examples/learn/backgrounds-borders/star.png)).

Cet exemple illustre deux points concernant l'utilisation d'images de fond. Par défaut, une image trop large n'est pas redimensionnée pour correspondre aux dimensions de la boîte, on n'en voit qu'un coin, alors qu'une image de fond ne remplissant pas la boîte sera automatiquement répétée en pavage pour occuper tout l'espace disponible. Dans l'exemple, l'image d'origine est juste une étoile.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/background-image.html", '100%', 700)}}

**Si on spécifie une couleur de fond en plus de l'image de fond, l'image s'affiche par-dessus la couleur. Expérimentez ce comportement en ajoutant une propriété** `background-color` **dans l'exemple ci-dessus.**

#### Contrôler la répétition de l'arrière-plan

La propriété [`background-repeat`](/fr/docs/Web/CSS/background-repeat) permet de contrôler la répétition d'image pour former des pavages. Les valeurs possibles sont :

- `no-repeat` — aucune répétition de l'arrière-plan.
- `repeat-x` — répétition horizontale.
- `repeat-y` — répétition verticale.
- `repeat` — comportement par défaut : répétition dans les deux directions.

**Expérimentez l'effet de ces valeurs dans l'exemple ci-dessous. La valeur est fixée à `no-repeat`, une seule étoile apparaît donc. Remplacez par `repeat-x` et `repeat-y` et observez.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/repeat.html", '100%', 600)}}

#### Dimensionner l'image de fond

Dans l'exemple ci-dessus on voit qu'une image d'arrière-plan est recadrée quand elle dépasse de l'élément dont elle est le fond. Dans un tel cas, la propriété [`background-size`](/fr/docs/Web/CSS/background-size) — avec comme valeur une [longueur](/fr/docs/Web/CSS/length) ou un [pourcentage](/fr/docs/Web/CSS/percentage), permet d'adapter l'image à l'élément pour en occuper tout le fond.

On peut aussi utiliser les mots-clé :

- `cover` — le navigateur redimensionne l'image pour que tout le fond soit couvert, en conservant le format de l'image. La plupart du temps, une partie de l'image est en dehors de la boîte.
- `contain` — le navigateur donne à l'image la plus grande taille possible à l'intérieur de la boîte. Quand le format de l'image ne coïncide pas avec celui de la boîte, on se retrouve avec des bandes laissées vides en haut et en bas ou sur les côtés de l'image.

Dans l'exemple ci-dessous, l'image trop grande vue plus haut est retaillée aux dimensions de la boîte en précisant les valeurs numériques des côtés. On voit comment cela a déformé l'image.

Essayez ce qui suit :

- Changez les dimensions de l'arrière-plan.
- Supprimez les dimensions numériques et observez ce qui se passe en les remplaçant par `background-size: cover` ou `background-size: contain`.
- Si votre image est plus petite que la boîte, vous pouvez changer la valeur de `background-repeat` pour répéter l'image.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/size.html", '100%', 800)}}

#### Positionner l'image de fond

La propriété [`background-position`](/fr/docs/Web/CSS/background-position) permet de choisir la position de l'arrière-plan à l'intérieur de la boîte dans laquelle il est appliqué. On utilise pour cela un système de coordonnées avec l'origine `(0,0)` au coin en haut à gauche de la boîte, l'axe (`x`) étant horizontal, l'axe (`y`) vertical.

> **Note :** La valeur par défaut de `background-position` est `(0,0)`.

Les valeurs les plus communes pour `background-position` se présentent sous la forme d'un couple — une valeur horizontale suivie d'une valeur verticale.

Vous pouvez utiliser les mots-clé tels que `top` et `right` (vous trouverez les autres valeurs possibles sur la page [`background-image`](/fr/docs/Web/CSS/background-image)) :

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top center;
}
```

Ainsi que des valeurs de [longueurs](/fr/docs/Web/CSS/length), ou des [pourcentages](/fr/docs/Web/CSS/percentage) :

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: 20px 10%;
}
```

On peut utiliser simultanément mots-clé, dimensions et pourcentages, par exemple :

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top 20px;
}
```

La syntaxe à quatre valeurs enfin permet d'indiquer la distance depuis certains bords de la boîte — dans ce cas, la longueur correspond à un décalage par rapport à la valeur précédente. Par exemple dans le CSS ci-dessous on positionne l'arrière-plan à 20px du haut et à 10px de la droite :

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

**Dans l'exemple ci-dessous, modifiez les valeurs pour déplacer l'étoile à l'intérieur de la boîte.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/position.html", '100%', 600)}}

> **Note :** `background-position` est un raccourci pour[`background-position-x`](/fr/docs/Web/CSS/background-position-x) et [`background-position-y`](/fr/docs/Web/CSS/background-position-y), qui permettent de fixer individuellement les positions sur chaque axe.

### Utiliser un dégradé comme arrière-plan

Un dégradé — quand on l'utilise pour arrière-plan — se comporte comme une image, il se paramètre aussi avec la propriété [`background-image`](/fr/docs/Web/CSS/background-image).

Vous en apprendrez plus sur les différents types de dégradés et tout ce qu'on peut faire avec sur la page MDN consacrée au type [`<gradient>`](/fr/docs/Web/CSS/gradient). Une manière amusante de découvrir les dégradés est d'utiliser l'un des nombreux générateurs de dégradés CSS disponibles en ligne, par exemple [celui-là](https://cssgradient.io/). Créez votre dégradé puis copiez-collez le code source qui l'a généré.

Essayez différents dégradés dans l'exemple ci-dessous. Dans les deux boîtes on trouve respectivement un dégradé linéaire étendu sur toute la boîte et un dégradé circulaire de taille donné, qui du coup se répète.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/gradients.html", '100%', 650)}}

### Images de fond multiples

Il est aussi possible d'ajouter plusieurs images en arrière-plan — il suffit de spécifier plusieurs valeurs pour `background-image`, chacune séparé par une virgule.

Quand vous faites cela, il est possible de se retrouver avec plusieurs arrière-plans qui se chevauchent. Les arrière-plans se superposeront les uns sur les autres, avec le dernier se retrouvant sur le dessus, chacun suivant à leur tour, jusqu'au premier.

> **Note :** On peut joyeusement mélanger dégradés et images de fond classiques.

Les autres propriétés `background-*` peuvent aussi avoir une série de valeurs séparées de virgules, de la même manière que `background-image`:

```css
background-image: url(image1.png), url(image2.png), url(image3.png), url(image1.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position: 10px 20px,  top right;
```

Chaque valeur des différentes propriétés va correspondre aux valeurs placées à la même position dans les autres propriétés. Au-dessus, par exemple, la valeur `background-repeat` de l' `image1` sera `no-repeat`. Cependant, qu'arrive-t-il quand différentes propriétés ont différents nombres de valeurs? La réponse est que s'il y a moins de valeurs, elles seront réutilisées — dans l'exemple au-dessus il y a quatre images de fond mais seulement deux valeurs `background-position`. Les deux premières valeurs seront appliquées aux deux premières images, puis elles seront réutilisées pour les images suivantes — l'`image3` recevra la première valeur, et l'`image4` recevra la seconde valeur.

**Jouons un peu. Dans l'exemple ci-dessous j'ai inclus deux images. Afin de visualiser l'ordre d'empilement, essayez d'alterner la première image d'arrière-plan dans la liste. Vous pouvez aussi modifier les autres propriétés afin de changer la position, la taille ou la répétition.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/multiple-background-image.html", '100%', 600)}}

### Défilement de l'arrière-plan

Une autre option que nous avons à notre disposition pour les arrières-plans est de spécifier comment ils défilent quand le contenu défile lui-même. Ce comportement est contrôlé grâce à la propriété [`background-attachment`](/fr/docs/Web/CSS/background-attachment) , qui peut prendre ces valeurs:

- `scroll` : L'arrière-plan de l'élément défile lorsqu'on fait défiler la page. Si le contenu de l'élément défile, l'arrière-plan ne bouge pas. Dans la pratique, l'effet obtenu est que l'arrière-plan est fixé à la position de la page et défile comme elle.
- `fixed` : L'arrière-plan de l'élément est fixe dans la zone d'affichage (

  <i lang="en">viewport</i>

  ) et il ne défile pas lorsqu'on fait défiler ou la page ou le contenu de l'élément. L'arrière-plan reste toujours à la même position sur l'écran.

- `local` : Cette valeur fut ajoutée plus tard en raison de la confusion engendrée par la valeur `scroll` et son comportement qui ne correspond pas aux cas d'usage. `local` permet de fixer l'arrière-plan sur l'élément sur lequel il est défini afin que, lorsqu'on fait défiler l'élément, l'arrière-plan défile avec lui.

La propriété [`background-attachment`](/fr/docs/Web/CSS/background-attachment) n'a d'effet que lorsque le contenu défile. Pour observer cet effet, nous avons construit une démo afin d'illustrer les différences entre les trois valeurs : [background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) (vous pouvez également consulter [le code source de cette démo](https://github.com/mdn/learning-area/tree/master/css/styling-boxes/backgrounds)).

### Utiliser la propriété raccourcie background

Comme mentionné au début de cet article, vous verrez souvent des arrières-plans définis grâce à la propriété [`background`](/fr/docs/Web/CSS/background). Cette propriété raccourcie permet de définir les différentes propriétés en une seule déclaration.

Si vous utilisez plusieurs arrières-plans, vous devrez indiquer toutes les propriétés pour le premier arrière-plan puis ajouter l'arrière-plan suivant après une virgule. Dans l'exemple qui suit, on a un dégradé avec une taille et une position puis une image d'arrière-plan avec `no-repeat` et un position et enfin une couleur d'arrière-plan.

Quelques règles sont à respecter lorsqu'on déclare des images d'arrière-plan avec cette propriété raccourcie :

- La valeur pour `background-color` ne peut être définie qu'après la virgule finale.
- La valeur pour `background-size` ne peut être incluse qu'immédiatement après celle `background-position` en la séparant de celle-ci avec une barre oblique (« / »), par exemple : `center/80%`.

N'hésitez pas à consulter la page de documentation pour [`background`](/fr/docs/Web/CSS/background) qui détaille ces différents points.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/background.html", '100%', 850)}}

### Arrière-plans et accessibilité

Quand on place un texte sur une image ou une couleur de fond, il faut s'assurer d'un contraste suffisant pour une bonne lisibilité. Quand un texte est écrit par-dessus une image, déclarez toujours une `background-color` qui rendra le texte lisible si l'image n'est pas chargée.

Les lecteurs d'écran ne traitent pas les images de fond, elles ne doivent donc pas être autre chose que décoratives ; tout contenu important doit faire partie de la page HTML et pas de la mise en forme du fond.

## Bordures

Lors de l'apprentissage du modèle de boîte, on a pu voir comment les bordures jouaient un rôle sur la taille de la boîte. Dans cette leçon, nous allons voir comment créer des bordures. Généralement, lorsqu'on ajoute des bordures à un élément avec CSS, on utilise une propriété raccourcie qui définit la couleur, l'épaisseur et le style de la bordure.

On peut définir une bordure pour les quatre côtés d'une boîte avec la propriété [`border`](/fr/docs/Web/CSS/border) :

```css
*.box {
  border: 1px solid black;
}*
```

On peut aussi cibler un seul des côtés de la boîte, par exemple :

```css
.box {
  border-top: 1px solid black;
}
```

Les propriétés individuelles équivalentes pour ces notations raccourcies seraient :

```css
.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

Pour la propriété qui concerne un des côtés :

```css
.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}
```

> **Note :** Ces propriétés pour les bordures des côtés haut, droit, bas et gauche ont également des propriétés équivalentes _logiques_ qui ciblent les différents côtés de la boîte en fonction du mode d'écriture du document (par exemple de gauche à droite, de droite à gauche ou bien encore de haut en bas). Nous aborderons celles-ci dans la prochaine leçon qui traitera [de la directionnalité du texte](/fr/docs/Learn/CSS/Building_blocks/Handling_different_text_directions).

**Il existe différents styles qui peuvent être utilisés pour les bordures. Dans l'exemple qui suit, nous avons utilisé un style différent pour chacun des côtés de la boîte. N'hésitez pas à modifier l'exemple pour modifier le style, l'épaisseur et la couleur afin de voir comment les bordures fonctionnent.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/borders.html", '100%', 750)}}

### Coins arrondis

On peut arrondir les coins d'une boîte avec la propriété [`border-radius`](/fr/docs/Web/CSS/border-radius) ou les propriétés détaillées correspondantes (une pour chaque coin de la boîte). Cette propriété peut s'utiliser avec deux longueurs ou pourcentages : la première de ces valeurs définit le rayon horizontal et la seconde le rayon vertical. Dans de nombreux cas, on utilisera une seule valeur qui sera alors utilisée pour les deux rayons de courbure.

Par exemple, pour donner par exemple un rayon de 10px à chacun des quatre coins :

```css
.box {
  border-radius: 10px;
}
```

Ou pour donner au coin en haut à droite un rayon horizontal de 1em et un rayon vertical de 10% :

```css
.box {
  border-top-right-radius: 1em 10%;
}
```

Dans l'exemple ci-dessus, nous avons d'abord fixé la valeur pour les quatre coins, puis modifié celle du coin en haut à droite. Vous pouvez jouer avec les différentes valeurs pour changer le rendu des coins. Jetez un œil à la page de documentation de [`border-radius`](/fr/docs/Web/CSS/border-radius), vous y trouverez la syntaxe pour les différentes options.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/corners.html", '100%', 750)}}

## Testez vos compétences !

Testons vos nouvelles connaissances : en partant de l'exemple fourni plus bas :

1.  Donnez au bloc une bordure en trait plein noir de 5px de large, avec des coins arrondis de 10px.
2.  Ajouter une image de fond (utiliser l'URL `balloons.jpg`) à redimensionner pour qu'elle recouvre la boîte.
3.  Donnez au `<h2>` une couleur de fond noire semi-transparente, avec un texte en blanc.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/task.html", '100%', 700)}}

> **Note :** Vous pouvez [jeter un œil à la solution ici](https://github.com/mdn/css-examples/blob/master/learn/solutions.md) — mais essayez d'abord de la trouver par vous-même !

## Résumé

Nous avons vu beaucoup de choses dans cette leçon, ajouter un arrière-plan à une boîte ou une bordure n'est pas si simple. N'hésitez pas à explorer les pages de référence des propriétés rencontrées si vous voulez creuser les points évoqués ici. Chaque page sur MDN vous proposera de nouveaux exemples sur lesquels vous pourrez continuer à vous entraîner et renforcer vos connaissances.

Dans la leçon suivante nous découvrirons comment le mode d'écriture de votre document interagit avec CSS. Que se passe-t-il quand le texte ne se déroule pas de la gauche vers la droite ?

{{PreviousMenuNext("Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks")}}

## Dans ce cours

1.  [Cascade et héritage](/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
2.  [Sélecteurs CSS](/fr/docs/Learn/CSS/Building_blocks/Selectors)

    - [Sélecteurs de classe, de type et d'identifiant](/fr/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
    - [Sélecteurs d'attribut](/fr/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
    - [Pseudo-classes et pseudo-éléments](/fr/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
    - [Combinateurs](/fr/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

3.  [Le modèle de boîte](/fr/docs/Learn/CSS/Building_blocks/The_box_model)
4.  Arrières-plans et bordures
5.  [Gérer la directionnalité du texte](/fr/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
6.  [Le dépassement du contenu](/fr/docs/Learn/CSS/Building_blocks/Overflowing_content)
7.  [Valeurs et unités](/fr/docs/Learn/CSS/Building_blocks/Values_and_units)
8.  [Dimensionnement des objets en CSS](/fr/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
9.  [Images, médias, et formulaires](/fr/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
10. [Mettre en forme les tableaux](/fr/docs/Learn/CSS/Building_blocks/Styling_tables)
11. [Déboguer CSS](/fr/docs/Learn/CSS/Building_blocks/Debugging_CSS)
12. [Organiser son code CSS](/fr/docs/Learn/CSS/Building_blocks/Organizing)
