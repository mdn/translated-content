---
title: SourceBuffer.appendBufferAsync()
slug: Web/API/SourceBuffer/appendBufferAsync
---

{{APIRef("Media Source Extensions")}}{{non-standard_header}}{{SeeCompatTable}}

{{domxref("SourceBuffer")}} インターフェイスの **`appendBufferAsync()`** メソッドは、{{jsxref("ArrayBuffer")}} または {{domxref("ArrayBufferView")}} オブジェクトから `SourceBuffer` にメディアセグメントデータを非同期的に追加するプロセスを開始します。 バッファが追加されると満たされる {{jsxref("Promise")}} を返します。

## 構文

```
appendPromise = sourceBuffer.appendBufferAsync(source);
```

### パラメーター

- `source`
  - : `SourceBuffer` に追加するメディアセグメントデータを含む {{domxref("BufferSource")}}（つまり、{{domxref("ArrayBufferView")}} または {{jsxref("ArrayBuffer")}}）。

### 戻り値

バッファが `SourceBuffer` に正常に追加されたときに満たされる {{jsxref("Promise")}}、または要求を開始できなかった場合は `null`。

## 例

この単純化された非同期関数の例 `fillSourceBuffer()` は、入力パラメーターとして {{domxref("BufferSource")}} の `buffer`、およびバッファからソースメディアを追加する `SourceBuffer` を受け取ります。

```js
async function fillSourceBuffer(buffer, msBuffer) {
  try {
    while(true) {
      await msBuffer.appendBufferAsync(buffer);
    }
  } catch(e) {
    handleException(e);
  }
}
```

## 仕様

現在、仕様の一部ではありません。 これは、**Web Platform Incubator Community Group**（WICG）の後援の下で実験されています。

| 仕様                                                 | 状態                                             | コメント                               |
| ---------------------------------------------------- | ------------------------------------------------ | -------------------------------------- |
| {{SpecName('Media Source Extensions')}} | {{Spec2('Media Source Extensions')}} | 初期定義、このメソッドは含まれません。 |

## ブラウザーの互換性

{{Compat("api.SourceBuffer.appendBufferAsync")}}

## 関連情報

- [Media Source Extensions API](/ja/docs/Web/API/Media_Source_Extensions_API)
- {{domxref("SourceBuffer.appendBuffer()")}}
- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
