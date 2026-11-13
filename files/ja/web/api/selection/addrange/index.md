---
title: "Selection: addRange() メソッド"
short-title: addRange()
slug: Web/API/Selection/addRange
l10n:
  sourceCommit: da1442e0040419eb105f0720fd539adb5d5ca286
---

{{ ApiRef("DOM") }}

**`Selection.addRange()`** メソッドは、{{domxref("Range")}} を {{domxref("Selection")}} に追加します。

## 構文

```js-nolint
addRange(range)
```

### 引数

- `range`
  - : この {{domxref("Selection")}} に追加する {{ domxref("Range") }} オブジェクト。

### 返値

なし ({{jsxref("undefined")}})。

## 例

複数範囲の選択に対応しているのは Firefox のみである点に注意してください。この例では、他のブラウザーで、選択範囲にすでに 1 つ含まれている場合、新しい範囲を追加することはできません。

### HTML

```html
<p>
  I <strong>insist</strong> that you <strong>try</strong> selecting the
  <strong>strong words</strong>.
</p>
<button>Select strong words</button>
```

### JavaScript

```js
let button = document.querySelector("button");

button.addEventListener("click", () => {
  const selection = window.getSelection();
  const strongElems = document.getElementsByTagName("strong");

  if (selection.rangeCount > 0) {
    selection.removeAllRanges();
  }

  for (const node of strongElems) {
    const range = document.createRange();
    range.selectNode(node);
    selection.addRange(range);
  }
});
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先のインターフェイスである {{domxref("Selection")}}
