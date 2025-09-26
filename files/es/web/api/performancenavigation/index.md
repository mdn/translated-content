---
title: PerformanceNavigation
slug: Web/API/PerformanceNavigation
---

{{APIRef("Navigation Timing")}}

> [!WARNING]
> Esta interfaz está deprecada en [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Por favor usa la interfaz {{domxref("PerformanceNavigationTiming")}} en lugar de esta.

La interfaz de legado **`PerformanceNavigation`** representa información acerca de cómo la navegación en el documento actual fue hecha.

Un objeto de este tipo puede ser optenido con el llamado del atributo de solo lectura {{domxref("Performance.navigation")}}.

## Propiedades

_La interfaz `PerformanceNavigation` no hereda ninguna propiedad._

- {{deprecated_inline}} {{domxref("PerformanceNavigation.type")}} {{readonlyInline}}
  - : Un `unsigned short` el cual indica cómo la navegación en esta página fue hecha. Los valores posibles son:u
    - `TYPE_NAVIGATE` (0)
      - : La página fue accesada por un link, un marcador, un formulario enviado, o un script, o escribiendo la URL en la barra de direcciones.
    - `TYPE_RELOAD` (1)
      - : La página fue accesada haciendo click al botón de Recargar o con el método {{domxref("Location.reload()")}}.
    - `TYPE_BACK_FORWARD` (2)
      - : La página fue accesada por la navegación en el historial.
    - `TYPE_RESERVED` (255)
      - : Cualquier otra forma.

- {{deprecated_inline}} {{domxref("PerformanceNavigation.redirectCount")}} {{readonlyInline}}
  - : Un `unsigned short` que representa el número de REDIRECTs hechos antes de llegar a la página.

## Métodos

**La interfaz `Performance` no hereda ningún método**.

- {{deprecated_inline}} {{domxref("PerformanceNavigation.toJSON()")}}
  - : Es un jsonizer que retorna un objeto json que representa el objecto `PerformanceNavigation`.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- The {{domxref("Performance")}} that allows access to an object of this type.
- {{domxref("PerformanceNavigationTiming")}} (part of Navigation Timing Level 2) {{experimental_inline}}
