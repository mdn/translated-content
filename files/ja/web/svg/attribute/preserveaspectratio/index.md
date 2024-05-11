---
title: preserveAspectRatio
slug: Web/SVG/Attribute/preserveAspectRatio
l10n:
  sourceCommit: 904cdf09c7e328b7a15a6a4db6bc6bd31f969cce
---

{{SVGRef}}

**`preserveAspectRatio`** 属性は、指定されたアスペクト比を提供するビューボックスを持つ要素が、異なるアスペクト比を持つビューポートにどのように収まるべきかを示します。

SVG 画像のアスペクト比は {{SVGAttr('viewBox')}} 属性によって定義されるので、この属性が設定されていない場合、 **`preserveAspectRatio`** 属性は何の効果も持ちません（_後述する {{SVGElement('image')}} 要素は例外です_）。

## 例

### meet (width > height)

この例では、要素の `width` が `height` よりも大きい場合に `meet` を使用することを示しています。 3 つの配置値 `xMidYMid`、`xMinYMid`、`xMaxYMid` で 3 つのバリエーションを表示します。

```css hidden
html,
body,
svg {
  height: 100%;
}

/* それぞれの iframe の本文に flex 要素を配置し、様々な画面サイズに対応できるようにした */
body {
  display: flex;
}
```

```html
<svg viewBox="-1 -1 202 40" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>
</svg>
```

```html
<rect x="0" y="0" width="60" height="30">
  <title>xMidYMid meet</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="60"
  height="30"
  preserveAspectRatio="xMidYMid meet"
  x="0"
  y="0">
  <use href="#smiley" />
</svg>
```

```html
<rect x="70" y="0" width="60" height="30">
  <title>xMinYMid meet</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="60"
  height="30"
  preserveAspectRatio="xMinYMid meet"
  x="70"
  y="0">
  <use href="#smiley" />
</svg>
```

```html
  <rect x="140" y="0" width="60" height="30">
    <title>xMaxYMid meet</title>
  </rect>
  <svg
    viewBox="0 0 100 100"
    width="60"
    height="30"
    preserveAspectRatio="xMaxYMid meet"
    x="140"
    y="0">
    <use href="#smiley" />
  </svg>
</svg>
```

```css
path {
  fill: yellow;
  stroke: black;
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}

rect:hover,
rect:active {
  outline: 1px solid red;
}
```

{{EmbedLiveSample('meet width height', '100%', 200)}}

### slice (width > height)

この例では、要素の `width` が `height` よりも大きい場合に `slice` を使用することを示しています。 3 種類の配置値 `xMidYMin`、`xMidYMid`、`xMidYMax` で 3 つのバリエーションを表示します。

```css hidden
html,
body,
svg {
  height: 100%;
}

/* それぞれの iframe の本文に flex 要素を配置し、様々な画面サイズに対応できるようにした */
body {
  display: flex;
}
```

```html
<svg viewBox="-1 -1 202 57" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>
</svg>
```

```html
<rect x="0" y="15" width="60" height="30">
  <title>xMidYMin slice</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="60"
  height="30"
  preserveAspectRatio="xMidYMin slice"
  x="0"
  y="15">
  <use href="#smiley" />
</svg>
```

```html
<rect x="70" y="15" width="60" height="30">
  <title>xMidYMid slice</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="60"
  height="30"
  preserveAspectRatio="xMidYMid slice"
  x="70"
  y="15">
  <use href="#smiley" />
</svg>
```

```html
  <rect x="140" y="15" width="60" height="30">
    <title>xMidYMax slice</title>
  </rect>
  <svg
    viewBox="0 0 100 100"
    width="60"
    height="30"
    preserveAspectRatio="xMidYMax slice"
    x="140"
    y="15">
    <use href="#smiley" />
  </svg>
</svg>
```

```css
path {
  fill: yellow;
  stroke: black;
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}

rect:hover,
rect:active {
  outline: 1px solid red;
}
```

{{EmbedLiveSample('slice width height', '100%', 200)}}

### meet (height > width)

この例では、要素の `height` が `width` よりも大きい場合に `meet` を使用することを示しています。 3 種類の配置値 `xMidYMin`、`xMidYMid`、`xMidYMax` で 3 つのバリエーションを表示します。

```css hidden
html,
body,
svg {
  height: 100%;
}

/* それぞれの iframe の本文に flex 要素を配置し、様々な画面サイズに対応できるようにした */
body {
  display: flex;
}
```

```html
<svg viewBox="-1 -1 202 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>
</svg>
```

```html
  <rect x=0" y="0" width="30" height="75">
    <title>xMidYMin meet</title>
  </rect>
  <svg
    viewBox="0 0 100 100"
    width="30"
    height="75"
    preserveAspectRatio="xMidYMin meet"
    x="0"
    y="0">
    <use href="#smiley" />
  </svg>
```

```html
<rect x="35" y="0" width="30" height="75">
  <title>xMidYMid meet</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="30"
  height="75"
  preserveAspectRatio="xMidYMid meet"
  x="35"
  y="0">
  <use href="#smiley" />
</svg>
```

```html
  <rect x="70" y="0" width="30" height="75">
    <title>xMidYMax meet</title>
  </rect>
  <svg
    viewBox="0 0 100 100"
    width="30"
    height="75"
    preserveAspectRatio="xMidYMax meet"
    x="70"
    y="0">
    <use href="#smiley" />
  </svg>
</svg>
```

```css
path {
  fill: yellow;
  stroke: black;
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}

rect:hover,
rect:active {
  outline: 1px solid red;
}
```

{{EmbedLiveSample('meet height width', '100%', 200)}}

### slice (height > width)

この例では、要素の `height` が `width` よりも大きい場合に `slice` を使用することを示しています。 3 種類の配置値 `xMinYMid`、`xMidYMid`、`xMaxYMid` で 3 つのバリエーションを表示します。

```css hidden
html,
body,
svg {
  height: 100%;
}

/* それぞれの iframe の本文に flex 要素を配置し、様々な画面サイズに対応できるようにした */
body {
  display: flex;
}
```

```html
<svg viewBox="-1 -1 202 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>
</svg>
```

```html
<rect x="0" y="0" width="30" height="75">
  <title>xMinYMid slice</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="30"
  height="75"
  preserveAspectRatio="xMinYMid slice"
  x="0"
  y="0">
  <use href="#smiley" />
</svg>
```

```html
<rect x="35" y="0" width="30" height="75">
  <title>xMidYMid slice</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="30"
  height="75"
  preserveAspectRatio="xMidYMid slice"
  x="35"
  y="0">
  <use href="#smiley" />
</svg>
```

```html
  <rect x="70" y="0" width="30" height="75">
    <title>xMaxYMid slice</title>
  </rect>
  <svg
    viewBox="0 0 100 100"
    width="30"
    height="75"
    preserveAspectRatio="xMaxYMid slice"
    x="70"
    y="0">
    <use href="#smiley" />
  </svg>
</svg>
```

```css
path {
  fill: yellow;
  stroke: black;
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}

rect:hover,
rect:active {
  outline: 1px solid red;
}
```

{{EmbedLiveSample('slice height width', '100%', 200)}}

### none

この例では配置値を `none` に設定した要素を表示させています。

```css hidden
html,
body,
svg {
  height: 100%;
}

/* それぞれの iframe の本文に flex 要素を配置し、様々な画面サイズに対応できるようにした */
body {
  display: flex;
}
```

```html
<svg viewBox="-1 -1 192 62" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>
</svg>
```

```html
  <!-- none -->
  <rect x="0" y="0" width="160" height="60">
    <title>none</title>
  </rect>
  <svg
    viewBox="0 0 100 100"
    width="160"
    height="60"
    preserveAspectRatio="none"
    x="0"
    y="0">
    <use href="#smiley" />
  </svg>
</svg>
```

```css
path {
  fill: yellow;
  stroke: black;
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}

rect:hover,
rect:active {
  outline: 1px solid red;
}
```

{{EmbedLiveSample('none ', '100%', 200)}}

## 構文

```plain
preserveAspectRatio="<align> [<meetOrSlice>]"
```

その値は、 1 つまたは 2 つのキーワードで構成されます。必要な配置値と、下記で記述されているオプションの "meet または slice" の参照です。

- 配置値

  - : 配置値は、均等な変倍を強制するかどうかを示し、もしそうなら、{{ SVGAttr("viewBox") }}の縦横比がビューポートの縦横比と一致しない場合に使用する配置方法を示します。配置値は以下のいずれかのキーワードでなければなりません。

    - **none**
      均等な変倍を強制しません。指定された要素のグラフィックコンテンツを、要素の外接ボックスがビューポートの長方形に正確に一致するように、必要に応じて不均一に変倍します。 _もし `<align>` が `none` ならば、オプションの `<meetOrSlice>` の値は無視されることに注意してください_。
    - **xMinYMin** - 均等な変倍を強制します。
      要素の {{ SVGAttr("viewBox") }} の `<min-x>` をビューポートの最小 X 値に配置します。
      要素の {{ SVGAttr("viewBox") }} の `<min-y>` をビューポートの最小 Y 値に配置します。
    - **xMidYMin** - 均等な変倍を強制します。
      要素の {{ SVGAttr("viewBox") }} の X の中央値をビューポートの X の中央値に配置します。
      要素の {{ SVGAttr("viewBox") }} の `<min-y>` をビューポートの最小 Y 値に配置します。
    - **xMaxYMin** - 均等な変倍を強制します。
      要素の {{ SVGAttr("viewBox") }} の `<min-x>+<width>` をビューポートの最大 X 値に配置します。
      要素の {{ SVGAttr("viewBox") }} の `<min-y>` をビューポートの最小 Y 値に配置します。
    - **xMinYMid** - 均等な変倍を強制します。
      要素の {{ SVGAttr("viewBox") }} の `<min-x>` をビューポートの最小 X 値に配置します。
      要素の {{ SVGAttr("viewBox") }} の Y の中央値をビューポートの Y の中央値に配置します。
    - **xMidYMid** (the default) - 均等な変倍を強制します。
      要素の {{ SVGAttr("viewBox") }} の X の中央値をビューポートの X の中央値に配置します。
      要素の {{ SVGAttr("viewBox") }} の Y の中央値をビューポートの Y の中央値に配置します。
    - **xMaxYMid** - 均等な変倍を強制します。
      要素の {{ SVGAttr("viewBox") }} の `<min-x>+<width>` をビューポートの最大 X 値に配置します。
      要素の {{ SVGAttr("viewBox") }} の Y の中央値をビューポートの Y の中央値に配置します。
    - **xMinYMax** - 均等な変倍を強制します。
      要素の {{ SVGAttr("viewBox") }} の `<min-x>` をビューポートの最小 X 値に配置します。
      要素の {{ SVGAttr("viewBox") }} の `<min-y>+<height>` をビューポートの最大 Y 値に配置します。
    - **xMidYMax** - 均等な変倍を強制します。
      要素の {{ SVGAttr("viewBox") }} の X の中央値をビューポートの X の中央値に配置します。
      要素の {{ SVGAttr("viewBox") }} の `<min-y>+<height>` をビューポートの最大 Y 値に配置します。
    - **xMaxYMax** - 均等な変倍を強制します。
      要素の {{ SVGAttr("viewBox") }} の `<min-x>+<width>` をビューポートの最大 X 値に配置します。
      要素の {{ SVGAttr("viewBox") }} の `<min-y>+<height>` をビューポートの最大 Y 値に配置します。

- meet または slice の参照

  - : meetまたはslice参照はオプションで、指定された場合は以下のキーワードのいずれかでなければなりません：

    - **meet** (_the default_) - 次のようにグラフィックを変倍します。

      - アスペクト比を維持されます。
      - {{ SVGAttr("viewBox") }} 全体がビューポート内に表示されます。
      - {{ SVGAttr("viewBox") }} は、他にも条件を満たしつつ、可能な限り拡大します。

      この場合、グラフィックのアスペクト比がビューポートと一致しないと、ビューポートの一部が {{ SVGAttr("viewBox") }} の枠からはみ出してしまいます（つまり、{{ SVGAttr("viewBox") }} が描画する領域はビューポートよりも小さくなります）。

    - **slice** - 次のようにグラフィックを変倍します。

      - アスペクト比を維持されます。
      - ビューポート全体が {{ SVGAttr("viewBox") }} に応じたものになります。
      - {{SVGAttr("viewBox") }} は、他にも条件を満たしつつ、可能な限り縮小します。

      この場合、 {{ SVGAttr("viewBox") }} のアスペクト比がビューポートと一致しないと、{{ SVGAttr("viewBox") }} の一部がビューポートの境界からはみ出してしまいます（つまり、{{ SVGAttr("viewBox") }} が描画する領域はビューポートよりも大きくなります）。

## 要素

この属性は以下の SVG 要素で使用することができます。

- {{SVGElement("svg")}}
- {{SVGElement("symbol")}}
- {{SVGElement("image")}}
- {{SVGElement("feImage")}}
- {{SVGElement("marker")}}
- {{SVGElement("pattern")}}
- {{SVGElement("view")}}

### feImage

{{SVGElement('feImage')}} の場合、 `preserveAspectRatio` は参照している画像が `<feImage>` 要素で定義した長方形に収まるように定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

### image

{{SVGElement('image')}} の場合、 `preserveAspectRatio` は参照している画像が `<feImage>` 要素で定義した長方形に収まるように定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

### marker

{{SVGElement('marker')}} の場合、 `preserveAspectRatio` は、要素のビューポートに合わせて一様に変倍する必要があるかどうかを示します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

### pattern

{{SVGElement('pattern')}} の場合、 `preserveAspectRatio` は、要素のビューポートに合わせて一様に変倍する必要があるかどうかを示します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

### svg

{{SVGElement('svg')}} の場合、 `preserveAspectRatio` は、要素のビューポートに合わせて一様に変倍する必要があるかどうかを示します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

### symbol

{{SVGElement('symbol')}} の場合、 `preserveAspectRatio` は、要素のビューポートに合わせて一様に変倍する必要があるかどうかを示します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

### view

{{SVGElement('view')}} の場合、 `preserveAspectRatio` は、要素のビューポートに合わせて一様に変倍する必要があるかどうかを示します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}
