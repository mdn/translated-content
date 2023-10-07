---
title: overflow
slug: Web/CSS/overflow
---

{{ CSSRef() }}

## Резюме

Свойство CSS `overflow` определяет, необходимо ли для переполненного блочного элемента содержимое обрезать, предоставить полосы прокрутки или просто отобразить.

Использование свойства `overflow` со значениями, отличными от `visible`, (значение, принятое по умолчанию), создаёт новый [блочный контекст форматирования](/ru/docs/CSS/block_formatting_context). Это технически необходимо, поскольку если бы float пересекался с элементом прокрутки, это потребовало бы обеспечить обтекание содержимого прокручиваемого элемента вокруг вторгающихся float'ов. Обтекание при этом было бы необходимо производить после каждого шага прокрутки заново, что привело бы к заметному замедлению прокрутки. Обратите внимание, что при программной установке атрибута `scrollTop` для соответствующего HTML-элемента, даже если `overflow` имеет значение `hidden`, элемент, возможно, придётся прокрутить.

{{cssinfo}}

## Синтаксис

[Формат синтаксиса](/ru/docs/CSS/Value_definition_syntax): {{csssyntax("overflow")}}

```css
overflow: visible
overflow: hidden
overflow: scroll
overflow: auto

overflow: inherit
```

### Значения

- `visible`
  - : По умолчанию. Содержимое не обрезается, может отображаться снаружи блока, в котором оно расположено.
- `hidden`
  - : Контент обрезается, без предоставления прокрутки.
- `scroll`
  - : Содержимое обрезается и браузер использует элементы прокрутки, не важно было ли обрезано содержимое или нет. Это избегает многих проблем касательно появления прокруток и их исчезновения в динамичной среде. Принтеры могут печатать переполненное содержимое.
- `auto`
  - : Зависит от агента пользователя. Браузеры такие как Firefox предоставляют прокрутку, если содержимое переполняет блок.

#### Расширения Mozilla

- `-moz-scrollbars-none`
  - : Используйте `overflow:hidden`.
- `-moz-scrollbars-horizontal` {{ Deprecated_inline() }}
  - : Использование {{ Cssxref("overflow-x") }} и {{ Cssxref("overflow-y") }} предпочтительнее.
- `-moz-scrollbars-vertical` {{ Deprecated_inline() }}
  - : Использование {{ Cssxref("overflow-x") }} и {{ Cssxref("overflow-y") }} предпочтительнее.
- \-moz-hidden-unscrollable {{ non-standard_inline() }}
  - : Главным образом предназначен для внутреннего использования и для тем. Отключает прокрутку XML root элементов и `<html>`, `<body>` клавишами со стрелками и колесом мыши.

## Примеры

```css
p {
  width: 12em;
  height: 6em;
  border: dotted;
  overflow: visible; /* содержимое не обрезается */
}
```

`visible` (default)
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

```css
p {
  overflow: hidden; /* полосы прокрутки не предоставляются */
}
```

`overflow: hidden`
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

```css
p {
  overflow: scroll; /* всегда показывать полосы прокрутки */
}
```

`overflow: scroll`
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

```css
p {
  overflow: auto; /* добавить полосы прокрутки, если это необходимо */
}
```

`overflow: auto`
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

## Спецификации

| Спецификация                                                   | Статус                     | Комментарий                                                     |
| -------------------------------------------------------------- | -------------------------- | --------------------------------------------------------------- |
| {{SpecName('CSS3 Overflow', '#propdef-overflow', 'overflow')}} | {{Spec2('CSS3 Overflow')}} | Changed syntax to allow one or two keywords instead of only one |
| {{SpecName('CSS3 Box', '#propdef-overflow', 'overflow')}}      | {{Spec2('CSS3 Box')}}      | Без изменений                                                   |
| {{SpecName('CSS2.1', 'visufx.html#overflow', 'overflow')}}     | {{Spec2('CSS2.1')}}        | Initial definition.                                             |

## Совместимость браузера

{{Compat}}

### Firefox (Gecko) Примечания

Из-за Firefox 3.6 (Gecko 1.9.2), `свойство overflow неверно применяется к элементам` table-group (`<thead>` , `<tbody>` , `<tfoot>`). Это поведение будет исправлено в следующих версиях.

### Internet Explorer Примечания

Internet Explorer 4 - 6 увеличивает элемент с `overflow:visible` (значение по умолчанию), чтобы заполнить содержимое в нём. `height/width` действуют подобно `min-height/min-width`.

## Смотрите также

- Связанные свойства CSS: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}, {{Cssxref("overflow-inline")}}, {{Cssxref("overflow-block")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}
