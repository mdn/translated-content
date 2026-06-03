---
title: ry
slug: Web/SVG/Reference/Attribute/ry
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`ry`** 属性は、Y 軸上の半径を定義します。

この属性は次の SVG 要素で使用できます。

- {{SVGElement("ellipse")}}
- {{SVGElement("rect")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="50" cy="50" ry="0" rx="25" />
  <ellipse cx="150" cy="50" ry="25" rx="25" />
  <ellipse cx="250" cy="50" ry="50" rx="25" />

  <rect x="20" y="120" width="60" height="60" ry="0" rx="15" />
  <rect x="120" y="120" width="60" height="60" ry="15" rx="15" />
  <rect x="220" y="120" width="60" height="60" ry="150" rx="15" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## ellipse

{{SVGElement('ellipse')}} では、`ry` は図形の Y 半径を定義します。 値が 0 以下の場合、楕円はまったく描画されません。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
        | <code>auto</code>
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

> [!NOTE]
> `<ellipse>` の Y 半径は {{cssxref("ry")}} 幾何プロパティでも定義できます。CSS で設定された場合、`ry` プロパティの値は `ry` 属性の値よりも優先されます。

## rect

{{SVGElement('rect')}} において、`ry` は、矩形の角を丸めるために使用される楕円の X 軸方向の半径を定義します。

`ry` 属性の値の解釈方法は、{{SVGAttr("rx")}} 属性と矩形の幅の両方に依存します。

- `ry` に対して適切な値が指定されているものの、{{SVGAttr("rx")}} に対しては指定されていない場合（またはその逆の場合）、ブラウザーは、指定されていない値を定義された方の値と同じものとみなします。
- `ry` にも {{SVGAttr("rx")}} にも適切な値が指定されていない場合、ブラウザーは角が直角の矩形を描画します。
- `ry` が矩形の幅の半分より大きい場合、ブラウザーは `ry` の値を矩形の幅の半分として考えてみます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
        | <code>auto</code>
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

> [!NOTE]
> `<rect>` の角の垂直方向の曲率は、{{cssxref("ry")}} 幾何プロパティでも定義できます。CSS で設定された場合、`ry` プロパティの値は `ry` 属性の値よりも優先されます。

## 仕様書

{{Specifications}}

## 関連情報

- CSS の {{cssxref("ry")}} プロパティ
