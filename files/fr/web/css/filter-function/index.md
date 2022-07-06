---
title: <filter-function>
slug: Web/CSS/filter-function
tags:
  - CSS
  - Reference
  - Type
translation_of: Web/CSS/filter-function
---
{{CSSRef}}

Le type de donnée **`<filter-function>`** représente un effet graphique qui peut modifier l'apparence d'une image. Il est notamment utilisé avec les propriétés [`filter`](/fr/docs/Web/CSS/filter) et [`backdrop-filter`](/fr/docs/Web/CSS/backdrop-filter).

## Syntaxe

Une valeur de type `<filter-function>` se construit avec l'une des fonctions listées ci-après. Chaque fonction utilise un argument et si celui-ci est invalide, aucun filtre n'est appliqué.

- [`blur()`](/fr/docs/Web/CSS/filter-function/blur())
  - : Ajoute un flou sur l'image.
- [`brightness()`](/fr/docs/Web/CSS/filter-function/brightness())
  - : Rend l'image plus claire ou plus sombre.
- [`contrast()`](/fr/docs/Web/CSS/filter-function/contrast())
  - : Augmente ou diminue le contraste de l'image.
- [`drop-shadow()`](/fr/docs/Web/CSS/filter-function/drop-shadow())
  - : Applique une ombre portée derrière l'image.
- [`grayscale()`](/fr/docs/Web/CSS/filter-function/grayscale())
  - : Convertit l'image en niveaux de gris.
- [`hue-rotate()`](/fr/docs/Web/CSS/filter-function/hue-rotate())
  - : Modifie la teinte globale de l'image.
- [`invert()`](/fr/docs/Web/CSS/filter-function/invert())
  - : Inverse les couleurs de l'image.
- [`opacity()`](/fr/docs/Web/CSS/filter-function/opacity())
  - : Rend l'image transparente.
- [`saturate()`](/fr/docs/Web/CSS/filter-function/saturate())
  - : Sursature ou désature l'image.
- [`sepia()`](/fr/docs/Web/CSS/filter-function/sepia())
  - : Convertit l'image en sépia.

## Exemples

### Comparaison des fonctions de filtre

Cet exemple fournit une image ainsi qu'un menu pour expérimenter les différentes fonctions de filtres avec un curseur pour faire varier la valeur du paramètre. En jouant sur le curseur et la fonction utilisée, l'image est mise à jour en temps réel, vous permettant de voir l'effet des différents filtres.

#### HTML

```html
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
  <li>
    <input type="range"><output></output>
  </li>
  <li>
    <p>Valeur CSS actuelle&nbsp;: <code></code></p>
  </li>
</ul>
```

#### CSS

```css
div {
  width: 300px;
  height: 300px;
  background: url(https://media.prod.mdn.mozit.cloud/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png) no-repeat center;
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

input {
  width: 60%
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

#### JavaScript

```js
const selectElem = document.querySelector('select');
const divElem = document.querySelector('div');
const slider = document.querySelector('input');
const output = document.querySelector('output');
const curValue = document.querySelector('p code');

selectElem.addEventListener('change', () => {
  setSlider(selectElem.value);
  setDiv(selectElem.value);
});

slider.addEventListener('input', () => {
  setDiv(selectElem.value);
});

function setSlider(filter) {
  if(filter === 'blur') {
    slider.value = 0;
    slider.min = 0;
    slider.max = 30;
    slider.step = 1;
    slider.setAttribute('data-unit', 'px');
  } else if(filter === 'brightness' || filter === 'contrast' || filter === 'saturate') {
    slider.value = 1;
    slider.min = 0;
    slider.max = 4;
    slider.step = 0.05;
    slider.setAttribute('data-unit', '');
  } else if(filter === 'drop-shadow') {
    slider.value = 0;
    slider.min = -20;
    slider.max = 40;
    slider.step = 1;
    slider.setAttribute('data-unit', 'px');
  } else if(filter === 'opacity') {
    slider.value = 1;
    slider.min = 0;
    slider.max = 1;
    slider.step = 0.01;
    slider.setAttribute('data-unit', '');
  } else if(filter === 'grayscale' || filter === 'invert' || filter === 'sepia') {
    slider.value = 0;
    slider.min = 0;
    slider.max = 1;
    slider.step = 0.01;
    slider.setAttribute('data-unit', '');
  } else if(filter === 'hue-rotate') {
    slider.value = 0;
    slider.min = 0;
    slider.max = 360;
    slider.step = 1;
    slider.setAttribute('data-unit', 'deg');
  }
}

function setDiv(filter) {
  if(filter === 'drop-shadow') {
    divElem.style.filter = `${selectElem.value}(${Math.round(slider.value)}${slider.getAttribute('data-unit')} ${Math.round(slider.value)}${slider.getAttribute('data-unit')} ${Math.round(Math.abs(slider.value/2))}${slider.getAttribute('data-unit')})`;
  } else {
    divElem.style.filter = `${selectElem.value}(${slider.value}${slider.getAttribute('data-unit')}`;
  }

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

#### Résultat

{{EmbedLiveSample('Comparaison_des_fonctions_de_filtre', '100%', 500)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés qui utilisent ce type de donnée&nbsp;:
  - [`filter`](/fr/docs/Web/CSS/filter)
  - [`backdrop-filter`](/fr/docs/Web/CSS/backdrop-filter)
