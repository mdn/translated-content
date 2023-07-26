---
title: "Element: getAnimations() メソッド"
short-title: getAnimations()
slug: Web/API/Element/getAnimations
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Animations")}}

`getAnimations()` は {{domxref("Element")}} インターフェイスのメソッドで（`Animatable` ミックスインで指定されており）、この要素に影響を与える、あるいは将来的に影響を与える予定のすべての {{domxref("Animation")}} オブジェクトの配列を返します。オプションとして、子孫要素の {{domxref("Animation")}} オブジェクトも返すことができます。

> **メモ:** この配列には [CSS アニメーション](/ja/docs/Web/CSS/CSS_animations)、[CSS トランジション](/ja/docs/Web/CSS/CSS_transitions)、[ウェブアニメーション](/ja/docs/Web/API/Web_Animations_API)が含まれます。

## 構文

```js-nolint
getAnimations()
getAnimations(options)
```

### 引数

- `options` {{optional_inline}}

  - : 以下のプロパティを含むオプションオブジェクトです。

    - `subtree`
      - : 論理値で、`true` の場合、 _Element_ の子孫をターゲットとしたアニメーションも返すようになります。これは、 _Element_ やその子孫に付けられた CSS [擬似要素](/ja/docs/Web/CSS/Pseudo-elements)をターゲットとするアニメーションを含みます。既定値は `false` です。

### 返値

{{domxref("Animation")}} オブジェクトの配列 ({{jsxref("Array")}}) で、それぞれが
このメソッドが呼び出された {{domxref("Element")}}、または `{ subtree: true }` が指定されている場合は、その子孫の要素の 1 つを現在ターゲットにしているアニメーションです。

## 例

以下のコードでは、 `elem` とその子孫のすべてのアニメーションが終了するのを待ってから、文書からその要素を削除します。

```js
Promise.all(
  elem.getAnimations({ subtree: true }).map((animation) => animation.finished),
).then(() => elem.remove());
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- [CSS アニメーション](/ja/docs/Web/CSS/CSS_animations)
- [CSS トランジション](/ja/docs/Web/CSS/CSS_transitions)
- {{domxref("Document.getAnimations()")}} - 文書内のすべてのアニメーションを読み取る
- {{domxref("Animation")}}
