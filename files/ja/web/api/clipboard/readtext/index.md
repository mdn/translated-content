---
title: Clipboard.readText()
slug: Web/API/Clipboard/readText
---

{{APIRef("Clipboard API")}}

**{{domxref("Clipboard")}}** インターフェイスの **`readText()`** メソッドは、システムクリップボードのテキストの内容のコピーに解決されるプロミス ({{jsxref("Promise")}}) を返します。

クリップボードからデータを読み込むには、[権限 API](/ja/docs/Web/API/Permissions_API) の `"clipboard-read"` 権限を得る必要があります。

## 構文

```js
readText();
```

### 引数

なし。

### 返値

クリップボードのテキストの内容を持つ文字列に解決される、プロミス ({{jsxref("Promise")}}) オブジェクト。クリップボードが空であったり、テキストがないか、クリップボードの内容を表す {{domxref("DataTransfer")}} オブジェクトがテキストの表現を持たない場合は、空文字列を返します。

テキストでない内容をクリップボードから読むためには、代わりに {{domxref("Clipboard.read", "read()")}} メソッドを使ってください。クリップボードへのテキストの書き込みには、{{domxref("Clipboard.writeText", "writeText()")}} を使ってください。

## 例

この使用例は、クリップボードからテキストの内容を取得し、ある要素の内容にその取得されたテキストを設定します。

```js
navigator.clipboard
  .readText()
  .then((clipText) => (document.getElementById("outbox").innerText = clipText));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [クリップボード API](/ja/docs/Web/API/Clipboard_API)
- [Async Clipboard API demo on Glitch](https://async-clipboard-api.glitch.me/)
- [Image support for Async Clipboard article](https://web.dev/async-clipboard/)
- {{domxref("Clipboard.writeText()")}}
- {{domxref("Clipboard.write()")}}
