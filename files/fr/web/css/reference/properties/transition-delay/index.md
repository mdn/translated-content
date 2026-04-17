---
title: transition-delay
slug: Web/CSS/Reference/Properties/transition-delay
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`transition-delay`** indique la durée à attendre avant de débuter [la transition](/fr/docs/Web/CSS/Guides/Transitions/Using) qui s'applique pour un changement de propriété.

{{InteractiveExample("Démonstration CSS&nbsp;: transition-delay")}}

```css interactive-example-choice
transition-delay: 250ms;
transition-property: margin-right;
```

```css interactive-example-choice
transition-delay: 1s;
transition-property: background-color;
```

```css interactive-example-choice
transition-delay: 1s;
transition-property: margin-right, color;
```

```css interactive-example-choice
transition-delay: 1s, 250ms;
transition-property: margin-right, color;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">Survolez pour voir<br />la transition.</div>
</section>
```

```css interactive-example
#example-element {
  background-color: #e4f0f5;
  color: black;
  padding: 1rem;
  border-radius: 0.5rem;
  font: 1em monospace;
  width: 100%;
  transition: margin-right 2s;
}

#default-example:hover > #example-element {
  background-color: #990099;
  color: white;
  margin-right: 40%;
}
```

Cette durée peut être nulle, positive ou négative&nbsp;:

- Une valeur de `0s` (ou `0ms`) indique que l'animation correspondante démarrera immédiatement.
- Une valeur positive permettra d'attendre avant de démarrer l'effet de transition.
- Une valeur négative lancera l'animation immédiatement mais à partir d'un état intermédiaire (comme si la transition avait déjà commencé).

Vous pouvez définir plusieurs délais, ce qui est utile lors de la transition de plusieurs propriétés. Chaque délai sera appliqué à la propriété correspondante définie par la propriété {{CSSxRef("transition-property")}}, qui agit comme une liste principale. S'il y a moins de délais définis que dans la liste principale, la liste des valeurs de délai sera répétée jusqu'à ce qu'il y en ait suffisamment. S'il y a plus de délais, la liste des valeurs de délai sera tronquée pour correspondre au nombre de propriétés. Dans les deux cas, la déclaration CSS reste valide.

## Syntaxe

```css
/* Valeurs de type <time> */
transition-delay: 3s;
transition-delay: 2s, 4ms;

/* Valeurs globales */
transition-delay: inherit;
transition-delay: initial;
transition-delay: revert;
transition-delay: revert-layer;
transition-delay: unset;
```

### Valeurs

- {{CSSxRef("&lt;time&gt;")}}
  - : Indique la durée à attendre entre le changement de valeur d'une propriété et le début de l'effet de transition.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple illustrant différentes temporisations

#### HTML

```html
<div class="box delay-1">0,5 secondes</div>

<div class="box delay-2">2 secondes</div>

<div class="box delay-3">4 secondes</div>

<button id="change">Changer</button>
```

#### CSS

```css
.box {
  margin: 20px;
  padding: 10px;
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: red;
  font-size: 18px;
  transition-property: background-color, font-size, transform, color;
  transition-timing-function: ease-in-out;
  transition-duration: 3s;
}

.transformed-state {
  transform: rotate(270deg);
  background-color: blue;
  color: yellow;
  font-size: 12px;
  transition-property: background-color, font-size, transform, color;
  transition-timing-function: ease-in-out;
  transition-duration: 3s;
}

.delay-1 {
  transition-delay: 0.5s;
}

.delay-2 {
  transition-delay: 2s;
}

.delay-3 {
  transition-delay: 4s;
}
```

#### JavaScript

```js
function change() {
  const elements = document.querySelectorAll("div.box");
  for (const element of elements) {
    element.classList.toggle("transformed-state");
  }
}

const changeButton = document.querySelector("#change");
changeButton.addEventListener("click", change);
```

#### Résultat

{{EmbedLiveSample("Exemple illustrant différentes temporisations", 275, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les transitions CSS](/fr/docs/Web/CSS/Guides/Transitions/Using)
- L'interface API {{DOMxRef("TransitionEvent")}}
