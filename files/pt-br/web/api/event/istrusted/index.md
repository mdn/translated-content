---
title: Event.isTrusted
slug: Web/API/Event/isTrusted
translation_of: Web/API/Event/isTrusted
---
{{APIRef("DOM")}}
A propriedade **`isTrusted`** da interface {{domxref("Event")}}, exclusiva para leitura, é uma booleana ({{domxref("Boolean")}}) de valor verdadeiro (`true`) se tal evento é disparado pela ação do usuário. Retorna falso (`false`) caso o acionamento do evento seja ocasionado pelo método {{domxref("EventTarget.dispatchEvent()")}} ou tenha sido criado ou modificado por um script.

## Sintaxe

```
var eventIsTrusted = event.isTrusted;
```

### Valor

{{domxref("Boolean")}}

## Exemplo

```js
if (e.isTrusted) {
  /* The event is trusted */
} else {
  /* The event is not trusted */
}
```

## Especificações

| Especifiação                                                                                 | Status                           | Comentário                                                                                                     |
| -------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-event-istrusted', 'Event.isTrusted')}} | {{ Spec2('DOM WHATWG') }} |                                                                                                                |
| {{SpecName('DOM3 Events', '#trusted-events', 'Trusted events')}}         | {{Spec2('DOM3 Events')}} | Amplia requisito para confiabilidade de um evento, embora isto não defina por si só a propriedade `isTrusted`. |

## Compatibilidade com navegadores

{{Compat("api.Event.isTrusted")}}
