---
title: 'HTMLElement: transitioncancel イベント'
slug: >-
  conflicting/Web/API/Element/transitioncancel_event_889a917200575d302e6d0ef27f28732d
tags:
  - CSS Transitions
  - イベント
  - HTML DOM
  - HTMLElement
  - リファレンス
  - TransitionEvent
  - transitioncancel
translation_of: Web/API/HTMLElement/transitioncancel_event
original_slug: Web/API/HTMLElement/transitioncancel_event
browser-compat: api.HTMLElement.transitioncancel_event
---
{{APIRef}}{{SeeCompatTable}}

**`transitioncancel`** イベントは、 [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)がキャンセルされたときに発生します。

詳しくは {{domxref("GlobalEventHandlers.ontransitioncancel")}} をご覧ください。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("TransitionEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers.ontransitioncancel")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

このコードは、トランジションが定義され、 `transitioncancel` イベントにリスナーを追加した要素を取得します。

```js
const transition = document.querySelector('.transition');

transition.addEventListener('transitioncancel', () => {
  console.log('トランジションがキャンセルされました');
});
```

同様に、 {{domxref("GlobalEventHandlers.ontransitioncancel", "ontransitioncancel")}} プロパティを `addEventListener()` の代わりに使用すると以下のようになります。

```js
const transition = document.querySelector('.transition');

transition.ontransitioncancel = () => {
  console.log('トランジションがキャンセルされました');
};
```

### ライブデモ

このデモででは、単純な {{htmlelement("div")}} 要素を配置し、 delay を含むトランジションをスタイル付けしています。

```html
<div class="transition"></div>
<div class="message"></div>
```

```css
.transition {
  width: 100px;
  height: 100px;
  background: rgba(255,0,0,1);
  transition-property: transform, background;
  transition-duration: 2s;
  transition-delay: 2s;
}

.transition:hover {
  transform: rotate(90deg);
  background: rgba(255,0,0,0);
}
```

このため、いくらかの JavaScript を追加して [`transitionstart`](/ja/docs/Web/API/HTMLElement/transitionstart_event), [`transitionrun`](/ja/docs/Web/API/HTMLElement/transitionrun_event), [`transitioncancel`](/ja/docs/Web/API/Window/transitioncancel_event), [`transitionend`](/ja/docs/Web/API/Window/transitionend_event) の各イベントの発生を示します。 この例では、トランジションをキャンセルするには、トランジションが終了する前に、トランジションするボックスへのホバーを停止します。トランジションの終了イベントを発生させるには、トランジションが終了するまでホバーしたままにしておきます。

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

`transitioncancel` イベントは `transitionrun` イベントが発生した後、 `transitionend` が発生する前に、どちらかの方向にトランジションがキャンセルされた場合に発生します。

トランジションの遅延や継続時間がない場合、両方が 0 であったり、どちらも宣言されていない場合は、トランジションは発生せず、トランジションイベントは何も発行されません。

`transitioncancel` イベントが発生した場合、`transitionend` イベントは発行されません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("GlobalEventHandlers.ontransitioncancel")}} イベントハンドラー
- {{domxref("TransitionEvent")}} インターフェイス
- CSS プロパティ: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- 関連イベント: {{domxref("HTMLElement/transitionrun_event", "transitionrun")}}, {{domxref("HTMLElement/transitionstart_event", "transitionstart")}}, {{domxref("HTMLElement/transitionend_event", "transitionend")}}
- {{domxref("Document")}} をターゲットとしたこのイベント: {{domxref("Document/transitioncancel_event", "transitioncancel")}}
- {{domxref("Window")}} をターゲットとしたこのイベント: {{domxref("Window/transitioncancel_event", "transitioncancel")}}
