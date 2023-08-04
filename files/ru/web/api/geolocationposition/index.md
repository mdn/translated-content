---
title: GeolocationPosition
slug: Web/API/GeolocationPosition
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Интерфейс **`GeolocationPosition`** представляет положение соответствующего устройства в данный момент времени. Положение, представленное объектом {{domxref("GeolocationCoordinates")}}, отражает двумерное положение устройства на сфероиде, представляющем землю, а также его высоту и скорость..

## Свойства

_Интерфейс `GeolocationPosition` не наследует свойства_.

- {{domxref("GeolocationPosition.coords")}} {{readonlyInline}} {{securecontext_inline}}
  - : Возвращает объект {{domxref("GeolocationCoordinates")}} определяющий текущую локацию.
- {{domxref("GeolocationPosition.timestamp")}} {{readonlyInline}} {{securecontext_inline}}
  - : Возвращает {{domxref("DOMTimeStamp")}}, представляющий время, в которое была получена локация.

## Методы

**Интерфейс _`GeolocationPosition`_** не имеет и не наследует методы.

## Спецификации

{{Specifications}}

## Браузерная совместимость

{{Compat}}

## Смотрите также

- [Using the Geolocation API](/ru/docs/Web/API/Geolocation_API/Using)
- {{domxref("Geolocation")}}
