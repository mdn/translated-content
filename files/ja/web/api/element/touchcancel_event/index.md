---
title: 'Element: touchcancel event'
slug: Web/API/Element/touchcancel_event
tags:
  - Event
  - Touch Events
  - TouchEvent
  - UI
  - UI Events
  - UX
  - touch
translation_of: Web/API/Element/touchcancel_event
---
{{APIRef}}

`touchcancel` イベントは、１つ以上のタッチポイントが実装固有の方法で中断されたときに発生します(例えば、タッチポイントが多すぎるとき)。

| Bubbles                | Yes                                                                                      |
| ---------------------- | ---------------------------------------------------------------------------------------- |
| Cancelable             | No                                                                                       |
| Interface              | {{domxref("TouchEvent")}}                                                         |
| Event handler property | {{ DOMxRef("GlobalEventHandlers.ontouchcancel","ontouchcancel")}} |

## 例

サンプルコードはこちらです。 [Touch events](/ja/DOM/Touch_events).

## 仕様

| Specification                                                        | Status                           |
| -------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('Touch Events', '#event-touchcancel')}} | {{Spec2('Touch Events')}} |

## ブラウザ互換性

{{Compat("api.Element.touchcancel_event")}}

## 参照

- {{ domxref("GlobalEventHandlers.ontouchcancel","ontouchcancel")}}
- This event on [`Document`](/ja/docs/Web/API/Document) targets: [`touchcancel`](/ja/docs/Web/API/Document/touchcancel_event)
