---
title: Event.currentTarget
slug: Web/API/Event/currentTarget
tags:
  - API
  - CompatibilidadeEntreNavegadores
  - DOM
  - Gecko
  - Propriedade
translation_of: Web/API/Event/currentTarget
---
{{APIRef("DOM")}}

Identifica o alvo atual para o evento quando o event percorre o DOM. O currentTarget sempre se refere ao elemento associado ao event handler, ao invés do event.target que identifica o elemento ao qual o evento ocorreu.

## Exemplo

`event.currentTarget` é bom para ser usado quando nós queremos associar o mesmo event handler para vários elementos.

```js
function hide(e){
  e.currentTarget.style.visibility = "hidden";
  console.log(e.currentTarget);
  // Quando essa função é usada como um event
  // handler: this === e.currentTarget
}

var ps = document.getElementsByTagName('p');

for(var i = 0; i < ps.length; i++){
  // console: print the clicked <p> element
  ps[i].addEventListener('click', hide, false);
}
// console: print <body>
document.body.addEventListener('click', hide, false);

// Clique e faça os parágrafos desaparecerem
```

## Especificações

| Especificação                                                                                                | Status                           | Comentário       |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ---------------- |
| {{SpecName("DOM WHATWG", "#dom-event-currenttarget", "Event.currentTarget")}}     | {{Spec2("DOM WHATWG")}} |                  |
| {{SpecName("DOM4", "#dom-event-currenttarget", "Event.currentTarget")}}             | {{Spec2("DOM4")}}         |                  |
| {{SpecName("DOM3 Events", "#dfn-current-event-target", "current event target")}} | {{Spec2("DOM3 Events")}} |                  |
| {{SpecName("DOM2 Events", "#Events-Event-currentTarget", "Event.currentTarget")}} | {{Spec2("DOM2 Events")}} | Definição incial |

## Compatibilidade com navegadores

{{Compat("api.Event.currentTarget")}}

## Veja também

[Comparativo dos Event Targets](/pt-BR/docs/Web/API/Event/Comparison_of_Event_Targets)
