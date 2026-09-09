---
title: text-rendering
slug: Web/SVG/Reference/Attribute/text-rendering
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`text-rendering`** 属性は、テキストのレンダリング時にどのようなトレードオフを行うべきかについて、レンダラーにヒントを提供します。

> [!NOTE]
> プレゼンテーション属性であるため、 `text-rendering` には対応する CSS プロパティ {{cssxref("text-rendering")}} もあります。両方が指定された場合、 CSS プロパティが優先されます。

この属性は、以下の SVG 要素で使用できます。

- {{SVGElement("text")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 140 40" xmlns="http://www.w3.org/2000/svg">
  <text y="15" text-rendering="geometricPrecision">Geometric precision</text>
  <text y="35" text-rendering="optimizeLegibility">Optimized legibility</text>
</svg>
```

{{EmbedLiveSample("Example", "420", "140")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>auto</code> | <code>optimizeSpeed</code> |
        <code>optimizeLegibility</code> | <code>geometricPrecision</code>
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>離散</td>
    </tr>
  </tbody>
</table>

- `auto`
  - : この値は、ユーザーエージェントが速度、可読性、幾何学的な精度のバランスをとるために適切な妥協を行うべきであることを示していますが、その際、速度や幾何学的精度よりも可読性をより重視する必要があります。
- `optimizeSpeed`
  - : この値は、ユーザーエージェントが可読性や幾何学的精度よりもレンダリング速度を優先することを示します。このオプションを設定すると、一部のユーザーエージェントでテキストのアンチエイリアスが無効になる場合があります。
- `optimizeLegibility`
  - : この値は、ユーザーエージェントがレンダリング速度や幾何学的精度よりも可読性を優先すべきであることを示しています。ユーザーエージェントは、最も読みやすいテキストを生成するために、アンチエイリアス技術、組み込みのフォントヒント、あるいはその両方を適用できるかどうかを多くの場合選べます。
- `geometricPrecision`
  - : この値は、ユーザーエージェントが可読性や描画速度よりも幾何学的精度を優先することを示します。このオプションを指定すると、通常、ユーザーエージェントはヒンティングの使用を停止し、{{Glossary("glyph")}} のアウトラインがパスデータの描画と同等の幾何学的精度で描画されるようになります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS {{cssxref("text-rendering")}} プロパティ
