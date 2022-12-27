---
title: Event()
slug: Web/API/Event/Event
translation_of: Web/API/Event/Event
---
{{APIRef("DOM")}}

O **`Event()`** cria uma nova {{domxref("Event")}}.

## Sintaxe

```
 event = new Event(typeArg, eventInit);
```

### Valores

- _typeArg_
  - : É uma {{domxref("DOMString")}} representa o nome do evento.
- _eventInit_{{optional_inline}}

  - : É um dicionário `EventInit`, tendo os seguintes campos:

    - `"bubbles"`, opcional e false por default, do tipo {{jsxref("Boolean")}}, indica se o evento é bubbles ou não.
    - `"cancelable"`, opcional e false por default, do tipo {{jsxref("Boolean")}}, indica se o evento pode ser cancelado ou não.

## Exemplo

```js
// criar um evento com bubbles true e que não pode ser cancelado

var ev = new Event("look", {"bubbles":true, "cancelable":false});
document.dispatchEvent(ev);
```

## Especificações

| Especificação                                                            | Status                           | Comentário         |
| ------------------------------------------------------------------------ | -------------------------------- | ------------------ |
| {{SpecName('DOM WHATWG','#interface-event','Event()')}} | {{Spec2('DOM WHATWG')}} | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("api.Event.Event")}}

## Veja também

- {{domxref("Event")}}
