---
title: color-interpolation
slug: Web/CSS/Reference/Properties/color-interpolation
original_slug: Web/CSS/color-interpolation
l10n:
  sourceCommit: eca1c1c2dfd430d6b7942b0f73128c4c0831e5c1
---

CSS の `color-interpolation` プロパティは、SVG で用いられ、SVG 要素 {{SVGElement("linearGradient")}} および {{SVGElement("radialGradient")}} で用いる色空間を指定します。

## 構文

```css
/* キーワード値 */
color-interpolation: auto;
color-interpolation: sRGB;
color-interpolation: linearRGB;
```

### 値

- `auto`
  - : ユーザーエージェントが色の補間用に `sRGB` または `linearRGB` 空間を選択してよいことを表します。この値は、作成者が色の補間を特定の色空間で行うことを要求していないことを表します。
- `sRGB`
  - : 色の補間を sRGB 色空間で行うべきであることを表します。
    `color-interpolation` プロパティが設定されていない場合、初期値はこの値になります。
- `linearRGB`
  - : 色の補間を [sRGB の仕様書](https://webstore.iec.ch/publication/6169)に記述されている通りの linearized RGB 色空間で行うべきであることを表します。

## 公式定義

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>auto</code> | <code>sRGB</code> | <code>linearRGB</code></td>
    </tr>
    <tr>
      <th scope="row">適用対象</th>
      <td>{{SVGElement("linearGradient")}} および {{SVGElement("radialGradient")}}</td>
    </tr>
    <tr>
      <th scope="row">初期値</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可 (離散)</td>
    </tr>
  </tbody>
</table>

## 形式文法

{{csssyntax}}

## 例

最初の SVG では、`<linearGradient>` 要素に `color-interpolation` プロパティが設定されておらず、色の補間はデフォルトの `sRGB` になります。
2 番目の例では、値 `linearRGB` を用いた色の補間を見せます。

```html
<svg width="450" height="70">
  <title>CSS プロパティ color-interpolation を用いる例</title>
  <defs>
    <linearGradient id="sRGB">
      <stop offset="0%" stop-color="white" />
      <stop offset="25%" stop-color="blue" />
      <stop offset="50%" stop-color="white" />
      <stop offset="75%" stop-color="red" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="400" height="40" fill="url(#sRGB)" stroke="black" />
  <text x="0" y="60" font-family="courier" font-size="16">
    color-interpolation なし (CSS プロパティ)
  </text>
</svg>
```

```html
<svg width="450" height="70">
  <title>CSS プロパティ color-interpolation を用いる例</title>
  <defs>
    <linearGradient id="linearRGB">
      <stop offset="0%" stop-color="white" />
      <stop offset="25%" stop-color="blue" />
      <stop offset="50%" stop-color="white" />
      <stop offset="75%" stop-color="red" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
  </defs>
  <rect
    x="0"
    y="0"
    width="400"
    height="40"
    fill="url(#linearRGB)"
    stroke="black" />
  <text x="0" y="60" font-family="courier" font-size="16">
    color-interpolation: linearRGB; (CSS プロパティ)
  </text>
</svg>
```

```css
svg {
  display: block;
}

#linearRGB {
  color-interpolation: linearRGB;
}
```

{{EmbedLiveSample("Example", "100%", "140")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGElement("linearGradient")}}
- {{SVGElement("radialGradient")}}
- {{SVGAttr("color-interpolation")}}
