---
title: "HTMLElement: input イベント"
slug: Web/API/HTMLElement/input_event
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}

**`input`** イベントは、 {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} の各要素の値 (`value`) が変更されたときに発生します。

このイベントは、 {{domxref("HTMLElement.contentEditable", "contenteditable")}} を有効にした要素、 {{domxref("Document.designMode", "designMode")}} を有効にしたすべての要素にも適用されます。 `contenteditable` や `designMode` の場合、イベントのターゲットは*編集ホスト*です。これらのプロパティが複数の要素に適用された場合、編集ホストは親が編集可能ではない直近の祖先要素になります。

`<input>` 要素が `type=checkbox` または `type=radio` 型であった場合、 [HTML Living Standard 仕様書](https://html.spec.whatwg.org/multipage/input.html#the-input-element:event-input-2)によれば、 `input` イベントはユーザーがコントロールの状態を変更するたびに発生することになっています。しかし、歴史的に常にそうなるとは限りません。互換性に注意するか、これらの種類の要素では、代わりに {{domxref("HTMLElement/change_event", "change")}} イベントを使用するようにするかしてください。

{{htmlelement("textarea")}} およびテキスト入力を受け入れる {{htmlelement("input")}} 要素（`type=text`、`type=tel`、など）では、インターフェイスは {{DOMxRef("InputEvent")}} です。それ以外の場合は、インターフェイスは {{DOMxRef("Event")}} になります。

> **メモ:** `input` イベントは、要素の `value` の値が変化するたびに発生します。これは、 {{domxref("HTMLElement/change_event", "change")}} イベントが Enter キーが押されたり、選択肢から値が選択されたりするような、値が決定したときに発生するのとは異なります。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("input", (event) => {});

oninput = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

この例では、 {{HtmlElement("input")}} 要素の値が変化するたびに値をログ出力します。

### HTML

```html
<input placeholder="Enter some text" name="name" />
<p id="values"></p>
```

### JavaScript

```js
const input = document.querySelector("input");
const log = document.getElementById("values");

input.addEventListener("input", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント:

  - {{domxref("HTMLElement/beforeinput_event", "beforeinput")}}
  - {{domxref("HTMLElement/change_event", "change")}}
  - {{domxref("HTMLInputElement/invalid_event", "invalid")}}
