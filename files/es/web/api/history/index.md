---
title: Historial
slug: Web/API/History
l10n:
  sourceCommit: 55de68017f98094f45addb3ebaa0f7f52024f60b
---

{{ APIRef("History API") }}

La interfaz **`History`** (Historial) permite la manipulación del historial de sesiones del navegador, es decir, las páginas visitadas en la pestaña o marco en el que se carga la página actual.

Solo hay una instancia de `history` (es un _singleton_.) accesible a través del objeto global {{domxref("Window.history", "history")}}.

> **Nota:** Esta interfaz solo está disponible en el hilo principal de ({{domxref("Window")}}). No se puede acceder a él en los contextos {{domxref("Worker")}} o {{domxref("Worklet")}}.

## Propiedades de instancia

_La interfaz `History` no hereda ninguna propiedad._

- {{domxref("History.length","length")}} {{ReadOnlyInline}}
  - : Devuelve un `Integer` que representa el número de elementos en el historial de la sesión, incluida la página cargada actualmente. Por ejemplo, para una página cargada en una nueva pestaña, esta propiedad devuelve `1`.
- {{domxref("History.scrollRestoration","scrollRestoration")}}
  - : Permite que las aplicaciones web establezcan explícitamente el comportamiento de restauración de desplazamiento predeterminado en la navegación del historial. Esta propiedad puede ser `auto` o `manual`.
- {{domxref("History.state","state")}} {{ReadOnlyInline}}
  - : Devuelve un valor `any` que representa el estado en la parte superior de la pila de historial. Esta es una forma de ver el estado sin tener que esperar un evento {{domxref("Window/popstate_event", "popstate")}}.

## Métodos de instancia

_La interfaz `History` no hereda ningún método._

- {{domxref("History.back","back()")}}

  - : Este método asíncrono va a la página anterior en el historial de la sesión, la misma acción que cuando el usuario hace clic en el botón <kbd>Atrás</kbd> del navegador. Equivalente a `history.go(-1)`.

    Llamar a este método para volver más allá de la primera página en el historial de la sesión no tiene ningún efecto y no genera una excepción.

- {{domxref("History.forward","forward()")}}

  - : Este método asincrónico va a la página siguiente en el historial de la sesión, la misma acción que cuando el usuario hace clic en el botón <kbd>Adelante</kbd> del navegador; esto es equivalente a `history.go(1)`.

    Llamar a este método para avanzar más allá de la página más reciente en el historial de la sesión no tiene ningún efecto y no genera una excepción.

- {{domxref("History.go","go()")}}
  - : Carga asíncronamente una página del historial de la sesión, identificada por su ubicación relativa a la página actual, por ejemplo, `-1` para la página anterior o `1` para la página siguiente. Si especifica un valor fuera de los límites (por ejemplo, si especifica "-1" cuando no hay páginas visitadas anteriormente en el historial de la sesión), este método no tiene ningún efecto. Llamar a `go()` sin parámetros o un valor de `0` vuelve a cargar la página actual.
- {{domxref("History.pushState","pushState()")}}
  - : Inserta los datos proporcionados en la pila del historial de la sesión con el título especificado (y, si se proporciona, la URL). El DOM trata los datos como opacos; puede especificar cualquier objeto de JavaScript que se pueda serializar. Tenga en cuenta que todos los navegadores, excepto Safari, actualmente ignoran el parámetro _title_. Para obtener más información, consulte [Trabajar con la API History](/es/docs/Web/API/History_API/Working_with_the_History_API).
- {{domxref("History.replaceState","replaceState()")}}
  - : Actualiza la entrada más reciente en la pila de historial para tener los datos, el título y, si se proporciona, la URL especificada. El DOM trata los datos como opacos; puede especificar cualquier objeto de JavaScript que se pueda serializar. Tenga en cuenta que todos los navegadores, excepto Safari, actualmente ignoran el parámetro _title_. Para obtener más información, consulte [Trabajar con la API History](/es/docs/Web/API/History_API/Working_with_the_History_API).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Objeto global {{domxref("Window.history", "history")}}
