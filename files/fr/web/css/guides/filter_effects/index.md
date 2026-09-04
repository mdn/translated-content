---
title: Effets de filtre CSS
short-title: Effets de filtre
slug: Web/CSS/Guides/Filter_effects
l10n:
  sourceCommit: 35958cdccf9d974ee47bb2ba282466725cae3416
---

Les propriétés du module **Effets de filtre CSS** permettent de définir une façon de traiter le rendu d'un élément avant qu'il ne soit affiché dans le document. Parmi ces effets, on trouve le flou et la modification de l'intensité de la couleur d'un élément.

## Effets de filtre en action

Utilisez les différents curseurs pour appliquer des effets de filtre à l'image ci-dessous.

```html hidden live-sample___filters
<article>
  <img
    src="https://mdn.github.io/shared-assets/images/examples/george_floyd_memorial_sm.jpg"
    width="600"
    height="400"
    alt="Un mémorial coloré en hommage à George Floyd et au mouvement Black Lives Matter" />
  <form>
    <fieldset>
      <legend>Sélectionnez vos filtres</legend>
      <label>
        <input type="range" name="blur" value="0" min="0" max="1" step="0.1" />
        blur()
      </label>
      <label>
        <input
          type="range"
          name="brightness"
          value="1"
          min="0"
          max="2"
          step="0.1" />
        brightness()
      </label>
      <label>
        <input
          type="range"
          name="contrast"
          value="1"
          min="0"
          max="2"
          step="0.1" />
        contrast()
      </label>
      <label>
        <input
          type="range"
          name="dropShadow"
          value="0"
          min="-1"
          max="1"
          step="0.1" />
        drop-shadow()
      </label>
      <label>
        <input
          type="range"
          name="grayscale"
          value="0"
          min="0"
          max="1"
          step="0.1" />
        grayscale()
      </label>
      <label>
        <input
          type="range"
          name="hueRotate"
          value="0"
          min="-1"
          max="1"
          step="0.1" />
        hue-rotate()
      </label>
      <label>
        <input
          type="range"
          name="invert"
          value="0"
          min="0"
          max="1"
          step="0.1" />
        invert()
      </label>
      <label>
        <input
          type="range"
          name="opacity"
          value="1"
          min="0"
          max="1"
          step="0.1" />
        opacity()
      </label>
      <label>
        <input
          type="range"
          name="saturate"
          value="1"
          min="0"
          max="2"
          step="0.1" />
        saturate()
      </label>
      <label>
        <input type="range" name="sepia" value="0" min="0" max="1" step="0.1" />
        sepia()
      </label>
      <button type="reset">Réinitialiser</button>
    </fieldset>
  </form>
</article>

<pre><output></output></pre>

<p>Image par <cite>DigitalNomad</cite></p>
```

```css hidden live-sample___filters
article {
  display: grid;
  grid-template-columns: minmax(200px, 800px) 15em;
  gap: 1rem;
  max-width: 100%;
}
label {
  display: block;
  font-family: sans-serif;
}
input {
  vertical-align: middle;
  margin-right: 0.25em;
  max-width: 50%;
}
output {
  white-space: normal;
  overflow-wrap: break-word;
  display: block;
  width: 100%;
}

img {
  margin: 1rem;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
}
```

```js hidden live-sample___filters
const image = document.querySelector("img");
const controls = document.querySelectorAll("input");
const output = document.querySelector("output");

for (control of controls) {
  control.addEventListener("change", () => {
    /* exécute la fonction */
    changeCSS();
  });
}
document.querySelector("button").addEventListener("click", () => {
  setTimeout(() => {
    changeCSS();
  }, 50);
});

function changeCSS() {
  let currentFilter = "filtres : ";
  for (const filter of [
    blur(),
    brightness(),
    contrast(),
    dropShadow(),
    grayscale(),
    hueRotate(),
    invert(),
    opacity(),
    saturate(),
    sepia(),
  ]) {
    currentFilter += filter;
  }
  currentFilter += ";";
  image.setAttribute("style", currentFilter);
  output.innerText = currentFilter;
}
function blur() {
  let blurValue = document.getElementsByName("blur")[0].value;
  return blurValue === "0" ? "" : `blur(${blurValue}rem) `;
}
function brightness() {
  let brightnessValue = document.getElementsByName("brightness")[0].value;
  return brightnessValue.toString() === "1"
    ? ""
    : `brightness(${brightnessValue}) `;
}
function contrast() {
  let contrastValue = document.getElementsByName("contrast")[0].value;
  return contrastValue === 1 ? "" : `contrast(${contrastValue}) `;
}
function dropShadow() {
  let dropShadowValue = document.getElementsByName("dropShadow")[0].value;
  return dropShadowValue === 0
    ? ""
    : `drop-shadow(${dropShadowValue}rem ${dropShadowValue}rem 0rem orange) `;
}
function grayscale() {
  let grayscaleValue = document.getElementsByName("grayscale")[0].value;
  return grayscaleValue === 0 ? "" : `grayscale(${grayscaleValue}) `;
}
function hueRotate() {
  let hueRotateValue = document.getElementsByName("hueRotate")[0].value;
  return hueRotateValue === 0 ? "" : `hue-rotate(${hueRotateValue}turn) `;
}
function invert() {
  let invertValue = document.getElementsByName("invert")[0].value;
  return invertValue === 0 ? "" : `invert(${invertValue}) `;
}
function opacity() {
  let opacityValue = document.getElementsByName("opacity")[0].value;
  return opacityValue === 1 ? "" : `opacity(${opacityValue}) `;
}
function saturate() {
  let saturateValue = document.getElementsByName("saturate")[0].value;
  return saturateValue === 1 ? "" : `saturate(${saturateValue}) `;
}
function sepia() {
  let sepiaValue = document.getElementsByName("sepia")[0].value;
  return sepiaValue === 0 ? "" : `sepia(${sepiaValue})`;
}
```

{{EmbedLiveSample("filters", "", 550)}}

## Référence

### Propriétés

- {{CSSxRef("backdrop-filter")}}
- {{CSSxRef("filter")}}

### Fonctions

- {{CSSxRef("filter-function/blur", "blur()")}}
- {{CSSxRef("filter-function/brightness", "brightness()")}}
- {{CSSxRef("filter-function/contrast", "contrast()")}}
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
- {{CSSxRef("filter-function/grayscale", "grayscale()")}}
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
- {{CSSxRef("filter-function/invert", "invert()")}}
- {{CSSxRef("filter-function/opacity", "opacity()")}}
- {{CSSxRef("filter-function/saturate", "saturate()")}}
- {{CSSxRef("filter-function/sepia", "sepia()")}}

## Guides

- [Utiliser les effets de filtre CSS](/fr/docs/Web/CSS/Guides/Filter_effects/Using_filter_effects)
  - : Présentation des concepts liés aux effets de filtre CSS, incluant les propriétés, les fonctions de filtre et les filtres SVG, avec une explication des valeurs de filtre, de l'ordre des sources et des interactions entre valeurs.

## Concepts associés

- Le type de donnée {{CSSxRef("&lt;image&gt;")}}
- Le type de donnée {{CSSxRef("&lt;filter-function&gt;")}}

<!-- -->

- La propriété CSS {{CSSxRef("background-image")}}
- La propriété CSS {{CSSxRef("background-blend-mode")}}
- La propriété CSS {{CSSxRef("mix-blend-mode")}}

<!-- -->

- Le terme du glossaire {{Glossary("interpolation")}}

<!-- -->

- La propriété SVG {{SVGAttr("color-interpolation-filters")}}

## Spécifications

{{Specifications}}

## Voir aussi

- Les propriétés du module [Composition et fusion CSS](/fr/docs/Web/CSS/Guides/Compositing_and_blending) permettent de fusionner les couches d'arrière-plan d'un élément et de fusionner un élément avec son conteneur.
- L'élément SVG {{SVGElement("filter")}} et les primitives de filtre SVG&nbsp;: {{SVGElement("feSpotLight")}}, {{SVGElement("feBlend")}}, {{SVGElement("feColorMatrix")}}, {{SVGElement("feComponentTransfer")}}, {{SVGElement("feComposite")}}, {{SVGElement("feConvolveMatrix")}}, {{SVGElement("feDiffuseLighting")}}, {{SVGElement("feDisplacementMap")}}, {{SVGElement("feDropShadow")}}, {{SVGElement("feFlood")}}, {{SVGElement("feGaussianBlur")}}, {{SVGElement("feImage")}}, {{SVGElement("feMerge")}}, {{SVGElement("feMorphology")}}, {{SVGElement("feOffset")}}, {{SVGElement("feSpecularLighting")}}, {{SVGElement("feTile")}}, {{SVGElement("feTurbulence")}}
