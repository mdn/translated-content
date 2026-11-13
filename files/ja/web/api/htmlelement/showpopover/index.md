---
title: "HTMLElement: showPopover() メソッド"
short-title: showPopover()
slug: Web/API/HTMLElement/showPopover
l10n:
  sourceCommit: 16f4b01129630178d791e66daacadd7474f2508b
---

{{APIRef("Popover API")}}

**`showPopover()`** は {{domxref("HTMLElement")}} インターフェイスのメソッドで、{{domxref("Popover_API", "ポップオーバー", "", "nocode")}}要素（すなわち有効な [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) 属性がある要素）を{{glossary("top layer", "最上位レイヤー")}}に追加することで表示します。

`showPopover()` が [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) 属性のついた現在非表示の要素に対して呼び出された場合、{{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}} イベントが発行され、続いてポップオーバーが表示され、それから {{domxref("HTMLElement/toggle_event", "toggle")}} イベントが発行されます。要素が既に表示中であれば、エラーが発生します。

## 構文

```js-nolint
showPopover()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : このポップオーバーが既に表示中の場合に発生します。

## 例

次の例では、キーボードの特定のキーを押すことで、ポップオーバーを表示する機能を提供します。

最初に HTML です。

```html
<div id="mypopover" popover>
  <h2>Help!</h2>

  <p>You can use the following commands to control the app</p>

  <ul>
    <li>Press <ins>C</ins> to order cheese</li>
    <li>Press <ins>T</ins> to order tofu</li>
    <li>Press <ins>B</ins> to order bacon</li>
    <hr />
    <li>Say "Service" to summon the robot waiter to take your order</li>
    <li>Say "Escape" to engage the ejector seat</li>
  </ul>
</div>
```

そして機能をつなげる JavaScript です。

```js
const popover = document.getElementById("mypopover");

document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.showPopover();
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
