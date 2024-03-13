---
title: "HTMLElement: togglePopover() メソッド"
slug: Web/API/HTMLElement/togglePopover
l10n:
  sourceCommit: bb6092c4230b69c2eceae6910af68c73955cae1c
---

{{ APIRef("HTML DOM") }}{{SeeCompatTable}}

**`togglePopover()`** は {{domxref("HTMLElement")}} インターフェイスのメソッドで、{{domxref("Popover_API", "ポップオーバー", "", "nocode")}}要素（すなわち有効な [`popover`](/ja/docs/Web/HTML/Global_attributes/popover) 属性がある要素）の非表示状態と表示状態をトグル切り替えします。

`togglePopover()` が [`popover`](/ja/docs/Web/HTML/Global_attributes/popover) 属性の付いた要素に対して呼び出されると、次のようになります。

1. {{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}} イベントが発行されます。
2. ポップオーバーが非表示状態と表示状態の間で切り替わります。
   1. もともと表示状態であった場合は、非表示状態に切り替わります。
   2. もともと非表示状態であった場合は、表示状態に切り替わります。
3. {{domxref("HTMLElement/toggle_event", "toggle")}} イベントが発行されます。

## 構文

```js-nolint
togglePopover(force)
```

### 引数

- `force`
  - : 論理値で、`togglePopover()` を {{domxref("HTMLElement.showPopover", "showPopover()")}} または {{domxref("HTMLElement.hidePopover", "hidePopover()")}} のように動作させます。ただし、そのポップオーバーが既にその状態にあっても、例外が発生しない点が異なります。
    - `true` に設定された場合、ポップオーバーは非表示だった場合に表示されます。表示されていた場合は、何も起こりません。
    - `false` に設定された場合、ポップオーバーは表示されていた場合に非表示になります。非表示になっていた場合は、何も起こりません。

### 返値

なし ({{jsxref("undefined")}})。

## 例

次の例では、キーボードの特定のキーを押すことで、ポップオーバーのオン・オフを切り替える機能を提供します。

最初に HTML です。

```html
<div id="mypopover">
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
    popover.togglePopover();
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
