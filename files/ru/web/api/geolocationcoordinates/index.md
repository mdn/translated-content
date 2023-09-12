---
title: Coordinates
slug: Web/API/GeolocationCoordinates
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Интерфейс **`Coordinates`** отображает позицию устройства и его высоту над уровнем моря с расчётным уровнем точности.

## Свойства

_Интерфейс `Coordinates` не наследует никаких свойств_.

- {{domxref("Coordinates.latitude")}} {{readonlyInline}} {{securecontext_inline}}
  - : Возвращает `дробное` число, означающее широту, выраженную в градусах.
- {{domxref("Coordinates.longitude")}} {{readonlyInline}} {{securecontext_inline}}
  - : Возвращает `дробное` число, означающее долготу, выраженную в градусах.
- {{domxref("Coordinates.altitude")}} {{readonlyInline}} {{securecontext_inline}}
  - : Возвращает `дробное` число, означающее высоту над уровнем моря, выраженную в метрах. Возвращает `null`, если устройство не может предоставить эти данные.
- {{domxref("Coordinates.accuracy")}} {{readonlyInline}} {{securecontext_inline}}
  - : Возвращает `дробное` число, означающее точность свойств `latitude` и `longitude`, выраженную в метрах.
- {{domxref("Coordinates.altitudeAccuracy")}} {{readonlyInline}} {{securecontext_inline}}
  - : Возвращает `дробное` число, означающее точность свойства `altitude`, выраженную в метрах. Может быть `null`.
- {{domxref("Coordinates.heading")}} {{readonlyInline}} {{securecontext_inline}}
  - : Возвращает `дробное` число, означающее в каком направлении движется устройство. Это значение, выраженное в градусах, показывает насколько отклонено устройство относительно севера. `0` градусов показывает ровно на север и далее направление определяется по часовой стрелке (то есть, `90` градусов означает восток, а `270` градусов означает запад). Если `speed` равно `0`, то `heading` будет [`NaN`](/ru/docs/JavaScript/Reference/Global_Objects/NaN). Если устройство не может предоставить `heading`, то его значение будет `null`.
- {{domxref("Coordinates.speed")}} {{readonlyInline}} {{securecontext_inline}}
  - : Возвращает `дробное` число, означающее скорость движения устройства, выраженное в метрах в секунду. Это значение может быть `null`.

## Методы

**Интерфейс `Coordinates` не наследует никаких методов*.***

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Using geolocation](/ru/docs/WebAPI/Using_geolocation)
- The {{domxref("Geolocation")}} interface that uses it.
