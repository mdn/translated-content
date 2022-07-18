---
title: 'HTMLElement: animationiteration イベント'
slug: conflicting/Web/API/Element/animationiteration_event
tags:
  - API
  - アニメーション
  - AnimationEvent
  - CSS アニメーション
  - イベント
  - HTMLElement
  - リファレンス
translation_of: Web/API/HTMLElement/animationiteration_event
original_slug: Web/API/HTMLElement/animationiteration_event
browser-compat: api.HTMLElement.animationiteration_event
---
{{APIRef}}

**`animationiteration`** イベントは、 [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)の反復が 1 回分終了し、次の回が始まったときに発生します。このイベントは {{domxref("HTMLElement/animationend_event", "animationend")}} イベントと同時には発生せず、従って `animation-iteration-count` が 1 のアニメーションでは発生しません。

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

## 例

このコードは `animationiteration` を使用して、アニメーションの反復が終了した回数を追跡します。

```js
const animated = document.querySelector('.animated');

let iterationCount = 0;

animated.addEventListener('animationiteration', () => {
  iterationCount++;
  console.log(`アニメーション反復回数: ${iterationCount}`);
});
```

同様に、 `onanimationiteration` イベントハンドラープロパティを使用するとこうなります。

```js
const animated = document.querySelector('.animated');

let iterationCount = 0;

animated.onanimationiteration = () => {
  iterationCount++;
  console.log(`アニメーション反復回数: ${iterationCount}`);
};
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
- 関連イベント: {{domxref("HTMLElement/animationstart_event", "animationstart")}}, {{domxref("HTMLElement/animationend_event", "animationend")}}, {{domxref("HTMLElement/animationcancel_event", "animationcancel")}}
- {{domxref("Document")}} をターゲットとしたこのイベント: {{domxref("Document/animationiteration_event", "animationiteration")}}
- {{domxref("Window")}} をターゲットとしたこのイベント: {{domxref("Window/animationiteration_event", "animationiteration")}}
