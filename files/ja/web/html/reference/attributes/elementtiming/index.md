---
title: "HTML 属性: elementtiming"
short-title: elementtiming
slug: Web/HTML/Reference/Attributes/elementtiming
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

**`elementtiming`** 属性は、ある要素が {{domxref("PerformanceObserver")}} オブジェクトで `"element"` 型を使用したものによる追跡のためのフラグを立てていることを示すために使用されます。詳細は、 {{domxref("PerformanceElementTiming")}} インターフェイスを参照してください。

この属性は {{htmlelement("img")}}、 {{SVGElement("svg")}} の中の {{SVGElement("image")}} 要素、 {{htmlelement("video")}} 要素のポスター画像、 {{cssxref("background-image")}} がある要素、及び {{htmlelement("p")}} などテキストノードを持つ要素に対して適用することができます。

DOM では、この属性は {{domxref("Element.elementTiming")}} として反映されます。

## 使用方法

`elementtiming` に指定された値は、観測された要素の識別子になります。

```html
<img alt="alt" src="img.jpg" elementtiming="label for element" />
```

観察したい要素のグッドコンテンダーは以下の通りです。

- 記事のメイン画像
- ブログ投稿のタイトル
- ショッピングサイトのカルーセル内の画像
- ページ内の主要動画のポスター画像

## 例

```html
<img
  alt="ブログ投稿画像の代替テキスト"
  src="my-massive-image.jpg"
  elementtiming="Main image" />

<p elementtiming="important-text">とても重要な情報。</p>
```

## 関連情報

- {{domxref("PerformanceElementTiming")}}
- {{domxref("Element.elementTiming")}}
