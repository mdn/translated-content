---
title: <text>
slug: Web/SVG/Reference/Element/text
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

**`<text>`** は [SVG](/ja/docs/Web/SVG) の要素で、テキストからなるグラフィク要素を定義します。`<text>` には、他の SVG グラフィク要素と同じように、グラデーション、パターン、クリッピングパス、マスク、フィルターなどを適用することができます。

SVG 内でテキストが `<text>` 要素内以外で組み込まれた場合、レンダリングされません。これは非表示になるのが既定だというわけではなく、{{SVGAttr('display')}} を変更してもテキストは表示されません。

> [!NOTE]
> 既定では `<text>` 要素は折り返されません。これを実現するには CSS の {{CSSXRef("white-space")}} プロパティでスタイル設定する必要があります。

## 使用コンテキスト

{{svginfo}}

## 属性

- {{SVGAttr("x")}}
  - : テキストのベースラインの始点の x 座標、 または値のリストが指定されている場合は個々のグリフの x 座標。
    _値の型_: ([**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage)) のリスト; _デフォルト値_: `0`; _アニメーション_: **可**
- {{SVGAttr("y")}}
  - : テキストのベースラインの始点の y 座標、 または値のリストが指定されている場合は個々のグリフの y 座標。
    _値の型_: ([**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage)) のリスト; _デフォルト値_: `0`; _アニメーション_: **可**
- {{SVGAttr("dx")}}
  - : テキスト位置を前回のテキスト要素から水平方向にずらすか、値のリストが指定された場合は個々のグリフの位置をずらします。
    _値の型_: ([**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage)) のリスト; _デフォルト値_: _none_; _アニメーション_: **可**
- {{SVGAttr("dy")}}
  - : テキスト位置を前回のテキスト要素から垂直方向にずらすか、値のリストが指定された場合は個々のグリフの位置をずらします。
    _値の型_: ([**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage)) のリスト; _デフォルト値_: _none_; _アニメーション_: **可**
- {{SVGAttr("rotate")}}
  - : 個々のグリフの方向を回転します。グリフを個別に回転可能です。
    _値の型_: [**\<list-of-number>**](/ja/docs/Web/SVG/Guides/Content_type#list-of-ts); _デフォルト値_: none; _アニメーション_: **可**
- {{SVGAttr("lengthAdjust")}}
  - : `textLength` 属性で定義する幅に収まるようにテキストをどのように伸縮させるか。
    _値の型_: `spacing`|`spacingAndGlyphs`; _デフォルト値_: `spacing`; _アニメーション_: **可**
- {{SVGAttr("textLength")}}
  - : テキストを合わせるために変倍する幅。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage); _デフォルト値_: _none_; _アニメーション_: **可**

## DOM インターフェイス

この要素は {{domxref("SVGTextElement")}} インターフェイスを実装しています。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
  <style>
    .small {
      font: italic 13px sans-serif;
    }
    .heavy {
      font: bold 30px sans-serif;
    }

    /* テキストの色は fill プロパティで設定されます。 *
     * color プロパティは HTML でのみ使用されます。   */
    .Rrrrr {
      font: italic 40px serif;
      fill: red;
    }
  </style>

  <text x="20" y="35" class="small">My</text>
  <text x="40" y="35" class="heavy">cat</text>
  <text x="55" y="55" class="small">is</text>
  <text x="65" y="55" class="Rrrrr">Grumpy!</text>
</svg>
```

{{EmbedLiveSample('Example', 100, '100%')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSXRef("white-space", "", "#svg_の_text_要素内の複数行")}}
- {{SVGElement("tspan")}}
