---
title: Document.createExpression()
slug: Web/API/Document/createExpression
---

{{APIRef("DOM")}}

このメソッドは、 (繰り返して) 評価を行うために使用することができる {{DOMxRef("XPathExpression")}} をコンパイルします。

## 構文

```
xpathExpr = document.createExpression(xpathText, namespaceURLMapper);
```

### 引数

- _xpathText_ は文字列で、コンパイルする XPath 式です。
- _namespaceURLMapper_ は、名前空間接頭辞を名前空間 URL に対応付ける関数 (または必要がなければ null) です。

{{Fx_MinVersion_Note(3, "Firefox 3 より前では、対象として XPath を実行する文書以外の文書に対してこのメソッドを呼び出すことができました。 Firefox 3 では、同じ文書に対して呼び出す必要があります。")}}

### 返値

{{DOMxRef("XPathExpression")}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Document.evaluate()")}}
- {{DOMxRef("XPathExpression")}}
