---
title: "HTMLElement: beforetoggle イベント"
slug: Web/API/HTMLElement/beforetoggle_event
l10n:
  sourceCommit: 887acda9b43338ce492d4c0ad1a2145e383187b9
---

{{APIRef("HTML DOM")}}

**`beforetoggle`** は {{domxref("HTMLElement")}} インターフェイスのイベントで、{{domxref("Popover_API", "ポップオーバー", "", "nocode")}}要素または {{htmlelement("dialog")}} 要素が表示または非表示になる直前に発行されます。

- 要素が非表示状態から表示状態に遷移した場合、[`event.oldState`](/ja/docs/Web/API/ToggleEvent/oldState) プロパティには `closed` が、[`event.newState`](/ja/docs/Web/API/ToggleEvent/newState) プロパティには `open` が設定されます。
- 要素が表示状態から非表示状態に遷移した場合、 `event.oldState` は `open` に、 `event.newState` は `closed` になります。

このイベントは、要素が開いた ("show") 状態に切り替わる際には[キャンセル可能](/ja/docs/Web/API/Event/cancelable)ですが、要素が閉じられる際にはキャンセルできません。

このイベントは、特に次のような目的に使用できます。

- 要素が表示されないようにする。
- 要素または関連付けられた要素に対してクラスやプロパティを追加・削除する。例えば、ダイアログの開閉時のアニメーション動作を制御する場合など。
- 要素が開かれる前、または非表示になった後に、その状態をクリアする。例えば、ダイアログフォームをリセットして値を空の状態に戻したり、ポップアップを再表示する際にネストされた手動ポップオーバーを非表示にしたりする場合など。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("beforetoggle", (event) => { })

onbeforetoggle = (event) => { }
```

## イベント型

{{domxref("ToggleEvent")}} です。{{domxref("Event")}} から継承しています。

{{InheritanceDiagram("ToggleEvent")}}

## 例

下記の実例は、{{domxref("Popover_API", "ポップオーバー", "", "nocode")}}要素において、`beforetoggle` イベントがどのように使用されるかを示しています。
これらの例は、{{htmlelement("dialog")}} 要素でも同様に機能します。

### 基本的な例

この例では、`beforetoggle` イベントを待ち受けし、その結果をログ出力する方法を示しています。

#### HTML

HTML は、ポップオーバーと、その開閉を切り替えるボタンで構成されています。

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

このコードは、`beforetoggle` イベントのイベントリスナーを追加し、状態をログ出力します。

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    log("ポップオーバーが開かれようとしています");
  } else {
    log("ポップオーバーが閉じられようとしています");
  }
});
```

#### 結果

{{EmbedLiveSample("Basic example", '100%', "250px")}}

### ポップオーバーが開くのを防ぐ

要素を開いた際に `beforetoggle` イベントが発生した場合、そのイベントはキャンセル可能です。

以下で、ポップオーバーがまず表示が許可されているかどうかを確認し、許可されていない場合は {{domxref("Event.preventDefault()")}} を呼び出してイベントをキャンセルする方法を示します。
この例では、ポップオーバーを表示できるかどうかをチェックボックスで設定していますが、より「機能の充実した」例では、アプリケーションの状態や、ポップオーバー内のデータが表示可能な状態にあるかどうかに依存する場合もあります。

#### HTML

HTML は、ポップオーバー、ポップオーバーの表示・非表示を切り替えるボタン、およびポップオーバーを開くことができるかどうかを設定するチェックボックスで構成されています。

```html
<button popovertarget="mypopover">ポップオーバーを開閉</button>
<label for="allow-popover">
  開くのを許可する <input type="checkbox" id="allow-popover" checked />
</label>
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

まず、ポップオーバーを開くことができる状態をシミュレートするためのコードを設定します。
これは変数 `allowOpen` で表し、関連付けられたチェックボックスがオン／オフに切り替わると、この変数の値も切り替わります。

```js
const allowCheckbox = document.getElementById("allow-popover");

let allowOpen = true;

allowCheckbox.addEventListener("change", (event) => {
  allowOpen = allowCheckbox.checked;
});
```

このコードは、`beforetoggle` イベントのイベントリスナーを追加します。
`allowOpen` が false の場合、`preventDefault()` が呼び出され、ポップアップが開くのを阻止します。

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    if (allowOpen) {
      log("ポップオーバーが開かれようとしています");
    } else {
      log("ポップオーバーが開くのを防がれました");
      event.preventDefault();
    }
  } else {
    log("ポップオーバーを非表示にしようとしています");
  }
});
```

#### 結果

{{EmbedLiveSample("Prevent a popover opening", '100%', "250px")}}

### その他の例

- [モーダルダイアログを開く](/ja/docs/Web/API/HTMLDialogElement#モーダルダイアログを開く)例が `HTMLDialogElement` にあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) グローバル属性
- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
- 関連イベント: [`toggle`](/ja/docs/Web/API/HTMLElement/toggle_event)
