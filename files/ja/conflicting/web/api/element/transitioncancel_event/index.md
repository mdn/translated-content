---
title: GlobalEventHandlers.ontransitioncancel
slug: conflicting/Web/API/Element/transitioncancel_event
tags:
  - API
  - CSS Transitions
  - CSS3 Transitions
  - Event Handler
  - GlobalEventHandlers
  - Property
  - Reference
  - ontransitioncancel
translation_of: Web/API/GlobalEventHandlers/ontransitioncancel
original_slug: Web/API/GlobalEventHandlers/ontransitioncancel
---
{{APIRef("CSS3 Transitions")}}

**`ontransitioncancel`** は {{domxref("GlobalEventHandlers")}} ミックスインのプロパティで、 {{event("transitioncancel")}} イベントを処理するイベントハンドラー ({{event("Event_handlers", "event handler")}}) です。

`transitioncancel` イベントは [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions)がキャンセルされたときに送信されます。トランジションがキャンセルされるのは下記のような時です。

- 適用されている対象の {{cssxref("transition-property")}} プロパティの値が変更された時。
- {{cssxref("display")}} プロパティが `none` に変更された時。
- 完了する前に、トランジションが停止された時。例えば、マウスオーバーでトランジション中の要素をマウスアウトした時。

## 構文

    var transitionCancelHandler = target.ontransitioncancel;

    target.ontransitioncancel = {{jsxref("Function")}}

### 値

関数 ({{jsxref("Function")}}) で、 CSS トランジションがキャンセルされたことを示す {{event("transitioncancel")}} イベントが `target` 上で発生した場合に呼び出されるものです。対象となるオブジェクトは HTML 要素 ({{domxref("HTMLElement")}})、文書 ({{domxref("Document")}})、ウィンドウ ({{domxref("Window")}}) です。この関数は単一の引数、発生したイベントを記述する {{domxref("TransitionEvent")}} を単一の引数として受け取ります。イベントの {{domxref("TransitionEvent.elapsedTime")}} プロパティの値は、 {{cssxref("transition-duration")}} の値と同じでなければなりません。

> **Note:** **注**: `elapsedTime` には、トランジション効果が始まる前の時間は含まれていません。つまり、 {{cssxref("transition-delay")}} の値は、待ち時間が終了してアニメーションが始まるまでは 0 である `elapsedTime` の値に影響しません。

## 例

この例では、{{event("transitionrun")}} イベントと {{event("transitionend")}} イベントを使用して、トランジションの開始と終了を検出し、トランジション中にテキスト更新が発生するようにしています。これは、アニメーションやその他のエフェクトを起動して、反応を連鎖させるために使用することもできます。

追加で、{{event("click")}} イベントも使用しています。それで、(`display: none;`) で四角を非表示にすることで、{{event("transitioncancel")}} イベントが発行される様子を見ることができます。

### HTML

これは {{HTMLElement("div")}} だけを作成して、後は CSS で色やトランジション後のスタイルを指定します。

```html
<div class="box"></div>
```

### CSS

下記の CSS は四角にマウスオーバーする時、色やサイズを変えたり、回転させたりするようなトランジション効果を適用します。

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
  -webkit-transition: width 2s, height 2s, background-color 2s, -webkit-transform 2s, color 2s;
  transition: width 2s, height 2s, background-color 2s, transform 2s, color 2s;
}

.box:hover {
  background-color: #FFCCCC;
  color: #000000;
  width: 200px;
  height: 200px;
  -webkit-transform: rotate(180deg);
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

box.onclick = function() {
  box.style.display = 'none';
  timeout = window.setTimeout(appear, 2000);
  function appear() {
    box.style.display = 'block';
  }
}

box.ontransitioncancel = function(event) {
  console.log('transitioncancel fired after ' + event.elapsedTime + ' seconds.');
}
```

### 結果

結果のコンテンツは次のようになります。

{{EmbedLiveSample('Example', 600, 280)}}

四角にマウスオーバーやマウスアウトするときどうなるか見てください。

あと、開発ツールにある JavaScript コンソールも見て、トランジションが終わる前に四角をクリックしたりマウスアウトすると、どんなログが出るか注意してください。

## 仕様書

| 仕様書                                                                                                                               | 状態                                     | 備考 |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ---- |
| {{SpecName('CSS3 Transitions','#dom-globaleventhandlers-ontransitioncancel','ontransitioncancel')}} | {{Spec2('CSS3 Transitions')}} |      |

## ブラウザーの互換性

{{Compat("api.GlobalEventHandlers.ontransitioncancel")}}

## 関連情報

- このハンドラーを起動する {{event("transitioncancel")}} イベント
- {{domxref("TransitionEvent")}}
- トランジションが開始したときに発生する {{event("transitionrun")}} イベント
