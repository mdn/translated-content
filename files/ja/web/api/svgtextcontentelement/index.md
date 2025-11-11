---
title: SVGTextContentElement
slug: Web/API/SVGTextContentElement
l10n:
  sourceCommit: 84cab3d0973d23ac3f00448784c55fe3f0c948ad
---

{{APIRef("SVG")}}

**`SVGTextContentElement`** インターフェイスは、子テキストコンテンツのレンダリングに対応している要素によって実装されています。これは、{{domxref("SVGTextElement")}}、{{domxref("SVGTSpanElement")}}、{{domxref("SVGTRefElement")}}、{{domxref("SVGTextPathElement")}} など、さまざまなテキスト関連のインターフェイスが継承しています。

{{InheritanceDiagram}}

## 定数

<table class="standard-table">
  <tbody>
    <tr>
      <td>定数</td>
      <td>値</td>
      <td>説明</td>
    </tr>
    <tr>
      <td>LENGTHADJUST_UNKNOWN</td>
      <td>0</td>
      <td>それ以外の値。</td>
    </tr>
    <tr>
      <td>LENGTHADJUST_SPACING</td>
      <td>1</td>
      <td><code>spacing</code> キーワード。</td>
    </tr>
    <tr>
      <td>LENGTHADJUST_SPACINGANDGLYPHS</td>
      <td>2</td>
      <td><code>spacingAndGlyphs</code> キーワード。</td>
    </tr>
  </tbody>
</table>

## インスタンスプロパティ

_このインターフェイスには、親である {{domxref("SVGGraphicsElement")}} から継承したプロパティもあります。_

- {{domxref("SVGTextContentElement.textLength")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedLength")}} で、指定された要素の {{SVGAttr("textLength")}} 属性を反映します。
- {{domxref("SVGTextContentElement.lengthAdjust")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedEnumeration")}} で、指定された要素の {{SVGAttr("lengthAdjust")}} 属性を反映します。数値型の値は、上記の定数値のいずれかを表します。

## インスタンスメソッド

_このインターフェイスには、親である {{domxref("SVGGraphicsElement")}} から継承したメソッドもあります。_

- {{domxref("SVGTextContentElement.getNumberOfChars()")}}
  - : 現在の要素内でレンダリングに利用できる表記可能な文字の総数を、レンダリングされるかどうかに関係なく、表す long 値を返します。
- {{domxref("SVGTextContentElement.getComputedTextLength()")}}
  - : 要素内のテキストの長さの計算値を表す float 値を返します。
- {{domxref("SVGTextContentElement.getSubStringLength()")}}
  - : 要素内のテキストの一部分の書式化されたテキストの進む距離を表す float 値を返します。このメソッドは、テキストの一部分のグリフの幅と、 CSS の `letter-spacing` および `word-spacing` プロパティによって挿入される追加の間隔のみを考慮します。 `x` 属性によって視覚的に調整された間隔は無視されます。
- {{domxref("SVGTextContentElement.getStartPositionOfChar()")}}
  - : テキストのレイアウトが実行された後の組版文字の位置を表す {{domxref("DOMPoint")}} を返します。

    > [!NOTE]
    > SVG 1.1 では、このメソッドは {{domxref("SVGPoint")}} を返していました。

- {{domxref("SVGTextContentElement.getEndPositionOfChar()")}}
  - : テキストのレイアウトが行われた後の組版文字の末尾の位置を表す {{domxref("DOMPoint")}} を返します。

    > [!NOTE]
    > SVG 1.1 では、このメソッドは {{domxref("SVGPoint")}} を返していました。

- {{domxref("SVGTextContentElement.getExtentOfChar()")}}
  - : 指定されたタイポグラフィ文字に対応するグリフセルの最小境界ボックスの計算値を表す {{domxref("DOMRect")}} を返します。
- {{domxref("SVGTextContentElement.getRotationOfChar()")}}
  - : 組版文字の回転を表す float 文字を返します。
- {{domxref("SVGTextContentElement.getCharNumAtPosition()")}}
  - : 指定された座標位置にテキストグリフをレンダリングさせた文字を表す long 値を返します。文字とグリフの関係は一対一ではないため、関連するタイポグラフィ文字の最初の文字のみが返されます。
- {{domxref("SVGTextContentElement.selectSubString()")}} {{deprecated_inline}}
  - : 要素内のテキストを選択します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
