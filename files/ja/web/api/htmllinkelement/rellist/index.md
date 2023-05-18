---
title: HTMLLinkElement.relList
slug: Web/API/HTMLLinkElement/relList
---

{{ APIRef("HTML DOM") }}

**`HTMLAnchorElement.relList`** 読み取り専用プロパティは、[`rel`](/ja/docs/Web/HTML/Element/link#rel) 属性を反映しています。 これは生きた {{domxref("DOMTokenList")}} で、{{HTMLElement("link")}} 要素で表されるリソースと現在のドキュメントの間の関係を示す[リンク種別](/ja/docs/Web/HTML/Link_types)のセットが入ります。

このプロパティ自体は読み取り専用です。 つまり、 {{domxref("DOMTokenList")}} を別のものに置き換えることはできませんが、その内容は変更できます。

## 値

生きた {{domxref("DOMTokenList")}} です。

## 例

```js
var links = document.getElementsByTagName("link");
var length = links.length;
for (var i = 0; i < length; i++) {
  var list = links[i].relList;
  var listLength = list.length;
  console.log("New link found.");
  for (var j = 0; j < listLength; j++) {
    console.log(list[j]);
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("a")}} および {{HTMLElement("area")}} の同等のプロパティである {{domxref("HTMLAnchorElement.relList")}} および {{domxref("HTMLAreaElement.relList")}}
- まったく同じリストを文字列の空白区切りトークンとして扱うもの: {{domxref("HTMLLinkElement.rel")}}
