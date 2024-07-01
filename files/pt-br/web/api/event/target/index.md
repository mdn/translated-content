---
title: Event.target
slug: Web/API/Event/target
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
  e.target.style.visibility = "hidden";
}

list.addEventListener("click", hide, false);

// Se algum elemento (elemento <li> ou um link dentro de um elemento <li> por exemplo) for clicado, ele desaparecerá.
// Só requer um único listener para fazer isso.
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Comparison of Event Targets](/pt-BR/docs/Web/API/Event/Comparison_of_Event_Targets)
