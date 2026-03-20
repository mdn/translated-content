---
title: mask-border-repeat
slug: Web/CSS/Reference/Properties/mask-border-repeat
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La propriété [CSS](/fr/docs/Web/CSS) **`mask-border-repeat`** définit la façon dont les images pour les côtés et la partie centrale de [l'image de bordure de masque](/fr/docs/Web/CSS/Reference/Properties/mask-border) sont mises à l'échelle et répétées.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
mask-border-repeat: stretch;
mask-border-repeat: repeat;
mask-border-repeat: round;
mask-border-repeat: space;

/* vertical | horizontal */
mask-border-repeat: round stretch;

/* Valeurs globales */
mask-border-repeat: inherit;
mask-border-repeat: initial;
mask-border-repeat: revert;
mask-border-repeat: revert-layer;
mask-border-repeat: unset;
```

La propriété `mask-border-repeat` peut être utilisée avec une ou deux valeurs parmi celles de la liste ci-après.

- Lorsque **une** seule valeur est définie, le même comportement est utilisé pour **les quatre côtés**.
- Lorsque **deux** valeurs sont définies, la première valeur s'applique aux côtés **haut et bas** et la deuxième aux côtés **gauche et droite**.

### Values

- `stretch`
  - : Les bords de l'image source sont étirés afin de remplir l'espace entre chaque bordure.
- `repeat`
  - : Les bords de l'image source sont répétés afin de remplir l'espace entre chaque bordure. Les fragments répétés peuvent être rognés afin que le remplissage soit exact.
- `round`
  - : Les bords de l'image source sont répétés afin de remplir l'espace entre chaque bordure. Les fragments peuvent être étirés afin que le remplissage soit exact.
- `space`
  - : Les bords de l'image source sont répétés afin de remplir l'espace entre chaque bordure. L'espace supplémentaire est réparti entre les fragments répétés pour que le remplissage soit exact.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

Cette propriété ne semble pas encore être prise en charge nulle part. Lorsqu'elle commencera à être prise en charge, elle servira à définir comment la tranche de masque de bordure sera répétée autour de la bordure — c'est-à-dire, sera-t-elle simplement répétée, ou légèrement mise à l'échelle pour qu'un nombre entier de tranches s'adapte, ou étirée pour qu'une tranche s'adapte&nbsp;?

```css
mask-border-repeat: round;
```

Les navigateurs basés sur Chromium prennent en charge une version obsolète de cette propriété — `mask-box-image-repeat` — avec un préfixe&nbsp;:

```css
-webkit-mask-box-image-repeat: round;
```

> [!NOTE]
> La page {{CSSxRef("mask-border")}} propose un exemple fonctionnel (utilisant les propriétés de masque de bordure préfixées obsolètes prises en charge dans Chromium), afin que vous puissiez vous faire une idée de l'effet.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("mask-border")}}
- La propriété {{CSSxRef("mask-border-mode")}}
- La propriété {{CSSxRef("mask-border-outset")}}
- La propriété {{CSSxRef("mask-border-source")}}
- La propriété {{CSSxRef("mask-border-width")}}
