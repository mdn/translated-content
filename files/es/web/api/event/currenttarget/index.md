---
title: Event.currentTarget
slug: Web/API/Event/currentTarget
tags:
  - API
  - DOM
  - Gecko
  - Property
translation_of: Web/API/Event/currentTarget
---
{{APIRef("DOM")}}

Identifica el target (objetivo) actual del evento, ya que el evento atraviesa el DOM. Siempre hace referencia al elmento al cual el controlador del evento fue asociado, a diferencia de `event.target`, que identifica el elemento el el que se produjo el evento.

## Ejemplo

Es interesante utilizar `event.currentTarget` cuando se asocia un mismo controlador de eventos a varios elementos.

```js
function hide(e){
  e.currentTarget.style.visibility = "hidden";
  console.log(e.currentTarget);
  // Cuando esta función es usada como un controlador de evento: this === e.currentTarget
}

var ps = document.getElementsByTagName('p');

for(var i = 0; i < ps.length; i++){
  // console: imprime el elemento pulsado <p>
  ps[i].addEventListener('click', hide, false);
}
// console: imprime <body>
document.body.addEventListener('click', hide, false);

// hace desaparecer párrafos al hacer click alrededor
```

## Especificaciones

| Especificación                                                                                               | Estado                           | Comentario         |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------ |
| {{SpecName("DOM WHATWG", "#dom-event-currenttarget", "Event.currentTarget")}}     | {{Spec2("DOM WHATWG")}} |                    |
| {{SpecName("DOM4", "#dom-event-currenttarget", "Event.currentTarget")}}             | {{Spec2("DOM4")}}         |                    |
| {{SpecName("DOM3 Events", "#dfn-current-event-target", "current event target")}} | {{Spec2("DOM3 Events")}} |                    |
| {{SpecName("DOM2 Events", "#Events-Event-currentTarget", "Event.currentTarget")}} | {{Spec2("DOM2 Events")}} | Definición inicial |

## Compatibilidad con navegadores

{{Compat("api.Event.currentTarget")}}

## Ver también

[Comparativa de Event Targets](/es/docs/Web/API/Event/Comparison_of_Event_Targets)
