---
title: "Window: error イベント"
short-title: error
slug: Web/API/Window/error_event
l10n:
  sourceCommit: 8d03307af2cee96a307c22b5d52b93f155f11524
---

{{APIRef}}

`error` イベントは、リソースの読み取りに失敗したり、使用できなかったりした場合 — 例えば、スクリプトに実行エラーがあった場合に {{domxref("Window")}} オブジェクトに発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("error", (event) => {});

onerror = (event, source, lineno, colno, error) => {};
```

> [!NOTE]
> 歴史的な理由により、 `window` の `onerror` はイベントハンドラープロパティの中で唯一、複数の引数を受け取ります。

## イベント型

イベントオブジェクトは、ユーザーインターフェイス要素から生成された場合は {{domxref("ErrorEvent")}} インスタンスであり、そうでない場合は {{domxref("Event")}} インスタンスです。

{{InheritanceDiagram("ErrorEvent")}}

## 使用上の注意

### イベントハンドラープロパティ

歴史的な理由から、 `onerror` イベントハンドラープロパティは `Window` オブジェクトに対してのみ、他のイベントハンドラープロパティとは異なる動作をします。

これは `onerror` に割り当てられたハンドラーにのみ適用され、 `addEventListener()` を使用して追加したハンドラーには適用されないことに注意してください。

#### キャンセル

イベントハンドラープロパティに割り当てられたほとんどのイベントハンドラーでは、ハンドラーから `false` を返すことで、イベントの既定値の動作を取り消すことができます。

```js
textarea.onkeydown = () => false;
```

しかし、 `Window` の `error` イベントの既定の動作をイベントハンドラープロパティから取り消すためには、代わりに `true` を返す必要があります。

```js
window.onerror = () => true;
```

取り消された場合、エラーはコンソールに現れませんが、現在のスクリプトの実行は停止します。

#### 引数

イベントハンドラーのシグネチャは `addEventListener()` と `onerror` で異なります。 `Window.addEventListener()` に渡されるイベントハンドラーは、単一の {{domxref("ErrorEvent")}} オブジェクトを受け取りますが、 `onerror` ハンドラーは {{domxref("ErrorEvent")}} オブジェクトのプロパティと一致する 5 つの引数を受け取ります：

- `event`
  - : 文字列で、関数を説明する人間が読むのに適したエラーメッセージが入ります。 {{domxref("ErrorEvent.message")}} と同じです。
- `source`
  - : 文字列で、エラーが発生したスクリプトファイルの名前が入ります。
- `lineno`
  - : 整数で、エラーが発生したスクリプトファイルの行番号が入ります。
- `colno`
  - : 整数で、エラーが発生したスクリプトファイルの列番号が入ります。
- `error`
  - : 発生したエラーです。ふつうは {{jsxref("Error")}} オブジェクトです。

```js
window.onerror = (a, b, c, d, e) => {
  console.log(`message: ${a}`);
  console.log(`source: ${b}`);
  console.log(`lineno: ${c}`);
  console.log(`colno: ${d}`);
  console.log(`error: ${e}`);

  return true;
};
```

> [!NOTE]
> これらの引数名は [HTML イベントハンドラー属性](/ja/docs/Web/HTML/Attributes#event_handler_attributes)で監視可能で、最初の引数は `message` ではなく `event` と呼ばれます。

この特別な動作は `window` の `onerror` イベントハンドラーに対してのみ起こります。 [`Element.onerror`](/ja/docs/Web/API/HTMLElement/error_event) ハンドラーの場合は単一の {{domxref("ErrorEvent")}} オブジェクトを受け取ります。

## 例

### ライブデモ

#### HTML

```html
<div class="controls">
  <button id="script-error" type="button">Generate script error</button>
  <img class="bad-img" />
</div>

<div class="event-log">
  <label for="eventLog">Event log:</label>
  <textarea
    readonly
    class="event-log-contents"
    rows="8"
    cols="30"
    id="eventLog"></textarea>
</div>
```

```css hidden
body {
  display: grid;
  grid-template-areas: "control log";
}

.controls {
  grid-area: control;
  display: flex;
  align-items: center;
  justify-content: center;
}

.event-log {
  grid-area: log;
}

.event-log-contents {
  resize: none;
}

label,
button {
  display: block;
}

button {
  height: 2rem;
  margin: 0.5rem;
}

img {
  width: 0;
  height: 0;
}
```

#### JS

```js
const log = document.querySelector(".event-log-contents");

window.addEventListener("error", (event) => {
  log.textContent = `${log.textContent}${event.type}: ${event.message}\n`;
  console.log(event);
});

const scriptError = document.querySelector("#script-error");
scriptError.addEventListener("click", () => {
  const badCode = "const s;";
  eval(badCode);
});
```

#### 結果

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Element` を対象としたこのイベント: {{domxref("HTMLElement/error_event", "error")}} イベント
