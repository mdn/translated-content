---
title: Propriété CSS `transform-origin`
short-title: transform-origin
slug: Web/CSS/Reference/Properties/transform-origin
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`transform-origin`** permet de modifier l'origine du repère pour les opérations de transformation d'un élément.

{{InteractiveExample("Démonstration CSS&nbsp;: transform-origin")}}

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
/* Rotation 3D avec origine sur l'axe z */
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
    transform: rotate3d(0, 0, 0, 0);
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
  color: black;
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
const crosshair = document.getElementById("crosshair");
const el = document.getElementById("example-element");

function update() {
  const selected = document.querySelector(".selected");

  /* Redémarrer l'animation
     https://developer.mozilla.org/fr/docs/Web/API/Web_Animations_API/Tips */
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

const observer = new MutationObserver(() => {
  update();
});

observer.observe(el, {
  attributes: true,
  attributeFilter: ["style"],
});

update();
crosshair.style.opacity = "1";
```

L'origine de transformation est le point autour duquel une transformation est appliquée. Par exemple, l'origine de transformation de la fonction [`rotate()`](/fr/docs/Web/CSS/Reference/Values/transform-function/rotate) est le centre de rotation.

En pratique, cette propriété enveloppe une paire de translations autour des autres transformations de l'élément. La première translation déplace l'origine de transformation vers la véritable origine en <math><mrow><mo stretchy="false">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy="false">)</mo></mrow></math>. Ensuite, les autres transformations sont appliquées et, parce que l'origine de transformation est en <math><mrow><mo stretchy="false">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy="false">)</mo></mrow></math>, ces transformations s'effectuent autour de cette origine. Enfin, la translation inverse est appliquée, ramenant l'origine de transformation à sa position initiale. Par conséquent, cette définition

```css
transform-origin: -100% 50%;
transform: rotate(45deg);
```

donne la même transformation que

```css
transform-origin: 0 0;
transform: translate(-100%, 50%) rotate(45deg) translate(100%, -50%);
```

En lisant de droite à gauche, `translate(100%, -50%)` est la translation qui amène l'origine de transformation à la véritable origine, `rotate(45deg)` est la transformation d'origine, et `translate(-100%, 50%)` est la translation qui restaure l'origine de transformation à sa position initiale.

Par défaut, l'origine d'une transformation est `center`.

## Syntaxe

```css
/* Syntaxe avec une valeur */
transform-origin: 2px;
transform-origin: bottom;

/* x-offset | y-offset */
transform-origin: 3cm 2px;

/* x-offset-keyword | y-offset */
transform-origin: left 2px;

/* x-offset-keyword | y-offset-keyword */
transform-origin: right top;

/* y-offset-keyword | x-offset-keyword */
transform-origin: top right;

/* x-offset | y-offset | z-offset */
transform-origin: 2px 30% 10px;

/* x-offset-keyword | y-offset | z-offset */
transform-origin: left 5px -3px;

/* x-offset-keyword | y-offset-keyword | z-offset */
transform-origin: right bottom 2cm;

/* y-offset-keyword | x-offset-keyword | z-offset */
transform-origin: bottom right 2cm;

/* Valeurs globales */
transform-origin: inherit;
transform-origin: initial;
transform-origin: revert;
transform-origin: revert-layer;
transform-origin: unset;
```

La propriété `transform-origin` peut être définie en utilisant une, deux ou trois valeurs, chaque valeur représentant un décalage. Les décalages qui ne sont pas explicitement définis sont réinitialisés à leurs [valeurs initiales](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale) correspondantes.

Si une seule valeur {{CSSxRef("&lt;length&gt;")}} ou {{CSSxRef("&lt;percentage&gt;")}} est définie, elle représente le décalage horizontal.

Si deux valeurs ou plus sont définies et qu'aucune valeur n'est un mot-clé, ou que le seul mot-clé utilisé est `center`, alors la première valeur représente le décalage horizontal et la seconde représente le décalage vertical.

- Syntaxe à une valeur&nbsp;:
  - La valeur doit être une longueur ({{CSSxRef("&lt;length&gt;")}}), un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}), ou l'un des mots-clés `left`, `center`, `right`, `top` et `bottom`.

- Syntaxe à deux valeurs&nbsp;:
  - Une valeur doit être une longueur ({{CSSxRef("&lt;length&gt;")}}), un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}), ou l'un des mots-clés `left`, `center` et `right`.
  - L'autre valeur doit être une longueur ({{CSSxRef("&lt;length&gt;")}}), un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}), ou l'un des mots-clés `top`, `center` et `bottom`.

- Syntaxe à trois valeurs&nbsp;:
  - Les deux premières valeurs sont les mêmes que pour la syntaxe à deux valeurs.
  - La troisième valeur doit être une {{CSSxRef("&lt;length&gt;")}}. Elle représente toujours le décalage sur l'axe Z.

### Valeur

- `x-offset`
  - : Une valeur du type {{CSSxRef("&lt;length&gt;")}} ou {{CSSxRef("&lt;percentage&gt;")}} qui décrit la distance, depuis le bord gauche de la boîte, à laquelle l'origine de la transformation sera placée.
- `offset-keyword`
  - : Un mot-clé parmi `left`, `right`, `top`, `bottom` ou `center` qui décrit le décalage correspondant.
- `y-offset`
  - : Une valeur du type {{CSSxRef("&lt;length&gt;")}} ou {{CSSxRef("&lt;percentage&gt;")}} qui décrit la distance, depuis le bord haut de la boîte, à laquelle l'origine de la transformation sera placée.
- `x-offset-keyword`
  - : Un mot-clé parmi `left`, `right` ou `center` qui décrit la distance, depuis le bord gauche de la boîte, à laquelle l'origine de la transformation sera placée.
- `y-offset-keyword`
  - : Un mot-clé parmi `top`, `bottom` ou `center` qui décrit la distance, depuis le bord haut de la boîte, à laquelle l'origine de la transformation sera placée.
- `z-offset`
  - : Est une longueur {{CSSxRef("&lt;length&gt;")}} (et jamais un {{CSSxRef("&lt;percentage&gt;")}}, ce qui rendrait la déclaration invalide) décrivant la distance depuis l'œil de l'utilisateur à laquelle l'origine z=0 est placée.

Les mots-clés sont des raccourcis qui correspondent aux valeurs {{CSSxRef("&lt;percentage&gt;")}} suivantes&nbsp;:

| Mot-clé  | Valeur |
| -------- | ------ |
| `left`   | `0%`   |
| `center` | `50%`  |
| `right`  | `100%` |
| `top`    | `0%`   |
| `bottom` | `100%` |

## Définition formelle

{{CSSInfo}}

> [!NOTE]
> La valeur initiale de `transform-origin` est `0 0` pour tous les éléments SVG, sauf pour les éléments `<svg>` racine et les éléments `<svg>` qui sont un enfant direct d'un [`foreignObject`](/fr/docs/Web/SVG/Reference/Element/foreignObject), et dont le `transform-origin` est `50% 50%`, comme pour les autres éléments CSS. Voir l'attribut [SVG `transform-origin`](/fr/docs/Web/SVG/Reference/Attribute/transform-origin) pour plus d'informations.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

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
  </pre>

  <div class="example">
    <div class="box box2">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
  </pre>

  <div class="example">
    <div class="box box3">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
transform-origin: 0 0;
  </pre>

  <div class="example">
    <div class="box box4">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
transform-origin: 100% 100%;
  </pre>

  <div class="example">
    <div class="box box5">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
transform-origin: -1em -3em;
  </pre>

  <div class="example">
    <div class="box box6">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: scale(1.7);
  </pre>

  <div class="example">
    <div class="box box7">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: scale(1.7);
transform-origin: 0 0;
  </pre>

  <div class="example">
    <div class="box box8">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: scale(1.7);
transform-origin: 100% -30%;
  </pre>

  <div class="example">
    <div class="box box9">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: skewX(50deg);
transform-origin: 100% -30%;
  </pre>

  <div class="example">
    <div class="box box10">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: skewY(50deg);
transform-origin: 100% -30%;
  </pre>
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

{{EmbedLiveSample("Illustrations des différentes valeurs de transform", "", 1350)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les transformations CSS](/fr/docs/Web/CSS/Guides/Transforms/Using)
- L'attribut SVG {{SVGAttr("transform-origin")}}
- <https://css-tricks.com/almanac/properties/t/transform-origin/>
