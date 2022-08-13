---
title: 'Document: touchcancel イベント'
slug: Web/API/Document/touchcancel_event
tags:
  - Document
  - Event
  - Reference
  - TouchEvent
  - Web
  - touchcancel
translation_of: Web/API/Document/touchcancel_event
---
{{APIRef}}

`touchcancel` イベントは、1 つ以上のタッチ点が実装特有の規則で破棄されたとき (例えば、作成されたタッチ点の数が多すぎるなど) に発生します。

| バブリング                   | あり                                                                                     |
| ---------------------------- | ---------------------------------------------------------------------------------------- |
| キャンセル可能               | いいえ                                                                                   |
| インターフェイス             | {{domxref("TouchEvent")}}                                                         |
| イベントハンドラープロパティ | {{ domxref("GlobalEventHandlers.ontouchcancel","ontouchcancel")}} |

## 例

これらのイベントのコード例は、指定のページ「[タッチイベント](/ja/docs/Web/API/Touch_events)」で利用できます。

## ブラウザーの対応

{{Compat("api.Document.touchcancel_event")}}

## 関連情報

- [タッチイベント](/ja/docs/Web/API/Touch_events)
- {{ domxref("GlobalEventHandlers.ontouchcancel","ontouchcancel")}}
- {{domxref("Element")}} を対象としたこのイベント: {{domxref("Element/touchcancel_event", "touchcancel")}}
