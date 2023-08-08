---
title: grid-area
slug: Web/CSS/grid-area
---

CSS-свойство `grid-area` - это [сокращённая форма записи](/ru/docs/Web/CSS/Shorthand_properties) для свойств {{cssxref("grid-row-start")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-row-end")}} и {{cssxref("grid-column-end")}}. Определяет размер и местоположение грид-элемента в пределах {{glossary("grid rows", "grid row")}}. Задаёт края {{glossary("grid areas", "грид-области")}} грид-элемента.

```css
/* Ключевые слова в качестве значений */
grid-area: auto;
grid-area: auto / auto;
grid-area: auto / auto / auto;
grid-area: auto / auto / auto / auto;

/* <custom-ident> значения */
grid-area: some-grid-area;
grid-area: some-grid-area / another-grid-area;

/* <integer> && <custom-ident>? значения */
grid-area: some-grid-area 4;
grid-area: some-grid-area 4 / 2 another-grid-area;

/* span && [ <integer> || <custom-ident> ] значения */
grid-area: span 3;
grid-area: span 3 / span some-grid-area;
grid-area: 2 span / another-grid-area span;

/* Global values */
grid-area: inherit;
grid-area: initial;
grid-area: unset;
```

Если заданы четыре значения `<grid-line>` , то первое значение определяет `grid-row-start` , второе значение - `grid-column-start` , третье значение - `grid-row-end` и четвёртое значение - `grid-column-end`.

Если `grid-column-end` опущено, а `grid-column-start` в значении {{cssxref("&lt;custom-ident&gt;")}}, `grid-column-end` устанавливается в это значение `<custom-ident>`; иначе оно устанавливается в значение `auto`.

Когда `grid-row-end` опущено, а `grid-row-start` в значении `<custom-ident>`, то `grid-row-end` устанавливается в это значение `<custom-ident>`; иначе оно устанавливается в значение `auto`.

Когда `grid-column-start` опущено, а `grid-row-start` в значении `<custom-ident>`, все четыре свойства длинной записи устанавливаются в это значение, иначе они устанавливаются в значение `auto`.

Свойство grid-area также может быть установлено в значение {{cssxref("&lt;custom-ident&gt;")}} , которое действует, как имя области. В дальнейшем разместить область в гриде по имени можно с помощью свойства {{cssxref("grid-template-areas")}}.

{{cssinfo}}

## Синтаксис

### Значения

- `auto`
  - : - ключевое слово, говорящее о том, что свойство не вносит никаких изменений в размещение грид-элемента. На элемент действует авторазмещение или размер элемента по умолчанию `1`. _(то есть, элемент занимает одну ячейку грид-сетки в заданном направлении)_
- `<custom-ident>`
  - : если есть именованная линия с именем '`<custom-ident>-start`'/'`<custom-ident>-end`', то грид-элемент привязывается к первой из таких линий.
    > **Примечание:** Именованные грид-области автоматически генерируют неявные именованные линии с именами подобного формата, поэтому запись `grid-area: foo;` выберет начальный/конечный край этой именованной грид-области (если, конечно, другая линия с именем `foo-start`/`foo-end` не была явно определена раньше).В противном случае, значение расценивается, как если бы число `1` было задано вместе с `<custom-ident>`.
- `<integer> && <custom-ident>?`
  - : Contributes the *n*th grid line to the grid item's placement. If a negative integer is given, it instead counts in reverse, starting from the end edge of the explicit grid.If a name is given as a {{cssxref("&lt;custom-ident&gt;")}}, only lines with that name are counted. If not enough lines with that name exist, all implicit grid lines are assumed to have that name for the purpose of finding this position.An {{cssxref("&lt;integer&gt;")}} value of `0` is invalid.
- `span && [ <integer> || <custom-ident> ]`
  - : Contributes a grid span to the grid item's placement such that the corresponding edge of the grid item's grid area is _n_ lines from the opposite edge.If a name is given as a {{cssxref("&lt;custom-ident&gt;")}}, only lines with that name are counted. If not enough lines with that name exist, all implicit grid lines on the side of the explicit grid corresponding to the search direction are assumed to have that name for the purpose of counting this span.If the {{cssxref("&lt;integer&gt;")}} is omitted, it defaults to `1`. Negative integers or 0 are invalid.

### Formal syntax

{{csssyntax}}

## Example

### HTML content

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

### CSS content

```css
#grid {
  display: grid;
  height: 100px;
  grid-template: repeat(4, 1fr) / 50px 100px;
}

#item1 {
  background-color: lime;
  grid-area: 2 / 2 / auto / span 3;
}

#item2 {
  background-color: yellow;
}

#item3 {
  background-color: blue;
}
```

{{EmbedLiveSample("Example", "100%", "150px")}}

## Specifications

| Specification                                                | Status                 | Comment            |
| ------------------------------------------------------------ | ---------------------- | ------------------ |
| {{SpecName("CSS3 Grid", "#propdef-grid-area", "grid-area")}} | {{Spec2("CSS3 Grid")}} | Initial definition |

## Browser compatibility

{{Compat}}

## See also

- Related CSS properties: {{cssxref("grid-row")}}, {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-template-areas")}}
- Grid Layout Guide: _[Grid template areas](/ru/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)_
- Video tutorial: _[Grid Template Areas](http://gridbyexample.com/video/grid-template-areas/)_
