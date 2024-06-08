---
title: "BaseAudioContext: свойство currentTime"
slug: Web/API/BaseAudioContext/currentTime
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

Доступное только для чтения свойство `currentTime` интерфейса {{ domxref("BaseAudioContext") }} возвращает начинающуюся с 0 и постоянно увеличивающуюся аппаратную метку времени в секундах, которая может использоваться для планирования воспроизведения звука, визуализации и т.д.

## Значение

Число с плавающей запятой.

## Примеры

```js
const audioCtx = new AudioContext();
// Для работы в старых webkit/blink-браузерах требуется префикс

// …

console.log(audioCtx.currentTime);
```

## Снижение точности времени

Для обеспечения защиты от атак и [слежения за пользователем](/ru/docs/Glossary/Fingerprinting), точность `audioCtx.currentTime` может округляться в зависимости от настроек браузера.
В Firefox настройка `privacy.reduceTimerPrecision` включена по умолчанию и равна 20 мкс в Firefox 59 (2 мс в Firefox 60).

```js
// снижение точности времени (2 мс) в Firefox 60
audioCtx.currentTime;
// 23.404
// 24.192
// 25.514
// …

// снижение точности времени с включённой настройкой `privacy.resistFingerprinting`
audioCtx.currentTime;
// 49.8
// 50.6
// 51.7
// …
```

В Firefox также есть настройка `privacy.resistFingerprinting`, которая изменяет точность до 100 мс или значения `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, в зависимости от того, что больше.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование Web Audio API](/ru/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
