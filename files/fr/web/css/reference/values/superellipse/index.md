---
title: superellipse()
slug: Web/CSS/Reference/Values/superellipse
original_slug: Web/CSS/superellipse
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

{{SeeCompatTable}}

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`superellipse()`** permet de définir la courbure d'une ellipse, et sert à spécifier les [formes de coins](/fr/docs/Web/CSS/corner-shape) soit directement, soit via les mots-clés {{cssxref("&lt;corner-shape-value>")}}.

## Syntaxe

```css
superellipse(infinity)
superellipse(4)
superellipse(1.7)
superellipse(0)
superellipse(-2.8)
superellipse(-3)
superellipse(-infinity)
```

### Paramètres

- {{cssxref("&lt;number>")}}
  - : Un nombre compris entre `-infinity` et `infinity` inclus.

### Valeur de retour

Une forme de superellipse.

## Description

La fonction `superellipse()` retourne une forme de superellipse, utilisée pour définir les valeurs de {{cssxref("corner-shape")}}. Une superellipse est une courbe fermée symétrique, intermédiaire entre un rectangle et une ellipse. Elle ressemble à une ellipse qui conserve les caractéristiques géométriques de ses deux axes.

La forme de superellipse est calculée à partir d'une version modifiée de l'ellipse. L'équation suivante définit une ellipse centrée à l'origine&nbsp;:

<math display="block">
  <mfrac>
    <msup>
      <mi>x</mi>
      <mn>2</mn>
    </msup>
    <msup>
      <mi>a</mi>
      <mn>2</mn>
    </msup>
  </mfrac>
  <mo>+</mo>
  <mfrac>
    <msup>
      <mi>y</mi>
      <mn>2</mn>
    </msup>
    <msup>
      <mi>b</mi>
      <mn>2</mn>
    </msup>
  </mfrac>
  <mo>=</mo>
  <mn>1</mn>
</math>

Les variables `a` et `b` correspondent aux rayons de l'ellipse, tandis que les coordonnées `x` et `y` sont des points sur la circonférence de l'ellipse.

Un cercle est une ellipse dont les rayons `a` et `b` sont de même longueur. Si `a` et `b` valent tous deux `r`, l'équation du cercle s'écrit&nbsp;:

<math display="block">
  <mrow>
    <msup>
      <mi>x</mi>
      <mn>2</mn>
    </msup>
    <mo>+</mo>
    <msup>
      <mi>y</mi>
      <mn>2</mn>
    </msup>
    <mo>=</mo>
    <msup>
      <mi>r</mi>
      <mn>2</mn>
    </msup>
  </mrow>
</math>

Dans cette équation, `x` et `y` sont les coordonnées des points sur la circonférence du cercle, et `r` est le rayon du cercle, le centre étant `(0, 0)`. L'ellipse est obtenue en étirant la forme du cercle selon l'axe `x` et/ou `y`.

Une superellipse est créée en remplaçant l'exposant `2` dans chaque cas par 2<sup>K</sup>, où `K` est l'argument passé à la fonction `superellipse()`, ce qui modifie la courbure de l'ellipse&nbsp;:

<math display="block">
  <mrow>
    <msup>
      <mi>x</mi>
      <msup>
        <mn>2</mn>
        <mi>K</mi>
      </msup>
    </msup>
    <mo>+</mo>
    <msup>
      <mi>y</mi>
      <msup>
        <mn>2</mn>
        <mi>K</mi>
      </msup>
    </msup>
    <mo>=</mo>
    <mn>1</mn>
  </mrow>
</math>

Le schéma suivant illustre différentes valeurs de `superellipse()` pour le coin supérieur droit d'un conteneur&nbsp;: `infinity`, `1`, `0`, `-1` et `-infinity`&nbsp;:

![Schéma illustrant les ellipses créées avec différentes valeurs de K, comme décrit ci-dessous](superellipse-param.svg)

- Une valeur de `K` égale à `0` crée une ligne droite. Cette valeur permet de créer des coins biseautés et correspond au mot-clé `bevel` de {{cssxref("&lt;corner-shape-value>")}}.
- Une valeur de `K` égale à `1` crée une ellipse ordinaire, correspondant au mot-clé `round`.
- Une valeur de `K` supérieure à `1` rend la forme plus carrée&nbsp;; `2` correspond au mot-clé `squircle`.
- Une valeur de `K` égale à `infinity` crée un carré parfait (correspondant au mot-clé `square`), bien que des valeurs de `K` supérieures ou égales à `10` soient pratiquement indiscernables d'un carré.
- Des valeurs négatives de `K` produisent une courbe concave, donnant des coins incurvés vers l'intérieur («&nbsp;creusés&nbsp;»). Une valeur de `K` égale à `-1` correspond au mot-clé `scoop` et `-infinity` au mot-clé `notch`.

Une superellipse négative ou positive sera symétrique à une superellipse de valeur inverse.

> [!NOTE]
> Pour toute valeur du paramètre `K` passée, la fonction `superellipse()` retournera toujours la même forme pour cette valeur. Lorsque cette valeur est appliquée à deux éléments, l'apparence du coin peut différer si la taille de la boîte ou la valeur de {{cssxref("border-radius")}} diffère.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Comparaison des valeurs `superellipse()`

Dans cet exemple, deux curseurs {{HTMLElement("input/range", "<code>&lt;input type=\"range\"&gt;</code>")}} permettent de parcourir différentes valeurs `superellipse()` pour `corner-shape` et différentes valeurs de {{cssxref("border-radius")}}, afin de comparer leurs effets sur un conteneur. Le code est masqué pour plus de clarté, mais l'explication complète de la [comparaison des valeurs superellipse](/fr/docs/Web/CSS/corner-shape#comparaison_des_valeurs_superellipse) est disponible sur la page de référence {{cssxref("corner-shape")}}.

```html hidden live-sample___value-comparison
<form>
  <div>
    <label for="superellipse-slider">Choose a superellipse() value:</label>
    <input
      type="range"
      id="superellipse-slider"
      min="-5"
      value="0"
      max="5"
      step="0.1" />
  </div>
  <div>
    <label for="radius-slider">Choose a border-radius value:</label>
    <input type="range" id="radius-slider" min="0" value="45" max="90" />
  </div>
</form>
<section></section>
```

```css hidden live-sample___value-comparison
html {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  width: fit-content;
  margin: 20px auto;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 100%;
  margin-top: 20px;
}

form div {
  margin-top: 5px;
  display: flex;
}

section {
  width: 100%;
  height: 180px;
  background-color: orange;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}

section {
  box-shadow: 1px 1px 3px gray;
}
```

```js hidden live-sample___value-comparison
const rectangle = document.querySelector("section");
const superEllipseRange = document.getElementById("superellipse-slider");
const borderRadiusRange = document.getElementById("radius-slider");

function setCorners() {
  const seValue = `superellipse(${superEllipseRange.value})`;
  rectangle.style.cornerShape = seValue;
  const brValue = `${borderRadiusRange.value}px`;
  rectangle.style.borderRadius = brValue;
  rectangle.innerHTML = `<div><code>corner-shape: ${seValue};</code><br><code>border-radius: ${brValue};</code></div>`;
}

superEllipseRange.addEventListener("input", setCorners);
borderRadiusRange.addEventListener("input", setCorners);
setCorners();
```

{{EmbedLiveSample("value-comparison", "100%", "300")}}

> [!NOTE]
> Voir aussi l'exemple de [comparaison des valeurs `<corner-shape-value>`](/fr/docs/Web/CSS/Reference/Values/corner-shape-value#comparaison_des_valeurs_corner-shape-value).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{cssxref("corner-shape")}}
- Le type de donnée {{cssxref("&lt;corner-shape-value>")}}
- Le module [bordures et décorations de boîte CSS](/fr/docs/Web/CSS/CSS_borders_and_box_decorations)
