---
title: background-blend-mode
slug: Web/CSS/Reference/Properties/background-blend-mode
original_slug: Web/CSS/background-blend-mode
---

{{CSSRef}}

La propriété CSS **`background-blend-mode`** définit la façon dont les images d'arrière-plan doivent être fusionnées entre elles et avec la couleur d'arrière-plan.

{{InteractiveExample("CSS Demo: background-blend-mode")}}

```css interactive-example-choice
background-blend-mode: normal;
```

```css interactive-example-choice
background-blend-mode: multiply;
```

```css interactive-example-choice
background-blend-mode: hard-light;
```

```css interactive-example-choice
background-blend-mode: difference;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element"></div>
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: green;
  background-image: url("/shared-assets/images/examples/balloon.jpg");
  width: 250px;
  height: 305px;
}
```

Les modes de fusions (<i lang="en">blending modes</i>) doivent être définis dans le même ordre que les images sont définies avec [`background-image`](/fr/docs/Web/CSS/Reference/Properties/background-image). Si la liste des modes de fusion et la liste des images d'arrière-plan ne sont pas de la même longueur, la première liste sera répétée ou tronquée pour que les longueurs soient égales.

## Syntaxe

```css
/* Une valeur qui s'applique à toutes les images */
background-blend-mode: normal;

/* Deux valeurs, chacune pour une image */
background-blend-mode: darken, luminosity;

/* Valeurs globales */
background-blend-mode: initial;
background-blend-mode: inherit;
background-blend-mode: revert;
background-blend-mode: unset;
```

### Valeurs

- `<blend-mode>`
  - : Une valeur décrivant un mode de fusion (type [`<blend-mode>`](/fr/docs/Web/CSS/Reference/Values/blend-mode)) qui doit être appliqué. On peut avoir plusieurs valeurs et dans ce cas, elles doivent être séparées par des virgules.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: screen;
}
```

### HTML

```html
<div id="div"></div>

<select id="select">
  <option>normal</option>
  <option>multiply</option>
  <option selected>screen</option>
  <option>overlay</option>
  <option>darken</option>
  <option>lighten</option>
  <option>color-dodge</option>
  <option>color-burn</option>
  <option>hard-light</option>
  <option>soft-light</option>
  <option>difference</option>
  <option>exclusion</option>
  <option>hue</option>
  <option>saturation</option>
  <option>color</option>
  <option>luminosity</option>
</select>
```

### JavaScript

```js
document.getElementById("select").onchange = function (event) {
  document.getElementById("div").style.backgroundBlendMode =
    document.getElementById("select").selectedOptions[0].innerHTML;
};
console.log(document.getElementById("div"));
```

### Résultat

{{EmbedLiveSample('', "330", "350")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`<blend-mode>`](/fr/docs/Web/CSS/Reference/Values/blend-mode)
- [`mix-blend-mode`](/fr/docs/Web/CSS/Reference/Properties/mix-blend-mode)
