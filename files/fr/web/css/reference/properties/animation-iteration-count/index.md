---
title: animation-iteration-count
slug: Web/CSS/Reference/Properties/animation-iteration-count
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`animation-iteration-count`** définit le nombre de fois qu'une séquence d'animation doit être jouée avant de s'arrêter.

Il est souvent pratique d'utiliser la propriété raccourcie {{CSSxRef("animation")}} pour définir toutes les propriétés d'animation en une seule fois.

{{InteractiveExample("Démonstration CSS&nbsp;: animation-iteration-count")}}

```css interactive-example-choice
animation-iteration-count: 0;
```

```css interactive-example-choice
animation-iteration-count: 2;
```

```css interactive-example-choice
animation-iteration-count: 1.5;
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div>Animation <span id="play-status"></span></div>
  <div id="example-element">Sélectionnez un nombre pour démarrer&nbsp;!</div>
</section>
```

```css interactive-example
#example-element {
  align-items: center;
  background-color: #1766aa;
  border-radius: 50%;
  border: 5px solid #333333;
  color: white;
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: center;
  margin: auto;
  margin-left: 0;
  width: 150px;
}

#play-status {
  font-weight: bold;
}

.animating {
  animation-name: slide;
  animation-duration: 3s;
  animation-timing-function: ease-in;
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
  status.textContent = "déclée";
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
/* Valeur avec un mot-clé */
animation-iteration-count: infinite;

/* Valeur <number> */
animation-iteration-count: 3;
animation-iteration-count: 2.3;

/* Gestion de plusieurs animations */
animation-iteration-count: 2, 0, infinite;

/* Valeurs globales */
animation-iteration-count: inherit;
animation-iteration-count: initial;
animation-iteration-count: revert;
animation-iteration-count: revert-layer;
animation-iteration-count: unset;
```

La propriété **`animation-iteration-count`** se définit avec une ou plusieurs valeurs séparées par des virgules.

### Valeurs

- `infinite`
  - : L'animation sera répétée indéfiniment.
- {{CSSxRef("&lt;number&gt;")}}
  - : Le nombre de répétitions de l'animation&nbsp;; la valeur par défaut est `1`. Vous pouvez indiquer des valeurs non entières pour jouer une partie d'un cycle d'animation&nbsp;: par exemple, `0.5` jouera la moitié du cycle. Les valeurs négatives sont invalides.

> [!NOTE]
> Lorsque vous indiquez plusieurs valeurs séparées par des virgules sur une propriété `animation-*`, elles sont appliquées aux animations dans l'ordre d'apparition des {{CSSxRef("animation-name")}}. Si le nombre d'animations et de valeurs de propriété `animation-*` ne correspond pas, voir [Définir plusieurs valeurs de propriétés d'animation](/fr/docs/Web/CSS/Guides/Animations/Using#définir_plusieurs_valeurs_de_propriétés_danimation).

> [!NOTE]
> Lors de la création d'[animations CSS pilotées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations), définir une valeur `animation-iteration-count` fait répéter l'animation ce nombre de fois au fil de la progression de la chronologie. Si aucune valeur `animation-iteration-count` n'est fournie, l'animation ne se produira qu'une seule fois. La valeur `infinite` est valide pour les animations pilotées par le défilement, mais elle donne une animation qui ne fonctionne pas.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir le nombre d'itérations

Cette animation sera exécutée 10 fois.

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
  animation-iteration-count: 10;
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

{{EmbedLiveSample("Définir le nombre d'itérations", 300, 300)}}

Voir [Animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using) pour des exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Manipuler les animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using)
- L'interface API {{DOMxRef("AnimationEvent")}}
- Les autres propriétés d'animation associées&nbsp;: {{CSSxRef("animation")}}, {{CSSxRef("animation-composition")}}, {{CSSxRef("animation-delay")}}, {{CSSxRef("animation-direction")}}, {{CSSxRef("animation-duration")}}, {{CSSxRef("animation-fill-mode")}}, {{CSSxRef("animation-name")}}, {{CSSxRef("animation-play-state")}}, {{CSSxRef("animation-timeline")}}, {{CSSxRef("animation-timing-function")}}
