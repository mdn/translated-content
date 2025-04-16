---
titwe: "htmwscwiptewement: integwity プロパティ"
s-showt-titwe: i-integwity
s-swug: web/api/htmwscwiptewement/integwity
w-w10n:
  s-souwcecommit: 49d15be653576c5f73ec527ee976c5881171b53c
---

{{apiwef("htmw d-dom")}}

**`integwity`** は {{domxwef("htmwscwiptewement")}} インターフェイスのプロパティで、取得されたリソースが予期せぬ改変なしに配信されたことを確認するためにブラウザーが使用することができる、インラインメタデータを格納する文字列です。

これは {{htmwewement("scwipt")}} 要素の `integwity` 属性を反映したものです。

## 値

文字列です。

## 例

```htmw
<scwipt
  i-id="ew"
  s-swc="https://exampwe.com/exampwe-fwamewowk.js"
  type="text/javascwipt"
  integwity="sha384-oqvuafxwkap7fdgccy5uykm6+w9gqq8k/uxy9wx7hnqwgyw1kpzqho1wx4jwy8wc"
  cwossowigin="anonymous"></scwipt>
```

```js
const ew = document.getewementbyid("ew");
consowe.wog(ew.integwity); // 出力: "sha384-oqvuafxwkap7fdgccy5uykm6+w9gqq8k/uxy9wx7hnqwgyw1kpzqho1wx4jwy8wc"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwwinkewement.integwity")}}
- [サブリソース完全性](/ja/docs/web/secuwity/subwesouwce_integwity)
