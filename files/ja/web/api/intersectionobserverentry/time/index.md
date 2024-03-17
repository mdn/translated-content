---
title: "IntersectionObserverEntry: time プロパティ"
short-title: time
slug: Web/API/IntersectionObserverEntry/time
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Intersection Observer API")}}

{{domxref("IntersectionObserverEntry")}} インターフェイスの読み取り専用の **`time`** プロパティは、 {{domxref("DOMHighResTimeStamp")}} で、文書の作成時刻を基準とする交差状態が発生した時刻を示します。

## 値

{{domxref("DOMHighResTimeStamp")}} で、 {{domxref("IntersectionObserverEntry.target", "target")}} 要素がこの `IntersectionObserverEntry` で示す交差状態の変化を検出した時刻を表します。時刻はそれを含む文書が作成されてからのミリ秒単位で指定します。

## 例

`time` プロパティを使用して、要素がユーザーに表示されている時間を追跡する完全な例については、[交差オブザーバー API による要素の表示時間設定](/ja/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
