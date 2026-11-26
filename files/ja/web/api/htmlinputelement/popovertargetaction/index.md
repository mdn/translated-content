---
title: "HTMLInputElement: popoverTargetAction プロパティ"
short-title: popoverTargetAction
slug: Web/API/HTMLInputElement/popoverTargetAction
l10n:
  sourceCommit: 847f754b374ed8928a270ab17672a1675802776f
---

{{APIRef("Popover API")}}

**`popoverTargetAction`** は {{domxref("HTMLInputElement")}} インターフェイスのプロパティで、`type="button"` の {{htmlelement("input")}} 要素が制御するポップオーバー要素に対して実行するアクション（`"hide"`、`"show"`、`"toggle"` のいずれか）を取得および設定します。

これは HTML の [`popovertargetaction`](/ja/docs/Web/HTML/Reference/Elements/button#popovertargetaction) 属性の値を反映します。

## 値

列挙値です。取りうる値は次の通りです。

- `"hide"`
  - : このボタンは表示中のポップオーバーを非表示にします。すでに非表示のポップオーバーを非表示にしようとした場合は、何も行われません。
- `"show"`
  - : このボタンは非表示のポップオーバーを表示します。すでに表示中のポップオーバーを表示させようとした場合は、何も行われません。
- `"toggle"`
  - : このボタンはポップオーバーの表示と非表示を切り替えます。ポップオーバーが非表示の場合は表示され、表示中の場合は非表示になります。`popoverTargetAction` が設定されていない場合、`"toggle"` がこの制御ボタンで行われるデフォルトのアクションになります。

## 例

### 自動ポップオーバーでのポップオーバーの切り替え動作

この例では、`popoverTargetAction` プロパティに `"toggle"` の値を設定する、ポップオーバー API の基本的な使い方を示します。
`popover` 属性は [`"auto"`](/ja/docs/Web/API/Popover_API/Using#自動状態と「簡単な解除」) に設定されているので、ポップオーバー領域の外側をクリックすると、ポップオーバーを簡単に解除できます。

まず、ポップオーバーの表示と非表示に使用する [`<input>`](/ja/docs/Web/HTML/Reference/Elements/input/button) の `type="button"` 型と、ポップオーバーとなる `<div>` を定義します。
この場合、これらの属性はプログラムで設定するため、`<input>` 要素に HTML の [`popovertargetaction`](/ja/docs/Web/HTML/Reference/Elements/button#popovertargetaction) 属性を設定せず、`<div>` 要素にも [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) 属性を設定しません。

```html
<input id="toggleBtn" type="button" value="ポップオーバーの表示切り替え" />
<div id="mypopover">これはポップオーバーのコンテンツです。</div>
```

JavaScript コードは最初に `<div>` と `<input>` 要素のハンドルを取得します。
そして、ポップオーバーに対応しているかどうかを調べる関数を定義します。

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// ポップオーバー API の対応状況を確認
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

ポップオーバー API に対応している場合、コードは `<div>` 要素の `popover` 属性を `"auto"` に設定し、それをトグルボタンのポップオーバー対象とします。
そして、ボタンの `popoverTargetAction` を `"toggle"` に設定します。
ポップオーバー API に対応していない場合は、 `<div>` 要素のテキストコンテンツを変更してその状態にし、トグルボタンを非表示にします。

```js
if (supportsPopover()) {
  // <div> 要素を自動ポップオーバーに設定
  popover.popover = "auto";
  // ボタンをポップオーバーの対象に設定
  toggleBtn.popoverTargetElement = popover;

  // ボタンでポップオーバーの表示状態を切り替えるように設定
  toggleBtn.popoverTargetAction = "toggle";
} else {
  popover.textContent = "ポップオーバー API に対応していません。";
  toggleBtn.hidden = true;
}
```

> [!NOTE]
> ポップオーバー要素はデフォルトでは非表示ですが、API に対応していない場合は「通常通り」表示されます。

下記の例を試してみてください。
ボタンを押すたびにポップオーバーの表示と非表示が切り替わります。
`"auto"` ポップオーバーは、ポップオーバーテキストの範囲外をクリックして簡単に解除することもできます。

{{EmbedLiveSample("Toggle popover action with an auto popover", "100%")}}

### 手動ポップオーバーでのポップオーバーの表示/非表示操作

この例では `popoverTargetAction` 属性の `"show"` と `"hide"` の値を使用する方法を示します。

コードは前回の例とほぼ同じですが、2 つの `<button>` 要素があり、ポップオーバーが [`"manual"`](/ja/docs/Web/API/Popover_API/Using#using_manual_popover_state) に設定されている点が異なります。
`manual` ポップオーバーは明示的に閉じる必要があり、ポップオーバー領域の外側をクリックしても簡単に解除されません。

```html
<input id="showBtn" type="button" value="ポップオーバーを表示" />
<input id="hideBtn" type="button" value="ポップオーバーを非表示" />
<div id="mypopover">これはポップオーバーのコンテンツです。</div>
```

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}

const popover = document.getElementById("mypopover");
const showBtn = document.getElementById("showBtn");
const hideBtn = document.getElementById("hideBtn");

const popoverSupported = supportsPopover();

if (supportsPopover()) {
  // <div> 要素を手動ポップオーバーに設定
  popover.popover = "manual";

  // ボタンをポップオーバーの対象に設定
  showBtn.popoverTargetElement = popover;
  hideBtn.popoverTargetElement = popover;

  // 対象の動作を表示/非表示に設定
  showBtn.popoverTargetAction = "show";
  hideBtn.popoverTargetAction = "hide";
} else {
  popover.textContent = "ポップオーバー API に対応していません。";
  showBtn.hidden = true;
  hideBtn.hidden = true;
}
```

ポップオーバーは、「ポップオーバーを表示」ボタンを選択することで表示させ、「ポップオーバーを非表示」ボタンを使用することで解除することができます。

{{EmbedLiveSample("Show/hide popover action with a manual popover", "100%")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) グローバル属性
- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
