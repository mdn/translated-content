---
title: WritableStreamDefaultWriter.releaseLock()
slug: Web/API/WritableStreamDefaultWriter/releaseLock
---

{{APIRef("Streams")}}{{SeeCompatTable}}

{{domxref("WritableStreamDefaultWriter")}} インターフェイスの **`releaseLock()`** メソッドは、対応するストリームのライターのロックを解除します。 ロックを解除すると、ライターはアクティブではなくなります。 ロックを解除したときに関連するストリームにエラーが発生した場合、ライターはこれ以降同じようにエラーが発生したように見えます。 そうでない場合、ライターは閉じられたように見えます。

## 構文

```
writableStreamDefaultWritere.releaseLock()
```

### パラメーター

なし。

### 戻り値

`undefined`。

## 例

```js
const writableStream = new WritableStream({
  write(chunk) {
    ...
  },
  close() {
    ...
  },
  abort(err) {
    ...
  }
}, queuingStrategy);

...

const writer = writableStream.getWriter();

...

// 必要に応じて、ストリームのライターのロックを解除します
writer.releaseLock();
```

## 仕様

| 仕様                                                                                         | 状態                         | コメント |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('Streams','#default-reader-release-lock','releaseLock()')}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.WritableStreamDefaultWriter.releaseLock")}}
