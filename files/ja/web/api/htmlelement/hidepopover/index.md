---
title: "HTMLElement: hidePopover() メソッド"
short-title: hidePopover()
slug: Web/API/HTMLElement/hidePopover
l10n:
  sourceCommit: 27977f96015d1b74e743fa3762672894e087bd3d
---

{{APIRef("Popover API")}}

**`hidePopover()`** は {{domxref("HTMLElement")}} インターフェイスのメソッドで、[ポップオーバー](/ja/docs/Web/API/Popover_API)要素（すなわち有効な [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) 属性がある要素）を{{glossary("top layer", "最上位レイヤー")}}から外し、`display: none` のスタイルを付けます。

`hidePopover()` が [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) 属性のついた表示中の要素に対して呼び出された場合、{{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}} イベントが発行され、続いてポップオーバーが非表示になり、それから {{domxref("HTMLElement/toggle_event", "toggle")}} イベントが発行されます。要素が既に非表示であれば、エラーが発生します。

## 構文

```js-nolint
hidePopover()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : このポップオーバーが既に表示である場合に発生します。

## 例

### ポップオーバーを非表示にする

次の例では、キーボードの特定のキーを押すことで、ポップオーバーを非表示にする機能を提供します。

#### HTML

```html
<button popovertarget="mypopover">ポップオーバーの表示を切り替え</button>
<div id="mypopover" popover="manual">
  キーボードの <kbd>h</kbd> を押すとポップオーバーが閉じます。
</div>
```

#### JavaScript

```js
const popover = document.getElementById("mypopover");

document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.hidePopover();
  }
});
```

#### 結果

{{EmbedLiveSample("Hiding a popover","100%",100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
