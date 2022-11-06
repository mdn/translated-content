---
title: ReadableStreamBYOBReader.releaseLock()
slug: Web/API/ReadableStreamBYOBReader/releaseLock
---

{{SeeCompatTable}}{{APIRef("Streams")}}

{{domxref("ReadableStreamBYOBReader")}} インターフェイスの **`releaseLock()`** メソッドは、ストリーム上のリーダーのロックを解除します。 ロックを解除すると、リーダーはアクティブではなくなります。

ロックを解除したときに関連するストリームにエラーが発生した場合、リーダーはその後同様にエラーが発生したようになります。 そうでない場合、リーダーは閉じた状態になります。

リーダーのロックは、保留中の読み取り要求が残っている間、つまり、リーダーの {{domxref("ReadableStreamBYOBReader.read()")}} メソッドによって返された promise が終了していない場合、解除できません。 これにより、`TypeError` がスローされます。

## 構文

```
readableStreamBYOBReader.releaseLock();
```

### パラメーター

なし。

### 戻り値

`undefined`。

### 例外

- TypeError
  - : ソースオブジェクトが `ReadableStreamBYOBReader` でないか、読み取り要求が保留中です。

## 例

未定。

## 仕様

| 仕様                                                                                     | 状態                         | コメント |
| ---------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Streams","#byob-reader-release-lock","releaseLock()")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ReadableStreamBYOBReader.releaseLock")}}
