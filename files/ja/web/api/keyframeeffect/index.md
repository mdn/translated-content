---
title: KeyframeEffect
slug: Web/API/KeyframeEffect
l10n:
  sourceCommit: 8c04dd43cc39e6726e3b15416d8498f8514cd071
---

{{ APIRef("Web Animations") }}

**`KeyframeEffect`** は[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) のインターフェイスで、**キーフレーム**と呼ばれるアニメーション可能なプロパティと値のセットを作成することができます。これらは {{domxref("Animation.Animation", "Animation()")}} コンストラクターを使用して再生できます。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}}
  - : 新しい`KeyframeEffect`オブジェクトインスタンスを返し、また既存のキーフレーム効果オブジェクトのインスタンスの複製もすることができます。

## インスタンスプロパティ

- {{domxref("KeyframeEffect.target")}}
  - : このオブジェクトによってアニメーション処理される要素、または擬似要素の親要素を取得または設定します。特定の要素や擬似要素を対象としないアニメーションの場合、 `null` となることがあります。
- {{domxref("KeyframeEffect.pseudoElement")}}
  - : このオブジェクトによってアニメーションされる擬似要素のセレクターを取得または設定します。擬似要素を対象としないアニメーションの場合、`null` となる可能性があります。
- {{domxref("KeyframeEffect.iterationComposite")}}
  - : このキーフレーム効果のプロパティ値変更を解決するための反復合成操作を取得または設定します。
- {{domxref("KeyframeEffect.composite")}}
  - : このキーフレーム効果と他のキーフレーム効果との間でプロパティ値の変更を解決するための合成演算を取得または設定します。

## インスタンスメソッド

_このインターフェイスは、親である {{domxref("AnimationEffect")}} から一部のメソッドを継承しています。_

- {{domxref("AnimationEffect.getComputedTiming()")}}
  - : このキーフレーム効果の計算された現在の時点の値を返します。
- {{domxref("KeyframeEffect.getKeyframes()")}}
  - : この効果を構成する計算済みキーフレームと、その計算済みキーフレームオフセットをつけて返します。
- {{domxref("AnimationEffect.getTiming()")}}
  - : アニメーションに関連付けられたオブジェクトを返します。このオブジェクトには、アニメーションのすべてのタイミング値が含まれています。
- {{domxref("KeyframeEffect.setKeyframes()")}}
  - : この効果を構成するキーフレームの設定する設定を置き換えます。
- {{domxref("AnimationEffect.updateTiming()")}}
  - : 指定したタイミングプロパティを更新します。

## 例

次の例では、KeyframeEffect コンストラクターを使用して、床を転がるロフル絵文字の動きを定義する一連のキーフレームを作成し、その設定を行います。

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

// ロフルアニメーションを再生
rollingAnimation.play();
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
- {{domxref("Animation")}}
