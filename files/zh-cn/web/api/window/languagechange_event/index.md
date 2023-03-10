---
title: languagechange
slug: Web/API/Window/languagechange_event
---

{{SeeCompatTable}}

当用户首选语言更改时，将在全局范围对象上触发 languagechange 事件。

## General info

- Interface
  - : {{domxref("Event")}}
- Bubbles
  - : No
- Cancelable
  - : No
- Target
  - : The default window scope, being {{domxref("Window")}} on Web pages and {{domxref("WorkerGlobalScope")}} in [Web Workers](/zh-CN/docs/Web/Guide/Performance/Using_web_workers).
- Default Action
  - : None

## Properties

_Being of type {{domxref("Event")}}, this event implements the properties of this interface._

- {{domxref("Event.target")}} {{ReadonlyInline}}
  - : Returns an {{domxref("EventTarget")}} that is the topmost target in the DOM tree of the event.
- {{domxref("Event.type")}} {{ReadonlyInline}}
  - : Returns a {{domxref("DOMString")}} representing the type of event, here `"languagechange"`.
- {{domxref("Event.bubbles")}}{{ReadonlyInline}}
  - : Returns a {{domxref("Boolean")}} indicating if the event normally bubbles or not.
- {{domxref("Event.cancelable")}}{{ReadonlyInline}}
  - : Returns a {{domxref("Boolean")}} indicating if it is possible to cancel the event.

## Specification

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("NavigatorLanguage.language","navigator.language")}}
- {{domxref("NavigatorLanguage.languages","navigator.languages")}}
- {{domxref("Navigator")}}
- {{domxref("Window.onlanguagechange")}}
