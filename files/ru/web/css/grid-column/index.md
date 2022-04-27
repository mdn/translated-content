---
title: grid-column
slug: Web/CSS/grid-column
tags:
  - CSS
  - CSS Grid
  - CSS Property
  - Reference
  - recipe:css-shorthand-property
browser-compat: css.properties.grid-column
---
{{CSSRef}}

[Сокращённое CSS-свойство](/ru/docs/Web/CSS/Shorthand_properties) **`grid-column`** задаёт размер и положение элемента, находящегося внутри {{glossary("grid column", "грид-колонки")}}, путём размещения его по грид-линии и расширяя его (если требуется), тем самым определяя начальную и конечную границу {{glossary("grid areas", "грид-области")}}, в пределах которой он должен находиться.

{{EmbedInteractiveExample("pages/css/grid-column.html")}}

## Связанные свойства

Это свойство является сокращением для следующих свойств CSS:

- [`grid-column-end`](/en-US/docs/Web/CSS/grid-column-end)
- [`grid-column-start`](/en-US/docs/Web/CSS/grid-column-start)

## Syntax

```css
grid-column: auto;

/* С номерами линий */
grid-column: 1;
grid-column: 1 / 3;
grid-column: 1 /  span 2;

/* С именами линий */
grid-column: main-start;
grid-column: main-start / main-end;

/* Глобальные значения */
grid-column: inherit;
grid-column: initial;
grid-column: revert;
grid-column: unset;
```

Это свойство может принимать одно или два значения `<grid-line>`.

Если указаны два значения `<grid-line>`, они разделяются символом "/". Тогда сначала указывается значение для `grid-column-start`, а затем после слеша следует значение для `grid-column-end`.

Само значение `<grid-line>` может быть определено следующим образом:

- Либо ключевым словом `auto`.
- Или значением `<custom-ident>`.
- Или значением `<integer>`.
- Или как `<custom-ident>` и `<integer>`, разделённых пробелом.
- Или ключевым словом `span` вместе с `<custom-ident>` или `<integer>`.

### Значения

- `auto`
  - : Ключевое слово, указывающее, что свойство ничего не делает для размещения элементов, подразумевается автоматическое размещение элемента и занимаемое им колонок (по умолчанию — `1`).
- `<custom-ident>`

  - : Если грид-линия указана в формате `<custom-ident>-start`/`<custom-ident>-end`, элемент будет расположен с начала линии.

    > **Note:** именованные грид-области автоматически создают имена линий в соответствии с показанным выше форматом, поэтому `grid-column: foo;` выберет начало/конец этой именованной грид-области (в случае если явно не указана другая линия с именами `foo-start`/`foo-end`).

    Otherwise, this is treated as if the integer `1` had been specified along with the `<custom-ident>`.

- `<integer> && <custom-ident>?`

  - : Размещает грид-элемент на указанной грид-линии. Если указано отрицательное число, отсчёт начинается в обратном порядке, начиная с конца грид-раскладки.

    Если указан только идентификатор (`<custom-ident>`), то только линии с этим именем будут учитываться. If not enough lines with that name exist, all implicit grid lines are assumed to have that name for the purpose of finding this position.

    Целое ({{cssxref("integer")}}) значение `0` считается некорректным.

- `span && [ <integer> || <custom-ident> ]`

  - : Размещает грид-элемент таким образом, что он будет расширен на указанное число ячеек.

    Если указан только идентификатор (`<custom-ident>`), линии только с этим именем будут учитываться. If not enough lines with that name exist, all implicit grid lines on the side of the explicit grid corresponding to the search direction are assumed to have that name for the purpose of counting this span.

    Если число (`<integer>`) не было указано, по умолчанию будет `1`. Ноль и отрицательные числа считаются недопустимыми.

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Грид-колонки с указанием размера и положением

#### HTML

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 100px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 100px;
}

#item1 {
  background-color: lime;
}

#item2 {
  background-color: yellow;
  grid-column: 2 / 4;
}

#item3 {
  background-color: blue;
  grid-column: span 2 / 7;
}
```

#### Результат

{{EmbedLiveSample("Грид-колонки с указанием размера и положением", "100%", "100px")}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Связанные CSS-свойства: {{cssxref("grid-row")}}, {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}
- Руководство по грид-раскладке: _[Line-based placement with CSS Grid](/ru/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)_
- Обучающее видео: _[Line-based placement](http://gridbyexample.com/video/series-line-based-placement/)_
