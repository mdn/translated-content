---
title: "HTMLAnchorElement: ping プロパティ"
short-title: ping
slug: Web/API/HTMLAnchorElement/ping
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{ApiRef("HTML DOM")}}

**`ping`** は {{domxref("HTMLAnchorElement")}} インターフェイスのプロパティで、スペースで区切られた URL のリストです。リンクを追ったとき、ブラウザーは本体に PING と記載された {{HTTPMethod("POST")}} リクエストを URL に送信します。

これは {{HTMLElement("a")}} 要素の `ping` を反映します。

> [!NOTE]
> このプロパティは Firefox では効果を発揮せず、プライバシーやセキュリティ上の懸念から、その使用が制限される可能性があります。

## 例

```html
<a
  id="exampleLink"
  href="https://example.com"
  ping="https://example-tracking.com https://example-analytics.com"
  >Example Link</a
>
```

```js
const anchorElement = document.getElementById("exampleLink");
console.log(anchorElement.ping); // Output: "https://example-tracking.com https://example-analytics.com"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLAreaElement.ping")}} property
