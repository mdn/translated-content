---
title: "SVGPathElement: getTotalLength() メソッド"
short-title: getTotalLength()
slug: Web/API/SVGPathElement/getTotalLength
l10n:
  sourceCommit: ea24a70e5c5e3b474d683e9b0dcb8807aaba82f3
---

{{APIRef("SVG")}}

**`getTotalLength()`** は {{domxref("SVGPathElement")}} インターフェイスのメソッドで、このパスの全長のユーザーエージェントの計算値を、ユーザー単位で返します。

## 構文

```js-nolint
getTotalLength()
```

### 引数

なし。

### 返値

ユーザー単位でのこのパスの全長を示す数値です。

### 例

### `<path>` の全長を取得

この例では、2 つのパス（基本の直線とハート形）の合計長を取得します。

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

```js
const complexPath = document.getElementById("heart");
const basicPath = document.getElementById("line");

// pathLength プロパティにアクセス
const complexPathLength = complexPath.getTotalLength();
const basicPathLength = basicPath.getTotalLength();

// pathLength 属性のベース値
log(`complexPathLength: ${complexPathLength}`);
log(`basicPathLength: ${basicPathLength}`);
```

{{EmbedLiveSample('Getting the total length of a `<path>`',"100%","220px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
