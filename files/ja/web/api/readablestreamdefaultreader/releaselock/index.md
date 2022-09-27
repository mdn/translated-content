---
title: ReadableStreamDefaultReader.releaseLock()
slug: Web/API/ReadableStreamDefaultReader/releaseLock
---

{{APIRef("Streams")}}

{{domxref("ReadableStreamDefaultReader")}} インターフェイスの `releaseLock()` メソッドは、ストリームのリーダーのロックを解除します。

ロックを解除したときに関連するストリームにエラーが発生した場合、リーダーはその後同様にエラーが発生したようになります。 そうでない場合、リーダーは閉じた状態になります。

リーダーのロックは、保留中の読み取り要求が残っている間、つまり、リーダーの {{domxref("ReadableStreamDefaultReader.read()")}} メソッドによって返された promise が終了していない場合、解除できません。 これにより、`TypeError` がスローされます。

## 構文

```
readableStreamDefaultReader.releaseLock();
```

### パラメーター

なし。

### Return value

`undefined`。

### 例外

- TypeError
  - : ソースオブジェクトが `ReadableStreamDefaultReader` でないか、読み取り要求が保留中です。

## 例

```js
function fetchStream() {
  const reader = stream.getReader();

  ...

  reader.releaseLock()

  ...
}
```

## 仕様

| 仕様                                                                                         | 状態                         | コメント |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Streams","#default-reader-release-lock","releaseLock()")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ReadableStreamDefaultReader.releaseLock")}}
