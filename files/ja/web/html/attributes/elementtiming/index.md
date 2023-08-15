---
title: "HTML 属性: elementtiming"
slug: Web/HTML/Attributes/elementtiming
l10n:
  sourceCommit: bb7e3c7303746408072ddf4cc646e28d7e14214a
---

{{HTMLSidebar}}

**`elementtiming`** 属性は、要素が{{domxref("Element Timing API", "要素タイミング API", "", 1)}} による追跡のためのフラグを立てていることを示すために使用されます。この属性は {{htmlelement("img")}}、 {{SVGElement("svg")}} の中の {{SVGElement("image")}} 要素、 {{htmlelement("video")}} 要素のポスター画像、 {{cssxref("background-image")}} がある要素、及び {{htmlelement("p")}} などテキストノードを持つ要素に対して適用することができます。

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
<img alt="Alt for a main blog post image" src="my-massive-image.jpg" elementtiming="Main image">

<p elementtiming="important-text">Some very important information.</p">
```

## 関連情報

- [Custom metrics](https://web.dev/custom-metrics/)
