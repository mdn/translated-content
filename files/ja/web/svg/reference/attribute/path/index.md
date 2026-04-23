---
title: path
slug: Web/SVG/Reference/Attribute/path
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`path`** 属性には 2 つの異なる意味があります。テキストの文字がレンダリングされるテキストパスを定義する場合と、参照された要素がアニメーションされるモーションパスを定義する場合です。

この属性は、次の SVG 要素で使用することができます。

- {{SVGElement("animateMotion")}}
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
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    id="MyPath"
    fill="none"
    stroke="silver"
    d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50" />

  <text>
    <textPath
      path="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50">
      Quick brown fox jumps over the lazy dog.
    </textPath>
  </text>
</svg>
```

{{EmbedLiveSample("例", "420", "220")}}

## animateMotion

{{SVGElement("animateMotion")}} における `path` は、モーションパスを定義します。このパスは、{{SVGElement("path")}} 要素の {{SVGAttr("d")}} 幾何プロパティと同じ形式で表現され、同様に解釈されます。モーションパスアニメーションの効果は、時間経過に応じて計算された x 値と y 値による、現在のユーザー座標系の x 軸および y 軸に沿った平行移動です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>&#x3C;path-data></code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

- `<path-data>`
  - : この値は、参照先の要素の動くモーションパスを定義します。使用可能なコマンドの詳細については、[`d` 属性の説明](/ja/docs/Web/SVG/Reference/Attribute/d#パスコマンド)を参照してください。

## textPath

{{SVGElement("textPath")}} における `path` は、 {{SVGElement("text")}} 要素の{{Glossary("glyph", "文字")}}が描画されるパスを定義します。空の文字列は、要素にパスデータが存在しないことを示します。これは、`<textPath>` 要素内のテキストが `<text>` 要素の描画や境界ボックス形成に寄与しないことを意味します。この属性が指定されていない場合、代わりに {{SVGAttr("href")}} で指定されたパスが使用されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>&#x3C;path-data></code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><em>{{SVGAttr("href")}} で指定されたパス</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `<path-data>`
  - : この値は、`<text>` 要素のグリフが配置されるテキストパスを定義します。使用可能なコマンドの詳細については、[`d` 属性の説明](/ja/docs/Web/SVG/Reference/Attribute/d#パスコマンド)を参照してください。

## 仕様書

{{Specifications}}
