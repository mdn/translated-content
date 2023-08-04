---
title: DataTransferItem.kind
slug: Web/API/DataTransferItem/kind
l10n:
  sourceCommit: 78ad6b35d403777f8a7547c981300db3906ec7ef
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransferItem.kind`** プロパティは読み取り専用で、 _ドラッグデータ項目_ の種類（テキストまたはファイル）を表す {{domxref("DataTransferItem")}} を返すものです。

## 値

ドラッグデータ項目の種類を表す文字列です。以下の値のいずれかでなければなりません。

- `'file'`
  - : ドラッグデータ項目がファイルの場合。
- `'string'`
  - : ドラッグデータ項目の種類が _プレーン Unicode 文字列_ である場合。

## 例

この例では、 `kind` プロパティを使用しています。

```js
function drop_handler(ev) {
  console.log("Drop");
  ev.preventDefault();
  const data = event.dataTransfer.items;
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].kind === "string" && data[i].type.match("^text/plain")) {
      // This item is the target node
      data[i].getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (data[i].kind === "string" && data[i].type.match("^text/html")) {
      // Drag data item is HTML
      console.log("… Drop: HTML");
    } else if (data[i].kind === "file" && data[i].type.match("^image/")) {
      // Drag data item is an image file
      const f = data[i].getAsFile();
      console.log("… Drop: File ");
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
- [推奨されるドラッグ型](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
