---
title: "PerformanceTiming: fetchStart プロパティ"
slug: Web/API/PerformanceTiming/fetchStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> このプロパティのこのインターフェイスは [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) で非推奨になりました。かわりに {{domxref("PerformanceNavigationTiming")}} インターフェイスを使用してください。

レガシーな読み取り専用プロパティ **`PerformanceTiming.fetchStart`** は、ブラウザーが HTTP 要求により文書を読み込む準備ができた時刻を UNIX エポックからのミリ秒で表す `unsigned long long` 値を返します。この時刻は、任意のアプリケーションキャッシュをチェックする _前_ です。

## 値

`unsigned long long` です。

## 仕様書

[Navigation Timing specification](https://w3c.github.io/navigation-timing/#obsolete) で非推奨とされたので、この機能は標準化されていません。
かわりに {{domxref("PerformanceNavigationTiming")}} を使用してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- **`PerformanceTiming.fetchStart`** が属しているインターフェイス {{domxref("PerformanceTiming")}}
