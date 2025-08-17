---
title: visibility
slug: Web/SVG/Reference/Attribute/visibility
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

**`visibility`** 属性は、グラフィック要素の表示/非表示を制御します。値を `hidden` または `collapse` に設定すると、現在のグラフィック要素は表示されなくなります。

> [!NOTE]
> テキスト要素の `visibility` 属性が `hidden` に設定されている場合、そのテキストは表示されませんが、テキストレイアウトの計算では空間を占有します。

{{SVGAttr("pointer-events")}} 属性の値に応じて、`visibility` 属性が `hidden` に設定されているグラフィック要素もイベントを受信する場合があります。

> [!NOTE]
> プレゼンテーション属性であるため、 `visibility` には対応する CSS プロパティ {{cssxref("visibility")}} があります。両方が指定された場合、 CSS プロパティの方が優先されます。

## 要素

この属性は、次の SVG 要素に対応する属性として使用することができます。

- {{SVGElement("a")}}
- `<audio>`
- `<canvas>`
- {{SVGElement("circle")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("foreignObject")}}
- `<iframe>`
- {{SVGElement("image")}}
- {{SVGElement("line")}}
- {{SVGElement("path")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("rect")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}
- `<video>`

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>visible</code> | <code>hidden</code> | <code>collapse</code>
      </td>
    </tr>
    <tr>
      <th scope="row">値</th>
      <td><code>visible</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `visible`
  - : この値は、要素が描画されることを示します。
- `hidden`
  - : この値は、要素が描画されないことを示します。ただし、要素はレンダリングツリーに属しており、つまり、{{SVGAttr("pointer-events")}} 属性に応じてポインターイベントを受け取り、{{SVGAttr("tabindex")}} 属性に応じてフォーカスを受け取り、境界ボックスの計算やクリップパスに寄与し、テキストのレイアウトに影響を与えます。
- `collapse`
  - : この値は `hidden` と同じです。

## 例

### 例 1

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
  <rect
    x="10"
    y="10"
    width="200"
    height="100"
    stroke="black"
    stroke-width="5"
    fill="transparent" />
  <g stroke="seagreen" stroke-width="5" fill="skyblue">
    <rect x="20" y="20" width="80" height="80" visibility="visible" />
    <rect x="120" y="20" width="80" height="80" visibility="hidden" />
  </g>
</svg>
```

{{EmbedLiveSample("Example 1", "250", "100")}}

### 例 2

次の例は、SVG 画像パスの CSS `visibility` を切り替えます。

#### HTML

```html
<button id="nav-toggle-button">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    class="button-icon">
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    <path
      d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
      class="invisible" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
  <span> クリックしてね </span>
</button>
```

#### CSS

```css
svg {
  display: inline !important;
}
span {
  vertical-align: 50%;
}
button {
  line-height: 1em;
}
.invisible {
  visibility: hidden;
}
```

#### JavaScript

```js
const button = document.querySelector("button");
button.addEventListener("click", (evt) => {
  button
    .querySelector("svg > path:nth-of-type(1)")
    .classList.toggle("invisible");
  button
    .querySelector("svg > path:nth-of-type(2)")
    .classList.toggle("invisible");
});
```

#### 結果

{{EmbedLiveSample("Example 2", "100%", "80")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGAttr("display")}} 属性
- CSS の {{cssxref("visibility")}} プロパティ
