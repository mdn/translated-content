---
title: "DataTransferItem: getAsString() メソッド"
short-title: getAsString()
slug: Web/API/DataTransferItem/getAsString
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransferItem.getAsString()`** メソッドは、項目の {{domxref("DataTransferItem.kind", "kind")}} が _プレーン Unicode 文字列_ （すなわち `kind` が `string`）である場合に、ドラッグデータ項目の文字列データを引数に指定してコールバックを呼び出すメソッドです。

## 構文

```js-nolint
getAsString(callbackFn)
```

### 引数

- `callbackFn`
  - : 以下の引数を受け取るコールバック関数です。
    - `data`
      - : {{domxref("DataTransferItem")}} の文字列データです。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例では、 {{domxref("HTMLElement/drop_event", "drop")}} イベントハンドラーにおいて、 `getAsString()` メソッドを _インライン関数_ として使用しているところを示しています。

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

- {{domxref("DataTransfer.getData()")}}
