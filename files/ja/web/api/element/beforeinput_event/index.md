---
title: "HTMLElement: beforeinput イベント"
slug: Web/API/Element/beforeinput_event
---

{{APIRef}}

DOM の **`beforeinput`** イベントは、{{HTMLElement("input")}} または {{HTMLElement("textarea")}} 要素の値が変更されようとしているときに発生します。 このイベントは、{{domxref("HTMLElement.contentEditable", "contenteditable")}} が有効になっている要素、および {{domxref("Document.designMode", "designMode")}} がオンになっている要素にも適用されます。

これにより、ブラウザーが DOM ツリーを変更する前に、ウェブアプリがテキスト編集の動作を上書きすることができ、入力イベントをより詳細に制御してパフォーマンスを向上させることができます。

`contenteditable` や `designMode` の場合、イベントのターゲットは**編集ホスト**です。これらのプロパティが複数の要素に適用された場合、編集ホストは、親が編集可能ではない直近の先祖要素になります。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使うか、イベントハンドラープロパティを代入するかします。

```js
addEventListener("beforeinput", (event) => {});

onbeforeinput = (event) => {};
```

## イベント型

{{domxref("InputEvent")}} です。{{domxref("Event")}} から継承しています。

{{InheritanceDiagram("InputEvent")}}

## イベントプロパティ

_このインターフェイスには、親である {{DOMxRef("UIEvent")}} および {{DOMxRef("Event")}} から継承したプロパティがあります。_

- {{DOMxRef("InputEvent.data")}} {{ReadOnlyInline}}
  - : 挿入された文字を文字列で返します。変更によって挿入されたテキストがない場合は、空文字列になることがあります（文字を削除した場合など）。
- {{DOMxRef("InputEvent.dataTransfer")}} {{ReadOnlyInline}}
  - : 編集可能なコンテンツに追加または削除されるリッチテキストまたはプレーンテキストデータに関する情報が入った {{DOMxRef("DataTransfer")}} オブジェクトを返します。
- {{DOMxRef("InputEvent.inputType")}} {{ReadOnlyInline}}
  - : 編集可能なコンテンツの変更の種類、例えばテキストの挿入、削除、整形などを返します。入力型の完全なリストについては、プロパティページを参照してください。
- {{DOMxRef("InputEvent.isComposing")}} {{ReadOnlyInline}}
  - : 論理値で、このイベントが {{domxref("Element/compositionstart_event", "compositionstart")}} の後、{{domxref("Element/compositionend_event", "compositionend")}} の前に発生したかどうかを示します。

## 例

### 機能の検出

以下の関数は、 `beforeinput` および `getTargetRanges` に対応していれば true を返します。

```js
function isBeforeInputEventAvailable() {
  return (
    window.InputEvent &&
    typeof InputEvent.prototype.getTargetRanges === "function"
  );
}
```

### 単純なロガー

この例では、 {{HtmlElement("input")}} 要素に適用された新しい値に置き換える直前に、要素の現在の値をログに記録します。

#### HTML

```html
<input placeholder="テキストを入力" name="name" />
<p id="values"></p>
```

#### JavaScript

```js
const input = document.querySelector("input");
const log = document.getElementById("values");

input.addEventListener("beforeinput", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
```

#### 結果

{{EmbedLiveSample("Simple_logger")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: [`input`](/ja/docs/Web/API/Element/input_event)
