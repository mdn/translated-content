---
title: HTMLFormElement.name
slug: Web/API/HTMLFormElement/name
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef("HTML DOM")}}

**`HTMLFormElement.name`** プロパティは、現在の {{HtmlElement("form")}} 要素の名前を文字列で表します。

{{HTMLElement("Form")}} 要素の中に _name_ という名前の要素があると、その要素は `form.name` プロパティを上書きするので、それにアクセスすることはできません。
Internet Explorer (IE) は `createElement()` を使用して作成された要素の name 属性を `name` プロパティで設定したり変更したりすることを許可していません。

## 値

文字列です。

## 例

```js
const form1name = document.getElementById('form1').name;

if (form1name !== document.form.form1) {
  // ブラウザーがこの形の参照に対応していない
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
