---
title: animation-timing-function
slug: Web/CSS/Reference/Properties/animation-timing-function
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La propriété [CSS](/fr/docs/Web/CSS) **`animation-timing-function`** définit la façon dont une animation progresse pendant la durée de chaque cycle.

Il est souvent pratique d'utiliser la propriété raccourcie {{CSSxRef("animation")}} pour définir toutes les propriétés d'animation en une seule fois.

{{InteractiveExample("Démonstration CSS&nbsp;: animation-timing-function")}}

```css interactive-example-choice
animation-timing-function: linear;
```

```css interactive-example-choice
animation-timing-function: ease-in-out;
```

```css interactive-example-choice
animation-timing-function: steps(5, end);
```

```css interactive-example-choice
animation-timing-function: cubic-bezier(0.1, -0.6, 0.2, 0);
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div class="animating" id="example-element"></div>
  <button id="play-pause">Lecture</button>
</section>
```

```css interactive-example
#example-element {
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-name: slide;
  animation-play-state: paused;
  background-color: #1766aa;
  border-radius: 50%;
  border: 5px solid #333333;
  color: white;
  height: 150px;
  margin: auto;
  margin-left: 0;
  width: 150px;
}

#example-element.running {
  animation-play-state: running;
}

#play-pause {
  font-size: 2rem;
}

@keyframes slide {
  from {
    background-color: orange;
    color: black;
    margin-left: 0;
  }
  to {
    background-color: orange;
    color: black;
    margin-left: 80%;
  }
}
```

```js interactive-example
const el = document.getElementById("example-element");
const button = document.getElementById("play-pause");

button.addEventListener("click", () => {
  if (el.classList.contains("running")) {
    el.classList.remove("running");
    button.textContent = "Lecture";
  } else {
    el.classList.add("running");
    button.textContent = "Pause";
  }
});
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
animation-timing-function: ease;
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;
animation-timing-function: linear;
animation-timing-function: step-start;
animation-timing-function: step-end;

/* Valeurs de la fonction cubic-bezier() */
animation-timing-function: cubic-bezier(0.42, 0, 1, 1); /* ease-in */
animation-timing-function: cubic-bezier(0, 0, 0.58, 1); /* ease-out */
animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1); /* ease-in-out */

/* Valeurs de la fonction linear() */
animation-timing-function: linear(0, 0.25, 1);
animation-timing-function: linear(0 0%, 0.25 50%, 1 100%);
animation-timing-function: linear(0, 0.25 50% 75%, 1);
animation-timing-function: linear(0, 0.25 50%, 0.25 75%, 1);

/* Valeurs de la fonction steps() */
animation-timing-function: steps(4, jump-start);
animation-timing-function: steps(10, jump-end);
animation-timing-function: steps(20, jump-none);
animation-timing-function: steps(5, jump-both);
animation-timing-function: steps(6, start);
animation-timing-function: steps(8, end);

/* Animations multiples */
animation-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1, 0.1);

/* Valeurs globales */
animation-timing-function: inherit;
animation-timing-function: initial;
animation-timing-function: revert;
animation-timing-function: revert-layer;
animation-timing-function: unset;
```

### Valeurs

- {{CSSxRef("easing-function")}}
  - : La fonction d'assouplissement qui correspond à une animation donnée, telle que définie par {{CSSxRef("animation-name")}}.

    Les valeurs des mots-clés en dehors des étapes (`ease`, `linear`, `ease-in-out`, etc.) représentent des courbes de Bézier cubiques avec des valeurs fixes en quatre points, tandis que la valeur de la fonction `cubic-bezier()` permet de définir des valeurs qui ne sont pas prédéfinies. La fonction d'assouplissement `steps()` divise le temps d'entrée en un nombre défini d'intervalles de longueur égale. Ces paramètres comprennent un nombre d'étapes et la position d'étape.
    - `linear`
      - : Égal à `cubic-bezier(0.0, 0.0, 1.0, 1.0)`, anime à vitesse constante.
    - `ease`
      - : Égal à `cubic-bezier(0.25, 0.1, 0.25, 1.0)`, valeur par défaut, accélère vers le milieu de l'animation, puis ralentit à la fin.
    - `ease-in`
      - : Égal à `cubic-bezier(0.42, 0, 1.0, 1.0)`, commence lentement, la vitesse de la transition augmente jusqu'à la fin.
    - `ease-out`
      - : Égal à `cubic-bezier(0, 0, 0.58, 1.0)`, commence rapidement puis ralentit jusqu'à la fin de l'animation.
    - `ease-in-out`
      - : Égal à `cubic-bezier(0.42, 0, 0.58, 1.0)`, les propriétés animées commencent lentement, accélèrent, puis ralentissent à nouveau.

    - `cubic-bezier(<number [0,1]> , <number> , <number [0,1]> , <number>)`
      - : Une courbe de Bézier cubique définie par l'auteur·ice, où la première et la troisième valeur doivent être comprises entre 0 et 1.

    - `linear(<number> <percentage>{1,2}, …)`
      - : La fonction interpole linéairement entre les points d'arrêt d'assouplissement fournis. Un point d'arrêt est un couple composé d'une progression de sortie et d'un pourcentage d'entrée. Le pourcentage d'entrée est optionnel et est déduit s'il n'est pas précisé. Si aucun pourcentage d'entrée n'est fourni, alors les premier et dernier points d'arrêt sont fixés à `0%` et `100%` respectivement, et les points d'arrêt intermédiaires reçoivent des valeurs de pourcentage obtenues par interpolation linéaire entre les points précédents et suivants les plus proches qui possèdent une valeur de pourcentage.

    - `steps(<integer>, <step-position>)`
      - : Affiche une itération d'animation en _n_ étapes le long de la transition, chaque étape ayant la même durée. Par exemple, si _n_ vaut 5, il y a 5 étapes. Selon la position d'étape choisie, l'animation marque une pause temporaire à 0%, 20%, 40%, 60% et 80%, ou à 20%, 40%, 60%, 80% et 100%, ou effectue 5 étapes entre 0% et 100%, ou inclut aussi les marques 0%, 25%, 50%, 75% et 100%&nbsp;:
        - `jump-start`
          - : Fonction continue à gauche, le premier saut a lieu au début de l'animation.
        - `jump-end`
          - : Fonction continue à droite, le dernier saut a lieu à la fin de l'animation. C'est la valeur par défaut.
        - `jump-none`
          - : Aucun saut ni au début ni à la fin, ce qui retire une étape lors de l'itération. L'animation reste à 0% puis à 100%, chacun pendant 1/n de la durée.
        - `jump-both`
          - : Comprend des pauses aux marques 0% et 100%, ce qui ajoute une étape pendant l'itération de l'animation.
        - `start`
          - : Identique à `jump-start`.
        - `end`
          - : Identique à `jump-end`.

    - `step-start`
      - : Équivalent à `steps(1, jump-start)`
    - `step-end`
      - : Équivalent à `steps(1, jump-end)`

> [!NOTE]
> Lorsque vous indiquez plusieurs valeurs séparées par des virgules sur une propriété `animation-*`, elles sont appliquées aux animations dans l'ordre dans lequel les {{CSSxRef("animation-name")}} apparaissent. Pour les situations où le nombre d'animations et de valeurs de propriété `animation-*` ne correspond pas, voir [Définir plusieurs valeurs de propriété d'animation](/fr/docs/Web/CSS/Guides/Animations/Using#définir_plusieurs_valeurs_de_propriétés_danimation).

> [!NOTE]
> `animation-timing-function` a le même effet lors de la création [d'animations CSS pilotées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations) que pour les animations classiques basées sur le temps.

## Description

Il est possible de définir des fonctions d'assouplissement sur des images clés (<i lang="en">keyframes</i> en anglais) individuelles dans une règle {{CSSxRef("@keyframes")}}. Si aucune **`animation-timing-function`** n'est définie sur une image clé, la valeur correspondante de **`animation-timing-function`** de l'élément auquel l'animation est appliquée est utilisée pour cette image clé.

Dans une image clé, `animation-timing-function` est un descripteur spécifique à la règle, et non la propriété du même nom. Le minutage n'est pas animé. Au contraire, la fonction d'assouplissement d'une image clé est appliquée propriété par propriété, de l'image clé sur laquelle elle est définie jusqu'à la prochaine image clé définissant cette propriété, ou jusqu'à la fin de l'animation s'il n'y a pas d'image clé suivante définissant cette propriété. Par conséquent, une **`animation-timing-function`** définie sur l'image clé **`100%`** ou **`to`** ne sera jamais utilisée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Tous les exemples de cette section animent les propriétés `width` et `background-color` de plusieurs éléments `<div>` avec différentes valeurs de `animation-timing-function`. La largeur est animée de `0` à `100%`, et la couleur de fond est animée de vert clair à magenta.

### Exemples de la fonction `linear`

Cet exemple montre les effets de différentes valeurs de la fonction d'assouplissement `linear()`.

```html hidden
<div class="parent">
  <div class="linear">Valeurs de 'linear'</div>
  <div class="linear-fn1">linear(0, 0.5 50%, 1)</div>
  <div class="linear-fn2">linear(0, 0.25 75%, 1)</div>
  <div class="linear-fn3">linear(0, 0.75 25%, 1)</div>
  <div class="linear-fn4">linear(0, 0.5 25% 75%, 1)</div>
  <div class="linear-fn5">linear(0, 0.25 45%, 0.75 55%, 0.5 70%, 1)</div>
  <div class="linear-fn6">linear(0, 1.2 50%, 0.75 80%, 1)</div>
  <div class="linear-fn7">linear(0, 0.5 75%, 1 120%)</div>
</div>
<div class="x-axis"><span>25%</span><span>50%</span><span>75%</span></div>
<button>Jouer l'animation</button>
```

```js hidden
const btn = document.querySelector("button");
const divs = document.querySelectorAll(".parent > div[class]");

btn.addEventListener("click", () => {
  btn.setAttribute("disabled", "true");
  for (const div of divs) {
    div.classList.remove("animate");
    void div.offsetWidth;
    div.classList.add("animate");
  }
  setTimeout(() => {
    btn.removeAttribute("disabled");
  }, 11000);
});
```

```css hidden
.x-axis {
  display: flex;
  justify-content: space-evenly;
  width: 80vw;
  margin-left: 4px;
}

.parent {
  background: linear-gradient(
    to right,
    white 24.8%,
    grey 24.8%,
    grey 25.2%,
    white 25.2%,
    white 49.8%,
    grey 49.8%,
    grey 50.2%,
    white 50.2%,
    white 74.8%,
    grey 74.8%,
    grey 75.2%,
    white 75.2%
  );
  width: 80vw;
  font-family: monospace;
  font-weight: bold;
  border: 2px solid grey;
}

.animate {
  animation-name: changeme;
}

.parent > div[class] {
  animation-fill-mode: forwards;
  animation-duration: 10s;

  width: 0;
  margin-bottom: 4px;
  padding: 5px 0;
  box-sizing: border-box;
  text-wrap: nowrap;
  background-color: lime;
}

@keyframes changeme {
  0% {
    width: 0em;
  }
  100% {
    width: 100%;
    background-color: orange;
  }
}

.linear {
  animation-timing-function: linear;
}
.linear-fn1 {
  animation-timing-function: linear(0, 0.5 50%, 1);
}
.linear-fn2 {
  animation-timing-function: linear(0, 0.25 75%, 1);
}
.linear-fn3 {
  animation-timing-function: linear(0, 0.75 25%, 1);
}
.linear-fn4 {
  animation-timing-function: linear(0, 0.5 25% 75%, 1);
}
.linear-fn5 {
  animation-timing-function: linear(0, 0.25 45%, 0.75 55%, 0.5 70%, 1);
}
.linear-fn6 {
  animation-timing-function: linear(0, 1.2 50%, 0.75 80%, 1);
}
.linear-fn7 {
  animation-timing-function: linear(0, 0.5 75%, 1 120%);
}
```

{{EmbedLiveSample("Exemples de la fonction `linear`", 600, 300)}}

L'image suivante montre les graphiques de toutes les valeurs de la fonction `linear()` utilisées dans cet exemple. La progression d'entrée (le temps) est représentée sur l'axe des abscisses (x) et la progression de sortie sur l'axe des ordonnées (y). Selon la syntaxe, la progression d'entrée varie de 0 à 100%, et la sortie varie de 0 à 1.

![Une image montrant les graphiques de la fonction 'linear'](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/linear-function-graphs.png)

Notez que la sortie peut aller vers l'avant ou vers l'arrière.

### Exemples avec Cubic-Bézier

Cet exemple montre les effets de différentes fonctions d'assouplissement de courbe de Bézier.

```html hidden
<div class="parent">
  <div class="linear">linear</div>
  <div class="ease">ease</div>
  <div class="ease-in">ease-in</div>
  <div class="ease-out">ease-out</div>
  <div class="ease-in-out">ease-in-out</div>
  <div class="cb">cubic-bezier(.5, -0.5, 1, 1.5)</div>
</div>
<div class="x-axis"><span>50%</span></div>
<button>Jouer l'animation</button>
```

```js hidden
const btn = document.querySelector("button");
const divs = document.querySelectorAll(".parent > div[class]");

btn.addEventListener("click", () => {
  btn.setAttribute("disabled", "true");
  for (const div of divs) {
    div.classList.remove("animate");
    void div.offsetWidth;
    div.classList.add("animate");
  }
  setTimeout(() => {
    btn.removeAttribute("disabled");
  }, 11000);
});
```

```css hidden
.x-axis {
  display: flex;
  justify-content: space-evenly;
  width: 80vw;
  margin-left: 4px;
}

.parent {
  background: linear-gradient(
    to right,
    white 49.8%,
    grey 49.8%,
    grey 50.2%,
    white 50.2%
  );
  width: 80vw;
  font-family: monospace;
  font-weight: bold;
  border: 2px solid grey;
}

.animate {
  animation-name: changeme;
}

.parent > div[class] {
  animation-fill-mode: forwards;
  animation-duration: 10s;

  width: 0;
  margin-bottom: 4px;
  padding: 5px 0;
  box-sizing: border-box;
  text-wrap: nowrap;
  background-color: lime;
}

@keyframes changeme {
  0% {
    width: 0em;
  }
  100% {
    width: 100%;
    background-color: orange;
  }
}

.linear {
  animation-timing-function: linear;
}
.ease {
  animation-timing-function: ease;
}
.ease-in {
  animation-timing-function: ease-in;
}
.ease-out {
  animation-timing-function: ease-out;
}
.ease-in-out {
  animation-timing-function: ease-in-out;
}
.cb {
  animation-timing-function: cubic-bezier(0.5, -0.5, 1, 1.5);
}
```

{{EmbedLiveSample("Exemples avec Cubic-Bézier", 600, 250)}}

L'image suivante montre les graphiques de toutes les valeurs de la fonction cubic bézier utilisées dans cet exemple. La progression d'entrée (le temps) varie de 0 à 1 et la progression de sortie varie de 0 à 1.

![Une image montrant les graphiques de la fonction 'cubic-bezier'](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/cubic-bezier-function-graphs.png)

### Exemples d'étape

Cet exemple montre les effets de plusieurs valeurs de la fonction d'assouplissement steps.

```html hidden
<div class="parent">
  <div class="linear">linear</div>
  <div class="start">steps(4, start)</div>
  <div class="jump-start">steps(4, jump-start)</div>
  <div class="end">steps(4, end)</div>
  <div class="jump-end">steps(4, jump-end)</div>
  <div class="jump-both">steps(4, jump-both)</div>
  <div class="jump-none">steps(4, jump-none)</div>
  <div class="step-start">step-start</div>
  <div class="step-end">step-end</div>
</div>
<div class="x-axis"><span>25%</span><span>50%</span><span>75%</span></div>
<button>Jouer l'animation</button>
```

```js hidden
const btn = document.querySelector("button");
const divs = document.querySelectorAll(".parent > div[class]");

btn.addEventListener("click", () => {
  btn.setAttribute("disabled", "true");
  for (const div of divs) {
    div.classList.remove("animate");
    void div.offsetWidth;
    div.classList.add("animate");
  }
  setTimeout(() => {
    btn.removeAttribute("disabled");
  }, 11000);
});
```

```css hidden
.x-axis {
  display: flex;
  justify-content: space-evenly;
  width: 80vw;
  margin-left: 4px;
}

.parent {
  background: linear-gradient(
    to right,
    white 24.8%,
    grey 24.8%,
    grey 25.2%,
    white 25.2%,
    white 49.8%,
    grey 49.8%,
    grey 50.2%,
    white 50.2%,
    white 74.8%,
    grey 74.8%,
    grey 75.2%,
    white 75.2%
  );
  width: 80vw;
  font-family: monospace;
  font-weight: bold;
  border: 2px solid grey;
}

.animate {
  animation-name: changeme;
}

.parent > div[class] {
  animation-fill-mode: forwards;
  animation-duration: 10s;

  width: 0;
  margin-bottom: 4px;
  padding: 5px 0;
  box-sizing: border-box;
  text-wrap: nowrap;
  background-color: lime;
}

@keyframes changeme {
  0% {
    width: 0em;
  }
  100% {
    width: 100%;
    background-color: orange;
  }
}
```

```css hidden
.linear {
  animation-timing-function: linear;
}

.start {
  animation-timing-function: steps(4, start);
}
.jump-start {
  animation-timing-function: steps(4, jump-start);
}
.end {
  animation-timing-function: steps(4, end);
}
.jump-end {
  animation-timing-function: steps(4, jump-end);
}
.jump-both {
  animation-timing-function: steps(4, jump-both);
}
.jump-none {
  animation-timing-function: steps(4, jump-none);
}
.step-start {
  animation-timing-function: step-start;
}
.step-end {
  animation-timing-function: step-end;
}
```

{{EmbedLiveSample("Exemples d'étape", 600, 350)}}

L'image suivante montre les graphiques de toutes les valeurs de la fonction `step()` utilisées dans cet exemple. La progression d'entrée (le temps) et la progression de sortie varient de 0 à 1.

![Image montrant les graphiques de la fonction 'step'](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/step-function-graphs.png)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using)
- La propriété {{CSSxRef('easing-function')}}
- Le module [des fonctions d'assouplissement CSS](/fr/docs/Web/CSS/Guides/Easing_functions)
- L'interface API {{DOMxRef("AnimationEvent")}}
- [Outil de génération de courbes de Bézier <sup>(angl.)</sup>](https://cubic-bezier.com/)
- Les autres propriétés d'animation associées&nbsp;: {{CSSxRef("animation")}}, {{CSSxRef("animation-composition")}}, {{CSSxRef("animation-delay")}}, {{CSSxRef("animation-direction")}}, {{CSSxRef("animation-duration")}}, {{CSSxRef("animation-fill-mode")}}, {{CSSxRef("animation-iteration-count")}}, {{CSSxRef("animation-name")}}, {{CSSxRef("animation-play-state")}}, {{CSSxRef("animation-timeline")}}
