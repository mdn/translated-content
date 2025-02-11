---
title: Location.replace()
slug: Web/API/Location/replace
---

{{ APIRef("HTML DOM") }}

Метод **`Location.replace()`** заменяет текущий ресурс на новый по URL, указанному в качестве параметра. Отличие от {{domxref("Location.assign","assign()")}} в том, что при использовании `replace()` текущая страница не будет сохранена в {{domxref("History")}}, и пользователь не сможет использовать кнопку _назад_, чтобы вернуться к ней.

Если условия вызова метода не удовлетворяют требованиям безопасности, выбрасывается {{domxref("DOMException")}} с типом `SECURITY_ERROR`. Это случается, если домен скрипта, вызывающего метод, не совпадает с доменом страницы, изначально содержащимся в {{domxref("Location")}}.

Если новый URL некорректен, выбрасывается {{domxref("DOMException")}} с типом `SYNTAX_ERROR`.

## Синтаксис

```
location.replace(url);
```

### Параметры

- _url_
  - : {{domxref("DOMString")}} , содержащий URL страницы, на которую нужно перейти.

## Примеры

```js
// Перейти на статью Location.reload, заменив текущую страницу
document.location.replace(
  "https://developer.mozilla.org/ru/docs/Web/API/Location.reload",
);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс {{domxref("Location")}}, к которому принадлежит этот метод.
- Похожие методы: {{domxref("Location.assign()")}} и {{domxref("Location.reload()")}}.
