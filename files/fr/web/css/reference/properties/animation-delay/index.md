---
title: animation-delay
slug: Web/CSS/Reference/Properties/animation-delay
original_slug: Web/CSS/animation-delay
---

{{CSSRef}}

La propriété **`animation-delay`** définit la durée d'attente avant de démarrer une animation une fois qu'elle a été appliquée à un élément.

{{InteractiveExample("CSS Demo: animation-delay")}}

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
  <div>Animation <span id="playstatus"></span></div>
  <div id="example-element">Select a delay to start!</div>
</section>
```

```css interactive-example
#example-element {
  background-color: #1766aa;
  color: white;
  margin: auto;
  margin-left: 0;
  border: 5px solid #333;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#playstatus {
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

La valeur par défaut, `0s`, indique que l'animation doit démarrer dès qu'elle est appliquée. Dans les autres cas, la valeur indique le décalage à observer entre le début de l'animation et le moment où celle-ci a été appliquée sur l'élément.

Si des valeurs négatives sont utilisées, l'animation débutera immédiatement en étant déjà « avancée ». Par exemple, si on utilise la valeur `-1s` comme durée, l'animation commencera immédiatement avec l'état qu'elle aurait « normalement » eue au bout d'une seconde.

Généralement, on passera par la propriété raccourcie {{cssxref("animation")}} afin de définir l'ensemble des propriétés liées aux animations en une seule fois.

## Syntaxe

```css
animation-delay: 3s;
animation-delay: 2s, 4ms;
```

### Valeurs

- `<time>`
  - : La durée avec laquelle décaler le début de l'animation à partir du moment où celle-ci a été appliquée à l'élément. La valeur peut être indiquée en secondes (`s` comme suffixe) ou en millisecondes (`ms` comme suffixe). Si aucune unité n'est définie, la déclaration sera considérée comme invalide.

> [!NOTE]
> Lorsqu'on utilise plusieurs valeurs (séparées par des virgules) pour une propriété `animation-*`, selon leur quantité, elles seront différemment affectées aux animations définies par {{cssxref("animation-name")}}. Pour plus d'informations, voir : paramétrer [les valeurs des propriétés pour plusieurs animations](/fr/docs/Web/CSS/Guides/Animations/Using).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
p {
  animation-duration: 3s;
  animation-delay: 15s;
  animation-name: glissement;
  animation-iteration-count: infinite;
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
<p>
  La Chenille et Alice se considérèrent un instant en silence. Enfin la Chenille
  sortit le houka de sa bouche, et lui adressa la parole d’une voix endormie et
  traînante.
</p>
```

### Résultat

{{EmbedLiveSample("Exemples","300","200")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Manipuler les animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using)
- {{domxref("AnimationEvent", "AnimationEvent")}}
