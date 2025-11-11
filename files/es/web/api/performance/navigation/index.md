---
title: Performance.navigation
slug: Web/API/Performance/navigation
---

{{APIRef("Navigation Timing")}}

> [!WARNING]
> Esta propiedad está deprecada en [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete).

La propiedad de solo lectura **`Performance.navigation`** del legado devuelve un objeto {{domxref("PerformanceNavigation")}} representado el tipo de navegación que ocurre en el contexto de navegación dado, tales como el número de redirecciones necesarias para traer el recurso.

Esta propiedad no está disponible en workers.

## Sintaxis

```
navObject = performance.navigation;
```

## Especificaciones

Esta característica ya no está en camino de convertirse en un estándar, ya que la especificación [Navigation Timing specification](https://w3c.github.io/navigation-timing/#obsolete) la ha marcado como obsoleta. Utilice la interfaz {{domxref("PerformanceNavigationTiming")}} en su lugar.

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- The {{domxref("Performance")}} interface it belongs to.
