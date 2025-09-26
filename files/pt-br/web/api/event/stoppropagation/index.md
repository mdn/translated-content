---
title: Event.stopPropagation()
slug: Web/API/Event/stopPropagation
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

Veja o exemplo 5: [Event Propagation](/pt-BR/docs/Web/API/Document_Object_Model/Examples#example_5:_event_propagation) no capítulo Eventos para um exemplo mais detalhado desse método e propagação de evento no DOM.

## Notas

Veja [DOM specification](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture) para a explicação do fluxo de eventos. (O [DOM Level 3 Events draft](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow) possui uma ilustração.)

[preventDefault](/pt-BR/docs/Web/API/Event/preventDefault) é um método de complemento que pode ser usado para previnir a ação padrão do evento que estiver acontecendo.

## Especificação

[DOM Level 3 Events: stopPropagation](https://www.w3.org/TR/DOM-Level-3-Events/#events-event-type-stopPropagation)

## Compatibilidade com navegadores

{{Compat}}
