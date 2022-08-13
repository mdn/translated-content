---
title: History.length
slug: Web/API/History/length
tags:
  - API
  - DOM HTML
  - Historial de navegación
  - History
  - Lectura
  - Navegador
  - Propiedad
  - historial
translation_of: Web/API/History/length
---
{{APIRef("History API")}}

La propiedad de sólo lectura **`History.length`** retorna un entero representando el número de elementos en el historial de la sesión, incluyendo la página cargada actualmente. Por ejemplo, para una página cargada en una nueva pestaña esta propiedad retorna `1`.

## Sintaxis

    const length = history.length

## Especificaciones

| Especificación                                                                                               | Estado                           | Comentario                                          |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | --------------------------------------------------- |
| {{SpecName('HTML WHATWG', "history.html#dom-history-length", "History.length")}} | {{Spec2('HTML WHATWG')}} | Sin cambios desde {{SpecName("HTML5 W3C")}}. |
| {{SpecName('HTML5 W3C', "browsers.html#dom-history-length", "History.length")}}     | {{Spec2('HTML5 W3C')}}     | Definición Inicial.                                 |

## Compatibilidad de Navegadores

{{Compat("api.History.length")}}

## Mira también

- La interfaz {{domxref("History")}} a la que pertenece.
