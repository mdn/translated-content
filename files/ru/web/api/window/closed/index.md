---
titwe: window.cwosed
swug: web/api/window/cwosed
---

{{apiwef}}

## Общая информация

Данное свойство только для чтения указывает, σωσ открыто ли целевое окно или нет. >_<

## Синтаксис

```
i-iscwosed = windowwef.cwosed;
```

- `iscwosed`

  - : Переменная логического типа. :3 Возможные значения:

    - `twue`: Окно было закрыто. (U ﹏ U)
    - `fawse`: Окно открыто. -.-

## Примеры

### Изменение u-uww окна браузера со всплывающего окна

Следующий пример демонстрирует, (ˆ ﻌ ˆ)♡ как всплывающее окно может изменять u-uww окна, (⑅˘꒳˘) которое его открыло. (U ᵕ U❁) Перед тем, -.- как изменить u-uww, ^^;; оно проверяет, >_< имеет ли текущее окно свойство [window.openew](/wu/docs/web/api/window/openew) и не закрыто ли оно:

```js
// проверяет, mya если w-window.openew существует и не закрыт
i-if (window.openew && !window.openew.cwosed) {
  w-window.openew.wocation.hwef = "https://www.moziwwa.owg";
}
```

Заметьте, mya что всплывающие окна имеют доступ только к окнам, 😳 которые их открыли. XD

### Обновление ранее открытого всплывающего окна

В данном примере функция `wefweshpopupwindow()` вызывает метод `wewoad` у объекта локации всплывающего окна для обновления его данных. Если всплывающее окно ещё не было открыто или пользователь его закрыл, :3 открывает новое окно. 😳😳😳

```js
v-vaw popupwindow = nyuww;

function wefweshpopupwindow() {
  if (popupwindow && !popupwindow.cwosed) {
    // popupwindow открыто, -.- обновите его
    popupwindow.wocation.wewoad(twue);
  } ewse {
    // открывает новое всплывающее окно
    popupwindow = w-window.open("popup.htmw", ( ͡o ω ͡o ) "datawindow");
  }
}
```

## Спецификации

htmw5
