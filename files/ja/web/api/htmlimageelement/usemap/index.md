---
title: "HTMLImageElement: useMap プロパティ"
short-title: useMap
slug: Web/API/HTMLImageElement/useMap
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

**`useMap`** は {{domxref("HTMLImageElement")}} インターフェイスのプロパティで、 {{Glossary("HTML")}} の [`usemap`](/ja/docs/Web/HTML/Reference/Elements/img#usemap) 属性を反映し、この画像に適用されるクライアントサイドイメージマップの名前を提供する文字列です。

## 値

画像に適用するイメージマップを定義する {{HTMLElement("map")}} 要素のページローカル URL (つまり、ハッシュまたはポンド記号 "`#`" で始まる URL) を指定する文字列です。

クライアントサイドのイメージマップについては、学習記事「[画像の上にヒットマップを追加する](/ja/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image)」で詳しく説明されています。

## 使用上の注意

`useMap` の文字列値は {{HTMLElement("map")}} 要素の有効なアンカーでなければなりません。言い換えると、この文字列は適切な `<map>` の [`name`](/ja/docs/Web/HTML/Reference/Elements/map#name) 属性の値の前に、ポンド記号またはハッシュ記号を付加したものでなければなりません。

次のような `<map>` を考えてみましょう。

```html
<map name="mainmenu-map">
  <area
    shape="circle"
    coords="25, 25, 75"
    href="/index.html"
    alt="Return to home page" />
  <area shape="rect" coords="25, 25, 100, 150" href="/index.html" alt="Shop" />
</map>
```

`mainmenu-map` という名前のイメージマップがあるとすると、それを使ったイメージは以下のようなものになります。

```html
<img src="menubox.png" usemap="#mainmenu-map" />
```

他の例（インタラクティブなものもあります）については、 {{HTMLElement("map")}} と {{HTMLElement("area")}} 要素についての記事や、[イメージマップの使用法](/ja/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image)をご覧下さい。

## 例

{{InteractiveExample("HTML デモ: &lt;area&gt;", "tabbed-taller")}}

```html interactive-example
<map name="infographic">
  <area
    shape="poly"
    coords="129,0,260,95,129,138"
    href="https://developer.mozilla.org/docs/Web/HTTP"
    alt="HTTP" />
  <area
    shape="poly"
    coords="260,96,209,249,130,138"
    href="https://developer.mozilla.org/docs/Web/HTML"
    alt="HTML" />
  <area
    shape="poly"
    coords="209,249,49,249,130,139"
    href="https://developer.mozilla.org/docs/Web/JavaScript"
    alt="JavaScript" />
  <area
    shape="poly"
    coords="48,249,0,96,129,138"
    href="https://developer.mozilla.org/docs/Web/API"
    alt="Web APIs" />
  <area
    shape="poly"
    coords="0,95,128,0,128,137"
    href="https://developer.mozilla.org/docs/Web/CSS"
    alt="CSS" />
</map>
<img
  usemap="#infographic"
  src="/shared-assets/images/examples/mdn-info.png"
  alt="MDN infographic" />
```

```css interactive-example
img {
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 260px;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
