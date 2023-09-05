---
title: Window.scrollByLines()
slug: Web/API/Window/scrollByLines
---

{{ ApiRef() }}

{{Non-standard_header}}

## Summary

Прокручивает документ на заданное число строк.

## Syntax

```
window.scrollByLines(lines)
```

## Parameters

- `lines` — число линий, на которое надо прокрутить документ.
- `lines` может быть положительным или отрицательным целым числом.

## Example

```html
<!-- прокручивает страницу вниз на 5 линий. -->
<button onclick="scrollByLines(5);">down 5 lines</button>
```

```html
<!-- прокручивает страницу вверх на 5 линий. -->
<button onclick="scrollByLines(-5);">up 5 lines</button>
```

## Specification

Не является частью спецификации

## See also

- {{domxref("window.scrollBy")}}, {{domxref("window.scrollByPages")}}
