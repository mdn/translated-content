---
title: HTMLSlotElement.assign()
slug: Web/API/HTMLSlotElement/assign
l10n:
  sourceCommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{APIRef("Shadow DOM API")}}

**`assign()`** は {{domxref("HTMLSlotElement")}} インターフェイスのメソッドで、このスロットの**手動で割り当てられたノード**をスロットテーブルの順序付きリストに設定します。手動で割り当てられたノードは初期状態では、ノードに `assign()` を使用して割り当てられるまで空です。

宣言的なスロット割り当てと命令的なスロット割り当てを混在させることはできないことに注意してください。したがって、これを動作させるには、シャドウツリーを `slotAssignment: "manual"` オプションで作成する必要があります。

## 構文

```js-nolint
assign(node1)
assign(node1, node2)
assign(node1, node2, /* … ,*/ nodeN)
```

### 引数

- `node1`, …, `nodeN`
  - : 一連の {{domxref("Element")}} または {{domxref("Text")}} ノードです。

### 返値

undefined

## 例

以下の例では、タブ型アプリケーションで正しいタブを表示するために `assign()` メソッドを使用しています。この関数が呼び出され、表示するパネルが渡され、それがスロットに代入されます。

```js
function UpdateDisplayTab(elem, tabIdx) {
  const shadow = elem.shadowRoot;
  const slot = shadow.querySelector("slot");
  const panels = elem.querySelectorAll('tab-panel');
  if (panels.length && tabIdx && tabIdx <= panels.length ) {
    slot.assign(panels[tabIdx-1]);
  } else {
    slot.assign();
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
