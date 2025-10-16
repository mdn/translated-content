---
title: "IntersectionObserver: delay プロパティ"
short-title: delay
slug: Web/API/IntersectionObserver/delay
l10n:
  sourceCommit: 707183bfb6cffe53650c03e7e7c369ad089f55ae
---

{{APIRef("Intersection Observer API")}}{{SeeCompatTable}}

**`delay`** は {{domxref("IntersectionObserver")}} インターフェイスの読み取り専用プロパティで、このオブザーバーからの通知間の最小遅延を示します。

この遅延は、[可視性の追跡](/ja/docs/Web/API/IntersectionObserver/trackVisibility)時に通知が提供される頻度を制限するために使用されます。これは計算負荷の高い操作であるためです。
可視性を追跡する際の推奨事項は、遅延を許容可能な最大値に設定することです。

## 値

正のミリ秒単位の数値。

この値は、`IntersectionObserver()` コンストラクターの引数である [`option.delay`](/ja/docs/Web/API/IntersectionObserver/IntersectionObserver#delay) を使用して設定します。
{{domxref("IntersectionObserver/trackVisibility","trackVisibility")}} が `true` の場合、値は 100 以上に制限されます。それ以外の場合は既定で 0 になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [交差オブザーバー API による要素の表示時間設定](/ja/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
