---
title: 'Element: touchmove イベント'
slug: Web/API/Element/touchmove_event
tags:
  - Event
  - Touch Events
  - TouchEvent
  - UI
  - UI Events
  - UX
  - touch
  - touchmove
translation_of: Web/API/Element/touchmove_event
---
{{APIRef}}

`touchmove` イベントは、タッチ面上で 1 つ以上のタッチ点が移動したときに発生します。

| バブリング                   | あり                                                                             |
| ---------------------------- | -------------------------------------------------------------------------------- |
| キャンセル                   | 可                                                                               |
| インターフェイス             | {{domxref("TouchEvent")}}                                                 |
| イベントハンドラープロパティ | {{ domxref("GlobalEventHandlers.ontouchmove","ontouchmove")}} |

## 例

これらのイベントのコード例は、専用のページ「[タッチイベント](/ja/docs/Web/API/Touch_events)」にあります。

## 仕様書

| 仕様書                                                           | 状態                             |
| ---------------------------------------------------------------- | -------------------------------- |
| {{SpecName('Touch Events', '#event-touchmove')}} | {{Spec2('Touch Events')}} |

## ブラウザーの互換性

{{Compat("api.Element.touchmove_event")}}

## 関連情報

- [タッチイベント](/ja/docs/Web/API/Touch_events)
- {{ domxref("GlobalEventHandlers.ontouchmove","ontouchmove")}}
- {{domxref("Element/mousemove_event", "mousemove")}} と {{domxref("GlobalEventHandlers.onmousemove", "onmousemove")}}
- {{domxref("Document")}} をターゲットとしたこのイベント: {{domxref("Document/touchmove_event", "touchmove")}}
