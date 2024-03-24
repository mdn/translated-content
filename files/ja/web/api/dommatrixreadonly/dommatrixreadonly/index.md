---
title: "DOMMatrixReadOnly: DOMMatrixReadOnly() コンストラクター"
short-title: DOMMatrixReadOnly()
slug: Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly
l10n:
  sourceCommit: f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{APIRef("Geometry Interfaces")}}

**`DOMMatrixReadOnly`** コンストラクターは新しい {{domxref("DOMMatrixReadOnly")}} オブジェクトを作成します。このオブジェクトは 4x4 行列を表し、 2D および 3D の演算に適しています。

## 構文

```js-nolint
DOMMatrixReadOnly()
DOMMatrixReadOnly(init)
```

### 引数

- `init` {{optional_inline}}

  - : 作成したい行列を指定する、数値の並びを格納した文字列、または数値の配列です。

    数値の配列が渡された場合の動作は、配列の長さに依存します。

    - `[a, b, c, d, e, f]` という形で構成される 6 要素の配列を指定すると，指定された成分で初期化された 2D の読み取り専用の行列が作成されます．
    - `[m11, m12, m13, …, m42, m43, m44]` という形で構成される 16 要素の配列（列優先順）に対して、指定された要素で初期化された 3D の読み取り専用の行列が作成されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
