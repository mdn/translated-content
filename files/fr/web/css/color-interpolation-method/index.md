---
title: <color-interpolation-method>
slug: Web/CSS/color-interpolation-method
l10n:
  sourceCommit: a6d1fd388b053e6fc6ce21003348f34d0ef8115f
---

Le [type de donnée](/fr/docs/Web/CSS/CSS_values_and_units/CSS_data_types) [CSS](/fr/docs/Web/CSS) **`<color-interpolation-method>`** représente l'espace colorimétrique utilisé pour l'interpolation entre des valeurs {{CSSXref("&lt;color&gt;")}}. Il peut être utilisé pour remplacer l'espace colorimétrique d'interpolation par défaut dans les notations fonctionnelles liées à la couleur comme {{CSSXref("color_value/color-mix", "color-mix()")}} et {{CSSXref("gradient/linear-gradient", "linear-gradient()")}}.

Lors de l'interpolation de valeurs `<color>`, l'espace colorimétrique d'interpolation par défaut est Oklab.

## Syntaxe

`<color-interpolation-method>` précise si l'interpolation doit utiliser un espace colorimétrique rectangulaire ou polaire, avec éventuellement une méthode d'interpolation de la teinte&nbsp;:

```plain
in <rectangular-color-space>
// ou
in <polar-color-space>[ <hue-interpolation method>]
```

### Valeurs

- `<rectangular-color-space>`
  - : L'un des mots-clés&nbsp;: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `lab`, `oklab`, `xyz`, `xyz-d50` ou `xyz-d65`.

- `<polar-color-space>`
  - : L'un des mots-clés&nbsp;: `hsl`, `hwb`, `lch` ou `oklch`.

- {{CSSXref("&lt;hue-interpolation-method&gt;")}} {{optional_inline}}
  - : L'algorithme d'interpolation de la teinte. La valeur par défaut est `shorter hue`.

- `<custom-color-space>`
  - : Un {{CSSXref("&lt;dashed-ident&gt;")}} faisant référence à un {{CSSXref("@color-profile")}} personnalisé.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Comparaison des espaces colorimétriques d'interpolation avec des dégradés

L'exemple suivant montre l'effet de l'utilisation de différents espaces colorimétriques d'interpolation pour {{CSSXref("gradient/linear-gradient", "linear-gradient()")}}.

#### HTML

```html
<div>sRVB&nbsp;:</div>
<div class="gradient srgb"></div>
<div>Oklab&nbsp;:</div>
<div class="gradient oklab"></div>
<div>Oklch (avec <code>longer hue</code>)&nbsp;:</div>
<div class="gradient oklch-longer"></div>
```

#### CSS

```css
.gradient {
  height: 50px;
  width: 100%;
}
.srgb {
  background-image: linear-gradient(in srgb to right, blue, red);
}
.oklab {
  background-image: linear-gradient(in oklab to right, blue, red);
}
.oklch-longer {
  background-image: linear-gradient(in oklch longer hue to right, blue, red);
}
```

#### Résultat

{{EmbedLiveSample("comparaison_des_espaces_colorimétriques_dinterpolation_avec_des_dégradés", "100%", 250)}}

### Interpolation des couleurs dans les dégradés répétitifs

L'exemple suivant montre comment spécifier un espace colorimétrique lors de l'interpolation des couleurs dans des dégradés répétitifs.
Trois boîtes présentent différents types de dégradés répétitifs utilisant les fonctions {{CSSXref("repeating-conic-gradient()")}}, {{CSSXref("repeating-linear-gradient()")}} et {{CSSXref("repeating-radial-gradient()")}}.
La première boîte utilise l'espace colorimétrique Lab pour interpoler entre deux valeurs de couleur.
La deuxième et la troisième boîtes utilisent OkLCh et fournissent également un {{CSSXref("&lt;hue-interpolation-method&gt;")}} pour spécifier la méthode d'interpolation de la teinte.

#### HTML

```html
<div class="gradient conic">conique</div>
<div class="gradient linear">linéaire</div>
<div class="gradient radial">radial</div>
```

#### CSS

Nous avons utilisé les mêmes deux couleurs dans chaque dégradé pour illustrer les différents effets de {{CSSXref("&lt;hue-interpolation-method&gt;")}} et {{glossary("color space", "espace colorimétrique")}} sur l'interpolation des couleurs dans les dégradés.

```css hidden
.gradient {
  height: 200px;
  width: 200px;
  display: inline-block;
  font-family: monospace;
  margin: 10px;
  font-size: 16px;
}
```

```css
.conic {
  background-image: repeating-conic-gradient(
    in lab,
    burlywood,
    blueviolet 120deg
  );
}

.linear {
  background-image: repeating-linear-gradient(
    in oklch,
    burlywood,
    blueviolet 75px
  );
}

.radial {
  background-image: repeating-radial-gradient(
    in oklch longer hue,
    blueviolet 50px,
    burlywood 100px
  );
}
```

#### Résultat

{{EmbedLiveSample("interpolation_des_couleurs_dans_les_dégradés_répétitifs", "100%", 250)}}

La comparaison entre la première et la deuxième boîte montre la différence d'interpolation entre deux couleurs dans des espaces colorimétriques différents.
La comparaison entre la deuxième et la troisième boîte met en évidence la différence entre les {{CSSXref("&lt;hue-interpolation-method&gt;")}}, la dégradé linéaire utilisant la méthode courte (par défaut) et la dégradé radiale utilisant la méthode longue.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSXref("&lt;color&gt;")}}, {{CSSXref("&lt;gradient&gt;")}}
- {{CSSXref("&lt;hue-interpolation-method&gt;")}}
