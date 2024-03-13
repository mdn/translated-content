---
title: line-height-step
slug: Web/CSS/line-height-step
---

{{CSSRef}}{{Non-standard_header}}

La propriété **`line-height-step`** définit le pas de hauteur des boîtes de ligne. Quand le pas est positif, les hauteurs des boîtes de ligne sont arrondies au pas le plus proche. Les valeurs négatives sont invalides.

```css
/* Valeurs avec une longueur */
line-height-step: 18pt;
```

## Syntaxe

La propriété `line-height-step` peut être définie avec une valeur de type [`<length>`](#length).

### Valeurs

- `<length>`
  - : La longueur indiquée est utilisée pour calculer le « pas » pour la hauteur de la boîte de chaque ligne. Voir {{cssxref("&lt;length&gt;")}} pour plus d'informations sur ce type de valeur.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

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

Voici le résultat obtenu avec une capture d'écran :

![How the line-height-step property affects the appearance of text.](line-grid-center.png)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("font")}}
- {{cssxref("font-size")}}
- {{cssxref("line-height")}}
