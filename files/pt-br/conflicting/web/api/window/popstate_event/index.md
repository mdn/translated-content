---
title: WindowEventHandlers.onpopstate
slug: conflicting/Web/API/Window/popstate_event
---

{{APIRef}}

## Sumário

Um evento manipulador para um evento `popstate` na janela

Um evento popstate é disparado para a janela toda vez que o histórico de atividades mudar entre dois históricos de entradas para o mesmo documento. Se o histórico de entrada a ser ativo for criado por uma chamada para `history.pushState()` ou for afetado por um chamada `history.replaceState()`, o estado do evento `popstate` contém uma cópia do histórico do estado de entrada do objeto.

Note que apenas chamando `history.pushState()` ou `history.replaceState()` não irá desencadear um evento `popstate`. O evento `popstate` é apenas desencadeado por uma ação do navegador com clicar em um botão de voltar (ou chamar `history.back()` em JavaScript). E o evento é apenas desencadeado quando o usuário navega entre dois históricos de entrada do mesmo documento.

Navegadores tendem a lidar com o evento `popstate` diferente no carregamento da página. Chrome (anterior versão 34) e Safari sempre emite um evento `popstate` no carregamento da página, mas Firefox não.

## Sintaxe

```
window.onpopstate = funcRef;
```

- _funcRef_ é uma função de manipulador.

## O evento popstate

Como um exemplo, a página no `http://example.com/example.html` roda o seguinte código que vai gerar alertas conforme indicado:

```js
window.onpopstate = function(event) {
  alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
};

history.pushState({page: 1}, "title 1", "?page=1");
history.pushState({page: 2}, "title 2", "?page=2");
history.replaceState({page: 3}, "title 3", "?page=3");
history.back(); // alertas "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // alertas "location: http://example.com/example.html, state: null
history.go(2);  // alertas "location: http://example.com/example.html?page=3, state: {"page":3}
```

Observe que mesmo que a entrada do histórico inicial (para `http://example.com/example.html`) não tem objeto estado associado com ele, um evento `popstate` é ainda disparado quando nós ativamos essa entrada depois da segunda chamada do `history.back()`.

## Especificação

- [HTML5 popstate event](http://www.whatwg.org/specs/web-apps/current-work/#handler-window-onpopstate)

## Veja também

- {{domxref("window.history")}}
- [Manipulating the browser history](/pt-BR/docs/Web/Guide/DOM/Manipulating_the_browser_history)
- [Ajax navigation example](/pt-BR/docs/Web/Guide/DOM/Manipulating_the_browser_history/Example)
