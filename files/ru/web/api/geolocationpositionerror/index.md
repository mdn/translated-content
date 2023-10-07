---
title: PositionError
slug: Web/API/GeolocationPositionError
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Интерфейс **PositionError** представляет причину ошибки, возникающую при использовании устройства геолокации.

## Свойства

_Интерфейс **PositionError** не наследует никаких свойств._

- {{domxref("PositionError.code")}} {{readonlyInline}} {{securecontext_inline}}

  - : Возвращает _unsigned short,_ представляющий код ошибки. Возможны следующие значения:

    | Значение | Связанная константа    | Описание                                                                                                                                              |
    | -------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `1`      | `PERMISSION_DENIED`    | Не удалось получить информацию о геолокации, поскольку у страницы не было разрешения на это.                                                          |
    | `2`      | `POSITION_UNAVAILABLE` | Не удалось получить геолокацию, поскольку по крайней мере один внутренний источник позиции вернул внутреннюю ошибку.                                  |
    | `3`      | `TIMEOUT`              | Время, разрешённое для получения геолокации, определяется {{domxref ("PositionOptions.timeout")}} информация была достигнута до получения информации. |

- {{domxref("PositionError.message")}} {{readonlyInline}} {{securecontext_inline}}
  - : Returns a human-readable {{domxref("DOMString")}} describing the details of the error. Specifications note that this is primarily intended for debugging use and not to be shown directly in a user interface.

## Methods

**The `PositionError` interface _neither implements nor inherits any method._**

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using geolocation](/ru/docs/WebAPI/Using_geolocation)
- The {{domxref("Geolocation")}} interface that use it.
