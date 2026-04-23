---
title: Propriété CSS `offset-rotate`
short-title: offset-rotate
slug: Web/CSS/Reference/Properties/offset-rotate
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`offset-rotate`** définit l'orientation et la direction de l'élément lorsqu'il est positionné le long du chemin représenté par un {{CSSxRef("offset-path")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: offset-rotate")}}

```css interactive-example-choice
offset-rotate: auto;
```

```css interactive-example-choice
offset-rotate: 90deg;
```

```css interactive-example-choice
offset-rotate: auto 90deg;
```

```css interactive-example-choice
offset-rotate: reverse;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
  <button id="playback" type="button">Lecture</button>
</section>
```

```css interactive-example
#example-element {
  width: 24px;
  height: 24px;
  background: #2bc4a2;
  offset-path: path("M-70,-40 C-70,70 70,70 70,-40");
  animation: distance 8000ms infinite linear;
  animation-play-state: paused;
  clip-path: polygon(0% 0%, 70% 0%, 100% 50%, 70% 100%, 0% 100%, 30% 50%);
}

#example-element.running {
  animation-play-state: running;
}

#playback {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1em;
}

@keyframes distance {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}

/* Fournit une image de référence du chemin que l'élément suit */
#default-example {
  position: relative;
  background-position: calc(50% - 12px) calc(50% + 14px);
  background-repeat: no-repeat;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-75 -45 150 140" width="150" height="140"><path d="M-70,-40 C-70,70 70,70 70,-40" fill="none" stroke="lightgrey" stroke-width="2" stroke-dasharray="4.5"/></svg>');
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

> [!NOTE]
> Les premières versions de la spécification appelaient cette propriété `motion-rotation`.

## Syntaxe

```css
/* Suit la direction du chemin avec un éventuel décalage angulaire */
offset-rotate: auto;
offset-rotate: auto 45deg;

/* Suit la direction du chemin mais orienté dans la direction opposée */
offset-rotate: reverse;

/* Conserve une rotation constante quelle que soit la position sur le chemin */
offset-rotate: 90deg;
offset-rotate: 0.5turn;

/* Valeurs globales */
offset-rotate: inherit;
offset-rotate: initial;
offset-rotate: revert;
offset-rotate: revert-layer;
offset-rotate: unset;
```

### Valeurs

- `auto`
  - : L'élément est tourné avec l'angle donné par la direction du chemin {{CSSxRef("offset-path")}}, relativement à l'axe des abscisses. C'est la valeur par défaut.
- {{CSSxRef("&lt;angle&gt;")}}
  - : L'élément est tourné d'un angle fixe (indiqué dans le sens horaire).
- `auto <angle>`
  - : Si le mot-clé `auto` est suivi d'une valeur d'angle ({{CSSxRef("&lt;angle&gt;")}}), l'élément est tourné de l'angle donné par rapport à la direction du chemin.
- `reverse`
  - : L'élément est tourné de façon similaire à `auto`, mais fait face à la direction opposée. Cette valeur est équivalente à `auto 180deg`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir l'orientation d'un élément le long de son chemin de décalage

#### HTML

```html
<div></div>
<div></div>
<div></div>
```

#### CSS

```css
div {
  width: 40px;
  height: 40px;
  background: #2bc4a2;
  margin: 20px;
  clip-path: polygon(0% 0%, 70% 0%, 100% 50%, 70% 100%, 0% 100%, 30% 50%);
  animation: move 5000ms infinite alternate ease-in-out;

  offset-path: path("M20,20 C20,50 180,-10 180,20");
}
div:nth-child(1) {
  offset-rotate: auto;
}
div:nth-child(2) {
  offset-rotate: auto 90deg;
}
div:nth-child(3) {
  offset-rotate: 30deg;
}

@keyframes move {
  100% {
    offset-distance: 100%;
  }
}
```

#### Résultat

{{EmbedLiveSample("Définir l'orientation d'un élément le long de son chemin de décalage")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("offset")}}
- La propriété {{CSSxRef("offset-anchor")}}
- La propriété {{CSSxRef("offset-distance")}}
- La propriété {{CSSxRef("offset-path")}}
- La propriété {{CSSxRef("offset-position")}}
