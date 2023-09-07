---
title: right
slug: Web/CSS/right
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) свойство **`right`** частично определяет горизонтальное положение позиционируемого элемента. Оно не влияет на непозиционируемые элементы (т.е. **`right`** не применится, если задано `position: static`).

{{EmbedInteractiveExample("pages/css/right.html")}}

Эффект свойства `right` зависит от того, как позиционируется элемент (то есть от значения свойства {{cssxref("position")}}):

- Когда задано `position: absolute` или `fixed` — свойство `right` устанавливает расстояние между правым краем элемента и правым краем содержащего его блока.
- Когда задано `position: relative` — свойство `right` устанавливает расстояние, на которое правый край элемента перемещается влево от его обычной позиции.
- Когда задано `position: sticky` — свойство `right` работает так, как при `position: relative` во время нахождения элемента внутри области просмотра, и как `position: fixed` вне области просмотра.
- Когда задано `position: static` — свойство `right` _не имеет никакого эффекта_.

Когда заданы оба свойства {{cssxref("left")}} и `right`, и элемент не может растянуться, чтобы им соответствовать, то позиционированние элемента is _overspecified_. В этом случае значение `left` имеет приоритет, when the container is left-to-right; и наоборот, значение `right` имеет приоритет, when the container is right-to-left.

## Синтаксис

```css
/* Значения величин */
right: 3px;
right: 2.4em;

/* Процентные значения от высоты родительского блока */
right: 10%;

/* Ключевое слово */
right: auto;

/* Глобальные значения */
right: inherit;
right: initial;
right: unset;
```

### Значения

- {{cssxref("&lt;length&gt;")}}
  - : Отрицательная, нулевая или положительная величина, которая представляет:
    - for _absolutely positioned elements_, the distance to the right edge of the containing block.
    - for _relatively positioned elements_, the distance that the element is moved to the left of its normal position.
- {{cssxref("&lt;percentage&gt;")}}
  - : A {{cssxref("&lt;percentage&gt;")}} of the containing block's width.
- `auto`
  - : Specifies that:
    - for _absolutely positioned elements_, the position of the element is based on the {{Cssxref("left")}} property, while `width: auto` is treated as a width based on the content; or if `left` is also `auto`, the element is positioned where it should horizontally be positioned if it were a static element.
    - for _relatively positioned elements_, the distance of the element from its normal position is based on the {{Cssxref("left")}} property; or if `left` is also `auto`, the element is not moved horizontally at all.
- `inherit`
  - : Specifies that the value is the same as the computed value from its parent element (which might not be its containing block). This computed value is then handled as if it were a {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, or the `auto` keyword.

### Формальный синтаксис

{{csssyntax}}

## Примеры

```css
#example_3 {
  width: 100px;
  height: 100px;
  background-color: #ffc7e4;
  position: relative;
  top: 20px;
  left: 20px;
}

#example_4 {
  width: 100px;
  height: 100px;
  background-color: #ffd7c2;
  position: absolute;
  bottom: 10px;
  right: 20px;
}
```

```html
<div id="example_3">Example 3</div>
<div id="example_4">Example 4</div>
```

{{ EmbedLiveSample('Примеры', 500, 220) }}

## Спецификации

{{Specifications}}

{{cssinfo}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("position")}}, {{cssxref("left")}}, {{cssxref("top")}}, {{cssxref("bottom")}}
