---
title: "Sensor: error event"
slug: Web/API/Sensor/error_event
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Sensor API")}}

Событие **`error`** происходит когда на датчике возникает исключение.

Интерфейс {{domxref('Sensor')}} это базовый класс, события `onerror` и `error` могут быть использованы только в одном из [наследуемых классов](/ru/docs/Web/API/Sensor#interfaces_based_on_sensor).

После того, как это событие произошло, объект {{domxref('Sensor')}} переходит в стадию покоя. Если датчик считывал показания, то он прекратит это делать до перезапуска.

## Синтаксис

Можно использовать как название события в {{domxref("EventTarget.addEventListener", "addEventListener()")}}, так и как свойство - обработчик события.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Тип события

{{domxref("SensorErrorEvent")}}. Унаследован от {{domxref("Event")}}.

{{InheritanceDiagram("SensorErrorEvent")}}

## Свойства события

_В дополнение к свойствам описанным ниже, также доступны свойства из родительского интерфейса {{domxref("Event")}}._

- {{domxref('SensorErrorEvent.error', 'error')}} {{ReadOnlyInline}}
  - : Возвращает исключение {{domxref('DOMException')}}.

## Примеры

### Логирование ошибок акселерометра

Этот пример добавляет слушатель события, который логирует ошибку, возникшую при работе {{domxref("Accelerometer")}}.

```js
const acl = new Accelerometer({ frequency: 60 });
acl.addEventListener("error", (error) => console.log(`Error: ${error.name}`));
acl.start();
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотри также

- Событие {{domxref('Sensor.activate_event', 'activate')}}
- Событие {{domxref('Sensor.reading_event', 'reading')}}
