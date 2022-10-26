---
title: DragEvent.dataTransfer
slug: Web/API/DragEvent/dataTransfer
---

{{APIRef("HTML Drag and Drop API")}}

**`DragEvent.dataTransfer`** プロパティは、ドラッグ操作のデータを（{{domxref("DataTransfer")}} オブジェクトとして）保持します。

このプロパティは {{readonlyInline}} です。

## 値

{{domxref("DataTransfer")}} オブジェクトで、{{domxref("DragEvent","ドラッグイベントのデータ", "", 1)}}が入ります。

## 例

この例では、 {{domxref("HTMLElement/dragend_event", "dragend")}} イベントハンドラーの中でドラッグ＆ドロップデータへアクセスする方法を説明します。

```js
function processData(d) {
   // データを処理...
}

dragTarget.addEventListener("dragend", function(ev) {
   // ドラッグ＆ドロップのデータ処理を呼び出す
   if (ev.dataTransfer !== null) processData(ev.dataTransfer);
 }, false);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
