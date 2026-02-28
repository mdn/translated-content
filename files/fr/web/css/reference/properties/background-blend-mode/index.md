---
title: background-blend-mode
slug: Web/CSS/Reference/Properties/background-blend-mode
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`background-blend-mode`** définit comment les images d'arrière-plan d'un élément doivent se fondre entre elles et avec la couleur d'arrière-plan de l'élément.

Les modes de fusion doivent être définis dans le même ordre que la propriété {{CSSxRef("background-image")}}. Si la longueur des listes de modes de fusion et d'images d'arrière-plan n'est pas identique, la liste sera répétée et/ou tronquée jusqu'à ce que les longueurs correspondent.

{{InteractiveExample("Démonstration CSS&nbsp;: background-blend-mode")}}

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

## Syntaxe

```css
/* Une valeur */
background-blend-mode: normal;

/* Deux valeurs, chacune pour une image */
background-blend-mode: darken, luminosity;

/* Valeurs globales */
background-blend-mode: inherit;
background-blend-mode: initial;
background-blend-mode: revert;
background-blend-mode: revert-layer;
background-blend-mode: unset;
```

### Valeurs

- {{CSSxRef("&lt;blend-mode&gt;")}}
  - : Le mode de fusion à appliquer. Il peut y avoir plusieurs valeurs, séparées par des virgules.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

```css
.item {
  width: 300px;
  height: 300px;
  background: url("image1.png"), url("image2.png");
  background-blend-mode: screen;
}
```

### Essayer différents modes de fusion

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

```css hidden
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: screen;
}
```

```js hidden
document.getElementById("select").onchange = (event) => {
  document.getElementById("div").style.backgroundBlendMode =
    document.getElementById("select").selectedOptions[0].innerHTML;
};
console.log(document.getElementById("div"));
```

{{EmbedLiveSample("Essayer différents modes de fusion", 330, 350)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de donnée {{CSSxRef("&lt;blend-mode&gt;")}}
- La propriété {{CSSxRef("mix-blend-mode")}}
