---
title: 'HTMLElement: animationcancel イベント'
slug: Web/API/HTMLElement/animationcancel_event
tags:
  - API
  - Animation
  - AnimationEvent
  - CSS アニメーション
  - イベント
  - HTMLElement
  - 要素
  - animationcancel
browser-compat: api.HTMLElement.animationcancel_event
translation_of: Web/API/HTMLElement/animationcancel_event
---
{{APIRef}}{{SeeCompatTable}}

**`animationcancel`** イベントは、 [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)が予期せず中断されたときに発生します。言い換えれば、 {{domxref("HTMLElement/animationend_event", "animationend")}} イベントを送出せずに実行が停止するときはいつでもです。これは {{cssxref("animation-name")}} が変更されてアニメーションが削除されたり、動いているノードが CSS を使用して非表示にされた場合などに起こることがあります。直接的に、あるいは、それを含むノードのいずれかが隠されたためです。

このイベントのイベントハンドラーは、 {{domxref("GlobalEventHandlers.onanimationcancel", "onanimationcancel")}} プロパティを設定するか、 {{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用することで追加することができます。

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

## 例

このコードは現在アニメーションしている要素を取得し、 `animationcancel` イベントのリスナーを追加します。次に、要素の {{cssxref("display")}} プロパティを `none` に設定し、 `animationcancel` イベントを引き起こします。

```js
const animated = document.querySelector('.animated');

animated.addEventListener('animationcancel', () => {
  console.log('アニメーションが取り消されました');
});

animated.style.display = 'none';
```

同様に、 {{domxref("GlobalEventHandlers/onanimationcancel", "onanimationcancel")}} プロパティを `addEventListener()` の代わりに使用するとこうなります。

```js
const animated = document.querySelector('.animated');
animated.onanimationcancel = () => {
  console.log('アニメーションが取り消されました');
};

animated.style.display = 'none';
```

### ライブデモ

#### HTML

```html
<div class="animation-example">
    <div class="container">
        <p class="animation">あなたは私たちの惑星を訪れるのに寒い夜を選びました。</p>
    </div>
    <button class="activate" type="button">アニメーションを起動</button>
    <div class="event-log"></div>
</div>
```

#### CSS

```css
.container {
  height: 3rem;
}

.event-log {
  width: 25rem;
  height: 2rem;
  border: 1px solid black;
  margin: 0.2rem;
  padding: 0.2rem;
}

.animation.active {
  animation-duration: 2s;
  animation-name: slidein;
  animation-iteration-count: 2;
}

@keyframes slidein {
  from {
    transform: translateX(100%) scaleX(3);
  }
  to {
    transform: translateX(0) scaleX(1);
  }
}
```

#### JS

```js
const animation = document.querySelector('p.animation');
const animationEventLog = document.querySelector('.animation-example>.event-log');
const applyAnimation = document.querySelector('.animation-example>button.activate');
let iterationCount = 0;

animation.addEventListener('animationstart', () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'アニメーション開始' `;
});

animation.addEventListener('animationiteration', () => {
  iterationCount++;
  animationEventLog.textContent = `${animationEventLog.textContent}'アニメーション反復: ${iterationCount}' `;
});

animation.addEventListener('animationend', () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'アニメーション終了'`;
  animation.classList.remove('active');
  applyAnimation.textContent = "アニメーションを起動";
});

animation.addEventListener('animationcancel', () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'アニメーションを取り消し'`;
});

applyAnimation.addEventListener('click', () => {
  animation.classList.toggle('active');
  animationEventLog.textContent = '';
  iterationCount = 0;
  let active = animation.classList.contains('active');
  if (active) {
    applyAnimation.textContent = "アニメーションを取り消す";
  } else {
    applyAnimation.textContent = "アニメーションを有効にする";
  }
});
```

#### 結果

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)
- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- {{domxref("AnimationEvent")}}
- 関連イベント: {{domxref("HTMLElement/animationstart_event", "animationstart")}}, {{domxref("HTMLElement/animationend_event", "animationend")}}, {{domxref("HTMLElement/animationiteration_event", "animationiteration")}}
- {{domxref("Document")}} をターゲットとしたこのイベント: {{domxref("Document/animationcancel_event", "animationcancel")}}
- {{domxref("Window")}} をターゲットとしたこのイベント: {{domxref("Window/animationcancel_event", "animationcancel")}}
