---
title: Window.clearImmediate()
slug: Web/API/Window/clearImmediate
---

{{ Apiref() }}

Данный метод очищает действие, определённое {{ domxref("window.setImmediate") }}.

> **Примечание:** На текущий момент данный метод находится на стадии предложения на внедрение, не является стандартом и имплементирован только в последних сборках Internet Explorer.

## Синтаксис

```
window.clearImmediate(immediateID)
```

где immediateID это идентификатор, возвращаемый из {{ domxref("window.setImmediate") }}.

## Примеры

```
var immediateID = setImmediate(function () {
  // Выполнение некоего кода
}

document.getElementById("button").addEventListener(function () {
  clearImmediate(immediateID);
}, false);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

{{ domxref("window.setImmediate") }}
