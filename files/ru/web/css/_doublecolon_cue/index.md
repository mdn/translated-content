---
title: "::cue"
slug: Web/CSS/::cue
---

{{CSSRef}}

[Псевдоэлемент](/ru/docs/Web/CSS/Pseudo-elements) [CSS](/ru/docs/Web/CSS) **`::cue`** соответствует репликам [WebVTT](/ru/docs/Web/API/WebVTT_API) в выбранном элементе. Он может быть использован для задания [стилей титров и других реплик](/docs/Web/API/WebVTT_API#Styling_WebTT_cues) в медиа с VTT треками.

```css
::cue {
  color: yellow;
  font-weight: bold;
}
```

## Разрешённые свойства

Правила с `::cue` в селекторе ограничены в использовании CSS-свойств следующим списком:

- {{CSSxRef("background")}} и его свойства
- {{CSSxRef("color")}}
- {{CSSxRef("font")}} и его свойства
- {{CSSxRef("line-height")}}
- {{CSSxRef("opacity")}}
- {{CSSxRef("outline")}} и его свойства
- {{CSSxRef("ruby-position")}}
- {{CSSxRef("text-combine-upright")}}
- {{CSSxRef("text-decoration")}} и его свойства
- {{CSSxRef("text-shadow")}}
- {{CSSxRef("visibility")}}
- {{CSSxRef("white-space")}}

Свойства применяются ко всему набору реплик, как если бы они были единым целым. Единственным исключением является `background` и его сокращённые свойства, которые применяются к каждой реплике отдельно, чтобы не создавать блоки, которые занимают неожиданно большие области медиа.

## Синтаксис

{{CSSSyntax}}

## Пример

Следующий CSS устанавливает стили для реплик в виде белого цвета текста и полупрозрачного чёрного фона.

```css
::cue {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Web Video Tracks Format (WebVTT)](/ru/docs/Web/API/WebVTT_API)
