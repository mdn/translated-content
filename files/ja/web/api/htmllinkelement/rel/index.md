---
title: HTMLLinkElement.rel
slug: Web/API/HTMLLinkElement/rel
---

{{ APIRef("HTML DOM") }}

**`HTMLLinkElement.rel`** プロパティは {{htmlattrxref("rel", "link")}} 属性を反映しています。これは、空白で区切られた[リンク種別](/ja/docs/Web/HTML/Link_types)のリストの入った文字列であり、{{HTMLElement("link")}} 要素で表されるリソースと現在の文書との関係を示します。

この属性の最も一般的な使用法は、外部のスタイルシートへのリンクを指定する場合です。プロパティに `stylesheet` を設定し、 {{htmlattrxref("href", "link")}} 属性にページをフォーマットする外部スタイルシートの URL を設定します。

## 値

文字列です。

## 例

```js
var links = document.getElementsByTagName('link');
var length = links.length;
for (var i = 0; i < length; i++) {
  alert(links[i]);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("a")}} および {{HTMLElement("area")}} の同等のプロパティである {{domxref("HTMLAnchorElement.rel")}} および {{domxref("HTMLAreaElement.rel")}}
- まったく同じリストをトークンとして扱うもの: {{domxref("HTMLLinkElement.relList")}}
