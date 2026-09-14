---
title: "Document: getAnimations() メソッド"
short-title: getAnimations()
slug: Web/API/Document/getAnimations
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("Web Animations")}}

`getAnimations()` メソッドは {{domxref("Document")}} インターフェイスのメソッドで、この文書の配下にあるターゲット要素にあるすべての {{domxref("Animation")}} オブジェクトの配列を返します。この配列には [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations), [CSS トランジション](/ja/docs/Web/CSS/Guides/Transitions), [ウェブアニメーション](/ja/docs/Web/API/Web_Animations_API) が含まれます。

## 構文

```js-nolint
getAnimations()
```

### 引数

なし。

### 返値

{{domxref("Animation")}} オブジェクトの配列 ({{jsxref("Array")}}) で、それぞれの要素は呼び出された {{domxref("Document")}} の配下にある要素に現在関連付けられているアニメーション 1 つを表します。

## 例

次のコードスニペットは、ページ上のすべてのアニメーションの {{domxref("Animation.playbackRate")}} を半分にすることで速度をゆっくりにします。

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)
- [CSS トランジション](/ja/docs/Web/CSS/Guides/Transitions)
- {{domxref("Element.getAnimations()")}} - 単一の要素 ({{domxref("Element")}}) とその子孫にあるアニメーションのみを読み取る
- {{domxref("Animation")}}
