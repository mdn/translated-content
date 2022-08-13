---
title: AbortSignal.aborted
slug: Web/API/AbortSignal/aborted
tags:
  - API
  - AbortSignal
  - Propriedade
  - aborted
translation_of: Web/API/AbortSignal/aborted
---
{{APIRef("DOM")}}{{SeeCompatTable}}

A propriedade **`aborted`** é apenas para leitura e fornece um valor {{domxref("Boolean")}} indicando se as solicitações ao objeto sinal de comunicação DOM forão abortadas (`true`) ou não (`false`).

## Sintaxe

```js
var isAborted = abortSignal.aborted;
```

### Valor

Um valor {{domxref("Boolean")}}

## Exemplos

No fragmento abaixo, criamos um novo objeto `AbortController` e recebemos dele um sinal {{domxref("AbortSignal")}} (disponível na propriedade `signal`). Depois checamos se o sinal foi ou não abortado usando a propriedade `aborted`, e então enviamos um log apropriado para o console.

```js
var controller = new AbortController();
var signal = controller.signal;

// ...

signal.aborted ? console.log('Pedido foi abortado') : console.log('Pedido nao foi abortado');
```

## Especificações

| Especificação                                                                            | Estado                           | Comentário        |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ----------------- |
| {{SpecName('DOM WHATWG', '#dom-abortsignal-onabort', 'onabort')}} | {{Spec2('DOM WHATWG')}} | Definição Inicial |

## Compatibilidade com navegadores

{{Compat("api.AbortSignal.aborted")}}

## Veja Também

- [Documentação de busca API](/pt-BR/docs/Web/API/Fetch_API)
