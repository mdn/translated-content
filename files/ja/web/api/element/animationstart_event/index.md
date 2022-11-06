---
title: 'Document: animationstart イベント'
slug: Web/API/Element/animationstart_event
original_slug: Web/API/Document/animationstart_event
---

{{APIRef}}

**`animationstart`** イベントは、 [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)が開始したときに発生します。 {{cssxref("animation-delay")}} がある場合、このイベントは待ち時間が経過したときに一度発生します。待ち時間が負の数の場合、イベントは {{domxref("AnimationEvent/elapsedTime", "elapsedTime")}} が待ち時間の絶対値と等しくなったときに発生します (および、関連して、アニメーションはシーケンスの中でそのタイムインデックスに再生が始まります)。

<table class="properties">
  <tbody>
    <tr>
      <th>バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th>キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th>インターフェイス</th>
      <td>{{domxref("AnimationEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers/onanimationstart","onanimationstart")}}
      </td>
    </tr>
  </tbody>
</table>

このイベントの本来の対象は、トランジションが適用された {{domxref("Element")}} です。このイベントを {{domxref("Document")}} インターフェイス上で待ち受けし、キャプチャやバブリングの局面で処理することができます。このイベントについて完全な詳細は、 [HTMLElement: animationstart イベント](/ja/docs/Web/API/HTMLElement/animationstart_event)を参照してください。

## 例

このコードは `animationstart` イベントを待ち受けし、イベント発生時にメッセージを記録します。

```js
document.addEventListener('animationstart', () => {
  console.log('Animation started');
});
```

同様に、 `onanimationstart` を使用するとこうなります。

```js
document.onanimationstart = () => {
  console.log('Animation started');
};
```

[このイベントのライブデモを参照してください。](/ja/docs/Web/API/HTMLElement/animationstart_event#Live_example)

## 仕様書

| 仕様書                                                                                               | 状態                                 | 備考     |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName("CSS3 Animations", "#eventdef-animationevent-animationstart")}} | {{Spec2("CSS3 Animations")}} | 初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)
- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- {{domxref("AnimationEvent")}}
- 関連イベント: {{domxref("Document/animationend_event", "animationend")}}, {{domxref("Document/animationiteration_event", "animationiteration")}}, {{domxref("Document/animationcancel_event", "animationcancel")}}
- {{domxref("Window")}} を対象としたこのイベント: {{domxref("Window/animationstart_event", "animationstart")}}
- {{domxref("HTMLElement")}} を対象としたこのイベント: {{domxref("HTMLElement/animationstart_event", "animationstart")}}
