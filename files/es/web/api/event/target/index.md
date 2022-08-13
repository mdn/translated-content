---
title: Event.target
slug: Web/API/Event/target
tags:
  - Evento
  - Propiedad
  - Referencia
translation_of: Web/API/Event/target
---
{{ApiRef("DOM")}}

La propiedad **`target`** de la interfaz del {{domxref("event.currentTarget")}} es una referencia al objeto en el cual se lanzo el evento. Es diferente de {{domxref("event.currentTarget")}} donde el controlador de eventos (event handler) es llamado durante la fase de bubbling or capturing del evento.

## Sintaxis

    const theTarget = algunEvento.target

## Ejemplo

La propiedad `event.target` puede ser usada para implementar una **delegación del evento**.

```js
// Crear una lista
const ul = document.createElement('ul');
document.body.appendChild(ul);

const li1 = document.createElement('li');
const li2 = document.createElement('li');
ul.appendChild(li1);
ul.appendChild(li2);

function hide(e){
  // e.target se refiere elemento clickado <li>
  // Esto es diferente de e.currentTarget, que se referiría al padre <ul> en este contexto
  e.target.style.visibility = 'hidden';
}

// Incluir el 'listener' a la lista
// Se ejecutará cuando se haga click en cada <li>
ul.addEventListener('click', hide, false);
```

## Especificaciones

| Especificación                                                                           | Estado                           | Comentario         |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName("DOM WHATWG", "#dom-event-target", "Event.target")}}     | {{Spec2("DOM WHATWG")}} |                    |
| {{SpecName("DOM4", "#dom-event-target", "Event.target")}}             | {{Spec2("DOM4")}}         |                    |
| {{SpecName("DOM2 Events", "#Events-Event-target", "Event.target")}} | {{Spec2("DOM2 Events")}} | Definición inicial |

## Compatibilidad del navegador

{{Compat("api.Event.target")}}

## Notas de compatibilidad

En IE 6-8 el evento 'model' es diferente. Los eventos 'listeners' son are incluidos con el método no estándar {{domxref('EventTarget.attachEvent')}}. En este modelo, el evento 'object' tiene una propiedad {{domxref('Event.srcElement')}}, en vez de la propiedad `target`, y tiene la misma semántica que `event.target`.

```js
function hide(e) {
  // Soporte en IE6-8
  var target = e.target || e.srcElement;
  target.style.visibility = 'hidden';
}
```

## También ver

- [Comparación de los Eventos](/es/docs/Web/API/Event/Comparison_of_Event_Targets)
