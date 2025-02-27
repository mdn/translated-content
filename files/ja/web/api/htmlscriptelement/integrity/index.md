---
title: "HTMLScriptElement: integrity プロパティ"
short-title: integrity
slug: Web/API/HTMLScriptElement/integrity
l10n:
  sourceCommit: 49d15be653576c5f73ec527ee976c5881171b53c
---

{{APIRef("HTML DOM")}}

**`integrity`** は {{domxref("HTMLScriptElement")}} インターフェイスのプロパティで、取得されたリソースが予期せぬ改変なしに配信されたことを確認するためにブラウザーが使用することができる、インラインメタデータを格納する文字列です。

これは {{HTMLElement("script")}} 要素の `integrity` 属性を反映したものです。

## 値

文字列です。

## 例

```html
<script
  id="el"
  src="https://example.com/example-framework.js"
  type="text/javascript"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

```js
const el = document.getElementById("el");
console.log(el.integrity); // 出力: "sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLLinkElement.integrity")}}
- [サブリソース完全性](/ja/docs/Web/Security/Subresource_Integrity)
