---
title: "Element: input イベント"
short-title: input
slug: Web/API/Element/input_event
l10n:
  sourceCommit: 72ca3d725e3e56b613de3ac9727bd0d6d619c38a
---

{{APIRef}}

**`input`** イベントは、 {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} の各要素の値 (`value`) が、ユーザーのアクション（テキストボックスに入力したり、チェックボックスを調べるなど）を直接的な原因変更された際に発行されます。

このイベントは、 {{domxref("HTMLElement.contentEditable", "contenteditable")}} を有効にした要素、 {{domxref("Document.designMode", "designMode")}} を有効にしたすべての要素にも適用されます。 `contenteditable` や `designMode` の場合、イベントのターゲットは*編集ホスト*です。これらのプロパティが複数の要素に適用された場合、編集ホストは親が編集可能ではない直近の祖先要素になります。

`<input>` 要素が `type=checkbox` または `type=radio` 型であった場合、 [HTML Living Standard 仕様書](https://html.spec.whatwg.org/multipage/input.html#the-input-element:event-input-2)によれば、 `input` イベントはユーザーがコントロールの状態を変更するたびに発生することになっています。しかし、歴史的に常にそうなるとは限りません。互換性に注意するか、これらの種類の要素では、代わりに {{domxref("HTMLElement/change_event", "change")}} イベントを使用するようにするかしてください。

{{htmlelement("textarea")}} およびテキスト入力を受け入れる {{htmlelement("input")}} 要素（`type=text`、`type=tel`、など）では、インターフェイスは {{DOMxRef("InputEvent")}} です。それ以外の場合は、インターフェイスは {{DOMxRef("Event")}} になります。

`input` イベントは、要素の `value` の値が変化するたびに発生します。これは、 {{domxref("HTMLElement/change_event", "change")}} イベントが Enter キーが押されたり、選択肢から値が選択されたりするような、値が決定したときに発生するのとは異なります。 JavaScript でプログラムにより要素の `value` を変更した場合、`input` イベントは発行されないことに注意してください。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("input", (event) => {});

oninput = (event) => {};
```

## イベント型

{{domxref("InputEvent")}} です。{{domxref("UIEvent")}} を継承しています。

{{InheritanceDiagram("InputEvent")}}

## イベントプロパティ

_このインターフェイスは、親である {{DOMxRef("UIEvent")}}、{{DOMxRef("Event")}} のプロパティを継承しています。_

- {{DOMxRef("InputEvent.data")}} {{ReadOnlyInline}}
  - : 文字列で、挿入された文字を返します。変更により挿入されたテキストがない（例えば文字を削除した）場合は、空文字列になることがあります。
- {{DOMxRef("InputEvent.dataTransfer")}} {{ReadOnlyInline}}
  - : 編集可能なコンテンツに追加されたリッチテキストまたはプレーンテキストデータ、あるいは削除されたプレーンテキストデータに関する情報を保持する {{DOMxRef("DataTransfer")}} オブジェクトを返します。
- {{DOMxRef("InputEvent.inputType")}} {{ReadOnlyInline}}
  - : テキストの挿入、削除、書式設定など、編集可能なコンテンツに対する変更の種類を返します。
- {{DOMxRef("InputEvent.isComposing")}} {{ReadOnlyInline}}
  - : 論理値で、イベントが {{domxref("Element/compositionstart_event", "compositionstart")}} の後かつ {{domxref("Element/compositionend_event", "compositionend")}} の前に発生したかを示す値を返します。

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

  - {{domxref("Element/beforeinput_event", "beforeinput")}}
  - {{domxref("HTMLElement/change_event", "change")}}
  - {{domxref("HTMLInputElement/invalid_event", "invalid")}}
