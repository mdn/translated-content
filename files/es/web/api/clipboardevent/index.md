---
title: ClipboardEvent
slug: Web/API/ClipboardEvent
tags:
  - API
  - Clipboard API
  - Event
  - Experimental
  - Interface
  - NeedsTranslation
  - TopicStub
translation_of: Web/API/ClipboardEvent
---
{{APIRef("Clipboard API")}} {{SeeCompatTable}}

The **`ClipboardEvent`** interface represents events providing information related to modification of the clipboard, that is {{event("cut")}}, {{event("copy")}}, and {{event("paste")}} events.

## Constructor

- {{domxref("ClipboardEvent.ClipboardEvent", "ClipboardEvent()")}}
  - : Creates a `ClipboardEvent` event with the given parameters.

## Properties

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("ClipboardEvent.clipboardData")}} {{readonlyInline}}
  - : Is a {{domxref("DataTransfer")}} object containing the data affected by the user-initiated {{event("cut")}}, {{event("copy")}}, or {{event("paste")}} operation, along with its MIME type.

## Methods

_No specific methods; inherits methods from its parent {{domxref("Event")}}_.

## Specifications

| Specification                                                                                                | Status                               | Comment             |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------- |
| {{ SpecName('Clipboard API', '#clipboard-event-interfaces', 'ClipboardEvent') }} | {{ Spec2('Clipboard API') }} | Initial definition. |

## Browser compatibility

{{Compat("api.ClipboardEvent")}}

## See also

- Copy-related events: {{event("copy")}}, {{event("cut")}}, {{event("paste")}}
