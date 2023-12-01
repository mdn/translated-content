---
title: GlobalEventHandler.onanimationend
slug: Web/API/Element/animationend_event
---

{{APIRef("CSS3 Animations")}}

Обработчик события {{event("animationend")}}. Это событие вызывается когда [CSS-анимация](/ru/docs/Web/CSS/CSS_Animations) достигает конца своего активного периода, который вычисляется как ({{cssxref("animation-duration")}} \* {{cssxref("animation-iteration-count")}}) + {{cssxref("animation-delay")}}.

## Синтаксис

```
var animEndHandler = target.onanimationend;

target.onanimationend = {{jsxref("Function")}}
```

### Значение

A {{jsxref ("Function")}} вызывается, когда происходит событие {{event ("animationend")}}, указывающее, что анимация CSS начинается с цели, где целевой объект является HTML-элементом ({{ Domxref ("HTMLElement")}}), документ ({{domxref ("Document")}}) или окно ({{domxref ("Window")}}). Функция получает в качестве входного параметра один параметр: {{domxref ("AnimationEvent")}} объект, описывающий событие, которое произошло.

## Example

{{Page("/en-US/docs/Web/API/GlobalEventHandlers/onanimationstart", "Example")}}

## Specification

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- The {{event("animationend")}} event this event handler is triggered by
- {{domxref("AnimationEvent")}}
- The {{event("animationstart")}} event
