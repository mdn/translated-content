---
title: "FileReaderSync: FileReaderSync() コンストラクター"
short-title: FileReaderSync()
slug: Web/API/FileReaderSync/FileReaderSync
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("File API")}}

**`FileReaderSync()`** コンストラクターは、新しい {{domxref("FileReaderSync")}} を作成します。

## 構文

```js-nolint
new FileReaderSync()
```

### 引数

なし。

## 例

次のコードは、[`FileReaderSync`](/ja/docs/Web/API/FileReaderSync) オブジェクトをコンストラクター `FileReaderSync()` を用いて生成し、続いてオブジェクトを使用する様子を示します。

```js
function readFile(blob) {
  const reader = new FileReaderSync();
  postMessage(reader.readAsDataURL(blob));
}
```

> **Note:** このスニペットは {{domxref("Worker")}} の中で使用しなければなりません。同期インターフェイスはメインスレッドでは使用することができないからです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
