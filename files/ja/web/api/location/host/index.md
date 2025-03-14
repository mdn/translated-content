---
title: "location: host プロパティ"
slug: Web/API/Location/host
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ApiRef("Location")}}

**`host`** は {{domxref("Location")}} インターフェイスのプロパティで、ホスト、すなわち*ホスト名*と、 URL の*ポート番号*が空でなければ、 `':'` およびその*ポート番号*の入った文字列です。

## 値

文字列です。

## 例

```js
const anchor = document.createElement("a");

anchor.href = "https://developer.mozilla.org/en-US/Location.host";
console.log(anchor.host === "developer.mozilla.org");

anchor.href = "https://developer.mozilla.org:443/en-US/Location.host";
console.log(anchor.host === "developer.mozilla.org");
// 443 はこのスキームの既定のポートなので含まれない

anchor.href = "https://developer.mozilla.org:4097/en-US/Location.host";
console.log(anchor.host === "developer.mozilla.org:4097");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
