---
title: UI イベント
slug: Web/API/UI_Events
l10n:
  sourceCommit: 8c60ba86d4c10250eb80265a3be59add51540a82
---

{{DefaultAPISidebar("UI Events")}}

## 概念と使用方法

UI イベント API は、マウスやキーボード入力などのユーザーとの対話を処理するためのシステムを定義します。これには以下のものが含まれます。

- キー入力やマウスクリックなど、特定のユーザー操作で発行されるイベント。これらのイベントのほとんどは {{domxref("Element")}} インターフェイス上で発生しますが、リソースの読み込みとアンロードに関連するイベントは {{domxref("Window")}} インターフェイス上で発生します。
- これらのイベントのハンドラーに渡される、イベントインターフェイス。これらのインターフェイスは {{domxref("Event")}} を継承しており、ある種類のユーザーとの対話に特化した追加情報を提供します。例えば、 {{domxref("KeyboardEvent")}} は {{domxref("Element.keydown_event", "keydown")}} イベントハンドラーに渡され、押されたキーに関する情報を提供します。

## インターフェイス

- {{domxref("CompositionEvent")}}
  - : コンポジションイベントのハンドラーに渡されます。コンポジションイベントにより、ユーザーが物理キーボードでは利用できない文字を入力することができます。（訳注：かな漢字変換による入力などが該当します。）
- {{domxref("FocusEvent")}}
  - : フォーカスを受けたり失ったりする要素に関連するフォーカスイベントのハンドラーに渡されます。
- {{domxref("InputEvent")}}
  - : 例えば {{HTMLElement("input")}} 要素を使用して、ユーザーが何らかの入力を行うことに関連付けられた入力イベントのハンドラーに使用します。
- {{domxref("KeyboardEvent")}}
  - : キーボードを押す／離すイベントのハンドラーに渡されます。
- {{domxref("MouseEvent")}}
  - : マウスの移動、マウスオーバーやマウスアウト、マウスボタンの押す／離すなどのマウスイベントのイベントハンドラーに渡されます。なお、{{domxref("Element.auxclick_event", "auxclick")}}、{{domxref("Element.click_event", "click")}}、{{domxref("Element.dblclick_event", "dblclick")}} イベントでは {{domxref("PointerEvent")}} オブジェクトが渡されます。
- {{domxref("MouseScrollEvent")}} {{deprecated_inline}}
  - : 非推奨です。 Firefox 専用のスクロールイベント用標準外インターフェイスです。代わりに {{domxref("WheelEvent")}} を使用してください。
- {{domxref("MutationEvent")}} {{deprecated_inline}}
  - : 変化イベントハンドラーに渡され、 DOM の変化を通知できるように設計されています。これで非推奨です。代わりに {{domxref("MutationObserver")}} を使用してください。
- {{domxref("UIEvent")}}
  - : 他の UI イベントが継承するベースであり、 {{domxref("Window.load_event", "load")}} や {{domxref("Window.unload_event", "unload")}} などのイベントに渡されるイベントインターフェイスでもあります。
- {{domxref("WheelEvent")}}
  - : {{domxref("Element.wheel_event", "wheel")}} イベントのハンドラーに渡されます。このイベントは、ユーザーがマウスホイールやタッチパッドなどのユーザーインターフェイス部品を回転させたときに発生します。

## イベント

- {{domxref("Window.abort_event", "abort")}}
  - : リソースの読み込みが（例えば、ユーザーがキャンセルしたために）中止された場合に発行されます。
- {{domxref("Element.auxclick_event", "auxclick")}}
  - : ユーザーがポインターの主要ボタン以外のボタンをクリックしたときに発行されます。
- {{domxref("Element.beforeinput_event", "beforeinput")}}
  - : ユーザー入力によって DOM が更新される直前に発行されます。
- {{domxref("Element.blur_event", "blur")}}
  - : 要素がフォーカスを失ったときに発行されます。
- {{domxref("Element.click_event", "click")}}
  - : ユーザーがポインターの主要ボタンをクリックしたときに発行されます。
- {{domxref("Element.compositionend_event", "compositionend")}}
  - : テキスト生成システム（音声入力プロセッサーなど）がそのセッションを完了した場合に発行されます（例えばユーザーが閉じられた場合など）。
- {{domxref("Element.compositionstart_event", "compositionstart")}}
  - : ユーザーがテキスト生成システム（訳注：かな漢字変換など）で新しいセッションを開始したときに発行されます。
- {{domxref("Element.compositionupdate_event", "compositionupdate")}}
  - : テキスト生成システムがそのテキストを新しい文字で更新し、 {{domxref("CompositionEvent")}} の `data` プロパティの更新を反映したときに発行されます。
- {{domxref("Element.contextmenu_event", "contextmenu")}}
  - : コンテキストメニューを呼び出す直前に発行されます。
- {{domxref("Element.dblclick_event", "dblclick")}}
  - : ユーザーがポインターの主要ボタンをダブルクリックしたときに発行されます。
- {{domxref("HTMLElement/error_event", "error")}}
  - : リソースが読み込まれなかったり、処理できなかったりした場合に発行されます（例えば、画像が無効であったり、スクリプトにエラーがあったりした場合）。
- {{domxref("Element.focus_event", "focus")}}
  - : 要素がフォーカスを受け取ったときに発行されます。
- {{domxref("Element.focusin_event", "focusin")}}
  - : 要素がフォーカスを受け取る寸前に発行されます。
- {{domxref("Element.focusout_event", "focusout")}}
  - : 要素のフォーカスが失われる寸前に発行されます。
- {{domxref("Element.input_event", "input")}}
  - : DOM がユーザー入力（例えばテキスト入力）で更新された直後に発行されます。
- {{domxref("Element.keydown_event", "keydown")}}
  - : ユーザーがキーを押したときに発行されます。
- {{domxref("Element.keypress_event", "keypress")}} {{deprecated_inline}}
  - : ユーザーがキーを押したときに、そのキーが文字を生成する場合にのみ発行されます。代わりに {{domxref("Element.keydown_event", "keydown")}} を使用してください。
- {{domxref("Element.keyup_event", "keyup")}}
  - : ユーザーがキーを離したときに発行されます。
- {{domxref("Window.load_event", "load")}}
  - : スタイルシートや画像などの依存リソースをすべて含めて、ページ全体が読み込まれたときに発行されます。
- {{domxref("Element.mousedown_event", "mousedown")}}
  - : ポインターがある要素の上にあるときに、ユーザーがマウスや他のポインティングデバイスのボタンを押すと発行されます。
- {{domxref("Element.mouseenter_event", "mouseenter")}}
  - : マウスや他のポインティングデバイスが、ある要素またはそのいずれかの子孫の境界の内側に移動したときに発行されます。
- {{domxref("Element.mouseleave_event", "mouseleave")}}
  - : マウスや他のポインティングデバイスが、ある要素とその子孫のすべての境界の外に移動したときに発行されます。
- {{domxref("Element.mousemove_event", "mousemove")}}
  - : マウスや他のポインティングデバイスが、ある要素の上を移動したときに発行されます。
- {{domxref("Element.mouseout_event", "mouseout")}}
  - : マウスや他のポインティングデバイスが、ある要素の境界の外に移動したときに発行されます。
- {{domxref("Element.mouseover_event", "mouseover")}}
  - : マウスや他のポインティングデバイスが、ある要素の上に移動したときに発行されます。
- {{domxref("Element.mouseup_event", "mouseup")}}
  - : ポインターが要素の上にあるときに、ユーザーがマウスや他のポインティングデバイスのボタンを離したときに発行されます。
- {{domxref("Window.unload_event", "unload")}}
  - : 文書または子リソースがアンロードされるときに発行されます。
- {{domxref("Element.wheel_event", "wheel")}}
  - : ユーザーがマウスホイールやタッチパッドなどのインターフェイス部品を回転させたときに発行されます。

## 例

### マウスイベント

この例では、マウスイベントを、イベントが発生した X 座標と Y 座標とともにログ出力します。マウスを黄色と赤の四角の中に移し、クリックまたはダブルクリックしてみてください。

#### HTML

```html
<div id="outer">
  <div id="inner"></div>
</div>

<div id="log">
  <pre id="contents"></pre>
  <button id="clear">Clear log</button>
</div>
```

#### CSS

```css
body {
  display: flex;
  gap: 1rem;
}

#outer {
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
}

#inner {
  height: 100px;
  width: 100px;
  background-color: red;
}

#contents {
  height: 150px;
  width: 250px;
  border: 1px solid black;
  padding: 0.5rem;
  overflow: scroll;
}
```

#### JavaScript

```js
const outer = document.querySelector("#outer");
const inner = document.querySelector("#inner");
const contents = document.querySelector("#contents");
const clear = document.querySelector("#clear");
let lines = 0;

outer.addEventListener("click", (event) => {
  log(event);
});

outer.addEventListener("dblclick", (event) => {
  log(event);
});

outer.addEventListener("mouseover", (event) => {
  log(event);
});

outer.addEventListener("mouseout", (event) => {
  log(event);
});

outer.addEventListener("mouseenter", (event) => {
  log(event);
});

outer.addEventListener("mouseleave", (event) => {
  log(event);
});

function log(event) {
  const prefix = `${String(lines++).padStart(3, "0")}: `;
  const line = `${event.type}(${event.clientX}, ${event.clientY})`;
  contents.textContent = `${contents.textContent}${prefix}${line}\n`;
  contents.scrollTop = contents.scrollHeight;
}

clear.addEventListener("click", () => {
  contents.textContent = "";
  lines = 0;
});
```

#### 結果

{{EmbedLiveSample("Mouse events", 0, 250)}}

### キーボードイベントと入力イベント

この例では、{{domxref("Element.keydown_event", "keydown")}}、{{domxref("Element.beforeinput_event", "beforeinput")}}、{{domxref("Element.input_event", "input")}} のイベントをログ出力します。テキストエリアに入力してみてください。 <kbd>Shift</kbd> などのキーでは `keydown` イベントが発生しますが、 `input` イベントは発生しないことに注意してください。

#### HTML

```html
<textarea id="story" rows="5" cols="33"></textarea>

<div id="log">
  <pre id="contents"></pre>
  <button id="clear">Clear log</button>
</div>
```

#### CSS

```css
body {
  display: flex;
  gap: 1rem;
}

#story {
  padding: 0.5rem;
}

#contents {
  height: 150px;
  width: 250px;
  border: 1px solid black;
  padding: 0.5rem;
  overflow: scroll;
}
```

#### JavaScript

```js
const story = document.querySelector("#story");
const contents = document.querySelector("#contents");
const clear = document.querySelector("#clear");
let lines = 0;

story.addEventListener("keydown", (event) => {
  log(`${event.type}(${event.key})`);
});

story.addEventListener("beforeinput", (event) => {
  log(`${event.type}(${event.data})`);
});

story.addEventListener("input", (event) => {
  log(`${event.type}(${event.data})`);
});

function log(line) {
  const prefix = `${String(lines++).padStart(3, "0")}: `;
  contents.textContent = `${contents.textContent}${prefix}${line}\n`;
  contents.scrollTop = contents.scrollHeight;
}

clear.addEventListener("click", () => {
  contents.textContent = "";
  lines = 0;
});
```

#### 結果

{{EmbedLiveSample("Keyboard and input events", 0, 250)}}

## 仕様書

{{Specifications}}

## 関連情報

- [ポインターイベント API](/ja/docs/Web/API/Pointer_events)
- [タッチイベント](/ja/docs/Web/API/Touch_events)
