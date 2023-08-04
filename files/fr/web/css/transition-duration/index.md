---
title: transition-duration
slug: Web/CSS/transition-duration
---

{{CSSRef}}

La propriété **`transition-duration`** définit le nombre de secondes ou de millisecondes que doit durer une animation. La valeur par défaut, `0s`, indique qu'il n'y aura aucune animation.

{{EmbedInteractiveExample("pages/css/transition-duration.html")}}

Il est possible de définir plusieurs durées, chacune sera appliquée à la propriété correspondante listée par {{cssxref("transition-property")}} (qui agit comme un index des propriétés impactées par les animations). S'il y a moins de durées que d'éléments dans cette liste, l'agent utilisateur dupliquera les durées. S'il y a trop de durées, la liste sera tronquée. Dans les deux cas, la déclaration CSS sera considérée comme valide.

## Syntaxe

```css
/* Valeurs temporelles */
/* Type <time> */
transition-duration: 6s;
transition-duration: 120ms;
transition-duration: 1s, 15s;
transition-duration: 10s, 30s, 230ms;

/* Valeurs globales */
transition-duration: inherit;
transition-duration: initial;
transition-duration: unset;
```

### Valeurs

- `<time>`
  - : Une valeur {{cssxref("&lt;time&gt;")}} qui définit la durée que doit prendre l'animation pour changer la valeur d'une propriété (entre l'ancienne valeur et la nouvelle). Une durée de `0s` qu'aucune transition ne sera appliquée et que le passage d'un état à l'autre sera instantanné. Si la valeur utilisée est négative, la déclaration sera considérée comme invalide.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple illustrant différentes durées

#### HTML

```html
<div class="box duration-1">0,5 secondes</div>

<div class="box duration-2">2 secondes</div>

<div class="box duration-3">4 secondes</div>

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

.duration-1 {
  transition-duration: 0.5s;
}

.duration-2 {
  transition-duration: 2s;
}

.duration-3 {
  transition-duration: 4s;
}
```

#### JavaScript

```js
function change() {
  const elements = document.querySelectorAll("div.box");
  for (let element of elements) {
    element.classList.toggle("transformed-state");
  }
}

const changeButton = document.querySelector("#change");
changeButton.addEventListener("click", change);
```

#### Résultat

{{EmbedLiveSample("Exemples",275,200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les transitions CSS](/fr/docs/CSS/Using_CSS_transitions)
- {{domxref("TransitionEvent")}}
