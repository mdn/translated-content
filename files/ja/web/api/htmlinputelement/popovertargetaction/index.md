---
title: "HTMLInputElement: popoverTargetAction プロパティ"
slug: Web/API/HTMLInputElement/popoverTargetAction
l10n:
  sourceCommit: 559c464755abf4ca999a21ce7f3cb1027143f68f
---

{{ APIRef("DOM") }}{{SeeCompatTable}}

**`popoverTargetAction`** は {{domxref("HTMLButtonElement")}} インターフェイスのプロパティで、{{htmlelement("input")}} 要素の `type="button"` 型でで制御されるポップオーバー要素で実行されるアクション（`"hide"`、`"show"`、`"toggle"` の何れか）を取得および設定します。

これは HTML の [`popovertargetaction`](/ja/docs/Web/HTML/Element/button#popovertargetaction) 属性の値を反映します。

## 値

列挙値です。取りうる値は次の通りです。

- `"hide"`
  - : このボタンは表示中のポップオーバーを非表示にします。すでに非表示のポップオーバーを非表示にしようとした場合は、何も行われません。
- `"show"`
  - : このボタンは非表示のポップオーバーを表示します。すでに表示中のポップオーバーを表示させようとした場合は、何も行われません。
- `"toggle"`
  - : このボタンはポップオーバーを表示と非表示の間でトグル切り替えします。ポップオーバーが非表示の場合は、表示されます。ポップオーバーが表示中の場合は、非表示になります。`popoverTargetAction` が設定されていない場合、`"toggle"` がこの制御ボタンで行われる既定のアクションになります。

## 例

```js
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}

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

- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
