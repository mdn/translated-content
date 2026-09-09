---
title: "Animation: Animation() コンストラクター"
short-title: Animation()
slug: Web/API/Animation/Animation
l10n:
  sourceCommit: 291a8c75ed553e807895225d51dff7ac24ad1f05
---

{{ APIRef("Web Animations") }}

**`Animation()`** は[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) のコンストラクターで、新しい `Animation` オブジェクトのインスタンスを返します。

## 構文

```js-nolint
new Animation()
new Animation(effect)
new Animation(effect, timeline)
```

### 引数

- `effect` {{optional_inline}}
  - : アニメーションに割り当てる、 {{domxref("AnimationEffect")}} インターフェイスに基づくオブジェクトとして対象となる効果です。将来的には `SequenceEffect` や `GroupEffect` などの他の効果も利用できるようになるかもしれませんが、現在のところ利用できる効果は {{domxref("KeyframeEffect")}} だけです。これは `null` （これがデフォルト値です）にすると、効果を適用しないことを示します。
- `timeline` {{optional_inline}}
  - : アニメーションを関連付ける `timeline` を指定します。 {{domxref("AnimationTimeline")}} インターフェイスに基づく型のオブジェクトを指定します。デフォルト値は {{domxref("Document.timeline")}} ですが、`null` に設定することも可能です。

## 例

[白うさぎを追いかけるの例](/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#アニメーションの一時停止と再生)では、`Animation()` コンストラクターを使用し、文書の `timeline` を利用して `rabbitDownKeyframes` 用の `Animation` を作成することができます。

```js
const whiteRabbit = document.getElementById("rabbit");

const rabbitDownKeyframes = new KeyframeEffect(
  whiteRabbit,
  [{ transform: "translateY(0%)" }, { transform: "translateY(100%)" }],
  { duration: 3000, fill: "forwards" },
);

const rabbitDownAnimation = new Animation(rabbitDownKeyframes);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
