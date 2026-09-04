---
title: "TransformStreamDefaultController: terminate() メソッド"
short-title: terminate()
slug: Web/API/TransformStreamDefaultController/terminate
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

**`terminate()`** は {{domxref("TransformStreamDefaultController")}} インターフェイスのメソッドで、このストリームの読み取り可能側を閉じ、書き込み可能側をエラーにします。

## 構文

```js-nolint
terminate()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

下記の例では、 {{domxref("TransformStreamDefaultController")}} で `terminate()` メソッドを呼び出しています。

```js
controller.terminate();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
