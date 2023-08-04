---
title: WindowEventHandlers
slug: orphaned/Web/API/WindowEventHandlers
---

{{APIRef("HTML DOM")}}

**`WindowEventHandlers`** descreve os manipuladores de eventos comuns a várias interfaces como {{domxref("Window")}}, ou {{domxref("HTMLBodyElement")}} e {{domxref("HTMLFrameSetElement")}}. Cada uma dessas interfaces podendo implementar manipuladores de eventos específicos adicionais.

`WindowEventHandlers` não é uma interface e nenhum objeto desse tipo pode ser criado.

## Properties

_As propriedades de evento, no formulário `onXYZ`, são definidas no {{domxref("WindowEventHandlers")}}, e implementadas por {{domxref("Window")}}, e {{domxref("WorkerGlobalScope")}} para desenvolvedores web._

- {{domxref("WindowEventHandlers.onafterprint")}}
  - : É uma {{event("Event_handlers", "event handler")}} representando o código que será chamando quando o evento {{event("afterprint")}} é invocado.
- {{domxref("WindowEventHandlers.onbeforeprint")}}
  - : É um {{event("Event_handlers", "event handler")}} representando o código que será chamado quando o evento {{event("beforeprint")}} é invocado.
- {{domxref("WindowEventHandlers.onbeforeunload")}}
  - : É um {{event("Event_handlers", "event handler")}} representando o código que será chamado quando o evento {{event("beforeunload")}} é invocado.
- {{domxref("WindowEventHandlers.onhashchange")}}
  - : É um {{event("Event_handlers", "event handler")}} representando o código que será chamado quando o evento {{event("hashchange")}} é invocado.
- {{domxref("WindowEventHandlers.onlanguagechange")}} {{experimental_inline}}
  - : É um {{event("Event_handlers", "event handler")}} representando o código que será chamado quando o evento {{event("languagechange")}} é invocado.
- {{domxref("WindowEventHandlers.onmessage")}}
  - : É um {{event("Event_handlers", "event handler")}} representando o código que será chamado quando o evento {{event("message")}} é invocado.
- {{domxref("WindowEventHandlers.onoffline")}}
  - : É um {{event("Event_handlers", "event handler")}} representando o código que será chamado quando o evento {{event("offline")}} é invocado.
- {{domxref("WindowEventHandlers.ononline")}}
  - : É um {{event("Event_handlers", "event handler")}} representando o código que será chamado quando o evento {{event("online")}} é invocado.
- {{domxref("WindowEventHandlers.onpagehide")}}
  - : É um {{event("Event_handlers", "event handler")}} representando o código que será chamado quando o evento {{event("pagehide")}} é invocado.
- {{domxref("WindowEventHandlers.onpageshow")}}
  - : É um {{event("Event_handlers", "event handler")}} representando o código que será chamado quando o evento {{event("pageshow")}} é invocado.
- {{domxref("WindowEventHandlers.onpopstate")}}
  - : É um {{event("Event_handlers", "event handler")}} representando o código que será chamado quando o evento {{event("popstate")}} é invocado.
- {{domxref("WindowEventHandlers.onresize")}}
  - : É um {{event("Event_handlers", "event handler")}} representando o código que será chamado quando o evento {{event("resize")}} é invocado.
- {{domxref("WindowEventHandlers.onstorage")}}
  - : É um {{event("Event_handlers", "event handler")}} representando o código que será chamado quando o evento {{event("storage")}} é invocado.
- {{domxref("WindowEventHandlers.onunload")}}
  - : É um {{event("Event_handlers", "event handler")}} representando o código que será chamado quando o evento {{event("unload")}} é invocado.

## Métodos

_Esta interface não define métodos._

## Specifications

| Specification                                                                                        | Status                           | Comment                                                                                                                         |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#windoweventhandlers', 'GlobalEventHandlers')}} | {{Spec2('HTML WHATWG')}} | No change since the latest snapshot, {{SpecName("HTML5.1")}}.                                                          |
| {{SpecName('HTML5.1', '#windoweventhandlers', 'GlobalEventHandlers')}}         | {{Spec2('HTML5.1')}}     | Snapshot of {{SpecName("HTML WHATWG")}}. Added `onlanguage` since the {{SpecName("HTML 5")}} snapshot.           |
| {{SpecName("HTML5 W3C", "#windoweventhandlers", "GlobalEventHandlers")}}     | {{Spec2('HTML5 W3C')}}     | Snapshot of {{SpecName("HTML WHATWG")}}. Creation of `WindowEventHandlers` (properties where on the target before it). |

## Veja também

- {{domxref("Window")}} e {{domxref("WorkerGlobalScope")}}
