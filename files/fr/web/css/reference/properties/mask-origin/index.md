---
title: Propriété CSS `mask-origin`
short-title: mask-origin
slug: Web/CSS/Reference/Properties/mask-origin
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`mask-origin`** définit l'origine d'un masque. Cette propriété détermine la zone de positionnement du masque&nbsp;: la zone dans laquelle une image de masque est positionnée. Les éléments HTML peuvent avoir des masques contenus dans leur boîte de contenu, boîte de remplissage ou boîte de contenu, tandis que les éléments SVG (qui n'ont pas les boîtes de mise en page CSS associées) peuvent avoir des masques contenus à l'intérieur de leur boîte de remplissage, de contour ou de vue.
Pour les éléments rendus comme plusieurs boîtes, comme un {{HTMLElement("span")}} de texte qui s'étend sur plusieurs lignes, la propriété `mask-origin` spécifie sur quelles boîtes la propriété {{CSSxRef("box-decoration-break")}} agit pour déterminer la zone de positionnement du masque.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
mask-origin: content-box;
mask-origin: padding-box;
mask-origin: border-box;
mask-origin: fill-box;
mask-origin: stroke-box;
mask-origin: view-box;

/* Valeurs multiples */
mask-origin: padding-box, content-box;
mask-origin: view-box, fill-box, border-box;

/* Valeurs globales */
mask-origin: inherit;
mask-origin: initial;
mask-origin: revert;
mask-origin: revert-layer;
mask-origin: unset;
```

### Valeurs

La propriété `mask-origin` est une liste de valeurs de mot-clé `<coord-box>` séparées par des virgules, y compris&nbsp;:

- `content-box`
  - : La position est relative à la [boîte de contenu](/fr/docs/Web/CSS/Guides/Shapes/From_box_values#content-box).
- `padding-box`
  - : La position est relative à la [boîte de remplissage](/fr/docs/Web/CSS/Guides/Shapes/From_box_values#padding-box).
- `border-box`
  - : La position est relative à la [boîte de bordure](/fr/docs/Web/CSS/Guides/Shapes/From_box_values#border-box).
- `fill-box`
  - : La position est relative à la boîte englobante de l'objet.
- `stroke-box`
  - : La position est relative à la boîte englobante du contour.
- `view-box`
  - : Utilise la zone d'affichage SVG la plus proche comme boîte de référence. Si un attribut {{SVGAttr("viewBox")}} est défini pour l'élément créant la zone d'affichage SVG, la boîte de référence est positionnée à l'origine du système de coordonnées établi par l'attribut `viewBox` et les dimensions de la boîte de référence sont définies par les valeurs de largeur et de hauteur de l'attribut `viewBox`.

Il existe trois valeurs non standard qui sont des raccourcis pour les valeurs `<coord-box>` standard&nbsp;: `content` est un alias pour `content-box`, `padding` est un alias pour `padding-box`, et `border` est un alias pour `border-box`.

## Description

La propriété `mask-origin` est très similaire à la propriété {{CSSxRef("background-origin")}}, mais elle a un ensemble de valeurs différent et une valeur initiale différente. La valeur initiale dépend de l'existence d'une boîte de mise en page CSS associée&nbsp;; si oui, la valeur par défaut est `border-box`. En comparaison, la valeur par défaut pour `background-origin` est `padding-box`.

Pour les éléments SVG qui ne sont pas à la mise en page de boîtes CSS, les valeurs `content-box`, `padding-box` et `border-box` (la valeur par défaut) sont calculées comme `fill-box`, ce qui signifie que la position est relative à la boîte englobante de l'objet. Pour les éléments HTML, si une valeur liée à SVG de `fill-box`, `stroke-box` ou `view-box` est définie, la valeur est calculée comme `border-box`.

Un élément peut avoir plusieurs couches de masque appliquées. Le nombre de couches est déterminé par le nombre de valeurs séparées par des virgules dans la valeur de la propriété {{CSSxRef("mask-image")}} (même si une ou plusieurs de ces valeurs sont `none`). Chaque valeur `mask-origin` dans la liste de valeurs séparées par des virgules est associée à une valeur `mask-image` séparée par des virgules, dans le même ordre.

Si le nombre de valeurs dans les deux propriétés diffère, les valeurs excédentaires de `mask-origin` ne sont pas utilisées dans les cas où `mask-origin` a plus de valeurs que `mask-image`. Si `mask-origin` a moins de valeurs que `mask-image`, les valeurs de `mask-origin` sont répétées.

Pour les éléments rendus comme une seule boîte, cette propriété définit la zone de positionnement du masque — ou la position d'origine — de l'image référencée par la propriété `mask-image`.

Pour les éléments rendus comme plusieurs boîtes, tels que les boîtes en ligne qui s'étendent sur plusieurs lignes, la propriété `mask-origin` définit sur quelles boîtes la propriété {{CSSxRef("box-decoration-break")}} agit pour déterminer la zone de positionnement du masque.

La propriété `mask-origin` peut provoquer le rognage de l'image de la couche de masque. Par exemple, si la propriété {{CSSxRef("mask-clip")}} est définie sur `padding-box`, que `mask-origin` est définie sur `border-box`, que la propriété {{CSSxRef("mask-position")}} est définie sur le coin supérieur gauche, et que l'élément a une bordure, alors l'image de la couche de masque sera rognée au niveau du coin supérieur gauche.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Comparer le contenu, le remplissage et la bordure

Cet exemple démontre l'utilisation de base tout en comparant trois valeurs de la propriété `mask-origin`.

#### HTML

Nous incluons quatre éléments HTML {{HTMLElement("section")}}, chacun contenant un élément HTML {{HTMLElement("div")}}.

```html
<section class="content">
  <div></div>
</section>
<section class="padding">
  <div></div>
</section>
<section class="border">
  <div></div>
</section>
<section class="comparison">
  <div></div>
</section>
```

#### CSS

Nous appliquons {{CSSxRef("border")}}, {{CSSxRef("padding")}}, et {{CSSxRef("margin")}} à chaque `<div>`. Cela crée les points de référence pour l'origine de l'image de masque. Le raccourci `border` inclut une {{CSSxRef("border-color")}}. Nous incluons également une {{CSSxRef("background-color")}}. Cela fournit un fond vert et une bordure bleue au masque. Enfin, tous nos `<div>` sont fournis avec une {{CSSxRef("mask-image")}}.

```css
div {
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 10px solid blue;
  background-color: #8cffa0;
  padding: 10px;
  mask-image: url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg");
}
section {
  border: 1px solid black;
}
```

Nous donnons à chaque `<div>` une valeur différente pour `mask-origin`.

```css
.content div {
  mask-origin: content-box;
}

.padding div {
  mask-origin: padding-box;
}

.border div {
  mask-origin: border-box;
}

.comparison div {
  mask-image: none;
}
```

Nous générons également du texte à l'intérieur de chaque `<section>` pour indiquer l'origine du masque pour chaque conteneur `<div>`.

```css
section::before {
  content: attr(class);
  display: block;
  text-align: center;
}
```

```css hidden
body {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
}
```

#### Résultats

{{EmbedLiveSample("Comparer le contenu, le remplissage et la bordure", "", 200)}}

Remarquez la différence entre les trois valeurs. Dans les trois premières boîtes, respectivement, le masque provient de&nbsp;:

- Le bord extérieur de la bordure.
- Le bord intérieur de la bordure, qui est le bord extérieur de la zone de remplissage.
- Le bord intérieur de la zone de remplissage, qui est le bord extérieur de la zone de contenu.

La quatrième boîte n'a pas de `mask-image` défini&nbsp;: il s'agit d'une image de référence, incluse pour vous permettre de visualiser facilement l'étendue des zones de contenu et de remplissage.

### Valeurs multiples

Cet exemple démontre l'utilisation de différentes valeurs de `mask-origin` pour différentes `mask-image` appliquées à un seul élément.

#### HTML

Nous incluons un seul `<div>`.

```html
<div></div>
```

#### CSS

Nous appliquons trois images de masque au lieu d'une seule, chacune avec une {{CSSxRef("mask-position")}} différente. Nous définissons également les images de masque pour ne pas se répéter.

```css
div {
  width: 120px;
  height: 120px;
  margin: 10px;
  border: 10px solid blue;
  background-color: #8cffa0;
  padding: 10px;
  mask-image:
    url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg"),
    url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg"),
    url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg");
  mask-position:
    top left,
    top right,
    bottom center;
  mask-repeat: no-repeat;
  mask-origin: content-box, border-box;
}
```

#### Résultats

{{EmbedLiveSample("Valeurs multiples", "", 200)}}

Nous avons trois valeurs `mask-image`, mais seulement deux valeurs `mask-origin`. Cela signifie que les valeurs `mask-origin` sont répétées, comme si nous avions défini `mask-origin: content-box, padding-box, content-box;`. L'étoile `border-box`, le seul masque chevauchant la bordure, est l'étoile en haut à droite.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("background-origin")}}
- La propriété {{CSSxRef("mask-image")}}
- La propriété {{CSSxRef("mask-position")}}
- La propriété {{CSSxRef("mask-repeat")}}
- La propriété {{CSSxRef("mask-size")}}
- La propriété raccourcie {{CSSxRef("mask")}}
- [Introduction au masquage CSS](/fr/docs/Web/CSS/Guides/Masking/Introduction)
- [Les propriétés CSS `mask`](/fr/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Déclarer plusieurs masques](/fr/docs/Web/CSS/Guides/Masking/Multiple_masks)
- Le module [de masquage CSS](/fr/docs/Web/CSS/Guides/Masking)
