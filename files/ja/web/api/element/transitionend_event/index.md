---
title: 'Document: transitionend イベント'
slug: Web/API/Element/transitionend_event
original_slug: Web/API/Document/transitionend_event
---

{{APIRef}}

**`transitionend`** イベントは、 [CSS トランジション](/ja/docs/CSS/Using_CSS_transitions)が完了したときに発生します。トランジションが完了前に削除された場合、例えば {{cssxref("transition-property")}} が削除されたり、 {{cssxref("display")}} が `none` に設定されたりした場合、イベントは生成されません。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>可</td>
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

`transitionend` イベントは二つの方向で発生します。 - トランジション終了の状態まで遷移し終わったときと、既定またはトランジションがない状態まで完全に戻ったときです。トランジションに待ち時間や実行時間がない場合、両方が 0 秒またはどちらも宣言されていなかった場合、トランジションは発生せず、トランジションイベントは発生しません。 `transitioncancel` イベントが発生すると、 `transitionend` イベントは発生しません。

このイベントの本来の対象は、トランジションが適用された {{domxref("Element")}} です。このイベントを {{domxref("Document")}} インターフェイス上で待ち受けし、キャプチャやバブリングの局面で処理することができます。このイベントについて完全な詳細は、 [HTMLElement: transitionend イベント](/ja/docs/Web/API/HTMLElement/transitionend_event)を参照してください。

## 例

このコードはリスナーに `transitionend` イベントを追加します。

```js
document.addEventListener('transitionend', () => {
  console.log('Transition ended');
});
```

同様に、 {{domxref("GlobalEventHandlers/ontransitioncancel", "ontransitionend")}} プロパティを `addEventListener()` の代わりに使用した例です。

```js
document.ontransitionend = () => {
  console.log('Transition ended');
};
```

[このイベントのライブデモを参照してください。](/ja/docs/Web/API/HTMLElement/transitionend_event#Live_example)

## 仕様書

| 仕様書                                                                                   | 状態                                     | 備考     |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | -------- |
| {{SpecName("CSS3 Transitions", "#transitionend", "transitionend")}} | {{Spec2('CSS3 Transitions')}} | 初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("GlobalEventHandlers.ontransitionend")}} イベントハンドラー
- {{domxref("TransitionEvent")}} インターフェイス
- CSS プロパティ: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- 関連イベント: {{domxref("Document/transitionrun_event", "transitionrun")}}, {{domxref("Document/transitionstart_event", "transitionstart")}}, {{domxref("Document/transitioncancel_event", "transitioncancel")}}
- {{domxref("HTMLElement")}} を対象としたこのイベント: {{domxref("HTMLElement/transitionend_event", "transitionend")}}
- {{domxref("Window")}} を対象としたこのイベント: {{domxref("Window/transitionend_event", "transitionend")}}
