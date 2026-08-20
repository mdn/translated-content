---
title: attributeType
slug: Web/SVG/Reference/Attribute/attributeType
l10n:
  sourceCommit: db01d0c8b4cbf8a4467b1db65e17f6724d0ce710
---

{{Deprecated_Header}}

**`attributeType`** 属性は、対象の属性およびそれに関連付けられた値が定義されている名前空間を指定します。

この属性は、以下の SVG 要素で使用できます。

- {{SVGElement("animate")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="50" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="y"
      from="0"
      to="50"
      dur="5s"
      repeatCount="indefinite" />
  </rect>
</svg>
```

{{EmbedLiveSample("Example", "400", "250")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>CSS</code> | <code>XML</code> | <code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

- `CSS`
  - : この値は、{{SVGAttr("attributeName")}} の値が、アニメーション可能として定義された CSS プロパティの名前であることを指定します。
- `XML`
  - : この値は、{{SVGAttr("attributeName")}} の値が、対象要素のデフォルトの XML 名前空間において「アニメーション可能」として定義された XML 属性の名前であることを指定します。
- `auto`
  - : この値は、実装において {{SVGAttr("attributeName")}} を対象要素の属性と照合するよう指定します。ユーザーエージェントはまず、CSS プロパティのリストから一致するプロパティ名を検索し、見つからない場合は、その要素のデフォルトの XML 名前空間を検索します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [SMIL による SVG アニメーション](/ja/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
