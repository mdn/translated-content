---
title: "HTMLButtonElement: popoverTargetElement プロパティ"
short-title: popoverTargetElement
slug: Web/API/HTMLButtonElement/popoverTargetElement
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("Popover API")}}

**`popoverTargetElement`** は {{domxref("HTMLButtonElement")}} インターフェイスのプロパティで、制御ボタンで制御されるポップオーバー要素を取得および設定します。

これは JavaScript において HTML の [`popovertarget`](/ja/docs/Web/HTML/Element/button#popovertarget) 属性に相当するものです。

## 値

DOM 内でのポップオーバー要素への参照です。

## 例

### auto ポップオーバーによるポップオーバー操作の切り替え

この例では、ポップオーバー API の基本的な使い方を示しています。まず、`<div>` 要素をポップオーバーとして設定し、それを `<button>` の `popoverTargetElement` として設定します。
`popover` 属性は [`"manual"`](/ja/docs/Web/API/Popover_API/Using#手動のポップオーバー状態の使用) に設定されているため、ポップオーバーはボタンを使用して閉じられなければならず、ポップオーバー領域外を選択して「簡単な解除」はできません。

まず、ポップオーバーの表示と非表示に使用する HTML の `<button>` 要素と、ポップオーバーとなる `<div>` 要素を定義します。
この場合、プログラムで設定する予定であるため、HTML の `<button>` 要素に [`popovertargetaction`](/ja/docs/Web/HTML/Element/button#popovertargetaction) 属性を設定したり、`<div>` 要素に [`popover`](/ja/docs/Web/HTML/Global_attributes/popover) 属性を設定したりする必要はありません。

```html
<button id="toggleBtn">ポップオーバーの切り替え</button>
<div id="mypopover">これはポップオーバーコンテンツです。</div>
```

JavaScriptのコードでは、最初に `<div>` および `<button>` 要素を取得します。
次に、ポップオーバーに対応しているかどうかを調べる関数を定義します。

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// ポップオーバー API の対応を調べます。
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

ポップオーバー API に対応している場合、コードでは `<div>` 要素の `popover` 属性を `"auto"` に設定し、トグルボタンのポップオーバー対象とします。
次に、`<button>`の `popoverTargetAction` を `"toggle"` に設定します。
ポップオーバー API に対応していない場合は、`<div>` 要素のテキストコンテンツを変更してこの状態にし、トグルボタンを非表示にします。

```js
if (supportsPopover()) {
  // <div> 要素を auto ポップオーバーに設定
  popover.popover = "auto";

  // ボタンポップオーバーの対象をポップオーバーに設定
  toggleBtn.popoverTargetElement = popover;

  // このボタンがポップオーバーの表示を切り替えるように設定
  toggleBtn.popoverTargetAction = "toggle";
} else {
  popover.textContent = "ポップオーバー API に対応していません。";
  toggleBtn.hidden = true;
}
```

> [!NOTE]
> ポップオーバー要素は既定では非表示ですが、API に対応していない場合、要素は「通常通り」表示されます。

下記の例を試してみてください。
ボタンを操作してポップオーバーの表示と非表示を切り替えてください。
"auto" ポップオーバーは、ポップオーバーテキストの境界外を選択することでも閉じることができます。

{{EmbedLiveSample("Toggle popover action with an auto popover", "100%")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
