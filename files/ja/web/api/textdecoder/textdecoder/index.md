---
title: "TextDecoder: TextDecoder() コンストラクター"
slug: Web/API/TextDecoder/TextDecoder
l10n:
  sourceCommit: d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{APIRef("Encoding API")}}

**`TextDecoder()`** コンストラクターは、引数で指定されたエンコーディング用に新しく作成された {{DOMxRef("TextDecoder")}} オブジェクトを返します。

## 構文

```js-nolint
new TextDecoder()
new TextDecoder(label)
new TextDecoder(label, options)
```

### 引数

- `label` {{optional_inline}}
  - : 文字列で、既定値は `"utf-8"` です。
    これは[何れかの有効なラベル](/ja/docs/Web/API/Encoding_API/Encodings)です。
- `options` {{optional_inline}}
  - : 次のプロパティを持つオブジェクトです。
    - `fatal`
      - : 論理値で、無効なデータをデコードした場合に {{DOMxRef("TextDecoder.decode()")}} メソッドが {{jsxref("TypeError")}} を発生させるかどうかを示します。
        既定値では `false` であり、これはデコードする際に不正なデータを置換文字で置き換えることを意味します。

    - `ignoreBOM`
      - : 論理値で、[バイトオーダーマーク](https://www.w3.org/International/questions/qa-byte-order-mark)を無視するか否かを示します。
        既定値は `false` です。

### 例外

- {{jsxref("RangeError")}}
  - : `label` の値が未知の場合、または `'replacement'` デコードアルゴリズムにつながる値のいずれか（`"iso-2022-cn"` または `"iso-2022-cn-ext"`）になっている場合に発生します。

## 例

```js
const textDecoder1 = new TextDecoder("iso-8859-2");
const textDecoder2 = new TextDecoder();
const textDecoder3 = new TextDecoder("csiso2022kr", { fatal: true }); // TypeError 例外を発生できるようにします。
const textDecoder4 = new TextDecoder("iso-2022-cn"); // RangeError 例外が発生します。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{DOMxRef("TextDecoder")}} インターフェイス。
