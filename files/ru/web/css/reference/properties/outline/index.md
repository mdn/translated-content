---
title: outline
slug: Web/CSS/Reference/Properties/outline
original_slug: Web/CSS/outline
l10n:
  sourceCommit: 7a9f9baa25d9a7313bd6c62ef5ef585b28459c58
---

{{CSSRef}}

[Сокращённое свойтсов](/ru/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/ru/docs/Web/CSS) **`outline`** ) устанавливает большинство свойств обводки в одном объявлении.

{{InteractiveExample("CSS Demo: outline")}}

```css interactive-example-choice
outline: solid;
```

```css interactive-example-choice
outline: dashed red;
```

```css interactive-example-choice
outline: 1rem solid;
```

```css interactive-example-choice
outline: thick double #32a1ce;
```

```css interactive-example-choice
outline: 8px ridge rgba(170, 50, 220, 0.6);
border-radius: 2rem;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with an outline around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  padding: 0.75rem;
  width: 80%;
  height: 100px;
}
```

## Составные свойства

Это свойство предназначено для короткой записи следующих CSS-свойств:

- {{cssxref("outline-color")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-width")}}

## Синтаксис

```css
/* style */
outline: solid;

/* color | style */
outline: #f66 dashed;

/* style | width */
outline: inset thick;

/* color | style | width */
outline: green solid 3px;

/* Global values */
outline: inherit;
outline: initial;
outline: revert;
outline: revert-layer;
outline: unset;
```

Свойство `outline` может быть задано одним, двум или тремя перечисленными ниже значений. Порядок следования значений не имеет значения. Как и в случае с другими сокращёнными свойствами, вместо пропущенных значений будет использоваться [первоначальное значение](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing).

> [!NOTE]
> Если стиль обводки не задан, он будет невидим для большого количества элементов. Всё потому, что обводка по умолчанию не стилизован (т.е. для его свойств задано значение `none`). Самое заветное исключение составляют элементы `input`, для которых браузеры определяют стандартный стиль.

### Значения

- `<'outline-color'>`
  - : Задаёт цвет обводки. По умолчанию используется `invert`, если браузер поддерживает это ключевое слово, в противном случае — `currentcolor`. Смотрите {{cssxref("outline-color")}} для получения дополнительной информации.
- `<'outline-style'>`
  - : Устанавливает стиль обводки. По умолчанию `none` (если стиль обводки не определён). Смотрите {{cssxref("outline-style")}} для получения дополнительной информации.
- `<'outline-width'>`
  - : Устанавливает толщину обводки. По умолчанию `medium` (если толщина обводки не указана). Смотрите {{cssxref("outline-width")}} для получения дополнительной информации.

## Описание

Обводка — это линия за пределами [рамки](/ru/docs/Web/CSS/Reference/Properties/border) элемента. В отличие от других частей блока, обводки не занимают места, поэтому они никак не влияют на раскладку.

Есть несколько свойств, определяющих внешний вид обводки. С помощью свойства `outline` можно задать стиль, цвет и толщину, {{cssxref("outline-offset")}} — расстояние от рамки элемента, {{cssxref("border-radius")}} — закруглённые углы.

Обводка не всегда представляет собой прямоугольник: при работе с многострочным текстом некоторые браузеры отображают отдельную обводку для каждой строки, в то время как другие ограничиваются только одной обводкой для всего текста.

## Проблемы, связанные с доступностью

Установка значения `0` или `none` для `outline` удалит стандартную браузерную обводку, появляющуюся при фокусе на элемент. Интерактивный элемент должен иметь отдельную стилизацию при фокусировке на него. Если подобная стилизация, добавляемая браузерами по умолчанию, будет удалена, следует указать свою собственную.

- [How to Design Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- WCAG 2.1: [Understanding Success Criterion 2.4.7: Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Использование обводки для стилизации элемента в фокусе

#### HTML

```html
<a href="#">У этой ссылки есть собственный стиль при фокусе.</a>
```

#### CSS

```css
a {
  border: 1px solid;
  border-radius: 3px;
  display: inline-block;
  margin: 10px;
  padding: 5px;
}

a:focus {
  outline: 4px dotted #e73;
  outline-offset: 4px;
  background: #ffa;
}
```

#### Результат

{{EmbedLiveSample("Использование обводки для стилизации элемента в фокусе", "100%", 85)}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{cssxref("outline-color")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-width")}}
