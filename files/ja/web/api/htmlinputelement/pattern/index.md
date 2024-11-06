---
title: "HTMLInputElement: pattern プロパティ"
short-title: pattern
slug: Web/API/HTMLInputElement/pattern
l10n:
  sourceCommit: a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{ APIRef("HTML DOM") }}

**`pattern`** は {{DOMxRef("HTMLInputElement")}} インターフェイスのプロパティで、空ではない {{HTMLElement("input")}} の値が一致すべき[正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions)を表します。これは、{{HTMLElement("input")}} 要素の [`pattern`](/ja/docs/Web/HTML/Attributes/pattern) 属性を反映します。

`pattern` プロパティは、`text`、`search`、`url`、`tel`、`email`、`password`の型で有効です。これは、入力フィールドの {{DOMxRef("HTMLInputElement.value", "value")}} が[制約検証](/ja/docs/Web/HTML/Constraint_validation)を通過するために一致する必要がある正規表現を定義します。

空ではない値が制約に適合しない場合、{{domxref('ValidityState')}} オブジェクトの読み取り専用プロパティである {{domxref('ValidityState.patternMismatch','patternMismatch')}} が true になります。

## 値

文字列です。

## 例

```js
const inputElement = document.getElementById("year");
console.log(input.pattern);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}}
- {{DOMXref("HTMLInputElement.value")}}
- [クライアント側の検証](/ja/docs/Web/HTML/Element/input#クライアント側の検証)
- {{CSSXref(":valid")}} および {{CSSXref(":invalid")}} 擬似クラス
