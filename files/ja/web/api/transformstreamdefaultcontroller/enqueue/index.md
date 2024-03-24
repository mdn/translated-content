---
title: "TransformStreamDefaultController: enqueue() メソッド"
short-title: enqueue()
slug: Web/API/TransformStreamDefaultController/enqueue
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{DefaultAPISidebar("Streams API")}}

**`enqueue()`** は {{domxref("TransformStreamDefaultController")}} インターフェイスのメソッドで、このストリームの読み取り可能側にある指定されたチャンクをキューに入れます。

読み取り可能なストリームとチャンクについて詳しくは、[読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_streams)を参照してください。

## 構文

```js-nolint
enqueue(chunk)
```

### 引数

- `chunk`
  - : キューに入れられるチャンク。チャンクとは単一のデータのことです。データの種類は問いません。ストリームは様々な型のチャンクを格納することができます。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{jsxref("TypeError")}}
  - : ストリームが読み取り可能ではありません。
    これは、ストリームが `controller.error()` によってエラーになった場合や、コントローラーの `controller.close()` メソッドが名付けられずに閉じられた場合に発生します。

## 例

この例では、エンコードされたチャンクが `enqueue()` メソッドを使用してキューに渡されます。

```js
const textEncoderStream = new TransformStream({
  transform(chunk, controller) {
    controller.enqueue(new TextEncoder().encode(chunk));
  },
  flush(controller) {
    controller.terminate();
  },
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
