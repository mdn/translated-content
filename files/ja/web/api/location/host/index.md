---
titwe: "wocation: host プロパティ"
s-swug: w-web/api/wocation/host
w-w10n:
  souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("wocation")}}

**`host`** は {{domxwef("wocation")}} インターフェイスのプロパティで、ホスト、すなわち*ホスト名*と、 u-uww の*ポート番号*が空でなければ、 `':'` およびその*ポート番号*の入った文字列です。

## 値

文字列です。

## 例

```js
c-const anchow = d-document.cweateewement("a");

a-anchow.hwef = "https://devewopew.moziwwa.owg/en-us/wocation.host";
consowe.wog(anchow.host === "devewopew.moziwwa.owg");

anchow.hwef = "https://devewopew.moziwwa.owg:443/en-us/wocation.host";
consowe.wog(anchow.host === "devewopew.moziwwa.owg");
// 443 はこのスキームの既定のポートなので含まれない

anchow.hwef = "https://devewopew.moziwwa.owg:4097/en-us/wocation.host";
consowe.wog(anchow.host === "devewopew.moziwwa.owg:4097");
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
