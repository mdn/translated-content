---
title: popstate
slug: Web/API/Window/popstate_event
---

O evento `popstate` é disparado quando a entrada do histórico ativa é alterado. Se o histórico de entrada a ser ativado for criado por uma chamada `history.pushState()` ou for afetada por uma chamada `history.replaceState()`, a propriedade dos eventos `popstate` contém uma cópia do histórico de entrada do objeto.

Note que apenas chamando `history.pushState()` ou `history.replaceState()` não ira disparar um evento `popstate`. O evento `popstate` apenas é disparado após uma ação no navegador como um click no botão de voltar (ou chamando `history.back() por javascript`)

Navegadores tendem a lidar com o evento `popstate` diferentemente no carregamento da página. Chrome (anterior versão 34) e Safari sempre emitem um evento `popstate` no carregamento da página, mas o Firefox não.

## Informação geral

- Especificação
  - : [HTML5](https://www.whatwg.org/specs/web-apps/current-work/multipage/history.html#event-popstate)
- Interface
  - : PopStateEvent
- Bubbles
  - : Yes
- Cancelable
  - : No
- Alvo
  - : defaultView
- Ação padrão
  - : None

## Propriedades

| Property                        | Type                       | Description                                        |
| ------------------------------- | -------------------------- | -------------------------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The browsing context (`window`).                   |
| `type` {{readonlyInline}}       | {{jsxref("String")}}       | The type of event.                                 |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not.         |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Whether the event is cancellable or not.           |
| `state` {{readonlyInline}}      | _any_                      | The current history entry's state object (if any). |

## Compatiblidade com navegadores

{{Compat}}

## Exemplo

Um página no `http://example.com/example.html roda o código abaixo e irá gerar os logs indicados`

```js
window.onpopstate = function (event) {
  console.log(
    "location: " +
      document.location +
      ", state: " +
      JSON.stringify(event.state),
  );
};
history.pushState({ page: 1 }, "title 1", "?page=1");
history.pushState({ page: 2 }, "title 2", "?page=2");
history.replaceState({ page: 3 }, "title 3", "?page=3");
history.back(); // Logs "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // Logs "location: http://example.com/example.html, state: null
history.go(2); // Logs "location: http://example.com/example.html?page=3, state: {"page":3}
```

Observe que mesmo que a entrada do histórico inicial(para `http://example.com/example.html`) não tem nenhum estado associado a ele, um evento `popstate`é ainda disparado quando nós ativamos essa entrada após a segunda chamada para `history.back()`.

## Eventos relacionados

- [`hashchange`](/pt-BR/docs/Web/API/Window/hashchange_event)
