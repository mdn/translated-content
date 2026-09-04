---
title: CSSTransition
slug: Web/API/CSSTransition
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Web Animations")}}

**`CSSTransition`** は{{domxref('Web Animations API','ウェブアニメーション API','',' ')}} のインターフェイスで、[CSS トランジション](/ja/docs/Web/CSS/Guides/Transitions)で使用される {{domxref("Animation")}} オブジェクトです。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには、親である {{domxref("Animation")}} から継承したプロパティがあります。_

- {{domxref("CSSTransition.transitionProperty")}} {{ReadOnlyInline}}
  - : トランジションする CSS プロパティ名を文字列として返します。

## インスタンスメソッド

_このインターフェイスには、親である {{domxref("Animation")}} から継承したメソッドがあります。_

固有のメソッドはありません。

## 例

### 返された CSSTransition の検査

次の例では、ホバー時にボックスの幅が変化するトランジションを実装しています。{{domxref("Element.getAnimations()")}} を呼び出すと、すべての {{domxref("Animation")}} オブジェクトの配列が返されます。この場合、生成されるアニメーションを表す `CSSTransition` オブジェクトが返されます。

```css
.box {
  background-color: #165baa;
  color: white;
  width: 100px;
  height: 100px;
  transition: width 4s;
}

.box:hover {
  width: 200px;
}
```

```js
const item = document.querySelector(".box");
item.addEventListener("transitionrun", () => {
  let animations = document.querySelector(".box").getAnimations();
  console.log(animations[0]);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
