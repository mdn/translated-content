---
title: 'Document: transitionstart イベント'
slug: Web/API/Element/transitionstart_event
original_slug: Web/API/Document/transitionstart_event
---

{{APIRef}}{{SeeCompatTable}}

**`transitionstart`** イベントは、 [CSS トランジション](/ja/docs/CSS/Using_CSS_transitions)が実際に始まったとき、すなわち {{cssxref("transition-delay")}} が終了した後に発生します。

`transitionstart` と `transitionrun` の違いは、 `transitionrun` がトランジションが生成されたとき (すなわち、待ち時間の開始) に発生するのに対し、 `transitionstart` は実際にアニメーションが始まったとき (すなわち、待ち時間の終了) に発生することです。

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
        {{domxref("GlobalEventHandlers.ontransitionstart")}}
      </td>
    </tr>
  </tbody>
</table>

このイベントの本来の対象は、トランジションが適用された {{domxref("Element")}} です。このイベントを {{domxref("Document")}} インターフェイス上で待ち受けし、キャプチャやバブリングの局面で処理することができます。このイベントについて完全な詳細は、 [HTMLElement: transitionstart イベント](/ja/docs/Web/API/HTMLElement/transitionstart_event)を参照してください。

## 例

次のコードは `transitionstart` イベントにリスナーを追加します。

```js
document.addEventListener('transitionrun', () => {
  console.log('Transition is running but hasn't necessarily started transitioning yet');
});
```

同じですが、 {{domxref("GlobalEventHandlers/ontransitionstart", "ontransitionstart")}} を `addEventListener()` の代わりに使用すると次のようになります。

```js
document.ontransitionrun = () => {
  console.log('Transition started running');
};
```

[このイベントのライブデモを参照してください。](/ja/docs/Web/API/HTMLElement/transitionstart_event#Live_example)

## 仕様書

| 仕様書                                                                                           | 状態                                     | 備考     |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------- |
| {{SpecName('CSS3 Transitions', '#transitionstart', 'transitionstart')}} | {{Spec2('CSS3 Transitions')}} | 初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("GlobalEventHandlers.ontransitionstart")}} イベントハンドラー
- {{domxref("TransitionEvent")}} インターフェイス
- CSS プロパティ: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- 関連イベント: {{domxref("Document/transitionend_event", "transitionend")}}, {{domxref("Document/transitionrun_event", "transitionrun")}}, {{domxref("Document/transitioncancel_event", "transitioncancel")}}
- {{domxref("HTMLElement")}} を対象としたこのイベント: {{domxref("HTMLElement/transitionstart_event", "transitionstart")}}
- {{domxref("Window")}} を対象としたこのイベント: {{domxref("Window/transitionstart_event", "transitionstart")}}
