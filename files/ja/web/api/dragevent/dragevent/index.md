---
title: "DragEvent: DragEvent() コンストラクター"
short-title: DragEvent()
slug: Web/API/DragEvent/DragEvent
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML Drag and Drop API")}}

このコンストラクターは、合成した {{domxref("DragEvent")}} オブジェクトを作成するために使用します。

このインターフェイスにはコンストラクターがありますが、有用な {{domxref("DataTransfer")}} オブジェクトは、ドラッグ＆ドロップの際にブラウザーが調整する処理とセキュリティモデルを持っているので、スクリプトから作成することはできません。

このインターフェイスは、 {{domxref("MouseEvent")}} および {{domxref("Event")}} のプロパティを継承しています。

## 構文

```js-nolint
new DragEvent(type)
new DragEvent(type, dragEventInit)
```

### 引数

- `type`
  - : イベント名を表す文字列です（[DragEvent のイベントの種類](/ja/docs/Web/API/DragEvent#イベントの種類)を参照）。

- `eventInitDict` {{optional_inline}}
  - : 以下のプロパティを持つオブジェクトです。
    - `dataTransfer` {{optional_inline}}
      - : {{domxref("DataTransfer")}} です。既定値は `null` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
