---
title: outline-width
slug: Web/CSS/outline-width
l10n:
  sourceCommit: 7a9f9baa25d9a7313bd6c62ef5ef585b28459c58
---

{{CSSRef}}

[CSS-свойство](/ru/docs/Web/CSS) **`outline-width`** задаёт толщину обводки элемента. Обводка — линия вокруг элемента за пределами рамки ({{cssxref("border")}}).

{{EmbedInteractiveExample("pages/css/outline-width.html")}}

При определении внешнего вида обводки зачастую удобнее всего воспользоваться сокращённым свойством {{cssxref("outline")}}.

## Синтаксис

```css
/* Ключевые слова */
outline-width: thin;
outline-width: medium;
outline-width: thick;

/* Значения типа <length> */
outline-width: 1px;
outline-width: 0.1em;

/* Глобальные значения */
outline-width: inherit;
outline-width: initial;
outline-width: revert;
outline-width: revert-layer;
outline-width: unset;
```

Свойство `outline-width` может быть иметь одно из перечисленных ниже значений.

### Values

- {{cssxref("&lt;length&gt;")}}
  - : Толщина обводки, указанная в значениях типа `<length>`.
- `thin`
  - : Зависит от реализации. Как правило, соответствует `1px` в десктопных браузерах (включая Firefox).
- `medium`
  - : Зависит от реализации. Как правило, соответствует `3px` в десктопных браузерах (включая Firefox).
- `thick`
  - : Зависит от реализации. Как правило, соответствует `5px` в десктопных браузерах (включая Firefox).

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Демонстрация обводки разных размеров толщины

#### HTML

```html
<span id="thin">thin</span>
<span id="medium">medium</span>
<span id="thick">thick</span>
<span id="twopixels">2px</span>
<span id="oneex">1ex</span>
<span id="em">1.2em</span>
```

#### CSS

```css
span {
  outline-style: solid;
  display: inline-block;
  margin: 20px;
}

#thin {
  outline-width: thin;
}

#medium {
  outline-width: medium;
}

#thick {
  outline-width: thick;
}

#twopixels {
  outline-width: 2px;
}

#oneex {
  outline-width: 1ex;
}

#em {
  outline-width: 1.2em;
}
```

#### Результат

{{EmbedLiveSample('Демонстрация обводки разных размеров толщины', '100%', '80')}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{cssxref("outline")}}
- {{cssxref("outline-color")}}
- {{cssxref("outline-style")}}
