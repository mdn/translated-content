---
title: "Element: keydown イベント"
short-title: keydown
slug: Web/API/Element/keydown_event
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef}}

**`keydown`** イベントは、キーが押されたときに発生します。

非推奨の {{domxref("Element/keypress_event", "keypress")}} イベントとは異なり、 `keydown` イベントは生成する文字値に関係なくすべてのキーで発生します。

`keydown` と [`keyup`](/ja/docs/Web/API/Element/keyup_event) イベントは、どのキーが押されたかを示すコードを提供し、 `keypress` はどの文字が入力されたかを示します。例えば、小文字の "a" は `keydown` と `keyup` では 65 と報告され、 `keypress` では 97 と報告されます。大文字の "A" は、どのイベントでも 65 と報告されます。

キーボードイベントは `<input>`, `<textarea>`, `<summary>` と `contentEditable` または `tabindex` 属性を持つものだけが生成します。捕捉されなかった場合、それらは {{domxref("Document")}} に到達するまで [DOM ツリー](/ja/docs/Web/API/Document_object_model/Using_the_Document_Object_Model#what_is_a_dom_tree)を[バブリング](/ja/docs/Learn/JavaScript/Building_blocks/Events#イベントのバブリングとキャプチャリング)します。

Firefox 65 以降では、CJKT ユーザーのブラウザー間の互換性を高めるために、 `keydown` および [`keyup`](/ja/docs/Web/API/Element/keyup_event) イベントが IME 変換中に発行されるようになりました（[Firefox バグ 354358](https://bugzil.la/354358)）。変換操作中の `keydown` イベントをすべて無視するには、次のようにしてください （229 は、IME によって処理されたイベントに関連する `keyCode` に設定される特別な値です）。

```js
eventTarget.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // 何かを行う
});
```

## 構文

イベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用したり、イベントハンドラープロパティを設定したりします。

```js
addEventListener("keydown", (event) => {});

onkeydown = (event) => {};
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
  - : 数値で、キーボードなどの入力機器上のキーの位置を表す値を返します。位置を特定する定数の一覧は、上記の[キーボード上の位置](/ja/docs/Web/API/KeyboardEvent#キーボード上の位置)にあります。
- {{domxref("KeyboardEvent.metaKey")}} {{ReadOnlyInline}}

  - : 論理値で、このキーイベントが発生した際に <kbd>Meta</kbd> キー（Mac キーボードでは <kbd>⌘ Command</kbd> キー、 Windows キーボードでは Windows キー (<kbd>⊞</kbd>)）が押されていれば `true` を返します。

- {{domxref("KeyboardEvent.repeat")}} {{ReadOnlyInline}}
  - : 論理値で、このキーが押し続けられて自動リピートしている場合に `true` を返します。
- {{domxref("KeyboardEvent.shiftKey")}} {{ReadOnlyInline}}

  - : 論理値で、このキーイベントが発生した際に <kbd>Shift</kbd> キーが押されていれば `true` を返します。

## 例

### addEventListener による keydown の例

この例では、 {{HtmlElement("input")}} 要素内でキーを押すたびに、 {{domxref("KeyboardEvent.code")}} 値を記録します。

```html
<input placeholder="ここをクリックして、キーを押してください。" size="40" />
<p id="log"></p>
```

```js
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("keydown", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

{{EmbedLiveSample("addEventListener_keydown_example")}}

### onkeydown による同等の例

```js
input.onkeydown = logKey;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`input`](/ja/docs/Web/API/HTMLElement/input_event)
- [`keypress`](/ja/docs/Web/API/Element/keypress_event)
- [`keyup`](/ja/docs/Web/API/Element/keyup_event)
