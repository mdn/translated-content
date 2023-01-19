---
title: HTMLFormElement.enctype
slug: Web/API/HTMLFormElement/enctype
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef("HTML DOM")}}

**`HTMLFormElement.enctype`** プロパティは、サーバーにフォームを送信するために使用されるコンテンツの [MIME タイプ](https://en.wikipedia.org/wiki/Mime_type)を指定します。使用可能な値は以下の通りです。

- `application/x-www-form-urlencoded`: 初期値（既定値）です。
- `multipart/form-data`: {{HTMLElement("input")}} 要素にファイルデータをアップロードできるようにする型。
- `text/plain`: 形式があいまいで、人間が読み取り可能なコンテンツであり、コンピューターで確実に解釈できるとは限りません。

この値は {{htmlattrxref("formenctype", "button")}} 属性を {{HTMLElement("button")}} または {{HTMLElement("input")}} 要素に指定することで上書きすることができます。

## 値

文字列です。

## 例

```js
form.enctype = 'application/x-www-form-urlencoded';
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
