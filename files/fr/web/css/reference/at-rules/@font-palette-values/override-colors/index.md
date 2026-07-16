---
title: Descripteur de règle CSS `override-colors`
short-title: override-colors
slug: Web/CSS/Reference/At-rules/@font-palette-values/override-colors
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`override-colors`** de la [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) {{CSSxRef("@font-palette-values")}} est utilisé pour remplacer les couleurs de la [palette de base](/fr/docs/Web/CSS/Reference/At-rules/@font-palette-values/base-palette) choisie pour une police couleur.

## Syntaxe

```css
/* syntaxe de base */
override-colors: <index of color> <color>;

/* utilisant des noms de couleur */
override-colors: 0 red;

/* utilisant une couleur hexadécimale */
override-colors: 0 #ff0000;

/* utilisant rgb */
override-colors: 0 rgb(255 0 0);

/* remplaçant plusieurs couleurs */
override-colors:
  0 red,
  1 green,
  2 blue;
```

Le descripteur [override-colors](/fr/docs/Glossary/CSS_Descriptor) accepte une liste séparée par des virgules composée d'indices de couleur et de nouvelles valeurs de couleur.

L'indice de couleur commence à zéro et toute [valeur de couleur](/fr/docs/Web/CSS/Reference/Values/color_value) peut être utilisée.

Pour chaque paire indice-couleur, la couleur à l'indice spécifié dans la [palette de base](/fr/docs/Web/CSS/Reference/At-rules/@font-palette-values/base-palette) sera remplacée. Si la police couleur ne possède pas de couleur à l'indice indiqué, cette valeur sera ignorée.

### Valeurs

- `[ <integer [0,∞]> <absolute-color-base> ]`
  - : Définit l'indice d'une couleur dans une [palette de base](/fr/docs/Web/CSS/Reference/At-rules/@font-palette-values/base-palette) et la couleur avec laquelle la remplacer.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Modifier les couleurs des emojis

Cet exemple montre comment remplacer les couleurs de la police couleur [Noto Color Emoji](https://fonts.google.com/noto/specimen/Noto+Color+Emoji) pour les adapter à l'identité visuelle de votre site.

#### HTML

```html
<section class="hats">
  <div class="hat">
    <h2>Chapeau original</h2>
    <div class="emoji">🎩</div>
  </div>
  <div class="hat">
    <h2>Chapeau rouge</h2>
    <div class="emoji red-hat">🎩</div>
  </div>
</section>
```

#### CSS

```css hidden
.hats {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
```

```css
@font-face {
  font-family: "Noto Color Emoji";
  font-style: normal;
  font-weight: 400;
  src: url("https://fonts.gstatic.com/l/font?kit=Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabts6diywYkdG3gjD0U&skey=a373f7129eaba270&v=v24")
    format("woff2");
}

.emoji {
  font-family: "Noto Color Emoji", emoji;
  font-size: 3rem;
}
@font-palette-values --red {
  font-family: "Noto Color Emoji";
  override-colors:
    0 rgb(74 11 0),
    1 rgb(149 22 1),
    2 rgb(183 27 1),
    3 rgb(193 28 1),
    4 rgb(230 34 1);
}
.red-hat {
  font-palette: --red;
}
```

#### Résultat

{{EmbedLiveSample("modifier_les_couleurs_des_emojis")}}

### Modifier une couleur dans une palette de base alternative

En utilisant la police [Rocher Color Font](https://www.harbortype.com/fonts/rocher-color/), cet exemple montre comment remplacer une couleur dans la police.

#### HTML

```html
<h2 class="normal-palette">Palette normale</h2>
<h2 class="override-palette">Palette modifiée</h2>
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
@font-palette-values --override-palette {
  font-family: "Rocher";
  base-palette: 3;
}
@font-palette-values --override-palette {
  font-family: "Rocher";
  base-palette: 3;
  override-colors: 0 rebeccapurple;
}
.normal-palette {
  font-palette: --normal-palette;
}
.override-palette {
  font-palette: --override-palette;
}
```

#### Résultat

Cet exemple montre que dans la `base-palette` `3`, la couleur à l'indice 0 est remplacée par `rebeccapurple`.

![Exemple montrant la palette de base et la palette de base avec 1 couleur modifiée](override-base-palette-color.jpg)

## Specifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La règle {{CSSxRef("@font-palette-values")}}
- Le descripteur {{CSSxRef("@font-palette-values/base-palette", "base-palette")}}
- Le descripteur {{CSSxRef("@font-palette-values/font-family", "font-family")}}
- La propriété {{CSSxRef("font-palette")}}
- La propriété API {{DOMxRef("CSSFontPaletteValuesRule.overrideColors")}}
