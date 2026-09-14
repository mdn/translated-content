---
title: "IntersectionObserver: trackVisibility プロパティ"
short-title: trackVisibility
slug: Web/API/IntersectionObserver/trackVisibility
l10n:
  sourceCommit: 707183bfb6cffe53650c03e7e7c369ad089f55ae
---

{{APIRef("Intersection Observer API")}}{{SeeCompatTable}}

**`trackVisibility`** は {{domxref("IntersectionObserver")}} インターフェイスの読み取り専用のプロパティで、オブザーバーが要素の交差に加えてターゲットの可視性も追跡するかどうかを示します。

## 値

交差判定のために可視性を追跡する場合は `true`、そうでない場合は `false` です。

この値は、`IntersectionObserver()` コンストラクターの [`option.trackVisibility`](/ja/docs/Web/API/IntersectionObserver/IntersectionObserver#trackvisibility) 引数で設定します。

## 解説

可視性を追跡していない場合、オブザーバーは対象要素がルート要素のビューポート内にスクロールされた際に通知を提供します。
ただし、これは対象要素の可視性が損なわれているかどうかを判断するものではありません。対象要素は他の要素によって部分的に覆われている可能性があり、不透明度が低下している可能性があり、フィルターや座標変換、その他の変更によって歪んでいる可能性があります。

可視性を追跡する際、ブラウザーが可視であると考えてみる要素のみが交差として示されます。
このアルゴリズムは保守的であり、わずかな不透明度の減少のみを伴う要素など、技術的には可視である要素を省略する場合があります。

可視性の計算は計算コストが高いことに注意してください。
演算が行われる頻度が高くなりすぎないよう、 {{domxref("IntersectionObserver/delay","delay")}} を使用して、最小報告間隔を制限してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [交差オブザーバー API による要素の表示時間設定](/ja/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
