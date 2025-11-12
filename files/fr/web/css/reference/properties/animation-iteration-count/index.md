---
title: animation-iteration-count
slug: Web/CSS/Reference/Properties/animation-iteration-count
original_slug: Web/CSS/animation-iteration-count
---

{{CSSRef}}

La propriété **`animation-iteration-count`** indique le nombre de cycles utilisés pour répéter une animation avant que celle-ci s'arrête.

Si plusieurs valeurs sont indiquées, à chaque lancement de l'animation, c'est la valeur suivante de la liste qui est utilisée. Lorsqu'on arrive à la fin de la liste, on reprend avec la première valeur de la liste.

{{InteractiveExample("CSS Demo: animation-iteration-count")}}

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
  <div>Animation <span id="playstatus"></span></div>
  <div id="example-element">Select a count to start!</div>
</section>
```

```css interactive-example
#example-element {
  align-items: center;
  background-color: #1766aa;
  border-radius: 50%;
  border: 5px solid #333;
  color: white;
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: center;
  margin: auto;
  margin-left: 0;
  width: 150px;
}

#playstatus {
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
"use strict";

window.addEventListener("load", () => {
  const el = document.getElementById("example-element");
  const status = document.getElementById("playstatus");

  function update() {
    status.textContent = "delaying";
    el.className = "";
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        el.className = "animating";
      });
    });
  }

  el.addEventListener("animationstart", () => {
    status.textContent = "playing";
  });

  el.addEventListener("animationend", () => {
    status.textContent = "finished";
  });

  const observer = new MutationObserver(() => {
    update();
  });

  observer.observe(el, {
    attributes: true,
    attributeFilter: ["style"],
  });

  update();
});
```

Généralement, on utilisera la propriété raccourcie {{cssxref("animation")}} afin de définir toutes les propriétés relatives à une animation.

## Syntaxe

```css
/* Valeur avec un mot-clé */
animation-iteration-count: infinite;

/* Valeur avec une quantité */
/* Type <number>            */
animation-iteration-count: 3;
animation-iteration-count: 2.3;

/* Gestion de plusieurs animations */
animation-iteration-count: 2, 0, infinite;
```

La propriété `animation-iteration-count` est définie avec une ou plusieurs valeurs, parmi la liste suivante, séparées par des virgules.

### Valeurs

- `infinite`
  - : L'animation sera répétée à l'infini. Dans ce mode d'animation infinie, cette valeur est considérée de la même manière qu'une valeur paire par la propriété **`animation-direction`**.
- `<number>`
  - : Le nombre de répétitions pour l'animation. La valeur par défaut est `1` (elle n'est exécutée qu'une seule fois). Les valeurs négatives sont considérées comme invalides. Il est possible d'utiliser des valeurs qui ne sont pas entières pour indiquer des fragments d'un cycle (ainsi `0.5` indiquera une moitié du cycle de l'animation).

> [!NOTE]
> Lorsqu'on utilise plusieurs valeurs, séparées par des virgules, pour une propriété `animation-*`, selon leur quantité, elles seront différemment affectées aux animations définies par {{cssxref("animation-name")}}. Pour plus d'informations, voir : paramétrer [les valeurs des propriétés pour plusieurs animations](/fr/docs/Web/CSS/Guides/Animations/Using).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
p {
  animation-duration: 3s;
  animation-name: glissement;
  animation-iteration-count: infinite;
}

.infini {
  animation-iteration-count: infinite;
}

.dix {
  animation-iteration-count: 10;
}

@keyframes glissement {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

### HTML

```html
<p class="infini">
  La Chenille et Alice se considérèrent un instant en silence. Enfin la Chenille
  sortit le houka de sa bouche, et lui adressa la parole d’une voix endormie et
  traînante.
</p>

<p class="dix">
  Voyons si je me souviendrai de tout ce que je savais&nbsp;: quatre fois cinq
  font douze, quatre fois six font treize, quatre fois sept font — je
  n’arriverai jamais à vingt de ce train-là.
</p>
```

### Résultat

{{EmbedLiveSample("Exemples","300","300")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Manipuler les animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using)
- {{domxref("AnimationEvent", "AnimationEvent")}}
