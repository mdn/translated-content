---
title: "CSSTransition: transitionProperty プロパティ"
short-title: transitionProperty
slug: Web/API/CSSTransition/transitionProperty
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{APIRef("Web Animations")}}

**`transitionProperty`** は {{domxref("CSSTransition")}} インターフェイスのプロパティで、トランジションの **展開されたトランジションプロパティ名** を返します。これは、トランジションが生成された個別指定の CSS プロパティです。

## 値

文字列です。

## 例

### transitionProperty を返す

次の例では、ポインターを当てるとボックスの幅が変化するトランジションを実装しています。{{domxref("Element.getAnimations()")}} を呼び出すと、すべての {{domxref("Animation")}} オブジェクトの配列が返されます。この場合、生成されたアニメーションを表す `CSSTransition` オブジェクトが返されます。`transitionProperty` プロパティは、トランジションが生成されたプロパティ（この場合は `width`）を返します。

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
  console.log(animations[0].propertyName);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
