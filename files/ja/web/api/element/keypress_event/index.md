---
title: "Element: keypress イベント"
short-title: keypress
slug: Web/API/Element/keypress_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}} {{deprecated_header}}

**`keypress`** イベントは、文字値を生成するキーが押下されたときに発行されます。

文字値を生成するキーの例としては、アルファベットキー、数字キー、区切り記号キーが挙げられます。文字値を生成しないキーの例としては、 <kbd>Alt</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, <kbd>Meta</kbd> のような修飾キーが挙げられます。

> [!WARNING]
> このイベントは非推奨になりましたので、代わりに [`beforeinput`](/ja/docs/Web/API/Element/beforeinput_event) または [`keydown`](/ja/docs/Web/API/Element/keydown_event) を使用してください。

## 構文

イベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用したり、イベントハンドラープロパティを設定したりします。

```js
addEventListener("keypress", (event) => {});

onkeypress = (event) => {};
```

## イベント型

{{domxref("KeyboardEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("KeyboardEvent")}}

## イベントプロパティ

_このインターフェイスには親である {{domxref("UIEvent")}} や {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("KeyboardEvent.altKey")}} {{ReadOnlyInline}}

  - : 論理値で、このキーイベントが発生した際に <kbd>Alt</kbd> （macOS の場合は <kbd>Option</kbd> または <kbd>⌥</kbd>）キーが押されていれば `true` を返します。

- {{domxref("KeyboardEvent.code")}} {{ReadOnlyInline}}

  - : 文字列で、このイベントが表す物理キーのコード値を返します。

- {{domxref("KeyboardEvent.ctrlKey")}} {{ReadOnlyInline}}

  - : 論理値で、そのキーイベントが発生した際に <kbd>Ctrl</kbd> キーが押されていれば `true` を返します。

- {{domxref("KeyboardEvent.isComposing")}} {{ReadOnlyInline}}
  - : 論理値で、このイベントが `compositionstart` と `compositionend` の間に発生したものであれば `true` を返します。
- {{domxref("KeyboardEvent.key")}} {{ReadOnlyInline}}
  - : 文字列で、このイベントが表すキーのキー値を表します。
- {{domxref("KeyboardEvent.location")}} {{ReadOnlyInline}}
  - : 数値で、キーボードなどの入力機器上のキーの位置を表す値を返します。位置を特定する定数の一覧は、[キーボード上の位置](/ja/docs/Web/API/KeyboardEvent#キーボード上の位置)にあります。
- {{domxref("KeyboardEvent.metaKey")}} {{ReadOnlyInline}}

  - : 論理値で、このキーイベントが発生した際に <kbd>Meta</kbd> キー（Mac キーボードでは <kbd>⌘ Command</kbd> キー、 Windows キーボードでは Windows キー (<kbd>⊞</kbd>)）が押されていれば `true` を返します。

- {{domxref("KeyboardEvent.repeat")}} {{ReadOnlyInline}}
  - : 論理値で、このキーが押し続けられて自動リピートしている場合に `true` を返します。
- {{domxref("KeyboardEvent.shiftKey")}} {{ReadOnlyInline}}

  - : 論理値で、このキーイベントが発生した際に <kbd>Shift</kbd> キーが押されていれば `true` を返します。

## 例

### addEventListener による keypress の例

この例では、 {{HtmlElement("input")}} 要素内でキーを押したときに、 {{domxref("KeyboardEvent.code")}} 値を記録します。

```html-nolint
<div>
  <label for="sample">この入力欄にフォーカスを当てて、何か入力してください。</label>
  <input type="text" name="text" id="sample" />
</div>
<p id="log"></p>
```

```js
const log = document.getElementById("log");
const input = document.querySelector("input");

input.addEventListener("keypress", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

{{EmbedLiveSample("addEventListener_keypress_example")}}

### onkeypress による同等の例

```js
input.onkeypress = logKey;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 同様にこのイベントのターゲットとなる {{domxref("Document")}} インターフェイス。
- 関連イベント:

  - [`input`](/ja/docs/Web/API/Element/input_event)
  - [`keydown`](/ja/docs/Web/API/Element/keydown_event)
  - [`keyup`](/ja/docs/Web/API/Element/keyup_event)
