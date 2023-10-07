---
title: "HTMLInputElement: popoverTargetElement プロパティ"
slug: Web/API/HTMLInputElement/popoverTargetElement
l10n:
  sourceCommit: 559c464755abf4ca999a21ce7f3cb1027143f68f
---

{{ APIRef("DOM") }}{{SeeCompatTable}}

**`popoverTargetElement`** は {{domxref("HTMLInputElement")}} インターフェイスのプロパティで、{{htmlelement("input")}} 要素の `type="button"` 型で制御されるポップオーバー要素を取得および設定します。

これは JavaScript において HTML の [`popovertarget`](/ja/docs/Web/HTML/Element/button#popovertarget) 属性に相当するものです。

## 値

DOM 内でのポップオーバー要素への参照です。

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
