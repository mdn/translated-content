---
title: <clipPath>
slug: Web/SVG/Reference/Element/clipPath
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`<clipPath>`** は [SVG](/ja/docs/Web/SVG) の要素で、 {{SVGAttr("clip-path")}} プロパティで使用されるクリッピングパスを定義します。

クリッピングパスは、描画が適用される領域を制限する。概念的には、クリッピングパスで囲まれた領域の外にある部分は描画されません。

## 使用コンテキスト

{{svginfo}}

## 属性

- {{SVGAttr("clipPathUnits")}}
  - : `<clipPath>` 要素のコンテンツの座標系を定義します。
    _値の型_: `userSpaceOnUse` | `objectBoundingBox`; _デフォルト値_: `userSpaceOnUse`; _アニメーション_: **可**

## DOM インターフェイス

この要素は {{domxref("SVGClipPathElement")}} インターフェイスを実装しています。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100">
  <clipPath id="myClip">
    <!--
      円の外側にあるものはすべて切り取られるため、
      見えなくなります。
    -->
    <circle cx="40" cy="35" r="35" />
  </clipPath>

  <!-- 参照用の元の黒いハート -->
  <path
    id="heart"
    d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z" />

  <!--
    クリップの円の中にある赤いハートの一部だけが、
    見えるようになっています。
  -->
  <use clip-path="url(#myClip)" href="#heart" fill="red" />
</svg>
```

```css
/* r 幾何プロパティを実装しているブラウザー向けに CSS を少し追加 */

@keyframes openYourHeart {
  from {
    r: 0;
  }
  to {
    r: 60px;
  }
}

#myClip circle {
  animation: openYourHeart 15s infinite;
}
```

{{EmbedLiveSample('Example', 100, 100)}}

クリッピングパスは、概念的には、参照している要素のカスタムビューポートと同じです。したがって、要素のレンダリングに影響を与えますが、要素の内在的な形状には影響を与えません。クリッピングされた要素（`<clipPath>` 要素を {{SVGAttr("clip-path")}} プロパティで参照している要素、または参照している要素の子）のバウンディングボックスは、クリッピングされていない場合と同じでなければなりません。

デフォルトでは、クリップされた領域では {{cssxref("pointer-events")}} が発行されません。例えば、半径 `10` の円が半径 `5` の円でクリッピングされている場合、小さい方の半径の外側では "click" イベントを受け取ることはありません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- クリッピングとマスクの SVG 要素: {{SVGElement("mask")}}
- CSS の {{cssxref("clip-path")}} プロパティ
- [CSS クリッピング入門](/ja/docs/Web/CSS/Guides/Masking/Clipping)
- [CSS マスク](/ja/docs/Web/CSS/Guides/Masking/Clipping)モジュール
