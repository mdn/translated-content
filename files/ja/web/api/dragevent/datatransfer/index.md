---
title: "DragEvent: dataTransfer プロパティ"
short-title: dataTransfer
slug: Web/API/DragEvent/dataTransfer
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("HTML Drag and Drop API")}}

**`DragEvent.dataTransfer`** プロパティは、ドラッグ操作のデータを（{{domxref("DataTransfer")}} オブジェクトとして）保持します。

このプロパティは {{ReadOnlyInline}} です。

## 値

{{domxref("DataTransfer")}} オブジェクトで、{{domxref("DragEvent","ドラッグイベントのデータ", "", 1)}}が入ります。

このプロパティは、コンストラクターを使用してイベントが作成された場合に `null` となる可能性があります。ブラウザーによって配信される場合には決して `null` にはなりません。

## 例

この例では、 {{domxref("HTMLElement/dragend_event", "dragend")}} イベントハンドラーの中でドラッグ＆ドロップデータへアクセスする方法を説明します。

```js
function processData(d) {
  // データを処理...
}

dragTarget.addEventListener("dragend", (ev) => {
  // ドラッグ＆ドロップのデータ処理を呼び出す
  if (ev.dataTransfer !== null) processData(ev.dataTransfer);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
