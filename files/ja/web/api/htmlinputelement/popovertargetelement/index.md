---
title: "HTMLInputElement: popoverTargetElement プロパティ"
short-title: popoverTargetElement
slug: Web/API/HTMLInputElement/popoverTargetElement
l10n:
  sourceCommit: a4e0df90868c274842b083ad034eb60f57b76aae
---

{{APIRef("Popover API")}}

**`popoverTargetElement`** は {{domxref("HTMLInputElement")}} インターフェイスのプロパティで、{{htmlelement("input")}} 要素の `type="button"` 型で制御されるポップオーバー要素を取得および設定します。

これは JavaScript において HTML の [`popovertarget`](/ja/docs/Web/HTML/Reference/Elements/button#popovertarget) 属性に相当するものです。

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

### 自動ポップオーバーでのポップオーバーの切り替え動作

この例では、 `popoverTargetAction` プロパティに "toggle" 値を設定したポップオーバー API の基本的な使用方法を示します。
`popover` 属性は [`"auto"`](/ja/docs/Web/API/Popover_API/Using#自動状態と「簡単な解除」) に設定されているので、ポップオーバーはポップオーバー領域の外側をクリックすることで閉じられた状態 ("light-dismissed") にすることができます。

まず、ポップオーバーの表示と非表示に使用する `<input>` と、ポップオーバーとなる `<div>` を定義します。
この場合、プログラムで行うのと同様に、ボタンには HTML の [`popovertargetaction`](/ja/docs/Web/HTML/Reference/Elements/button#popovertargetaction) 属性を設定しませんし、 [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) 属性を `<div>` に設定することもなく、

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
  return HTMLElement.prototype.hasOwnProperty("popover");
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
> ポップオーバー要素は既定では非表示ですが、 API に対応していない場合は「通常通り」表示されます。

下記の例を試してみてください。
ボタンを切り替えることでポップオーバーを表示させたり、非表示にしたりできます。
「自動」ポップオーバーは、ポップオーバーテキストの枠外を選択することで解除することもできます。

{{EmbedLiveSample("Toggle popover action with an auto popover", "100%")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) グローバル属性
- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
