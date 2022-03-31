---
title: Aperçu des formes CSS
slug: Web/CSS/CSS_Shapes/Overview_of_CSS_Shapes
tags:
  - Aperçu
  - CSS
  - CSS Shapes
  - Formes CSS
translation_of: Web/CSS/CSS_Shapes/Overview_of_CSS_Shapes
original_slug: Web/CSS/CSS_Shapes/Aperçu_formes_CSS
---
{{CSSRef}}

La spécification [CSS Shapes Level 1](https://www.w3.org/TR/css-shapes/) définit les formes géométriques en CSS. Pour ce module de niveau 1, ces formes s'appliquent aux éléments qui utilisent une disposition flottante. Dans cet article, nous verrons un aperçu de ce qu'il est possible de faire avec les formes en CSS.

Si on fait flotter un élément à gauche d'un texte, on verra le texte écrit autour de cet élément en suivant un contour rectangulaire. Si on applique une forme circulaire à cet élément, le texte suivra alors le contour du cercle.

Il existe différentes façons de créer des formes CSS et nous verrons, dans ces guides, leur fonctionnement et les cas d'utilisation.

## Que définit la spécification ?

La spécification définit trois nouvelles propriétés :

- {{cssxref("shape-outside")}} qui permet de définir des formes simples
- {{cssxref("shape-image-threshold")}} qui permet d'indiquer un seuil d'opacité. Si une image est utilisée afin de définir une forme, seuls les fragments de l'image qui sont d'une opacité supérieure ou égale à ce seuil seront utilisés afin de créer la forme. Les autres fragments de l'image sont ignorés.
- {{cssxref("shape-margin")}} définit une marge autour d'une forme

## Définir des formes simples

La propriété `shape-outside` permet de définir une forme. Cette propriété peut prendre différentes valeurs dont chacune définit une forme différente. Ces valeurs sont définies par le type de donnée {{cssxref("&lt;basic-shape&gt;")}}. Prenons un exemple simple pour commencer.

Dans l'exemple qui suit, on a une image qui flotte à gauche. Ensuite, on lui applique `shape-outside` avec la valeur `circle(50%)`. Grâce à cette règle, le contenu épouse alors une forme circulaire plutôt que le rectangle qui était formé par la boîte de l'image.

{{EmbedGHLiveSample("css-examples/shapes/overview/circle.html", '100%', 720)}}

À l'heure actuelle, la spécification indique qu'un élément doit flotter si on veut lui appliquer `<basic-shape>`. De cette façon, l'amélioration progressive est rapidement obtenue car si le navigateur ne prend pas en charge les formes CSS, l'utilisateur verra le contenu épouser une forme rectangulaire (comme auparavant). Si le navigateur prend en charge les formes, la disposition visuelle sera améliorée.

### Formes simples (_Basic Shapes_)

La valeur `circle(50%)` est une exemple de forme simple. La spécification fournit quatre valeur de types `<basic-shape>` :

- `inset()`
- `circle()`
- `ellipse()`
- `polygon()`

Avec la valeur `inset()`, le texte environnant continue d'épouser une forme rectangulaire mais on peut décaler ce rectangle afin de rapprocher le texte de l'objet flottant par exemple.

Nous avons vu le fonctionnement de `circle()` dans l'exemple précédent : cette notation fonctionnelle permet de créer une forme circulaire. `ellipse()` est assez proche et permet de créer une ellipse (qu'on peut voir comme un cercle aplati). Si aucune de ces formes ne vous convient, vous pouvez utiliser `polygon()` afin de créer un polygone correspondant à une forme complexe.

Dans [le guide sur les formes simples](/fr/docs/Web/CSS/CSS_Shapes/Formes_simples), nous verrons comment créer et exploiter ces formes.

### Boîtes de référence

Les formes sont créées sur une boîte donnée. Aussi, on peut créer une boîte par rapport à chacune des boîtes du [modèle de boîte](/fr/docs/Apprendre/CSS/Introduction_%C3%A0_CSS/Le_mod%C3%A8le_de_bo%C3%AEte) et utiliser les valeurs :

- `border-box`
- `padding-box`
- `content-box`
- `margin-box`

Dans l'exemple qui suit, vous pouvez modifier la valeur `border-box` afin d'utiliser une autre valeur et observer comment se déplace la forme par rapport à la boîte.

{{EmbedGHLiveSample("css-examples/shapes/overview/box.html", '100%', 810)}}

Pour en savoir plus, voir [le guide sur les formes et les boîtes](/fr/docs/Web/CSS/CSS_Shapes/Shapes_From_Box_Values).

### Générer une forme à partir d'une image

Une autre méthode qui peut s'avérer utile consiste à générer une forme à partir d'une image et de son canal alpha :  le texte épousera alors la forme non-transparente de l'image. On peut alors avoir un texte qui « s'écoule » dans une image ou autour. Cette méthode permet aussi d'avoir une forme plus complexe sans avoir à recourir à un polygone (il n'est pas nécessaire que l'image soit visible).

Attention, les images utilisées ainsi doivent être [compatibles avec les règles CORS](/en-US/docs/Web/HTTP/CORS). Se n'est pass le cas, `shape-outside` se comportera comme si elle avait reçu la valeur `none` et il n'y aura alors aucune forme.

Dans l'exemple qui suit, on utilise une image avec une zone complètement transparente et on utilise une image comme valeur d'URL pour `shape-outside`. La forme ainsi créée utilise la zone opaque de l'image : la forme de la montgolfière.

{{EmbedGHLiveSample("css-examples/shapes/overview/image.html", '100%', 800)}}

#### `shape-image-threshold`

La propriété `shape-image-threshold` permet d'ajuster le seuil de transparence utilisé pour créer une forme à partir d'une image. Si la valeur de `shape-image-threshold` est `0.0` (la valeur initiale), ce seront les parties totalement transparentes de l'image qui créeront la forme. Si la valeur `1.0`, toutes les zones de l'image (y compris celles totalement opaques) seront utilisées pour la forme. Les valeurs intermédiaires permettent d'utiliser des zones partiellement transparentes pour définir la forme.

Dans l'exemple suivant, on utilise une image qui est un dégradé et qui permet de définir la forme. Vous pouvez modifier la valeur du seuil afin de faire évoluer la forme.

{{EmbedGHLiveSample("css-examples/shapes/overview/threshold.html", '100%', 820)}}

Dans l'article [Créer des formes à partir d'images](/fr/docs/Web/CSS/CSS_Shapes/Shapes_From_Images), nous verrons plus en détails le fonctionnement de ces propriétés.

## La propriété `shape-margin`

La propriété {{cssxref("shape-margin")}} ajoute une marge à `shape-outside`. Cela permet d'écarter le contenu de la forme.

Dans l'exemple qui suit, on a une forme simple sur laquelle on ajoute `shape-margin`. Vous pouvez modifier la valeur de cette propriété afin de rapprocher ou d'éloigner le texte de la forme.

{{EmbedGHLiveSample("css-examples/shapes/overview/shape-margin.html", '100%', 800)}}

## Utiliser du contenu généré comme objet flottant

Dans les exemples qui précèdent, nous avons utilisé des images ou des éléments visibles afin de définir la forme. Autrement dit, la forme est visible sur la page. Il se peut également qu'on veuille que le texte suive une ligne invisible qui ne soit pas droite. On pourrait le faire avec une image ensuite rendue invisible mais on aurait alors des éléments redondants dans le document. Aussi, autant utiliser du contenu généré afin de strictement conserver la mise en forme dans la feuille CSS.

Dans l'exemple qui suit, on utilise du contenu généré afin d'inséer un élément avec une hauteur et une largeur de 150 pixels. On peut alors ensuite utiliser les formes simples, les boîtes de référence ou le canal alpha d'une image afin de créer une forme qu'épouserait le texte.

{{EmbedGHLiveSample("css-examples/shapes/overview/generated-content.html", '100%', 850)}}

## Relations avec `clip-path`

Les valeurs utilisées pour les formes simples et pour les boîtes de référence sont les mêmes que celles utilisées pour la propriété {{cssxref("clip-path")}}. Ainsi, si on souhaite créer une forme à partir d'une image et rogner une partie de cette image, on pourra utiliser les mêmes valeurs.

Ci-après, on a une image carrée avec un arrière-plan bleu. On a défini la forme avec  `shape-outside: ellipse(40% 50%);` puis utilisé `clip-path: ellipse(40% 50%);` afin de rogner l'image pour suivre la forme.

{{EmbedGHLiveSample("css-examples/shapes/overview/clip-path.html", '100%', 800)}}

## Outils de développement pour les formes CSS

Avec la prise en charge des formes CSS, Firefox sort également une nouvelle fonctionnalités dans les outils de développement : [l'éditeur de chemin pour les formes (_Shape Path Editor_)](/fr/docs/Outils/Inspecteur/Comment/Edit_CSS_shapes). Cet outil permet d'inspecter les formes présentes sur la page et de modifier leurs valeurs à la volée. Si votre polygone n'a pas l'aspect escompté, vous pouvez le modifier via l'éditeur puis recopier la nouvelle valeur dans votre fichier CSS.

L'éditeur de chemin pour les formes sera activé par défaut avec Firefox 60 pour les formes générées grâce à `clip-path`. Vous pouvez également l'utiliser afin d'éditer les formes générées grâce à `shape-outside` à condition d'avoir activé la préférence `layout.css.shape-outside.enabled`.

## Les futures fonctionnalités

Dans sa version initiale, le module de spécification pour les formes contenait une propriété `shape-inside` afin de créer des formes à l'intérieur d'un élément. Cette propriété, ainsi que la possibilité de créer des formes sur des éléments non-flottants, a été repoussée à la spécification de [niveau 2](https://drafts.csswg.org/css-shapes-2/). La propriété `shape-inside` était initialement décrite dans la spécification de niveau 1 et vous pouvez donc trouver certains tutoriels qui détaillent ces deux propriétés.
