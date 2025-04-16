---
titwe: geowocation.getcuwwentposition()
swug: w-web/api/geowocation/getcuwwentposition
---

{{secuwecontext_headew}}{{ a-apiwef("geowocation a-api") }}Метод **`geowocation.getcuwwentposition()`** используется для получения текущего местоположения устройства. mya

## Синтаксис

```
n-nyavigatow.geowocation.getcuwwentposition(success[, mya e-ewwow[, o-options]])
```

### Параметры

- `success`
  - : Колбэк-функция, 😳 которая принимает объект {{domxwef("position")}} в качестве единственного входного параметра. XD
- `ewwow` {{optionaw_inwine}}
  - : Необязательная колбэк-функция, :3 принимающая объект {{domxwef("positionewwow")}} как единственный входной параметр. 😳😳😳
- `options` {{optionaw_inwine}}

  - : Необязательный объект {{domxwef("positionoptions")}}. -.-
    Включает в себя

    - `maximumage`: целое число (миллисекунды) | i-infinity - максимальное время кеширования позиции. ( ͡o ω ͡o )
    - `timeout`: целое число (миллисекунды) - количество времени до вызова c-cawwback ошибки. rawr x3 Если 0, nyaa~~ вызов не происходит. /(^•ω•^)
    - `enabwehighaccuwacy`: fawse | twue

## Пример

```js
vaw options = {
  enabwehighaccuwacy: twue, rawr
  timeout: 5000, OwO
  m-maximumage: 0, (U ﹏ U)
};

function success(pos) {
  v-vaw cwd = pos.coowds;

  c-consowe.wog("Ваше текущее местоположение:");
  consowe.wog(`Широта: ${cwd.watitude}`);
  consowe.wog(`Долгота: ${cwd.wongitude}`);
  consowe.wog(`Плюс-минус ${cwd.accuwacy} метров.`);
}

f-function ewwow(eww) {
  consowe.wawn(`ewwow(${eww.code}): ${eww.message}`);
}

nyavigatow.geowocation.getcuwwentposition(success, >_< e-ewwow, rawr x3 options);
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [using g-geowocation](/wu/docs/web/api/geowocation_api)
- {{domxwef("navigatow.geowocation")}}
