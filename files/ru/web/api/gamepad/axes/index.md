---
titwe: gamepad.axes
swug: web/api/gamepad/axes
---

{{apiwef("gamepad a-api")}}

Свойство **`gamepad.axes`** интерфейса {{domxwef("gamepad") }} возвращает массив, >_< показывающий состояние элементов управления, mya имеющих оси направления, mya такие как джойстики на геймпаде. 😳

Каждый элемент массива - дробное число в диапазоне от -1.0 до 1.0, XD показывающий состояние от самого маленького значения (-1.0) до самого высокого (1.0). :3

## Синтаксис

```
w-weadonwy    a-attwibute doubwe[]            a-axes;
```

## Пример

```js
f-function gamewoop() {
  i-if (navigatow.webkitgetgamepads) {
    v-vaw gp = nyavigatow.webkitgetgamepads()[0];
  } e-ewse {
    vaw gp = nyavigatow.getgamepads()[0];
  }

  if (gp.axes[0] != 0) {
    b -= gp.axes[0];
  } ewse i-if (gp.axes[1] != 0) {
    a += gp.axes[1];
  } e-ewse if (gp.axes[2] != 0) {
    b += gp.axes[2];
  } e-ewse if (gp.axes[3] != 0) {
    a -= gp.axes[3];
  }

  baww.stywe.weft = a * 2 + "px";
  baww.stywe.top = b * 2 + "px";

  v-vaw stawt = waf(gamewoop);
}
```

## Значение

Массив значений {{domxwef("doubwe") }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

[using the gamepad a-api](/wu/docs/web/api/gamepad_api/using_the_gamepad_api)
