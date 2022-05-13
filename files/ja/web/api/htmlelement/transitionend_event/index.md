---
title: 'HTMLElement: transitionend イベント'
slug: Web/API/HTMLElement/transitionend_event
tags:
  - CSS トランジション
  - イベント
  - HTML DOM
  - HTMLElement
  - リファレンス
  - TransitionEvent
  - transitionend
browser-compat: api.HTMLElement.transitionend_event
translation_of: Web/API/HTMLElement/transitionend_event
---
{{APIRef}}

**`transitionend`** イベントは、 [CSS トランジション](/ja/docs/CSS/Using_CSS_transitions)が完了したときに発生します。トランジションが完了前に削除された場合、例えば {{cssxref("transition-property")}} が削除されたり {{cssxref("display")}} が `none` に設定されたりした場合、このイベントは生成されません。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">キャンセル可能</th>
      <td>はい</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("TransitionEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers/ontransitionend", "ontransitionend")}}
      </td>
    </tr>
  </tbody>
</table>

`transitionend` イベントは、トランジションの状態への移行が終了したときと、既定またはトランジションのない状態に完全に戻ったときの両方向で発生します。トランジションの遅延や継続時間がない場合、両方が 0 である場合、またはどちらも宣言されていない場合、トランジションは行われず、トランジションイベントは何も発生しません。 `transitioncancel` イベントが発生した場合、 `transitionend` イベントは発生しません。

## 例

This code gets an element that has a transition defined and adds a listener to the `transitionend` event:

```js
const transition = document.querySelector('.transition');

transition.addEventListener('transitionend', () => {
  console.log('トランジション終了');
});
```

同様に、 {{domxref("GlobalEventHandlers/ontransitionend", "ontransitionend")}} を使用した例です。

```js
const transition = document.querySelector('.transition');

transition.ontransitionend = () => {
  console.log('トランジション終了');
};
```

### ライブデモ

このデモででは、単純な {{htmlelement("div")}} 要素を配置し、遅延を含むトランジションをスタイル付けしています。

```html
<div class="transition">ここにマウスを当ててください</div>
<div class="message"></div>
```

```css
.transition {
  width: 100px;
  height: 100px;
  background: rgba(255,0,0,1);
  transition-property: transform, background;
  transition-duration: 2s;
  transition-delay: 1s;
}

.transition:hover {
  transform: rotate(90deg);
  background: rgba(255,0,0,0);
}
```

このため、いくらかの JavaScript を追加して [`transitionstart`](/ja/docs/Web/API/HTMLElement/transitionstart_event), [`transitionrun`](/ja/docs/Web/API/HTMLElement/transitionrun_event), [`transitioncancel`](/ja/docs/Web/API/Window/transitioncancel_event), `transitionend` の各イベントの発生を示します。 この例では、トランジションをキャンセルするには、トランジションが終了する前に、トランジションするボックスへのホバーを停止します。トランジションの終了イベントを発生させるには、トランジションが終了するまでホバーしたままにしておきます。

```js
const message = document.querySelector('.message');
const el = document.querySelector('.transition');

el.addEventListener('transitionrun', function() {
  message.textContent = 'transitionrun が発生';
});

el.addEventListener('transitionstart', function() {
  message.textContent = 'transitionstart が発生';
});

el.addEventListener('transitioncancel', function() {
  message.textContent = 'transitioncancel が発生';
});

el.addEventListener('transitionend', function() {
  message.textContent = 'transitionend が発生';
});
```

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

`transitionend` イベントは、ボックスの回転が終了し、不透明度が 0 または 1 になったとき、どちらの場合も発生します。

トランジションの遅延や継続時間がない場合、両方が 0 であったり、どちらも宣言されていない場合は、トランジションは発生せず、トランジションイベントは何も発行されません。

`transitioncancel` イベントが発生した場合、`transitionend` イベントは発行されません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("GlobalEventHandlers.ontransitionend")}} イベントハンドラー
- {{domxref("TransitionEvent")}} インターフェイス
- CSS プロパティ: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- 関連イベント: {{domxref("HTMLElement/transitionrun_event", "transitionrun")}}, {{domxref("HTMLElement/transitionstart_event", "transitionstart")}}, {{domxref("HTMLElement/transitioncancel_event", "transitioncancel")}}
- {{domxref("Document")}} をターゲットとしたこのイベント: {{domxref("Document/transitionend_event", "transitionend")}}
- {{domxref("Window")}} をターゲットとしたこのイベント: {{domxref("Window/transitionend_event", "transitionend")}}
