---
title: Performance.timing
slug: Web/API/Performance/timing
tags:
  - API
  - Deprecada
  - Legado
  - Propiedad
  - Rendimiento
  - Solo lectura
  - Tiempo de navegación
translation_of: Web/API/Performance/timing
---
{{APIRef("Navigation Timing")}}{{deprecated_header}}

> **Advertencia:** Esta propiedad está deprecada en [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Por favor usa {{domxref("Performance.timeOrigin")}} en vez esta..

La propiedad de solo lecutra **`Performance.timing`** de legado devulve un objeto {{domxref("PerformanceTiming")}} que contienen información relacionada con el rendimiento en relación a la latencia.

Esta propiedad no está disponible en workers.

## Sintaxis

    var timingInfo = performance.timing;

## Especificaciones

| Especificación                                                                                                               | Estado                                   | Comentario          |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------- |
| {{SpecName('Navigation Timing', '#sec-window.performance-attribute', 'Performance.timing')}} | {{Spec2('Navigation Timing')}} | Definición inicial. |

## Compatibilidad de navegadores

{{Compat("api.Performance.timing")}}

## Ver también

- The {{domxref("Performance")}} interface it belongs to.
