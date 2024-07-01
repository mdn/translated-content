---
title: Location.reload()
slug: Web/API/Location/reload
---

{{ APIRef("HTML DOM") }}

Метод **`Location.reload()`** перезагружает ресурс из текущего URL подобно кнопке обновления браузера.

Если условия вызова метода не удовлетворяют требованиям безопасности, выбрасывается {{domxref("DOMException")}} с типом `SECURITY_ERROR`. Это случается, если домен скрипта, вызывающего метод, не совпадает с доменом страницы, изначально содержащимся в {{domxref("Location")}}.

## Синтаксис

```
location.reload();
```

## Примеры

```js
// Перезагрузить текущую страницу
document.location.reload();
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс {{domxref("Location")}}, к которому принадлежит этот метод.
- Похожие методы: {{domxref("Location.assign()")}} и {{domxref("Location.replace()")}}.
