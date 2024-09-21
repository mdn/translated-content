---
title: "PerformanceTiming: navigationStart プロパティ"
slug: Web/API/PerformanceTiming/navigationStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> このプロパティのこのインターフェイスは、[Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) で非推奨になりました。
> かわりに {{domxref("PerformanceNavigationTiming")}} インターフェイスを使用してください。

レガシーな読み取り専用プロパティ **`PerformanceTiming.navigationStart`** は、同じ閲覧コンテキストの前の文書のアンロードのプロンプトが終了した直後の時刻を UNIX エポックからのミリ秒数で表す `unsigned long long` 値を返します。前の文書が無い場合は、この値は {{domxref("PerformanceTiming.fetchStart")}} と同じになります。

## 値

`unsigned long long` です。

## 仕様書

[Navigation Timing specification](https://w3c.github.io/navigation-timing/#obsolete) で非推奨とされたので、この機能は標準化されていません。
かわりに {{domxref("PerformanceNavigationTiming")}} インターフェイスを使用してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 属している {{domxref("PerformanceTiming")}} インターフェイス
