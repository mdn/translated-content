---
title: animation-direction
slug: Web/CSS/Reference/Properties/animation-direction
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`animation-direction`** définit si une animation doit se jouer en avant, en arrière ou alterner entre la lecture en avant et en arrière.

Il est souvent pratique d'utiliser la propriété raccourcie {{CSSxRef("animation")}} pour définir toutes les propriétés d'animation en une seule fois.

{{InteractiveExample("Démonstration CSS&nbsp;: animation-direction")}}

```css interactive-example-choice
animation-direction: normal;
```

```css interactive-example-choice
animation-direction: reverse;
```

```css interactive-example-choice
animation-direction: alternate;
```

```css interactive-example-choice
animation-direction: alternate-reverse;
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div id="example-element"></div>
  <button id="play-pause">Lecture</button>
</section>
```

```css interactive-example
#example-element {
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-name: slide;
  animation-play-state: paused;
  animation-timing-function: ease-in;
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
animation-direction: normal;
animation-direction: reverse;
animation-direction: alternate;
animation-direction: alternate-reverse;

/* Gestion de plusieurs animations */
animation-direction: normal, reverse;
animation-direction: alternate, reverse, normal;

/* Valeurs globales */
animation-direction: inherit;
animation-direction: initial;
animation-direction: revert;
animation-direction: revert-layer;
animation-direction: unset;
```

### Valeurs

- `normal`
  - : L'animation est jouée dans le _sens normal_ à chaque cycle. Autrement dit, au début de chaque cycle, l'animation est initialisée dans l'état de début. C'est le réglage par défaut.
- `reverse`
  - : L'animation est jouée dans le _sens inverse_ à chaque cycle. Au début de chaque cycle, l'animation reprend depuis l'état de fin.
- `alternate`
  - : La lecture de l'animation se fait de façon alternée et change de sens à chaque cycle en commençant par le _sens normal_. Lorsque le sens est inversé, les étapes de l'animation sont effectuées de façon inversée et les fonctions de progression (_timing functions_) sont également inversées (`ease-in` sera ainsi remplacée par `ease-out`). Le premier cycle se fait dans le sens normal, le deuxième dans le sens inverse et ainsi de suite.
- `alternate-reverse`
  - : La lecture de l'animation se fait de façon alternée et change de sens à chaque cycle en commençant par le _sens inverse_ (cf. ci-avant). Le premier cycle se fait dans le sens inverse, le deuxième dans le sens normal et ainsi de suite.

> [!NOTE]
> Lorsque vous indiquez plusieurs valeurs séparées par des virgules sur une propriété `animation-*`, elles sont appliquées aux animations dans l'ordre d'apparition des {{CSSxRef("animation-name")}}. Si le nombre d'animations et de valeurs de propriété `animation-*` ne correspond pas, voir [Définir plusieurs valeurs de propriétés d'animation](/fr/docs/Web/CSS/Guides/Animations/Using#définir_plusieurs_valeurs_de_propriétés_danimation).

> [!NOTE]
> Lors de la création d'[animations CSS pilotées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations), la définition d'une valeur pour `animation-direction` fonctionne comme attendu, par exemple `reverse` fait s'exécuter l'animation à l'envers au fil de la progression de la chronologie. Une valeur `alternate` (combinée avec {{CSSxRef("animation-iteration-count")}}) fait s'exécuter l'animation en avant puis en arrière à mesure que la chronologie progresse.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Inverser le sens de l'animation

#### HTML

```html
<div class="box"></div>
```

#### CSS

```css
.box {
  background-color: rebeccapurple;
  border-radius: 10px;
  width: 100px;
  height: 100px;
}

.box:hover {
  animation-name: rotate;
  animation-duration: 0.7s;
  animation-direction: reverse;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

#### Résultat

Passez la souris sur le rectangle pour démarrer l'animation.

{{EmbedLiveSample("Inverser le sens de l'animation", "100%", 150)}}

Voir [Animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using) pour des exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Manipuler les animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using)
- L'interface API {{DOMxRef("AnimationEvent")}}
- Les autres propriétés d'animation associées&nbsp;: {{CSSxRef("animation")}}, {{CSSxRef("animation-composition")}}, {{CSSxRef("animation-delay")}}, {{CSSxRef("animation-duration")}}, {{CSSxRef("animation-fill-mode")}}, {{CSSxRef("animation-iteration-count")}}, {{CSSxRef("animation-name")}}, {{CSSxRef("animation-play-state")}}, {{CSSxRef("animation-timeline")}}, {{CSSxRef("animation-timing-function")}}
