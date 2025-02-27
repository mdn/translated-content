---
title: SVG フォント
slug: Web/SVG/Tutorial/SVG_fonts
l10n:
  sourceCommit: 1952d89acf75a2a9448cab9d323aa320281cd746
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Filter_effects", "Web/SVG/Tutorial/SVG_Image_Tag") }}

SVG が規定された時点では、ブラウザーでウェブフォントへの対応は普及していませんでした。しかし、テキストを正しく描画するためには、正しいフォントファイルへのアクセスが不可欠であるため、この機能を提供するためにフォント記述技術が SVG に追加されました。これは [PostScript](https://www.adobe.com/products/postscript.html) や [OTF](https://fonts.google.com/knowledge/glossary/open_type) などの他の形式との互換性を目的としたものではなく、レンダリング時に書体情報を SVG に埋め込む簡易な手段です。

> [!NOTE]
> SVG フォントは、現在 Safari と Android ブラウザーのみが対応しています。
>
> この機能は [Chrome 38 (および Opera 25) では削除されており](https://chromestatus.com/feature/5930075908210688)、 Firefox は [WOFF](/ja/docs/Web/CSS/CSS_fonts/WOFF) に集中するために[実装を無期限に延期しています](https://bugzil.la/119490)。しかし、Batik や Inkscape の一部など、他のツールは SVG フォントの埋め込みに対応しています。

SVG フォントを定義するためのベースは {{ SVGElement("font") }} 要素です。

## フォントの定義

フォントに必要なすべての情報を得ることに、連携して関わる要素がいくつかあります。始めに ([仕様書](https://www.w3.org/TR/SVG/fonts.html#FontElement) で示されている) 宣言の例、その後に詳しい説明を示します。

```html
<font id="Font1" horiz-adv-x="1000">
  <font-face
    font-family="Super Sans"
    font-weight="bold"
    font-style="normal"
    units-per-em="1000"
    cap-height="600"
    x-height="400"
    ascent="700"
    descent="300"
    alphabetic="0"
    mathematical="350"
    ideographic="400"
    hanging="500">
    <font-face-src>
      <font-face-name name="Super Sans Bold" />
    </font-face-src>
  </font-face>
  <missing-glyph><path d="M0,0h200v200h-200z" /></missing-glyph>
  <!-- Outline of exclamation point glyph -->
  <glyph unicode="!" horiz-adv-x="300"></glyph>
  <glyph unicode="@"><!-- Outline of @ glyph --></glyph>
  <!-- more glyphs -->
</font>
```

まずは {{ SVGElement("font") }} 要素から始まります。これは `id` 属性を持っており、それは URI を通してフォントを参照する (後述) ために必要です。`horiz-adv-x` 属性は 1 つのグリフのパス定義に比べて、文字の幅を平均してどのくらい広げるかを定義します。値 `1000` は、作業を行うにあたりほどよい値を設定します。また、基本的なグリフボックスのレイアウトをさらに定義するための付随的な属性がいくつかあります。

{{ SVGElement("font-face") }} 要素 CSS の [`@font-face`](/ja/docs/Web/CSS/@font-face) 宣言と対になるものです。これはフォントウェイトやフォントスタイルの分類など、最終的なフォントの基本的なプロパティを定義します。前出の例で最も重要で、最初に定義するものは `font-family` です。この値は、CSS や SVG の `font-family` プロパティで参照することができます。`font-weight` および `font-style` 属性は、同じ目的を持ちます。その後に続く属性は、フォントレンダリングエンジンへのレンダリング指示になります。例えば、グリフ全体の高さを表すのが[アセンダー](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%BB%E3%83%B3%E3%83%80%E3%83%BC)です。

子要素である {{ SVGElement("font-face-src") }} 要素は、CSS の `@font-face` 宣言の `src` プロパティに対応します。子要素の {{ SVGElement("font-face-name") }} や {{ SVGElement("font-face-uri") }} を用いて、フォントの宣言で外部のソースを指し示すことができます。前出の例では、レンダラーの手元に "Super Sans Bold" という名前のローカルフォントが存在する場合は、そのフォントを用いるべきであることを示します。

{{ SVGElement("font-face-src") }} の後に {{ SVGElement("missing-glyph") }} 要素があります。これはあるグリフがフォント内で見つからず、またフォールバックする仕組みもない場合に何を表示するべきかを定義します。またこの要素では、どのようにグリフを作成するかも示しています。単純にグラフィックの SVG コンテンツを内部に追加するのです。また、{{ SVGElement("filter") }}、{{ SVGElement("a") }}、あるいは {{ SVGElement("script") }} といった、他の SVG 要素もここで用いることができます。ただし単純なグリフを作るなら、標準の SVG パスと同様に `d` 属性を追加することもできます。

実際のグリフは {{ SVGElement("glyph") }} 要素で定義します。ここで最も重要な属性は `unicode` です。この属性は Unicode のコードポイントを定義して、その文字が `glyph` 要素で示すグリフで表現されます。 [`lang`](/ja/docs/Web/HTML/Global_attributes#lang) 属性を指定した場合は、さらにグリフを特定の言語 (フォントを使用する側の `xml:lang` で示されます) のみに限定することができます。繰り返しになりますがグリフを定義するために任意の SVG を用いることができ、またユーザーエージェントが対応するすばらしいエフェクトを用いることもできます。

`font` の内部では、さらに {{ SVGElement("hkern") }} と {{ SVGElement("vkern") }} の 2 つの要素を定義することができます。それぞれ、少なくとも 2 つの文字 (`u1` および `u2` 属性) への参照と、それらの文字間の距離をどの程度縮めるかを決定する属性 `k` を持ちます。以下の例では、ユーザーエージェントに "A" と "V" の文字を標準的な文字間の距離よりも近づけるように指示しています。

```html
<hkern u1="A" u2="V" k="20" />
```

## フォントの参照

これはとても単純です。これまで説明したようにフォントの宣言をひとまとめに収めた場合は、`font-family` 属性を用いるだけでよいのです。

```html
<font>
  <font-face font-family="Super Sans" />
  <!-- and so on -->
</font>

<text font-family="Super Sans">My text uses Super Sans</text>
```

ただし、どこでどのようにフォントを定義するかの自由のために、複数の方法を自由に組み合わせてもかまいません。

### オプション: CSS @font-face の使用

リモートの (またはリモートでない) フォントの参照に `@font-face` を用いることができます。

```html
<font id="Super_Sans">
  <!-- and so on -->
</font>

<style>
  @font-face {
    font-family: "Super Sans";
    src: url(#Super_Sans);
  }
</style>

<text font-family="Super Sans">My text uses Super Sans</text>
```

### オプション: リモートフォントの参照

前に述べた `font-face-uri` で外部のフォントを参照することができ、高い再利用性を得ることができます。

```html
<font>
  <font-face font-family="Super Sans">
    <font-face-src>
      <font-face-uri href="fonts.svg#Super_Sans" />
    </font-face-src>
  </font-face>
</font>
```

{{ PreviousNext("Web/SVG/Tutorial/Filter_effects", "Web/SVG/Tutorial/SVG_Image_Tag") }}
