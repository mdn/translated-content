---
title: grid-row-start
slug: Web/CSS/grid-row-start
---

Свойство CSS **`grid-row-start`** определяет начальную позицию элемента грид в строке, добавляя линию, span или ничего (автоматически) к его расположению в сетке, тем самым определяя начальный край inline-элемента его {{glossary("grid areas", "grid area")}}.

{{EmbedInteractiveExample("pages/css/grid-row-start.html")}}

## Syntax

```css
/* Keyword value */
grid-row-start: auto;

/* <custom-ident> values */
grid-row-start: somegridarea;

/* <integer> + <custom-ident> values */
grid-row-start: 2;
grid-row-start: somegridarea 4;

/* span + <integer> + <custom-ident> values */
grid-row-start: span 3;
grid-row-start: span somegridarea;
grid-row-start: 5 somegridarea span;

/* Global values */
grid-row-start: inherit;
grid-row-start: initial;
grid-row-start: unset;
```

This property is specified as a single `<grid-line>` value. A `<grid-line>` value can be specified as:

- either the `auto` keyword
- or a `<custom-ident>` value
- or an `<integer>` value
- or both `<custom-ident>` and `<integer>`, separated by a space
- or the keyword `span` together with either a `<custom-ident>` or an `<integer>` or both.

### Values

- `auto`
  - : Ключевое слово, указывающее, что свойство никак не влияет на размещение элемента сетки, обозначающее автоматическое размещение, автоматический диапазон или диапазон по умолчанию, равный 1.
- `<custom-ident>`

  - : Если есть именованная строка с именем '\<custom-ident>-start', он вносит первую такую строку в размещение элемента сетки.

    > **Примечание:** Named grid areas automatically generate implicit named lines of this form, so specifying `grid-row-start: foo;` will choose the start edge of that named grid area (unless another line named `foo-start` was explicitly specified before it).В противном случае это обрабатывается так, как если бы целое число 1 было указано вместе с `<custom-ident>`.

- `<integer> && <custom-ident>?`
  - : Вносит n-ю линию сетки в размещение элемента сетки. Если задано отрицательное целое число, вместо этого начинается обратный отсчёт, начиная с конечного края явной сетки. Если имя задано как \<custom-ident>, подсчитываются только строки с этим именем. Если существует недостаточно строк с таким именем, предполагается, что все неявные линии сетки имеют это имя для нахождения этой позиции.An {{cssxref("integer")}} value of `0` is invalid.
- `span && [ <integer> || <custom-ident> ]`
  - : Contributes a grid span to the grid item's placement; such that the row start edge of the grid item's grid area is n lines from the end edge.If a name is given as a \<custom-ident>, only lines with that name are counted. If not enough lines with that name exist, all implicit grid lines on the side of the explicit grid, corresponding to the search direction, are assumed to have that name for the purpose of counting this span.If the \<integer> is omitted, it defaults to `1`. Negative integers or 0 are invalid.The `<custom-ident>` cannot take the `span` value.

### Formal syntax

{{csssyntax}}

## Examples

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
  <div class="box5">Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 3;
  grid-row-end: 5;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}

.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

{{ EmbedLiveSample('Examples', '230', '420') }}

## Specifications

| Specification                                                          | Status                 | Comment            |
| ---------------------------------------------------------------------- | ---------------------- | ------------------ |
| {{SpecName("CSS3 Grid", "#propdef-grid-row-start", "grid-row-start")}} | {{Spec2("CSS3 Grid")}} | Initial definition |

{{cssinfo}}

## Browser compatibility

{{Compat}}

## See also

- Related CSS properties: {{cssxref("grid-row-end")}}, {{cssxref("grid-row")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-column")}}
- Grid Layout Guide: _[Line-based placement with CSS Grid](/ru/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)_
- Video tutorial: _[Line-based placement](http://gridbyexample.com/video/series-line-based-placement/)_
