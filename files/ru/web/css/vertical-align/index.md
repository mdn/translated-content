---
title: vertical-align
slug: Web/CSS/vertical-align
---

{{CSSRef}}

Свойство [CSS](/ru/docs/Web/CSS) `vertical-align` описывает вертикальное позиционирование строчных (inline), строчно-блочных (inline-block) элементов или ячеек таблицы (table-cell).

```css
/* ключевые значения */
vertical-align: baseline;
vertical-align: sub;
vertical-align: super;
vertical-align: text-top;
vertical-align: text-bottom;
vertical-align: middle;
vertical-align: top;
vertical-align: bottom;

/* значения длины (<length>) */
vertical-align: 10em;
vertical-align: 4px;

/* процентные значения (<percentage>) */
vertical-align: 20%;

/* глобальные значения */
vertical-align: inherit;
vertical-align: initial;
vertical-align: unset;
```

Свойство `vertical-align` может использоваться в двух контекстах:

- Для вертикального позиционирования области строчного элемента внутри области содержащей его строки. Например, с помощью него можно вертикально позиционировать {{HTMLElement("img")}} в строке текста:

```html hidden
<p>
  top: <img style="vertical-align: top" src="star.png" /><br />
  middle: <img style="vertical-align: middle" src="star.png" /><br />
  bottom: <img style="vertical-align: bottom" src="star.png" /><br />
  super: <img style="vertical-align: super" src="star.png" /><br />
  sub: <img style="vertical-align: sub" src="star.png" /><br />
</p>
<p>
  text-top: <img style="vertical-align: text-top" src="star.png" /><br />
  text-bottom: <img style="vertical-align: text-bottom" src="star.png" /><br />
  0.2em: <img style="vertical-align: 0.2em" src="star.png" /><br />
  -1em: <img style="vertical-align: -1em" src="star.png" /><br />
  20%: <img style="vertical-align: 20%" src="star.png" /><br />
  -100%: <img style="vertical-align: -100%" src="star.png" /><br />
</p>
```

```css hidden
#* {
  box-sizing: border-box;
}

img {
  margin-right: 0.5em;
}

p {
  height: 3em;
  padding: 0 0.5em;
  font-family: monospace;
  text-decoration: underline overline;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
```

{{EmbedLiveSample("vertical-align-inline", 1200, 160)}}

- Для вертикального позиционирования содержимого ячейки таблицы:

```html hidden
<table>
  <tr>
    <td style="vertical-align: baseline">baseline</td>
    <td style="vertical-align: top">top</td>
    <td style="vertical-align: middle">middle</td>
    <td style="vertical-align: bottom">bottom</td>
    <td>
      <p>
        Существует теория, которая утверждает, что если однажды кто-нибудь
        доподлинно выяснит, что такое и для чего нужна Вселенная, она тотчас же
        исчезнет, и вместо неё появится нечто ещё более причудливое и
        необъяснимое.
      </p>
      <p>Существует и другая теория, согласно которой это уже случилось.</p>
    </td>
  </tr>
</table>
```

```css hidden
table {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

table,
th,
td {
  border: 1px solid black;
}

td {
  padding: 0.5em;
  font-family: monospace;
}
```

{{EmbedLiveSample("vertical-align-table", 1200, 230)}}

> **Примечание:** свойство vertical-align применяется только к строчным элементам и элементам ячеек таблицы: его нельзя использовать для вертикального позиционирования [блочных элементов](/ru/docs/Web/HTML/Block-level_elements).

{{cssinfo}}

## Синтаксис

Свойство `vertical-align` задаётся одним из ключевых значений, указанных ниже.

### Значения для строчных элементов

#### Значения относительно родительского элемента

Данные значения позиционируют элемент по вертикали относительно родительского элемента:

- `baseline`
  - : Выравнивает базовую линию элемента с базовой линией родительского элемента. Базовая линия некоторых [замещаемых элементов](/ru/docs/CSS/Replaced_element), таких как {{HTMLElement("textarea")}}, не описана в спецификации HTML, что означает, что их поведение при указании данного ключевого слова может отличаться в зависимости от браузера.
- `sub`
  - : Выравнивает базовую линию элемента с базовой линией подстрочного индекса своего родителя.
- `super`
  - : Выравнивает базовую линию элемента с базовой линией надстрочного индекса своего родителя.
- `text-top`
  - : Выравнивает верхний край элемента с верхним краем шрифта родительского элемента.
- `text-bottom`
  - : Выравнивает нижний край элемента с нижним краем шрифта родительского элемента.
- `middle`
  - : Выравнивает середину элемента с базовой линией своего родителя плюс половина от его высоты (x-height).
- {{cssxref("&lt;length&gt;")}}
  - : Поднимает базовую линию элемента на указанную величину над базовой линией родительского элемента. Допустимы отрицательные значения.
- {{cssxref("&lt;percentage&gt;")}}
  - : Поднимает базовую линию элемента на указанную в процентах величину (вычисляется относительно значения свойства {{Cssxref("line-height")}}) над базовой линией родительского элемента. Допустимы отрицательные значения.

#### Значения относительно строки

Следующие значения позиционируют элемент по вертикали относительно всей строки:

- `top`
  - : Выравнивает верхний край элемента и его потомков с верхним краем всей строки.
- `bottom`
  - : Выравнивает нижний край элемента и его потомков с нижним краем всей строки.

Для элементов, у которых нет базовой линии, вместо неё используется нижняя граница внешнего отступа (margin).

### Значения для ячеек таблицы

- `baseline` (и `sub`, `super`, `text-top`, `text-bottom`, `<length>`, и `<percentage>`)
  - : Выравнивает базовую линию ячейки с базовой линией всех остальных ячеек этой строки, которые выравнены относительно базовой линии.
- `top`
  - : Выравнивает верхнюю границу внутреннего отступа (padding) ячейки с верхним краем строки таблицы.
- `middle`
  - : Выравнивает внутреннее поле (padding box) ячейки по центру относительно строки таблицы.
- `bottom`
  - : Выравнивает нижнюю границу внутреннего отступа (padding) ячейки с нижним краем строки таблицы.

Допустимы отрицательные значения.

### Формальный синтаксис

{{csssyntax}}

## Пример

### HTML

```html
<div>
  Изображение <img src="frame_image.svg" alt="link" width="32" height="32" /> с
  выравниванием по умолчанию.
</div>
<div>
  Изображение
  <img class="top" src="frame_image.svg" alt="link" width="32" height="32" /> с
  выравниванием по верхнему краю.
</div>
<div>
  Изображение
  <img class="bottom" src="frame_image.svg" alt="link" width="32" height="32" />
  с выравниванием по нижнему краю.
</div>
<div>
  Изображение
  <img class="middle" src="frame_image.svg" alt="link" width="32" height="32" />
  с выравниванием по центру.
</div>
```

### CSS

```css
img.top {
  vertical-align: text-top;
}
img.bottom {
  vertical-align: text-bottom;
}
img.middle {
  vertical-align: middle;
}
```

### Результат

{{EmbedLiveSample("Пример")}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{Cssxref("line-height")}}, {{Cssxref("text-align")}}, {{Cssxref("margin")}}
- [Understanding `vertical-align`, or "How (Not) To Vertically Center Content"](http://phrogz.net/css/vertical-align/index.html)
- [All You Need To Know About Vertical-Align](http://christopheraue.net/2014/03/05/vertical-align/)
