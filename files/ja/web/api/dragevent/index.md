---
title: DragEvent
slug: Web/API/DragEvent
---

{{APIRef("HTML Drag and Drop API")}}

**`DragEvent`** インターフェイスは、ドラッグ＆ドロップ操作を表す {{domxref("Event","DOM イベント", "", 1)}}です。ユーザーはタッチ面でポインティングデバイス（マウスなど）を置くことによりドラッグを開始して、ポインタを新たな場所（別の DOM 要素など）にドラッグします。アプリケーションは独自の方法で、ドラッグ＆ドロップの操作を自由に解釈できます。

このインターフェイスは、{{domxref("MouseEvent")}} および {{domxref("Event")}} からプロパティを継承しています。

{{InheritanceDiagram}}

## プロパティ

- {{domxref('DragEvent.dataTransfer')}} {{readonlyInline}}
  - : ドラッグ＆ドロップ操作で動かされているデータです。

## コンストラクター

このインターフェイスにはコンストラクターがありますが、役に立つ DataTransfer オブジェクトをスクリプトから作成することはできません。これは {{domxref("DataTransfer")}} オブジェクトに、ドラッグ＆ドロップ中にブラウザーによって調整される処理やセキュリティのモデルがあるためです。

- {{domxref("DragEvent.DragEvent", "DragEvent()")}}
  - : 合成された信頼されてない DragEvent を作成します。

## イベントの種類

- {{domxref("HTMLElement/drag_event", "drag")}}
  - : このイベントは、要素や選択テキストのドラッグが開始されているときに発生します。
- {{domxref("HTMLElement/dragend_event", "dragend")}}
  - : このイベントは、（マウスボタンを離したり、Esc キーを押下したりして）ドラッグ操作が終了したときに発生します。
- {{domxref("HTMLElement/dragenter_event", "dragenter")}}
  - : このイベントは、ドラッグされた要素や選択テキストが有効なドロップ先に入ったときに発生します。
- {{domxref("HTMLElement/dragleave_event", "dragleave")}}
  - : このイベントは、ドラッグされた要素や選択テキストが有効なドロップ先から出たときに発生します。
- {{domxref("HTMLElement/dragover_event", "dragover")}}
  - : このイベントは、要素や選択テキストが有効なドロップ先の上をドラッグされたときに発生します（マウスが動いていない場合は 50 ミリ秒ごとに、それ以外は 5 ミリ秒ごと（遅い動作）か 1 ミリ秒ごと（速い動作）の間隔です。この発生パターンは {{domxref("Element/mouseover_event", "mouseover")}} とは異なります）。
- {{domxref("HTMLElement/dragstart_event", "dragstart")}}
  - : このイベントは、ユーザーが要素や選択テキストのドラッグを開始したときに発生します。
- {{domxref("HTMLElement/drop_event", "drop")}}
  - : このイベントは、要素や選択テキストが有効なドロップ先にドロップされたときに発生します。

## GlobalEventHandlers

- {{domxref('GlobalEventHandlers.ondrag')}}
  - : {{domxref("HTMLElement/drag_event", "drag")}} イベントの{{domxref('GlobalEventHandlers','グローバルイベントハンドラー', "", 1)}}です。
- {{domxref('GlobalEventHandlers.ondragend')}}
  - : {{domxref("HTMLElement/dragend_event", "dragend")}} イベントの{{domxref('GlobalEventHandlers','グローバルイベントハンドラー', "", 1)}}です。
- {{domxref('GlobalEventHandlers.ondragenter')}}
  - : {{domxref("HTMLElement/dragenter_event", "dragenter")}} イベントの{{domxref('GlobalEventHandlers','グローバルイベントハンドラー', "", 1)}}です。
- {{domxref('GlobalEventHandlers.ondragleave')}}
  - : {{domxref("HTMLElement/dragleave_event", "dragleave")}} イベントの{{domxref('GlobalEventHandlers','グローバルイベントハンドラー', "", 1)}}です。
- {{domxref('GlobalEventHandlers.ondragover')}}
  - : {{domxref("HTMLElement/dragover_event", "dragover")}} イベントの{{domxref('GlobalEventHandlers','グローバルイベントハンドラー', "", 1)}}です。
- {{domxref('GlobalEventHandlers.ondragstart')}}
  - : {{domxref("HTMLElement/dragstart_event", "dragstart")}} イベントの{{domxref('GlobalEventHandlers','グローバルイベントハンドラー', "", 1)}}です。
- {{domxref('GlobalEventHandlers.ondrop')}}
  - : {{domxref("HTMLElement/drop_event", "drop")}} イベントの{{domxref('GlobalEventHandlers','グローバルイベントハンドラー', "", 1)}}です。

## 例

各プロパティ、コンストラクター、イベントタイプおよびグローバルイベントハンドラーの例は、それぞれのリファレンスページに掲載しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- [ドラッグ操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [推奨されるドラッグの種類](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [複数のアイテムのドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
