---
title: base-palette
slug: Web/CSS/Reference/At-rules/@font-palette-values/base-palette
l10n:
  sourceCommit: 0b926fc3e79782401461d389fc9f17d522b39ed3
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`base-palette`** de la [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) {{CSSxRef("@font-palette-values")}} est utilisé pour spécifier le nom ou l'index d'une palette prédéfinie à utiliser pour créer une nouvelle palette. Si la `base-palette` indiquée n'existe pas, alors la palette définie à l'index 0 sera utilisée.

## Syntaxe

```css
@font-palette-values --one {
  base-palette: 1;
}
```

Le descripteur `base-palette` se spécifie avec un index basé sur zéro des palettes créées par le·la créateur·ice de la police.

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
<h2 class="two">palette de base à l'index 2</h2>
<h2 class="five">palette de base à l'index 5</h2>
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

@font-palette-values --two {
  font-family: "Rocher";
  base-palette: 2;
}

@font-palette-values --five {
  font-family: "Rocher";
  base-palette: 5;
}

.two {
  font-palette: --two;
}

.five {
  font-palette: --five;
}
```

#### Résultat

![Exemple montrant 3 palettes de base différentes de la police couleur Rocher](./rocher-color-font-alt-base-palettes.jpg)

## Specifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La règle {{CSSxRef("@font-palette-values")}}
- Le descripteur {{CSSxRef("@font-palette-values/font-family", "font-family")}}
- Le descripteur {{CSSxRef("@font-palette-values/override-colors", "override-colors")}}
- La propriété {{CSSxRef("font-palette")}}
- La propriété API {{DOMxRef("CSSFontPaletteValuesRule.basePalette")}}
