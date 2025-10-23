---
title: "HTMLButtonElement: popoverTargetAction プロパティ"
short-title: popoverTargetAction
slug: Web/API/HTMLButtonElement/popoverTargetAction
l10n:
  sourceCommit: a4e0df90868c274842b083ad034eb60f57b76aae
---

{{APIRef("Popover API")}}

**`popoverTargetAction`** は {{domxref("HTMLButtonElement")}} インターフェイスのプロパティで、この制御ボタンで制御されるポップオーバー要素で実行されるアクション（`"hide"`、`"show"`、`"toggle"` の何れか）を取得および設定します。

これは HTML の [`popovertargetaction`](/ja/docs/Web/HTML/Reference/Elements/button#popovertargetaction) 属性の値を反映します。

## 値

列挙値です。取りうる値は次の通りです。

- `"hide"`
  - : このボタンは表示中のポップオーバーを非表示にします。すでに非表示のポップオーバーを非表示にしようとした場合は、何も行われません。
- `"show"`
  - : このボタンは非表示のポップオーバーを表示します。すでに表示中のポップオーバーを表示させようとした場合は、何も行われません。
- `"toggle"`
  - : このボタンはポップオーバーを表示と非表示の間でトグル切り替えします。ポップオーバーが非表示の場合は、表示されます。ポップオーバーが表示中の場合は、非表示になります。`popoverTargetAction` が設定されていない場合、`"toggle"` がこの制御ボタンで行われる既定のアクションになります。

## 例

### 自動ポップオーバーにおけるポップオーバーの切り替え

この例では、 `popoverTargetAction` プロパティに "toggle" 値を設定したポップオーバー API の基本的な使用例を示します。
`popover` 属性は [`"auto"`](/ja/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) に設定されているので、ポップオーバーはポップオーバー領域の外側をクリックすることで閉じることができます("light-dismissed")。

最初にポップオーバーの表示・非表示に使用する HTML 要素 `<button>` とポップオーバーになる `<div>` を定義します。
この阿合、[`popovertargetaction`](/ja/docs/Web/HTML/Reference/Elements/button#popovertargetaction) 属性を `<button>` を設定したり、[`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) 属性を `<div>` に設定したりはしません。プログラム的に行うからです。

```html
<button id="toggleBtn">ポップオーバーのトグル切り替え</button>
<div id="mypopover">これはポップオーバーの内容です。</div>
```

JavaScript コードは最初に `<div>` と `<button>` 要素のハンドルを取得します。
そして、ポップオーバーに対応しているかどうかを調べる関数を定義します。

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// ポップオーバー API に対応しているか確認
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

ポップオーバー API に対応している場合、コードは `<div>` 要素の `popover` 属性を `"auto"` に設定し、それをトグルボタンのポップオーバー対象とします。
そして `<button>` の `popoverTargetAction` を `"toggle"` に設定します。
ポップオーバー API に対応していない場合は、`<div>` 要素のテキストコンテンツを変更してその旨を記述し、トグルボタンを非表示にします。

```js
if (supportsPopover()) {
  // <div> 要素を自動ポップオーバーに設定
  popover.popover = "auto";
  // ボタンのターゲットをこのポップオーバーに設定
  toggleBtn.popoverTargetElement = popover;

  // ボタンがポップオーバーの表示を切り替えるように設定する
  toggleBtn.popoverTargetAction = "toggle";
} else {
  popover.textContent = "ポップオーバー API に対応していません。";
  toggleBtn.hidden = true;
}
```

> [!NOTE]
> ポップオーバー要素は既定で非表示になりますが、要素が API に対応していない場合は「通常通り」表示されます。

下記の例を試してみてください。
ボタンを押すたびにポップオーバーを表示させたり非表示にしたりできます。
`"auto"` ポップオーバーはポップオーバーテキストの範囲外を選択することで「簡単な解除」をすることもできます。

{{EmbedLiveSample("Toggle popover action with an auto popover", "100%")}}

### 手動ポップオーバーにおけるポップオーバーの表示・非表示操作

この例では `popoverTargetAction` 属性の `"show"` と `"hide"` の値を使用する方法を示します。

コードは前回の例とほぼ同じですが、2　つの `<button>` 要素があり、ポップオーバーが [`"manual"`](/ja/docs/Web/API/Popover_API/Using#手動のポップオーバー状態の使用) に設定されている点が異なります。
`manual` ポップオーバーは明示的に閉じなければならず、ポップオーバー領域の外側を選択することで「簡単な解除」することはできません。

```html
<button id="showBtn">ポップオーバーを表示</button>
<button id="hideBtn">ポップオーバーを非表示</button>
<div id="mypopover">これはポップオーバーの内容です。</div>
```

```js
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}

const popover = document.getElementById("mypopover");
const showBtn = document.getElementById("showBtn");
const hideBtn = document.getElementById("hideBtn");

const popoverSupported = supportsPopover();

if (supportsPopover()) {
  // <div> 要素を手動ポップオーバーに設定
  popover.popover = "manual";

  // ボタンのターゲットをこのポップオーバーに設定
  showBtn.popoverTargetElement = popover;
  hideBtn.popoverTargetElement = popover;

  // ターゲットの操作を表示/非表示とする
  showBtn.popoverTargetAction = "show";
  hideBtn.popoverTargetAction = "hide";
} else {
  popover.textContent = "ポップオーバー API に対応していません。";
  showBtn.hidden = true;
  hideBtn.hidden = true;
}
```

ポップオーバーは、「ポップオーバーを表示」ボタンを選択することで表示させ、「ポップオーバーを隠す」ボタンを使用することで解除することができます。

{{EmbedLiveSample("Show/hide popover action with a manual popover", "100%")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
