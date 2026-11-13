---
title: "Selection: extend() メソッド"
short-title: extend()
slug: Web/API/Selection/extend
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{ ApiRef("DOM") }}

**`Selection.extend()`** メソッドは、選択範囲のフォーカスを指定した位置に移動させます。選択範囲のアンカーは移動しません。方向に関係なく、選択範囲はアンカーから新しいフォーカス位置までとなります。

## 構文

```js-nolint
extend(node)
extend(node, offset)
```

### 引数

- `node`
  - : フォーカスが移動されるノード。
- `offset` {{optional_inline}}
  - : `node` 内の、フォーカスが移動されるオフセット位置。指定がない場合は、デフォルト値の `0` が使用されます。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先のインターフェイスである {{domxref("Selection")}}
