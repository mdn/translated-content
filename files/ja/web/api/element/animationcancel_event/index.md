---
title: 'Document: animationcancel イベント'
slug: Web/API/Element/animationcancel_event
original_slug: Web/API/Document/animationcancel_event
---
{{APIRef}}{{SeeCompatTable}}

**`animationcancel`** イベントは、 [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)が予期せず中断されたときに発生します。言い換えれば、 {{domxref("Document/animationend_event", "animationend")}} イベントを送出せずに実行が停止するときはいつでもです。これは {{cssxref("animation-name")}} が変更されてアニメーションが削除されたり、動いているノードが CSS を使用して非表示にされた場合などに起こることがあります。したがって、直接または原因として、その包含ノードのいずれかが隠されています。

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
        {{domxref("GlobalEventHandlers/onanimationcancel","onanimationcancel")}}
      </td>
    </tr>
  </tbody>
</table>

このイベントの本来の対象は、トランジションが適用された {{domxref("Element")}} です。このイベントを {{domxref("Document")}} インターフェイス上で待ち受けし、キャプチャやバブリングの局面で処理することができます。このイベントについて完全な詳細は、 [HTMLElement: animationcancel イベント](/ja/docs/Web/API/HTMLElement/animationcancel_event)を参照してください。

## 例

このコードはリスナーに `animationcancel` イベントを追加します。

```js
document.addEventListener('animationcancel', () => {
  console.log('アニメーションが取り消されました');
});
```

同様に、 {{domxref("GlobalEventHandlers/onanimationcancel", "onanimationcancel")}} プロパティを `addEventListener()` の代わりに使用するとこうなります。

```js
document.onanimationcancel = () => {
  console.log('アニメーションが取り消されました');
};
```

[このイベントのライブデモを参照してください。](/ja/docs/Web/API/HTMLElement/animationcancel_event#Live_example)

## 仕様書

| 仕様書                                                                                               | 状態                                 | 備考     |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName("CSS3 Animations", "#eventdef-animationevent-animationcancel")}} | {{Spec2("CSS3 Animations")}} | 初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)
- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- {{domxref("AnimationEvent")}}
- 関連イベント: {{domxref("Document/animationstart_event", "animationstart")}}, {{domxref("Document/animationend_event", "animationend")}}, {{domxref("Document/animationiteration_event", "animationiteration")}}
- {{domxref("Window")}} を対象としたこのイベント: {{domxref("Window/animationcancel_event", "animationcancel")}}
- {{domxref("HTMLElement")}} を対象としたこのイベント: {{domxref("HTMLElement/animationcancel_event", "animationcancel")}}
