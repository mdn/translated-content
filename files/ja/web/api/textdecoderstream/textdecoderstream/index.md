---
title: "TextDecoderStream: TextDecoderStream() コンストラクター"
slug: Web/API/TextDecoderStream/TextDecoderStream
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Encoding API")}}

**`TextDecoderStream()`** コンストラクターは、新しい {{domxref("TextDecoderStream")}} オブジェクトを生成します。これは、あるバイナリーエンコーディングのテキストのストリームを文字列に変換するために使用します。

## 構文

```js-nolint
new TextDecoderStream(label)
new TextDecoderStream(label, options)
```

### 引数

- `label`
  - : 文字列で、既定値は `utf-8` です。
    [何れかの有効なラベル](/ja/docs/Web/API/Encoding_API/Encodings)にすることができます。
- `options` {{optional_inline}}
  - : 次のプロパティを持つオブジェクトです。
    - `fatal`
      - : 論理値で、このオブジェクトが無効なデータをデコードした場合に {{jsxref("TypeError")}} を発生させる必要があるかどうかを示します。
        既定値では `false` であり、これはデコードする際に不正なデータを置換文字で置き換えることを意味します。

### 例外

- {{jsxref("RangeError")}}
  - : `label` の値が未知の場合、または `'replacement'` デコードアルゴリズム（`"iso-2022-cn"` または `"iso-2022-cn-ext"`）につながる値のいずれかである場合に発生します。

## 例

次の例は、{{domxref("Window/fetch", "fetch()")}} の呼び出しから取得したバイナリーデータをデコードする方法を示しています。
このデータには `label` が渡されていないので、UTF-8 として解釈されます。

```js
const response = await fetch("https://example.com");
const stream = response.body.pipeThrough(new TextDecoderStream());
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
