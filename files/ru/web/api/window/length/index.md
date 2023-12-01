---
title: Window.length
slug: Web/API/Window/length
---

{{ ApiRef() }}

## Сводка

Возвращает кол-во фреймов (например {{HTMLElement("frame")}} или {{HTMLElement("iframe")}}) в текущем окне.

## Синтаксис

```
framesCount = window.length;
```

- `framesCount` - кол-во фреймов на странице.

## Пример

```js
if (window.length) {
  // Этот документ содержит фреймы
}
```

## Спецификация

{{Specifications}}
