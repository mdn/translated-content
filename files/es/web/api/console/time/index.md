---
title: Console.time()
slug: Web/API/Console/time
translation_of: Web/API/Console/time
---
{{APIRef("Console API")}}

Inicia un temporizador que puede usar para realizar un seguimiento de la duración de una operación. Le da a cada temporizador un nombre único y puede tener hasta 10.000 temporizadores ejecutándose en una página determinada. Cuando llame a {{domxref ("console.timeEnd()")}} con el mismo nombre, el navegador generará el tiempo, en milisegundos, transcurrido desde que se inició el temporizador.

Consulte [Timers](/es/docs/Web/API/console#Timers) en la documentación de {{domxref("console")}} para obtener detalles y ejemplos.

{{AvailableInWorkers}}

## Sintaxis

    console.time(label);

## Parametros

- `label`
  - : El nombre para dar el nuevo temporizador. Esto identificará el temporizador; use el mismo nombre cuando llame a {{domxref ("console.timeEnd()")}} para detener el temporizador y obtener el tiempo de salida a la consola.

## Especificaciones

| Especificacion                                                           | Status                           | Comment            |
| ------------------------------------------------------------------------ | -------------------------------- | ------------------ |
| {{SpecName("Console API", "#time", "console.time()")}} | {{Spec2("Console API")}} | Initial definition |

## Compatibilidad con exploradores

{{Compat("api.console.time")}}

## See also

- {{domxref("Console.timeEnd()")}}
- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
