---
title: line-height-step
slug: Web/CSS/Reference/Properties/line-height-step
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`line-height-step`** définit le pas de hauteur des boîtes de ligne. Quand le pas est positif, les hauteurs des boîtes de ligne sont arrondies au pas le plus proche. Les valeurs négatives sont invalides.

## Syntaxe

```css
/* Valeurs avec une longueur */
line-height-step: 18pt;

/* Valeurs globales */
line-height-step: inherit;
line-height-step: initial;
line-height-step: revert;
line-height-step: revert-layer;
line-height-step: unset;
```

La propriété `line-height-step` peut être définie par l'une des valeurs suivantes&nbsp;:

- une `<length>`.

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : La longueur ({{CSSxRef("&lt;length&gt;")}}) définie est utilisée dans le calcul du _pas_ de hauteur de la boîte de ligne.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir l'unité de pas pour la hauteur de la boîte de ligne

Dans l'exemple suivant, la hauteur de la boîte des lignes pour chaque paragraphe est arrondie à l'unité supérieure. La boîte de la ligne pour l'élément `<h1>` ne tient pas sur une unité et en occupe donc deux (mais est toujours centrée sur ces deux unités).

```css
:root {
  font-size: 12pt;
  --my-grid: 18pt;
  line-height-step: var(--my-grid);
}
h1 {
  font-size: 20pt;
  margin-top: calc(2 * var(--my-grid));
}
```

Voici le résultat obtenu avec une capture d'écran&nbsp;:

![Comment la propriété line-height-step affecte l'apparence du texte.](line-grid-center.png)

## Spécifications

Actuellement, aucun navigateur ne prend en charge cette fonctionnalité.

## Compatibilité des navigateurs

Actuellement, aucun navigateur ne prend en charge cette fonctionnalité.

## Voir aussi

- La propriété {{CSSxRef("font")}}
- La propriété {{CSSxRef("font-size")}}
- La propriété {{CSSxRef("line-height")}}
- La psécification [de dimensionnement rythmique CSS <sup>(angl.)</sup>](https://drafts.csswg.org/css-rhythm/)
