---
title: Animation()
slug: Web/API/Animation/Animation
tags:
  - API
  - Animation
  - アニメーション
  - コンストラクター
  - リファレンス
  - ウェブアニメーション API
browser-compat: api.Animation.Animation
translation_of: Web/API/Animation/Animation
---
{{ APIRef("Web Animations API") }}

**`Animation()`** は[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) のコンストラクターで、新しい `Animation` オブジェクトのインスタンスを返します。

## 構文

```js
var animation = new Animation([effect][, timeline]);
```

### 引数

- `effect` {{optional_inline}}
  - : アニメーションに割り当てる、 {{domxref("AnimationEffect")}} インターフェイスに基づくオブジェクトとして対象となる効果です。将来的には `SequenceEffect` や `GroupEffect` などの他の効果も利用できるようになるかもしれませんが、現在のところ利用できる効果は {{domxref("KeyframeEffect")}} だけです。これは `null` （これが既定値です）にすると、効果を適用しないことを示します。
- `timeline` {{optional_inline}}
  - : アニメーションを関連付ける `timeline` を指定します。 {{domxref("AnimationTimeline")}} インターフェイスに基づく型のオブジェクトを指定します。現在利用できるタイムラインは {{domxref("DocumentTimeline")}} だけですが、将来的にはジェスチャーやスクロールに関連するタイムラインも利用できるようになるかもしれません。既定値は {{domxref("Document.timeline")}} ですが、`null` に設定することも可能です。

## 例

[「白兎を追え」の例](https://codepen.io/rachelnabors/pen/eJyWzm/?editors=0010)では、 `Animation()` コンストラクターを使用して `Animation` を `rabbitDownKeyframes` に対して、文書の `timeline` を使用して生成しています。

```js
var rabbitDownAnimation = new Animation(rabbitDownKeyframes, document.timeline);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
