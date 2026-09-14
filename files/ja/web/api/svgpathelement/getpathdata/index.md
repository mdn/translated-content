---
title: "SVGPathElement: getPathData() メソッド"
short-title: getPathData()
slug: Web/API/SVGPathElement/getPathData
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("SVG")}}{{SeeCompatTable}}

**`SVGPathElement.getPathData()`** メソッドは、パスデータに対応するパス区間の並びを返します。オプションで値と区間型を正規化します。

## 構文

```js-nolint
getPathData()
getPathData(options)
```

### 引数

- `options` {{optional_inline}}
  - : パスデータ取得プロセスの側面を制御するためのオプションオブジェクト。このオブジェクトは次のプロパティを含む場合があります。
    - `normalize` {{optional_inline}}
      - : 返されるパス区間の並びを、[絶対コマンド](/ja/docs/Web/SVG/Reference/Attribute/d#パスコマンド)の基本セット（`'M'`, `'L'`, `'C'` and `'Z'`）に変換し、値をそれに応じて調整するするかどうかを示す論理値です。

### 返値

パスデータに対応するパス区間の配列。有効なパスデータが存在しない場合、空の配列を返します。

それぞれのパス区間は、以下のプロパティを持つオブジェクトです。

- `type`
  - : [パスコマンド](/ja/docs/Web/SVG/Reference/Attribute/d#パスコマンド)です。 [`options.normalize`](#normalize) が true であれば、これは絶対コマンド（`'M'`, `'L'`, `'C'`, `'Z'`）のいずれかになります。
- `values`
  - : コマンドに対応する引数の入った配列または値です。

## 例

### パスデータの取得

次の `<path>` 要素を考えてみましょう。これは四角形を描画します。

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
  <path d="M0,0 h64 v64 h-64 z" />
</svg>
```

`getPathData()` メソッドは、`d` 属性に設定されたのと同じ生のパスデータを配列で返します。`normalize: true` オプションを設定すると、パスコマンドの基本セットに対して正規化されたパスデータを返します。

```js
const path = document.querySelector("path");

console.log(path.getPathData());

// 出力結果: 生のパスデータ:
// [
//   { type: "M", values: [0, 0] },
//   { type: "h", values: [64] },
//   { type: "v", values: [64] },
//   { type: "h", values: [-64] },
//   { type: "Z", values: [] }
// ]

console.log(path.getPathData({ normalize: true }));

// 出力結果: 正規化されたパスデータ:
// [
//   { type: "M", values: [0, 0] },
//   { type: "L", values: [64, 0] },
//   { type: "L", values: [64, 64] },
//   { type: "L", values: [0, 64] },
//   { type: "Z", values: [] }
// ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
