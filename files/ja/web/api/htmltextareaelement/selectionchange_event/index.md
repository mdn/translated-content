---
title: "HTMLTextAreaElement: selectionchange イベント"
short-title: selectionchange
slug: Web/API/HTMLTextAreaElement/selectionchange_event
l10n:
  sourceCommit: 58cc81b21f777d745877ec1430df8ba2852ff411
---

{{APIRef}}

**`selectionchange`** は[選択 API](/ja/docs/Web/API/Selection) のイベントで、{{HTMLElement("textarea")}} 要素内のテキストの選択状態が変更されたときに発生します。
これは、文字の選択範囲の変更と、キャレットが移動した場合の両方を含みます。

このイベントはキャンセル不可です。

イベントは通常 {{HTMLElement("textarea")}} にイベントリスナーを追加することで処理され、{{domxref("HTMLTextAreaElement")}} で読み込まれるハンドラー関数で処理されます。`selectionStart`、`selectionEnd`、`selectionDirection` プロパティで読み取ります。

グローバルな `onselectionchange` イベントハンドラーにリスナーを追加し、ハンドラー関数内で {{domxref("Document.getSelection()")}} を使用して {{domxref("Selection", "Selection")}} を取得することも可能です。しかし、これは _テキスト_ の選択範囲の変更を取得するのにはあまり有益ではありません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("selectionchange", (event) => { })

onselectionchange = (event) => { }
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

下記の例では、{{HTMLElement("textarea")}} 要素内での選択範囲を取得する方法を紹介します。

### HTML

```html
<div>
  ここにテキストを入力して選択してください:<br /><textarea
    id="my-text"
    rows="2"
    cols="20"></textarea>
</div>
<div>selectionStart: <span id="start"></span></div>
<div>selectionEnd: <span id="end"></span></div>
<div>selectionDirection: <span id="direction"></span></div>
```

### JavaScript

```js
const myInput = document.getElementById("my-text");

myInput.addEventListener("selectionchange", () => {
  document.getElementById("start").textContent = myInput.selectionStart;
  document.getElementById("end").textContent = myInput.selectionEnd;
  document.getElementById("direction").textContent = myInput.selectionDirection;
});
```

### 例

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
