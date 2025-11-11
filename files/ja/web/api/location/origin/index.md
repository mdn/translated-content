---
title: "location: origin プロパティ"
slug: Web/API/Location/origin
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Location")}}

**`origin`** は {{domxref("Location")}} インターフェイスの読み取り専用プロパティで、指定された URL のオリジンの Unicode シリアライズが入った文字列です。

すなわち、下記のようになります。

- `http` または `https` を使用する URL の場合、スキームの後に `'://'` を、その後にドメインを、その後に `':'` を、その後にポート（明示的に指定されなかった場合は、それぞれ既定の `80` および `443` のポート）を指定することができます。
- `file:` スキームを使用した URL では、値はブラウザー依存になります。
- `blob:` スキームを使用した URL では、その URL のオリジンが `blob:` に続きます。例えば、 `"blob:https://mozilla.org"` は `"https://mozilla.org"` がついています。

{{AvailableInWorkers}}

## 値

文字列です。

## 例

```js
// このページ上の、オリジンを返します。
const result = window.location.origin; // 返値:'https://developer.mozilla.org'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
