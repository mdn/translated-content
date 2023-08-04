---
title: EventTarget.removeEventListener()
slug: Web/API/EventTarget/removeEventListener
---

{{APIRef("DOM Events")}}

Remove o event listener anteriormente registrado com {{domxref("EventTarget.addEventListener()")}}.

## Sintaxe

```
target.removeEventListener(type, listener[, useCapture])
```

- `type`
  - : Uma string indicando o tipo de evento a ser removido.
- `listener`
  - : A função {{ domxref("EventListener") }} a ser removida do event target.
- `useCapture` {{ optional_inline() }}

  - : Indica quando o {{ domxref("EventListener") }} a ser removido foi registrado ou não como _capturing listener_. Caso este parâmetro seja omitido, o valor _false_ será assumido por padrão.

    Se um listener foi registrado duas vezes, uma com o parâmetro _capture_ especificado e outra sem, cada um deve ser removido separadamente. A remoção de um _capturing listener_ não afeta a versão _non-capturing_ do mesmo listener, e vice versa.

> **Nota:** `useCapture` era obrigatório em versões mais antigas dos navegadores. Para ampla compatibilidade, sempre informe o parâmetro `useCapture.`

## Notas

Se um {{ domxref("EventListener") }} é removido de um {{ domxref("EventTarget") }} enquanto **_este_** está processando um evento, esse não será disparado pelas _current actions_. Um {{ domxref("EventListener") }} não será invocado para o evento o qual foi registrado depois de ter sido removido, porém pode ser registrado novamente.

Chamar `removeEventListener()` com argumentos que não identifiquem nenhum {{ domxref("EventListener") }} registrado no `EventTarget` não tem qualquer efeito.

## Exemplo

Este é um exemplo de como associar e remover um event listener.

```js
var div = document.getElementById("div");
var listener = function (event) {
  /* faça alguma coisa... */
};
div.addEventListener("click", listener, false);
div.removeEventListener("click", listener, false);
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

{{ domxref("EventTarget.addEventListener()") }}.
