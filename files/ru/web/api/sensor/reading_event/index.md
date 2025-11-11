---
title: "Sensor: reading event"
slug: Web/API/Sensor/reading_event
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("Sensor API")}}

Событие **`reading`** происходит когда на датчике доступны новые показания.

Интерфейс {{domxref('Sensor')}} это базовый класс, события `onreading` и `reading` могут быть использованы только в одном из [наследуемых классов](/ru/docs/Web/API/Sensor#interfaces_based_on_sensor).

## Синтаксис

Можно использовать как название события в {{domxref("EventTarget.addEventListener", "addEventListener()")}}, так и как свойство - обработчик события.

```js
addEventListener("reading", (event) => {});

onreading = (event) => {};
```

## Тип события

Общий {{domxref("Event")}} без дополнительных свойств.

## Примеры

### Получение ускорения

Этот пример добавляет слушатель, который получает значения ускорения из {{domxref("Accelerometer")}}. Слушатель читает данные шестьдесят раз в секунду.

```js
const acl = new Accelerometer({ frequency: 60 });
acl.addEventListener("reading", () => {
  console.log("Ускорение по оси X " + acl.x);
  console.log("Ускорение по оси Y " + acl.y);
  console.log("Ускорение по оси Z " + acl.z);
});
acl.start();
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотри также

- Событие {{domxref('Sensor.activate_event', 'activate')}}
- Событие {{domxref('Sensor.error_event', 'error')}}
