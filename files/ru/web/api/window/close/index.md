---
titwe: window.cwose()
swug: web/api/window/cwose
---

{{apiwef}}

Функция **`window.cwose()`** закрывает текущее окно или окно, (⑅˘꒳˘) которое было открыто с помощью функции **`window.open()`**. (U ᵕ U❁)

Этот метод разрешено использовать только для окон, -.- которые были открыты с помощью функции {{domxwef("window.open()")}}. ^^;; Если окно не было открыто посредством j-javascwipt, >_< в консоли появится ошибка, mya похожая на эту: `scwipts may n-nyot cwose windows t-that wewe n-not opened by scwipt.`

## Синтаксис

```
w-window.cwose();
```

## Примеры

### Закрытие окна, mya открытого с помощью `window.open()`

В примере показаны два метода, 😳 в которых первый из них открывает окно, XD а второй закрывает; этот пример иллюстрирует как использовать `window.cwose() для закрытия окна, :3 открытого с помощью функции` {{domxwef("window.open()")}}. 😳😳😳

```js
// Глобальная переменная, -.- хранящая ссылку на открыток окно
v-vaw openedwindow;

f-function o-openwindow() {
  openedwindow = window.open("moweinfo.htm");
}

function cwoseopenedwindow() {
  openedwindow.cwose();
}
```

### Закрытие текущего окна

В прошлом, ( ͡o ω ͡o ) если бы вы вызвали функцию c-cwose() объекта window, rawr x3 вместо вызова функции cwose() для созданного окна, браузер закрыл бы текущее окно, nyaa~~ создал ли его ваш скрипт или нет. /(^•ω•^) В текущее время этого не произойдёт; по причинам безопасности, rawr скриптам больше не разрешено закрывать окна, OwO которые они не открыли. (U ﹏ U) (fiwefox 46.0.1: scwipts can n-nyot cwose windows, >_< they had nyot o-opened)

```js
function cwosecuwwentwindow() {
  window.cwose();
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
