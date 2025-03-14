---
title: "CharacterData: substringData() メソッド"
slug: Web/API/CharacterData/substringData
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("DOM")}}

**`substringData()`** は {{domxref("CharacterData")}} インターフェイスのメソッドで、既存のデータの一部を、指定した位置から始まり、指定した文字数分のデータを返します。

## 構文

```js-nolint
  domString = characterData.substringData(offset, count)
```

### 引数

- `offset`
  - : 返す部分文字列に含める最初の文字の位置です。
    `0` は文字列の最初の文字を表します。
- `count`
  - : 返す文字数です。

### 返値

文字列型で部分文字列を返します。

## 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : `offset` + `count` が内容のデータの長さよりも大きかった場合に発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
