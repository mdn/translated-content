---
title: 'HTMLInputElement: selectionchange イベント'
slug: Web/API/HTMLInputElement/selectionchange_event
tags:
  - API
  - Event
  - リファレンス
  - Selection
  - 選択 API
  - selectionchange
  - 実験的
browser-compat: api.HTMLInputElement.selectionchange_event
translation_of: Web/API/HTMLInputElement/selectionchange_event
---
{{APIRef}}{{SeeCompatTable}}

**`selectionchange`** は[選択 API](/ja/docs/Web/API/Selection) のイベントで、 {{HTMLElement("input")}} 要素の中でテキストの選択状態が変化したときに発行されます。
これは、文字単位の選択範囲位が変化した場合も、キャレットが移動したときも含みます。

<table class="properties">
  <tbody>
    <tr>
      <th>バブリング</th>
      <td>はい</td>
    </tr>
    <tr>
      <th>キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th>インターフェイス</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th>イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers.onselectionchange", "onselectionchange")}}
      </td>
    </tr>
  </tbody>
</table>

このイベントは通常 {{HTMLElement("input")}} 上にイベントリスナーを追加し、ハンドラー関数内で {{domxref("HTMLInputElement")}} の `selectionStart`, `selectionEnd`, `selectionDirection` の各プロパティを読み取ることで処理します。

また、グローバルな {{domxref("GlobalEventHandlers.onselectionchange", "onselectionchange")}} イベントハンドラーにリスナーを追加し、ハンドラー関数内で {{domxref("Document.getSelection()")}} を使って{{domxref("Selection", "選択状態", "", 1)}}を得ることもできます。しかし、これはテキストの選択範囲の変更を取得するのにはあまり便利ではありません。

## 例

以下の例は、 {{HTMLElement("input")}} 要素の中にあるテキストの選択状態を取得する方法を示しています。

### HTML

```html
<div>Enter and select text here:<br><input id="mytext" rows="2" cols="20"></div>
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

## 関連情報

- {{domxref("GlobalEventHandlers.onselectionchange")}}
