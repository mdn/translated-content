---
title: startOffset
slug: Web/SVG/Reference/Attribute/startOffset
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`startOffset`** 属性は、パスを {{SVGElement("textPath")}} 要素の座標系に変換した後、パス上の現在の初期テキスト位置をパスの開始点からずらすオフセットを定義します。

この属性は、次の SVG 要素で使用することができます。

- {{SVGElement("textPath")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
  <path
    id="path1"
    fill="none"
    stroke="red"
    d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50" />
  <path
    id="path2"
    fill="none"
    stroke="red"
    d="M130,90 Q210,90 210,45 Q210,10 170,10 Q130,10 130,40 Q130,70 165,70 Q190,70 195,50" />

  <text>
    <textPath href="#path1" startOffset="0">
      Quick brown fox jumps over the lazy dog.
    </textPath>
  </text>

  <text>
    <textPath href="#path2" startOffset="40">
      Quick brown fox jumps over the lazy dog.
    </textPath>
  </text>
</svg>
```

{{EmbedLiveSample("Example", 400, 200)}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        {{cssxref("length-percentage")}} |
        {{cssxref("number")}}
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `<length-percentage>`
  - : この {{SVGElement("textPath")}} 要素の現在のユーザー座標系で測定されたパス上の距離を表します。

    パーセント指定がされている場合、開始オフセットはパス全体の距離に対するパーセント値を表します。したがって、`0%` はパスの開始点を示し、`100%` はパスの終点を示します。

- `<number>`
  - : この値は、`<textPath>` 要素の現在のユーザー座標系で測定されたパスに沿った距離を示します。

> [!NOTE]
> 負の数値およびパス長を超える値（例： `150%`）も使用可能です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
