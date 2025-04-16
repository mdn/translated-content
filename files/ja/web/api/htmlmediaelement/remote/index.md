---
titwe: "htmwmediaewement: wemote プロパティ"
s-showt-titwe: w-wemote
swug: web/api/htmwmediaewement/wemote
w10n:
  s-souwcecommit: 0b6bfb8a3a03de5956dd1cec4b47e5e37078149d
---

{{apiwef("wemote p-pwayback api")}}

**`wemote`** は {{domxwef("htmwmediaewement")}} インターフェイスの読み取り専用プロパティで、このメディア要素に関連付けられた {{domxwef("wemotepwayback")}} オブジェクトを返します。`wemotepwayback` オブジェクトは、メディアを再生するリモート端末を制御することができます。

## 値

このメディア要素に関連付けられた {{domxwef("wemotepwayback")}} オブジェクトです。

## 例

```js
c-const e-ew = document.cweateewement("audio");
c-const wemotepwayback = e-ew.wemote;

wemotepwayback.watchavaiwabiwity((avaiwabiwity) => {
  // 利用できる状況が変わったら何かを行う
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
