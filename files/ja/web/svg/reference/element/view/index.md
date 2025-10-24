---
title: <view>
slug: Web/SVG/Reference/Element/view
l10n:
  sourceCommit: d22284cbba8b64afd6ad8c965d4ac2c927c59550
---

**`<view>`** は [SVG](/ja/docs/Web/SVG) の要素で、 SVG 文書の具体的なビューを定義します。特定のビューは、`<view>` 要素の [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) を URL のターゲットフラグメントとして参照することで表示できます。

## 使用コンテキスト

{{svginfo}}

## 属性

- {{SVGAttr("preserveAspectRatio")}}
  - : この属性は、 SVG の断片が{{glossary("aspect ratio", "アスペクト比")}}異なるコンテナーに埋め込まれた場合、どのように変形するべきかを定義します。
    値の型: (`none` | `xMinYMin` | `xMidYMin` | `xMaxYMin` | `xMinYMid` | `xMidYMid` | `xMaxYMid` | `xMinYMax` | `xMidYMax` | `xMaxYMax`) (`meet` | `slice`)?; 既定値: `xMidYMid meet`; アニメーション: **可**
- {{SVGAttr("viewBox")}}
  - : この属性は、現在の SVG 断片の SVG ビューポートの境界を定義します。
    値の型: **[\<list-of-numbers>](/ja/docs/Web/SVG/Guides/Content_type#list-of-ts)**; 既定値: none; アニメーション: **可**
- {{SVGAttr("zoomAndPan")}} {{Deprecated_Inline}}
  - : この属性は、SVG文書が拡大・縮小およびパン操作することができるかどうかを指定します。
    値の型: **disable | magnify**; 既定値: magnify; アニメーション: **不可**

## DOM インターフェイス

この要素は {{domxref("SVGViewElement")}} インターフェイスを実装しています。

## 例

### SVG

```svg
<svg viewBox="0 0 300 100" width="300" height="100"
      xmlns="http://www.w3.org/2000/svg">

  <view id="one" viewBox="0 0 100 100" />
  <circle cx="50" cy="50" r="40" fill="red" />

  <view id="two" viewBox="100 0 100 100" />
  <circle cx="150" cy="50" r="40" fill="green" />

  <view id="three" viewBox="200 0 100 100" />
  <circle cx="250" cy="50" r="40" fill="blue" />
</svg>
```

### HTML

```html
<img src="example.svg" alt="3 つの丸" width="300" height="100" />
<br />
<img src="example.svg#three" alt="青い丸" width="100" height="100" />
```

### 結果

{{EmbedLiveSample("Example", "85ch", "240px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
