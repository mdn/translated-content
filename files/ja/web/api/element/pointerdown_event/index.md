---
title: GlobalEventHandlers.onpointerdown
slug: Web/API/Element/pointerdown_event
original_slug: Web/API/GlobalEventHandlers/onpointerdown
---

{{APIRef("HTML DOM")}}

**`ontransitioncancel`** は {{domxref("GlobalEventHandlers")}} のイベントハンドラーで、ポインティングデバイスが最初に押されたときに発生する {{event("pointerdown")}} イベントのイベントハンドラーを指定するために使用します。このイベントは {{domxref("Window")}}, {{domxref("Document")}}, {{domxref("Element")}} の各オブジェクトに送信されることがあります。

これは、マウスまたはマウスと互換性のあるデバイスでユーザーが操作したために生成された場合の {{event("mousedown")}} イベントと機能的に同等です。 `pointerdown` イベントが {{domxref("Event.preventDefault", "preventDefault()")}} の呼び出しによってキャンセルされなかった場合、ほとんどのユーザーエージェントは `mousedown` イベントを発生させるので、ポインターイベントを使用していないサイトでも機能します。

{{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用して、 `pointerdown` イベントのリスナーを追加することもできます。

## 構文

```
target.onpointerdown = downHandler;

var downHandler = target.onpointerdown;
```

### 値

関数 ({{jsxref("Function")}}) で、 `pointerdown` イベントが`target` で指定された {{domxref("Element")}}, {{domxref("Document")}}, {{domxref("Window")}} に送られた場合に処理するためのものです。これは入力として `pointerdown` イベントを記述する {{domxref("PointerEvent")}} を受け取ります。

## 例

この例では、`onpointerdown` を使用して `pointerdown` イベントを監視し、それに基づいて行動する方法を示します。 もちろん、`addEventListener()` を使うこともできます。

#### JavaScript

まず、`pointerdown` イベントを処理する JavaScript コードを見てみましょう。

```js
var targetBox = document.getElementById("target");

targetBox.onpointerdown = handleDown;

function handleDown(evt) {
  var action;

  switch(evt.pointerType) {
    case "mouse":
      action = "clicking";
      break;
    case "pen":
      action = "tapping";
      break;
    case "touch":
      action = "touching";
      break;
    default:
      action = "interacting with";
      break;
  }

  targetBox.innerHTML = "<strong>Thanks for " + action + " me!</strong>";
  evt.preventDefault();
}
```

これは単に `pointerdown` イベントのイベントハンドラとして関数 `handleDown()` を確立するために `onpointerdown` を使います。

`handleDown()` 関数は、今度は {{domxref("PointerEvent.pointerType", "pointerType")}} の値を調べて使用されているポインティングデバイスの種類を判断し、その情報を使用して文字列をカスタマイズしてターゲットボックスの内容を置き換えます。

それから、イベントの {{domxref("Event.preventDefault", "preventDefault()")}} メソッドを呼び出して、`mousedown` イベントがトリガーされないようにします。 そうしないで、ポインターイベントのサポートが欠けている場合に備えて、それらのイベント用のハンドラを持っていると、イベントが 2 回処理される可能性があります。

{{event("pointerup")}} イベント用のハンドラーもあります。

```js
targetBox.onpointerup = handleUp;

function handleUp(evt) {
  targetBox.innerHTML = "Tap me, click me, or touch me!";
  evt.preventDefault();
}
```

このコードの役割は、ユーザーによる要素の操作が終了した後 (例えば、マウスボタンを放したとき、またはスタイラスや指を画面から離したときなど) に、元のテキストをターゲットボックスに復元することです。

さらに、`mouseup` イベントが不必要にトリガーされないようにするために、イベントの {{domxref("Event.preventDefault", "preventDefault()")}} メソッドを呼び出します。

#### HTML

HTML は次のように非常に単純です。

```html
<div id="target">
  Tap me, click me, or touch me!
</div>
```

#### CSS

CSS は単にターゲットの外観を設定するだけで、その機能にはまったく影響しません。

```css
#target {
  width: 400px;
  height: 30px;
  text-align: center;
  font: 16px "Open Sans", "Helvetica", sans-serif;
  color: white;
  background-color: blue;
  border: 2px solid darkblue;
  cursor: pointer;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
```

#### 結果

結果の出力は次の通りです。 ボックスをタップ、クリック、タッチして、何が起こるかを確認してください。 最大の効果を得るには、さまざまなポインタタイプで試してください。

{{EmbedLiveSample("Example", 450, 50)}}

## 仕様書

| 仕様書                                                                                                                   | 状態                                     | 備考     |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------- |
| {{SpecName('Pointer Events 2','#dom-globaleventhandlers-onpointerdown', 'onpointerdown')}} | {{Spec2('Pointer Events 2')}} | 不安定版 |
| {{SpecName('Pointer Events', '#widl-GlobalEventHandlers-onpointerdown', 'onpointerdown')}} | {{Spec2('Pointer Events')}}     | 初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ポインターイベント](/ja/docs/Web/API/Pointer_events)
- [ポインターイベントの使用](/ja/docs/Web/API/Pointer_events/Using_Pointer_Events)
- [座標系](/ja/docs/Web/CSS/CSSOM_View/Coordinate_systems)
- [`Document: pointerdown`](/ja/docs/Web/API/Document/pointerdown_event) イベント
- [`HTMLElement: pointerdown`](/ja/docs/Web/API/HTMLElement/pointerdown_event) イベント
