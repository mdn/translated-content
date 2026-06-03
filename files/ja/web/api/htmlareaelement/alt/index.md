---
title: "HTMLAreaElement: alt プロパティ"
short-title: alt
slug: Web/API/HTMLAreaElement/alt
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

**`alt`** は {{DOMxRef("HTMLAreaElement")}} インターフェイスのプロパティで、ハイパーリンクのテキストを指定し、イメージマップのリンクのテキストラベルを定義します。これは、 {{htmlelement("area")}} 要素の [`alt`](/ja/docs/Web/HTML/Reference/Elements/area#alt) 属性を反映します。

`alt` の値は、同じ {{htmlelement("map")}} 内にある他の `<area>` ハイパーリンクの `alt` テキストとともに、 {{htmlelement("img")}} 自体の `alt` テキストのもとで表示されたときに、代替テキストを表示しない場合に画像が提供する選択肢と同じものをユーザーに与えるような表現にすべきです。

{{htmlelement("area")}} がリンクである（{{DOMxRef("HTMLAreaElement.href", "href")}} プロパティを含む）場合、 `alt` プロパティの値は、画像が利用できない場合に適切なリンクのラベルとなる、空でない文字列でなければなりません。リンク `<area>` の `alt` 属性は、同じ `<map>` 内に、同じリソースを指し、 `alt` 属性が空白でない別の `<area>` 要素がある場合にのみ、空にすることができます。

## 値

文字列です。

## 例

```js
const areaElement = document.getElementById("imageArea");
console.log(areaElement.alt);
areaElement.alt = "はるかに良いリンクの説明";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMXref("HTMLImageElement.alt")}}
- {{DOMXref("HTMLInputElement.alt")}}
- {{DOMXref("HTMLMapElement")}}
- {{HTMLElement("area")}}
- {{HTMLElement("map")}}
- {{HTMLElement("a")}}
- [Good alt text, bad alt text — Making your content perceivable](https://www.wcag.com/blog/good-alt-text-bad-alt-text-making-your-content-perceivable/) on WCAG.com (2021)
- [An alt decision tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) on W3C Web Accessibility Initiative (WAI)
