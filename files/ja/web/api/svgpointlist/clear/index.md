---
title: "SVGPointList: clear() メソッド"
short-title: clear()
slug: Web/API/SVGPointList/clear
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

**`clear()`** は {{domxref("SVGLengthList")}} インターフェイスのメソッドで、リストからすべてのアイテムを除去します。

## 構文

```js-nolint
clear()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{domxref("DOMException")}} `NoModificationAllowedError`
  - : リストが読み取り専用である場合に発生します。

## 例

次の例では、 SVG の中に 5 つの座標ペアを持つ {{SVGElement("polyline")}} があります。 Calling `clear()` empties the list. Therefore the polyline no longer displays in the SVG.

```html
<svg id="svg" viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
  <polyline
    id="example"
    stroke="black"
    fill="none"
    points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

```js
let example = document.getElementById("example");
example.points.clear();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
