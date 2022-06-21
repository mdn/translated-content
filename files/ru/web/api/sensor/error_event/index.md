---
title: 'Sensor: error event'
slug: Web/API/Sensor/error_event
page-type: web-api-event
tags:
  - API
  - Generic Sensor API
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
  - Event
browser-compat: api.Sensor.error_event
---
{{APIRef("Sensor API")}}

Событие **`error`** происходит когда на датчике возникает исключение.

Интерфейс {{domxref('Sensor')}} это базовый класс, события `onerror` и `error` могут быть использованы только в одном из [наследуемых классов](/ru/docs/Web/API/Sensor#interfaces_based_on_sensor).

После того, как это событие произошло, объект {{domxref('Sensor')}} переходит в стадию покоя. Если датчик считывал показания, то он прекратит это делать до перезапуска.

## Синтаксис

Можно использовать как название события в {{domxref("EventTarget.addEventListener", "addEventListener()")}}, так и как свойство - обработчик события.

```js
addEventListener('error', event => { })

onerror = event => { }
```

## Тип события

{{domxref("SensorErrorEvent")}}. Унаследован от {{domxref("Event")}}.

{{InheritanceDiagram("SensorErrorEvent")}}

## Свойства события

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref('SensorErrorEvent.error', 'error')}} {{readonlyinline}}
  - : Returns the {{domxref('DOMException')}} that has been thrown.

## Примеры

### Логирование ошибок акселерометра

Этот пример добавляет слушатель события, который логирует ошибку, возникшую при работе {{domxref("Accelerometer")}}.

```js
const acl = new Accelerometer({frequency: 60});
acl.addEventListener('error', error => console.log(`Error: ${error.name}`));
acl.start();
```

## Спецификации

{{Specifications}}

## Браузерная совместимость

{{Compat}}

## Смотри также

- Событие {{domxref('Sensor.activate_event', 'activate')}}
- Событие {{domxref('Sensor.reading_event', 'reading')}}
