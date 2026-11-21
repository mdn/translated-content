---
title: Propriété CSS `transition-duration`
short-title: transition-duration
slug: Web/CSS/Reference/Properties/transition-duration
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

La propriété [CSS](/fr/docs/Web/CSS) **`transition-duration`** définit le nombre de secondes ou de millisecondes que doit durer une animation. La valeur par défaut, `0s`, indique qu'il n'y a aucune animation.

Vous pouvez définir plusieurs durées&nbsp;; chaque durée est appliquée à la propriété correspondante telle que définie dans la propriété {{CSSxRef("transition-property")}}, qui agit comme une liste principale. Si le nombre de durées définies est inférieur à celui de la liste principale, l'agent utilisateur répète la liste des durées. Si le nombre de durées définies est supérieur à celui de la liste principale, la liste est tronquée à la bonne taille. Dans les deux cas, la déclaration CSS reste valide.

{{InteractiveExample("Démonstration CSS&nbsp;: transition-duration")}}

```css interactive-example-choice
transition-duration: 500ms;
transition-property: margin-right;
```

```css interactive-example-choice
transition-duration: 2s;
transition-property: background-color;
```

```css interactive-example-choice
transition-duration: 2s;
transition-property: margin-right, color;
```

```css interactive-example-choice
transition-duration: 3s, 1s;
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

## Syntaxe

```css
/* Valeurs de type <time> */
transition-duration: 6s;
transition-duration: 120ms;
transition-duration: 1s, 15s;
transition-duration: 10s, 30s, 230ms;

/* Valeurs globales */
transition-duration: inherit;
transition-duration: initial;
transition-duration: revert;
transition-duration: revert-layer;
transition-duration: unset;
```

### Valeurs

- {{CSSxRef("&lt;time&gt;")}}
  - : Une valeur {{CSSxRef("&lt;time&gt;")}} qui définit la durée que doit prendre l'animation pour changer la valeur d'une propriété (entre l'ancienne valeur et la nouvelle). Une durée de `0s` qu'aucune transition n'est appliquée et que le passage d'un état à l'autre est instantané. Si la valeur utilisée est négative, la déclaration est considérée comme invalide.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple illustrant différentes durées

#### HTML

```html
<div class="boite duree-1">0,5 secondes</div>

<div class="boite duree-2">2 secondes</div>

<div class="boite duree-3">4 secondes</div>

<button id="changer">Changer</button>
```

#### CSS

```css
.boite {
  margin: 20px;
  padding: 10px;
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: red;
  font-size: 18px;
  transition-property: background-color font-size transform color;
  transition-timing-function: ease-in-out;
}

.transformed-state {
  transform: rotate(270deg);
  background-color: blue;
  color: yellow;
  font-size: 12px;
  transition-property: background-color font-size transform color;
  transition-timing-function: ease-in-out;
}

.duree-1 {
  transition-duration: 0.5s;
}

.duree-2 {
  transition-duration: 2s;
}

.duree-3 {
  transition-duration: 4s;
}
```

#### JavaScript

```js
function change() {
  const elements = document.querySelectorAll("div.boite");
  for (let element of elements) {
    element.classList.toggle("transformed-state");
  }
}

const changeButton = document.querySelector("#changer");
changeButton.addEventListener("click", change);
```

#### Résultat

{{EmbedLiveSample("Exemple illustrant différentes durées", 275, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les transitions CSS](/fr/docs/Web/CSS/Guides/Transitions/Using)
- La propriété {{CSSxRef("transition")}}
- La propriété {{CSSxRef("transition-property")}}
- La propriété {{CSSxRef("transition-timing-function")}}
- La propriété {{CSSxRef("transition-delay")}}
- L'interface API {{DOMxRef("TransitionEvent")}}
