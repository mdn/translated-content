---
title: <filter-function>
slug: Web/CSS/Reference/Values/filter-function
original_slug: Web/CSS/filter-function
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<filter-function>`** représente un effet graphique qui peut modifier l'apparence d'une image. Il est notamment utilisé avec les propriétés {{CSSxRef("filter")}} et {{CSSxRef("backdrop-filter")}}.

## Syntaxe

Une valeur de type `<filter-function>` se construit avec l'une des fonctions listées ci-après. Chaque fonction utilise un argument et si celui-ci est invalide, aucun filtre n'est appliqué.

- {{CSSxRef("filter-function/blur", "blur()")}}
  - : Floute l'image.
- {{CSSxRef("filter-function/brightness", "brightness()")}}
  - : Rend l'image plus claire ou plus sombre.
- {{CSSxRef("filter-function/contrast", "contrast()")}}
  - : Augmente ou diminue le contraste de l'image.
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - : Applique une ombre portée derrière l'image.
- {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - : Convertit l'image en niveaux de gris.
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - : Modifie la teinte globale de l'image.
- {{CSSxRef("filter-function/invert", "invert()")}}
  - : Inverse les couleurs de l'image.
- {{CSSxRef("filter-function/opacity", "opacity()")}}
  - : Rend l'image transparente.
- {{CSSxRef("filter-function/saturate", "saturate()")}}
  - : Sature ou désature fortement l'image.
- {{CSSxRef("filter-function/sepia", "sepia()")}}
  - : Convertit l'image en sépia.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Comparaison des fonctions de filtre

Cet exemple fournit une image, un menu déroulant pour choisir entre les différents types de fonctions de filtre, et un curseur pour faire varier la valeur utilisée dans la fonction de filtre. La modification des contrôles met à jour l'effet de filtre en temps réel, ce qui permet d'observer l'effet de chaque filtre.

Le menu déroulant permet de sélectionner le nom de la fonction, et le curseur règle la valeur du paramètre pour cette fonction. Pour `drop-shadow`, la valeur est utilisée à la fois pour le décalage horizontal et vertical, et le rayon est fixé à la moitié de cette valeur.

```html hidden live-sample___filter-functions
<div></div>
<ul>
  <li>
    <label for="filter-select">Choisissez une fonction de filtre&nbsp;:</label>
    <select id="filter-select">
      <option selected>blur</option>
      <option>brightness</option>
      <option>contrast</option>
      <option>drop-shadow</option>
      <option>grayscale</option>
      <option>hue-rotate</option>
      <option>invert</option>
      <option>opacity</option>
      <option>saturate</option>
      <option>sepia</option>
    </select>
  </li>
  <li><input type="range" /><output></output></li>
  <li>
    <p>Valeur CSS actuelle&nbsp;: <code></code></p>
  </li>
</ul>
```

```css hidden live-sample___filter-functions
div {
  width: 100%;
  height: 512px;
  background-image: url("https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png");
  background-repeat: no-repeat;
  background-position: center center;
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

input {
  width: 60%;
}

output {
  width: 5%;
  text-align: center;
}

select {
  width: 40%;
  margin-left: 2px;
}
```

```js hidden live-sample___filter-functions
const selectElem = document.querySelector("select");
const divElem = document.querySelector("div");
const slider = document.querySelector("input");
const output = document.querySelector("output");
const curValue = document.querySelector("p code");

selectElem.addEventListener("change", () => {
  setSlider(selectElem.value);
  setDiv(selectElem.value);
});

slider.addEventListener("input", () => {
  setDiv(selectElem.value);
});

function setSlider(filter) {
  switch (filter) {
    case "blur":
      slider.value = 0;
      slider.min = 0;
      slider.max = 30;
      slider.step = 1;
      slider.setAttribute("data-unit", "px");
      break;
    case "brightness":
    case "contrast":
    case "saturate":
      slider.value = 1;
      slider.min = 0;
      slider.max = 4;
      slider.step = 0.05;
      slider.setAttribute("data-unit", "");
      break;
    case "drop-shadow":
      slider.value = 0;
      slider.min = -20;
      slider.max = 40;
      slider.step = 1;
      slider.setAttribute("data-unit", "px");
      break;
    case "opacity":
      slider.value = 1;
      slider.min = 0;
      slider.max = 1;
      slider.step = 0.01;
      slider.setAttribute("data-unit", "");
      break;
    case "grayscale":
    case "invert":
    case "sepia":
      slider.value = 0;
      slider.min = 0;
      slider.max = 1;
      slider.step = 0.01;
      slider.setAttribute("data-unit", "");
      break;
    case "hue-rotate":
      slider.value = 0;
      slider.min = 0;
      slider.max = 360;
      slider.step = 1;
      slider.setAttribute("data-unit", "deg");
      break;
    default:
      console.error("Jeu de filtre inconnu");
  }
}

function setDiv(filter) {
  const unit = slider.getAttribute("data-unit");
  const offset = `${Math.round(slider.value)}${unit}`;
  const radius = `${Math.round(Math.abs(slider.value / 2))}${unit}`;
  divElem.style.filter =
    filter === "drop-shadow"
      ? `${selectElem.value}(${offset} ${offset} ${radius})`
      : `${selectElem.value}(${slider.value}${unit})`;

  updateOutput();
  updateCurValue();
}

function updateOutput() {
  output.textContent = slider.value;
}

function updateCurValue() {
  curValue.textContent = `filter: ${divElem.style.filter}`;
}

setSlider(selectElem.value);
setDiv(selectElem.value);
```

{{EmbedLiveSample("filter-functions", "", "700px")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés qui utilisent ce type de donnée&nbsp;:
  - {{CSSxRef("filter")}}
  - {{CSSxRef("backdrop-filter")}}
