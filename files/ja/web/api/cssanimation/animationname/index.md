---
title: "CSSAnimation: animationName プロパティ"
short-title: animationName
slug: Web/API/CSSAnimation/animationName
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("Web Animations")}}

**`animationName`** は {{domxref("CSSAnimation")}} インターフェイスのプロパティで、 {{CSSXref("animation-name")}} を返します。これは、要素に適用されるアニメーションを記述する 1 つ以上の keyframe アットルールを指定します。

## 値

文字列です。

## 例

### animationName の返却

次の例におけるアニメーションは、`slide-in` という名前で CSS に定義されています。{{domxref("Element.getAnimations()")}} を呼び出すと、すべての {{domxref("Animation")}} オブジェクトの配列が返されます。`animationName` プロパティは、アニメーションに与えられた名前を返します。この場合は `slide-in` です。

```css
.animate {
  animation: slide-in 0.7s both;
}

@keyframes slide-in {
  0% {
    transform: translateY(-1000px);
  }
  100% {
    transform: translateY(0);
  }
}
```

```js
let animations = document.querySelector(".animate").getAnimations();
console.log(animations[0].animationName);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
