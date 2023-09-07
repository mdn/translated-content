---
title: PositionOptions
slug: conflicting/Web/API/Geolocation/getCurrentPosition
original_slug: Web/API/PositionOptions
---

{{APIRef("Geolocation API")}}

Интерфейс **`PositionOptions`** описывает объект содержащий свойства передаваемые как параметр в {{domxref("Geolocation.getCurrentPosition()")}} и {{domxref("Geolocation.watchPosition()")}}.

## Свойства

_Интерфейс `PositionOptions` не наследует никаких других свойств_.

- {{domxref("PositionOptions.enableHighAccuracy")}}
  - : {{domxref("Boolean")}} сообщает приложению, что нужно получить максимально уточнённый результат. Если `true` и устройство поддерживает расширенный поиск локации, то он будет осуществлён. Нужно учитывать, что это может привести к замедлению времени отклика или увеличению потребляемых ресурсов (например расширенному использованию GPS на мобильных устройствах). Если `false`, устройство будет искать максимально быстро и экономично, что уменьшает точность. По умолчанию: `false`.
- {{domxref("PositionOptions.timeout")}}
  - : Положительное число в миллисекундах, устанавливающее время, за которое устройство должно вернуть результат. По умолчанию это значение [`Infinity`](/ru/docs/JavaScript/Reference/Global_Objects/Infinity), что значит, `getCurrentPosition()` будет работать до тех пор пока не определит положение устройства.
- {{domxref("PositionOptions.maximumAge")}}
  - : Положительное число указывающее максимально возможное время для кеширования результатов поиска положения устройства. Если установить `0`, это будет означать, что устройство не будет кешировать позицию и будет всегда возвращать результат нового поиска. Если установить `Infinity,` устройство всегда будет возвращать результат первого поиска. По умолчанию: 0.

## Методы

`Интерфейс PositionOptions` не реализует и не наследует никаких методов.

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat("api.PositionOptions")}}

## Также можно посмотреть

- [Использование геолокации](Geolocation/Using_geolocation)
- The {{domxref("Geolocation")}} interface that uses it.
