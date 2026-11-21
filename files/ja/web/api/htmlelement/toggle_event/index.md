---
title: "HTMLElement: toggle イベント"
slug: Web/API/HTMLElement/toggle_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("HTML DOM")}}

**`toggle`** は {{domxref("HTMLElement")}} インターフェイスのイベントで、{{domxref("Popover_API", "ポップオーバー", "", "nocode")}} 要素、{{htmlelement("dialog")}} 要素、または {{htmlelement("details")}} 要素が表示または非表示になった直後に発生します。

- 要素が非表示から表示へ遷移する場合、[`event.oldState`](/ja/docs/Web/API/ToggleEvent/oldState) プロパティは `closed` に、[`event.newState`](/ja/docs/Web/API/ToggleEvent/newState) プロパティは `open` に設定されます。
- 要素が表示から非表示へ遷移する場合、`event.oldState` は `open` に、`event.newState` は `closed` になります。

このイベントは[キャンセル可能](/ja/docs/Web/API/Event/cancelable)ではありません。

## 構文

{{domxref("EventTarget/addEventListener", "addEventListener()")}} でこのイベント名を使用してください。

```js-nolint
addEventListener("toggle", (event) => { })
```

または、インターフェイスの[イベントハンドラープロパティ](/ja/docs/Web/API/Document_Object_Model/Events#onevent_プロパティの使用)に代入してください。

```js-nolint
ontoggle = (event) => { }
```

## イベント型

{{domxref("ToggleEvent")}} です。{{domxref("Event")}} から継承しています。

{{InheritanceDiagram("ToggleEvent")}}

## 例

以下の例は、{{domxref("Popover_API", "ポップオーバー", "", "nocode")}} 要素に対する `toggle` イベントの使用方法を示します。
ここで示すコードは {{htmlelement("dialog")}} 要素や {{htmlelement("details")}} 要素でも同様に使用できます。

### 基本的な例

この例では、`toggle` イベントを待ち受けし、結果をログに記録する方法を示します。

#### HTML

HTML は、ポップオーバーと、その表示と非表示を切り替えるボタンで構成されています。

```html
<button popovertarget="mypopover">ポップオーバーを開閉</button>
<div id="mypopover" popover>ポップオーバーの中身</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 150px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

このコードは、`toggle` イベントのイベントリスナーを追加し、状態をログに記録します。

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("toggle", (event) => {
  if (event.newState === "open") {
    log("ポップオーバーが表示されました");
  } else {
    log("ポップオーバーが非表示になりました");
  }
});
```

#### 結果

{{EmbedLiveSample("Basic example", '100%', "250px")}}

### toggle イベントの合体に関するメモ

イベントループが次のサイクルに進む前に複数の `toggle` イベントが発生すると、イベントは 1 つだけ発生します。
この動作を「イベントの合体」といいます。

例えば、次のようになります。

```js
popover.addEventListener("toggle", () => {
  // …
});

popover.showPopover();
popover.hidePopover();
// `toggle` は 1 回だけ発生します
```

### その他の例

- [モーダルダイアログを開く](/ja/docs/Web/API/HTMLDialogElement#モーダルダイアログを開く)例が `HTMLDialogElement` にあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) グローバル属性
- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
- 関連イベント: [`beforetoggle`](/ja/docs/Web/API/HTMLElement/beforetoggle_event)
