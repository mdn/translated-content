---
title: "DataTransferItem: type プロパティ"
short-title: type
slug: Web/API/DataTransferItem/type
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransferItem.type`** プロパティは読み取り専用で、ドラッグデータ項目を表す {{domxref("DataTransferItem")}} オブジェクトの種類（形式）を返すものです。 `type` は一般的に MIME タイプで指定される Unicode 文字列ですが、MIME タイプである必要はありません。

型の種類の例は、 `text/plain` と `text/html` です。

## 値

ドラッグデータ項目の種類を表す文字列です。

## 例

この例では、 `type` プロパティを使用しています。

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
    } else if (item.kind === "string" && item.type.match("^text/uri-list")) {
      // Drag data item is URI
      console.log("… Drop: URI");
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

- {{domxref("DataTransfer.type()")}}
- [一般的な MIME タイプの一覧](/ja/docs/Web/HTTP/Guides/MIME_types/Common_types)
