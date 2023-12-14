---
title: XPathExpression
slug: Web/API/XPathExpression
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

このインターフェイスはコンパイルされた XPath 式であり、文書や特定のノードに対して評価を行うことで、その {{Glossary("DOM")}} ツリーから情報を返すことができます。

これは、アプリケーションで式を再使用する場合に有用です。コンパイルされるのは一度だけで、式内で発生するすべての名前空間接頭辞が事前解決されるからです。

この型のオブジェクトは、 {{domxref("XPathEvaluator.createExpression", "XPathEvaluator.createExpression()")}} を呼び出すことで生成されます。

## インスタンスメソッド

- {{DOMxRef("XPathExpression.evaluate()")}}
  - : 指定されたノードまたは文書に対して XPath 式を評価します。

## 例

次の例では `XPathExpression` インターフェイスを使用しています。

### HTML

```html
<div>XPath example</div>
<div>Number of &lt;div&gt;s: <output></output></div>
```

### JavaScript

```js
const xpath = "//div";
const evaluator = new XPathEvaluator();
const expression = evaluator.createExpression(xpath);
const result = expression.evaluate(
  document,
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
);
document.querySelector("output").textContent = result.snapshotLength;
```

### 結果

{{EmbedLiveSample('Example', 400, 70)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("document.createExpression()")}}
- {{DOMxRef("XPathResult")}}
