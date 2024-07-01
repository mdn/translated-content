---
title: ShadowRoot.getAnimations()
slug: Web/API/ShadowRoot/getAnimations
---

{{APIRef("Web Animations")}}

**`getAnimations()`** は {{domxref("ShadowRoot")}} のメソッドで、ターゲット要素がシャドウツリーの子孫である、現在有効なすべての {{domxref("Animation")}} オブジェクトの配列を返します。この配列には [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)、[CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions)、[ウェブアニメーション](/ja/docs/Web/API/Web_Animations_API) が含まれています。

## 構文

```js
getAnimations();
```

### 引数

なし。

### 返値

{{domxref("Animation")}} オブジェクトの配列 ({{jsxref("Array")}}) で、それぞれが呼び出された {{domxref("ShadowRoot")}} の子孫である要素に現在関連付けられた 1 つのアニメーションを表します。

## 例

次のコードでは、シャドウツリーにあるすべてのアニメーションの {{domxref("Animation.playbackRate")}} を半分にすることで、アニメーションの速度を下げます。

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;
shadow.getAnimations().forEach(function (animation) {
  animation.playbackRate *= 0.5;
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Animations API](/ja/docs/Web/API/Web_Animations_API)
- [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)
- [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions)
- {{domxref("Element.getAnimations()")}} - 単一の
  {{domxref("Element")}} とその配下のアニメーションのみを読み取ります。
- {{domxref("Animation")}}
