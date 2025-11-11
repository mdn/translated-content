---
title: EventListener
slug: conflicting/Web/API/EventTarget/addEventListener
original_slug: Web/API/EventListener
---

{{APIRef("DOM")}}

## Información General del Método

| `void handleEvent(in Event event);` |
| ----------------------------------- |

## Metodos

### handleEvent()

Este metodo es llamado cuando un evento ocurre del tipo para el cual la interfaz `EventListener` fue registrada.

```
void handleEvent(
  in Event event
);
```

##### Parametros

- `event`
  - : El DOM {{ domxref("Event") }} a registrar.

### Observaciones

Como la interfaz es marcada con la bandera [function], todas los objetos [Function](/es/docs/Web/JavaScript/Reference/Global_Objects/Function) de javascript automaticamente implementan esta interfaz. Llamando el método [handleEvent](#handleevent) en tales implementaciones automaticamente invocan la funcion.

## Mira también

- [Document Object Model Events: EventListener](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventListener)
