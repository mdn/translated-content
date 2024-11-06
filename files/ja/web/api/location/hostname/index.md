---
title: "location: hostname プロパティ"
slug: Web/API/Location/hostname
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ApiRef("URL API")}}

**`hostname`** は {{domxref("Location")}} インターフェイスのプロパティで、URL のドメインが入った文字列です。

## 値

文字列です。

## 例

```js
const anchor = document.createElement("a");
anchor.href = "https://developer.mozilla.org:4097/ja/docs/Location.hostname";

console.log(anchor.hostname); // developer.mozilla.org
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
