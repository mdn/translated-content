---
title: GlobalEventHandlers.onload
slug: conflicting/Web/API/Window/load_event
---

{{ApiRef("HTML DOM")}}

Um manipulador de eventos para o evento de carregamento do objeto {{domxref("window")}}.

## Syntax

```
window.onload = funcRef;
```

- `funcRef` é a função do manipulador a ser chamada quando o evento de carregamento do objeto {{domxref("window")}} dispara.

## Exemplos

```js
window.onload = function() {
  init();
  doSomethingElse();
};
```

```html
<!doctype html>
<html>
  <head>
    <title>onload test</title>
    <script>
      function load() {
        console.log("Evento de carregamento detectado!");
      }
      window.onload = load;
    </script>
  </head>
  <body>
    <p>O evento de carregamento dispara quando o documento acabou de ser carregado!</p>
  </body>
</html>
```

## Notas

O evento de carregamento dispara no final do processo de carregamento do documento. Neste ponto, todos os objetos do documento estão no DOM, e todas as imagens, scripts, links e sub-frames terminaram de carregar.

Existe também os [Gecko-Specific DOM Events](/pt-BR/docs/Web/Events), como o `DOMContentLoaded` e o `DOMFrameContentLoaded` (que pode ser manipulado utilizando o {{domxref("EventTarget.addEventListener()")}}) que são disparados após o DOM para a página ser construído, mas não espera outros recursos serem carregados.

## Especificações

| Especificação                                                                                    | Status                           | Comentário        |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------- |
| {{SpecName("HTML WHATWG", "webappapis.html#handler-onload", "onload")}} | {{Spec2("HTML WHATWG")}} | Definição inicial |

## Veja também

- `DOMContentLoaded` event em [Listening to events: Simple DOM events](/pt-BR/docs/Listening_to_events_in_Firefox_extensions#Simple_DOM_events)
- IIEF [Immediately-invoked function expression](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
