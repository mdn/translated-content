---
title: "HTMLElement: popover プロパティ"
short-title: popover
slug: Web/API/HTMLElement/popover
l10n:
  sourceCommit: 9af64ef430ad722b9cc3f75ccabeb8989c23b988
---

{{APIRef("Popover API")}}

**`popover`** は {{domxref("HTMLElement")}} インターフェイスのプロパティで、要素のポップオーバー状態（`"auto"`、`"hint"`、`"manual"` のいずれか）を JavaScript から取得したり設定したりします。機能検出に使用することもできます。

これは、HTML の [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) グローバル属性の値を反映します。

## 値

列挙値です。取りうる値は次の通りです。

- `"auto"`
  - : [`auto`](/ja/docs/Web/API/Popover_API/Using#自動状態と「簡単な解除」) ポップオーバーは「簡単に解除」できます。つまり、ポップオーバーの外をクリックするか、<kbd>Esc</kbd> キーを押すことで非表示にできます。

    通常、同時に表示できる `auto` ポップオーバーは 1 つだけです。すでに表示されているポップオーバーがあるときに 2 つ目を表示すると、1 つ目が非表示になります。このルールの例外は、入れ子の `auto` ポップオーバーがあるときです。詳しくは[入れ子のポップオーバー](/ja/docs/Web/API/Popover_API/Using#入れ子のポップオーバー)を参照してください。

- `"hint"`
  - : [`hint`](/ja/docs/Web/API/Popover_API/Using#ポップオーバーの-hint-状態の使用) ポップオーバーは、表示されても `auto` ポップオーバーを閉じませんが、ほかの `hint` ポップオーバーは閉じます。
    また、簡単に解除でき、閉じる要求にも応答します。

    通常、これらは [`mouseover`](/ja/docs/Web/API/Element/mouseover_event)/[`mouseout`](/ja/docs/Web/API/Element/mouseout_event) や [`focus`](/ja/docs/Web/API/Element/focus_event)/[`blur`](/ja/docs/Web/API/Element/blur_event) などのクリック以外の JavaScript イベントに応じて表示・非表示になります。
    ボタンをクリックして `hint` ポップオーバーを開くと、表示中の `auto` ポップオーバーは簡単に解除されます。

- `"manual"`
  - : [`manual`](/ja/docs/Web/API/Popover_API/Using#手動のポップオーバー状態の使用) ポップオーバーは簡単に解除できず、自動的に閉じることもありません。宣言的な表示/非表示/トグルボタンまたは JavaScript を使って、明示的に表示・非表示にする必要があります。複数の独立した `manual` ポップオーバーを同時に表示できます。

## 例

### 機能検出

`popover` 属性を使用して、[ポップオーバー API](/ja/docs/Web/API/Popover_API) の機能を検出することができます。

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

### ポップオーバーをプログラムで設定

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

const popoverSupported = supportsPopover();

if (popoverSupported) {
  popover.popover = "auto";
  toggleBtn.popoverTargetElement = popover;
  toggleBtn.popoverTargetAction = "toggle";
} else {
  console.log("Popover API not supported.");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) グローバル属性
- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
