---
title: offset
slug: Web/CSS/Reference/Properties/offset
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`offset`** définit toutes les propriétés nécessaires à l'animation d'un élément le long d'un chemin défini. Les propriétés de décalage permettent ensemble de définir une _transformation de décalage_, une [transformation](/fr/docs/Web/CSS/Guides/Transforms/Using) qui aligne un point dans un élément ({{CSSxRef("offset-anchor")}}) sur une _position de décalage_ ({{CSSxRef("offset-position")}}) sur un chemin ({{CSSxRef("offset-path")}}) à différents points le long du chemin ({{CSSxRef("offset-distance")}}) et, en option, fait pivoter l'élément ({{CSSxRef("offset-rotate")}}) pour suivre la direction du chemin.

> [!NOTE]
> Dans les premières versions de la spécification, cette propriété était intitulée `motion`.

{{InteractiveExample("Démonstration CSS&nbsp;: offset")}}

```css interactive-example-choice
offset: path("M 20 60 L 120 60 L 70 10 L 20 60") 0% auto 90deg;
```

```css interactive-example-choice
offset: path(
    "M 20 210 L 74 210 L 118 140 \
 L 62 140 L 20 210"
  )
  20% auto;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="wrapper">
    <div id="example-element"></div>
  </div>
  <button id="playback" type="button">Lecture</button>
</section>
```

```css interactive-example
#example-element {
  width: 24px;
  height: 24px;
  background: #2bc4a2;
  clip-path: polygon(0% 0%, 70% 0%, 100% 50%, 70% 100%, 0% 100%, 30% 50%);
  animation: distance 3000ms infinite normal ease-in-out;
  animation-play-state: paused;
}

#example-element.running {
  animation-play-state: running;
}

.wrapper {
  height: 220px;
  width: 200px;
  background:
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 140" width="200" height="140"><path d="M 0 60 L 100 60 L 50 10 L 0 60" fill="none" stroke="lightgrey" stroke-width="2" stroke-dasharray="4.5"/></svg>')
      no-repeat,
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -140 150 230" width="200" height="230"><path d="M 0 70 L 56 70 L 98 0 L 42 0 L 0 70" fill="none" stroke="lightgrey" stroke-width="2" stroke-dasharray="4.5"/></svg>');
}

@keyframes distance {
  to {
    offset-distance: 100%;
  }
}

#playback {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1em;
}
```

```js interactive-example
const example = document.getElementById("example-element");
const button = document.getElementById("playback");

button.addEventListener("click", () => {
  if (example.classList.contains("running")) {
    example.classList.remove("running");
    button.textContent = "Lecture";
  } else {
    example.classList.add("running");
    button.textContent = "Pause";
  }
});
```

## Propriétés constitutives

Cette propriété est un raccourci pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("offset-anchor")}}
- {{CSSxRef("offset-distance")}}
- {{CSSxRef("offset-path")}}
- {{CSSxRef("offset-position")}}
- {{CSSxRef("offset-rotate")}}

## Syntaxe

```css
/* Position de décalage */
offset: auto
offset: 10px 30px;
offset: none;

/* Chemin de décalage */
offset: ray(45deg closest-side);
offset: path("M 100 100 L 300 100 L 200 300 z");
offset: url("arc.svg");

/* Chemin de décalage avec une distance et/ou une rotation */
offset: url("circle.svg") 100px;
offset: url("circle.svg") 40%;
offset: url("circle.svg") 30deg;
offset: url("circle.svg") 50px 20deg;

/* Gestion d'une ancre de décalage */
offset: ray(45deg closest-side) / 40px 20px;
offset: url("arc.svg") 2cm / 0.5cm 3cm;
offset: url("arc.svg") 30deg / 50px 100px;

/* Valeurs globales */
offset: inherit;
offset: initial;
offset: revert;
offset: revert-layer;
offset: unset;
```

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Animer un élément le long d'un chemin

#### HTML

```html
<div id="offsetElement"></div>
```

#### CSS

```css
@keyframes move {
  from {
    offset-distance: 0%;
  }

  to {
    offset-distance: 100%;
  }
}

#offsetElement {
  width: 50px;
  height: 50px;
  background-color: blue;
  offset: path("M 100 100 L 300 100 L 200 300 z") auto;
  animation: move 3s linear infinite;
}
```

#### Résultat

{{EmbedLiveSample("Animer un élément le long d'un chemin", 350, 350)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("offset-anchor")}}
- La propriété {{CSSxRef("offset-distance")}}
- La propriété {{CSSxRef("offset-path")}}
- La propriété {{CSSxRef("offset-position")}}
- La propriété {{CSSxRef("offset-rotate")}}
