---
title: animation-duration
slug: Web/CSS/Reference/Properties/animation-duration
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La propriété [CSS](/fr/docs/Web/CSS) **`animation-duration`** définit la durée nécessaire à une animation pour effectuer un cycle complet.

Il est souvent pratique d'utiliser la propriété raccourcie {{CSSxRef("animation")}} pour définir toutes les propriétés d'animation en une seule fois.

{{InteractiveExample("Démonstration CSS&nbsp;: animation-duration")}}

```css interactive-example-choice
animation-duration: 750ms;
```

```css interactive-example-choice
animation-duration: 3s;
```

```css interactive-example-choice
animation-duration: 0s;
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div class="animating" id="example-element"></div>
  <button id="play-pause">Lecture</button>
</section>
```

```css interactive-example
#example-element {
  animation-direction: alternate;
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
/* Animation seule */
animation-duration: auto; /* par défaut */
animation-duration: 6s;
animation-duration: 120ms;

/* Animations multiples */
animation-duration: 1.64s, 15.22s;
animation-duration: 10s, 35s, 230ms;

/* Valeurs globales */
animation-duration: inherit;
animation-duration: initial;
animation-duration: revert;
animation-duration: revert-layer;
animation-duration: unset;
```

### Valeurs

- `auto`
  - : Pour les animations basées sur le temps, `auto` est équivalent à une valeur de `0s` (voir ci-dessous). Pour les [animations CSS pilotées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations), `auto` remplit toute la chronologie avec l'animation.

- `<time>`
  - : Le temps qu'une animation met pour effectuer un cycle complet. Cette valeur peut être indiquée en secondes (`s`) ou en millisecondes (`ms`). La valeur doit être positive ou nulle et l'unité est obligatoire.

    Si aucune valeur n'est fournie, la valeur par défaut `0s` est utilisée, auquel cas l'animation s'exécute tout de même (les évènements {{DOMxRef("Element/animationstart_event", "animationstart")}} et {{DOMxRef("Element/animationend_event", "animationend")}} sont déclenchés). Le fait que l'animation soit visible ou non lorsque la durée est `0s` dépend de la valeur de {{CSSxRef("animation-fill-mode")}}, comme expliqué ci-dessous&nbsp;:
    - Si `animation-fill-mode` est défini sur `backwards` ou `both`, la première image de l'animation telle que définie par `animation-direction` sera affichée pendant le compte à rebours de {{CSSxRef("animation-delay")}}.
    - Si `animation-fill-mode` est défini sur `forwards` ou `both`, la dernière image de l'animation sera affichée, telle que définie par `animation-direction`, après expiration du `animation-delay`.
    - Si `animation-fill-mode` est défini sur `none`, l'animation n'aura aucun effet visible.

> [!NOTE]
> Les valeurs négatives sont considérées comme invalides. Certaines implémentations, préfixées, considèrent parfois que ces valeurs sont synonymes de `0s`.

> [!NOTE]
> Lorsque vous indiquez plusieurs valeurs séparées par des virgules sur une propriété `animation-*`, elles sont appliquées aux animations dans l'ordre d'apparition des {{CSSxRef("animation-name")}}. Si le nombre d'animations et de valeurs de propriété `animation-*` ne correspond pas, voir [Définir plusieurs valeurs de propriétés d'animation](/fr/docs/Web/CSS/Guides/Animations/Using#définir_plusieurs_valeurs_de_propriétés_danimation).

> [!NOTE]
> Lors de la création d'[animations CSS pilotées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations), définir une valeur `animation-duration` en secondes ou millisecondes n'a pas vraiment de sens. Lors des tests, cela ne semblait avoir aucun effet sur les animations de progression de défilement, tandis que sur les animations de progression de vue, cela semblait rapprocher l'animation de la fin de la chronologie. Cependant, Firefox exige qu'une valeur `animation-duration` soit définie pour appliquer correctement l'animation. Il est donc conseillé de définir `animation-duration` à `1ms` afin que les animations fonctionnent dans Firefox, sans trop altérer l'effet.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la durée d'une animation

Cette animation a une durée d'animation de 0,7 seconde.

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

{{EmbedLiveSample("Définir la durée d'une animation", "100%", 250)}}

Voir [Animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using) pour plus d'exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Manipuler les animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using)
- L'interface API {{DOMxRef("AnimationEvent")}}
- Les autres propriétés d'animation associées&nbsp;: {{CSSxRef("animation")}}, {{CSSxRef("animation-composition")}}, {{CSSxRef("animation-delay")}}, {{CSSxRef("animation-direction")}}, {{CSSxRef("animation-fill-mode")}}, {{CSSxRef("animation-iteration-count")}}, {{CSSxRef("animation-name")}}, {{CSSxRef("animation-play-state")}}, {{CSSxRef("animation-timeline")}}, {{CSSxRef("animation-timing-function")}}
