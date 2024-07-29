---
title: "TransformStreamDefaultController: error() メソッド"
short-title: error()
slug: Web/API/TransformStreamDefaultController/error
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{DefaultAPISidebar("Streams API")}}

**`error()`** は {{domxref("TransformStreamDefaultController")}} インターフェイスのメソッドで、両側のストリームをエラーにします。これ以上何か操作をすると、指定されたエラーメッセージとともに失敗するようになり、キュー内のチャンクは破棄されます。

## 構文

```js-nolint
error(reason)
```

### 引数

- `reason`
  - : それ以降のストリームの操作において返されるエラーメッセージを格納した文字列。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例では、チャンクが変換できなかったときに `error()` メソッドを使用しています。

```js
const transformContent = {
  start() {
    /* … */
  },
  async transform(chunk, controller) {
    try {
      chunk = await applyMyTransformation(chunk);
    } catch (err) {
      controller.error(`Unable to transform chunk: ${err}`);
    }
    // …
  },
  // …
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
