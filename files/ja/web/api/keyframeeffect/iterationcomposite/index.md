---
title: "KeyframeEffect: iterationComposite プロパティ"
short-title: iterationComposite
slug: Web/API/KeyframeEffect/iterationComposite
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("Web Animations") }}

**`iterationComposite`** は {{domxref("KeyframeEffect")}} のプロパティで、アニメーションのプロパティ値の変化が、アニメーションのそれぞれの反復処理においてどのように累積または上書きされるかを決定します。

## 値

以下のうちのどちらかです。

- `replace`
  - : 生成される `keyframeEffect` の値は、現在の反復処理とは独立しています。
- `accumulate`
  - : `keyframeEffect`のその後の反復処理は、前回の反復処理の最終値に基づいて実行されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェhブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("KeyframeEffect")}} オブジェクトのプロパティ
