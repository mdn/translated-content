---
title: "KeyframeEffect: composite プロパティ"
short-title: composite
slug: Web/API/KeyframeEffect/composite
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("Web Animations") }}

**`composite`** は {{domxref("KeyframeEffect")}} のプロパティで、要素のアニメーションがその基盤となるプロパティ値に与える影響を決定します。

## 値

これらの値を理解するには、`blur(3)` という基盤プロパティ値に対して `blur(2)` という `keyframeEffect` 値が動作する例を取って考えてみましょう。

- `replace`
  - : `keyframeEffect` は組み合わせられる値で基盤の値を**置換**します。つまり `blur(2)` で `blur(3)` を置き換えます。
- `add`
  - : `keyframeEffect` は組み合わせられる値を基盤の値に**追加**します。つまり `blur(2) blur(3)` となります。
- `accumulate`
  - : `keyframeEffect` は組み合わせられる値を基盤の値に**累積**します。つまり`blur(5)` となります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("KeyframeEffect")}} オブジェクトのプロパティ
- {{Glossary("Composite operation", "合成演算")}}
