---
title: 'Document: transitionrun イベント'
slug: Web/API/Element/transitionrun_event
original_slug: Web/API/Document/transitionrun_event
---

{{APIRef}}{{SeeCompatTable}}

**`transitionrun`** イベントは、 [CSS トランジション](/ja/docs/CSS/Using_CSS_transitions)が最初に生成されたとき、すなわち {{cssxref("transition-delay")}} が始まる前に発生します。

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
        {{domxref("GlobalEventHandlers/ontransitionrun", "ontransitionrun")}}
      </td>
    </tr>
  </tbody>
</table>

このイベントの本来の対象は、トランジションが適用された {{domxref("Element")}} です。このイベントを {{domxref("Document")}} インターフェイス上で待ち受けし、キャプチャやバブリングの局面で処理することができます。このイベントについて完全な詳細は、 [HTMLElement: transitionrun イベント](/ja/docs/Web/API/HTMLElement/transitionrun_event)を参照してください。

## 例

次のコードは `transitionrun` イベントにリスナーを追加します。

```js
document.addEventListener('transitionrun', () => {
  console.log('Transition is running but hasn't necessarily started transitioning yet');
});
```

同じですが、 {{domxref("GlobalEventHandlers/ontransitionrun", "ontransitionrun")}} を `addEventListener()` の代わりに使用すると次のようになります。

```js
document.ontransitionrun = () => {
  console.log('Transition started running');
};
```

[このイベントのライブデモを参照してください。](/ja/docs/Web/API/HTMLElement/transitionrun_event#Live_example)

## 仕様書

| 仕様書                                                                                   | 状態                                     | 備考     |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | -------- |
| {{SpecName('CSS3 Transitions', '#transitionrun', 'transitionrun')}} | {{Spec2('CSS3 Transitions')}} | 初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("GlobalEventHandlers.ontransitionrun")}} イベントハンドラー
- {{domxref("TransitionEvent")}} インターフェイス
- CSS プロパティ: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- 関連イベント: {{domxref("Document/transitionend_event", "transitionend")}}, {{domxref("Document/transitionstart_event", "transitionstart")}}, {{domxref("Document/transitioncancel_event", "transitioncancel")}}
- {{domxref("HTMLElement")}} を対象としたこのイベント: {{domxref("HTMLElement/transitionrun_event", "transitionrun")}}
- {{domxref("Window")}} を対象としたこのイベント: {{domxref("Window/transitionstart_run", "transitionrun")}}
