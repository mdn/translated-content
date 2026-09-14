---
title: UIEvent
slug: Web/API/UIEvent
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{APIRef("UI Events")}}

La interfaz **`UIEvent`** representa eventos de interfaz de usuario simples.

`UIEvent` deriva de {{domxref("Event")}}. Aunque el método {{domxref("UIEvent.initUIEvent()")}} se mantiene por compatibilidad con versiones anteriores, debe crear un objeto `UIEvent` utilizando el constructor {{domxref("UIEvent.UIEvent", "UIEvent()")}}.

Varias interfaces son descendientes directas o indirectas de esta: {{domxref("MouseEvent")}}, {{domxref("TouchEvent")}}, {{domxref("FocusEvent")}}, {{domxref("KeyboardEvent" )}}, {{domxref("WheelEvent")}}, {{domxref("InputEvent")}} y {{domxref("CompositionEvent")}}.

{{InheritanceDiagram}}

## Constructor

- {{domxref("UIEvent.UIEvent()", "UIEvent()")}}
  - : Crea un objeto `UIEvent`.

## Propiedades de instancia

_Esta interfaz también hereda las propiedades de su padre, {{domxref("Event")}}._

- {{domxref("UIEvent.detail")}} {{ReadOnlyInline}}
  - : Devuelve un `long` con detalles sobre el evento, según el tipo de evento.
- {{domxref("UIEvent.sourceCapabilities")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Devuelve una instancia de la interfaz `InputDeviceCapabilities`, que proporciona información sobre el dispositivo físico responsable de generar un evento táctil.
- {{domxref("UIEvent.view")}} {{ReadOnlyInline}}
  - : Devuelve un {{Glossary("WindowProxy")}} que contiene la vista que generó el evento.
- {{domxref("UIEvent.which")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Devuelve el `keyCode` numérico de la tecla pulsada, o el código de carácter (`charCode`) de una tecla alfanumérica pulsada.

## Métodos de instancia

_Esta interfaz también hereda métodos de su padre, {{domxref("Event")}}._

- {{domxref("UIEvent.initUIEvent()")}} {{Deprecated_Inline}}
  - : Inicializa un objeto `UIEvent`. Si el evento ya se envió, este método no hace nada.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Introducción a eventos](/es/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Event")}}
