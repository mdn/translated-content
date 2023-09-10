---
title: "Sensor: activate event"
slug: Web/API/Sensor/activate_event
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("Sensor API")}}

Событие **`activate`** происходит, когда датчик переходит в активное состояние. Это значит, что он начинает собирать показания.

Интерфейс {{domxref('Sensor')}} это базовый класс, события `onactivate` и `activate` могут быть использованы только в одном из [наследуемых классов](/ru/docs/Web/API/Sensor#interfaces_based_on_sensor).

## Синтаксис

Можно использовать как название события в {{domxref("EventTarget.addEventListener", "addEventListener()")}}, так и как свойство - обработчик события.

```js
addEventListener("activate", (event) => {});

onactivate = (event) => {};
```

## Тип события

Общий {{domxref("Event")}} без дополнительных свойств.

## Примеры

### Логирование, когда акселерометр готов к измерению

Этот пример добавляет слушатель события, который логирует активацию {{domxref("Accelerometer")}}.

```js
const acl = new Accelerometer({ frequency: 60 });
acl.addEventListener("activate", () => console.log("Готов к измерениям."));
acl.start();
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотри также

- Событие {{domxref('Sensor.error_event', 'error')}}
- Событие {{domxref('Sensor.reading_event', 'reading')}}
