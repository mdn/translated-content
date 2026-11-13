---
title: dur
slug: Web/SVG/Reference/Attribute/dur
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`dur`** 属性は、アニメーションの単独の再生時間を示します。

この属性は、以下の SVG 要素で使用することができます。

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
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
<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="y"
      from="0"
      to="50"
      dur="1s"
      repeatCount="indefinite" />
  </rect>
  <rect x="120" y="0" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="y"
      from="0"
      to="50"
      dur="3s"
      repeatCount="indefinite" />
  </rect>
</svg>
```

{{EmbedLiveSample("Example", "220", "150")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#clock-value"
            >&#x3C;clock-value></a
          ></code
        >
        | <code>media</code> | <code>indefinite</code>
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>indefinite</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

- `<clock-value>`
  - : この値は、単独の再生時間の長さを指定します。値は 0 より大きく、時間 (`h`)、分 (`m`)、秒 (`s`) またはミリ秒 (`ms`) で表すことができます。これらの時間表記を組み合わせて、`hh:mm:ss.iii` や `mm:ss.iii` のような複雑な持続時間を作成することもできます。
- `media`
  - : この値は、単独の再生時間を内在的なメディア再生時間で指定します。これは、メディアを定義する要素に対してのみ有効です。
    （[アニメーション要素](/ja/docs/Web/SVG/Reference/Element#アニメーション要素)の場合、`media` が指定されていると、この属性は無視されます。）
- `indefinite`
  - : この値は、単独の再生時間を「無期限」として指定します。

> [!NOTE]
> 単純な持続時間が不定の場合、{{Glossary("interpolation", "補間処理")}}は動作しません（ただし、{{SVGElement("set")}} 要素では有用な場合があります）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
