---
title: BeforeUnloadEvent
slug: Web/API/BeforeUnloadEvent
---

{{APIRef}}

Событие **`beforeunload`** (en: перед_выгрузкой) происходит (непосредственно) перед выгрузкой окна, документа и их ресурсов.

Если присвоено ненулевое значение свойству `returnValue` Event, всплывает диалоговое окно: "Вы действительно хотите покинуть эту страницу?" (см. пример ниже). Если значение не присвоено, то событие не отображается. В некоторых случаях диалоговое окно всплывает только после взаимодействия пользователя с фреймом или любым встроенным фреймом. См. детали [Browser compatibility](#browser_compatibility)

<table class="properties">
  <tbody>
    <tr>
      <td>Всплывающие окна</td>
      <td>Нет</td>
    </tr>
    <tr>
      <td>Возможность отмены</td>
      <td>Да</td>
    </tr>
    <tr>
      <td>Целевые Объекты</td>
      <td>defaultView</td>
    </tr>
    <tr>
      <td>Интерфейс</td>
      <td>{{domxref("Event")}}</td>
    </tr>
  </tbody>
</table>

## Примеры

```js
window.addEventListener("beforeunload", function (event) {
  event.returnValue = "\\o/";
});

//is equivalent to
window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
});
```

Webkit-based browsers не следуют спецификации диалоговых окон . Самый кросс-браузерный работающий пример выглядит примерно так: см. ниже.

```js
window.addEventListener("beforeunload", function (e) {
  var confirmationMessage = "\\o/";

  (e || window.event).returnValue = confirmationMessage; //Gecko + IE
  return confirmationMessage; //Webkit, Safari, Chrome etc.
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{Event("DOMContentLoaded")}}
- {{Event("readystatechange")}}
- {{Event("load")}}
- {{Event("beforeunload")}}
- {{Event("unload")}}
- [Выгрузка Документов - Запрос на выгрузку документа](http://www.whatwg.org/specs/web-apps/current-work/#prompt-to-unload-a-document)
