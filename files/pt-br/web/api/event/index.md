---
title: Event
slug: Web/API/Event
---

{{APIRef("DOM")}}

A interface de **eventos** representa qualquer evento de DOM. Ele contém propriedades comuns e métodos para qualquer evento.

Um monte de outras interfaces herdam, diretamente ou não, a partir desta interface base:

- {{domxref("AnimationEvent")}}
- {{domxref("AudioProcessingEvent")}}
- {{domxref("BeforeInputEvent")}}
- {{domxref("BeforeUnloadEvent")}}
- {{domxref("BlobEvent")}}
- {{domxref("ClipboardEvent")}}
- {{domxref("CloseEvent")}}
- {{domxref("CompositionEvent")}}
- {{domxref("CSSFontFaceLoadEvent")}}
- {{domxref("CustomEvent")}}
- {{domxref("DeviceLightEvent")}}
- {{domxref("DeviceMotionEvent")}}
- {{domxref("DeviceOrientationEvent")}}
- {{domxref("DeviceProximityEvent")}}
- {{domxref("DOMTransactionEvent")}}
- {{domxref("DragEvent")}}
- {{domxref("EditingBeforeInputEvent")}}
- {{domxref("ErrorEvent")}}
- {{domxref("FocusEvent")}}
- {{domxref("GamepadEvent")}}
- {{domxref("HashChangeEvent")}}
- {{domxref("IDBVersionChangeEvent")}}
- {{domxref("InputEvent")}}
- {{domxref("KeyboardEvent")}}
- {{domxref("MediaStreamEvent")}}
- {{domxref("MessageEvent")}}
- {{domxref("MouseEvent")}}
- {{domxref("MutationEvent")}}
- {{domxref("OfflineAudioCompletionEvent")}}
- {{domxref("PageTransitionEvent")}}
- {{domxref("PointerEvent")}}
- {{domxref("PopStateEvent")}}
- {{domxref("ProgressEvent")}}
- {{domxref("RelatedEvent")}}
- {{domxref("RTCDataChannelEvent")}}
- {{domxref("RTCIdentityErrorEvent")}}
- {{domxref("RTCIdentityEvent")}}
- {{domxref("RTCPeerConnectionIceEvent")}}
- {{domxref("SensorEvent")}}
- {{domxref("StorageEvent")}}
- {{domxref("SVGEvent")}}
- {{domxref("SVGZoomEvent")}}
- {{domxref("TimeEvent")}}
- {{domxref("TouchEvent")}}
- {{domxref("TrackEvent")}}
- {{domxref("TransitionEvent")}}
- {{domxref("UIEvent")}}
- {{domxref("UserProximityEvent")}}
- {{domxref("WheelEvent")}}

## Construtor

- {{domxref("Event.Event", "Event()")}}
  - : Cria um objeto Event.

## Propriedades

_Esta interface não herda nenhuma propriedade._

- {{domxref("Event.bubbles")}} {{readonlyinline}}
  - : Um booleano que indica se o evento surge em bolha pela DOM ou não.
- {{domxref("Event.cancelable")}} {{readonlyinline}}
  - : Um booleano que indica se o evento é cancelado.
- {{domxref("Event.currentTarget")}} {{readonlyinline}}
  - : Uma referencia para o alvo registrado atualmente para o evento.
- {{domxref("Event.defaultPrevented")}} {{readonlyinline}}
  - : Indica se ou não {{domxref("event.preventDefault()")}} foi chamado no evento..
- {{domxref("Event.eventPhase")}} {{readonlyinline}}
  - : Indica que fase do fluxo de eventos está a ser processada.
- {{domxref("Event.explicitOriginalTarget")}} {{non-standard_inline}} {{readonlyinline}}
  - : O objetivo original explícito do evento (Mozilla-specific).
- {{domxref("Event.originalTarget")}} {{non-standard_inline}} {{readonlyinline}}
  - : O objectivo inicial do evento, antes de qualquer redirecionamento (Mozilla-specific).
- {{domxref("Event.target")}} {{readonlyinline}}
  - : A referência ao objectivo para o qual o evento foi originalmente despachado.
- {{domxref("Event.timeStamp")}} {{readonlyinline}}
  - : O tempo em que o evento foi criado.
- {{domxref("Event.type")}} {{readonlyinline}}
  - : O nome do evento (case-insensitive).
- {{domxref("Event.isTrusted")}} {{readonlyinline}}
  - : Indica se ou não o evento foi iniciado pelo navegador (depois de um clique do usuário, por exemplo) ou por um script (usando um método de criação de evento, como [event.initEvent](/pt-BR/docs/Web/API/Event/initEvent))

## Metodos

_Esta interface não herda nenhum método._

- {{domxref("Event.initEvent()")}} {{deprecated_inline}}
  - : Inicializa o valor de um evento criado. Se o evento já está sendo despachado, este método não faz nada.
- {{domxref("Event.preventBubble()")}} {{non-standard_inline}}
  - : Impede o evento de borbulhar. Obsoleto, use {{domxref ("event.stopPropagation")}} em vez disso.
- {{domxref("Event.preventCapture()")}} {{non-standard_inline}}
  - : Obsoleto, use {{domxref("event.stopPropagation")}} ao invés.
- {{domxref("Event.preventDefault()")}}
  - : Cancela o evento (caso seja cancelável).
- {{domxref("Event.stopImmediatePropagation()")}}
  - : Para este evento em particular, nenhum outro ouvinte será chamado. Ou aqueles ligados no mesmo elemento, nem aqueles associados em elementos que serão percorridos mais tarde
    (em fase de captura, por exemplo).
- {{domxref("Event.stopPropagation()")}}
  - : Para a propagação de eventos mais adiante no DOM.
- {{domxref("Event.getPreventDefault()")}} {{non-standard_inline}}
  - : Obsoleto, use {{domxref("Event.defaultPrevented")}} ao invés.

## Veja também

- Tipos de eventos disponíveis: [Referência de eventos](/pt-BR/docs/Web/Events)
- [Comparitivo dos Alvos de Eventos](/pt-BR/docs/Learn/JavaScript/Building_blocks/Event_bubbling) (target vs currentTarget vs relatedTarget vs originalTarget)
- [Criação e gatilho de eventos customizados](/pt-BR/docs/Web/Events/Creating_and_triggering_events)
- Para desenvolvedores de extensões para o Firefox:

  - [Escutando eventos em extensões do Firefox](/pt-BR/docs/Listening_to_events_in_Firefox_extensions)
  - [Escutando eventos em todas as abas](/pt-BR/docs/Listening_to_events_on_all_tabs)

- [Eventos relacionados da Mozilla na vida real em wiki.mozilla.org](https://wiki.mozilla.org/Events)
