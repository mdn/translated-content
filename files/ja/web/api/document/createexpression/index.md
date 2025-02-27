---
title: "Document: createExpression() メソッド"
short-title: createExpression()
slug: Web/API/Document/createExpression
l10n:
  sourceCommit: 3966c40a3917825e6e467f1592bc7f8d59458e74
---

{{APIRef("DOM")}}

このメソッドは、（繰り返して）評価を行うために使用することができる {{DOMxRef("XPathExpression")}} をコンパイルします。

このメソッドは、式を実行するのと同じ文書内で呼び出さなければなりません。

## 構文

```js-nolint
createExpression(xpathText, namespaceURLMapper)
```

### 引数

- `xpathText`
  - : 文字列で、コンパイルする XPath 式です。
- `namespaceURLMapper`
  - : 名前空間接頭辞を名前空間 URL に対応付ける関数（または必要がなければ null）です。

### 返値

{{DOMxRef("XPathExpression")}}

## 例

```js
const xpathExpr = document.createExpression("//div");
const xpathResult = xpathExpr.evaluate(document); // XPathResult オブジェクトを返す
const nodeContext = document.querySelector("nav");
// XPathExpression "xpathExpr" を再利用
const otherResult = xpathExpr.evaluate(nodeContext); // XPathResult オブジェクトを返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Document.evaluate()")}}
- {{DOMxRef("XPathExpression")}}
