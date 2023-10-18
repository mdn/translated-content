---
title: grid-column
slug: Web/CSS/grid-column
---

{{CSSRef}}

[Сокращённое CSS-свойство](/ru/docs/Web/CSS/Shorthand_properties) **`grid-column`** задаёт размер и положение элемента, находящегося внутри {{glossary("grid column", "грид-колонки")}}, путём размещения его по грид-линии, расширяя его при необходимости, тем самым определяя начальную и конечную границу {{glossary("grid areas", "грид-области")}}, в пределах которой он должен находиться.

{{EmbedInteractiveExample("pages/css/grid-column.html")}}

## Связанные свойства

Это свойство является сокращением для следующих свойств CSS:

- [`grid-column-end`](/ru/docs/Web/CSS/grid-column-end)
- [`grid-column-start`](/ru/docs/Web/CSS/grid-column-start)

## Syntax

```css
/* Значения с ключевыми словами */
grid-column: auto;
grid-column: auto / auto;

/* Значения с <custom-ident> */
grid-column: somegridarea;
grid-column: somegridarea / someothergridarea;

/* Значения с <integer> и <custom-ident> */
grid-column: somegridarea 4;
grid-column: 4 somegridarea / 6;

/* Значения со span, <integer> и <custom-ident> */
grid-column: span 3;
grid-column: span somegridarea;
grid-column: 5 somegridarea span;
grid-column: span 3 / 6;
grid-column: span somegridarea / span someothergridarea;
grid-column: 5 somegridarea span / 2 span;

/* Глобальные значения */
grid-column: inherit;
grid-column: initial;
grid-column: revert;
grid-column: revert-layer;
grid-column: unset;
```

Это свойство может принимать одно или два значения `<grid-line>`.

Если указаны два значения `<grid-line>`, они разделяются символом "/". В этом случае до слеша указывается значение для `grid-column-start`, а после слеша — значение для `grid-column-end`.

Само значение `<grid-line>` может быть определено следующим образом:

- ключевым словом `auto`;
- значением `<custom-ident>`;
- значением `<integer>`;
- `<custom-ident>` и `<integer>`, разделённых пробелом;
- ключевым словом `span` вместе с `<custom-ident>` или `<integer>`.

### Значения

- `auto`
  - : Ключевое слово, указывающее, что свойство ничего не делает для размещения элементов, подразумевается автоматическое размещение элемента и занимаемых им колонок, по умолчанию `1`.
- `<custom-ident>`

  - : Если существует грид-линия с именем в формате `<custom-ident>-start`/`<custom-ident>-end`, элемент будет расположен с начала этой линии.

    > **Примечание:** именованные грид-области автоматически создают имена линий в соответствии с показанным выше форматом, поэтому `grid-column: foo;` выберет начало/конец этой именованной грид-области (в случае если явно не указана другая линия с именами `foo-start`/`foo-end`).

    Если такой грид-линии нет, то этот значение неявно преобразуется в `<custom-ident>` с числом `1`.

- `<integer> && <custom-ident>?`

  - : Размещает грид-элемент на грид-линии, заданной числом `<integer>`. Если указано отрицательное число, отсчёт начинается в обратном порядке, начиная с конца грид-раскладки.

    Если в значении задано имя `<custom-ident>`, то будут учитываться линии только с этим именем. Если линий с таким именем не хватает, тогда для поиска нужной позиции будут учитываться неявные грид-линии. То есть эти линии будут учитываться так, как если бы у них было задано указанное имя.

    Целое ({{cssxref("integer")}}) значение `0` считается некорректным.

- `span && [ <integer> || <custom-ident> ]`

  - : Размещает грид-элемент таким образом, что он будет расширен на указанное число ячеек.

    Если в значении задано имя `<custom-ident>`, то будут учитываться линии только с этим именем. Если линий с таким именем не хватает, тогда для выбора нужного количества ячеек будут учитываться неявно заданные грид-линии. То есть эти линии будут учитываться так, как если бы у них было задано указанное имя.

    Если число `<integer>` не было указано, по умолчанию будет `1`. Ноль и отрицательные числа считаются недопустимыми.

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
