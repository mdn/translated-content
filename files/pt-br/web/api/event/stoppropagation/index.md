---
title: Event.stopPropagation()
slug: Web/API/Event/stopPropagation
tags:
  - API
  - Evento
  - Referencia
  - Referência(2)
  - metodo
  - stopPropagation
translation_of: Web/API/Event/stopPropagation
---
{{APIRef("DOM")}}

## Resumo

Impede a propagação do evento por seus respectivos listeners.

## Sintaxe

```
event.stopPropagation();
```

### Parametros

Nenhum

### Valor retornado

`undefined`.

## Exemplo

Veja o exemplo 5: [Event Propagation](/pt-BR/docs/DOM/DOM_Reference/Examples#Example_5:_Event_Propagation) no capítulo Eventos para um exemplo mais detalhado desse método e propagação de evento no DOM.

## Notas

Veja [DOM specification](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture) para a explicação do fluxo de eventos. (O [DOM Level 3 Events draft](http://www.w3.org/TR/DOM-Level-3-Events/#event-flow) possui uma ilustração.)

[preventDefault](/pt-BR/docs/Web/API/event.preventDefault) é um método de complemento que pode ser usado para previnir a ação padrão do evento que estiver acontecendo.

## Especificação

[DOM Level 3 Events: stopPropagation](http://www.w3.org/TR/DOM-Level-3-Events/#events-event-type-stopPropagation)

## Compatibilidade com navegadores

{{Compat("api.Event.stopPropagation")}}
