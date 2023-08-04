---
title: animation-direction
slug: Web/CSS/animation-direction
---

{{CSSRef}}{{SeeCompatTable}}

## Описание

CSS-свойство **`animation-direction`** определяет, должна ли анимация воспроизводиться вперёд, назад или переменно вперёд и назад.

Также удобно использовать сокращённое свойство {{cssxref("animation")}}, чтобы одновременно установить все свойства анимации.

{{cssinfo}}

## Синтаксис

```css
/* Одиночная анимация */
animation-direction: normal;
animation-direction: reverse;
animation-direction: alternate;
animation-direction: alternate-reverse;

/* Несколько анимаций */
animation-direction: normal, reverse;
animation-direction: alternate, reverse, normal;

/* Глобальные значения */
animation-direction: inherit;
animation-direction: initial;
animation-direction: unset;
```

### Значения

- `normal`
  - : Анимация проигрывается вперёд каждую итерацию, то есть, когда анимация заканчивается, она сразу сбрасывается в _начальное_ положение и снова проигрывается. Это значение по умолчанию.
- `reverse`
  - : Анимация проигрывается наоборот, с _последнего_ положения до первого и потом снова сбрасывается в _конечное_ положение и снова проигрывается.
- `alternate`
  - : Анимация меняет направление в каждом цикле, то есть в первом цикле она начинает с _начального_ положения, доходит до _конечного_, а во втором цикле продолжает с _конечного_ и доходит до _начального_ и так далее, в зависимости от количества циклов анимации `animation-iteration-count`.
- `alternate-reverse`
  - : Анимация начинает проигрываться с _конечного_ положения и доходит до _начального_, а в следующем цикле продолжая с _начального_ переходит в _конечное_, в зависимости от количества итераций анимации `animation-iteration-count`.

### Формальный синтаксис

{{csssyntax}}

## Примеры

Смотрите примеры [CSS а](/ru/docs/Web/CSS/CSS_Animations/Using_CSS_animations)нимаций.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование CSS-анимации](/ru/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- {{domxref("AnimationEvent", "AnimationEvent")}}
