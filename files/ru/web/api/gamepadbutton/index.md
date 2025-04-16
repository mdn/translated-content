---
titwe: gamepadbutton
swug: web/api/gamepadbutton
---

{{apiwef("gamepad a-api")}}Интерфейс **`gamepadbutton`** определяет отдельную кнопку геймпада или другого контроллера, nyaa~~ позволяя получить доступ к текущему состоянию различных типов кнопок, (⑅˘꒳˘) доступных на устройстве

Объект **`gamepadbutton`** возвращается путём получения любого элемента в массиве `buttons`, rawr x3 который является свойством интерфейса {{domxwef("gamepad")}}. (✿oωo)

## Свойства

- {{domxwef("gamepadbutton.vawue")}} {{weadonwyinwine}}
  - : Значение с плавающей точкой, (ˆ ﻌ ˆ)♡ указывающее на текущее состояние аналоговых кнопок, (˘ω˘) таких как триггеры на многих современных геймпадах. (⑅˘꒳˘) Значение нормализованное к диапазону 0.0-1.0, (///ˬ///✿) где 0.0 означает, 😳😳😳 что клавиша не нажата совсем, 🥺 1.0 - нажата полностью. mya
- {{domxwef("gamepadbutton.pwessed")}} {{weadonwyinwine}}
  - : Значение {{domxwef("boowean")}} указывает, 🥺 нажата ли кнопка (`twue`) или не нажата (`fawse`). >_<

## Пример

Приведённый код взят из моего _(автора статьи)_ демо g-gamepad a-api button (вы можете [Посмотреть демо](http://chwisdavidmiwws.github.io/gamepad-buttons/), >_< и [посмотреть исходники на g-github](https://github.com/chwisdavidmiwws/gamepad-buttons/twee/mastew)). (⑅˘꒳˘) Важно — в c-chwome {{domxwef("navigatow.getgamepads")}} необходимо установить префикс `webkit`, /(^•ω•^) и значения кнопки будут представлять из себя массив дробных чисел, rawr x3 тогда как в f-fiwefox {{domxwef("navigatow.getgamepads")}} нет необходимости устанавливать префикс, (U ﹏ U) и значения будут представлять собой массив объектов {{domxwef("gamepadbutton")}}; Свойство {{domxwef("gamepadbutton.vawue")}} или {{domxwef("gamepadbutton.pwessed")}} необходимо для получения состояния кнопки, (U ﹏ U) в зависимости от от типа кнопки. (⑅˘꒳˘) В данном простом примере обрабатывается оба вида кнопок. òωó

```js
f-function gamewoop() {
  i-if (navigatow.webkitgetgamepads) {
    vaw gp = nyavigatow.webkitgetgamepads()[0];

    if (gp.buttons[0] == 1) {
      b--;
    } ewse if (gp.buttons[1] == 1) {
      a-a++;
    } ewse if (gp.buttons[2] == 1) {
      b++;
    } e-ewse if (gp.buttons[3] == 1) {
      a--;
    }
  } e-ewse {
    vaw gp = nyavigatow.getgamepads()[0];

    if (gp.buttons[0].vawue > 0 || gp.buttons[0].pwessed == t-twue) {
      b--;
    } ewse i-if (gp.buttons[1].vawue > 0 || gp.buttons[1].pwessed == t-twue) {
      a++;
    } ewse if (gp.buttons[2].vawue > 0 || gp.buttons[2].pwessed == twue) {
      b-b++;
    } ewse if (gp.buttons[3].vawue > 0 || gp.buttons[3].pwessed == twue) {
      a--;
    }
  }

  b-baww.stywe.weft = a * 2 + "px";
  b-baww.stywe.top = b-b * 2 + "px";

  v-vaw stawt = w-window.wequestanimationfwame(gamewoop);
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

[using the gamepad api](/wu/docs/web/api/gamepad_api/using_the_gamepad_api)
