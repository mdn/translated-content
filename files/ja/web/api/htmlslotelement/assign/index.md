---
title: "HTMLSlotElement: assign() メソッド"
short-title: assign()
slug: Web/API/HTMLSlotElement/assign
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("Shadow DOM API")}}

**`assign()`** は {{domxref("HTMLSlotElement")}} インターフェイスのメソッドで、このスロットの手動で割り当てられたノードをスロットテーブルの順序付きリストに設定します。手動で割り当てられたノードは初期状態では、ノードに `assign()` を使用して割り当てられるまで空です。

> **メモ:** 手動の（命令的な）スロットと名前付き（宣言的、自動的な）スロットの割り当てを混在させることはできません。したがって、このメソッドを動作させるには、シャドウツリーを[作成](/ja/docs/Web/API/Element/attachShadow)するのに `slotAssignment: "manual"` オプションを使用する必要があります。

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

なし ({{jsxref("undefined")}})。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  -: 自動的に割り当てられるスロットでこのメソッドを呼び出すと発生します。

## 例

以下の例では、タブ型アプリケーションで正しいタブを表示するために `assign()` メソッドを使用しています。この関数が呼び出され、表示するパネルが渡され、それがスロットに代入されます。

```js
function UpdateDisplayTab(elem, tabIdx) {
  const shadow = elem.shadowRoot;
  const slot = shadow.querySelector("slot");
  const panels = elem.querySelectorAll("tab-panel");
  if (panels.length && tabIdx && tabIdx <= panels.length) {
    slot.assign(panels[tabIdx - 1]);
  } else {
    slot.assign();
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.attachShadow()")}}
