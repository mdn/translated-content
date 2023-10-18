---
title: HTMLElement.click()
slug: Web/API/HTMLElement/click
---

{{ APIRef("HTML DOM") }}

O método **`HTMLElement.click()`** simula o clique do mouse em um elemento.

Quando clique é usado com elementos que o suportam (por exemplo, um dos {{HTMLElement ("input")}} tipos listados acima), ele também dispara evento de clique do elemento que vai propagar pelos elementos mais acima na árvore de documentos (ou cadeia do evento) e disparando seus eventos de clique também. No entanto, o evento de clique, propagado como bubble, não vai iniciar a navegação do elemento {{HTMLElement("a")}} como se uma verdadeiro clique do mouse tivesse sido recebido.

## Sintaxe

```
elt.click()
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
