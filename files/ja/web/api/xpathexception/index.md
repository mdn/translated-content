---
title: XPathException
slug: Web/API/XPathException
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("DOM XPath")}}{{Deprecated_Header}}

[DOM XPath API](/ja/docs/Web/XPath) において、 **XPathException`** インターフェイスは XPath の演算処理中に遭遇する例外条件を表します。

## インスタンスプロパティ

- {{domxref("XPathException.code")}} {{ReadOnlyInline}}
  - : [エラーコード定数](#定数)のうちのいずれかの入った `short` を返します。

## 定数

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">定数</th>
      <th scope="col">値</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>INVALID_EXPRESSION_ERR</code></td>
      <td><code>51</code></td>
      <td>
        構文エラーがあるなど、特定の {{domxref("XPathEvaluator")}} の規則に従った正当な式でない場合、またはこの実装では対応していない特殊な拡張関数や変数を格納している場合。
      </td>
    </tr>
    <tr>
      <td><code>TYPE_ERR</code></td>
      <td><code>52</code></td>
      <td>
        指定した型を返すように式を変換できない場合。
      </td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Document.createExpression()")}}
- {{DOMxRef("XPathExpression")}}
