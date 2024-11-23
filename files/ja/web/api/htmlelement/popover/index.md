---
title: "HTMLElement: popover プロパティ"
short-title: popover
slug: Web/API/HTMLElement/popover
l10n:
  sourceCommit: a4e0df90868c274842b083ad034eb60f57b76aae
---

{{APIRef("Popover API")}}

**`popover`** は {{domxref("HTMLElement")}} インターフェイスのプロパティで、要素のポップオーバー状態（`"auto"` または `"manual"`）を JavaScript から取得したり設定したりします。機能検出に使用することもできます。

これは、HTML の [`popover`](/ja/docs/Web/HTML/Global_attributes/popover) グローバル属性の値を反映します。

## 値

列挙値です。取りうる値は次の通りです。

- `"auto"`: [自動状態](/ja/docs/Web/API/Popover_API/Using#自動状態と「簡単な解除」)になります。
  - ポップオーバーは「簡単に解除」することができます。これは、ポップオーバーの外をクリックするか、<kbd>Esc</kbd> キーを押すことで非表示にすることができます。
  - 通常、同時に表示できるポップオーバーは 1 つだけです。既に表示されているポップオーバーがあるときに 2 つ目を表示させると、1 つ目が非表示になります。このルールの例外は、入れ子の自動ポップオーバーがあるときです。詳しくは[入れ子のポップオーバー](/ja/docs/Web/API/Popover_API/Using#入れ子のポップオーバー)を参照してください。
- `"manual"`: [手動状態](/ja/docs/Web/API/Popover_API/Using#using_manual_popover_state)になります。
  - ポップオーバーは「簡単に解除」することができませんが、宣言的な表示/非表示/トグルボタンは動作します。
  - 複数の独立したポップオーバーを同時に表示することができます。

## 例

### 機能検出

`popover` 属性を使用して、[ポップオーバー API](/ja/docs/Web/API/Popover_API) の機能を検出するすることができます。

```js
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
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

- HTML の [`popover`](/ja/docs/Web/HTML/Global_attributes/popover) グローバル属性
- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
