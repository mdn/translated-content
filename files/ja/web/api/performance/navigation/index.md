---
title: "Performance: navigation プロパティ"
short-title: navigation
slug: Web/API/Performance/navigation
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

古い **`Performance.navigation`** は読み取り専用プロパティで、指定された閲覧コンテキスト内で発生するナビゲーションの種類を表す {{domxref("PerformanceNavigation")}} オブジェクトを返します。リソースを取得するまでに必要なリダイレクトの数などです。

このプロパティはワーカーでは利用できません。

> [!WARNING]
> このプロパティは [Navigation Timing Level 2 仕様書](https://w3c.github.io/navigation-timing/#obsolete)では非推奨です。代わりに {{domxref("PerformanceNavigationTiming")}} を使用してください。

## 値

{{domxref("PerformanceNavigation")}} オブジェクトです。

## 仕様書

この機能は標準化路線上にはありません。 [Navigation Timing 仕様書](https://w3c.github.io/navigation-timing/#obsolete)では非推奨としています。
代わりに {{domxref("PerformanceNavigationTiming")}} インターフェイスを使用してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("Performance")}} インターフェイス
