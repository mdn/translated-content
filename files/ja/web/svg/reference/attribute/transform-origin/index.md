---
title: transform-origin
slug: Web/SVG/Reference/Attribute/transform-origin
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**`transform-origin`** は SVG の属性で、アイテムの座標変換の原点を設定します。

この属性は、あらゆる SVG 要素に対して使用することができます。

> [!NOTE]
> プレゼンテーション属性であるため、`transform-origin` には対応する CSS プロパティ {{cssxref("transform-origin")}} もあります。両方が指定された場合、 CSS プロパティが優先されます。

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <td><strong>値</strong></td>
      <td>See {{cssxref("transform-origin", "", "#formal_syntax")}}</td>
    </tr>
    <tr>
      <td><strong>デフォルト値</strong></td>
      <td><code>0 0</code></td>
    </tr>
    <tr>
      <td><strong>アニメーション</strong></td>
      <td>可</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> `transform-origin` のデフォルト値は、すべての SVG 要素で `0 0` ですが、ルートの `<svg>` 要素および `<svg>` 要素のうち直接の子に [`foreignObject`](/ja/docs/Web/SVG/Reference/Element/foreignObject) があるものは例外です。これらの要素は、通常の CSS と同じく `transform-origin: 50% 50%` です。

指定された長さ、パーセント値、およびキーワード（`left`、`center`、`right`、`top`、`bottom`）はすべて、[参照ボックス](/ja/docs/Web/CSS/Reference/Properties/transform-box)を基準としています。`transform-box` のデフォルト値は `view-box` であるため、要素自体に関連付けられた CSS レイアウトボックスがない限り、変換原点の座標は SVG 要素の `viewBox` を基準とします。

## 例

次の例は、矩形ボックスを数値の異なる `transform-origin` を中心に 30° 回転させる様子を示しています。
それぞれの場合では、SVG が宣言され、最初に破線の赤い輪郭で元のボックスが描画され、続いてライム色で回転後のボックスが描画され、そして `transform-origin` の位置が赤い十字マーカーとして描画されます。

### デフォルトの transform-origin

デフォルトでは、`transform-origin` の値は `0 0` であり、これは `viewBox` の原点に配置されています。 下記の例では、`viewBox` を負の値まで拡張し、十字マーカー全体を表示できるようにしています。また、常に `<svg>` 要素の左上角とは限らない点にも注意して ください。

```html
<svg
  viewBox="-10 -10 300 300"
  xmlns="http://www.w3.org/2000/svg"
  width="310"
  height="310">
  <rect
    x="60"
    y="10"
    width="180"
    height="180"
    fill="none"
    stroke="red"
    stroke-width="3"
    stroke-dasharray="3 3" />
  <rect
    x="60"
    y="10"
    width="180"
    height="180"
    fill="lime"
    opacity="0.5"
    transform="rotate(30)" />
  <g transform="translate(0 0)">
    <circle cx="0" cy="0" r="3" fill="red" opacity="0.5" />
    <path d="M -8 0 h 16 m -8 -8 v 16" fill="none" stroke="red" />
    <circle cx="0" cy="0" r="6" fill="none" stroke="red" />
  </g>
</svg>
```

{{ EmbedLiveSample('default_transform-origin', 400, 310) }}

### transform-origin を中央に配置

下記の例では、`transform-origin` を `center` に設定しています。これにより、原点は `viewBox` の中心に配置されますが、座標変換対象の要素の中心には配置されません。

```html
<svg
  viewBox="-10 -10 300 300"
  xmlns="http://www.w3.org/2000/svg"
  width="310"
  height="310">
  <rect
    x="60"
    y="10"
    width="180"
    height="180"
    fill="none"
    stroke="red"
    stroke-width="3"
    stroke-dasharray="3 3" />
  <rect
    x="60"
    y="10"
    width="180"
    height="180"
    fill="lime"
    opacity="0.5"
    transform="rotate(30)"
    transform-origin="center" />
  <g transform="translate(150 150)">
    <circle cx="0" cy="0" r="3" fill="red" opacity="0.5" />
    <path d="M -8 0 h 16 m -8 -8 v 16" fill="none" stroke="red" />
    <circle cx="0" cy="0" r="6" fill="none" stroke="red" />
  </g>
</svg>
```

{{ EmbedLiveSample('center_transform-origin', 400, 310) }}

### 座標変換された要素に相対的な transform-origin

`transform-origin` を座標変換対象要素に対して相対的に設定するために、`transform-box` プロパティを使用することができます。下記では `transform-box` を `fill-box` に設定し、これにより `transform-origin` が座標変換対象要素の境界ボックスに対して相対的な位置になります。

```html
<svg
  viewBox="-10 -10 300 300"
  xmlns="http://www.w3.org/2000/svg"
  width="310"
  height="310">
  <rect
    x="60"
    y="10"
    width="180"
    height="180"
    fill="none"
    stroke="red"
    stroke-width="3"
    stroke-dasharray="3 3" />
  <rect
    class="transformed-elem"
    x="60"
    y="10"
    width="180"
    height="180"
    fill="lime"
    opacity="0.5"
    transform="rotate(30)"
    transform-origin="center" />
  <g transform="translate(150 100)">
    <circle cx="0" cy="0" r="3" fill="red" opacity="0.5" />
    <path d="M -8 0 h 16 m -8 -8 v 16" fill="none" stroke="red" />
    <circle cx="0" cy="0" r="6" fill="none" stroke="red" />
  </g>
</svg>
```

```css
.transformed-elem {
  transform-box: fill-box;
}
```

{{ EmbedLiveSample('transform-origin relative to the transformed element', 400, 310) }}

それ以外の例は CSS の {{cssxref("transform-origin")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("transform-origin")}} プロパティ
