---
title: EventTarget
slug: Web/API/EventTarget
tags:
  - API
translation_of: Web/API/EventTarget
---
{{ ApiRef("DOM Events") }}

`EventTarget` es una interfaz implementada por los objetos que pueden administrar eventos y sus escuchadores.

{{domxref("Element")}}, {{domxref("document")}}, y {{domxref("window")}} son los objetivos más comunes de un evento, pero otros objetos pueden serlo también, por ejemplo {{domxref("XMLHttpRequest")}}, {{domxref("AudioNode")}}, {{domxref("AudioContext")}}, entre otros.

Muchos objetivos de eventos tales como: elementos, documentos y ventanas, también admiten la configuración de controladores de eventos a través de propiedades y atributos.

## Métodos

- {{domxref("EventTarget.addEventListener()")}}
  - : Registre un controlador de eventos de un tipo de evento específico en EventTarget.
- {{domxref("EventTarget.removeEventListener()")}}
  - : Elimina un detector de eventos del EventTarget.
- {{domxref("EventTarget.dispatchEvent()")}}
  - : Enviar un evento a este EventTarget.

## Especificaciones

| Specification                                                                                                    | Status                           | Comment                                                                                     |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#interface-eventtarget', 'EventTarget')}}                         | {{Spec2('DOM WHATWG')}} | No change.                                                                                  |
| {{SpecName('DOM3 Events', 'DOM3-Events.html#interface-EventTarget', 'EventTarget')}} | {{Spec2('DOM3 Events')}} | A few parameters are now optional (`listener`), or accepts the `null` value (`useCapture`). |
| {{SpecName('DOM2 Events', 'events.html#Events-EventTarget', 'EventTarget')}}             | {{Spec2('DOM2 Events')}} | Initial definition.                                                                         |

## Compatibilidad

{{Compat("api.EventTarget")}}

## Vea también

- [Event reference](/es/docs/Web/Reference/Events) - Los eventos disponibles en la plataforma
- [Event developer guide](/es/docs/Web/Guide/DOM/Events) - Guía sobre eventos para desarrolladores
- {{domxref("Event")}} - Interface
