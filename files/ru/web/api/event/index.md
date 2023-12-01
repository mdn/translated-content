---
title: Event
slug: Web/API/Event
---

{{APIRef("DOM")}}

Интерфейс **`Event`** представляет собой любое событие, которое происходит в [DOM](/ru/docs/DOM/DOM_Reference); некоторые из них генерируемые пользователем (клик мышью или нажатие клавиши на клавиатуре), а некоторые - генерируемые API (события, обозначающие завершение процесса анимации, приостановка видео и т.д.). Существует много типов событий, некоторые из них используют интерфейсы, базирующиеся на главном интерфейсе `Event`. `Event` содержит общие свойства и методы для всех событий.

## Интерфейсы, основанные на `Event`

Ниже приведён список интерфейсов, основанных на главном интерфейсе `Event`, а также указаны ссылки на них в документации MDN API. Заметьте, что имена всех интерфейсов оканчиваются на "Event".

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
- {{domxref("FetchEvent")}}
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
- {{domxref("WebGLContextEvent")}}
- {{domxref("WheelEvent")}}

## Конструктор

- {{domxref("Event.Event", "Event()")}}
  - : Создаёт объект `Event` и возвращает его вызывающему.

## Свойства

- {{domxref("Event.bubbles")}} {{readonlyinline}}
  - : Логическое значение, указывающее, всплыло ли событие вверх по DOM или нет.
- {{domxref("Event.cancelBubble")}}
  - : Историческое название синонима {{domxref("Event.stopPropagation()")}}. Если установить значение в `true` до возврата из обработчика события (Event Handler), то событие не будет распространяться дальше (например, на обработчики для родительских узлов).
- {{domxref("Event.cancelable")}} {{readonlyinline}}
  - : Логическое значение, показывающее возможность отмены события.
- {{domxref("Event.composed")}} {{ReadOnlyInline}}
  - : Логическое значение, показывающее может или нет событие всплывать через границы между shadow DOM (внутренний DOM конкретного элемента) и обычного DOM документа.
- {{domxref("Event.currentTarget")}} {{readonlyinline}}
  - : Ссылка на текущий зарегистрированный объект, на котором обрабатывается событие. Это объект, которому планируется отправка события; поведение можно изменить с использованием перенаправления (_retargeting_).
- {{domxref("Event.deepPath")}} {{non-standard_inline}}
  - : {{jsxref("Array", "Массив")}} DOM-{{domxref("Node", "узлов")}}, через которые всплывало событие.
- {{domxref("Event.defaultPrevented")}} {{readonlyinline}}
  - : Показывает, была ли для события вызвана функция {{domxref("event.preventDefault()")}}.
- {{domxref("Event.eventPhase")}} {{readonlyinline}}
  - : Указывает фазу процесса обработки события.
- {{domxref("Event.explicitOriginalTarget")}} {{non-standard_inline}} {{readonlyinline}}
  - : Явный первоначальный целевой объект события (Mozilla-специфичный). Не может содержать [анонимного контента](/ru/docs/Mozilla/Tech/XBL/XBL_1.0_Reference/Anonymous_Content).
- {{domxref("Event.originalTarget")}} {{non-standard_inline}} {{readonlyinline}}
  - : Первоначальный целевой объект события до перенаправлений (Mozilla-специфичный). Может быть из [анонимного контента](/ru/docs/Mozilla/Tech/XBL/XBL_1.0_Reference/Anonymous_Content).
- {{domxref("Event.returnValue")}} {{non-standard_inline}}
  - : Нестандартная альтернатива (оставшаяся от старых версий Microsoft Internet Explorer) для {{domxref("Event.preventDefault()")}} и {{domxref("Event.defaultPrevented")}}.
- {{domxref("Event.scoped")}} {{readonlyinline}}
  - : {{jsxref("Boolean", "Логическое значение")}}, показывающее всплывает ли данное событие через shadow root (внутренний DOM-элемента). Это свойство было переименовано в {{domxref("Event.composed", "composed")}}.
- {{domxref("Event.srcElement")}} {{non-standard_inline}}
  - : Нестандартный синоним (остался от старых версий Microsoft Internet Explorer) для {{domxref("Event.target")}}.
- {{domxref("Event.target")}} {{readonlyinline}}
  - : Ссылка на целевой объект, на котором произошло событие.
- {{domxref("Event.timeStamp")}} {{readonlyinline}}
  - : Время, когда событие было создано (в миллисекундах). По спецификации это время от начала Эпохи (Unix Epoch), но в действительности в разных браузерах определяется по-разному; кроме того, ведётся работа по изменению его на {{domxref("DOMHighResTimeStamp")}} тип.
- {{domxref("Event.type")}} {{readonlyinline}}
  - : Название события (без учёта регистра символов).
- {{domxref("Event.isTrusted")}} {{readonlyinline}}
  - : Показывает было или нет событие инициировано браузером (например, по клику мышью) или из скрипта (например, через функцию создания события, такую как [event.initEvent](/ru/docs/DOM/event.initEvent))

## Методы

- {{domxref("Event.createEvent()")}}

  - : Создаёт новое событие, которое затем должно быть проинициализировано вызовом его метода `initEvent()`.

- {{domxref("Event.initEvent()")}} {{deprecated_inline}}
  - : Инициализация значений созданного с помощью [Document.createEvent()](/ru/docs/Web/API/Document/createEvent) события. Если событие уже отправлено, то эта функция ничего не делает.
- {{domxref("Event.preventBubble()")}} {{non-standard_inline}}
  - : Предотвращает всплытие события. Устаревшая, используйте вместо неё {{domxref("event.stopPropagation")}}.
- {{domxref("Event.preventCapture()")}} {{non-standard_inline}}
  - : Устаревшая, используйте вместо неё {{domxref("event.stopPropagation")}}.
- {{domxref("Event.preventDefault()")}}
  - : Отменяет событие (если его возможно отменить).
- {{domxref("Event.stopImmediatePropagation()")}}
  - : Для конкретного события не будет больше вызвано обработчиков. Ни тех, которые привязаны к этому же элементу (на котором работает обработчик, который вызывает этот Event.stopImmediatePropagation()), ни других, которые могли бы вызваться при распространении события позже (например, в фазе перехвата - capture).
- {{domxref("Event.stopPropagation()")}}
  - : Остановка распространения события далее по DOM.
- {{domxref("Event.getPreventDefault()")}} {{non-standard_inline}}
  - : Нестандартная. Возвращает значение {{domxref("Event.defaultPrevented")}}. Используйте вместо неё {{domxref("Event.defaultPrevented")}}.

## Спецификации

{{Specifications}}

## Совместимость браузеров

{{Compat}}

## Смотрите также

- Типы событий: [Event reference](/ru/docs/Web/Reference/Events)
- [Сравнение Event Targets](/ru/docs/Web/API/Event/Comparison_of_Event_Targets) (target и currentTarget и relatedTarget и originalTarget)
- [Creating and triggering custom events](/ru/docs/Web/Guide/DOM/Events/Creating_and_triggering_events)
- Для разработчиков дополнений Firefox:

  - [Listening to events in Firefox extensions](/ru/docs/Listening_to_events_in_Firefox_extensions)
  - [Listening to events on all tabs](/ru/docs/Listening_to_events_on_all_tabs)

- [Mozilla related events in real life at wiki.mozilla.org](https://wiki.mozilla.org/Events)
