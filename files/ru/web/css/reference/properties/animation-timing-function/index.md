---
title: animation-timing-function
slug: Web/CSS/Reference/Properties/animation-timing-function
original_slug: Web/CSS/animation-timing-function
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) свойство **`animation-timing-function`** задаёт как происходит анимация в течении длительности каждого цикла.

{{InteractiveExample("CSS Demo: animation-timing-function")}}

```css interactive-example-choice
animation-timing-function: linear;
```

```css interactive-example-choice
animation-timing-function: ease-in-out;
```

```css interactive-example-choice
animation-timing-function: steps(5, end);
```

```css interactive-example-choice
animation-timing-function: cubic-bezier(0.1, -0.6, 0.2, 0);
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div class="animating" id="example-element"></div>
  <button id="play-pause">Play</button>
</section>
```

```css interactive-example
#example-element {
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-name: slide;
  animation-play-state: paused;
  background-color: #1766aa;
  border-radius: 50%;
  border: 5px solid #333;
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
"use strict";

window.addEventListener("load", () => {
  const el = document.getElementById("example-element");
  const button = document.getElementById("play-pause");

  button.addEventListener("click", () => {
    if (el.classList.contains("running")) {
      el.classList.remove("running");
      button.textContent = "Play";
    } else {
      el.classList.add("running");
      button.textContent = "Pause";
    }
  });
});
```

Достаточно удобно использовать сокращённое свойство {{cssxref("animation")}} для того, чтобы установить все свойства для анимации одновременно.

## Синтаксис

```css
/* Keyword values */
animation-timing-function: ease;
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;
animation-timing-function: linear;
animation-timing-function: step-start;
animation-timing-function: step-end;

/* Function values */
animation-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
animation-timing-function: steps(4, end);

/* Steps Function keywords */
animation-timing-function: steps(4, jump-start);
animation-timing-function: steps(10, jump-end);
animation-timing-function: steps(20, jump-none);
animation-timing-function: steps(5, jump-both);
animation-timing-function: steps(6, start);
animation-timing-function: steps(8, end);

/* Multiple animations */
animation-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1, 0.1);

/* Global values */
animation-timing-function: inherit;
animation-timing-function: initial;
animation-timing-function: unset;
```

Временные функции могут быть установлены в пользовательских ключевых кадрах в правилах [@keyframes](/ru/docs/Web/CSS/@keyframes). Если в ключевом кадре значение **`animation-timing-function`** указано, соответствующее значение **`animation-timing-function`** от элемента к которому анимация применена используется для этого ключевого кадра.

### Значения

- `<timingfunction>`
  - : Каждый {{cssxref("&lt;timing-function&gt;")}} представляет функцию расчёта времени для связи с соответствующим свойством animate, как определено в {{cssxref("animation-property")}}.

### Формальный синтаксис

{{csssyntax}}

## Примеры

См. [CSS animations](/ru/docs/Web/CSS/CSS_animations/Using_CSS_animations).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

Смотрите также

- [Использование CSS-анимаций](/ru/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- {{domxref("AnimationEvent", "AnimationEvent")}}
