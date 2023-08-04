---
title: XMLHttpRequest.readyState
slug: Web/API/XMLHttpRequest/readyState
---

{{APIRef('XMLHttpRequest')}}

A propriedade **XMLHttpRequest.readyState** retorna o estado de um XMLHttpRequest. Uma requisição XHR que existe em um dos seguintes estados:

| Valor | Estado             | Descrição                                                                  |
| ----- | ------------------ | -------------------------------------------------------------------------- |
| `0`   | `UNSENT`           | Um cliente foi criado. Mas o método `open()` não foi chamado ainda.        |
| `1`   | `OPENED`           | `O método open() foi chamado`.                                             |
| `2`   | `HEADERS_RECEIVED` | `o método send()` foi chamado e os cabeçalhos e status estão disponíveis . |
| `3`   | `LOADING`          | Baixando e `responseText` contem os dados parciais.                        |
| `4`   | `DONE`             | Operação concluída.                                                        |

- UNSENT
  - : O XMLHttpRequest foi criado. Mas o método open() não foi chamado ainda.
- OPENED
  - : O método open() foi invocado. Durante esse estado, os headers da requisição podem ser inseridos usando o método [setRequestHeader()](/pt-BR/docs/Web/API/XMLHttpRequest/setRequestHeader) e o método [send()](/pt-BR/docs/Web/API/XMLHttpRequest/send) pode ser chamado, iniciando a busca.
- HEADERS_RECEIVED
  - : O método send() foi chamado e os cabeçalhos de respostas foram recebidos.
- LOADING
  - : A resposta da requisição está sendo recebida. se o [`responseType`](/pt-BR/docs/Web/API/XMLHttpRequest/responseType) for "text" ou um texto em branco, o [`responseText`](/pt-BR/docs/Web/API/XMLHttpRequest/responseText) terá o texto parcial da resposta conforme seu carregamento.
- DONE
  - : A Operação de busca está completa. Isso pode significar que a trasferência foi concluída com êxito ou que falhou.

> **Nota:** Os nomes de estado são diferentes no Internet Explorer. Ao invés de `UNSENT`, `OPENED`, `HEADERS_RECEIVED`, `LOADING` e `DONE`, os nomes usados são: `READYSTATE_UNINITIALIZED`(0), `READYSTATE_LOADING`(1), `READYSTATE_LOADED`(2), `READYSTATE_INTERACTIVE`(3) e `READYSTATE_COMPLETE` (4).

## Exemplo

```js
var xhr = new XMLHttpRequest();
console.log("UNSENT", xhr.readyState); // readyState will be 0

xhr.open("GET", "/api", true);
console.log("OPENED", xhr.readyState); // readyState will be 1

xhr.onprogress = function () {
  console.log("LOADING", xhr.readyState); // readyState will be 3
};

xhr.onload = function () {
  console.log("DONE", xhr.readyState); // readyState will be 4
};

xhr.send(null);
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
