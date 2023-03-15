---
title: HTMLAreaElement.relList
slug: Web/API/HTMLAreaElement/relList
---

{{APIRef("HTML DOM")}}

**`HTMLAreaElement.relList`** 読み取り専用プロパティは、{{htmlattrxref("rel", "area")}} 属性を反映しています。これは生きた {{domxref("DOMTokenList")}} で、 {{HTMLElement("area")}} 要素で表されるリソースと現在の文書との間の関係を示す[リンク種別](/ja/docs/Web/HTML/Link_types)のセットが入ります。

このプロパティ自体は読み取り専用です。 つまり、 {{domxref("DOMTokenList")}} を別のものに置き換えることはできませんが、その内容は変更できます。

## 値

文字列です。

## 例

```js
var areas = document.getElementsByTagName("area");
var length = areas.length;

for (var i = 0; i < length; i++) {
  var list = areas[i].relList;
  var listLength = list.length;
  console.log("新しい領域が見つかりました。");
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

- {{HTMLElement("a")}} および {{HTMLElement("link")}} の同等のプロパティである {{domxref("HTMLAnchorElement.relList")}} および {{domxref("HTMLLinkElement.relList")}}
- まったく同じリストを文字列の空白区切りトークンとして扱うもの: {{domxref("HTMLAreaElement.rel")}}
