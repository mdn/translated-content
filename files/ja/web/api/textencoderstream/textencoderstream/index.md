---
title: "TextEncoderStream: TextEncoderStream() コンストラクター"
slug: Web/API/TextEncoderStream/TextEncoderStream
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Encoding API")}}

**`TextEncoderStream()`** コンストラクター、文字列のストリームを UTF-8 エンコーディングを使用してバイト列に変換するために使用する、新しい {{domxref("TextEncoderStream")}} オブジェクトを作成します。

## 構文

```js-nolint
new TextEncoderStream()
```

### 引数

なし。

## 例

この例では、`TextEncoderStream` を作成してテキストのストリームのアップロードに使用しています。

```js
const body = textStream.pipeThrough(new TextEncoderStream());
fetch("/dest", {
  method: "POST",
  body,
  headers: { "Content-Type": "text/plain; charset=UTF-8" },
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
