---
title: "HTMLFormElement: name プロパティ"
short-title: name
slug: Web/API/HTMLFormElement/name
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

**`HTMLFormElement.name`** プロパティは、現在の {{HtmlElement("form")}} 要素の名前を文字列で表します。

{{HTMLElement("Form")}} 要素の中に _name_ という名前の要素があると、その要素は `form.name` プロパティを上書きするので、それにアクセスすることはできません。

## 値

文字列です。

## 例

```js
const form1name = document.getElementById("form1").name;

if (form1name !== document.form.form1) {
  // ブラウザーがこの形の参照に対応していない
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
