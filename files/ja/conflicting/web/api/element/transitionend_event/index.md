---
title: GlobalEventHandlers.ontransitionend
slug: conflicting/Web/API/Element/transitionend_event
tags:
  - API
  - CSS Transitions
  - CSS3 Transitions
  - Document
  - Element
  - Event Handler
  - GlobalEventHandlers
  - Property
  - Reference
  - Window
  - ontransitionend
translation_of: Web/API/GlobalEventHandlers/ontransitionend
original_slug: Web/API/GlobalEventHandlers/ontransitionend
---
{{APIRef("CSS3 Transitions")}}

**`ontransitionend`** は {{domxref("GlobalEventHandlers")}} ミックスインのプロパティで、 {{event("transitionend")}} イベントを処理するイベントハンドラー ({{event("Event_handlers", "event handler")}}) です。

`transitionend` イベントは、 [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions)が完了すると発生します。

> **Note:** トランジションの実行が完了する前に対象ノードからトランジションが削除された場合、 {{event("transitionend")}} イベントは生成されません。これは、対象に適用される {{cssxref("transition-property")}} 属性の値を変更することで発生します。もう一つは、 {{cssxref("display")}} 属性が `none` に設定されている場合です。

## 構文

    var transitionEndHandler = target.ontransitionend;

    target.ontransitionend = {{jsxref("Function")}}

### 値

関数 ({{jsxref("Function")}}) で、 CSS トランジションの完了を示す {{event("transitionend")}} イベントが `target` 上で発生した場合に呼び出されるものです。対象となるオブジェクトは HTML 要素 ({{domxref("HTMLElement")}})、文書 ({{domxref("Document")}})、ウィンドウ ({{domxref("Window")}}) です。この関数は単一の引数、発生したイベントを記述する {{domxref("TransitionEvent")}} を単一の引数として受け取ります。イベントの {{domxref("TransitionEvent.elapsedTime")}} プロパティの値は、 {{cssxref("transition-duration")}} の値と同じでなければなりません。

> **Note:** `elapsedTime` には、トランジション効果が始まる前の時間は含まれていません。つまり、 {{cssxref("transition-delay")}} の値は、待ち時間が終了してアニメーションが始まるまでは 0 である `elapsedTime` の値に影響しません。

## 例

この例では、{{event("transitionrun")}} イベントと {{event("transitionend")}} イベントを使用して、トランジションの開始と終了を検出し、トランジション中にテキスト更新が発生するようにしています。これは、アニメーションやその他のエフェクトを起動して、反応を連鎖させるために使用することもできます。

### HTML

これは単純に {{HTMLElement("div")}} を作成するだけで、以下の CSS でスタイルを変更して、ボックスの大きさを変更したり色を変更したりします。

```html
<div class="box"></div>
```

### CSS

以下の CSS は、ボックスのスタイルを設定し、ボックスの色と大きさを変化させ、マウスカーソルがボックスの上に乗っている間にボックスが回転するようなトランジション効果を適用しています。

```css
.box {
  margin-left: 70px;
  margin-top: 30px;
  border-style: solid;
  border-width: 1px;
  display: block;
  width: 100px;
  height: 100px;
  background-color: #0000FF;
  color: #FFFFFF;
  padding: 20px;
  font: bold 1.6em "Helvetica", "Arial", sans-serif;
  transition: width 2s, height 2s, background-color 2s, transform 2s, color 2s;
}

.box:hover {
  background-color: #FFCCCC;
  color: #000000;
  width: 200px;
  height: 200px;
  transform: rotate(180deg);
}
```

### JavaScript

次に、トランジションの開始時と終了時にボックスのテキストコンテンツを変更するためにイベントハンドラ－を設定します。

```js
let box = document.querySelector(".box");
box.ontransitionrun = function(event) {
  box.innerHTML = "Zooming...";
}
box.ontransitionend = function(event) {
  box.innerHTML = "Done!";
}
```

### 結果

結果のコンテンツは次のようになります。

{{EmbedLiveSample('Example', 600, 280)}}

マウスカーソルをボックスの上に置いてから、マウスを移動させるとどうなるかに注目してください。

## 仕様書

| 仕様書                                                                                                                       | 状態                                     | 備考 |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---- |
| {{SpecName('CSS3 Transitions','#dom-globaleventhandlers-ontransitionend','ontransitionend')}} | {{Spec2('CSS3 Transitions')}} |      |

## ブラウザーの互換性

{{Compat("api.GlobalEventHandlers.ontransitionend")}}

## 関連情報

- このハンドラーを起動する {{event("transitionend")}} イベント
- {{domxref("TransitionEvent")}}
- トランジションが開始したときに発生する {{event("transitionrun")}} イベント
