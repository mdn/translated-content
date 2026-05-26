---
title: Bordures et décorations de boîte CSS
short-title: Bordures et décorations de boîte
slug: Web/CSS/Guides/Borders_and_box_decorations
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Le module de **bordures et décorations de boîte CSS** fournit des propriétés permettant d'ajouter des bordures, des formes de coins,et des ombres de boîte aux éléments. Ce module étend les bordures et décorations de boîte introduites dans le module [Arrière-plans et bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders), en ajoutant les propriétés {{CSSxRef("corner-shape")}} et `border-shape`, les propriétés logiques {{CSSxRef("border-radius")}}, les propriétés longues pour la propriété {{CSSxRef("box-shadow")}} et des propriétés pour créer des bordures partielles.

## Bordures et décorations de boîte en action

Sélectionnez une valeur `superellipse()` dans le menu déroulant pour changer la forme de la bordure. Utilisez le curseur pour modifier la taille du rayon de la bordure. Cochez la case pour afficher ou masquer l'ombre de la boîte.

```html hidden
<p>
  <label for="choix-forme-coin"
    >Choisissez une valeur <code>superellipse()</code>&nbsp;:</label
  >
  <select id="choix-forme-coin">
    <option>superellipse(infinity)</option>
    <option>superellipse(5)</option>
    <option>superellipse(3)</option>
    <option>superellipse(2)</option>
    <option>superellipse(1.5)</option>
    <option>superellipse(1)</option>
    <option>superellipse(0.5)</option>
    <option>superellipse(0)</option>
    <option>superellipse(-0.5)</option>
    <option selected>superellipse(-1)</option>
    <option>superellipse(-1.5)</option>
    <option>superellipse(-2)</option>
    <option>superellipse(-3)</option>
    <option>superellipse(-5)</option>
    <option>superellipse(-infinity)</option>
  </select>
</p>
<p>
  <label for="rayon"
    >Choisir une valeur <code>border-radius</code>&nbsp;:</label
  >
  <input
    type="range"
    step="5"
    min="0"
    max="100"
    value="30"
    id="rayon"
    list="tens" />
  <datalist id="tens">
    <option value="0" label="0"></option>
    <option value="20" label="20px"></option>
    <option value="40" label="40px"></option>
    <option value="60" label="60px"></option>
    <option value="80" label="80px"></option>
    <option value="100" label="100px"></option>
  </datalist>
</p>

<p>
  <input type="checkbox" id="check" />
  <label for="check">Basculer l'ombre de la boîte</label>
</p>
<div></div>
```

```css hidden
div {
  width: 100%;
  height: 200px;
  background-color: plum;
  background-image:
    repeating-linear-gradient(transparent 0 19px, #00000022 19px 20px),
    repeating-linear-gradient(to left, transparent 0 19px, #00000022 19px 20px);
}

div {
  box-shadow: 3px 3px 5px rgb(0 0 0 / 0.5);
  border-radius: 30px;
}
body:has(input:checked) div {
  box-shadow: none;
}

@layer page-setup {
  html {
    font-family: "Helvetica", "Arial", sans-serif;
  }
  body {
    max-width: 600px;
    min-width: fit-content;
    margin: 20px auto;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  select {
    padding: 3px 5px;
  }
  code {
    font-weight: bolder;
  }
}
```

```js hidden
const rectangle = document.querySelector("div");
const select = document.querySelector("select");
const range = document.getElementById("rayon");

function definirFormeCooin() {
  rectangle.style.cornerShape = select.value;
  rectangle.style.borderRadius = `${range.value}px`;
  rectangle.innerHTML = `<pre>div {
  corner-shape: ${select.value};
  border-radius: ${range.value}px;
}</pre>`;
}

select.addEventListener("change", definirFormeCooin);
range.addEventListener("input", definirFormeCooin);
definirFormeCooin();
```

{{EmbedLiveSample("backgrounds", "", 350)}}

## Référence

### Propriétés

- {{CSSxRef("border-block")}}
- {{CSSxRef("border-block-color")}}
- {{CSSxRef("border-block-end")}}
- {{CSSxRef("border-block-end-color")}}
- {{CSSxRef("border-block-end-style")}}
- {{CSSxRef("border-block-end-width")}}
- {{CSSxRef("border-block-start")}}
- {{CSSxRef("border-block-start-color")}}
- {{CSSxRef("border-block-start-style")}}
- {{CSSxRef("border-block-start-width")}}
- {{CSSxRef("border-block-style")}}
- {{CSSxRef("border-block-width")}}
- {{CSSxRef("border-bottom")}}
- {{CSSxRef("border-bottom-color")}}
- {{CSSxRef("border-bottom-left-radius")}}
- {{CSSxRef("border-bottom-right-radius")}}
- {{CSSxRef("border-bottom-style")}}
- {{CSSxRef("border-bottom-width")}}
- {{CSSxRef("border-color")}}
- {{CSSxRef("border-end-end-radius")}}
- {{CSSxRef("border-end-start-radius")}}
- {{CSSxRef("border-inline")}}
- {{CSSxRef("border-inline-color")}}
- {{CSSxRef("border-inline-end")}}
- {{CSSxRef("border-inline-end-color")}}
- {{CSSxRef("border-inline-end-style")}}
- {{CSSxRef("border-inline-end-width")}}
- {{CSSxRef("border-inline-start")}}
- {{CSSxRef("border-inline-start-color")}}
- {{CSSxRef("border-inline-start-style")}}
- {{CSSxRef("border-inline-start-width")}}
- {{CSSxRef("border-inline-style")}}
- {{CSSxRef("border-inline-width")}}
- {{CSSxRef("border-left")}}
- {{CSSxRef("border-left-color")}}
- {{CSSxRef("border-left-style")}}
- {{CSSxRef("border-left-width")}}
- {{CSSxRef("border-radius")}}
- {{CSSxRef("border-right")}}
- {{CSSxRef("border-right-color")}}
- {{CSSxRef("border-right-style")}}
- {{CSSxRef("border-right-width")}}
- {{CSSxRef("border-start-end-radius")}}
- {{CSSxRef("border-start-start-radius")}}
- {{CSSxRef("border-top")}}
- {{CSSxRef("border-top-color")}}
- {{CSSxRef("border-top-left-radius")}}
- {{CSSxRef("border-top-right-radius")}}
- {{CSSxRef("border-top-style")}}
- {{CSSxRef("border-top-width")}}
- {{CSSxRef("box-shadow")}}
- {{CSSxRef("corner-block-end-shape")}}
- {{CSSxRef("corner-block-start-shape")}}
- {{CSSxRef("corner-bottom-left-shape")}}
- {{CSSxRef("corner-bottom-right-shape")}}
- {{CSSxRef("corner-bottom-shape")}}
- {{CSSxRef("corner-end-end-shape")}}
- {{CSSxRef("corner-end-start-shape")}}
- {{CSSxRef("corner-inline-end-shape")}}
- {{CSSxRef("corner-inline-start-shape")}}
- {{CSSxRef("corner-left-shape")}}
- {{CSSxRef("corner-right-shape")}}
- {{CSSxRef("corner-shape")}}
- {{CSSxRef("corner-start-end-shape")}}
- {{CSSxRef("corner-start-start-shape")}}
- {{CSSxRef("corner-top-left-shape")}}
- {{CSSxRef("corner-top-right-shape")}}
- {{CSSxRef("corner-top-shape")}}

Le module des bordures CSS et décorations de boîte niveau 4 introduit également les propriétés `border-shape`, `border-limit` et `border-clip`, ainsi que les propriétés longues `border-clip-bottom`, `border-clip-left`, `border-clip-right` et `border-clip-top`. Actuellement, aucun navigateur ne prend en charge ces fonctionnalités. Le module introduit également des propriétés composants pour les propriétés bien prises en charge {{CSSxRef("border-radius")}} et {{CSSxRef("box-shadow")}}, y compris `border-block-end-radius`, `border-block-start-radius`, `border-bottom-radius`, `border-inline-end-radius`, `border-inline-start-radius`, `border-right-radius`, `border-top-radius`, `box-shadow-blur`, `box-shadow-color`, `box-shadow-offset`, `box-shadow-position` et `box-shadow-spread`. Ces propriétés composants ne sont également pas encore prises en charge.

### Types de donnée

- {{CSSxRef("corner-shape-value")}}

### Fonctions

- {{CSSxRef("superellipse()")}}

## Guides

- [Apprendre CSS&nbsp;: le modèle de boîte](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Apprenez comment les bordures et autres propriétés du modèle de boîte impactent le modèle de boîte CSS.

## Concepts associés

- La propriété {{CSSxRef("box-sizing")}}
- La propriété {{CSSxRef("box-decoration-break")}}
- La propriété {{CSSxRef("text-shadow")}}
- Le type de donnée {{CSSxRef("url_value", "&lt;url&gt;")}}
- Le type de donnée {{CSSxRef("&lt;color&gt;")}}
- Le type de donnée {{CSSxRef("image")}}
- Le type de donnée {{CSSxRef("&lt;position&gt;")}}
- Le mot-clé [`currentColor`](/fr/docs/Web/CSS/Reference/Values/color_value#mot-clé_currentcolor)

Le module [des fonds et bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)

- {{CSSxRef("background-attachment")}}
- {{CSSxRef("background-clip")}}
- {{CSSxRef("background-color")}}
- {{CSSxRef("background-image")}}
- {{CSSxRef("background-origin")}}
- {{CSSxRef("background-position")}}
- {{CSSxRef("background-repeat")}}
- {{CSSxRef("background-size")}}
- {{CSSxRef("background")}} (raccourcie)
- {{CSSxRef("background-position-x")}}
- {{CSSxRef("background-position-y")}}
- {{CSSxRef("border-image-outset")}}
- {{CSSxRef("border-image-repeat")}}
- {{CSSxRef("border-image-slice")}}
- {{CSSxRef("border-image-source")}}
- {{CSSxRef("border-image-width")}}
- {{CSSxRef("border-image")}} (raccourcie)

## Spécifications

{{Specifications}}

## Voir aussi

- La propriété {{CSSxRef("filter")}}
- La propriété {{CSSxRef("backdrop-filter")}}
- La fonction de filtre {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
- [Appliquer des couleurs aux éléments HTML en utilisant le CSS](/fr/docs/Web/CSS/Guides/Colors/Applying_color)
- Outils&nbsp;:
  - [Générateur d'images de bordure](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator)
  - [Générateur de rayon de bordure](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator)
