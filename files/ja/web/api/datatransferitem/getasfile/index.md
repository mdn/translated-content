---
title: DataTransferItem.getAsFile()
slug: Web/API/DataTransferItem/getAsFile
l10n:
  sourceCommit: da88b2f3a23b9d93f083003f13c06f9d96073f6a
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

- {{domxref("File")}}
  - : ドラッグデータ項目がファイルである場合、 {{domxref("File")}} オブジェクトが返されます。それ以外の場合は `null` が返されます。

## 例

この例が、 `getAsFile()` メソッドを {{domxref("HTMLElement/drop_event", "drop")}} イベントハンドラー内で使用するものです。

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

- {{domxref("DataTransfer.files")}}
