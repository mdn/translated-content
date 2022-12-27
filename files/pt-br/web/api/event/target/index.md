---
title: Event.target
slug: Web/API/Event/target
tags:
  - PortuguêsBrasil
  - pt-br
translation_of: Web/API/Event/target
---
{{ApiRef("DOM")}}

Uma referência ao objeto que enviou o evento. É diferente de {{domxref ("event.currentTarget")}} quando o manipulador de eventos é chamado durante a fase de borbulhagem ou captura do evento.

## Sintaxe

```
theTarget = event.target
```

## Exemplo

A propriedade **`event.target`** pode ser usada para implementar a delegação de eventos.

```js
// Assumindo que existe uma variável 'list' contendo uma instância de um elemento ul de HTML.
function hide(e) {
  // A menos que os itens da lista sejam separados por uma margem, e.target deve ser diferente de e.currentTarget
  e.target.style.visibility = 'hidden';
}

list.addEventListener('click', hide, false);

// Se algum elemento (elemento <li> ou um link dentro de um elemento <li> por exemplo) for clicado, ele desaparecerá.
// Só requer um único listener para fazer isso.
```

## Especificações

| Specification                                                                            | Status                           | Comment            |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName("DOM WHATWG", "#dom-event-target", "Event.target")}}     | {{Spec2("DOM WHATWG")}} |                    |
| {{SpecName("DOM4", "#dom-event-target", "Event.target")}}             | {{Spec2("DOM4")}}         |                    |
| {{SpecName("DOM2 Events", "#Events-Event-target", "Event.target")}} | {{Spec2("DOM2 Events")}} | Initial definition |

## Compatibilidade com navegadores

{{Compat("api.Event.target")}}

## Veja também

- [Comparison of Event Targets](/pt-BR/docs/Web/API/Event/Comparison_of_Event_Targets)
