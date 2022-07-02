---
title: 'Element: auxclick イベント'
slug: Web/API/Element/auxclick_event
tags:
  - Element
  - イベント
  - MouseEvent
  - リファレンス
  - UI
  - auxclick
  - マウス
browser-compat: api.Element.auxclick_event
translation_of: Web/API/Element/auxclick_event
---
{{APIRef}}

**`auxclick`** イベントは、ポインティングデバイスの第 1 ボタン以外のボタン (マウスの第 1 の—通常は左端の—ボタン) が同じ要素 ({{domxref("Element")}}) 内で押されて離されたとき、その要素で発行されます。

`auxclick` は、{{domxref("Element/mousedown_event", "mousedown")}} および {{domxref("Element/mouseup_event", "mouseup")}} イベントが発生した後に、順に発生します。

<table class="properties">
  <tbody>
    <tr>
      <th>バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th>キャンセル</th>
      <td>可</td>
    </tr>
    <tr>
      <th>インターフェイス</th>
      <td>{{domxref("MouseEvent")}}</td>
    </tr>
    <tr>
      <th>イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers.onauxclick", "onauxclick")}}
      </td>
    </tr>
  </tbody>
</table>

## 既定のアクションの抑止

Firefox を含む大多数のブラウザーでは、中央クリックを新しいタブでリンクを開く機能にマッピングしていますが、{{domxref("Event.preventDefault()", "preventDefault()")}} を `auxclick` イベントハンドラー内で呼び出すことで、この動作を取り消すことができます。

入力やナビゲーションに対応していない要素で発生した `auxclick` イベントを待ち受ける場合、マウスの中ボタンのダウンアクションにマッピングされた他の既定のアクションを明示的に防止したい場合がよくあります。Windows では自動スクロール、macOS や Linux ではクリップボードの貼り付けなどがこれにあたります。これは、{{domxref("Element/mousedown_event", "mousedown")}} イベントや {{domxref("HTMLElement/pointerdown_event", "pointerdown")}} イベントの既定の動作を防ぐことで実現できます。

さらに、右クリックの後にシステムコンテキストメニューを開かなくする必要がある場合もあります。オペレーティングシステムのタイミングの違いにより、これも `auxclick` の既定のの動作では防ぐことができません。代わりに、{{domxref("Element/contextmenu_event", "contextmenu")}} イベントの既定の動作を防止することで実現できます。

<h2 id="Examples">例</h2>

この例では、 {{domxref("GlobalEventHandlers.onclick", "onclick")}} と {{domxref("GlobalEventHandlers.onauxclick", "onauxclick")}} という 2 つのイベントハンドラーの関数を定義しています。前者はボタンの背景色を変更し、後者はボタンの前景 (テキスト) の色を変更します。また、このデモを多ボタンマウスで試すことで、2 つの関数が動作する様子を見ることができます ([GitHubでライブで見る](https://mdn.github.io/dom-examples/auxclick/)ことができ、[ソースコードを見る](https://github.com/mdn/dom-examples/blob/master/auxclick/index.html)こともできます)。

### JavaScript

```js
let button = document.querySelector('button');
let html = document.querySelector('html');

function random(number) {
  return Math.floor(Math.random() * number);
}

function randomColor() {
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

button.onclick = function() {
  button.style.backgroundColor = randomColor();
};

button.onauxclick = function(e) {
  e.preventDefault();
  button.style.color = randomColor();
}

button.oncontextmenu = function(e) {
  e.preventDefault();
}
```

 `auxclick` イベントを {{domxref("GlobalEventHandlers.onauxclick", "onauxclick")}} でキャプチャするだけでなく、 {{domxref("Element.contextmenu_event", "contextmenu")}} イベントもキャプチャし、そのイベントで {{domxref("Event.preventDefault", "preventDefault()")}} を呼び出して、色の変更が適用された後にコンテキストメニューがポップアップするのを防いでいることに注目してください。

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

> **Note:** 3 ボタンマウスを使用している場合、左以外のボタンがクリックされると、`onauxclick` ハンドラーが実行されることがわかります (通常、ゲーミングマウスの「特殊」ボタンも含みます)。

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
- {{domxref("HTMLElement/pointerdown_event", "pointerdown")}}
- {{domxref("HTMLElement/pointerup_event", "pointerup")}}
