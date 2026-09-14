---
title: "HTMLMetaElement: name プロパティ"
short-title: name
slug: Web/API/HTMLMetaElement/name
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLMetaElement.name`** プロパティは {{domxref("HTMLMetaElement.content")}} との組み合わせで使用し、文書のメタデータを名前と値の組で定義します。
`name` 属性はメタデータの名前を定義し、`content` 属性はその値を定義します。

## 値

文字列です。

## 例

### meta 要素のメタデータ名の読み取り

次の例では、文書の最初の `<meta>` 要素を検索します。
`name` の値をコンソールに出力します。これは文書で [keywords](/ja/docs/Web/HTML/Reference/Elements/meta/name#html_仕様書で定義されている_meta_name) を指定するものです。

```js
// <meta name="keywords" content="documentation, HTML, web technologies"> があるとする
let meta = document.querySelector("meta");
console.log(meta.name);
// "keywords"
```

### `author` メタデータの meta 要素を作成

次の例は、新しい `<meta>` 要素を `name` 属性に [`author`](/ja/docs/Web/HTML/Reference/Elements/meta/name#html_仕様書で定義されている_meta_name) を設定して作成します。
`content` 属性には文書の著者を設定し、この要素を文書の `<head>` に追加します。

```js
let meta = document.createElement("meta");
meta.name = "author";
meta.content = "Franz Kafka";
document.head.appendChild(meta);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("meta")}}
- [name 属性で取りうる値](/ja/docs/Web/HTML/Reference/Elements/meta/name#html_仕様書で定義されている_meta_name)
