---
title: patternTransform
slug: Web/SVG/Reference/Attribute/patternTransform
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

**`patternTransform`** 属性は、パターンタイルに適用される[座標変換定義](/ja/docs/Web/SVG/Reference/Attribute/transform#座標変換関数)のリストを定義します。

この属性は、次の SVG 要素で使用できます。

- {{SVGElement('pattern')}}

## 要素

この属性は、以下の節で説明する SVG 要素で使用できます。

### `<pattern>`

{{SVGElement('pattern')}} において、`patternTransform` はパターンタイルに適用される[座標変換定義](/ja/docs/Web/SVG/Reference/Attribute/transform#座標変換関数)のリストを定義します。

> [!NOTE]
> SVG 2 では、CSS の {{cssxref('transform')}} プロパティも使用できます。ただし、現在の実装状況は十分ではありません。後方互換性のため、`patternTransform` 属性を使用し続けることを強く推奨します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <a href="/ja/docs/Web/SVG/Reference/Attribute/transform#座標変換関数"
          >&#x3C;transform-list></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><em>恒等変換</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- タイルに座標変換を適用 -->
  <pattern
    id="p1"
    width=".25"
    height=".25"
    patternTransform="rotate(20)
                      skewX(30)
                      scale(1 0.5)">
    <circle cx="10" cy="10" r="10" />
  </pattern>

  <!-- 座標変換したパターンタイルを適用 -->
  <rect x="10" y="10" width="80" height="80" fill="url(#p1)" />
</svg>
```

{{EmbedLiveSample("Examples", '100%', 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGAttr("transform")}}
