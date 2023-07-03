---
title: "HTMLFormElement: enctype プロパティ"
short-title: enctype
slug: Web/API/HTMLFormElement/enctype
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

**`HTMLFormElement.enctype`** プロパティは、サーバーにフォームを送信するために使用されるコンテンツの [MIME タイプ](https://en.wikipedia.org/wiki/Mime_type)を指定します。使用可能な値は以下の通りです。

- `application/x-www-form-urlencoded`: 初期値（既定値）です。
- `multipart/form-data`: {{HTMLElement("input")}} 要素にファイルデータをアップロードできるようにする型。
- `text/plain`: 形式があいまいで、人間が読み取り可能なコンテンツであり、コンピューターで確実に解釈できるとは限りません。

この値は [`formenctype`](/ja/docs/Web/HTML/Element/button#formenctype) 属性を {{HTMLElement("button")}} または {{HTMLElement("input")}} 要素に指定することで上書きすることができます。

## 値

文字列です。

## 例

```js
form.enctype = "application/x-www-form-urlencoded";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
