---
title: overflow
slug: Web/SVG/Reference/Attribute/overflow
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`overflow`** 属性は、要素のコンテンツがブロック整形コンテキストに収まりきらない場合に、どうするかを設定します。**この機能は、まだ広く実装されていません**。

この属性は、CSS の {{cssxref("overflow")}} プロパティと同じ引数の値と意味を持ちますが、以下の追加の点が適用されます。

- 値が `visible` であった場合、この属性は効果がありません（すなわち、切り取り矩形は作成されません）。
- `overflow` プロパティが `hidden` または `scroll` の値である場合、SVG ビューポートの正確なサイズでの切り取りが適用されます。
- `scroll` が {{SVGElement("svg")}} 要素で指定された場合、コンテンツが切り取られるかどうかにかかわらず、スクロールバーまたはパンナーが SVG ビューポートに表示されます。
- SVG コンテンツ内では、`auto` の値は子要素のすべての描画されたコンテンツが、スクロール機構を用いるか、切り取りなしか、どちらかの形で表示されることを示します。

> [!NOTE]
> overflow の初期値は `auto` ですが、スタンドアロン文書のルート要素でない場合、 {{SVGElement("svg")}} 要素のユーザーエージェントスタイルシートで上書きされるため、{{SVGElement("pattern")}} 要素、および {{SVGElement("marker")}} 要素は既定では非表示となります。

> [!NOTE]
> プレゼンテーション属性であるため、 `overflow` には対応する CSS プロパティ {{cssxref("overflow")}} があります。両方が指定された場合、 CSS プロパティの方が優先されます。

この属性は次の SVG 要素で使用できます。

- {{SVGElement("foreignObject")}}
- {{SVGElement("image")}}
- {{SVGElement("marker")}}
- {{SVGElement("pattern")}}
- {{SVGElement("symbol")}}
- {{SVGElement("svg")}}
- {{SVGElement("text")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html-nolint
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg" overflow="auto">
  <text y="20">
    このテキストは SVG よりも幅が広いので、スクロールバーを表示させる必要があります。
  </text>
</svg>
```

{{EmbedLiveSample("Example", "200", "50")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>visible</code> | <code>hidden</code> | <code>scroll</code> |
        <code>auto</code>
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>visible</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

値の説明については、CSS の {{cssxref("overflow")}} プロパティを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("overflow")}} プロパティ
