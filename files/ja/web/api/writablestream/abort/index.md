---
title: WritableStream.abort()
slug: Web/API/WritableStream/abort
---

{{SeeCompatTable}}{{APIRef("Streams")}}

{{domxref("WritableStream")}} インターフェイスの **`abort()`** メソッドはストリームを中止し、プロデューサーがストリームに正常に書き込むことができなくなり、キューに入れられた書き込みが破棄されてすぐにエラー状態に移行することを通知します。

## 構文

```
var promise = writableStream.abort(reason);
```

### パラメーター

- reason
  - : 人間が読むことができる中止の理由を提供する {{domxref("DOMString")}}。

### 戻り値

{{jsxref("Promise")}}。 `reason` パラメーターで指定された値で満たされます。

### 例外

- TypeError
  - : 中止しようとしているストリームは {{domxref("WritableStream")}} ではないか、ロックされています。

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

// 必要に応じて、後でストリームを中止します
writableStream.abort();
```

## 仕様

| 仕様                                                         | 状態                         | コメント |
| ------------------------------------------------------------ | ---------------------------- | -------- |
| {{SpecName("Streams","#ws-abort","abort()")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.WritableStream.abort")}}
