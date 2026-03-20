---
title: offset-anchor
slug: Web/CSS/Reference/Properties/offset-anchor
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`offset-anchor`** définit le point à l'intérieur de la boîte d'un élément se déplaçant le long d'un {{CSSxRef("offset-path")}} qui est effectivement en mouvement le long du chemin.

{{InteractiveExample("Démonstration CSS&nbsp;: offset-anchor")}}

```css interactive-example-choice
offset-anchor: auto;
```

```css interactive-example-choice
offset-anchor: right top;
```

```css interactive-example-choice
offset-anchor: left bottom;
```

```css interactive-example-choice
offset-anchor: 20% 80%;
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
  offset-path: path("M 0,20 L 200,20");
  animation: distance 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
  background: cyan;
  animation-play-state: paused;
}

#example-element.running {
  animation-play-state: running;
}

.wrapper {
  background-image: linear-gradient(
    to bottom,
    transparent,
    transparent 49%,
    black 50%,
    black 51%,
    transparent 52%
  );
  border: 1px solid #cccccc;
  width: 90%;
}

@keyframes distance {
  0% {
    offset-distance: 0%;
  }
  100% {
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

## Syntaxe

```css
/* Valeurs avec un mot-clé */
offset-anchor: top;
offset-anchor: bottom;
offset-anchor: left;
offset-anchor: right;
offset-anchor: center;
offset-anchor: auto;

/* Valeurs de type <percentage> */
offset-anchor: 25% 75%;

/* Valeurs de type <length> */
offset-anchor: 0 0;
offset-anchor: 1cm 2cm;
offset-anchor: 10ch 8em;

/* Valeurs de décalage relatives à un bord */
offset-anchor: bottom 10px right 20px;
offset-anchor: right 3em bottom 10px;

/* Valeurs globales */
offset-anchor: inherit;
offset-anchor: initial;
offset-anchor: revert;
offset-anchor: revert-layer;
offset-anchor: unset;
```

### Valeurs

- `auto`
  - : `offset-anchor` reçoit la même valeur que {{CSSxRef("transform-origin")}} sauf si {{CSSxRef("offset-path")}} vaut `none`, dans ce cas, elle récupère la valeur de {{CSSxRef("offset-position")}}.
- {{CSSxRef("&lt;position&gt;")}}
  - : Une position ({{CSSxRef("&lt;position&gt;")}}) définie par un couple de coordonnées X/Y qui permet de placer un objet par rapport aux bords de sa boîte. On peut définir la position à partir de une à quatre valeurs. Pour plus d'informations, voir les pages sur {{CSSxRef("&lt;position&gt;")}} et {{CSSxRef("background-position")}}. La syntaxe à trois valeurs ne fonctionne pas pour `<position>`, excepté pour `background(-position)`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir différentes valeurs de `offset-anchor`

Dans l'exemple suivant, nous avons trois éléments {{HTMLElement("div")}} imbriqués dans des éléments {{HTMLElement("section")}}. Chaque `<div>` reçoit le même {{CSSxRef("offset-path")}} (une ligne horizontale de 200 pixels de long) et est animé pour se déplacer le long de celle-ci. Les trois reçoivent ensuite différentes valeurs de {{CSSxRef("background-color")}} et de `offset-anchor`.

Chaque `<section>` a été mis en forme avec un dégradé linéaire pour lui donner une ligne horizontale traversant son centre, afin de vous donner un affichage visuel de l'endroit où les chemins d'encart des `<div>` se trouvent.

Cela vous permet de voir quel effet ont les différentes valeurs de `offset-anchor` — la première, `auto`, fait se déplacer le point central du `<div>` le long du chemin. Les deux autres font se déplacer respectivement les points supérieur droit et inférieur gauche du `<div>` le long du chemin.

#### HTML

```html
<section>
  <div class="offset-anchor1"></div>
</section>
<section>
  <div class="offset-anchor2"></div>
</section>
<section>
  <div class="offset-anchor3"></div>
</section>
```

#### CSS

```css
div {
  offset-path: path("M 0,20 L 200,20");
  animation: move 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
}

section {
  background-image: linear-gradient(
    to bottom,
    transparent,
    transparent 49%,
    black 50%,
    black 51%,
    transparent 52%
  );
  border: 1px solid #cccccc;
  margin-bottom: 10px;
}

.offset-anchor1 {
  offset-anchor: auto;
  background: cyan;
}

.offset-anchor2 {
  offset-anchor: right top;
  background: purple;
}

.offset-anchor3 {
  offset-anchor: left bottom;
  background: magenta;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

#### Résultat

{{EmbedLiveSample("Définir différentes valeurs de `offset-anchor`", "100%", 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("offset")}}
- La propriété {{CSSxRef("offset-distance")}}
- La propriété {{CSSxRef("offset-rotate")}}
- [L'élément SVG `<path>`](/fr/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths)
