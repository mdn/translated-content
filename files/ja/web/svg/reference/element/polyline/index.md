---
title: <polyline>
slug: Web/SVG/Reference/Element/polyline
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

**`<polyline>`** は [SVG](/ja/docs/Web/SVG) の要素で、複数の点を結ぶ直線を作成する SVG の基本図形です。一般的に `polyline` は開いた図形を作成するために用いられます。最後の点は最初の点に接続されている必要はないからです。閉じた図形については {{SVGElement("polygon")}} 要素を参照してください。

## 使用コンテキスト

{{svginfo}}

## 属性

- {{SVGAttr('points')}}
  - : この属性は、連続線を描画するのに必要な点（x,y の絶対座標の組）のリストを定義します。
    _値の型_: [**\<number>**](/ja/docs/Web/SVG/Guides/Content_type#number)+; _デフォルト値_: `""`; _アニメーション_: **可**
- {{SVGAttr("pathLength")}}
  - : この属性は、パスの全長をユーザー単位で指定します。
    _値の型_: [**\<number>**](/ja/docs/Web/SVG/Guides/Content_type#number); _デフォルト値_: _なし_; _アニメーション_: **可**

## DOM インターフェイス

この要素は {{domxref("SVGPolylineElement")}} インターフェイスを実装しています。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- デフォルトの塗りつぶしによるポリラインの例 -->
  <polyline points="0,100 50,25 50,75 100,0" />

  <!-- 線があり塗りつぶしのない、同じポリライン図形の例 -->
  <polyline points="100,100 150,25 150,75 200,0" fill="none" stroke="black" />
</svg>
```

{{EmbedLiveSample('Example', 100, 100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [SVG プレゼンテーション属性](/ja/docs/Web/SVG/Reference/Attribute#プレゼンテーション属性)、{{SVGAttr("fill")}} や {{SVGAttr("stroke")}} など
- その他の SVG 基本図形: {{ SVGElement('circle') }}, {{ SVGElement('ellipse') }}, **{{ SVGElement('line') }}**, **{{ SVGElement('polygon') }}**, {{ SVGElement('rect') }}
