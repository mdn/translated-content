---
title: GlobalEventHandlers.onchange
slug: Web/API/HTMLElement/change_event
tags:
  - API
  - HTML DOM
  - Propriedade
  - Referencia
translation_of: Web/API/GlobalEventHandlers/onchange
original_slug: Web/API/GlobalEventHandlers/onchange
---
{{ ApiRef("HTML DOM") }}

A propriedade `onchange` determina e retorna o [manipulador de eventos](/docs/Web/Guide/Events/Event_handlers) para o evento {{event("change")}}.

## Syntax

```
element.onchange = handlerFunction;
var handlerFunction = element.onchange;
```

`handlerFunction` deve ser ou `null` ou uma [função JavaScript](/pt-BR/docs/Web/JavaScript/Reference/Functions) especificando o manipulador para o evento.

## Notas

Veja a página do [manipulador de eventos do DOM](/pt-BR/docs/Web/Guide/Events/Event_handlers) para informações sobre como trabalhar com manipuladores `on...`

Veja a documentação do evento {{event("change")}} para informações sobre o evento.

## Especificação

| Especificação                                                                                    | Status                           | Comentários |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG','webappapis.html#handler-onchange','onchange')}} | {{Spec2('HTML WHATWG')}} |             |
