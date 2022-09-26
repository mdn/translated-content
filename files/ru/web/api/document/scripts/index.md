---
title: Document.scripts
slug: Web/API/Document/scripts
translation_of: Web/API/Document/scripts
---
{{APIRef("DOM")}}

Возвращает список элементов {{HTMLElement("script")}} в документ. Возвращаемый объект является {{domxref("HTMLCollection")}}.

## Syntax

```
var scriptList = document.scripts;
```

Возвращаемый `scriptList` является {{domxref("HTMLCollection")}}. Вы можете использовать его как массив для получения всех элементов в списке.

## Example

Этот пример показывает есть ли на странице элементы {{HTMLElement("script")}}.

```js
var scripts = document.scripts;

if (scripts.length) {
  alert("This page has scripts!");
}
```

## Browser compatibility

{{Compat}}

## Specifications

| Specification                                                                                    | Status                               | Comment |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ------- |
| {{SpecName('HTML WHATWG', '#dom-document-scripts', 'Document.scripts')}} | {{ Spec2('HTML WHATWG') }} |         |
