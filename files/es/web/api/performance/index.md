---
title: Performance
slug: Web/API/Performance
tags:
  - API
  - Interfaz
  - Referencia
  - Rendimiento
  - Rendimiento Web
  - Tiempo de navegación
translation_of: Web/API/Performance
---
{{APIRef("High Resolution Time")}}

La interfaz **`Performance`** representa información relacionada con el tiempo de rendimiento para la página dada.

Un objeto de este tipo puede ser obtenido por el llamado de el atributo de solo lectura {{domxref("Window.performance")}}.

**_Nota_:** Esta interfaz y sus miembros están disponibles en [Web Workers](/es/docs/Web/API/Web_Workers_API), exceptuando en los mencionados abajo. También, tenga en cuenta que las marcas y medidas de rendimiento son por contexto. Si crea una marca en el hilo principal (u otro worker), no puedes verlo en un hilo de un worker, y vice versa.

## Propiedades

_La interfaz `Performance` no hereda ninguna propiedad._

- {{domxref("Performance.navigation")}} {{readonlyInline}} {{deprecated_inline}}
  - : Un objeto del legado {{domxref("PerformanceNavigation")}} que provee contexto útil acerca de operaciones, incluidas en los tiempos listados en `timing`, incluyendo si la página fue cargada o refrescada, cuántas redirecciones ocurrieron, entre otros. No disponible en workers
- {{domxref("Performance.timing")}} {{readonlyInline}} {{deprecated_inline}}
  - : Un objeto del legado {domxref("PerformanceTiming")}} que contiene información relacionada con la latencia.
- {{domxref("Performance.memory")}} {{readonlyInline}} {{Non-standard_inline}}
  - : Una _no standarizada_ extensión añadida a Chrome, esta propiedad provee un objeto con información básica de uso de memoria. **No deberías usar** esta _no estandarizada_ API.
- {{domxref("Performance.timeOrigin")}} {{readonlyInline}} {{Non-standard_inline}}
  - : Retorna una marca de tiempo de alta precisión de la hora de inicio de la medida de rendimiento.

## Métodos

**La interfaz `Performance` no hereda ningún método**.

- {{domxref("Performance.clearMarks()")}}
  - : Elimina la marca dada del búfer de entrada de rendimiento del navegador.
- {{domxref("Performance.clearMeasures()")}}
  - : Elimina las _medida_ dadas del búfer de entrada del navegador.
- {{domxref("Performance.clearResourceTimings()")}}
  - : Elimina todas las {domxref("PerformanceEntry","performance entries")}} con una {{domxref("PerformanceEntry.entryType","entryType")}} de "`resource`" del búfer de datos de rendimiento del navegador.
- {{domxref("Performance.getEntries()")}}
  - : Devuelve una lista de objetos {{domxref("PerformanceEntry")}} basados en el _filtro dado._
- {{domxref("Performance.getEntriesByName()")}}
  - : Devuelve una lista de objetos {{domxref("PerformanceEntry")}} basados en el _nombre_ dado y el tipo de _entrada_.
- {{domxref("Performance.getEntriesByType()")}}
  - : Devuelve una lista de objetos {{domxref("PerformanceEntry")}} de el tipo de _entrada_ dado.
- {{domxref("Performance.mark()")}}
  - : Crea un {{domxref("DOMHighResTimeStamp","timestamp")}} en el _búfer de entrada de rendimiento_ del navegador.
- {{domxref("Performance.measure()")}}
  - : Crea un {{domxref("DOMHighResTimeStamp","timestamp")}} nombrado en el _búfer de entrada de rendimiento_ del navegador entre dos especificadas marcas (conocidas como la _marca de inicio_ y _la marca final,_ respectivamente).
- {{domxref("Performance.now()")}}
  - : Retorna un {{domxref("DOMHighResTimeStamp")}} representando el número de milisegundos transcurridos desde un instante de referencia.
- {{domxref("Performance.setResourceTimingBufferSize()")}}
  - : Define el tamaño del búfer de temporización de recursos de "`resource`" a los objetos {{domxref("PerformanceEntry.entryType","type")}} {{domxref("PerformanceEntry","performance entry")}}.
- {{domxref("Performance.toJSON()")}}
  - : Es un jsonizador que retorna un objeto json que respresenta el objecto `Performance`.

## Eventos

Escucha a estos eventos que están usando `addEventListener()` o por asignación de un escuchador de eventos a la propiedad `oneventname` de esta interfaz.

- {{DOMxRef("Performance.resourcetimingbufferfull_event", "resourcetimingbufferfull")}}
  - : Disparado cuando "[resource timing buffer](/es/docs/Web/API/Performance/setResourceTimingBufferSize)" está lleno.
    También disponible usando la propiedad {{DOMxRef("Performance.onresourcetimingbufferfull", "onresourcetimingbufferfull")}}.

## Especificaciones

| Especificación                                                                                                                                                       | Estado                                                   | Comentario                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('Highres Time Level 2', '#the-performance-interface', 'toJSON()')}}                                                             | {{Spec2('Highres Time Level 2')}}             | Se define el método `toJson()`.                                                                                                |
| {{SpecName('Highres Time', '#the-performance-interface', 'Performance')}}                                                                     | {{Spec2('Highres Time')}}                         | Se define el método `now()`.                                                                                                   |
| {{SpecName('Navigation Timing', '#sec-window.performance-attribute', 'Performance')}}                                                     | {{Spec2('Navigation Timing')}}                 | Se definen las propiedades `timing` and `navigation`.                                                                          |
| {{SpecName('Performance Timeline Level 2', '#extensions-to-the-performance-interface', 'Performance extensions')}}             | {{Spec2('Performance Timeline Level 2')}} | Cambia la interfaz `getEntries()`.                                                                                             |
| {{SpecName('Performance Timeline', '#sec-window.performance-attribute', 'Performance extensions')}}                                 | {{Spec2('Performance Timeline')}}             | Se definen los métodos `getEntries()`, `getEntriesByType()` y `getEntriesByName()` .                                           |
| {{SpecName('Resource Timing', '#extensions-performance-interface', 'Performance extensions')}}                                         | {{Spec2('Resource Timing')}}                     | Se definen los métdos `clearResourceTimings()` y `setResourceTimingBufferSize()` y la propiedad `onresourcetimingbufferfull` . |
| {{SpecName('User Timing Level 2', '#extensions-performance-interface', 'Performance extensions')}}                                 | {{Spec2('User Timing Level 2')}}             | Se clarifican los métodos `mark()`, `clearMark()`, `measure()` y `clearMeasure()`.                                             |
| {{SpecName('User Timing', '#extensions-performance-interface', 'Performance extensions')}}                                             | {{Spec2('User Timing')}}                         | Se definen los métodos `mark()`, `clearMark()`, `measure()` y `clearMeasure()`.                                                |
| {{SpecName('Frame Timing', '#extensions-performance-interface','Performance extensions')}} | {{Spec2('User Timing')}}                         | Se definen los métodos `clearFrameTimings()`, `setFrameTimingBufferSize()`, y `onframetimingbufferfull`.                       |

## Compatibilidad de navegadores

{{Compat("api.Performance")}}
