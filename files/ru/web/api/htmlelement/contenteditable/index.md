---
title: HTMLElement.contentEditable
slug: Web/API/HTMLElement/contentEditable
---

{{ APIRef("HTML DOM") }}

Свойство **`HTMLElement.contentEditable`** элемента - признак, указывающий можно или нет редактировать содержимое элемента. Свойство может принимать следующие значения:

- `true или пустая строка - содержимое элемента доступно для редактирования`.
- `false` - содержимое элемента не доступно для редактирования.
- `inherit` - наследуется значение данного свойства от родительского элемента.

Вы можете использовать свойство {{domxref("HTMLElement.isContentEditable")}}, чтобы проверить {{domxref("Boolean")}} значение этого свойства.

## Синтаксис

```
editable = element.contentEditable
element.contentEditable = "true"
```

## Спецификации

{{Specifications}}

## Browser compatibility

{{Compat}}

In Internet Explorer, `contenteditable` cannot be applied to the
{{htmlelement("table")}}, {{htmlelement("col")}}, {{htmlelement("colgroup")}},
{{htmlelement("tbody")}}, {{htmlelement("td")}}, {{htmlelement("tfoot")}},
{{htmlelement("th")}}, {{htmlelement("thead")}}, and {{htmlelement("tr")}} elements
directly. A content editable {{htmlelement("span")}} or {{htmlelement("div")}} element
can be placed inside the individual table cells.

## See also

- {{domxref("HTMLElement.isContentEditable")}}
- The [contenteditable](/ru/docs/Web/HTML/Global_attributes/contenteditable) global attribute.
- [Why ContentEditable is Terrible, Or: How the Medium Editor Works](https://medium.com/medium-eng/why-contenteditable-is-terrible-122d8a40e480)
