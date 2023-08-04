---
title: Event.initEvent()
slug: Web/API/Event/initEvent
---

{{ ApiRef("DOM") }}{{deprecated_header}}

O método **`Event.initEvent()`** é usado para inicializar o valor de um {{ domxref("event") }} criado usando {{ domxref("Document.createEvent()") }}.

Eventos inicializados desta maneira precisam ter sido criados com o método {{ domxref("Document.createEvent()") }}. Este método precisar ser chamado para definir o evento antes de ser despachado, usando {{ domxref("EventTarget.dispatchEvent()") }}. Uma vez despachado, não faz mais nada.

> **Nota:** **Não use esse método mais, pois está depreciado.**
>
> Ao invés, use construtores de eventos específicos, como {{domxref("Event.Event", "Event()")}}. A página sobre [Criando e disparando eventos](/pt-BR/docs/Web/Guide/Events/Creating_and_triggering_events) detalha mais informações sobre o uso desses eventos.

## Syntax

```
event.initEvent(tipo, bubbles, cancelable);
```

- `tipo`
  - : É um {{domxref("DOMString")}} definido o tipo do evento.
- `bolhas`
  - : É um {{jsxref("Boolean")}} decidindo se o evento precisa ser enviado para cima, na cadeia de eventos ou não. Uma vez definido, a propriedade read-only {{ domxref("Event.bubbles") }} irá informar o seu valor.
- `cancelable`
  - : É um {{jsxref("Boolean")}} definindo se o evento pode ser cancelado. Uma vez definido, a propriedade read-only {{ domxref("Event.cancelable") }} will irá informar o seu valor.

## Exemplo

```
// Cria o evento.
var event = document.createEvent('Event');

// Cria um evento de clique que borbulha e
// não pode ser cancelado
event.initEvent('click', true, false);

// Escuta este evento.
elem.addEventListener('click', function (e) {
  // e.target matches elem
}, false);

elem.dispatchEvent(event);
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- O construtor para usar ao invés deste método descontinuado: {{domxref("Event.Event", "Event()")}}. Construtores mais específicos também podem ser usados.
