---
title: "XPathExpression: evaluate() メソッド"
short-title: evaluate()
slug: Web/API/XPathExpression/evaluate
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM XPath")}}

**`evaluate()`** は {{domxref("XPathExpression")}} インターフェイスのメソッドで、指定されたノードまたは文書に対して [XPath](/ja/docs/Web/XPath) 式を実行し、{{domxref("XPathResult")}} を返します。

## 構文

```js-nolint
evaluate(contextNode)
evaluate(contextNode, type)
evaluate(contextNode, type, result)
```

### 引数

- `contextNode`
  - : 式を評価するために使用するコンテキストを表す {{domxref("Node")}} です。
- `type` {{optional_inline}}
  - : 式を評価して返す結果の型を指定します。これは{{domxref("XPathResult", "XPathResult", "定数")}}のいずれかでなければなりません。
- `result` {{optional_inline}}
  - : このメソッドが再利用して返す結果オブジェクトを指定することができます。
    `null` を指定した場合や、実装が指定した結果を再利用しない場合は、新しい結果オブジェクトを返します。

### 返値

XPath 式の評価結果を表す {{domxref("XPathResult")}} オブジェクト。

### 例外

#### INVALID_EXPRESSION_ERR

式が {{domxref("XPathEvaluator")}} の規則に従っていなかった場合、 `INVALID_EXPRESSION_ERR`` 型の {{domxref("XPathException")}} が発生します。

#### TYPE_ERR

結果を指定した型に変換できなかた場合、 `TYPE_ERR` 型の {{domxref("XPathException")}} が発生します。

#### NAMESPACE_ERR

指定した {{domxref("XPathNSResolver")}} で解決できない名前空間接頭辞が式に格納されていた場合、 `NAMESPACE_ERROR` 型の {{domxref("DOMException")}} が発生します。

#### WRONG_DOCUMENT_ERR

指定されたコンテキストノードが {{domxref("XPathEvaluator")}} で対応していない文書のものである場合、 `WRONG_DOCUMENT_ERR` 型の {{domxref("DOMException")}} が発生します。

#### NOT_SUPPORTED_ERR

指定されたコンテキストノードが XPath コンテキストノードとして許可されていない型であるか、リクエストの型が {{domxref("XPathEvaluator")}} によって許可されていない場合、 `NOT_SUPPORTED_ERR` 型の {{domxref("DOMException")}} が発生します。

## 例

次の例では `evaluate()` メソッドを使用しています。

### HTML

```html
<div>XPath example</div>
<div>Number of &lt;div&gt;s: <output></output></div>
```

### JavaScript

```js
const xpath = "//div";
const evaluator = new XPathEvaluator();
const expression = evaluator.createExpression("//div");
const result = expression.evaluate(
  document,
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
);
document.querySelector("output").textContent = result.snapshotLength;
```

### 結果

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
