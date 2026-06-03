---
title: "HTMLAreaElement: ping プロパティ"
short-title: ping
slug: Web/API/HTMLAreaElement/ping
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{ApiRef("HTML DOM")}}

**`ping`** は {{domxref("HTMLAreaElement")}} インターフェイスのプロパティで、 URL を空白で区切ったリストです。このリンクを辿ると、ブラウザーは PING を本体とした {{HTTPMethod("POST")}} リクエストをその URL に送信します。

これは {{HTMLElement("area")}} 要素の `ping` 属性を反映します。

> [!NOTE]
> このプロパティは Firefox では有効ではなく、プライバシーおよびセキュリティ上の理由により使用が制限されている場合があります。

## 例

```html
<map>
  <area
    href="https://example.com"
    ping="https://example-tracking.com https://example-analytics.com"
    alt="example" />
</map>
```

```js
const areaCollection = document.getElementsByTagName("map")[0].areas;
console.log(areaCollection[0].ping); // 出力: "https://example-tracking.com https://example-analytics.com"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLAnchorElement.ping")}} プロパティ
