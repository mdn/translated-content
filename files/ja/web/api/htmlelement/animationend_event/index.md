---
title: 'HTMLElement: animationend イベント'
slug: Web/API/HTMLElement/animationend_event
tags:
  - API
  - アニメーション
  - AnimationEvent
  - CSS アニメーション
  - CSS3 アニメーション
  - イベント
  - HTMLElement
  - リファレンス
  - animationend
translation_of: Web/API/HTMLElement/animationend_event
---
{{APIRef}}

**`animationend`** イベントは、 [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)が完了したときに発行されます。アニメーションが完了前に中止された場合、例えば要素が DOM から削除されたりアニメーションが要素から削除されたりした場合は、 `animationend` イベントは発生しません。

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

## 例

この例では、アニメーションしている要素を取得し、 `animationend` イベントを待ち受けします。

```js
const animated = document.querySelector('.animated');

animated.addEventListener('animationend', () => {
  console.log('アニメーション終了');
});
```

同様に、 `onanimationend` イベントハンドラープロパティを使用するとこうなります。

```js
const animated = document.querySelector('.animated');

animated.onanimationend = () => {
  console.log('アニメーション終了');
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
  margin: .2rem;
  padding: .2rem;
}

.animation.active {
  animation-duration: 2s;
  animation-name: slidein;
  animation-iteration-count: 2;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
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
- 関連イベント: {{domxref("HTMLElement/animationstart_event", "animationstart")}}, {{domxref("HTMLElement/animationcancel_event", "animationcancel")}}, {{domxref("HTMLElement/animationiteration_event", "animationiteration")}}
- {{domxref("Document")}} をターゲットとしたこのイベント: {{domxref("Document/animationend_event", "animationend")}}
- {{domxref("Window")}} をターゲットとしたこのイベント: {{domxref("Window/animationend_event", "animationend")}}
