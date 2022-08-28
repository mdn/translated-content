---
title: 'Document: animationend イベント'
slug: Web/API/Element/animationend_event
original_slug: Web/API/Document/animationend_event
---
{{APIRef}}

**`animationend`** イベントは、 [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)が完了したときに発生します。アニメーションが完了前に中止された場合、例えば要素が DOM から削除されたりアニメーションが要素から削除されたりした場合、 `animationend` イベントは発生しません。

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
        {{domxref("GlobalEventHandlers/onanimationend","onanimationend")}}
      </td>
    </tr>
  </tbody>
</table>

このイベントの本来の対象は、トランジションが適用された {{domxref("Element")}} です。このイベントを {{domxref("Document")}} インターフェイス上で待ち受けし、キャプチャやバブリングの局面で処理することができます。このイベントについて完全な詳細は、 [HTMLElement: animationend イベント](/ja/docs/Web/API/HTMLElement/animationend_event)を参照してください。

## 例

この例は `animationend` イベントを待ち受けます。

```js
document.addEventListener('animationend', () => {
  console.log('アニメーション終了');
});
```

同様に、 `onanimationend` イベントハンドラープロパティを使用するとこうなります。

```js
document.onanimationend = () => {
  console.log('アニメーション終了');
};
```

[このイベントのライブデモを参照してください。](/ja/docs/Web/API/HTMLElement/animationend_event#Live_example)

## 仕様書

| 仕様書                                                                                           | 状態                                 | 備考     |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName("CSS3 Animations", "#eventdef-animationevent-animationend")}} | {{Spec2("CSS3 Animations")}} | 初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)
- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- {{domxref("AnimationEvent")}}
- 関連イベント: {{domxref("Document/animationstart_event", "animationstart")}}, {{domxref("Document/animationcancel_event", "animationcancel")}}, {{domxref("Document/animationiteration_event", "animationiteration")}}
- {{domxref("Window")}} を対象としたこのイベント: {{domxref("Window/animationend_event", "animationend")}}
- {{domxref("HTMLElement")}} を対象としたこのイベント: {{domxref("HTMLElement/animationend_event", "animationend")}}
