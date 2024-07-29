---
title: "HTMLInputElement: selectionchange イベント"
short-title: selectionchange
slug: Web/API/HTMLInputElement/selectionchange_event
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}{{SeeCompatTable}}

**`selectionchange`** は[選択 API](/ja/docs/Web/API/Selection) のイベントで、 {{HTMLElement("input")}} 要素の中でテキストの選択状態が変化したときに発行されます。
これは、文字単位の選択範囲位が変化した場合も、キャレットが移動したときも含みます。

このイベントはキャンセル不可です。

このイベントは通常 {{HTMLElement("input")}} 上にイベントリスナーを追加し、ハンドラー関数内で {{domxref("HTMLInputElement")}} の `selectionStart`、`selectionEnd`、`selectionDirection` の各プロパティを読み取ることで処理します。

また、`onselectionchange` イベントハンドラーにリスナーを追加し、ハンドラー関数内で {{domxref("Document.getSelection()")}} を使って{{domxref("Selection", "選択状態", "", 1)}}を得ることもできます。しかし、これはテキストの選択範囲の変更を取得するのにはあまり便利ではありません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("selectionchange", (event) => {});

onselectionchange = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

以下の例は、 {{HTMLElement("input")}} 要素の中にあるテキストの選択状態を取得する方法を示しています。

### HTML

```html
<div>
  こちらにテキストを入力して選択してください:<br /><input
    id="mytext"
    rows="2"
    cols="20" />
</div>
<div>selectionStart: <span id="start"></span></div>
<div>selectionEnd: <span id="end"></span></div>
<div>selectionDirection: <span id="direction"></span></div>
```

### JavaScript

```js
const myinput = document.getElementById("mytext");

myinput.addEventListener("selectionchange", () => {
  document.getElementById("start").textContent = myinput.selectionStart;
  document.getElementById("end").textContent = myinput.selectionEnd;
  document.getElementById("direction").textContent = myinput.selectionDirection;
});
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
