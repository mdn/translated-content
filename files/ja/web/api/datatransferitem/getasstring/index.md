---
title: DataTransferItem.getAsString()
slug: Web/API/DataTransferItem/getAsString
l10n:
  sourceCommit: da88b2f3a23b9d93f083003f13c06f9d96073f6a
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransferItem.getAsString()`** メソッドは、項目の {{domxref("DataTransferItem.kind", "kind")}} が _プレーン Unicode 文字列_ （すなわち `kind` が `string`）である場合に、ドラッグデータ項目の文字列データを引数に指定してコールバックを呼び出すメソッドです。

## 構文

```js-nolint
// アロー関数
getAsString((data) => { /* … */ } )

// コールバック関数
getAsString(callbackFn)

// インラインコールバック関数
getAsString(function(data) { /* … */ })
```

### 引数

- `callbackFn`
  - : 以下の引数を受け取るコールバック関数です。
    - `data`
      - : {{domxref("DataTransferItem", "データ転送アイテムの", "", 1)}}文字列データです。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例では、 {{domxref("HTMLElement/drop_event", "drop")}} イベントハンドラーにおいて、 `getAsString()` メソッドを _インライン関数_ として使用しているところを示しています。

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

- {{domxref("DataTransfer.getData()")}}
