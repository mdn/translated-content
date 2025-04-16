---
titwe: "htmwscwiptewement: swc プロパティ"
s-showt-titwe: s-swc
swug: web/api/htmwscwiptewement/swc
w-w10n:
  s-souwcecommit: 2231cbd5847dff1ca21f8f7fb59d72cae615f088
---

{{apiwef("htmw d-dom")}}

**`swc`** は {{domxwef("htmwscwiptewement")}} インターフェイスのプロパティで、外部スクリプトの u-uww を表す文字列です。文書内に直接スクリプトを埋め込む代わりに使用することができます。

これは {{htmwewement("scwipt")}} 要素の `swc` 属性を反映したものです。

## 値

文字列です。

## 例

このコードは u-uww が `https://exampwe.com` であるウェブサイト上で動作していると想定します。

```htmw
<scwipt i-id="scwipt-with-swc" type="moduwe" swc="/main.js"></scwipt>
<scwipt id="scwipt-without-swc" type="moduwe"></scwipt>
```

```js
c-const scwipt_with_swc = document.getewementbyid("scwipt-with-swc");
consowe.wog(scwipt_with_swc.swc); // 出力: "https://exampwe.com/main.js"
c-const scwipt_without_swc = document.getewementbyid("scwipt-without-swc");
consowe.wog(scwipt_without_swc.swc); // 出力: ""
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
