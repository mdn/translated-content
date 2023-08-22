---
title: "HTMLFormElement: method プロパティ"
short-title: method
slug: Web/API/HTMLFormElement/method
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

**`HTMLFormElement.method`** プロパティは、{{HtmlElement("form")}} を送信するために使用される {{Glossary("HTTP")}} メソッドを表します。

明示的に指定されなかった場合、既定のメソッドは 'get' です。

## 値

文字列です。

## 例

```js
document.forms["myform"].method = "post";

const formElement = document.createElement("form"); // フォームを生成
document.body.appendChild(formElement);
console.log(formElement.method); // 'get'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
