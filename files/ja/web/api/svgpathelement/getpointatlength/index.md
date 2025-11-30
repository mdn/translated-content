---
title: "SVGPathElement: getPointAtLength() メソッド"
short-title: getPointAtLength()
slug: Web/API/SVGPathElement/getPointAtLength
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("SVG")}}

**`getPointAtLength()`** は {{domxref("SVGPathElement")}} インターフェイスのメソッドで、このパス沿いの指定された位置の点を返します。

## 構文

```js-nolint
getPointAtLength(distance)
```

### 引数

- `distance`
  - : このパス上の位置を、先頭からの距離を示す数値です。

### 返値

このパスに沿った指定された位置にある点を示す {{domxref("DOMPoint")}} です。

### 例

#### `<path>` の中点を取得

この例では、パスの長さのちょうど中間点となる点を取得することで、パスの中点を決定します。

SVG を定義します。これには基本的な直線と複雑なハート形の 2 つのパスが含まれます。

ハートを構成するパスの長さは、約 275 単位です。

```html
<svg width="200" height="100">
  <path
    id="heart"
    fill="red"
    d="M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z" />
  <path id="line" d="M 0,30 h100" stroke="black" />
</svg>
```

直線は水平で、`0, 30` から始まり、長さは 100 単位です。
ハートのパスは `10, 30` から始まり、長さは約 275 単位です。

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 70px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

直線の長さは 100 単位とわかっているため、中点は `50` です。
ハートのパスの長さを、{{domxref("SVGPathElement.getTotalLength()")}} メソッドで取得し、長さの中点を取得するために `2` で割ります。
それから `getPointAtLength()` メソッドを使用すると、`DOMPoint` で中点が返ります。
それぞれの中点の `x` および `y` 座標を表示します。

```js
const basicPath = document.getElementById("line");
const complexPath = document.getElementById("heart");

// ハートの長さを取得して 2 で割る
const halfLength = complexPath.getTotalLength() / 2;

// getPointAtLength メソッドにアクセス
const basicMidPoint = basicPath.getPointAtLength(50);
const complexMidPoint = complexPath.getPointAtLength(halfLength);

// pathLength 属性のベースの値
log(`直線の中点: ${basicMidPoint.x}, ${basicMidPoint.y}`);
log(`ハートの中点: ${complexMidPoint.x}, ${complexMidPoint.y}`);
```

{{EmbedLiveSample('Getting the total length of a `<path>`',"100%","220px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGPathElement.getTotalLength()")}}
- {{domxref("DOMPoint.x")}}
- {{domxref("DOMPoint.y")}}
