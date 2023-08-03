---
title: DataTransferItem.type
slug: Web/API/DataTransferItem/type
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransferItem.type`** プロパティは読み取り専用で、ドラッグデータ項目を表す {{domxref("DataTransferItem")}} オブジェクトの種類（形式）を返すものです。 `type` は一般的に MIME タイプで指定される Unicode 文字列ですが、MIME タイプである必要はありません。

型の種類の例は、 `text/plain` と `text/html` です。

## 値

ドラッグデータ項目の種類を表す文字列です。

## 例

この例では、 `type` プロパティを使用しています。

```js
function drop_handler(ev) {
  console.log("Drop");
  ev.preventDefault();
  const data = ev.dataTransfer.items;
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].kind === "string" && data[i].type.match("^text/plain")) {
      // This item is the target node
      data[i].getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (data[i].kind === "string" && data[i].type.match("^text/html")) {
      // Drag data item is HTML
      console.log("… Drop: HTML");
    } else if (
      data[i].kind === "string" &&
      data[i].type.match("^text/uri-list")
    ) {
      // Drag data item is URI
      console.log("… Drop: URI");
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

- {{domxref("DataTransfer.type()")}}
- [MIME タイプの不完全なリスト](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
