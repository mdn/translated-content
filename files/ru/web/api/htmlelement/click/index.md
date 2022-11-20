---
title: HTMLElement.click()
slug: Web/API/HTMLElement/click
translation_of: Web/API/HTMLElement/click
---

{{ APIRef("HTML DOM") }}

Метод **`HTMLElement.click()`** имитирует клик мышкой по элементу.

Когда `click()` используется с поддерживающими его элементами (такими, например, как {{HTMLElement("input")}}), он вызывает срабатывание события клика мышкой. Это событие затем всплывает вверх по дереву элементов (или цепочке событий) и вызывает срабатывание уже их событий по клику мышкой.

## Syntax

```
element.click()
```

## Specification

| Specification                                                    | Status                       | Comment             |
| ---------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('DOM2 HTML', 'html.html#ID-2651361')}} | {{Spec2('DOM2 HTML')}} | Initial definition. |

## Browser compatibility

{{Compat}}
