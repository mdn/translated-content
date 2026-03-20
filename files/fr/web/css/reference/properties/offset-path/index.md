---
title: offset-path
slug: Web/CSS/Reference/Properties/offset-path
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La propriété [CSS](/fr/docs/Web/CSS) **`offset-path`** définit un chemin qu'un élément doit suivre et détermine le positionnement de l'élément dans le conteneur parent du chemin ou dans le système de coordonnées SVG. Le chemin peut être une ligne, une courbe ou une forme géométrique le long de laquelle l'élément est positionné ou se déplace.

La propriété `offset-path` est utilisée en combinaison avec les propriétés {{CSSxRef("offset-distance")}}, {{CSSxRef("offset-rotate")}} et {{CSSxRef("offset-anchor")}} pour contrôler la position et l'orientation de l'élément le long d'un chemin.

{{InteractiveExample("Démonstration CSS&nbsp;: offset-path")}}

```css interactive-example-choice
offset-path: path("M-70,-40 C-70,70 70,70 70,-40");
```

```css interactive-example-choice
offset-path: path("M0,0 L60,70 L-60,30z");
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

#default-example {
  position: relative;
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
/* Valeur par défaut */
offset-path: none;

/* Segment de ligne */
offset-path: ray(45deg closest-side contain);
offset-path: ray(contain 150deg at center center);
offset-path: ray(45deg);

/* URL */
offset-path: url(#path);

/* Formes simples */
offset-path: circle(50% at 25% 25%);
offset-path: ellipse(50% 50% at 25% 25%);
offset-path: inset(50% 50% 50% 50%);
offset-path: polygon(30% 0%, 70% 0%, 100% 50%, 30% 100%, 0% 70%, 0% 30%);
offset-path: path("M 0,200 Q 200,200 260,80 Q 290,20 400,0 Q 300,100 400,200");
offset-path: rect(5px 5px 160px 145px round 20%);
offset-path: xywh(0 5px 100% 75% round 15% 0);

/* Coordonnées de boîte */
offset-path: content-box;
offset-path: padding-box;
offset-path: border-box;
offset-path: fill-box;
offset-path: stroke-box;
offset-path: view-box;

/* Valeurs globales */
offset-path: inherit;
offset-path: initial;
offset-path: revert;
offset-path: revert-layer;
offset-path: unset;
```

### Valeurs

La propriété `offset-path` prend comme valeur une valeur `<offset-path>`, une valeur [`<coord-box>`](/fr/docs/Web/CSS/Reference/Values/box-edge#valeurs), ou les deux, ou le mot-clé `none`. La valeur `<offset-path>` est une fonction {{CSSxRef("ray","ray()")}}, une valeur {{CSSxRef("url_value", "&lt;url&gt;")}}, ou une valeur {{CSSxRef("basic-shape")}}.

- `none`
  - : Définit que l'élément ne suit aucun chemin de décalage. La valeur `none` est équivalente à l'élément n'ayant aucune [transformation de décalage](/fr/docs/Web/CSS/Reference/Properties/offset). Le mouvement de l'élément dans ce cas est déterminé par ses propriétés de position par défaut, telles que {{CSSxRef("top")}} et {{CSSxRef("left")}}, au lieu d'un chemin de décalage. C'est la valeur par défaut.

- `<offset-path>`
  - : Une fonction `ray()`, une valeur `<url>`, ou une valeur `<basic-shape>` qui définit le chemin de décalage géométrique. Si omis, la forme du chemin pour la valeur `<coord-box>` est `inset(0 round X)`, où `X` est la valeur de {{CSSxRef("border-radius")}} de l'élément qui établit le [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block).
    - {{CSSxRef("ray()")}}
      - : Définit une ligne commençant à une position définie, d'une longueur définie, et s'étendant à l'angle spécifié. La fonction `ray()` accepte jusqu'à quatre paramètres — un {{CSSxRef("angle")}}, une valeur de taille optionnelle, le mot-clé optionnel `contain`, et un `at <position>` optionnel.

    - {{CSSxRef("url_value", "&lt;url&gt;")}}
      - : Définit l'ID d'un [élément de forme SVG](/fr/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes). Le chemin est la forme de l'élément SVG {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("line")}}, {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, ou {{SVGElement("rect")}} référencé par son `id` dans la fonction `url()`. Si l'URL ne référence pas un élément de forme ou est autrement invalide, la valeur résolue pour le chemin de décalage est `path("M0,0")` (qui est une valeur `<basic-shape>` valide).

    - {{CSSxRef("basic-shape")}}
      - : Définit le chemin de décalage comme le chemin équivalent d'une [fonction de forme CSS de base](/fr/docs/Web/CSS/Reference/Values/basic-shape), telle que {{CSSxRef("basic-shape/circle","circle()")}}, {{CSSxRef("basic-shape/ellipse","ellipse()")}}, {{CSSxRef("basic-shape/inset","inset()")}}, {{CSSxRef("basic-shape/path","path()")}}, {{CSSxRef("basic-shape/polygon","polygon()")}}, {{CSSxRef("basic-shape/rect","rect()")}}, ou {{CSSxRef("basic-shape/xywh","xywh()")}}. Par exemple, si le `<basic_shape>` est une fonction `ellipse()`, alors le chemin est le contour de l'ellipse, commençant au point le plus à droite de l'ellipse, en suivant le sens des aiguilles d'une montre pour une rotation complète. Pour `ellipse()` et `circle()`, qui acceptent le paramètre `at <position>`, si le `<position>` est omis, la position par défaut est `center` sauf si l'élément a une valeur {{CSSxRef("offset-position")}} définie. Dans ce cas, la valeur `offset-position` est utilisée pour le paramètre `at <position>`. Des formes plus complexes peuvent être définies en utilisant la fonction {{CSSxRef("basic-shape/shape","shape()")}}.

- [`<coord-box>`](/fr/docs/Web/CSS/Reference/Values/box-edge#valeurs)
  - : Définit les informations de taille de la [boîte de référence](/fr/docs/Web/CSS/Guides/Shapes/Using_shape-outside#the_reference_box) contenant le chemin. La boîte de référence est dérivée de l'élément qui établit le bloc englobant pour cet élément. Ce paramètre est optionnel. S'il n'est pas défini, la valeur par défaut est `border-box` dans les contextes CSS. Dans les contextes SVG, la valeur est traitée comme `view-box`. Si `ray()` ou `<basic-shape>` est utilisé pour définir le chemin de décalage, la valeur `<coord-box>` fournit la boîte de référence pour le rayon ou le `<basic-shape>`, respectivement. Si `<url>` est utilisé pour définir le chemin de décalage, la valeur `<coord-box>` fournit le système de coordonnées de la fenêtre et de l'utilisateur·ice pour l'élément de forme, avec l'origine (`0 0`) dans le coin supérieur gauche et la taille étant `1px`.

## Description

La propriété `offset-path` définit un chemin que peut suivre un élément animé. Un chemin de décalage est soit un chemin défini avec un ou plusieurs sous-chemins, soit la géométrie d'une forme de base qui n'est pas mise en forme. La position exacte de l'élément sur le chemin de décalage est déterminée par la propriété {{CSSxRef("offset-distance")}}. Chaque forme ou chemin doit définir une position initiale pour la valeur calculée de `0` pour {{CSSxRef("offset-distance")}} et une direction initiale qui définit la rotation de l'objet vers la position initiale.

Les premières versions de la spécification appelaient cette propriété `motion-path`. Elle a été renommée en `offset-path` car la propriété décrit des positions statiques, et non un mouvement.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Créer un chemin de décalage en utilisant le positionnement des bords de la boîte

Cet exemple montre l'utilisation de différentes valeurs `<coord-box>` dans la propriété `offset-path`.

```html hidden
<div class="box blueBox"></div>
<div class="box redBox"></div>
<div class="box greenBox"></div>
```

```css hidden
body {
  width: 300px;
  height: 200px;
  border-radius: 50px;
  border: dashed aqua;
  border-width: 25px;
  padding: 25px;
  margin: 50px;
}
```

```css
.box {
  width: 40px;
  height: 20px;
  animation: move 8000ms infinite ease-in-out;
}

.blueBox {
  background-color: blue;
  offset-path: border-box;
  offset-distance: 5%;
}

.greenBox {
  background-color: green;
  offset-path: padding-box;
  offset-distance: 8%;
}

.redBox {
  background-color: red;
  offset-path: content-box;
  offset-distance: 12%;
}

@keyframes move {
  0%,
  20% {
    offset-distance: 0%;
  }
  80%,
  100% {
    offset-distance: 100%;
  }
}
```

Dans cet exemple, les marges, les bordures et les espacements ont été volontairement définis avec de grandes valeurs pour démontrer le placement des rectangles bleu, vert et rouge sur leurs bords respectifs de `<coord-box>`&nbsp;: `border-box`, `padding-box` et `content-box`.

![Le rectangle bleu se trouve sur le bord extérieur de la boîte de bordure, le rectangle vert est sur le bord intérieur de la bordure, qui est le bord extérieur de la boîte de remplissage, et le rectangle rouge est sur le bord extérieur de la boîte de contenu.](offset-path-coord-box.png)

#### Résultat

{{EmbedLiveSample("Créer un chemin de décalage en utilisant le positionnement des bords de la boîte", "100%", 400)}}

### Créer un chemin de décalage en utilisant `path()`

Dans cet exemple, l'élément {{SVGElement("svg")}} crée une maison avec une cheminée et définit également deux moitiés d'une paire de ciseaux. La maison et la cheminée sont composées de rectangles et de polygones, et les moitiés des ciseaux sont représentées par deux éléments `<path>` distincts. Dans le code CSS, la propriété `offset-path` est utilisée pour spécifier un chemin à suivre pour les deux moitiés des ciseaux. Ce chemin défini en CSS est identique à celui représenté par l'élément `<path>` dans le SVG, qui est le contour de la maison incluant la cheminée.

```html live-sample___offset_path_path
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="700"
  height="450"
  viewBox="350 0 1400 900">
  <title>Maison et ciseaux</title>
  <rect x="595" y="423" width="610" height="377" fill="blue" />
  <polygon points="506,423 900,190 1294,423" fill="yellow" />
  <polygon points="993,245 993,190 1086,190 1086,300" fill="red" />
  <path
    id="house"
    d="M900,190 L993,245 V201 A11,11 0 0,1 1004,190 H1075 A11,11 0 0,1 1086,201 V300 L1294,423 H1216 A11,11 0 0,0 1205,434 V789 A11,11 0 0,1 1194,800 H606 A11,11 0 0,1 595,789 V434 A11,11 0 0,0 584,423 H506 L900,190"
    fill="none"
    stroke="black"
    stroke-width="13"
    stroke-linejoin="round"
    stroke-linecap="round" />
  <path
    id="first-scissor-half"
    class="scissor-half"
    d="M30,0 H-10 A10,10 0 0,0 -20,10 A20,20 0 1,1 -40,-10 H20 A10,10 0 0,1 30,0 M-40,20 A10,10 1 0,0 -40,0 A10,10 1 0,0 -40,20 M0,0" />
  <path
    id="second-scissor-half"
    class="scissor-half"
    d="M30,0 H-10 A10,10 0 0,1 -20,-10 A20,20 0 1,0 -40,10 H20 A10,10 0 0,0 30,0 M-40,-20 A10,10 1 0,0 -40,0 A10,10 1 0,0 -40,-20 M0,0" />
</svg>
```

```css live-sample___offset_path_path
.scissor-half {
  offset-path: path(
    "M900,190 L993,245 V201 A11,11 0 0,1 1004,190 H1075 A11,11 0 0,1 1086,201 V300 L1294,423 H1216 A11,11 0 0,0 1205,434 V789 A11,11 0 0,1 1194,800 H606 A11,11 0 0,1 595,789 V434 A11,11 0 0,0 584,423 H506 L900,190"
  );
  transform: translate(0px, 0px);
  fill: green;
  stroke: black;
  stroke-width: 5px;
  stroke-linejoin: round;
  stroke-linecap: round;
  fill-rule: evenodd;
  offset-anchor: 0 0;
}

#first-scissor-half {
  animation:
    move 12s linear infinite,
    rotate-left 1s infinite;
}
#second-scissor-half {
  animation:
    move 12s linear infinite,
    rotate-right 1s infinite;
}

@keyframes move {
  from {
    offset-distance: 0%;
  }
  to {
    offset-distance: 100%;
  }
}

@keyframes rotate-left {
  0% {
    offset-rotate: auto 0deg;
  }
  50% {
    offset-rotate: auto -45deg;
  }
  100% {
    offset-rotate: auto 0deg;
  }
}

@keyframes rotate-right {
  0% {
    offset-rotate: auto 0deg;
  }
  50% {
    offset-rotate: auto 45deg;
  }
  100% {
    offset-rotate: auto 0deg;
  }
}
```

#### Résultat

Sans la propriété `offset-path`, les deux moitiés des ciseaux seraient positionnées par défaut dans le coin supérieur gauche du canevas. Cependant, en utilisant `offset-path`, les deux moitiés des ciseaux sont alignées avec le point de départ du chemin SVG, ce qui leur permet de se déplacer le long de celui-ci.

{{EmbedLiveSample("offset_path_path", "100%", 450)}}

### Créer un chemin de décalage en utilisant `url()`

Cet exemple illustre comment se référer à une forme SVG pour définir la forme du chemin qu'un élément peut suivre. Le cercle vert (défini par `.target`) suit le chemin d'un rectangle, qui est défini en passant l'ID de la forme SVG (`svgRect`) à la propriété `offset-path` en utilisant `url()`.

Le rectangle SVG qui définit la forme du chemin est montré ici uniquement pour démontrer visuellement que le cercle vert suit bien le chemin défini par ce rectangle.

```html live-sample___offset_path_url
<div class="outer">
  <div class="target"></div>
</div>
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect id="svgRect" x="50" y="50" width="200" height="100" />
</svg>
```

```css hidden live-sample___offset_path_url
.outer {
  position: absolute;
}
```

```css live-sample___offset_path_url
.target {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: green;
  offset-path: url("#svgRect");
  offset-anchor: auto;
  animation: move 5s linear infinite;
}

#svgRect {
  fill: antiquewhite;
  stroke: black;
  stroke-width: 2;
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

{{EmbedLiveSample("offset_path_url", "100%", 250)}}

### Différentes formes

Cet exemple implique différentes valeurs de {{CSSxRef("basic-shape")}}&nbsp;: {{CSSxRef("basic-shape/circle", "circle()")}}, {{CSSxRef("basic-shape/ellipse", "ellipse()")}}, {{CSSxRef("basic-shape/inset", "inset()")}}, {{CSSxRef("basic-shape/polygon", "polygon()")}}.

```html
<div class="container">
  <div class="mover mover-path">path()</div>
  <div class="mover mover-circle">circle()</div>
  <div class="mover mover-ellipse">ellipse()</div>
  <div class="mover mover-inset">inset()</div>
  <div class="mover mover-polygon">polygon()</div>
</div>
```

```css
.container {
  border: 1px solid black;
  width: 80vw;
  height: 80vh;
  position: relative;
  left: 10vw;
  top: 10vh;
}

.mover {
  width: 100px;
  height: 80px;
  border-radius: 50%;
  line-height: 80px;
  text-indent: 10px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='e644da42-a34e-4ceb-a89a-89a4eb6dcc51' data-name='Layer 1' viewBox='0 0 71.08 54.62'%3E%3Ctitle%3Epointer-hand%3C/title%3E%3Cpath d='M43.56,49.35a5.24,5.24,0,0,0-1.27-3.43,5.26,5.26,0,0,0,1.86-9,5.26,5.26,0,0,0-.5-9.53L66.12,27c2.28-.07,5-1.57,5-4.58a5.06,5.06,0,0,0-4.58-4.83L34.08,17c3.48-2.89,6.26-6.55,6.73-11.08C41.45-.14,36.07-1.15,35,1.09,32,7.11,23,12.75,17.42,15.52,8.64,19.08,0,19.77,0,34.56,0,42.7,2.7,47.94,9.42,51c5.51,2.52,13.71,3.59,25.36,3.59H38.3A5.27,5.27,0,0,0,43.56,49.35Z'/%3E%3C/svg%3E")
    no-repeat;
  background-size: cover;
  color: white;
  animation: move 10s linear infinite;
  font-family: monospace;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: center center;
}
.mover-path {
  top: 50px;
  motion-path: path(
    "M18.45,58.46s52.87-70.07,101.25-.75,101.75-6.23,101.75-6.23S246.38,5.59,165.33,9.08s-15,71.57-94.51,74.56S18.45,58.46,18.45,58.46Z"
  );
  offset-path: path(
    "M18.45,58.46s52.87-70.07,101.25-.75,101.75-6.23,101.75-6.23S246.38,5.59,165.33,9.08s-15,71.57-94.51,74.56S18.45,58.46,18.45,58.46Z"
  );
}
.mover-circle {
  top: 150px;
  offset-path: circle(100px at 50px 50px);
  motion-path: circle(100px at 50px 50px);
}
.mover-ellipse {
  top: 250px;
  offset-path: ellipse(25% 40% at 50% 50%);
  motion-path: ellipse(25% 40% at 50% 50%);
}
.mover-inset {
  top: 350px;
  offset-path: inset(5% 20% 15% 10%);
  motion-path: inset(5% 20% 15% 10%);
}
.mover-polygon {
  top: 450px;
  offset-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
  motion-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
}

@keyframes move {
  100% {
    motion-offset: 100%;
    offset-distance: 100%;
  }
}
```

{{EmbedLiveSample("Différentes formes", "", 500)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("offset")}}
- La propriété {{CSSxRef("offset-distance")}}
- La propriété {{CSSxRef("offset-rotate")}}
- Le tutoriel de [chemins](/fr/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths) SVG
- La fonction {{CSSxRef("basic-shape/path", "path()")}}
