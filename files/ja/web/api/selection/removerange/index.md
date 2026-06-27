---
title: "Selection: removeRange() メソッド"
short-title: removeRange()
slug: Web/API/Selection/removeRange
l10n:
  sourceCommit: 29601e9dc567c497143866aa9c2eca9358e9f449
---

{{ ApiRef("DOM") }}

**`Selection.removeRange()`** メソッドは、選択範囲からある範囲を削除します。

## 構文

```js-nolint
removeRange(range)
```

### 引数

- `range`
  - : 選択範囲から削除する範囲オブジェクト。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
/* プログラム上、複数の範囲を選択することができます。
 * これにより、最初の範囲を除くすべての範囲が削除されます。 */
const s = window.getSelection();
if (s.rangeCount > 1) {
  for (let i = 1; i < s.rangeCount; i++) {
    s.removeRange(s.getRangeAt(i));
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先のインターフェイスである {{domxref("Selection")}}
