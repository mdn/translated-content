---
title: Window.closed
slug: Web/API/Window/closed
---

{{APIRef}}

## Общая информация

Данное свойство только для чтения указывает, открыто ли целевое окно или нет.

## Синтаксис

```
isClosed = windowRef.closed;
```

- `isClosed`

  - : Переменная логического типа. Возможные значения:

    - `true`: Окно было закрыто.
    - `false`: Окно открыто.

## Примеры

### Изменение URL окна браузера со всплывающего окна

Следующий пример демонстрирует, как всплывающее окно может изменять URL окна, которое его открыло. Перед тем, как изменить URL, оно проверяет, имеет ли текущее окно свойство [window.opener](/ru/docs/DOM/window.opener) и не закрыто ли оно:

```js
// проверяет, если window.opener существует и не закрыт
if (window.opener && !window.opener.closed) {
  window.opener.location.href = "http://www.mozilla.org";
}
```

Заметьте, что всплывающие окна имеют доступ только к окнам, которые их открыли.

### Обновление ранее открытого всплывающего окна

В данном примере функция `refreshPopupWindow()` вызывает метод `reload` у объекта локации всплывающего окна для обновления его данных. Если всплывающее окно ещё не было открыто или пользователь его закрыл, открывает новое окно.

```js
var popupWindow = null;

function refreshPopupWindow() {
  if (popupWindow && !popupWindow.closed) {
    // popupWindow открыто, обновите его
    popupWindow.location.reload(true);
  } else {
    // открывает новое всплывающее окно
    popupWindow = window.open("popup.html", "dataWindow");
  }
}
```

## Спецификация

HTML5
