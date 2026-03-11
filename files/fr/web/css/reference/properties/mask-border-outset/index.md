---
title: mask-border-outset
slug: Web/CSS/Reference/Properties/mask-border-outset
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La propriété [CSS](/fr/docs/Web/CSS) **`mask-border-outset`** définit la distance par laquelle la [bordure de masque](/fr/docs/Web/CSS/Reference/Properties/mask-border) d'un élément est décalée par rapport à sa boîte de bordure.

## Syntaxe

```css
/* Valeur de type <length> */
mask-border-outset: 1rem;

/* Valeur de type <number> */
mask-border-outset: 1.5;

/* Décalage vertical | horizontal */
mask-border-outset: 1 1.2;

/* haut | horizontal | bas */
mask-border-outset: 30px 2 45px;

/* haut | droit | bas | gauche */
mask-border-outset: 7px 12px 14px 5px;

/* Valeurs globales */
mask-border-outset: inherit;
mask-border-outset: initial;
mask-border-outset: revert;
mask-border-outset: revert-layer;
mask-border-outset: unset;
```

La propriété `mask-border-outset` peut être utilisée avec une, deux, trois ou quatre valeurs. Chaque valeur peut être de type {{CSSxRef("&lt;length&gt;")}} ou {{CSSxRef("&lt;number&gt;")}}. Les valeurs négatives ne sont pas autorisées.

- Si **une** valeur est indiquée, elle applique le même décalage aux **quatre côtés**.
- Si **deux** valeurs sont indiquées, la première applique le décalage en **haut et en bas**, la seconde à **gauche et à droite**.
- Si **trois** valeurs sont indiquées, la première applique le décalage en **haut**, la deuxième à **gauche et à droite**, la troisième en **bas**.
- Si **quatre** valeurs sont indiquées, les décalages s'appliquent en **haut**, **droite**, **bas** et **gauche** dans cet ordre (sens horaire).

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : La distance, avec une dimension, pour le décalage du masque.
- {{CSSxRef("&lt;number&gt;")}}
  - : Le décalage du masque, exprimé comme un multiple de {{CSSxRef("border-width")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Cette propriété ne semble pas encore être prise en charge nulle part. Lorsqu'elle sera prise en charge, elle permettra d'éloigner le masque du bord intérieur de la boîte de bordure de l'élément — vous pourrez l'utiliser pour faire démarrer le masque à mi-chemin de la bordure, plutôt qu'à l'intérieur de celle-ci.

```css
mask-border-outset: 1rem;
```

Les navigateurs basés sur Chromium prennent en charge une version obsolète de cette propriété — `mask-box-image-outset` — avec un préfixe&nbsp;:

```css
-webkit-mask-box-image-outset: 1rem;
```

> [!NOTE]
> La page {{CSSxRef("mask-border")}} propose un exemple fonctionnel (utilisant les propriétés de masque de bordure préfixées et obsolètes prises en charge dans Chromium), afin que vous puissiez vous faire une idée de l'effet.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("mask-border")}}
- La propriété {{CSSxRef("mask-border-mode")}}
- La propriété {{CSSxRef("mask-border-repeat")}}
- La propriété {{CSSxRef("mask-border-source")}}
- La propriété {{CSSxRef("mask-border-width")}}
