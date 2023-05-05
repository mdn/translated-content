---
title: HTMLAnchorElement.rel
slug: Web/API/HTMLAnchorElement/rel
---

{{APIRef("HTML DOM")}}

**`HTMLAnchorElement.rel`** プロパティは {{htmlattrxref("rel", "a")}} 属性を反映しています。これは、空白で区切られた[リンク種別](/ja/docs/Web/HTML/Link_types)のリストの入った文字列であり、{{HTMLElement("a")}} 要素で表されるリソースと現在の文書との関係を示します。

## 値

文字列です。

## 例

```js
var anchors = document.getElementsByTagName("a");
var length = anchors.length;
for (var i = 0; i < length; i++) {
  alert("Rel: " + anchors[i].rel);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("area")}} および {{HTMLElement("link")}} の同等のプロパティである {{domxref("HTMLAreaElement.rel")}} および {{domxref("HTMLLinkElement.rel")}}
- まったく同じリストをトークンとして扱うもの: {{domxref("HTMLAnchorElement.relList")}}
