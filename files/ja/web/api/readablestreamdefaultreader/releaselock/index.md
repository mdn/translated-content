---
title: "ReadableStreamDefaultReader: releaseLock() メソッド"
short-title: releaseLock()
slug: Web/API/ReadableStreamDefaultReader/releaseLock
l10n:
  sourceCommit: d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{APIRef("Streams")}}

**`releaseLock()`** は {{domxref("ReadableStreamDefaultReader")}} インターフェイスのメソッドで、ストリームのリーダーのロックを解除します。

ロックを解除したときに関連するストリームにエラーが発生した場合、リーダーはその後同様にエラーが発生したようになります。 そうでない場合、リーダーは閉じた状態になります。

リーダーのロックは、保留中の読み取りリクエストが残っている間、つまり、リーダーの {{domxref("ReadableStreamDefaultReader.read()")}} メソッドによって返されたプロミスが終了していない場合、解除できません。 これにより、`TypeError` が発生します。

## 構文

```js-nolint
releaseLock()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{jsxref("TypeError")}}
  - : ソースオブジェクトが `ReadableStreamDefaultReader` でないか、読み取り要求が保留中です。

## 例

```js
function fetchStream() {
  const reader = stream.getReader();

  // ...

  reader.releaseLock();

  // ...
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ReadableStreamDefaultReader.ReadableStreamDefaultReader", "ReadableStreamDefaultReader()")}} コンストラクター
- [読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_streams)
