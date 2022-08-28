---
title: 'Document: animationiteration イベント'
slug: Web/API/Element/animationiteration_event
original_slug: Web/API/Document/animationiteration_event
---
{{APIRef}}

**`animationiteration`** イベントは、 [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)の反復が 1 回分終了し、次の回が始まったときに発生します。このイベントは {{domxref("Document/animationend_event", "animationend")}} イベントと同時には発生せず、従って `animation-iteration-count` が 1 のアニメーションでは発生しません。

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
      <th>イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers/onanimationiteration","onanimationiteration")}}
      </td>
    </tr>
  </tbody>
</table>

このイベントの本来の対象は、トランジションが適用された {{domxref("Element")}} です。このイベントを {{domxref("Document")}} インターフェイス上で待ち受けし、キャプチャやバブリングの局面で処理することができます。このイベントについて完全な詳細は、 [HTMLElement: animationiteration イベント](/ja/docs/Web/API/HTMLElement/animationiteration_event)を参照してください。

## 例

このコードは `animationiteration` を使用して、アニメーションの反復が終了した回数を追跡します。

```js
let iterationCount = 0;

document.addEventListener('animationiteration', () => {
  iterationCount++;
  console.log(`アニメーション反復回数: ${iterationCount}`);
});
```

同様に、 `onanimationiteration` イベントハンドラープロパティを使用するとこうなります。

```js
let iterationCount = 0;

document.onanimationiteration = () => {
  iterationCount++;
  console.log(`アニメーション反復回数: ${iterationCount}`);
};
```

[このイベントのライブデモを参照してください。](/ja/docs/Web/API/HTMLElement/animationiteration_event#Live_example)

## 仕様書

| 仕様書                                                                                                   | 状態                                 | 備考     |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName("CSS3 Animations", "#eventdef-animationevent-animationiteration")}} | {{Spec2("CSS3 Animations")}} | 初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)
- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- {{domxref("AnimationEvent")}}
- 関連イベント: {{domxref("Document/animationstart_event", "animationstart")}}, {{domxref("Document/animationend_event", "animationend")}}, {{domxref("Document/animationcancel_event", "animationcancel")}}
- {{domxref("Window")}} を対象としたこのイベント: {{domxref("Window/animationiteration_event", "animationiteration")}}
- {{domxref("HTMLElement")}} を対象としたこのイベント: {{domxref("HTMLElement/animationiteration_event", "animationiteration")}}
