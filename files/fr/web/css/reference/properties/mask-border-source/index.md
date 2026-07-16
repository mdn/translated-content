---
title: Propriété CSS `mask-border-source`
short-title: mask-border-source
slug: Web/CSS/Reference/Properties/mask-border-source
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`mask-border-source`** définit l'image source à utiliser pour créer [le masque de bordure](/fr/docs/Web/CSS/Reference/Properties/mask-border) d'un élément.

C'est la propriété {{CSSxRef("mask-border-slice")}} qui est utilisée afin de découper l'image en tranches/régions ensuite appliquées dynamiquement pour créer le masque final.

## Syntaxe

```css
/* Valeur avec un mot-clé */
mask-border-source: none;

/* Valeurs de type <image> */
mask-border-source: url("image.jpg");
mask-border-source: linear-gradient(to top, red, yellow);

/* Valeurs globales */
mask-border-source: inherit;
mask-border-source: initial;
mask-border-source: revert;
mask-border-source: revert-layer;
mask-border-source: unset;
```

### Valeurs

- `none`
  - : Aucun masque de bordure n'est utilisé.
- {{CSSxRef("&lt;image&gt;")}}
  - : Une référence vers une image qu'on utilise pour le masque de la bordure.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Cette propriété ne semble pas encore être prise en charge nulle part. Lorsqu'elle commencera à être prise en charge, elle servira à définir la source du masque de bordure.

```css
mask-border-source: url("image.jpg");
```

Les navigateurs basés sur Chromium prennent en charge une version obsolète de cette propriété — `mask-box-image-source` — avec un préfixe&nbsp;:

```css
-webkit-mask-box-image-source: url("image.jpg");
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
- La propriété {{CSSxRef("mask-border-width")}}
