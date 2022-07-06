---
title: 'HTMLElement: transitionrun イベント'
slug: Web/API/HTMLElement/transitionrun_event
tags:
  - CSS トランジション
  - イベント
  - HTML DOM
  - HTMLElement
  - リファレンス
  - トランジション
  - ウェブ
  - transitionrun
browser-compat: api.HTMLElement.transitionrun_event
translation_of: Web/API/HTMLElement/transitionrun_event
---
{{APIRef}}{{SeeCompatTable}}

**`transitionrun`** イベントは、 [CSS トランジション](/ja/docs/CSS/Using_CSS_transitions)が最初に生成されたとき、すなわち、 {{cssxref("transition-delay")}} が始まる前に発生します。

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

## 例

このコードは `transitionrun` イベントのリスナーを追加します。

```js
el.addEventListener('transitionrun', () => {
  console.log('トランジションは実行中ですが、まだトランジションが動き出していません。');
});
```

同じですが、 [`ontransitionrun`](/ja/docs/Web/API/GlobalEventHandlers/ontransitionrun) プロパティを `addEventListener()` の代わりに使用した例です。

```js
el.ontransitionrun = () => {
  console.log('トランジションは開始されており、待ち時間が経過したら動き出します');
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
const el = document.querySelector('.transition');
const message = document.querySelector('.message');

el.addEventListener('transitionrun', function() {
  message.textContent = 'transitionrun が発生';
});

el.addEventListener('transitionstart', function() {
  message.textContent = 'transitionstart が発生';
});

el.addEventListener('transitionend', function() {
  message.textContent = 'transitionend が発生';
});
```

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

相違点は以下のとおりです。

- `transitionrun` は、トランジションが生成されるときに発生します (つまり、遅延時間の始め)。
- `transitionstart` は実際にアニメーションが始まるときに発生します。 (つまり、遅延時間の終わり)。

`transitionrun` は、遅延時間が終わる前にトランジションが中止されたときにも発生します。トランジションの遅延時間がなかったり、 transition-delay が負の数であった場合には、 `transitionrun` と `transitionstart` の両方が発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("GlobalEventHandlers.ontransitionsrun")}} イベントハンドラー
- {{domxref("TransitionEvent")}} インターフェイス
- CSS プロパティ: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- 関連イベント: {{domxref("HTMLElement/transitionend_event", "transitionend")}}, {{domxref("HTMLElement/transitionstart_event", "transitionstart")}}, {{domxref("HTMLElement/transitioncancel_event", "transitioncancel")}}
- {{domxref("Document")}} をターゲットとしたこのイベント: {{domxref("Document/transitionrun_event", "transitionrun")}}
- {{domxref("Window")}} をターゲットとしたこのイベント: {{domxref("Window/transitionrun_event", "transitionrun")}}
