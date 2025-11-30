---
title: "SVGPathElement: setPathData() メソッド"
short-title: setPathData()
slug: Web/API/SVGPathElement/setPathData
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("SVG")}}{{SeeCompatTable}}

**`SVGPathElement.setPathData()`** メソッドは、パス区間の並びを新しいパスデータとして設定します。

## 構文

```js-nolint
setPathData(pathData)
```

### 引数

- `pathData`
  - : パス区間の配列です。
    それぞれのパス区間は、以下のプロパティを持つオブジェクトです。
    - `type`
      - : [パスコマンド](/ja/docs/Web/SVG/Reference/Attribute/d#パスコマンド)です。
      - : [パスコマンド](/ja/docs/Web/SVG/Reference/Attribute/d#パスコマンド)です。
        [`options.normalize`](#normalize) が true であれば、これは絶対コマンド（`'M'`, `'L'`, `'C'`, `'Z'`）のいずれかになります。
    - `values`
  - : コマンドに対応する引数の入った配列または値です。

### 返値

なし ({{jsxref('undefined')}})。

## 例

### パスデータの設定

正方形を描く次の `<path>` 要素があったとします。

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
  <path d="M0,0 h64 v64 h-64 z" />
</svg>
```

以下のコードであは、{{domxref("SVGPathElement/getPathData", "getPathData()")}} メソッドを使用して、正規化されたパスデータを[絶対コマンド](/ja/docs/Web/SVG/Reference/Attribute/d#パスコマンド)で取得します。
返されたデータを `<path>` 要素に `setPathData()` メソッドを使用して設定すると、DOM 内のパスコマンドのセットが異なるものになります。

```js
const svgPath = document.querySelector("path");
const pathData = path.getPathData({ normalize: true });

svgPath.setPathData(pathData);

// <path d="M 0 0 L 64 0 L 64 64 L 0 64 Z" />
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
