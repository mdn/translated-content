---
title: "Performance: timing プロパティ"
short-title: timing
slug: Web/API/Performance/timing
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}{{deprecated_header}}

古い **`Performance.timing`** 読み取り専用プロパティは、遅延時間に関するパフォーマンス情報を含む {{domxref("PerformanceTiming")}} オブジェクトを返します。

このプロパティはワーカーでは使用できません。

> [!WARNING]
> このプロパティは [Navigation Timing Level 2 仕様書](https://w3c.github.io/navigation-timing/#obsolete)では非推奨です。代わりに {{domxref("PerformanceNavigationTiming")}} を使用してください。

## 値

{{domxref("PerformanceTiming")}} オブジェクトです。

## 仕様書

この機能は標準化路線上にはありません。 [Navigation Timing 仕様書](https://w3c.github.io/navigation-timing/#obsolete)では非推奨としています。
代わりに {{domxref("PerformanceNavigationTiming")}} インターフェイスを使用してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("Performance")}} インターフェイス
