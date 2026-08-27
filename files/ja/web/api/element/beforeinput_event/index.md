---
title: "Element: beforeinput イベント"
short-title: beforeinput
slug: Web/API/Element/beforeinput_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

DOM の **`beforeinput`** イベントは、{{HTMLElement("input")}} または {{HTMLElement("textarea")}} 要素の値が変更されようとしているときに発生します。しかし、{{domxref("Element/input_event", "input")}} イベントとは異なり、{{HTMLElement("select")}} 要素では発生しません。このイベントは、{{domxref("HTMLElement.contentEditable", "contenteditable")}} が有効になっている要素、および {{domxref("Document.designMode", "designMode")}} がオンになっている要素にも適用されます。

これにより、ブラウザーが DOM ツリーを変更する前に、ウェブアプリがテキスト編集の動作を上書きすることができ、入力イベントをより詳細に制御してパフォーマンスを向上させることができます。

`contenteditable` や `designMode` の場合、イベントのターゲットは**編集ホスト**です。これらのプロパティが複数の要素に適用された場合、編集ホストは、親が編集可能ではない直近の先祖要素になります。

> [!NOTE]
> ユーザーによる変更のすべてが `beforeinput` の発生に結びつくわけではありません。また、イベントが発生しても、それをキャンセルできない場合もあります。これは、自動補完による変更、スペルチェッカーによる修正の受け入れ、パスワードマネージャーによる自動入力、{{Glossary("Input method editor", "IME")}} による変更、その他の方法による変更が行われた場合にそうなる可能性があります。詳細はブラウザーや OS によって異なります。あらゆる状況で編集動作を上書きするには、コードで `input` イベントを処理し、必要に応じて `beforeinput` ハンドラーで処理されなかった変更を元に戻す必要があります。バグ [1673558](https://bugzil.la/1673558) および [1763669](https://bugzil.la/1763669) を参照してください。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使うか、イベントハンドラープロパティを代入するかします。

```js-nolint
addEventListener("beforeinput", (event) => { })

onbeforeinput = (event) => { }
```

## イベント型

{{domxref("InputEvent")}} です。{{domxref("Event")}} から継承しています。

{{InheritanceDiagram("InputEvent")}}

## 例

### 機能検出

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

この例では、{{HtmlElement("input")}} 要素に適用された新しい値に置き換える直前に、要素の現在の値をログに記録します。

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

- 関連イベント: {{domxref("Element/input_event", "input")}}
