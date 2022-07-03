---
title: 'HTMLElement: transitionstart イベント'
slug: Web/API/HTMLElement/transitionstart_event
tags:
  - CSS トランジション
  - イベント
  - HTML DOM
  - HTMLElement
  - リファレンス
  - TransitionEvent
  - transitionstart
browser-compat: api.HTMLElement.transitionstart_event
translation_of: Web/API/HTMLElement/transitionstart_event
---
{{APIRef}}{{SeeCompatTable}}

**`transitionstart`** イベントは、 [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)が実際に開始されたとき、すなわち、{{cssxref("transition-delay")}} が終了したときに発生します。

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
        {{domxref("GlobalEventHandlers/ontransitionstart", "ontransitionstart")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

このコードでは `transitionstart` イベントのリスナーを追加します。

```js
element.addEventListener('transitionstart', () => {
  console.log('トランジション開始');
});
```

似ていますが、 [`ontransitionstart`](/ja/docs/Web/API/GlobalEventHandlers/ontransitionstart) プロパティを `addEventListener()` の代わりに使用したものです。

```js
element.ontransitionstart = () => {
  console.log('トランジション開始');
};
```

### ライブデモ

以下の例では、単純な {{htmlelement("div")}} 要素を用い、遅延を含むトランジションでスタイル付けしています。

```html
<div class="transition">ポインターを当ててください</div>
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

このために、 {{domxref("HTMLElement/transitionstart_event", "transitionstart")}} および {{domxref("HTMLElement/transitionrun_event", "transitionrun")}} イベントが発生する場所を示す JavaScript を追加します。

```js
const transition = document.querySelector('.transition');
const message = document.querySelector('.message');

transition.addEventListener('transitionrun', function() {
  message.textContent = 'transitionrun が発生';
});

transition.addEventListener('transitionstart', function() {
  message.textContent = 'transitionstart が発生';
});

transition.addEventListener('transitionend', function() {
  message.textContent = 'transitionend が発生';
});
```

{{ EmbedLiveSample('Examples', '100%', '150px') }}

相違点は以下のとおりです。

- transitionrun は、トランジションが生成されるときに発生します （つまり、遅延時間の始め）。
- transitionstart は実際にアニメーションが始まるときに発生します（つまり、あらゆる遅延時間の終わり）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("GlobalEventHandlers.ontransitionstart")}} イベントハンドラー
- {{domxref("TransitionEvent")}} インターフェイス
- CSS プロパティ: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- 関連イベント: {{domxref("HTMLElement/transitionend_event", "transitionend")}}, {{domxref("HTMLElement/transitionrun_event", "transitionrun")}}, {{domxref("HTMLElement/transitioncancel_event", "transitioncancel")}}
- {{domxref("Document")}} をターゲットとしたこのイベント: {{domxref("Document/transitionstart_event", "transitionstart")}}
- {{domxref("Window")}} をターゲットとしたこのイベント: {{domxref("Window/transitionstart_event", "transitionstart")}}
