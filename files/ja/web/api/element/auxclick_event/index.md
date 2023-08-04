---
title: "Element: auxclick イベント"
short-title: auxclick
slug: Web/API/Element/auxclick_event
l10n:
  sourceCommit: 757f33efcbdf2de4995920e41ab7dd20f0a9192b
---

{{APIRef}}

**`auxclick`** イベントは、ポインティングデバイスの第 1 ボタン以外のボタン（マウスの第 1 の—通常は左端の—ボタン）が同じ要素（{{domxref("Element")}}）内で押されて離されたとき、その要素で発行されます。

`auxclick` は、{{domxref("Element/mousedown_event", "mousedown")}} および {{domxref("Element/mouseup_event", "mouseup")}} イベントが発生した後に、順に発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("auxclick", (event) => {});

onauxclick = (event) => {};
```

## イベント型

{{domxref("MouseEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("MouseEvent")}}

## イベントプロパティ

_親である {{domxref("UIEvent")}} および {{domxref("Event")}} から継承したプロパティもあります_。

- {{domxref("MouseEvent.altKey")}} {{ReadOnlyInline}}
  - : このマウスイベントが発行されたときに <kbd>alt</kbd> キーが押されていた場合は `true` を返します。
- {{domxref("MouseEvent.button")}} {{ReadOnlyInline}}
  - : このマウスイベントが発行されたときに押されていたボタンの番号です（もしあれば）。
- {{domxref("MouseEvent.buttons")}} {{ReadOnlyInline}}
  - : このマウスイベントが発行されたときに押されていたボタンです（もしあれば）。
- {{domxref("MouseEvent.clientX")}} {{ReadOnlyInline}}
  - : マウスポインターのローカル座標（DOM コンテンツ）における X 座標です。
- {{domxref("MouseEvent.clientY")}} {{ReadOnlyInline}}
  - : マウスポインターのローカル座標（DOM コンテンツ）における Y 座標です。
- {{domxref("MouseEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : このマウスイベントが発行されたときに <kbd>control</kbd> キーが押されていた場合は `true` を返します。
- {{domxref("MouseEvent.layerX")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : このイベントの現在のレイヤーにおける相対の水平座標を返します。
- {{domxref("MouseEvent.layerY")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : このイベントの現在のレイヤーにおける相対の垂直座標を返します。
- {{domxref("MouseEvent.metaKey")}} {{ReadOnlyInline}}
  - : このマウスイベントが発行されたときに <kbd>meta</kbd> キーが押されていた場合は `true` を返します。
- {{domxref("MouseEvent.movementX")}} {{ReadOnlyInline}}
  - : 前回の {{domxref("Element/mousemove_event", "mousemove")}} イベントの位置から相対的なマウスポインターの X 座標です。
- {{domxref("MouseEvent.movementY")}} {{ReadOnlyInline}}
  - : 前回の {{domxref("Element/mousemove_event", "mousemove")}} イベントの位置から相対的なマウスポインターの Y 座標です。
- {{domxref("MouseEvent.offsetX")}} {{ReadOnlyInline}}
  - : 対象ノードのパディング辺からの相対的なマウスポインターの X 座標です。
- {{domxref("MouseEvent.offsetY")}} {{ReadOnlyInline}}
  - : 対象ノードのパディング辺からの相対的なマウスポインターの Y 座標です。
- {{domxref("MouseEvent.pageX")}} {{ReadOnlyInline}}
  - : 文書全体からの相対的なマウスポインターの X 座標です。
- {{domxref("MouseEvent.pageY")}} {{ReadOnlyInline}}
  - : 文書全体からの相対的なマウスポインターの Y 座標です。
- {{domxref("MouseEvent.relatedTarget")}} {{ReadOnlyInline}}
  - : もしあれば、イベントの副ターゲットです。
- {{domxref("MouseEvent.screenX")}} {{ReadOnlyInline}}
  - : グローバル（画面）座標におけるマウスポインターの X 座標です。
- {{domxref("MouseEvent.screenY")}} {{ReadOnlyInline}}
  - : グローバル（画面）座標におけるマウスポインターの Y 座標です。
- {{domxref("MouseEvent.shiftKey")}} {{ReadOnlyInline}}
  - : このマウスイベントが発行されたときに <kbd>shift</kbd> キーが押されていた場合は `true` を返します。
- {{domxref("MouseEvent.mozInputSource")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : イベントを発生させた機器の種類（`MOZ_SOURCE_*` 定数のいずれか）。
    これにより、例えばマウスイベントが実際のマウスによって生成されたのか、タッチイベントによって生成されたのかを判断することができます（これはイベントに関連付けられた座標を解釈する精度に影響するかもしれません）。
- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : クリックしたときに適用された圧力です。
- {{domxref("MouseEvent.x")}} {{ReadOnlyInline}}
  - : {{domxref("MouseEvent.clientX")}} の別名です。
- {{domxref("MouseEvent.y")}} {{ReadOnlyInline}}
  - : {{domxref("MouseEvent.clientY")}} の別名です。

## 既定のアクションの抑止

大多数のブラウザーでは、中央クリックを新しいタブでリンクを開く機能に割り当てていますが、{{domxref("Event.preventDefault()", "preventDefault()")}} を `auxclick` イベントハンドラー内で呼び出すことで、この動作を取り消すことができます。

入力やナビゲーションに対応していない要素で発生した `auxclick` イベントを待ち受ける場合、マウスの中ボタンのダウンアクションにマッピングされた他の既定のアクションを明示的に防止したい場合がよくあります。Windows では自動スクロール、macOS や Linux ではクリップボードの貼り付けなどがこれにあたります。これは、{{domxref("Element/mousedown_event", "mousedown")}} イベントや {{domxref("Element/pointerdown_event", "pointerdown")}} イベントの既定の動作を防ぐことで実現できます。

さらに、右クリックの後にシステムコンテキストメニューを開かなくする必要がある場合もあります。オペレーティングシステムのタイミングの違いにより、これも `auxclick` の既定のの動作では防ぐことができません。代わりに、{{domxref("Element/contextmenu_event", "contextmenu")}} イベントの既定の動作を防止することで実現できます。

## 例

この例では、 {{domxref("Element.click_event", "onclick")}} と `onauxclick` という 2 つのイベントハンドラー関数を定義しています。前者はボタンの背景色を変更し、後者はボタンの前景（テキスト）の色を変更します。また、このデモを多ボタンマウスで試すことで、2 つの関数が動作する様子を見ることができます（[GitHub でライブで見る](https://mdn.github.io/dom-examples/auxclick/)ことができ、[ソースコードを見る](https://github.com/mdn/dom-examples/blob/main/auxclick/index.html)こともできます）。

### JavaScript

```js
let button = document.querySelector("button");
let html = document.querySelector("html");

function random(number) {
  return Math.floor(Math.random() * number);
}

function randomColor() {
  return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

button.onclick = () => {
  button.style.backgroundColor = randomColor();
};

button.onauxclick = (e) => {
  e.preventDefault();
  button.style.color = randomColor();
};

button.oncontextmenu = (e) => {
  e.preventDefault();
};
```

`auxclick` イベントを `onauxclick` でキャプチャするだけでなく、 {{domxref("Element.contextmenu_event", "contextmenu")}} イベントもキャプチャし、そのイベントで {{domxref("Event.preventDefault", "preventDefault()")}} を呼び出して、色の変更が適用された後にコンテキストメニューがポップアップするのを防いでいることに注目してください。

### HTML

```html
<button><h1>Click me!</h1></button>
```

```css hidden
html {
  height: 100%;
  overflow: hidden;
}

body {
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

button {
  border: 0;
  background-color: white;
  font-size: 8vw;
  display: block;
  width: 100%;
  height: 100%;
}

h1 {
  letter-spacing: 0.5rem;
}
```

{{EmbedLiveSample("Examples", 640, 300)}}

> **メモ:** 3 ボタンマウスを使用している場合、左以外のボタンがクリックされると、`onauxclick` ハンドラーが実行されることがわかります（通常、ゲーミングマウスの「特殊」ボタンも含みます）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [イベントの紹介](/ja/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/pointerdown_event", "pointerdown")}}
- {{domxref("Element/pointerup_event", "pointerup")}}
