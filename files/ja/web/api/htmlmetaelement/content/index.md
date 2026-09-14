---
title: "HTMLMetaElement: content プロパティ"
short-title: content
slug: Web/API/HTMLMetaElement/content
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLMetaElement.content`** プロパティは、{{domxref("HTMLMetaElement.name")}} または {{domxref("HTMLMetaElement.httpEquiv")}} との組み合わせによる、プラグマディレクティブと名前付き {{htmlelement("meta")}} データの `content` 属性を取得または設定します。
詳しくは、[content](/ja/docs/Web/HTML/Reference/Elements/meta#content) 属性を参照してください。

## 値

文字列です。

## 例

### meta 要素の内容の読み取り

次の例は `name` 属性に `keywords` という値を格納した `<meta>` 要素を問い合わせるものです。
`content` の値がコンソールにログ出力され、文書の [keywords](/ja/docs/Web/HTML/Reference/Elements/meta/name#html_仕様書で定義されている_meta_name) が表示されます。

```js
// <meta name="keywords" content="documentation, HTML, web"> があるとします
let meta = document.querySelector("meta[name='keywords']");
console.log(meta.content);
// "documentation, HTML, web"
```

### 内容付きの meta 要素の作成

次の例は、新しい `<meta>` 要素を `name` 属性に [`description`](/ja/docs/Web/HTML/Reference/Elements/meta/name#html_仕様書で定義されている_meta_name) に設定して作成します。
`content` 属性に文書の説明を設定し、文書の `<head>` に追加されます。

```js
let meta = document.createElement("meta");
meta.name = "description";
meta.content =
  "<meta> 要素は、名前と値のペアで文書のメタデータを提供するのに使用できます。name 属性はメタデータの名前を与え、content 属性は値を与えます。";
document.head.appendChild(meta);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("meta")}}
- {{domxref("HTMLMetaElement.name")}}
- {{domxref("HTMLMetaElement.httpEquiv")}}
- [学習: HTML のメタデータ](/ja/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#メタデータ_meta_要素)
