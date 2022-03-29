---
title: mask-size
slug: Web/CSS/mask-size
translation_of: Web/CSS/mask-size
browser-compat: css.properties.mask-size
---
{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`mask-size`** définit les dimensions des images utilisées comme masques. La taille de l'image peut être contrainte, partiellement ou complètement, afin de conserver ses proportions intrinsèques.

```css
/* Valeurs avec un mot-clé */
mask-size: cover;
mask-size: contain;

/* Syntaxe avec une valeur           */
/* qui indique la largeur de l'image */
/* la hauteur est fixée à auto       */
mask-size: 50%;
mask-size: 3em;
mask-size: 12px;
mask-size: auto;

/* Syntaxe avec deux valeurs :           */
/* La première valeur indique la largeur */
/* La seconde indique la hauteur         */
mask-size: 50% auto;
mask-size: 3em 25%;
mask-size: auto 6px;
mask-size: auto auto;

/* Valeurs multiples pour gérer différents */
/* masques. Attention à ne pas confondre   */
/* avec mask-size: auto auto               */
mask-size: auto, auto;
mask-size: 50%, 25%, 25%;
mask-size: 6px, auto, contain;

/* Valeurs globales */
mask-size: inherit;
mask-size: initial;
mask-size: revert;
mask-size: unset;
```

> **Note :** Si la valeur de cette propriété n'est pas définie avec la propriété raccourcie [`mask`](/fr/docs/Web/CSS/mask) et que celle-ci est appliquée après `mask-size`, la valeur sera réinitialisée avec sa valeur initiale à cause de la propriété raccourcie.

## Syntaxe

Une ou plusieurs valeurs `<bg-size>`, séparées par des virgules. Une valeur `<bg-size>` peut être définie de trois façons&nbsp;:

- avec le mot-clé `contain`
- avec le mot-clé `cover`
- avec des valeurs pour la hauteur et la largeur.

Pour indiquer une taille avec une largeur et une hauteur, il est possible de fournir une ou deux valeurs&nbsp;:

- Si une seule valeur est fournie, elle servira à définir la largeur, la hauteur vaudra alors `auto`
- Si deux valeurs sont fournies, la première définira la largeur et la seconde définira la hauteur.

Chaque valeur peut être une longueur (`<length>`), un pourcentage (`<percentage>`) ou `auto`.

### Valeurs

- `<length>`
  - : Une valeur de longueur (type [`<length>`](/fr/docs/Web/CSS/length) qui redimensionne l'image avec la longueur indiquée dans l'axe correspondant. Les longueurs négatives ne sont pas autorisées.
- `<percentage>`
  - : Une valeur de pourcentage ([`<percentage>`](/fr/docs/Web/CSS/percentage)) qui indique le redimensionnement à appliquer dans l'axe correspondant à partir de l'origine définie par [`mask-origin`](/fr/docs/Web/CSS/mask-origin) par rapport à la taille de la zone du masque. Par défaut, cette zone contient la boîte de contenu et la boîte de remplissage (<i lang="en">padding</i>) (on peut modifier cette zone pour choisir les boîtes concernées). Les valeurs négatives ne sont pas autorisées.
- `auto`
  - : Un mot-clé qui permet de redimensionner l'image du masque dans l'axe correspondant tout en conservant ses proportions.
- `contain`
  - : Un mot-clé qui redimensionne l'image afin qu'elle soit aussi grande que possible et conserve ses proportions tout en étant contenue dans le conteneur. Par défaut, l'image est centrée sauf si [`mask-position`](/fr/docs/Web/CSS/mask-position) indique un autre paramètre.
- `cover`
  - : Un mot-clé qui se comporte à l'inverse de `contain`. L'image est agrandie autant que possible et ses proportions sont conservées et elle couvre toute la surface du conteneur, si les dimensions du conteneur sont différentes, l'image est rognée sur les côtés (haut et bas ou droite et gauche).

L'interprétation des valeurs se fera en fonction des dimensions intrinsèques de l'image (sa hauteur et sa largeur) et de ses proportions intrinsèques (le ratio entre la largeur et la hauteur). Une image matricielle (<i lang="en">bitmap</i>) possèdera toujours des dimensions intrinsèques et des proportions intrinsèques. Une image vectorielle pourra avoir des dimensions intrinsèques (et donc, _de facto_, des proportions intrinsèques) ou également n'avoir qu'une ou aucune dimension intrinsèque et des proportions intrinsèques ou non. Les gradients sont considérés comme des images sans dimensions ni proportions intrinsèques.

La taille de l'image affichée pour le masque est calculée de la façon suivante&nbsp;:

- Si les deux composants de `mask-size` sont définis et sont différents de `auto`&nbsp;:
  - : L'image est affichée avec la taille indiquée.
- Si `mask-size` vaut `contain` ou `cover`&nbsp;:
  - : L'image est affichée en conservant ses proportions avec la plus grande taille possible pour être contenue ou couvrir toute la zone du masque. Si l'image ne possède pas de proportions intrinsèques, sa taille d'affichage sera la taille de la zone du masque.
- Si `mask-size` vaut `auto` ou `auto auto`&nbsp;:
  - : Si l'image possède deux dimensions intrinsèques, elle sera affichée avec cette taille. Si elle ne possède pas de dimensions intrinsèques ni de proportions intrinsèques, elle sera affichée à la taille de la zone du masque. Si elle n'a aucune dimension intrinsèque mais possède des proportions intrinsèques elle sera affichée comme si `contain` avait été utilisé. Si l'image possède une dimension intrinsèque et des proportions intrinsèques, sa taille sera déterminée grâce à ses informations. Si l'image possède une dimension intrinsèque mais aucune proportion intrinsèque, la dimension connue sera utilisée pour cet axe et la seconde sera celle de la zone pour le masque.
- Si `mask-size` possède un composant `auto` et un autre composant différent de `auto`&nbsp;:
  - : Si l'image possède des proportions intrinsèques, elle sera affichée avec la dimension connue et la deuxième sera calculée à partir de la proportion. Si l'image ne possède pas de proportions intrinsèques, la valeur définie sera utilisée pour l'axe correspondant et pour l'autre axe, on utilisera la dimension intrinsèque si elle est connue, sinon, on utilisera la dimension (sur cet axe) de la zone du masque.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Définir la taille du masque en pourcentages

{{EmbedGHLiveSample("css-examples/masking/mask-size.html", '100%', 700)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Rognage et masquage avec CSS (en anglais)](https://css-tricks.com/clipping-masking-css/)

