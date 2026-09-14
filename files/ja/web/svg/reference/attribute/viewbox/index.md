---
title: viewBox
slug: Web/SVG/Reference/Attribute/viewBox
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`viewBox`** 属性は、 SVG ビューポートのユーザー空間の位置と大きさを定義します。

`viewBox` 属性の値は、`min-x`、`min-y`、`width`、`height` の 4 つの数値がホワイトスペースまたはカンマで区切られたリストです。 `min-x` と `min-y` は `viewBox` が持つ可能性がある最も小さい X および Y 座標（`viewBox` の原点の座標）で、 `width` と `height` は `viewBox` の寸法を表します。結果的に `viewBox` は、ユーザー空間において SVG 要素のビューポートの境界に対応付けられた四角形になります（[ブラウザービューポート](/ja/docs/Glossary/Viewport)ではありません）。
SVG に `viewBox` 属性（[`preserveAspectRatio`](/ja/docs/Web/SVG/Reference/Attribute/preserveAspectRatio) 属性との組み合わせが多い）がある場合、座標変換により、具体的なコンテナー要素に合うように SVG ビューポートが引き伸ばされたり、サイズが変更されたりします。

## 要素

この属性は以下の節にある SVG 要素で使用することができます。

### `<marker>`

{{SVGElement('marker')}} の場合、 `viewBox` は `<marker>` 要素のコンテンツの位置と寸法を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

### `<pattern>`

{{SVGElement('pattern')}} の場合、 `viewBox` はパターンタイルのコンテンツの位置と寸法を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

### `<svg>`

{{SVGElement('svg')}} の場合、 `viewBox` は `<svg>` 要素のコンテンツの位置と寸法を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

### `<symbol>`

{{SVGElement('symbol')}} の場合、 `viewBox` は `<symbol>` 要素のコンテンツの位置と寸法を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

### `<view>`

{{SVGElement('view')}} の場合、 `viewBox` は `<view>` 要素のコンテンツの位置と寸法を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
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
  vertical-align: top;
}
svg:not(:root) {
  display: inline-block;
}
```

下記のコードには、 3 つの {{SVGElement("svg")}} がありますが、それぞれ `viewBox` 属性の値が異なっており、子要素である {{SVGElement("rect")}} と {{SVGElement("circle")}} は同一ですが、まったく異なる結果を生成します。 `<rect>` のサイズは相対単位を使用して定義されているため、 `viewBox` の値に関わらず、生成される四角形の見た目のサイズは変わりません。 `<circle>` の半径の長さである {{SVGAttr("r")}} 属性は、いずれの場合も同じですが、このユーザー単位の値は、 `viewBox` で定義されたサイズに対して解決されるため、それぞれ異なる結果が生成されます。

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100%" height="100%" />
  <circle cx="50%" cy="50%" r="4" fill="white" />
</svg>

<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100%" height="100%" />
  <circle cx="50%" cy="50%" r="4" fill="white" />
</svg>

<svg viewBox="-5 -5 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100%" height="100%" />
  <circle cx="50%" cy="50%" r="4" fill="white" />
</svg>
```

{{EmbedLiveSample("Examples", '100%', 200)}}

`r="4"` のユーザー単位は `viewBox` の大きさに対して解決されるため、著しく異なる大きさの円を生成します。 `viewBox` 属性の正確な効果は {{ SVGAttr("preserveAspectRatio") }} 属性に影響されます。

> [!NOTE]
> `width` または `height` に `0` 以下の値を指定すると、要素の描画が無効になります。

## 仕様書

{{Specifications}}
