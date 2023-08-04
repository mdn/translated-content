---
title: "HTML 属性: for"
slug: Web/HTML/Attributes/for
l10n:
  sourceCommit: bb7e3c7303746408072ddf4cc646e28d7e14214a
---

{{HTMLSidebar}}

**`for`** 属性は {{htmlelement("label")}} と {{htmlelement("output")}} で利用できる属性です。 `<label>` 要素上で使用された場合、このラベルが説明するフォーム要素を示します。 `<output>` 要素上で使用された場合、その出力欄で使用される値を表す要素間の関係を明示的に示すことができます。

## 使用方法

`<label>` の属性として使用された場合、 `for` 属性はそのラベルが関連するフォーム要素の `id` 値を保持します。

```html
<label for="username">Your name</label> <input type="text" id="username" />
```

`<output>` の属性として使用された場合、 `for` 属性はその出力を作成するために使用される要素の `id` 値を、空白で区切ったリストである値を保持します。

```html
<input type="range" id="b" name="b" value="50" /> +
<input type="number" id="a" name="a" value="10" /> =
<output name="result" for="a b">60</output>
```

## 例

{{htmlelement("label")}} および {{htmlelement("output")}} の要素ページの使用例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
