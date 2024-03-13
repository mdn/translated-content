---
title: "ReadableStreamBYOBReader: releaseLock() メソッド"
short-title: releaseLock()
slug: Web/API/ReadableStreamBYOBReader/releaseLock
l10n:
  sourceCommit: d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{APIRef("Streams")}}

**`releaseLock()`** は {{domxref("ReadableStreamBYOBReader")}} インターフェイスのメソッドで、ストリーム上のリーダーのロックを解除します。
ロックを解除すると、リーダーはアクティブではなくなります。

ロックを解除したときに関連するストリームにエラーが発生した場合、リーダーはその後同様にエラーが発生したようになります。 そうでない場合、リーダーは閉じた状態になります。

保留中の読み込みリクエストがある間にリーダーのロックが解除された場合、リーダーの {{domxref("ReadableStreamBYOBReader.read()")}} メソッドによって返されるプロミスは、直ちに `TypeError` で拒否されます。
未読のチャンクはストリームの内部キューに残り、後で新しいリーダーを取得することで読み取ることができます。

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
  - : ソースオブジェクトが `ReadableStreamBYOBReader` ではない場合に発生します。

## 例

簡単な例を下記に示します。
ストリーム上にリーダーが作成されると同時にロックが作成されます。

```js
const reader = stream.getReader({ mode: "byob" });
reader.releaseLock();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ReadableStreamBYOBReader.ReadableStreamBYOBReader", "ReadableStreamBYOBReader()")}} コンストラクター
- [読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)
