---
title: <hue>
slug: Web/CSS/Reference/Values/hue
original_slug: Web/CSS/hue
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<hue>`** représente l'angle de teinte d'une couleur.
Il est utilisé dans les fonctions couleur qui acceptent la teinte exprimée comme une seule valeur, en particulier les notations fonctionnelles {{CSSXref("color_value/hsl", "hsl()")}}, {{CSSXref("color_value/hwb", "hwb()")}}, {{CSSXref("color_value/lch", "lch()")}} et {{CSSXref("color_value/oklch", "oklch()")}}.

## Syntaxe

Une valeur `<hue>` peut être soit un `<angle>`, soit un nombre (`<number>`).

### Valeurs

- {{CSSXref("&lt;angle&gt;")}}
  - : Un angle exprimé en degrés, grades, radians ou tours à l'aide de `deg`, `grad`, `rad` ou `turn` respectivement.
- `<number>`
  - : Un nombre réel, représentant des degrés de l'angle de teinte.

Comme un `<angle>` est périodique, `<hue>` est normalisé dans l'intervalle `[0deg, 360deg)`. Il s'enroule implicitement de sorte que `480deg` équivaut à `120deg`, `-120deg` équivaut à `240deg`, `-1turn` équivaut à `1turn`, etc.

## Description

![Une roue chromatique sRGB](color_wheel.svg)

La roue chromatique ci-dessus montre les teintes à tous les angles dans l'espace colorimétrique [sRGB](https://fr.wikipedia.org/wiki/SRGB) {{Glossary("color space", "espace colorimétrique")}}. En particulier, _rouge_ est à `0deg`, _jaune_ à `60deg`, _vert_ à `120deg`, _cyan_ à `180deg`, _bleu_ à `240deg` et _magenta_ à `300deg`.

Les angles correspondant à des teintes particulières diffèrent selon l'espace colorimétrique. Par exemple, l'angle de teinte du vert sRGB est `120deg` dans l'espace sRGB, mais `134,39deg` dans l'espace CIELAB.

Le tableau suivant liste les couleurs typiques à différents angles dans les espaces colorimétriques sRGB (utilisé par {{CSSXref("color_value/hsl", "hsl()")}} et {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (utilisé par {{CSSXref("color_value/lch", "lch()")}}) et Oklab (utilisé par {{CSSXref("color_value/oklch", "oklch()")}})&nbsp;:

<table>
  <colgroup>
    <col />
    <col span="6" width="15%" />
  </colgroup>
  <thead>
    <tr>
      <th></th>
      <th scope="col">0°</th>
      <th scope="col">60°</th>
      <th scope="col">120°</th>
      <th scope="col">180°</th>
      <th scope="col">240°</th>
      <th scope="col">300°</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">sRGB</th>
      <td
        style="background: hsl(0 100% 50%);"
        title="hsl(0 100% 50%)"></td>
      <td
        style="background: hsl(60 100% 50%);"
        title="hsl(60 100% 50%)"></td>
      <td
        style="background: hsl(120 100% 50%);"
        title="hsl(120 100% 50%)"></td>
      <td
        style="background: hsl(180 100% 50%);"
        title="hsl(180 100% 50%)"></td>
      <td
        style="background: hsl(240 100% 50%);"
        title="hsl(240 100% 50%)"></td>
      <td
        style="background: hsl(300 100% 50%);"
        title="hsl(300 100% 50%)"></td>
    </tr>
    <tr>
      <th scope="row">CIELAB</th>
      <td
        style="background: lch(50% 50% 0);"
        title="lch(50% 50% 0)"></td>
      <td
        style="background: lch(65% 55% 60);"
        title="lch(65% 55% 60)"></td>
      <td
        style="background: lch(90% 65% 120);"
        title="lch(90% 65% 120)"></td>
      <td
        style="background: lch(90% 35% 180);"
        title="lch(90% 35% 180)"></td>
      <td
        style="background: lch(75% 25% 240);"
        title="lch(75% 25% 240)"></td>
      <td
        style="background: lch(40% 70% 300);"
        title="lch(40% 70% 300)"></td>
    </tr>
    <tr>
      <th scope="row">Oklab</th>
      <td
        style="background: oklch(65% 65% 0);"
        title="oklch(65% 65% 0)"></td>
      <td
        style="background: oklch(75% 40% 60);"
        title="oklch(75% 40% 60)"></td>
      <td
        style="background: oklch(90% 50% 120);"
        title="oklch(90% 50% 120)"></td>
      <td
        style="background: oklch(90% 35% 180);"
        title="oklch(90% 35% 180)"></td>
      <td
        style="background: oklch(70% 40% 240);"
        title="oklch(70% 40% 240)"></td>
      <td
        style="background: oklch(55% 70% 300);"
        title="oklch(55% 70% 300)"></td>
    </tr>
  </tbody>
</table>

## Interpolation des valeurs `<hue>`

Les valeurs `<hue>` sont interpolées comme des valeurs {{CSSXref("&lt;angle&gt;")}}, et l'algorithme d'interpolation par défaut est [plus courte](/fr/docs/Web/CSS/Reference/Values/hue-interpolation-method#plus_courte). Dans certaines fonctions CSS liées à la couleur, cela peut être remplacé par le composant {{CSSXref("&lt;hue-interpolation-method&gt;")}}.

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Modifier la teinte d'une couleur à l'aide d'un curseur

L'exemple suivant montre l'effet du changement de la valeur `hue` de la notation fonctionnelle {{CSSXref("color_value/hsl", "hsl()")}} sur une couleur.

#### HTML

```html
<input type="range" min="0" max="360" value="0" id="hue-slider" />
<p>Hue: <span id="hue-value">0deg</span></p>
<div id="box"></div>
```

#### CSS

```css hidden
div {
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 1px solid black;
}
p {
  font-family: sans-serif;
}
span {
  font-family: monospace;
  background: rgb(0 0 0 / 10%);
  padding: 3px;
}
#hue-slider {
  width: 90%;
}
```

```css
#box {
  background-color: hsl(0 100% 50%);
}
```

#### JavaScript

```js
const hue = document.querySelector("#hue-slider");
const box = document.querySelector("#box");
hue.addEventListener("input", () => {
  box.style.backgroundColor = `hsl(${hue.value} 100% 50%)`;
  document.querySelector("#hue-value").textContent = `${hue.value}deg`;
});
```

#### Résultat

{{EmbedLiveSample("Modifier la teinte d'une couleur à l'aide d'un curseur", "100%", "200")}}

### Approximation des teintes rouges dans différents espaces colorimétriques

L'exemple suivant montre une couleur rouge similaire dans différents espaces colorimétriques.
Les valeurs dans les fonctions `lch()` et `oklch()` sont arrondies pour plus de lisibilité.

#### HTML

```html
<div data-color="hsl-red">hsl()</div>
<div data-color="hwb-red">hwb()</div>
<div data-color="lch-red">lch()</div>
<div data-color="oklch-red">oklch()</div>
```

#### CSS

```css
[data-color="hsl-red"] {
  /* hsl(<hue> <saturation> <lightness>) */
  background-color: hsl(0 100% 50%);
}
[data-color="hwb-red"] {
  /* hwb(<hue> <whiteness> <blackness>) */
  background-color: hwb(0 0% 0%);
}
[data-color="lch-red"] {
  /* lch(<lightness> <chroma> <hue>) */
  background-color: lch(50 150 40);
}
[data-color="oklch-red"] {
  /* oklch(<lightness> <chroma> <hue>) */
  background-color: oklch(0.6 0.4 20);
}
```

```css hidden
div {
  font-family: monospace;
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 1px solid black;
  display: inline-block;
}
```

#### Résultat

{{EmbedLiveSample("Approximation des teintes rouges dans différents espaces colorimétriques", "100%", "150")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de donnée {{CSSXref("&lt;color&gt;")}}
- Le type de donnée {{CSSXref("&lt;hue-interpolation-method&gt;")}}
