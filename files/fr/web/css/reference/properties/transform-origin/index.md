---
title: transform-origin
slug: Web/CSS/Reference/Properties/transform-origin
original_slug: Web/CSS/transform-origin
---

{{CSSRef}}

La propriété **`transform-origin`** permet de modifier l'origine du repère pour les opérations de transformation d'un élément.

{{InteractiveExample("CSS Demo: transform-origin")}}

```css interactive-example-choice
transform-origin: center;
```

```css interactive-example-choice
transform-origin: top left;
```

```css interactive-example-choice
transform-origin: 50px 50px;
```

```css interactive-example-choice
/* 3D rotation with z-axis origin */
transform-origin: bottom right 60px;
```

```html interactive-example
<section id="default-example">
  <div id="example-container">
    <div id="example-element">Rotate me!</div>
    <img
      alt=""
      id="crosshair"
      src="/shared-assets/images/examples/crosshair.svg"
      width="24px" />
    <div id="static-element"></div>
  </div>
</section>
```

```css interactive-example
@keyframes rotate {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(30deg);
  }
}

@keyframes rotate3d {
  from {
    transform: rotate3d(0);
  }

  to {
    transform: rotate3d(1, 2, 0, 60deg);
  }
}

#example-container {
  width: 160px;
  height: 160px;
  position: relative;
}

#example-element {
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background: #f7ebee;
  color: #000000;
  font-size: 1.2rem;
  text-transform: uppercase;
}

#example-element.rotate {
  animation: rotate 1s forwards;
}

#example-element.rotate3d {
  animation: rotate3d 1s forwards;
}

#crosshair {
  width: 24px;
  height: 24px;
  opacity: 0;
  position: absolute;
}

#static-element {
  width: 100%;
  height: 100%;
  position: absolute;
  border: dotted 3px #ff1100;
}
```

```js interactive-example
"use strict";

window.addEventListener("load", () => {
  function update() {
    const selected = document.querySelector(".selected");

    /* Restart the animation
           https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Tips */
    el.className = "";
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        el.className =
          el.style.transformOrigin.split(" ")[2] === "60px"
            ? "rotate3d"
            : "rotate";
      });
    });

    const transformOrigin = getComputedStyle(el).transformOrigin;
    const pos = transformOrigin.split(/\s+/);
    crosshair.style.left = `calc(${pos[0]} - 12px)`;
    crosshair.style.top = `calc(${pos[1]} - 12px)`;
  }

  const crosshair = document.getElementById("crosshair");
  const el = document.getElementById("example-element");

  const observer = new MutationObserver(() => {
    update();
  });

  observer.observe(el, {
    attributes: true,
    attributeFilter: ["style"],
  });

  update();
  crosshair.style.opacity = "1";
});
```

Par exemple, l'origine par défaut pour la fonction `rotate()` est le centre de la rotation. Cette propriété est utilisée en :

1. Translatant l'élément avec l'opposé de la valeur fournie
2. Appliquant la transformation souhaitée sur l'élément
3. Translatant l'élément avec la valeur fournie pour cette propriété.

Les valeurs qui ne sont pas définies explicitement sont réinitialisées avec les valeurs correspondantes.

Par défaut, l'origine d'une transformation est `center`.

## Syntaxe

```css
/* Utilisation d'une seule valeur */
transform-origin: 2px;
transform-origin: bottom;

/* x-offset y-offset */
transform-origin: 3cm 2px;

/* y-offset x-offset-keyword */
transform-origin: 2px left;

/* x-offset-keyword y-offset */
transform-origin: left 2px;

/* x-offset-keyword y-offset-keyword */
transform-origin: right top;

/* y-offset-keyword x-offset-keyword */
transform-origin: top right;

/* x-offset y-offset z-offset */
transform-origin: 2px 30% 10px;

/* y-offset x-offset-keyword z-offset */
transform-origin: 2px left 10px;

/* x-offset-keyword y-offset z-offset */
transform-origin: left 5px -3px;

/* x-offset-keyword y-offset-keyword z-offset */
transform-origin: right bottom 2cm;

/* y-offset-keyword x-offset-keyword z-offset */
transform-origin: bottom right 2cm;

/* Valeurs globales */
transform-origin: inherit;
transform-origin: initial;
transform-origin: unset;
```

La propriété `transform-origin` peut être définie en utiisant une, deux ou trois valeurs.

- Avec une valeur, celle-ci doit être :
  - Une longueur (type {{cssxref("&lt;length&gt;")}})
  - Un pourcentage (type {{cssxref("&lt;percentage&gt;")}}
  - Un mot-clé parmi `left`, `center`, `right`, `top`, `bottom`.

- Avec deux valeurs
  - La première valeur doit être une longueur (type {{cssxref("&lt;length&gt;")}}), un pourcentage (type {{cssxref("&lt;percentage&gt;")}} ou un mot-clé parmi `left`, `center`, `right`
  - La seconde valeur doit être une longueur (type {{cssxref("&lt;length&gt;")}}), un pourcentage (type {{cssxref("&lt;percentage&gt;")}} ou un mot-clé parmi `top`, `center`, `bottom`.

- Avec trois valeurs
  - Les deux premières valeurs doivent être structurées comme la syntaxe avec deux valeurs
  - La troisième valeur doit être une longueur (type {{cssxref("length")}}

### Valeur

- `x-offset`
  - : Une valeur du type {{cssxref("&lt;length&gt;")}} ou {{cssxref("&lt;percentage&gt;")}} qui décrit la distance, depuis le bord gauche de la boîte, à laquelle l'origine de la transformation sera placée.
- `offset-keyword`
  - : Un mot-clé parmi `left`, `right`, `top`, `bottom` ou `center` qui décrit le décalage correspondant.
- `y-offset`
  - : Une valeur du type {{cssxref("&lt;length&gt;")}} ou {{cssxref("&lt;percentage&gt;")}} qui décrit la distance, depuis le bord haut de la boîte, à laquelle l'origine de la transformation sera placée.
- `x-offset-keyword`
  - : Un mot-clé parmi `left`, `right` ou `center` qui décrit la distance, depuis le bord gauche de la boîte, à laquelle l'origine de la transformation sera placée.
- `y-offset-keyword`
  - : Un mot-clé parmi `top`, `bottom` ou `center` qui décrit la distance, depuis le bord haut de la boîte, à laquelle l'origine de la transformation sera placée.
- `z-offset`
  - : Une valeur du type {{cssxref("&lt;length&gt;")}} (et jamais une valeur du type {{cssxref("&lt;percentage&gt;")}}, sinon la déclaration serait invalide) qui décrit la distance, depuis l'œil de l'utilisateur, de l'origine de la transformation sur l'axe de profondeur (z)..

Les mots-clés sont des raccourcis qui correspondent aux valeurs {{cssxref("&lt;percentage&gt;")}} suivantes :

| Mot-clé  | Valeur |
| -------- | ------ |
| `left`   | `0%`   |
| `center` | `50%`  |
| `right`  | `100%` |
| `top`    | `0%`   |
| `bottom` | `100%` |

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Voir la page sur [l'utilisation des transformations CSS](/fr/docs/Web/CSS/Guides/Transforms/Using) pour des exemples supplémentaires.

### Illustrations des différentes valeurs de transform

Cet exemple illustre ce que donnent les différentes valeurs de `transform-origin` pour différentes fonctions de transformation.

```html hidden
<div class="container">
  <div class="example">
    <div class="box box1">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: none;
</pre
  >

  <div class="example">
    <div class="box box2">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
</pre
  >

  <div class="example">
    <div class="box box3">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
transform-origin: 0 0;
</pre
  >

  <div class="example">
    <div class="box box4">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
transform-origin: 100% 100%;
</pre
  >

  <div class="example">
    <div class="box box5">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
transform-origin: -1em -3em;
</pre
  >

  <div class="example">
    <div class="box box6">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: scale(1.7);
</pre
  >

  <div class="example">
    <div class="box box7">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: scale(1.7);
transform-origin: 0 0;
</pre
  >

  <div class="example">
    <div class="box box8">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: scale(1.7);
transform-origin: 100% -30%;
</pre
  >

  <div class="example">
    <div class="box box9">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: skewX(50deg);
transform-origin: 100% -30%;
</pre
  >

  <div class="example">
    <div class="box box10">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: skewY(50deg);
transform-origin: 100% -30%;
</pre
  >
</div>
```

```css hidden
.container {
  display: grid;
  grid-template-columns: 200px 100px;
  gap: 20px;
}

.example {
  position: relative;
  margin: 0 2em 4em 5em;
}

.box {
  display: inline-block;
  width: 3em;
  height: 3em;
  border: solid 1px;
  background-color: palegreen;
}

.original {
  position: absolute;
  left: 0;
  opacity: 20%;
}

.box1 {
  transform: none;
}

.box2 {
  transform: rotate(30deg);
}

.box3 {
  transform: rotate(30deg);
  transform-origin: 0 0;
}

.box4 {
  transform: rotate(30deg);
  transform-origin: 100% 100%;
}

.box5 {
  transform: rotate(30deg);
  transform-origin: -1em -3em;
}

.box6 {
  transform: scale(1.7);
}

.box7 {
  transform: scale(1.7);
  transform-origin: 0 0;
}

.box8 {
  transform: scale(1.7);
  transform-origin: 100% -30%;
}

.box9 {
  transform: skewX(50deg);
  transform-origin: 100% -30%;
}

.box10 {
  transform: skewY(50deg);
  transform-origin: 100% -30%;
}
```

{{EmbedLiveSample('Exemples', '', 1350) }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les transformations CSS](/fr/docs/Web/CSS/Guides/Transforms/Using)
- <https://css-tricks.com/almanac/properties/t/transform-origin/>
