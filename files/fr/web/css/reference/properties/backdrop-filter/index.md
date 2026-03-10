---
title: backdrop-filter
slug: Web/CSS/Reference/Properties/backdrop-filter
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La propriété [CSS](/fr/docs/Web/CSS) **`backdrop-filter`** permet d'obtenir un effet de flou ou de diffusion de la couleur sur la zone derrière l'élément. L'effet étant situé _derrière_ l'élément, il pourra être observé en ajustant la transparence de l'élément.

{{InteractiveExample("Démonstration CSS&nbsp;: backdrop-filter()")}}

```css interactive-example-choice
backdrop-filter: blur(10px);
```

```css interactive-example-choice
backdrop-filter: invert(80%);
```

```css interactive-example-choice
backdrop-filter: sepia(90%);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div id="example-element">Exemple</div>
  </div>
</section>
```

```css interactive-example
.example-container {
  background-image: url("/shared-assets/images/examples/balloon.jpg");
  background-size: cover;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
}

#example-element {
  font-weight: bold;
  flex: 1;
  text-align: center;
  padding: 20px 10px;
  background-color: rgb(255 255 255 / 0.2);
}
```

## Syntaxe

```css
/* Valeur avec un mot-clé */
backdrop-filter: none;

/* Une valeur d'URL vers un filtre SVG */
backdrop-filter: url("common-filters.svg#filter");

/* Valeur de type <filter-function> */
backdrop-filter: blur(2px);
backdrop-filter: brightness(60%);
backdrop-filter: contrast(40%);
backdrop-filter: drop-shadow(4px 4px 10px blue);
backdrop-filter: grayscale(30%);
backdrop-filter: hue-rotate(120deg);
backdrop-filter: invert(70%);
backdrop-filter: opacity(20%);
backdrop-filter: sepia(90%);
backdrop-filter: saturate(80%);

/* On enchaîne plusieurs filtres */
backdrop-filter: url("filters.svg#filter") blur(4px) saturate(150%);

/* Valeurs globales */
backdrop-filter: inherit;
backdrop-filter: initial;
backdrop-filter: revert;
backdrop-filter: revert-layer;
backdrop-filter: unset;
```

### Valeurs

- `none`
  - : Un mot-clé qui indique qu'aucun filtre n'est appliqué sur l'ombre portée.
- `<filter-function-list>`
  - : Une liste d'éléments {{CSSxRef("filter-function")}} séparés par des espaces ou un [filtre SVG](/fr/docs/Web/SVG/Reference/Element/filter) qui sera appliqué à l'arrière-plan. Les `<filter-function>` CSS incluent {{CSSxRef("filter-function/blur", "blur()")}}, {{CSSxRef("filter-function/brightness", "brightness()")}}, {{CSSxRef("filter-function/contrast", "contrast()")}}, {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}, {{CSSxRef("filter-function/grayscale", "grayscale()")}}, {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}, {{CSSxRef("filter-function/invert", "invert()")}}, {{CSSxRef("filter-function/opacity", "opacity()")}}, {{CSSxRef("filter-function/saturate", "saturate()")}} et {{CSSxRef("filter-function/sepia", "sepia()")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
.boite {
  background-color: rgb(255 255 255 / 30%);
  backdrop-filter: blur(10px);
}

body {
  background-image: url("anemones.jpg");
}
```

```css hidden
html,
body {
  height: 100%;
  width: 100%;
}

.conteneur {
  background-size: cover;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.boite {
  border-radius: 5px;
  font-family: sans-serif;
  text-align: center;
  max-width: 50%;
  max-height: 50%;
  padding: 20px 40px;
}
```

### HTML

```html
<div class="conteneur">
  <div class="boite">
    <p>backdrop-filter: blur(10px)</p>
  </div>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples", 600, 400)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("filter")}}
- Le type de donnée {{CSSxRef("filter-function")}}
- Les propriétés {{CSSxRef("background-blend-mode")}}, {{CSSxRef("mix-blend-mode")}}
- [Effets de filtre CSS](/fr/docs/Web/CSS/Guides/Filter_effects)
- [Composition et fusion CSS](/fr/docs/Web/CSS/Guides/Compositing_and_blending)
