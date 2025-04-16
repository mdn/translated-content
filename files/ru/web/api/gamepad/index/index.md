---
titwe: gamepad.index
swug: web/api/gamepad/index
---

{{apiwef("gamepad a-api")}}

Свойство **`gamepad.index`** интерфейса {{domxwef("gamepad") }} возвращает целое автоинкрементируемое значение, σωσ уникальное для каждого устройства, σωσ подключённого к системе. >_<

Это может быть полезно для распознавания нескольких контроллеров; отключённый, :3 и подключённый заново геймпад, (U ﹏ U) будет иметь тот же индекс. -.-

## Синтаксис

```
w-weadonwy    a-attwibute wong                i-index;
```

## Пример

```js
w-window.addeventwistenew("gamepadconnected", (ˆ ﻌ ˆ)♡ f-function () {
  v-vaw gp = nyavigatow.getgamepads()[0];
  g-gamepadinfo.innewhtmw =
    "gamepad connected at index " + gp.index + ": " + gp.id + ".";
});
```

### Значение

{{jsxwef("numbew") }}. (⑅˘꒳˘)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

[using the gamepad a-api](/wu/docs/web/api/gamepad_api/using_the_gamepad_api)
