---
title: "KeyframeEffect: target プロパティ"
short-title: target
slug: Web/API/KeyframeEffect/target
l10n:
  sourceCommit: 8c04dd43cc39e6726e3b15416d8498f8514cd071
---

{{ APIRef("Web Animations") }}

**`target`** は {{domxref("KeyframeEffect")}} インターフェイスのプロパティで、アニメーションの対象となる要素または擬似要素を表します。特定の要素をターゲットとしないアニメーションでは `null` となる場合があります。CSS によって生成されるアニメーションおよび遷移を除き、ゲッターおよびセッターの両方として機能します。

## 値

{{domxref("Element")}} または `null` です。

## 例

この例では、`emoji` がアニメーションの対象となる `target` 要素として設定されています。

```js
const emoji = document.querySelector("div"); // アニメーションする要素

const rollingKeyframes = new KeyframeEffect(
  emoji,
  [
    { transform: "translateX(0) rotate(0)" }, // キーフレーム
    { transform: "translateX(200px) rotate(1.3turn)" }, // キーフレーム
  ],
  {
    // キーフレームオプション
    duration: 2000,
    direction: "alternate",
    easing: "ease-in-out",
    iterations: "Infinity",
  },
);

const rollingAnimation = new Animation(rollingKeyframes, document.timeline);
rollingAnimation.play();

// logs "<div>🤣</div>"
console.log(rollingKeyframes.target);
```

```html
<div>🤣</div>
```

```css hidden
body {
  box-shadow: 0 5px 5px pink;
}

div {
  width: fit-content;
  margin-left: calc(50% - 132px);
  font-size: 64px;
  user-select: none;
  margin-top: 1rem;
}
```

{{ EmbedLiveSample("Examples", "100%", "120") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("KeyframeEffect")}} オブジェクトのプロパティ
