---
title: HTMLAreaElement.rel
slug: Web/API/HTMLAreaElement/rel
---

{{APIRef("HTML DOM")}}

**`HTMLAreaElement.rel`** プロパティは {{htmlattrxref("rel", "area")}} 属性を反映しています。これは、空白で区切られた[リンク種別](/ja/docs/Web/HTML/Link_types)のリストの入った文字列であり、{{HTMLElement("area")}} 要素で表されるリソースと現在の文書との関係を示します。

## 値

文字列です。

## 例

```js
var areas = document.getElementsByTagName("area");
var length = areas.length;
for (var i = 0; i < length; i++) {
  alert("Rel: " + areas[i].rel);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("a")}} および {{HTMLElement("link")}} の同等のプロパティである {{domxref("HTMLAnchorElement.rel")}} および {{domxref("HTMLLinkElement.rel")}}
- まったく同じリストをトークンとして扱うもの: {{domxref("HTMLAreaElement.relList")}}
