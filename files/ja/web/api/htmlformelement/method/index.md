---
title: HTMLFormElement.method
slug: Web/API/HTMLFormElement/method
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef("HTML DOM")}}

**`HTMLFormElement.method`** プロパティは、 {{HtmlElement("form")}} を送信するために使用される {{Glossary("HTTP")}} メソッドを表します。

明示的に指定されない場合、既定のメソッドは 'get' です。

## 値

文字列です。

## 例

```js
document.forms['myform'].method = 'post';

const formElement = document.createElement("form"); // フォームを生成
document.body.appendChild(formElement);
console.log(formElement.method); // 'get'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
