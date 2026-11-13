---
title: "DataTransferItem: kind プロパティ"
short-title: kind
slug: Web/API/DataTransferItem/kind
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransferItem.kind`** プロパティは読み取り専用で、 _ドラッグデータ項目_ の種類（テキストまたはファイル）を表す {{domxref("DataTransferItem")}} オブジェクトを返すものです。

## 値

ドラッグデータ項目の種類を表す文字列です。以下の値のいずれかでなければなりません。

- `'file'`
  - : ドラッグデータ項目がファイルの場合。
- `'string'`
  - : ドラッグデータ項目の種類が _プレーン Unicode 文字列_ である場合。

## 例

この例では、 `kind` プロパティを使用しています。

```js
function dropHandler(ev) {
  console.log("Drop");
  ev.preventDefault();
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string" && item.type.match("^text/plain")) {
      // This item is the target node
      item.getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (item.kind === "string" && item.type.match("^text/html")) {
      // Drag data item is HTML
      console.log("… Drop: HTML");
    } else if (item.kind === "file" && item.type.match("^image/")) {
      // Drag data item is an image file
      const f = item.getAsFile();
      console.log("… Drop: File");
    }
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ドラッグ & ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- [ドラッグ操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [推奨されるドラッグ型](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
