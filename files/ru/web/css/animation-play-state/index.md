---
title: animation-play-state
slug: Web/CSS/animation-play-state
---

{{CSSRef}}{{SeeCompatTable}}

## Описание

Свойство **`animation-play-state`** определяет состояние анимации, паузы или проигрыша. Это можно использовать, чтобы определить текущее состояние анимации, например, в скриптах.

Если возобновить приостановленную анимацию, то она запустит её с того места, где она была поставлена на паузу, а не начнётся с начала.

{{cssinfo}}

## Синтаксис

```css
/* Одна анимация */
animation-play-state: running;
animation-play-state: paused;

/* Несколько анимаций */
animation-play-state: paused, running, running;

/* Глобальный значения */
animation-play-state: inherited;
animation-play-state: initial;
animation-play-state: unset;
```

### Значения

- `running`
  - : Анимация проигрывается.
- `paused`
  - : Анимация поставлена на паузу.

### Формальный синтаксис

{{csssyntax}}

## Примеры

См. [CSS animations](/ru/docs/Web/CSS/CSS_Animations/Using_CSS_animations).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование CSS-анимаций](/ru/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- {{domxref("AnimationEvent", "AnimationEvent")}}
