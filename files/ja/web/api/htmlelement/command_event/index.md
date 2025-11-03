---
title: "HTMLElement: command イベント"
slug: Web/API/HTMLElement/command_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Invoker Commands API")}}

**`command`** は {{domxref("HTMLElement")}} インターフェイスのイベントで、 {{domxref("HTMLButtonElement", "button")}} に有効な {{domxref("HTMLButtonElement.commandForElement", "commandForElement")}} および {{domxref("HTMLButtonElement.command", "command")}} 値がある場合に制御される要素上で、ボタンが操作されたとき（例：クリックされたとき）に発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("command", (event) => { })

oncommand = (event) => { }
```

## イベント型

{{domxref("CommandEvent")}} です。{{domxref("Event")}} を継承しています。

{{InheritanceDiagram("CommandEvent")}}

## 例

### 基本的な例

```js
const popover = document.getElementById("mypopover");

// …

popover.addEventListener("command", (event) => {
  if (event.action === "show-popover") {
    console.log("ポップオーバーが表示されようとしています");
  }
});
```

### イベントの配信とキャンセル

特筆すべきは、`command` イベントは呼び出された要素上で発生する点です。ボタンがクリックされると、まず `click` イベントが発信されます。この `click` イベントがキャンセルされた場合、`command` イベントは発生せず、デフォルトの動作も実行されません。
ボタンの `click` イベントをキャンセルするだけでなく、`command` イベント自体をキャンセルすることも可能です。

例を示します。

```js
button.addEventListener("click", (event) => {
  event.preventDefault(); // `command` イベントは発生しない
});
```

```js
element.addEventListener("command", (event) => {
  event.preventDefault(); // `command` イベントは発生するが、デフォルトの動作はキャンセルされる
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Invoker Commands API", "呼び出しコマンド API", "", "nocode")}}
- {{domxref("HTMLButtonElement.command")}}
- {{domxref("HTMLButtonElement.commandForElement")}}
