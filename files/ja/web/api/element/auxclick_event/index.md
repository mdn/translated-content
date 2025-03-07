---
title: "Element: auxclick イベント"
short-title: auxclick
slug: Web/API/Element/auxclick_event
l10n:
  sourceCommit: ab65140829d7c4df540fd859c0a97a78b3b1fd33
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

{{domxref("PointerEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> この仕様書の初期のバージョンでは、このイベントのイベント型は {{domxref("MouseEvent")}} でした。詳しくは[ブラウザーの互換性](#ブラウザーの互換性)をご覧ください。

## イベントプロパティ

_このインターフェイスは、{{domxref("MouseEvent")}} および {{domxref("Event")}} からプロパティを継承しています。_

- {{domxref('PointerEvent.altitudeAngle')}} {{ReadOnlyInline}}
  - : トランスデューサー（ポインターまたはスタイラス）の軸と機器の画面の X-Y 平面のなす角度を表します。
- {{domxref('PointerEvent.azimuthAngle')}} {{ReadOnlyInline}}
  - : Y-Z 平面と、トランスデューサー（ポインターまたはスタイラス）の軸と Y 軸の両方を格納する平面との間の角度を表します。
- {{domxref('PointerEvent.persistentDeviceId')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : `PointerEvent` を生成するポインティングデバイス用の固有の識別子。
- {{domxref('PointerEvent.pointerId')}} {{ReadOnlyInline}}
  - : イベントの原因となっているポインターの一意の識別子。
- {{domxref('PointerEvent.width')}} {{ReadOnlyInline}}
  - : ポインターの接触形状の幅（X 軸上の大きさ、CSS ピクセル単位）。
- {{domxref('PointerEvent.height')}} {{ReadOnlyInline}}
  - : ポインターの接触形状の高さ（Y 軸上の大きさ、CSS ピクセル単位）。
- {{domxref('PointerEvent.pressure')}} {{ReadOnlyInline}}
  - : 0 から 1 の範囲のポインター入力の正規化された圧力。 ここで、0 と 1 は、それぞれハードウェアが検出できる最小圧力と最大圧力を表します。
- {{domxref('PointerEvent.tangentialPressure')}} {{ReadOnlyInline}}
  - : ポインター入力の正規化された接線圧力（バレル圧力またはシリンダー応力（[cylinder stress](https://en.wikipedia.org/wiki/Cylinder_stress)）とも呼ばれます）は `-1` から `1` の範囲で、 `0` はコントロールの中立位置です。
- {{domxref('PointerEvent.tiltX')}} {{ReadOnlyInline}}
  - : Y-Z 平面と、ポインター（ペン/スタイラスなど）軸と Y 軸の両方を含む平面との間の平面角度（度単位、`-90` から `90` の範囲）。
- {{domxref('PointerEvent.tiltY')}} {{ReadOnlyInline}}
  - : X-Z 平面と、ポインター（ペン/スタイラスなど）軸と X 軸の両方を含む平面との間の平面角度（度単位、`-90` から `90` の範囲）。
- {{domxref('PointerEvent.twist')}} {{ReadOnlyInline}}
  - : ポインター（ペン/スタイラスなど）の長軸を中心とした時計回りの回転の度数（`0` から `359` の範囲の値）。
- {{domxref('PointerEvent.pointerType')}} {{ReadOnlyInline}}
  - : イベントの原因となった機器の種類（マウス、ペン、タッチなど）を示します。
- {{domxref('PointerEvent.isPrimary')}} {{ReadOnlyInline}}
  - : ポインターがこのポインターの種類の主ポインターを表しているかどうかを示します。

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
  return `rgb(${random(255)} ${random(255)} ${random(255)})`;
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

> [!NOTE]
> 3 ボタンマウスを使用している場合、左以外のボタンがクリックされると、`onauxclick` ハンドラーが実行されることがわかります（通常、ゲーミングマウスの「特殊」ボタンも含みます）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [学習: イベント入門](/ja/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/pointerdown_event", "pointerdown")}}
- {{domxref("Element/pointerup_event", "pointerup")}}
