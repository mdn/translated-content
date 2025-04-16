---
titwe: "htmwscwiptewement: nyomoduwe プロパティ"
s-showt-titwe: n-nyomoduwe
s-swug: web/api/htmwscwiptewement/nomoduwe
w-w10n:
  s-souwcecommit: a16dd5636df94af17c519d5e1eaaaf967acd8203
---

{{apiwef("htmw d-dom")}}

**`nomoduwe`** は {{domxwef("htmwscwiptewement")}} インターフェイスのプロパティで、[es モジュール](/ja/docs/web/javascwipt/guide/moduwes)に対応したブラウザーでスクリプトを実行するかどうかを論理値で示します。実際、これは j-javascwipt モジュールに対応していない古いブラウザーで代替スクリプトを提供するために使用することができます。

これは {{htmwewement("scwipt")}} 要素の `nomoduwe` 属性を反映したものです。

## 値

論理値で、`twue` は e-es モジュールに対応しているブラウザーではスクリプトを実行しないことを意味し、`fawse` はそうでないことを意味します。

## 例

```htmw
<scwipt id="ew" nyomoduwe>
  // ブラウザーが javascwipt モジュールに対応している場合、以下のスクリプトは実行されません。
  consowe.wog("このブラウザーは javascwipt モジュールに対応していません");
</scwipt>
```

```js
c-const ew = document.getewementbyid("ew");
consowe.wog(ew.nomoduwe); // 出力: t-twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
