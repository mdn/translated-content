---
title: Performance.navigation
slug: Web/API/Performance/navigation
tags:
  - API
  - Deprecado
  - HTTP
  - Legado
  - Propiedad
  - Rendimiento
  - Solo lectura
  - Tiempo de navegación
translation_of: Web/API/Performance/navigation
---
{{APIRef("Navigation Timing")}}

> **Advertencia:** Esta propiedad está deprecada en [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete).

La propiedad de solo lectura **`Performance`\*\***`.navigation`\*\* del legado devuelve un objeto {{domxref("PerformanceNavigation")}} representado el tipo de navegación que ocurre en el contexto de navegación dado, tales como el número de redirecciones necesarias para traer el recurso.

Esta propiedad no está disponible en workers.

## Sintaxis

    navObject = performance.navigation;

## Especificaciones

| Especificación                                                                                                                   | Estado                                   | Comentario          |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------- |
| {{SpecName('Navigation Timing', '#sec-window.performance-attribute', 'Performance.navigation')}} | {{Spec2('Navigation Timing')}} | Definición inicial. |

## Compatibilidad de navegadores

{{Compat("api.Performance.navigation")}}

## Ver también

- The {{domxref("Performance")}} interface it belongs to.
