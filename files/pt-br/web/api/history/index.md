---
title: History
slug: Web/API/History
---

{{APIRef ("HTML DOM")}}

A interface `History` permite a manipulação do histórico da sessão do navegador, ou seja, as páginas visitadas na guia ou quadro em que a página atual está carregada.

## Propriedades

_A interface `History` não herda nenhuma propriedade._

- {{domxref("History.length")}} {{readOnlyInline}}
  - : Returns an `Integer` representing the number of elements in the session history, including the currently loaded page. For example, for a page loaded in a new tab this property returns `1`.
- {{domxref("History.current")}} {{readOnlyInline}} {{ non-standard_inline() }}
  - : Returns a {{domxref("DOMString")}} representing the URL of the active item of the session history. This property was never available to web content and is no more supported by any browser. Use {{domxref("Location.href")}} instead.
- {{domxref("History.next")}} {{readOnlyInline}} {{ non-standard_inline() }}
  - : Returns a {{domxref("DOMString")}} representing the URL of the next item in the session history. This property was never available to web content and is not supported by other browsers.
- {{domxref("History.previous")}} {{readOnlyInline}} {{ non-standard_inline() }}
  - : Returns a {{domxref("DOMString")}} representing the URL of the previous item in the session history. This property was never available to web content and is not supported by other browsers.
- {{domxref("History.scrollRestoration")}} {{experimental_inline}}
  - : Allows web applications to explicitly set default scroll restoration behavior on history navigation. This property can be either `auto` or `manual`.
- {{domxref("History.state")}} {{readOnlyInline}}
  - : Returns an `any` value representing the state at the top of the history stack. This is a way to look at the state without having to wait for a {{event("popstate")}} event.

## Methods

_The `History`_ _interface doesn't inherit any methods._

- {{domxref("History.back()")}}

  - : Goes to the previous page in session history, the same action as when the user clicks the browser's Back button. Equivalent to `history.go(-1)`.

    > **Nota:** Calling this method to go back beyond the first page in the session history has no effect and doesn't raise an exception.

- {{domxref("History.forward()")}}

  - : Goes to the next page in session history, the same action as when the user clicks the browser's Forward button; this is equivalent to `history.go(1)`.

    > **Nota:** Calling this method to go forward beyond the most recent page in the session history has no effect and doesn't raise an exception.

- {{domxref("History.go()")}}
  - : Loads a page from the session history, identified by its relative location to the current page, for example -1 for the previous page or 1 for the next page. If you specify an out-of-bounds value (for instance, specifying -1 when there are no previously-visited pages in the session history), this method silently has no effect. Calling `go()` without parameters or a value of 0 reloads the current page. Internet Explorer lets you specify a string, instead of an integer, to go to a specific URL in the history list.
- {{domxref("History.pushState()")}}
  - : Pushes the given data onto the session history stack with the specified title and, if provided, URL. The data is treated as opaque by the DOM; you may specify any JavaScript object that can be serialized. Note that Firefox currently ignores the title parameter; for more information, see [manipulating the browser history](/pt-BR/docs/Web/API/History_API).
- {{domxref("History.replaceState()")}}
  - : Updates the most recent entry on the history stack to have the specified data, title, and, if provided, URL. The data is treated as opaque by the DOM; you may specify any JavaScript object that can be serialized. Note that Firefox currently ignores the title parameter; for more information, see [manipulating the browser history](/pt-BR/docs/Web/API/History_API).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- The {{domxref("Window.history")}} property returning the history of the current session.
