---
title: "Element: keypress イベント"
short-title: keypress
slug: Web/API/Element/keypress_event
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef}} {{deprecated_header}}

**`keypress`** イベントは、文字値を生成するキーが押下されたときに発行されます。

文字値を生成するキーの例としては、アルファベットキー、数字キー、区切り記号キーが挙げられます。文字値を生成しないキーの例としては、 <kbd>Alt</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, <kbd>Meta</kbd> のような修飾キーが挙げられます。

> **警告:** このイベントは非推奨になりましたので、代わりに [`beforeinput`](/ja/docs/Web/API/HTMLElement/beforeinput_event) または [`keydown`](/ja/docs/Web/API/Element/keydown_event) を使用してください。

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

    > **警告:** これはユーザーのキーボードレイアウトを無視します。つまり、ユーザーが QWERTY キーボードレイアウトの "Y" の位置（ホーム行の上の行の中央付近）でキーを押した場合、ユーザーが QWERTZ キーボード（これはユーザーが "Z" を期待し、他のすべてのプロパティが "Z" を示すことになる）または Dvorak キーボードレイアウト（これはユーザーが "F" を期待する）であっても、常に "KeyY" を返します。ユーザーに正しいキーストロークを表示したい場合は、 {{domxref("Keyboard.getLayoutMap()")}} を使用してください。

- {{domxref("KeyboardEvent.ctrlKey")}} {{ReadOnlyInline}}

  - : 論理値で、そのキーイベントが発生した際に <kbd>Ctrl</kbd> キーが押されていれば `true` を返します。

- {{domxref("KeyboardEvent.isComposing")}} {{ReadOnlyInline}}
  - : 論理値で、このイベントが `compositionstart` と `compositionend` の間に発生したものであれば `true` を返します。
- {{domxref("KeyboardEvent.key")}} {{ReadOnlyInline}}
  - : 文字列で、このイベントが表すキーのキー値を表します。
- {{domxref("KeyboardEvent.locale")}} {{ReadOnlyInline}}

  - : 文字列で、キーボードに設定されているロケールを示すロケール文字列を返します。ブラウザーや端末がキーボードのロケールを知らない場合は空文字列となります。

    > **メモ:** このプロパティは入力データのロケールを表すわけではありません。例えば、ユーザーが使用するキーボードレイアウトと入力テキストとで言語が異なる場合があります。

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

```html
<div>
  <label for="sample"
    >この入力欄にフォーカスを当てて、何か入力してください。</label
  >
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

  - [`input`](/ja/docs/Web/API/HTMLElement/input_event)
  - [`keydown`](/ja/docs/Web/API/Element/keydown_event)
  - [`keyup`](/ja/docs/Web/API/Element/keyup_event)
