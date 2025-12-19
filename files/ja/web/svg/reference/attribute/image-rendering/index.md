---
title: image-rendering
slug: Web/SVG/Reference/Attribute/image-rendering
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`image-rendering`** 属性は、画像処理を行う際に速度と品質のトレードオフをどのように行うかについて、ブラウザーにヒントを提供します。

元のデータや出力先端末がインデックスカラーであっても、再サンプリングは常にトゥルーカラー（例：24 ビット）色空間で行われます。

> [!NOTE]
> プレゼンテーション属性であるため、 `image-rendering` には対応する CSS プロパティ {{cssxref("image-rendering")}} があります。両方が指定された場合、 CSS プロパティの方が優先されます。

この属性は、以下の SVG 要素で使用できます。

- {{SVGElement("image")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>auto</code> | <code>optimizeSpeed</code> |
        <code>optimizeQuality</code>
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `auto`
  - : ユーザーエージェントは速度と品質のバランスをとるために適切なトレードオフを行いますが、品質を速度よりもより重要視します。
- `optimizeSpeed`
  - : ユーザーエージェントが品質よりも描画速度を重視すべきであることを示します。
- `optimizeQuality`
  - : ユーザーエージェントが描画速度よりも品質を重視すべきであることを示します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("image-rendering")}} プロパティ
