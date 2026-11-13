---
title: Propriété CSS `backdrop-filter`
short-title: backdrop-filter
slug: Web/CSS/Reference/Properties/backdrop-filter
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`backdrop-filter`** permet d'obtenir un effet de flou ou de diffusion de la couleur sur la zone derrière l'élément. L'effet étant situé _derrière_ l'élément, il peut être observé en ajustant la transparence de l'élément.

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

/* Plusieurs filtres */
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
  - : Une liste d'éléments {{CSSxRef("filter-function")}} séparés par des espaces ou un [filtre SVG](/fr/docs/Web/SVG/Reference/Element/filter) qui est appliqué à l'arrière-plan. Les `<filter-function>` CSS incluent {{CSSxRef("filter-function/blur", "blur()")}}, {{CSSxRef("filter-function/brightness", "brightness()")}}, {{CSSxRef("filter-function/contrast", "contrast()")}}, {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}, {{CSSxRef("filter-function/grayscale", "grayscale()")}}, {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}, {{CSSxRef("filter-function/invert", "invert()")}}, {{CSSxRef("filter-function/opacity", "opacity()")}}, {{CSSxRef("filter-function/saturate", "saturate()")}} et {{CSSxRef("filter-function/sepia", "sepia()")}}.

## Description

La propriété `backdrop-filter` applique des effets de filtre aux pixels peints _derrière_ un élément, jusqu'à l'ancêtre le plus proche qui est une **racine d'arrière-plan**. Le contenu au-dessus de la racine d'arrière-plan n'est pas affecté.

### Racine d'arrière-plan

Une racine d'arrière-plan est un élément qui établit une limite pour les effets de `backdrop-filter`. Les éléments suivants sont des racines d'arrière-plan&nbsp;:

- L'élément racine ({{HTMLElement("html")}})
- Un élément avec une valeur {{CSSxRef("filter")}} autre que `none`
- Un élément avec une valeur {{CSSxRef("opacity")}} inférieure à `1`
- Un élément avec une valeur {{CSSxRef("mask")}}, {{CSSxRef("mask-image")}}, {{CSSxRef("mask-border")}} ou {{CSSxRef("clip-path")}} autre que `none`
- Un élément avec une valeur `backdrop-filter` autre que `none`
- Un élément avec une valeur {{CSSxRef("mix-blend-mode")}} autre que `normal`
- Un élément avec {{CSSxRef("will-change")}} défini sur l'une des propriétés ci-dessus

Cela signifie que si un élément parent a `opacity: 0.9`, il devient une racine d'arrière-plan et le `backdrop-filter` de tout enfant ne floute que le contenu entre ce parent et l'enfant — pas le contenu derrière le parent. C'est une source fréquente de confusion lorsque `backdrop-filter` semble n'avoir aucun effet visible malgré une application correcte.

L'exemple suivant montre comment les racines d'arrière-plan affectent `backdrop-filter`. Le premier conteneur a `will-change: opacity`, ce qui en fait une racine d'arrière-plan — remarquez que le cercle flou n'affecte que le texte et le carré à l'intérieur du conteneur, pas l'arrière-plan en damier derrière lui. Le deuxième conteneur n'est pas une racine d'arrière-plan, donc son cercle flou affecte tout ce qui se trouve derrière lui, y compris l'arrière-plan de la page.

```html
<div class="parent racine-arriere-plan">
  <div class="texte">Texte</div>
  <div class="carre"></div>
  <div class="superposition"></div>
</div>
<div class="parent">
  <div class="texte">Texte</div>
  <div class="carre"></div>
  <div class="superposition"></div>
</div>
```

```css
body {
  display: flex;
  column-gap: 16px;
  padding: 16px;
  background-image: conic-gradient(
    gray 90deg,
    silver 90deg 180deg,
    gray 180deg 270deg,
    silver 270deg
  );
  background-size: 32px 32px;
}

.parent {
  position: relative;
  width: 256px;
  height: 256px;
}

.racine-arriere-plan {
  outline: 2px solid crimson;
  will-change: opacity;
}

.carre {
  position: absolute;
  top: 35px;
  left: 40%;
  width: 25%;
  height: 25%;
  border: 10px solid white;
}

.texte {
  position: absolute;
  left: 40%;
  color: white;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  line-height: 256px;
  filter: blur(1px);
}

.superposition {
  position: absolute;
  top: 25%;
  left: 50%;
  width: 50%;
  height: 50%;
  outline: 3px solid gainsboro;
  border-radius: 9999px;
  backdrop-filter: blur(10px);
}
```

{{EmbedLiveSample("Racine d'arrière-plan", "", 288)}}

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
