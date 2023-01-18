---
title: EventListener
slug: conflicting/Web/API/EventTarget/addEventListener
original_slug: Web/API/EventListener
---

{{APIRef("DOM Events")}}

## Visão Geral

```
void handleEvent(in Event event);
```

## Métodos

### handleEvent()

Este método é chamado sempre que ocorrer o evento para qual a interface do `EventListener for registrada`.

```
void handleEvent(
  in Event event
);
```

##### Parâmetros

- `event`
  - : O {{ domxref("Evento") }} DOM que foi acionado.

### Observaçōes

Conforme a interface for marcada com a flag `[function]`, todos os objetos [Function](/en/JavaScript/Reference/Global_Objects/Function "en/Core_JavaScript_1.5_Reference/Global_Objects/Function") automaticamente implementtam essa interface. Chamar o método [handleEvent](#handleevent) em uma dessas implementaçōes automaticamente invoca a função.

## Veja também

- {{ spec("https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventListener","Document Object Model Events: EventListener","REC") }}
