---
title: animation-delay
slug: Web/CSS/Reference/Properties/animation-delay
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`animation-delay`** définit le temps à attendre entre l'application de l'animation sur un élément et le début de l'animation. L'animation peut démarrer plus tard, immédiatement depuis le début, ou immédiatement en étant déjà avancée.

Il est souvent pratique d'utiliser la propriété raccourcie {{CSSxRef("animation")}} pour définir toutes les propriétés d'animation en une seule fois.

{{InteractiveExample("Démonstration CSS&nbsp;: animation-delay")}}

```css interactive-example-choice
animation-delay: 250ms;
```

```css interactive-example-choice
animation-delay: 2s;
```

```css interactive-example-choice
animation-delay: -2s;
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div>Animation <span id="play-status"></span></div>
  <div id="example-element">Sélectionnez un délai pour démarrer&nbsp;!</div>
</section>
```

```css interactive-example
#example-element {
  background-color: #1766aa;
  color: white;
  margin: auto;
  margin-left: 0;
  border: 5px solid #333333;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#play-status {
  font-weight: bold;
}

.animating {
  animation-name: slide;
  animation-duration: 3s;
  animation-timing-function: ease-in;
  animation-iteration-count: 2;
  animation-direction: alternate;
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
const status = document.getElementById("play-status");

function update() {
  status.textContent = "décalée";
  el.className = "";
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      el.className = "animating";
    });
  });
}

el.addEventListener("animationstart", () => {
  status.textContent = "en cours";
});

el.addEventListener("animationend", () => {
  status.textContent = "terminée";
});

const observer = new MutationObserver(() => {
  update();
});

observer.observe(el, {
  attributes: true,
  attributeFilter: ["style"],
});

update();
```

## Syntaxe

```css
/* Animation seule */
animation-delay: 3s;
animation-delay: 0s;
animation-delay: -1500ms;

/* Animations multiples */
animation-delay: 2.1s, 480ms;

/* Valeurs globales */
animation-delay: inherit;
animation-delay: initial;
animation-delay: revert;
animation-delay: revert-layer;
animation-delay: unset;
```

### Valeurs

- {{CSSxRef("&lt;time&gt;")}}
  - : Le décalage temporel, à partir du moment où l'animation est appliquée à l'élément, sur lequel l'animation doit commencer. Cette valeur peut être indiquée en secondes (`s`) ou en millisecondes (`ms`). L'unité est obligatoire.

    Une valeur positive indique que l'animation doit commencer après le temps indiqué. Une valeur de `0s`, qui est la valeur par défaut, indique que l'animation doit commencer dès qu'elle est appliquée.

    Une valeur négative fait démarrer l'animation immédiatement, mais en cours de cycle. Par exemple, si vous définissez `-1s` comme délai d'animation, l'animation commencera immédiatement mais débutera à 1 seconde après le début de la séquence d'animation. Si vous indiquez une valeur négative pour le délai d'animation, mais que la valeur de départ est implicite, la valeur de départ est prise au moment où l'animation est appliquée à l'élément.

> [!NOTE]
> Lorsque vous indiquez plusieurs valeurs séparées par des virgules sur une propriété `animation-*`, elles sont appliquées aux animations dans l'ordre d'apparition des {{CSSxRef("animation-name")}}. Si le nombre d'animations et de valeurs de propriété `animation-*` ne correspond pas, voir [Définir plusieurs valeurs de propriétés d'animation](/fr/docs/Web/CSS/Guides/Animations/Using#définir_plusieurs_valeurs_de_propriétés_danimation).

> [!NOTE]
> `animation-delay` n'a aucun effet sur les [animations CSS pilotées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir un délai d'animation

Cette animation a un délai de 2 secondes.

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
  animation-delay: 2s;
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

{{EmbedLiveSample("Définir un délai d'animation", "100%", 250)}}

Voir [Animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using) pour des exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Manipuler les animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using)
- L'interface API {{DOMxRef("AnimationEvent")}}
- Les autres propriétés d'animation associées&nbsp;: {{CSSxRef("animation")}}, {{CSSxRef("animation-composition")}}, {{CSSxRef("animation-direction")}}, {{CSSxRef("animation-duration")}}, {{CSSxRef("animation-fill-mode")}}, {{CSSxRef("animation-iteration-count")}}, {{CSSxRef("animation-name")}}, {{CSSxRef("animation-play-state")}}, {{CSSxRef("animation-timeline")}}, {{CSSxRef("animation-timing-function")}}
