---
title: GlobalEventHandler.onanimationend
slug: Web/API/Element/animationend_event
---

{{APIRef}}

Обработчик события [`animationend`](/ru/docs/Web/API/Element/animationend_event). Это событие вызывается когда [CSS-анимация](/ru/docs/Web/CSS/CSS_animations) достигает конца своего активного периода, который вычисляется как ({{cssxref("animation-duration")}} \* {{cssxref("animation-iteration-count")}}) + {{cssxref("animation-delay")}}.

## Синтаксис

```
var animEndHandler = target.onanimationend;

target.onanimationend = {{jsxref("Function")}}
```

### Значение

A {{jsxref ("Function")}} вызывается, когда происходит событие [`animationend`](/ru/docs/Web/API/Element/animationend_event), указывающее, что анимация CSS начинается с цели, где целевой объект является HTML-элементом ({{ Domxref ("HTMLElement")}}), документ ({{domxref ("Document")}}) или окно ({{domxref ("Window")}}). Функция получает в качестве входного параметра один параметр: {{domxref ("AnimationEvent")}} объект, описывающий событие, которое произошло.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- The [`animationend`](/ru/docs/Web/API/Element/animationend_event) event this event handler is triggered by
- {{domxref("AnimationEvent")}}
- The [`animationstart`](/ru/docs/Web/API/Element/animationstart_event) event
