---
title: mask-border-width
slug: Web/CSS/Reference/Properties/mask-border-width
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La propriété [CSS](/fr/docs/Web/CSS) **`mask-border-width`** définit la largeur [du masque de bordure](/fr/docs/Web/CSS/Reference/Properties/mask-border) d'un élément.

## Syntaxe

```css
/* Valeur avec un mot-clé */
mask-border-width: auto;

/* Valeur de type <length> */
mask-border-width: 1rem;

/* Valeur de type <percentage> */
mask-border-width: 25%;

/* Valeur de type <number> */
mask-border-width: 3;

/* vertical | horizontal */
mask-border-width: 2em 3em;

/* haut | horizontal | bas */
mask-border-width: 5% 15% 10%;

/* haut | droit | bas | gauche */
mask-border-width: 5% 2em 10% auto;

/* Valeurs globales */
mask-border-width: inherit;
mask-border-width: initial;
mask-border-width: revert;
mask-border-width: revert-layer;
mask-border-width: unset;
```

La propriété `mask-border-width` peut être définie avec une, deux, trois ou quatre valeurs parmi celles de la liste ci-après.

- Lorsque **une** seule valeur est indiquée, elle est utilisée comme largeur pour **les quatre côtés**.
- Lorsque **deux** valeurs sont fournies, la première indique la largeur pour les côtés **bas et haut** et la deuxième la largeur pour les côtés **gauche et droite**.
- Lorsque **trois** valeurs sont fournies, la première est appliquée au côté **haut**, la deuxième au côté **gauche et droite** et la troisième au côté **bas**.
- Lorsque **quatre** valeurs sont fournies, elles s'appliquent respectivement aux côtés **haut**, **droite**, **bas** et **gauche** dans cet ordre (c'est-à-dire le sens horaire).

### Valeurs

- `<length-percentage>`
  - : La largeur du masque de bordure, définie avec une valeur de type {{CSSxRef("&lt;length&gt;")}} ou {{CSSxRef("&lt;percentage&gt;")}}. Les pourcentages sont relatifs à la largeur de la zone de bordure pour les décalages horizontaux et à la hauteur de la zone de bordure pour les décalages verticaux. Cette valeur ne peut pas être négative.
- `<number>`
  - : La largeur du masque de bordure comme multiple de la largeur {{CSSxRef("border-width")}}. Cette valeur ne peut pas être négative.
- `auto`
  - : La largeur du masque de bordure est égale à la largeur ou à la hauteur intrinsèque de la valeur {{CSSxRef("mask-border-slice")}} correspondante. Si l'image ne possède pas de dimension intrinsèque, c'est la valeur `border-width` qui est utilisée à la place.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

`mask-border-width` définit la largeur du masque de bordure — définir cette valeur différemment de {{CSSxRef("mask-border-slice")}} entraînera la mise à l'échelle des tranches pour s'adapter au masque de bordure.

```css
/* Masque final réduit à 20px de large */
mask-border-slice: 30 fill;
mask-border-width: 20px;
```

Les navigateurs basés sur Chromium prennent en charge une version obsolète de cette propriété — `mask-box-image-width` — avec un préfixe&nbsp;:

```css
-webkit-mask-box-image-width: 20px;
```

> [!NOTE]
> La page {{CSSxRef("mask-border")}} propose un exemple fonctionnel (utilisant les propriétés de masque de bordure préfixées obsolètes prises en charge par Chromium), afin que vous puissiez vous faire une idée de l'effet.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("mask-border")}}
- La propriété {{CSSxRef("mask-border-mode")}}
- La propriété {{CSSxRef("mask-border-outset")}}
- La propriété {{CSSxRef("mask-border-repeat")}}
- La propriété {{CSSxRef("mask-border-source")}}
