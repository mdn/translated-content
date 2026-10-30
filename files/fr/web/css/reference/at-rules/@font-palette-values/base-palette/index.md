---
title: Descripteur de règle CSS `base-palette`
short-title: base-palette
slug: Web/CSS/Reference/At-rules/@font-palette-values/base-palette
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`base-palette`** de la [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) {{CSSxRef("@font-palette-values")}} est utilisé pour définir le nom ou l'index d'une palette prédéfinie à utiliser pour créer une nouvelle palette. Si la `base-palette` indiquée n'existe pas, alors la palette définie à l'index 0 est utilisée.

## Syntaxe

```css
@font-palette-values --one {
  base-palette: 1;
}
```

Le descripteur `base-palette` se définit avec un index basé sur zéro des palettes créées par le·la créateur·ice de la police.

### Valeurs

- `<index>`
  - : Définit l'index de la palette prédéfinie à utiliser.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Changer la palette par défaut d'une police

En utilisant la [police couleur Rocher <sup>(angl.)</sup>](https://www.harbortype.com/fonts/rocher-color/), cet exemple montre deux cas où la palette par défaut de la police est remplacée par une palette alternative créée par le·la créateur·ice de la police.

#### HTML

```html
<h2>palette de base par défaut</h2>
<h2 class="deux">palette de base à l'index 2</h2>
<h2 class="cinq">palette de base à l'index 5</h2>
```

#### CSS

```css
@font-face {
  font-family: "Rocher";
  src: url("[chemin-vers-la-police]/RocherColorGX.woff2") format("woff2");
}

h2 {
  font-family: "Rocher", fantasy;
}

@font-palette-values --deux {
  font-family: "Rocher";
  base-palette: 2;
}

@font-palette-values --cinq {
  font-family: "Rocher";
  base-palette: 5;
}

.deux {
  font-palette: --deux;
}

.cinq {
  font-palette: --cinq;
}
```

#### Résultat

![Exemple montrant 3 palettes de base différentes de la police couleur Rocher](./rocher-color-font-alt-base-palettes.jpg)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La règle {{CSSxRef("@font-palette-values")}}
- Le descripteur {{CSSxRef("@font-palette-values/font-family", "font-family")}}
- Le descripteur {{CSSxRef("@font-palette-values/override-colors", "override-colors")}}
- La propriété {{CSSxRef("font-palette")}}
- La propriété API {{DOMxRef("CSSFontPaletteValuesRule.basePalette")}}
