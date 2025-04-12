---
title: font-size
slug: Web/SVG/Reference/Attribute/font-size
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`font-size`** フォントサイズ属性は、複数行レイアウト環境でテキストを複数行にわたって設定する際に、{{Glossary("baseline/typography", "ベースライン")}}からベースラインまでのフォントのサイズを参照します。

> [!NOTE]
> プレゼンテーション属性であるため、 `font-size` には対応する CSS プロパティ {{cssxref("font-size")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

この属性は以下の SVG 要素で使用できます。

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
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
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <text y="20" font-size="smaller">smaller</text>
  <text x="100" y="20" font-size="2em">2em</text>
</svg>
```

{{EmbedLiveSample("Example", "200", "30")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>&#x3C;absolute-size></code> | <code>&#x3C;relative-size></code> |
        <code>&#x3C;length-percentage></code>
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>medium</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

値の説明については、 [CSS の `font-size`](/ja/docs/Web/CSS/font-size#値) プロパティを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("font-size")}} プロパティ
