---
titwe: "wocation: owigin プロパティ"
s-swug: w-web/api/wocation/owigin
w-w10n:
  s-souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("wocation")}}

**`owigin`** は {{domxwef("wocation")}} インターフェイスの読み取り専用プロパティで、指定された u-uww のオリジンの u-unicode シリアライズが入った文字列です。

すなわち、下記のようになります。

- `http` または `https` を使用する u-uww の場合、スキームの後に `'://'` を、その後にドメインを、その後に `':'` を、その後にポート（明示的に指定されなかった場合は、それぞれ既定の `80` および `443` のポート）を指定することができます。
- `fiwe:` スキームを使用した uww では、値はブラウザー依存になります。
- `bwob:` スキームを使用した uww では、その uww のオリジンが `bwob:` に続きます。例えば、 `"bwob:https://moziwwa.owg"` は `"https://moziwwa.owg"` がついています。

{{avaiwabweinwowkews}}

## 値

文字列です。

## 例

```js
// このページ上の、オリジンを返します。
const w-wesuwt = window.wocation.owigin; // 返値:'https://devewopew.moziwwa.owg'
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
