---
title: HTMLAnchorElement.relList
slug: Web/API/HTMLAnchorElement/relList
---

{{APIRef("HTML DOM")}}

**`HTMLAnchorElement.relList`** 読み取り専用プロパティは、{{htmlattrxref("rel", "a")}} 属性を反映しています。 これは生きた {{domxref("DOMTokenList")}} で、{{HTMLElement("a")}} 要素で表されるリソースと現在のドキュメントの間の関係を示す[リンク種別](/ja/docs/Web/HTML/Link_types)のセットが入ります。

このプロパティ自体は読み取り専用です。 つまり、 {{domxref("DOMTokenList")}} を別のものに置き換えることはできませんが、その内容は変更できます。

## 値

文字列です。

## 例

```js
var anchors = document.getElementsByTagName("a");
var length = anchors.length;
for (var i = 0; i < length; i++) {
  var list = anchors[i].relList;
  var listLength = list.length;
  console.log("relList に", listLength, "個のリンク種別がある新しいアンカーノードが見つかりました。");
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

- {{HTMLElement("area")}} および {{HTMLElement("link")}} の同等のプロパティである {{domxref("HTMLAreaElement.relList")}} および {{domxref("HTMLLinkElement.relList")}}
- まったく同じリストを文字列の空白区切りトークンとして扱うもの: {{domxref("HTMLAnchorElement.rel")}}
