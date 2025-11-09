---
title: device-cmyk()
slug: Web/CSS/Reference/Values/color_value/device-cmyk
original_slug: Web/CSS/color_value/device-cmyk
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

La [fonction de type `<color>`](/fr/docs/Web/CSS/Reference/Values/Functions#les_fonctions_de_couleur) [CSS](/fr/docs/Web/CSS) **`device-cmyk()`** permet d'exprimer des couleurs dans l'espace de couleurs CMJN (CMYK en anglais), en indiquant les composantes de cyan, de magenta, de jaune et de noir.

Cette approche colorimétrique peut s'avérer utile afin de créer des supports destinés à être imprimés sur une imprimante particulière, lorsque la sortie pour des combinaisons d'encres données est connue. Le moteur CSS peut tenter une approximation de la couleur, mais le résultat sera probablement différent de ce qui sera imprimé.

## Syntaxe

```css
device-cmyk(0 81% 81% 30%)
device-cmyk(0 81% 81% 30% / .5)
device-cmyk(0 81% 81% 30% / .5, rgb(178 34 34))
```

### Valeurs

Notation fonctionnelle&nbsp;: `device-cmyk(C M Y K[ / A][, color])`

- `C`, `M`, `Y`, `K`
  - : Valeurs {{CSSXref("number")}} ou {{CSSXref("percentage")}} fournissant les composantes cyan, magenta, jaune et noir de la couleur <abbr title="Cyan, Magenta, Jaune, Noir">CMJN</abbr>.

- `A` {{optional_inline}}
  - : Une valeur {{CSSXref("&lt;alpha-value&gt;")}}, où la valeur `1` correspond à `100%` (opacité totale).

- `color` {{optional_inline}}
  - : Une couleur ({{CSSXref("&lt;color&gt;")}}) de repli optionnelle à utiliser si l'agent utilisateur ne sait pas comment convertir la couleur CMJN en RVB.

## Syntaxe formelle

{{CSSSyntax}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

Actuellement, aucun navigateur ne prend en charge cette fonctionnalité.

## Voir aussi

- Le module des [couleurs CSS](/fr/docs/Web/CSS/Guides/Colors)
- La règle @ {{cssxref("@page")}}
