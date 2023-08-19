---
title: Window.close()
slug: Web/API/Window/close
---

{{APIRef}}

Функция **`Window.close()`** закрывает текущее окно или окно, которое было открыто с помощью функции **`Window.open()`**.

Этот метод разрешено использовать только для окон, которые были открыты с помощью функции {{domxref("window.open()")}}. Если окно не было открыто посредством JavaScript, в консоли появится ошибка, похожая на эту: `Scripts may not close windows that were not opened by script.`

## Синтаксис

```
window.close();
```

## Примеры

### Закрытие окна, открытого с помощью `window.open()`

В примере показаны два метода, в которых первый из них открывает окно, а второй закрывает; этот пример иллюстрирует как использовать `Window.close() для закрытия окна, открытого с помощью функции` {{domxref("window.open()")}}.

```js
// Глобальная переменная, хранящая ссылку на открыток окно
var openedWindow;

function openWindow() {
  openedWindow = window.open("moreinfo.htm");
}

function closeOpenedWindow() {
  openedWindow.close();
}
```

### Закрытие текущего окна

В прошлом, если бы вы вызвали функцию close() объекта window, вместо вызова функции close() для созданного окна, браузер закрыл бы текущее окно, создал ли его ваш скрипт или нет. В текущее время этого не произойдёт; по причинам безопасности, скриптам больше не разрешено закрывать окна, которые они не открыли. (Firefox 46.0.1: scripts can not close windows, they had not opened)

```js
function closeCurrentWindow() {
  window.close();
}
```

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
