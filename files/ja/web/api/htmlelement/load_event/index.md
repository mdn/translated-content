---
title: "HTMLElement: load イベント"
slug: Web/API/HTMLElement/load_event
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}

**`load`** イベントは、リソースを含む要素において、そのリソースが完全に読み込まれたときに発行されます。今のところ、対応している HTML 要素は、{{HTMLElement("body")}}、{{HTMLElement("embed")}}、{{HTMLElement("iframe")}}、{{HTMLElement("img")}}、{{HTMLElement("link")}}、{{HTMLElement("object")}}、{{HTMLElement("script")}}、{{HTMLElement("style")}}、{{HTMLElement("track")}} です。

> **メモ:** 実際には `load` イベントは、{{domxref("HTMLBodyElement#event_handlers", "HTMLBodyElement")}} においては、 {{domxref("Window/load_event", "window.onload")}} イベントの別名です。従って、`load` イベントは `<body>` 要素においては、その文書のすべてのリソースが読み込まれたかエラーになったときに、一度だけ発生します。しかし、わかりやすくするために、イベントハンドラーは `HTMLBodyElement` ではなく、`window` オブジェクトに直接取り付けることが推奨されます。

このイベtのはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
elt.addEventListener("load", (event) => { ... });
// または
elt.onload = (event) => { ... };
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

この例では、{{HtmlElement("img")}} 要素がリソースの読み込みに成功するたびに画面へ出力されます。

### HTML

```html
<img id="image" src="favicon144.png" alt="MDN logo" width="72" />
<div><button onclick="reload()">Reload</button></div>
```

### JavaScript

```js
const image = document.getElementById("image");
image.onload = () => {
  document.body.innerHTML += "<div>loaded!</div>";
};

function reload() {
  image.src = "favicon144.png";
}
```

### 結果

{{EmbedLiveSample("Example", "100%", "200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント:

  - Window: {{domxref("Window/load_event", "load")}} イベント
  - Window: {{domxref("Window/error_event", "error")}} イベント
