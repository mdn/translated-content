---
title: animation-iteration-count
slug: Web/CSS/animation-iteration-count
---

{{ CSSRef() }}{{ SeeCompatTable() }}

## Обзор

[CSS](/ru/CSS) свойство `animation-iteration-count` определяет сколько раз будет проигрываться анимационный цикл, перед тем как остановиться.

Наиболее удобно использовать это свойство в сокращённом варианте {{ cssxref("animation") }}, в котором указываются все анимационные свойства.

{{cssinfo}}

## Синтаксис

```css
animation-iteration-count: infinite;
animation-iteration-count: 3;
animation-iteration-count: 2.3;

animation-iteration-count: 2, 0, infinite;
```

### Значения

- `infinite`
  - : Анимация повторяется бесконечно.
- `<number>`
  - : Сколько раз анимация будет повторяться; по умолчанию 1. Отрицательные значения не используются. Можно использовать не целые значения, для проигрывания части анимационного цикла (например, 0.5 воспроизведёт половину анимационного цикла).

### Правила синтаксиса

{{csssyntax}}

## Примеры

Смотрите примеры [CSS-анимации](/ru/docs/Web/CSS/CSS_Animations/Ispolzovanie_CSS_animatciy).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Также смотрите

- [Использование CSS-анимацией](/ru/docs/Web/CSS/CSS_Animations/Ispolzovanie_CSS_animatciy)
- {{ domxref("AnimationEvent", "AnimationEvent") }}
