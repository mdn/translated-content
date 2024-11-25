---
title: ClipboardEvent
slug: Web/API/ClipboardEvent
---

{{APIRef("Clipboard API")}} {{SeeCompatTable}}

A interface **`ClipboardEvent`** representa eventos correlatos à modificação da área de transferência, i. e., eventos de cortar ([`cut`](/pt-BR/docs/Web/Events/cut)), de copiar ([`copy`](/pt-BR/docs/Web/Events/copy)), e de colar ([`paste`](/pt-BR/docs/Web/Events/paste)).

## Construtor

- {{domxref("ClipboardEvent.ClipboardEvent", "ClipboardEvent()")}}
  - : Cria um evento `ClipboardEvent` com os parâmetros fornecidos.

## Propriedades

_Ainda, propriedades herdadas de sua superclasse {{domxref("Event")}}_.

- {{domxref("ClipboardEvent.clipboardData")}} {{readonlyInline}}
  - : é um objeto {{domxref("DataTransfer")}} contendo informação oriunda das operações de [`cut`](/pt-BR/docs/Web/Events/cut), de [`copy`](/pt-BR/docs/Web/Events/copy), ou de [`paste`](/pt-BR/docs/Web/Events/paste) iniciadas pelo usuário, juntamente com sua espécie/tipo MIME.

## Methods

_Não há método próprio; métodos herdados de {{domxref("Event")}}_.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- Copy-related events: [`copy`](/pt-BR/docs/Web/Events/copy), [`cut`](/pt-BR/docs/Web/Events/cut), [`paste`](/pt-BR/docs/Web/Events/paste)
