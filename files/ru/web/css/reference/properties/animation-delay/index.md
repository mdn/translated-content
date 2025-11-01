---
title: animation-delay
slug: Web/CSS/Reference/Properties/animation-delay
original_slug: Web/CSS/animation-delay
---

{{CSSRef}}{{SeeCompatTable}}

## Описание

[CSS](/ru/docs/Web/CSS) свойство **`animation-delay`** определяет время задержки перед стартом анимации.

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

Значение 0s, которое является значением по умолчанию, указывает на то, что анимация должна начаться непременно. В противном случае, старт анимации будет отложен на указанное время.

При указании отрицательного значения, анимация также начнётся непременно, но её воспроизведение начнётся не с первого ключевого кадра, а так, будто часть анимации уже была показана. Например, если вы укажете значение -1s, анимация будет начата с ключевого кадра, когда 1 секунда анимации уже была воспроизведена.

{{cssinfo}}

## Синтаксис

```css
animation-delay: 3s;
animation-delay: 2s, 4ms;
```

### Значения

- `<time>`
  - : Время задержки перед стартом анимации. Может быть определено в секундах (s), либо в миллисекундах (ms). Если вы не укажите единицу измерения, свойство будет недействительным.

### Формальный синтаксис

{{csssyntax}}

## Примеры

Посмотрите [CSS-анимации](/ru/docs/Web/CSS/CSS_animations/Using_CSS_animations) для примера.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование CSS-анимаций](/ru/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- {{domxref("AnimationEvent", "AnimationEvent")}}
