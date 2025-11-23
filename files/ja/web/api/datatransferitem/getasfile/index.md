---
title: "DataTransferItem: getAsFile() メソッド"
short-title: getAsFile()
slug: Web/API/DataTransferItem/getAsFile
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{APIRef("HTML Drag and Drop API")}}

アイテムがファイルの場合、 **`DataTransferItem.getAsFile()`** メソッドはドラッグデータ項目の {{domxref("File")}} オブジェクトを返します。項目がファイルでない場合、このメソッドは `null` を返します。

## 構文

```js-nolint
getAsFile()
```

### 引数

なし。

### 返値

ドラッグデータ項目がファイルである場合、 {{domxref("File")}} オブジェクトが返されます。それ以外の場合は `null` が返されます。

## 例

この例が、 `getAsFile()` メソッドを {{domxref("HTMLElement/drop_event", "drop")}} イベントハンドラー内で使用するものです。

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

- {{domxref("DataTransfer.files")}}
