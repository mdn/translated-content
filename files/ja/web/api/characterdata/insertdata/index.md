---
title: "CharacterData: insertData() メソッド"
slug: Web/API/CharacterData/insertData
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("DOM")}}

**`insertData()`** は {{domxref("CharacterData")}} インターフェイスのメソッドで、指定されたデータをこの `CharacterData` ノードの現在のデータの、既存のデータの先頭からのオフセットの位置に挿入します。
指定されたデータは、既存のデータに継ぎ足されます。

## 構文

```js-nolint
characterData.insertData(offset, data)
```

### 引数

- `offset`
  - : 提供されたデータを挿入する文字数単位での位置です。
    `0` は文字列の最初の文字を表します。
- `data`
  - : 挿入するデータです。

### 返値

なし。

## 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : offset が負の値であるか、入っているデータの長さよりも大きい場合に発生します。

## 例

```html
<span>結果: </span>A string.
```

```js
const span = document.querySelector("span");
const textnode = span.nextSibling;

textnode.insertData(2, "long ");
```

{{EmbedLiveSample("Example", "100%", 50)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CharacterData.appendData()")}}, {{domxref("CharacterData.deleteData()")}}, {{domxref("CharacterData.replaceData()")}}
- {{domxref("CharacterData.data")}}
