---
title: History API
slug: Web/API/History_API
---

{{DefaultAPISidebar("History API")}}
DOM-объект {{DOMxRef("Window")}} предоставляет доступ к истории текущей сессии браузера (не путать с [историей браузерных расширений](/ru/docs/Mozilla/Add-ons/WebExtensions/API/history)) через объект {{DOMxRef("Window.history","history")}}. Он предоставляет полезные методы и свойства, которые позволяют переходить назад и вперёд по истории пользователя и манипулировать её содержимым.

## Понятия и использование

Перемещение назад и вперёд по истории пользователя выполняется с помощью методов {{DOMxRef("History.back","back()")}}, {{DOMxRef("History.forward","forward()")}}, и {{DOMxRef("History.go","go()")}}.

### Перемещение вперёд и назад

Чтобы переместиться назад по истории:

```js
window.history.back();
```

Данный метод работает так, будто пользователь нажал на кнопку "Назад" на панели браузера.
Похожим образом можно переместиться вперёд (как если бы пользователь нажал на кнопку "Вперёд"):

```js
window.history.forward();
```

### Перемещение к определённой странице в истории

Вы можете использовать метод {{DOMxRef("History.go","go()")}} для загрузки конкретной страницы из истории сессии, определяемой её позицией относительно текущей страницы. Относительная позиция текущей страницы равняется `0`.

Вернуться на одну страницу назад (равноценно вызову {{DOMxRef("History.back","back()")}}):

```js
window.history.go(-1);
```

Перейти на одну страницу вперёд (равноценно вызову {{DOMxRef("History.forward","forward()")}})

```js
window.history.go(1);
```

По такому же принципу, можно перемещаться вперёд на 2 страницы, передавая аргумент `2`, и так далее.

Кроме того, метод `go()` можно использовать для обновления текущей страницы, передавая аргумент `0` или вызывая его без аргументов:

```
// Обе следующих инструкции обновляют текущую страницу
window.history.go(0)
window.history.go()
```

Узнать количество страниц, которые находятся в стеке истории, можно, получив значение свойства `length`:

```js
var numberOfEntries = window.history.length;
```

## Интерфейсы

- {{domxref("History")}}
  - : Позволяет манипулировать историей сессии браузера (то есть, страницами, посещёнными в той же закладке, что и текущая страница.

## Примеры

В следующем примере свойству `onpopstate` назначается обработчик. А затем приводятся некоторые методы объекта истории для добавления, замены и перемещения по истории текущей вкладки браузера

```
window.onpopstate = function(event) {
  alert(`location: ${document.location}, state: ${JSON.stringify(event.state)}`)
}

history.pushState({page: 1}, "title 1", "?page=1")
history.pushState({page: 2}, "title 2", "?page=2")
history.replaceState({page: 3}, "title 3", "?page=3")
history.back() // alerts "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back() // alerts "location: http://example.com/example.html, state: null"
history.go(2)  // alerts "location: http://example.com/example.html?page=3, state: {"page":3}"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

### Справочники

- {{ domxref("window.history") }}
- {{ domxref("window.onpopstate") }}

### Руководства

- [Working with the History API](/ru/docs/Web/API/History_API/Working_with_the_History_API)
