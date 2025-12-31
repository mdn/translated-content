---
title: CSSAnimation
slug: Web/API/CSSAnimation
l10n:
  sourceCommit: 4f5e90f47c518afd1e3c11a9fb32b933cc8434e9
---

{{APIRef("Web Animations")}}

**`CSSAnimation`** は{{domxref('Web Animations API','ウェブアニメーション API','',' ')}} のインターフェイスで、{{domxref("Animation")}} オブジェクトを表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには、親である {{domxref("Animation")}} から継承したプロパティがあります。_

- {{domxref("CSSAnimation.animationName")}} {{ReadOnlyInline}}
  - : アニメーション名を文字列で返します。

## インスタンスメソッド

_このインターフェイスには、親である {{domxref("Animation")}} から継承したメソッドがあります。_

## 例

### 返された CSSAnimation の検査

次の例におけるアニメーションは、`slide-in` という名前で CSS に定義されています。{{domxref("Element.getAnimations()")}} を呼び出すと、すべての {{domxref("Animation")}} オブジェクトの配列が返されます。この場合、CSS で生成されたアニメーションを表す `CSSAnimation` オブジェクトが返されます。

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
console.log(animations[0]);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
