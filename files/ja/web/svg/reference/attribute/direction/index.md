---
title: direction
slug: Web/SVG/Reference/Attribute/direction
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

**`direction`** 属性は、{{SVGElement("text")}} または {{SVGElement("tspan")}} 要素のインラインベース方向を指定します。これは、{{SVGAttr("text-anchor")}} および {{cssxref("inline-size")}} プロパティで使用されるテキスト行の先頭と末尾の位置を定義します。また、{{SVGAttr("unicode-bidi")}} プロパティの値が `embed` または `bidi-override` のどちらかである場合、文字が配置される方向にも影響を与える可能性があります。

これは、インラインベース方向に対して垂直に配置された文字にのみ適用されます。これには、一般的な横書きのラテン文字やアラビア文字の場合、およびインラインベース方向に対して時計回りに 90 度回転させた狭幅セルの縦書きのラテン文字やアラビア文字の場合が含まれます。

多くの場合、双方向 Unicode アルゴリズムが自動的に望ましい結果を生成するため、そのような場合ではこの属性を指定する必要はありません。右書き言語を使用する場合など、その他の場合は、`direction` 属性を最外層の {{SVGElement("svg")}} 要素に追加し、その方向をすべてのテキスト要素に継承することができることで十分である場合があります。

> [!NOTE]
> プレゼンテーション属性であるため、 `direction` には対応する CSS プロパティ {{cssxref("direction")}} もあります。両方が指定された場合、 CSS プロパティが優先されます。

この属性は次の SVG 要素に使用することができます。

- {{SVGElement("textPath")}}
- {{SVGElement("text")}}
- {{SVGElement("tspan")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 600 72"
  xmlns="http://www.w3.org/2000/svg"
  direction="rtl"
  lang="fa">
  <text x="300" y="50" text-anchor="middle" font-size="36">
    داستان SVG 1.1 SE طولا ني است.
  </text>
</svg>
```

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>ltr</code> | <code>rtl</code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>ltr</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("direction")}} プロパティ
