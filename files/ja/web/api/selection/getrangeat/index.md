---
title: "Selection: getRangeAt() メソッド"
short-title: getRangeAt()
slug: Web/API/Selection/getRangeAt
l10n:
  sourceCommit: 7a9bb2446815454a7f905e17e6f4d652c891316a
---

{{ ApiRef("DOM") }}

**`getRangeAt()`** は {{domxref("Selection")}} インターフェイスのメソッドで、現在選択されている範囲を表す範囲オブジェクトを返します。

選択された範囲の両端が{{glossary("shadow tree", "シャドウツリー")}}内にある場合、JavaScript からはシャドウノードが見えないため、このメソッドは、範囲を再定義して、その両端を含むホスト要素を含めるようにする必要があります。
実際には、ほとんどのブラウザーではまだこの動作が実装されておらず、返される範囲は予測できません。

> [!NOTE]
> シャドウルートを含む可能性のあるノード内で選択を行う場合、{{domxref("Selection.getComposedRanges()")}}（対応していれば）を使用することで、シャドウツリー内の選択範囲を取得したり、選択範囲をホストノードに確実に再設定したりすることができます。

## 構文

```js-nolint
getRangeAt(index)
```

### 引数

- `index`
  - : 返す範囲のゼロ基点のインデックス。
    負の数、または {{domxref("Selection.rangeCount")}} 以上の数値を指定すると、エラーが発生します。

### 返値

指定された {{domxref("Range")}} オブジェクトです。

## 例

```js
let ranges = [];

const sel = window.getSelection();

for (let i = 0; i < sel.rangeCount; i++) {
  ranges[i] = sel.getRangeAt(i);
}
/* ranges 配列の各要素は、現在の選択範囲のうちの
 * 1 つを表す範囲オブジェクトになります */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先のインターフェイスである {{domxref("Selection")}}
