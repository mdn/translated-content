---
title: Location.assign()
slug: Web/API/Location/assign
---

{{ APIRef("HTML DOM") }}

Метод **`Location.assign()`** запускает загрузку и отображение нового документа по указанному URL.

Если новый URL не удовлетворяет требованиям безопасности, выбрасывается {{domxref("DOMException")}} с типом `SECURITY_ERROR`. Это случается, если домен скрипта, вызывающего метод, не совпадает с доменом страницы, изначально содержащимся в {{domxref("Location")}}.

Если новый URL некорректен, выбрасывается {{domxref("DOMException")}} с типом `SYNTAX_ERROR`.

## Синтаксис

```
object.assign(url);
```

### Параметры

- _url_
  - : {{domxref("DOMString")}}, содержащий URL страницы, на которую нужно перейти.

## Примеры

```js
// Перейти на статью Location.reload
document.location.assign(
  "https://developer.mozilla.org/ru/docs/Web/API/Location.reload",
);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс {{domxref("Location")}}, к которому принадлежит этот метод.
- Похожие методы: {{domxref("Location.replace()")}} и {{domxref("Location.reload()")}}.
