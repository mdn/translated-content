---
title: GlobalEventHandlers.onabort
slug: conflicting/Web/API/HTMLMediaElement/abort_event
---

{{ ApiRef("HTML DOM") }}

## Sumário

Um manipulador de eventos que aborta eventos enviados para a janela. (Não disponível para o Firefox 2 ou Safari)

TODO define what "abort" is. Closing the window via window manager? Stopping the load of the page? By which means and reasons (user, network/server)? At which stages would it fire / be catched? For IE, onabort is only available with `img` tags.

## Sintaxe

```
window.onabort =funcRef
```

- `funcRef`: Reference to a function

## Exemplo

```js
window.onabort = function() {
  alert("Load aborted.");
}
```

## Especificação

{{Specifications}}
