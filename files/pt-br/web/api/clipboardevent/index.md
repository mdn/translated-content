---
title: ClipboardEvent
slug: Web/API/ClipboardEvent
---

{{APIRef("Clipboard API")}} {{SeeCompatTable}}

A interface **`ClipboardEvent`** representa eventos correlatos à modificação da área de transferência, i. e., eventos de cortar ({{event("cut")}}), de copiar ({{event("copy")}}), e de colar ({{event("paste")}}).

## Construtor

- {{domxref("ClipboardEvent.ClipboardEvent", "ClipboardEvent()")}}
  - : Cria um evento `ClipboardEvent` com os parâmetros fornecidos.

## Propriedades

_Ainda, propriedades herdadas de sua superclasse {{domxref("Event")}}_.

- {{domxref("ClipboardEvent.clipboardData")}} {{readonlyInline}}
  - : é um objeto {{domxref("DataTransfer")}} contendo informação oriunda das operações de {{event("cut")}}, de {{event("copy")}}, ou de {{event("paste")}} iniciadas pelo usuário, juntamente com sua espécie/tipo MIME.

## Methods

_Não há método próprio; métodos herdados de {{domxref("Event")}}_.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- Copy-related events: {{event("copy")}}, {{event("cut")}}, {{event("paste")}}
