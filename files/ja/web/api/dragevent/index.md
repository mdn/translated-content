---
title: DragEvent
slug: Web/API/DragEvent
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("HTML Drag and Drop API")}}

**`DragEvent`** インターフェイスは、ドラッグ＆ドロップ操作を表す [DOM イベント](/ja/docs/Web/API/Event)です。ユーザーは、ポインティングデバイス（マウスなど）をタッチ面に置いてポインターを動かし、新しい場所（別の DOM 要素など）へドラッグを開始します。アプリケーションは独自の方法で、ドラッグ＆ドロップ操作を解釈できます。

このインターフェイスは、{{domxref("MouseEvent")}} および {{domxref("Event")}} からプロパティを継承しています。

{{InheritanceDiagram}}

## コンストラクター

このインターフェイスにはコンストラクターがありますが、役に立つ DataTransfer オブジェクトをスクリプトから作成することはできません。これは {{domxref("DataTransfer")}} オブジェクトに、ドラッグ＆ドロップ中にブラウザーによって調整される処理やセキュリティのモデルがあるためです。

- {{domxref("DragEvent.DragEvent", "DragEvent()")}}
  - : 合成された、信頼されていない DragEvent を作成します。

## インスタンスプロパティ

- {{domxref('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : ドラッグ＆ドロップ操作で転送されるデータです。

## イベントの種類

- {{domxref("HTMLElement/drag_event", "drag")}}
  - : このイベントは、要素や選択テキストをドラッグしている間に繰り返し発生します。発生頻度はブラウザー、オペレーティングシステム、ポインターの動きによって異なるため、間隔が一定であることを前提にしないでください。
- {{domxref("HTMLElement/dragend_event", "dragend")}}
  - : このイベントは、（マウスボタンを離したり、Esc キーを押下したりして）ドラッグ操作が終了したときに発生します。
- {{domxref("HTMLElement/dragenter_event", "dragenter")}}
  - : このイベントは、ドラッグされた要素や選択テキストが有効なドロップ先に入ったときに発生します。
- {{domxref("HTMLElement/dragleave_event", "dragleave")}}
  - : このイベントは、ドラッグされた要素や選択テキストが有効なドロップ先から出たときに発生します。
- {{domxref("HTMLElement/dragover_event", "dragover")}}
  - : このイベントは、要素や選択テキストをドロップ先の候補の上でドラッグしている間に繰り返し発生します。発生頻度はブラウザー、オペレーティングシステム、ポインターの動きによって異なるため、間隔が一定であることを前提にしないでください。
- {{domxref("HTMLElement/dragstart_event", "dragstart")}}
  - : このイベントは、ユーザーが要素や選択テキストのドラッグを開始したときに発生します。
- {{domxref("HTMLElement/drop_event", "drop")}}
  - : このイベントは、要素や選択テキストが有効なドロップ先にドロップされたときに発生します。

## 例

各プロパティ、コンストラクター、イベントタイプおよびグローバルイベントハンドラーの例は、それぞれのリファレンスページに掲載しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- [ドラッグ操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [ドラッグデータストアでの作業](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
