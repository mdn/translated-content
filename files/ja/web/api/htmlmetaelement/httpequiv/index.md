---
title: "HTMLMetaElement: httpEquiv プロパティ"
short-title: httpEquiv
slug: Web/API/HTMLMetaElement/httpEquiv
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLMetaElement.httpEquiv`** プロパティは、{{domxref("HTMLMetaElement.content")}} 属性のプラグマディレクティブまたはレスポンスヘッダーの名前を取得または設定します。
取りうる値の詳細は、[http-equiv](/ja/docs/Web/HTML/Reference/Elements/meta#http-equiv) 属性を参照してください。

## 値

文字列です。

## 例

### meta 要素の `http-equiv` の値の読み取り

次の例は `http-equiv` 属性のある `<meta>` 要素を検索します。
`http-equiv` 属性をコンソールにログ出力し、`refresh` [プラグマディレクティブ](/ja/docs/Web/HTML/Reference/Elements/meta#http-equiv) を表示します。これはブラウザーに、`content` 属性で定義された秒数の後でページを更新することを指示します。

```js
// <meta http-equiv="refresh" content="10" /> があるとする
let meta = document.querySelector("meta[http-equiv]");
console.log(meta.httpEquiv);
// refresh
console.log(meta.content);
// 10
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("meta")}}
