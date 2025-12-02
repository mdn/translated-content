---
title: <use>
slug: Web/SVG/Reference/Element/use
l10n:
  sourceCommit: 34c204f8f6c3f7ac60ebb23fca9798680aee9956
---

**`<use>`** 要素は SVG 文書の中からノード取り出して、別の場所に複製します。
効果は、あたかもそのノードが非公開の DOM に配下を含めて複製され、 `use` 要素がある場所に貼り付けられたかのようになり、 [template 要素](/ja/docs/Web/HTML/Reference/Elements/template)ととても似ています。

## 例

次の例は、`use` 要素を使用して、塗りつぶし色と線の色が異なる円を描画する方法を示しています。
最後の円では、線は `myCircle` で既に設定されているため、`stroke="red"` は無視されます。

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
  <circle id="myCircle" cx="5" cy="5" r="4" stroke="blue" />
  <use href="#myCircle" x="10" fill="blue" />
  <use href="#myCircle" x="20" fill="white" stroke="red" />
</svg>
```

{{EmbedLiveSample('Example', 200, 200)}}

## 属性

- {{SVGAttr("href")}}
  - : 複製する必要がある要素やフラグメントへの URL です。
    _値の型_: [**`<URL>`**](/ja/docs/Web/SVG/Guides/Content_type#url); _既定値_: none; _アニメーション_: **可**
- {{SVGAttr("xlink:href")}} {{Deprecated_Inline}}
  - : 複製する必要がある要素やフラグメントの [`<IRI>`](/ja/docs/Web/SVG/Guides/Content_type#iri) 参照です。 {{SVGAttr("href")}} と {{SVGAttr("xlink:href")}} の両方が存在する場合、 {{SVGAttr("href")}} で指定された値が使用されます。<br/>_値の型_: [**`<IRI>`**](/ja/docs/Web/SVG/Guides/Content_type#iri); _既定値_: none; _アニメーション_: **可**
- {{SVGAttr("x")}}
  - : この use 要素の X 座標です。<br/>_値の型_: [**`<coordinate>`**](/ja/docs/Web/SVG/Guides/Content_type#coordinate); _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr("y")}}
  - : この use 要素の Y 座標です。<br/>_値の型_: [**`<coordinate>`**](/ja/docs/Web/SVG/Guides/Content_type#coordinate); _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr("width")}}
  - : この use 要素の幅です。<br/>_値の型_: [**`<length>`**](/ja/docs/Web/SVG/Guides/Content_type#length); _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr("height")}}
  - : この use 要素の高さです。<br/>_値の型_: [**`<length>`**](/ja/docs/Web/SVG/Guides/Content_type#length); _既定値_: `0`; _アニメーション_: **可**

> [!NOTE]
> `width` および `height` は `use` 要素では効果がありません。ただし、参照される要素に [viewBox](/ja/docs/Web/SVG/Reference/Attribute/viewBox) がある場合を除きます。 すなわち、 `use` が `svg` または `symbol` 要素を参照していた時だけ効果があります。

> [!NOTE]
> SVG2 から、 `x`, `y`, `width`, `height` は*位置プロパティ*となり、すなわちこれらの属性がその要素への CSS プロパティとしても使用することができるようになりました。

## 使用上のメモ

`use` のほとんどの属性は、 `use` から*参照*される要素に既にある属性を上書き**しません**。 (これは CSS のスタイル属性がカスケードで「以前」に設定されたものを上書きする方法とは異なります)。
参照された要素が対応する属性をすでに定義している場合、 `use` 要素の {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}, {{SVGAttr("href")}} の各属性**のみ**、後述するする効果を持つ、あるいは持つ可能性があります。ただし、参照された要素に設定されていないその他の属性は、 `use` 要素に適用される**可能性があります**。

クローンされたノードは公開されないので、 [CSS](/ja/docs/Web/CSS) を使って `use` 要素とその隠れた子孫要素にスタイル付けをする場合は注意が必要です。[CSS の継承](/ja/docs/Web/CSS/Guides/Cascade/Inheritance)を使用して明示的に要求しない限り、CSS 属性は隠された複製の DOM によって継承されることが保証されません。

セキュリティ上の理由で、ブラウザーは[同一オリジンポリシー](/ja/docs/Web/Security/Defenses/Same-origin_policy)を `use` 要素に適用して、 {{SVGAttr("href")}} 属性にあるオリジンをまたがる URL を読み込むことを拒否することがあります。現在のところ、 `use` 要素の同一オリジンポリシーを設定する方法は定義されていません。

> [!WARNING]
> セキュリティ上の理由から、 `href` 属性にデータ URI を使用してリソースを読み込むことは非推奨となっています。
> これは、`<use href="data:...`、および [`set`](/ja/docs/Web/SVG/Reference/Element/set) または [`setAttribute`](/ja/docs/Web/API/Element/setAttribute) メソッドを使用して `href` を設定する場合にも適用されます。
> さまざまなブラウザーのバージョンでの対応状況については、[ブラウザーの互換性](#ブラウザーの互換性)表の "Load from data: URI" を参照してください。

> [!WARNING]
> SVG 2 で {{SVGAttr("xlink:href")}} 属性が非推奨になり、 {{SVGAttr("href")}} に置き換えられました。詳しくは {{SVGAttr("xlink:href")}} のページを参照してください。

## 使用コンテキスト

{{SVGInfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
