---
title: "SVGPathElement: getPathSegmentAtLength() メソッド"
short-title: getPathSegmentAtLength()
slug: Web/API/SVGPathElement/getPathSegmentAtLength
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("SVG")}}{{SeeCompatTable}}

**`getPathSegmentAtLength()`** は {{domxref("SVGPathElement")}} インターフェイスのメソッドで、このパス上の指定された位置にあるパス区間を返します。

## 構文

```js-nolint
getPathSegmentAtLength(distance)
```

### 引数

- `distance`
  - : このパス上の位置を、先頭からの距離を示す数値です。

### 返値

パス区間オブジェクトです。有効な区間がない場合は、null を返します。

区間オブジェクトには、以下のようなプロパティがあります。

- `type`
  - : [パスコマンド](/ja/docs/Web/SVG/Reference/Attribute/d#パスコマンド)です。
- `values`
  - : コマンドに対応した引数の入った配列または値です。

## 例

### パス区間を取得

次の `<path>` 要素を考えてみましょう。これは正方形を描画します。

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
  <path d="M0,0 h64 v64 h-64 z" />
</svg>
```

`getPathSegmentAtLength()` メソッドは、パスに沿って 65px の位置にある `v64` 区間を表すオブジェクトを返します。

```js
const path = document.querySelector("path");

console.log(path.getPathSegmentAtLength(65));

// 出力結果: パス区間
// {
//   type: "v",
//   values: [64]
// }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
