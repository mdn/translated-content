---
title: Geolocation.getCurrentPosition()
slug: Web/API/Geolocation/getCurrentPosition
---

{{securecontext_header}}{{ APIRef("Geolocation API") }}Метод **`Geolocation.getCurrentPosition()`** используется для получения текущего местоположения устройства.

## Синтаксис

```
navigator.geolocation.getCurrentPosition(success[, error[, options]])
```

### Параметры

- `success`
  - : Колбэк-функция, которая принимает объект {{domxref("Position")}} в качестве единственного входного параметра.
- `error` {{optional_inline}}
  - : Необязательная колбэк-функция, принимающая объект {{domxref("PositionError")}} как единственный входной параметр.
- `options` {{optional_inline}}

  - : Необязательный объект {{domxref("PositionOptions")}}.
    Включает в себя

    - `maximumAge`: целое число (миллисекунды) | infinity - максимальное время кеширования позиции.
    - `timeout`: целое число (миллисекунды) - количество времени до вызова callback ошибки. Если 0, вызов не происходит.
    - `enableHighAccuracy`: false | true

## Пример

```js
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;

  console.log("Ваше текущее местоположение:");
  console.log(`Широта: ${crd.latitude}`);
  console.log(`Долгота: ${crd.longitude}`);
  console.log(`Плюс-минус ${crd.accuracy} метров.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Using geolocation](/ru/docs/WebAPI/Using_geolocation)
- {{domxref("Navigator.geolocation")}}
