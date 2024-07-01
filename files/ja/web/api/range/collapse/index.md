---
title: "Range: collapse() メソッド"
short-title: collapse()
slug: Web/API/Range/collapse
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("DOM")}}

**`Range.collapse()`** メソッドは、 {{domxref("Range")}} を境界点の一つに折りたたみます。

折りたたまれた {{domxref("Range")}} は空で、コンテンツを含まず、 DOM ツリーの単一の点を指定します。 {{domxref("Range")}} が既に折りたたまれているかどうかを調べるには、 {{domxref("Range.collapsed")}} プロパティを参照してください。

## 構文

```js-nolint
collapse()
collapse(toStart)
```

### 引数

- `toStart` {{optional_inline}}
  - : 論理値です。 `true` の場合は {{domxref("Range")}} を先頭側に、`false` の場合は末尾側に折りたたみます。省略すると既定で `false` {{experimental_inline}} となります。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
const range = document.createRange();

const referenceNode = document.getElementsByTagName("div").item(0);
range.selectNode(referenceNode);
range.collapse(true);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)
