---
title: "CharacterData: replaceData() メソッド"
slug: Web/API/CharacterData/replaceData
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("DOM")}}

**`replaceData()`** は {{domxref("CharacterData")}} インターフェイスのメソッドで、この `CharacterData` ノードにある既存のテキストの特定の数の文字を取り除き、指定されたテキストの文字で置き換えます。

## 構文

```js-nolint
characterData.replaceData(offset, count, data)
```

### 引数

- `offset`
  - : データの先頭から何文字目に挿入するかを指定します。
    `0` は文字列の先頭の文字を表します。
- `count`
  - : 指定されたデータで置換する文字数。
- `data`
  - : 挿入するデータです。

### 返値

なし。

## 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : `offset` または `count` が負の値であるか、 `offset` が含まれるデータの長さよりも大きい場合に発生します。

## 例

```html
<span>Result: </span>A long string.
```

```js
const span = document.querySelector("span");
const textnode = span.nextSibling;

textnode.replaceData(2, 4, "replaced");
```

{{EmbedLiveSample("Example", "100%", 50)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CharacterData.appendData()")}}
- {{domxref("CharacterData.deleteData()")}}
- {{domxref("CharacterData.insertData()")}}
- {{domxref("CharacterData.data")}}
