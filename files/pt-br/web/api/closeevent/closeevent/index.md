---
title: CloseEvent()
slug: Web/API/CloseEvent/CloseEvent
tags:
  - API
  - CloseEvent
  - Construtor
  - Referencia
translation_of: Web/API/CloseEvent/CloseEvent
---
{{APIRef("Websockets API")}}

O construtor **`CloseEvent()`**cria uma nova instância {{domxref("CloseEvent")}}.

## Sintaxe

```
var event = new CloseEvent(typeArg, closeEventInit);
```

### Valores

- `typeArg`
  - : É uma {{domxref("DOMString")}} que representa o nome do evento.
- `closeEventInit` {{optional_inline}}

  - : É uma coleção `CloseEventInit`, que possui os seguintes campos:

    - `"wasClean"`, opcional e inicialmente de valor `false`, do tipo `long`, indica se uma conexão foi encerrada de forma limpa ou não.
    - `"code"`, opcional e inicialmente de valor `0`, do tipo `unsigned short`, este é o código de encerramento da conexão enviado pelo servidor.
    - `"reason"`, opcional e inicialmente de valor `''`, do tipo {{domxref("DOMString")}}, esta é uma razão humanamente compreensível do porque o servidor encerrou a conexão.

    > **Nota:** A coleção `CloseEventInit` também aceita campos vindos da coleção {{domxref("Event.Event", "EventInit")}}.

## Especificações

| Specification                                                                            | Status                           | Comment           |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ----------------- |
| {{SpecName('HTML WHATWG','comms.html#closeevent','CloseEvent()')}} | {{Spec2('HTML WHATWG')}} | Definição inicial |

## Compatibilidade com navegadores

{{Compat("api.CloseEvent.CloseEvent")}}

## Veja também

- {{domxref("CloseEvent")}}, a interface de construção de seus objetos.
