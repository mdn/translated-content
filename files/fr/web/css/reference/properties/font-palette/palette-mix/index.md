---
title: palette-mix()
slug: Web/CSS/Reference/Properties/font-palette/palette-mix
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`palette-mix()`** permet de créer une nouvelle valeur {{CSSxRef("font-palette")}} en mélangeant deux valeurs `font-palette` selon des pourcentages définis et des méthodes d'interpolation de couleurs.

## Syntaxe

```css
/* Mélange des palettes définies par la police */
font-palette: palette-mix(in lch, normal, dark)

/* Mélange des palettes définies par l'auteur·ice */
font-palette: palette-mix(in lch, --blues, --yellows)

/* Mélange des pourcentages variables de chaque palette */
font-palette: palette-mix(in lch, --blues 50%, --yellows 50%)
font-palette: palette-mix(in lch, --blues 70%, --yellows 30%)

/* Méthode d'interpolation des couleurs variable */
font-palette: palette-mix(in srgb, --blues, --yellows)
font-palette: palette-mix(in hsl, --blues, --yellows)
font-palette: palette-mix(in hsl shorter hue, --blues, --yellows)
```

### Valeurs

Notation fonctionnelle&nbsp;:

```plain
palette-mix(method, palette1 [p1], palette2 [p2])
```

- `method`
  - : Une donnée de type {{CSSxRef("&lt;color-interpolation-method&gt;")}} qui définit l'espace colorimétrique d'interpolation.
- `palette1`, `palette2`
  - : Les valeurs {{CSSxRef("font-palette")}} à mélanger. Cela peut être _n'importe quelles_ valeurs `font-palette`, y compris des fonctions `palette-mix()`, `normal`, `dark` et `light`.
- `p1`, `p2` {{Optional_Inline}}
  - : Les valeurs en pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) comprises entre `0%` et `100%` qui définissent la quantité de chaque palette à mélanger. Elles sont normalisées comme suit&nbsp;:
    - Si `p1` et `p2` sont omis, alors `p1 = p2 = 50%`.
    - Si `p1` est omis, alors `p1 = 100% - p2`.
    - Si `p2` est omis, alors `p2 = 100% - p1`.
    - Si `p1 = p2 = 0%`, la fonction est invalide.
    - Si `p1 + p2 ≠ 100%`, alors `p1' = p1 / (p1 + p2)` et `p2' = p2 / (p1 + p2)`, où `p1'` et `p2'` sont les résultats de la normalisation.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utiliser `palette-mix()` pour mélanger deux palettes

Cet exemple montre comment utiliser la fonction `palette-mix()` pour créer une nouvelle palette en mélangeant deux autres.

#### HTML

Le HTML contient trois paragraphes auxquels appliquer notre information de police&nbsp;:

```html
<p class="yellowPalette">Palette jaune</p>
<p class="bluePalette">Palette bleue</p>
<p class="mixedPalette">Palette mélangée</p>
```

#### CSS

Dans le CSS, on importe une police de couleur depuis Google Fonts, et on définit deux valeurs personnalisées `font-palette` avec la règle {{CSSxRef("@font-palette-values")}}. On applique ensuite trois valeurs différentes de `font-palette` aux paragraphes — `--yellow`, `--blue` et une nouvelle palette verte, créée avec `palette-mix()` pour mélanger les palettes bleue et jaune.

```css
@import "https://fonts.googleapis.com/css2?family=Nabla&display=swap";

@font-palette-values --blue-nabla {
  font-family: "Nabla";
  base-palette: 2; /* c'est la palette bleue de Nabla */
}

@font-palette-values --yellow-nabla {
  font-family: "Nabla";
  base-palette: 7; /* c'est la palette jaune de Nabla */
}

p {
  font-family: "Nabla", fantasy;
  font-size: 4rem;
  text-align: center;
  margin: 0;
}

.yellowPalette {
  font-palette: --yellow-nabla;
}

.bluePalette {
  font-palette: --blue-nabla;
}

.mixedPalette {
  font-palette: palette-mix(in lch, --blue-nabla 55%, --yellow-nabla 45%);
}
```

#### Résultat

Le résultat ressemble à ceci&nbsp;:

{{EmbedLiveSample("Utiliser `palette-mix()` pour mélanger deux palettes", "100%", 350)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("font-palette")}}
- La règle {{CSSxRef("@font-palette-values")}}
- La fonction {{CSSxRef("color_value/color-mix", "color-mix()")}}
- Le guide [des valeurs de couleur CSS](/fr/docs/Web/CSS/Guides/Colors/Color_values)
- L'entrée de glossaire {{Glossary("Color space", "Espace colorimétrique")}}
