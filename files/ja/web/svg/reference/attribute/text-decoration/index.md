---
title: text-decoration
slug: Web/SVG/Reference/Attribute/text-decoration
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**`text-decoration`** 属性は、テキストに下線、上線、取り消し線を適用するかどうかを定義します。これは、{{cssxref("text-decoration-line")}} および {{cssxref("text-decoration-style")}} プロパティの一括指定です。

テキスト装飾の塗りつぶしと線は、そのテキスト装飾が宣言されている箇所におけるテキストの塗りつぶしと線によって指定されます。

テキスト装飾（つまり、塗りつぶしと輪郭線）の描画順序は、テキスト装飾が宣言されている箇所における {{SVGAttr("paint-order")}} 属性の値によって決定されます。

> [!NOTE]
> プレゼンテーション属性であるため、 `text-decoration` には対応する CSS プロパティ {{cssxref("text-decoration")}} もあります。両方が指定された場合、 CSS プロパティが優先されます。

この属性は、以下の SVG 要素で使用できます。

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
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
<svg viewBox="0 0 250 50" xmlns="http://www.w3.org/2000/svg">
  <text y="20" text-decoration="underline">下線を引いたテキスト</text>
  <text x="0" y="40" text-decoration="line-through">取り消し線を引いたテキスト</text>
</svg>
```

{{EmbedLiveSample("Example", "250", "100")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/CSS/Reference/Properties/text-decoration-line"
            >&#x3C;'text-decoration-line'></a
          ></code
        >
        ||
        <code
          ><a href="/ja/docs/Web/CSS/Reference/Properties/text-decoration-style"
            >&#x3C;'text-decoration-style'></a
          ></code
        >
        ||
        <code
          ><a href="/ja/docs/Web/CSS/Reference/Properties/text-decoration-color"
            >&#x3C;'text-decoration-color'></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td>それぞれのプロパティを参照</td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

値の説明は、[CSS の `text-decoration`](/ja/docs/Web/CSS/Reference/Properties/text-decoration#values) プロパティを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS {{cssxref("text-decoration")}} プロパティ
