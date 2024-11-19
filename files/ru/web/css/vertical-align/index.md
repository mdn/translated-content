---
title: vertical-align
slug: Web/CSS/vertical-align
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS)-свойство `vertical-align` устанавливает вертикальное выравнивание строчных (англ. _inline_) и строчно-блочных (англ. _inline-block_) элементов или ячеек таблицы (table-cell).

{{EmbedInteractiveExample("pages/css/vertical-align.html")}}

Свойство `vertical-align` может использоваться в двух контекстах:

- Для вертикального выравнивания области строчного элемента внутри содержащей его строки. Например, с помощью него можно задать [вертикальное позиционирование изображения в строке текста](#вертикальное_позиционирование_строчного_элемента).
- Для вертикального выравнивания [содержимого ячейки таблицы](#вертикальное_позиционирование_содержимого_ячейки_таблицы).

Следует иметь в виду, что свойство `vertical-align` применяется только к строчным и строчно-блочным элементам, а также к элементам ячеек таблицы: его нельзя использовать для вертикального позиционирования [блочных элементов](/ru/docs/Glossary/Block-level_content).

## Синтаксис

```css
/* Ключевые слова */
vertical-align: baseline;
vertical-align: sub;
vertical-align: super;
vertical-align: text-top;
vertical-align: text-bottom;
vertical-align: middle;
vertical-align: top;
vertical-align: bottom;

/* Значения длины (<length>) */
vertical-align: 10em;
vertical-align: 4px;

/* Процентные значения (<percentage>) */
vertical-align: 20%;

/* Глобальные значения */
vertical-align: inherit;
vertical-align: initial;
vertical-align: revert;
vertical-align: revert-layer;
vertical-align: unset;
```

Свойство `vertical-align` задаётся одним из значений, указанных ниже.

### Значения для строчных элементов

#### Значения относительно родительского элемента

Данные значения позиционируют элемент по вертикали относительно родительского элемента:

- `baseline`
  - : Выравнивает базовую линию элемента с базовой линией родительского элемента. Базовая линия некоторых [замещаемых элементов](/ru/docs/Web/CSS/Replaced_element), таких как {{HTMLElement("textarea")}}, не описана в спецификации HTML, что означает, что их поведение при указании данного ключевого слова может отличаться в зависимости от браузера.
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
  - : Выравнивает базовую линию элемента относительно базовой линии родительского элемента со смещением на указанную величину. Допустимы отрицательные значения.
- {{cssxref("&lt;percentage&gt;")}}
  - : Выравнивает базовую линию элемента относительно базовой линии родительского элемента со смещением на указанную в процентах величину (вычисляется относительно значения свойства {{Cssxref("line-height")}}). Допустимы отрицательные значения.

#### Значения относительно строки

Следующие значения позиционируют элемент по вертикали относительно всей строки:

- `top`
  - : Выравнивает верхний край элемента и его потомков с верхним краем всей строки.
- `bottom`
  - : Выравнивает нижний край элемента и его потомков с нижним краем всей строки.

Для элементов, у которых нет базовой линии, вместо неё используется нижняя граница {{Cssxref("margin", "внешнего отступа")}}.

### Значения для ячеек таблицы

- `baseline` (и `sub`, `super`, `text-top`, `text-bottom`, `<length>`, и `<percentage>`)
  - : Выравнивают базовую линию ячейки с базовой линией всех остальных ячеек этой строки, которые выравнены относительно базовой линии.
- `top`
  - : Выравнивает верхнюю границу {{Cssxref("padding", "внутреннего отступа")}} ячейки с верхним краем строки таблицы.
- `middle`
  - : Выравнивает внутреннее поля ячейки по центру относительно строки таблицы.
- `bottom`
  - : Выравнивает нижнюю границу {{Cssxref("padding", "внутреннего отступа")}} ячейки с нижним краем строки таблицы.

Допустимы отрицательные значения.

## Формальное определение

{{cssinfo}}

### Формальный синтаксис

{{csssyntax}}

## Примеры

### Основной пример

#### HTML

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

#### CSS

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

#### Результат

{{EmbedLiveSample("Основной_пример")}}

### Вертикальное позиционирование строчного элемента

#### HTML

```html-nolint
<p>
top:         <img style="vertical-align: top" src="star.png" alt="star"/>
middle:      <img style="vertical-align: middle" src="star.png" alt="star"/>
bottom:      <img style="vertical-align: bottom" src="star.png" alt="star"/>
super:       <img style="vertical-align: super" src="star.png" alt="star"/>
sub:         <img style="vertical-align: sub" src="star.png" alt="star"/>
</p>

<p>
text-top:    <img style="vertical-align: text-top" src="star.png" alt="star"/>
text-bottom: <img style="vertical-align: text-bottom" src="star.png" alt="star"/>
0.2em:       <img style="vertical-align: 0.2em" src="star.png" alt="star"/>
-1em:        <img style="vertical-align: -1em" src="star.png" alt="star"/>
20%:         <img style="vertical-align: 20%" src="star.png" alt="star"/>
-100%:       <img style="vertical-align: -100%" src="star.png" alt="star"/>
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

#### Result

{{EmbedLiveSample("Вертикальное_позиционирование_строчного_элемента", "100%", 160)}}

### Вертикальное позиционирование содержимого ячейки таблицы

#### HTML

```html
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

#### CSS

```css
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

#### Результат

{{EmbedLiveSample("Вертикальное_позиционирование_содержимого_ячейки_таблицы", "100%", 230)}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Typical use cases of Flexbox, section "Center item"](/ru/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox#center_item)
- {{Cssxref("line-height")}}, {{Cssxref("text-align")}}, {{Cssxref("margin")}}
- [Understanding `vertical-align`, or "How (Not) To Vertically Center Content"](http://phrogz.net/css/vertical-align/index.html)
- [Vertical-Align: All You Need To Know (CSS)](http://christopheraue.net/2014/03/05/vertical-align/)
