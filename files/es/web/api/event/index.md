---
title: Event
slug: Web/API/Event
l10n:
  sourceCommit: 91b5a448a517239876a4bc92640bbbf29e30b106
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

La interfaz **`Event`** representa un evento que ocurre en un [`EventTarget`](/es/docs/Web/API/EventTarget).

Un evento puede dispararse por una acción del usuario, como hacer clic con el ratón o pulsar una tecla, o bien lo generan las API para representar el progreso de una tarea asíncrona. También puede dispararse mediante programación, por ejemplo, al llamar al método [`HTMLElement.click()`](/es/docs/Web/API/HTMLElement/click) de un elemento, o al definir el evento y enviarlo a un destino específico usando [`EventTarget.dispatchEvent()`](/es/docs/Web/API/EventTarget/dispatchEvent).

Existen muchos tipos de eventos, y algunos de ellos usan otras interfaces basadas en la interfaz principal `Event`. La propia interfaz `Event` contiene las propiedades y los métodos comunes a todos los eventos.

Muchos elementos del DOM pueden configurarse para aceptar (o "escuchar") estos eventos y ejecutar código en respuesta, con el fin de procesarlos (o "manejarlos"). Los manejadores de eventos suelen conectarse (o "asociarse") a distintos [elementos HTML](/es/docs/Web/HTML/Reference/Elements) (como `<button>`, `<div>`, `<span>`, etc.) mediante [`EventTarget.addEventListener()`](/es/docs/Web/API/EventTarget/addEventListener); esto generalmente sustituye al uso de los antiguos [atributos de manejador de eventos](/es/docs/Web/HTML/Reference/Global_attributes) de HTML. Además, cuando se añaden correctamente, estos manejadores también pueden desconectarse si es necesario usando [`removeEventListener()`](/es/docs/Web/API/EventTarget/removeEventListener).

> [!NOTE]
> Un mismo elemento puede tener varios de estos manejadores, incluso para exactamente el mismo evento, sobre todo si módulos de código independientes los asocian, cada uno con sus propios fines. (Por ejemplo, una página web con un módulo de publicidad y otro de estadísticas que monitorizan la reproducción de un vídeo).

Cuando hay muchos elementos anidados, cada uno con sus propios manejadores, el procesamiento de eventos puede volverse muy complicado. Esto ocurre sobre todo cuando un elemento padre recibe exactamente el mismo evento que sus hijos porque, "espacialmente", se solapan y el evento ocurre técnicamente en ambos, y el orden de procesamiento de dichos eventos depende de la configuración de [Propagación de eventos](/es/docs/Learn_web_development/Core/Scripting/Event_bubbling) de cada manejador activado.

## Interfaces basadas en Event

A continuación se muestra una lista de las interfaces basadas en la interfaz principal `Event`, con enlaces a su documentación en la referencia de API de MDN.

Ten en cuenta que los nombres de todas las interfaces de eventos terminan en "Event".

- {{domxref("AnimationEvent")}}
- {{domxref("AudioProcessingEvent")}} {{Deprecated_Inline}}
- {{domxref("BeforeUnloadEvent")}}
- {{domxref("BlobEvent")}}
- {{domxref("ClipboardChangeEvent")}}
- {{domxref("ClipboardEvent")}}
- {{domxref("CloseEvent")}}
- {{domxref("CompositionEvent")}}
- {{domxref("CustomEvent")}}
- {{domxref("DeviceMotionEvent")}}
- {{domxref("DeviceOrientationEvent")}}
- {{domxref("DragEvent")}}
- {{domxref("ErrorEvent")}}
- {{domxref("FetchEvent")}}
- {{domxref("FocusEvent")}}
- {{domxref("FontFaceSetLoadEvent")}}
- {{domxref("FormDataEvent")}}
- {{domxref("GamepadEvent")}}
- {{domxref("HashChangeEvent")}}
- {{domxref("HIDInputReportEvent")}}
- {{domxref("IDBVersionChangeEvent")}}
- {{domxref("InputEvent")}}
- {{domxref("KeyboardEvent")}}
- {{domxref("MediaStreamEvent")}} {{Deprecated_Inline}}
- {{domxref("MessageEvent")}}
- {{domxref("MouseEvent")}}
- {{domxref("MutationEvent")}} {{Deprecated_Inline}}
- {{domxref("OfflineAudioCompletionEvent")}}
- {{domxref("PageTransitionEvent")}}
- {{domxref("PaymentRequestUpdateEvent")}}
- {{domxref("PointerEvent")}}
- {{domxref("PopStateEvent")}}
- {{domxref("ProgressEvent")}}
- {{domxref("RTCDataChannelEvent")}}
- {{domxref("RTCPeerConnectionIceEvent")}}
- {{domxref("StorageEvent")}}
- {{domxref("SubmitEvent")}}
- {{domxref("TimeEvent")}}
- {{domxref("TouchEvent")}}
- {{domxref("TrackEvent")}}
- {{domxref("TransitionEvent")}}
- {{domxref("UIEvent")}}
- {{domxref("WebGLContextEvent")}}
- {{domxref("WheelEvent")}}

## Constructor

- {{domxref("Event.Event", "Event()")}}
  - : Crea un objeto `Event` y lo devuelve a quien lo llama.

## Propiedades de instancia

- {{domxref("Event.bubbles")}} {{ReadOnlyInline}}
  - : Un valor booleano que indica si el evento se propaga (burbujea) hacia arriba a través del DOM.
- {{domxref("Event.cancelable")}} {{ReadOnlyInline}}
  - : Un valor booleano que indica si el evento es cancelable.
- {{domxref("Event.composed")}} {{ReadOnlyInline}}
  - : Un valor booleano que indica si el evento puede propagarse a través del límite entre el shadow DOM y el DOM regular.
- {{domxref("Event.currentTarget")}} {{ReadOnlyInline}}
  - : Una referencia al destino registrado actualmente para el evento. Es el objeto al que se tiene previsto enviar el evento en este momento. Es posible que haya cambiado a lo largo del trayecto mediante la _reorientación_.
- {{domxref("Event.defaultPrevented")}} {{ReadOnlyInline}}
  - : Indica si la llamada a {{domxref("event.preventDefault()")}} canceló el evento.
- {{domxref("Event.eventPhase")}} {{ReadOnlyInline}}
  - : Indica qué fase del flujo del evento se está procesando. Es uno de los siguientes números: `NONE`, `CAPTURING_PHASE`, `AT_TARGET`, `BUBBLING_PHASE`.
- {{domxref("Event.isTrusted")}} {{ReadOnlyInline}}
  - : Indica si el evento fue iniciado por el navegador (tras un clic del usuario, por ejemplo) o por un script (utilizando un método de creación de eventos, por ejemplo).
- {{domxref("Event.srcElement")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Un alias de la propiedad {{domxref("Event.target")}}. Usa {{domxref("Event.target")}} en su lugar.
- {{domxref("Event.target")}} {{ReadOnlyInline}}
  - : Una referencia al objeto al que se envió originalmente el evento.
- {{domxref("Event.timeStamp")}} {{ReadOnlyInline}}
  - : Un {{domxref("DOMHighResTimeStamp")}} que representa el momento en que se creó el evento, medido en milisegundos relativos al origen de tiempo del objeto global correspondiente.
- {{domxref("Event.type")}} {{ReadOnlyInline}}
  - : El nombre que identifica el tipo del evento.

### Propiedades heredadas y no estándar

- {{domxref("Event.cancelBubble")}} {{deprecated_inline}}
  - : Un alias histórico de {{domxref("Event.stopPropagation()")}}, que es el que debes usar. Si le asignas el valor `true` antes de salir de un manejador de eventos, se impide la propagación del evento.
- {{domxref("Event.explicitOriginalTarget")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : El destino original explícito del evento.
- {{domxref("Event.originalTarget")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : El destino original del evento, antes de cualquier reorientación.
- {{domxref("Event.returnValue")}} {{deprecated_inline}}
  - : Una propiedad histórica que aún se admite para que los sitios existentes sigan funcionando. Usa {{domxref("Event.preventDefault()")}} y {{domxref("Event.defaultPrevented")}} en su lugar.
- {{domxref("Event.composed", "Event.scoped")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Un valor booleano que indica si el evento se propagará a través del shadow root hacia el DOM estándar. Usa {{domxref("Event.composed", "composed")}} en su lugar.

## Métodos de instancia

- {{domxref("Event.composedPath()")}}
  - : Devuelve la ruta del evento (un array de objetos en los que se invocarán los detectores de eventos). No incluye nodos de los shadow trees si el shadow root se creó con su {{domxref("ShadowRoot.mode")}} en modo cerrado.
- {{domxref("Event.preventDefault()")}}
  - : Cancela el evento (si es cancelable).
- {{domxref("Event.stopImmediatePropagation()")}}
  - : Para este evento concreto, impide que se invoque cualquier otro detector de eventos. Esto incluye tanto los detectores asociados al mismo elemento como los asociados a elementos que se recorrerán más adelante (por ejemplo, durante la fase de captura).
- {{domxref("Event.stopPropagation()")}}
  - : Detiene la propagación del evento más allá del punto actual en el DOM.

### Métodos obsoletos

- {{domxref("Event.initEvent()")}} {{deprecated_inline}}
  - : Inicializa el valor de un Event ya creado. Si el evento ya se ha enviado, este método no hace nada. Usa en su lugar el constructor ({{domxref("Event.Event", "Event()")}}).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Índice de eventos](/es/docs/Web/API/Document_Object_Model/Events) <!-- TODO(l10n-es): restaurar el ancla #event_index cuando la sección esté traducida en la página destino -->
- [Aprende: introducción a los eventos](/es/docs/Learn_web_development/Core/Scripting/Events)
- [Aprende: propagación de eventos](/es/docs/Learn_web_development/Core/Scripting/Event_bubbling)
- [Creación y disparo de eventos personalizados](/es/docs/Web/API/Document_Object_Model/Events) <!-- TODO(l10n-es): restaurar el ancla #creating_and_dispatching_events cuando la sección esté traducida en la página destino -->
