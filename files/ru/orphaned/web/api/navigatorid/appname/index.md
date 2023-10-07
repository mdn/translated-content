---
title: NavigatorID.appName
slug: orphaned/Web/API/NavigatorID/appName
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Свойство **`NavigatorID.appName`** возвращает название браузера. HTML5 спецификация также позволяет любому браузеру вернуть `Netscape`", по причине совместимости.

**Примечание:** не полагайтесь на это свойство для получения корректного имени браузера.В большинстве браузеров (Firefox, как, Chrome, Safari, Opera и Internet Explorer) возвращаемой строкой будет "Netscape".

## Синтаксис

```
appName = window.navigator.appName
```

### Значение

`appName` это имя браузера в виде строки.

## Пример

```js
alert(window.navigator.appName);
// показывает имя браузера.
```

## Спецификации

{{Specifications}}

## Доступность в браузере

{{Compat("api.NavigatorID.appName")}}

## Смотрите также

- {{domxref("NavigatorID.appCodeName")}}
