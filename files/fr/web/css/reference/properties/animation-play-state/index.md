---
title: animation-play-state
slug: Web/CSS/Reference/Properties/animation-play-state
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`animation-play-state`** définit si une animation est en cours ou en pause.

Reprendre une animation en pause fera démarrer l'animation là où elle s'est arrêtée au moment de la pause, plutôt que de recommencer depuis le début de la séquence d'animation.

{{InteractiveExample("Démonstration CSS&nbsp;: animation-play-state")}}

```css interactive-example-choice
animation-play-state: paused;
```

```css interactive-example-choice
animation-play-state: running;
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div class="animating" id="example-element"></div>
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
}

.animating {
  animation-name: slide;
  animation-duration: 3s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
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

## Syntaxe

```css
/* Animation unique */
animation-play-state: running;
animation-play-state: paused;

/* Animations multiples */
animation-play-state: paused, running, running;

/* Valeurs globales */
animation-play-state: inherit;
animation-play-state: initial;
animation-play-state: revert;
animation-play-state: revert-layer;
animation-play-state: unset;
```

### Valeurs

- `running`
  - : L'**animation** est actuellement **en cours**.
- `paused`
  - : L'**animation** est actuellement **en pause**.

> [!NOTE]
> Lorsque vous indiquez plusieurs valeurs séparées par des virgules sur une propriété `animation-*`, elles sont appliquées aux animations dans l'ordre d'apparition des {{CSSxRef("animation-name")}}. Si le nombre d'animations et de valeurs de propriété `animation-*` ne correspond pas, voir [Définir plusieurs valeurs de propriétés d'animation](/fr/docs/Web/CSS/Guides/Animations/Using#définir_plusieurs_valeurs_de_propriétés_danimation).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Mettre une animation en pause

Cette animation est en pause, mais s'exécute lorsque vous la survolez.

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
  animation-name: rotate;
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
  animation-play-state: paused;
}

.box:hover {
  animation-play-state: running;
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

Passez la souris sur le rectangle pour lancer l'animation.

{{EmbedLiveSample("Mettre une animation en pause", "100%", 150)}}

Voir [Animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using) pour des exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Manipuler les animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using)
- L'interface API {{DOMxRef("AnimationEvent")}}
- Les autres propriétés d'animation associées&nbsp;: {{CSSxRef("animation")}}, {{CSSxRef("animation-composition")}}, {{CSSxRef("animation-delay")}}, {{CSSxRef("animation-direction")}}, {{CSSxRef("animation-duration")}}, {{CSSxRef("animation-fill-mode")}}, {{CSSxRef("animation-iteration-count")}}, {{CSSxRef("animation-name")}}, {{CSSxRef("animation-timeline")}}, {{CSSxRef("animation-timing-function")}}
