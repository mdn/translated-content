---
title: WheelEvent
slug: Web/API/WheelEvent
---

{{APIRef("UI Events")}}

El interface **`WheelEvent`** retrata los eventos que ocurren cuando el usuario mueve la rueda del ratón o de un dispositivo similar.

> [!NOTE]
> **Esta es la forma estándar de usar el evento wheel.**
>
> Antiguas versiones de navegadores implementaron dos formas no-estándar y no-compatibles-entre-navegadores, los interfaces {{ domxref("MouseWheelEvent") }} y {{domxref("MouseScrollEvent")}}. Utilice este interfaz y evite los dos últimos.

{{InheritanceDiagram}}

## Constructor

- {{domxref("WheelEvent.WheelEvent", "WheelEvent()")}}
  - : Crea el objeto `WheelEvent`.

## Propiedades

_Este interfaz hereda propiedades de estos padres, {{domxref("MouseEvent")}}, {{domxref("UIEvent")}} y {{domxref("Event")}}._

- {{domxref("WheelEvent.deltaX")}} {{readonlyinline}}
  - : Devuelve un doble (número de doble precisión) que representa la cantidad de desplazamiento horizontal.
- {{domxref("WheelEvent.deltaY")}} {{readonlyinline}}
  - : Devuelve un doble que representa la cantidad de desplazamiento vertical.
- {{domxref("WheelEvent.deltaZ")}} {{readonlyinline}}
  - : Devuelve un doble que representa la cantidad de desplazamiento del eje-z.
- {{domxref("WheelEvent.deltaMode")}} {{readonlyinline}}
  - : Devuelve un entero largo sin signo que representa la unidad manejada por los valores de cantidad de desplazamiento delta. Los valores permitidos son:

    | Constant          | Value  | Description                                       |
    | ----------------- | ------ | ------------------------------------------------- |
    | `DOM_DELTA_PIXEL` | `0x00` | Los valores delta están especificados en pixeles. |
    | `DOM_DELTA_LINE`  | `0x01` | Los valores delta están especificados en líneas.  |
    | `DOM_DELTA_PAGE`  | `0x02` | Los valores delta están especificados en páginas. |

## Métodos

_Este interfaz no define ningún método, pero hereda métodos de estos padres, {{domxref("MouseEvent")}}, {{domxref("UIEvent")}} y {{domxref("Event")}}._

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [`wheel`](/es/docs/Web/API/Element/wheel_event)
- Interfaces reemplazados por este:
  - Objeto del evento de la rueda del ratón legado de la plataforma Gecko: {{ domxref("MouseScrollEvent") }}
  - Navegadores no-gecko, objeto del evento de la rueda del ratón legado: {{ domxref("MouseWheelEvent") }}
