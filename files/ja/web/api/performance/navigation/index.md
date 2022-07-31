---
title: Performance.navigation
slug: Web/API/Performance/navigation
tags:
  - API
  - 後方互換性
  - 非推奨
  - HTTP
  - ナビゲーションタイミング
  - パフォーマンス
  - プロパティ
  - 読み取り専用
  - legacy
browser-compat: api.Performance.navigation
translation_of: Web/API/Performance/navigation
---
{{APIRef("Navigation Timing")}}{{Deprecated_Header}}

古い **`Performance.navigation`** は読み取り専用プロパティで、指定された閲覧コンテキスト内で発生するナビゲーションの種類を表す {{domxref("PerformanceNavigation")}} オブジェクトを返します。リソースを取得するまでに必要なリダイレクトの数などです。

このプロパティはワーカーでは利用できません。

> **Warning:** このプロパティは [Navigation Timing Level 2 仕様書](https://w3c.github.io/navigation-timing/#obsolete)では非推奨です。代わりに {{domxref("PerformanceNavigationTiming")}} を使用してください。

## 構文

```js
navObject = performance.navigation;
```

## 仕様書

この機能は標準化路線上にはありません。 [Navigation Timing 仕様書](https://w3c.github.io/navigation-timing/#obsolete)では非推奨としています。
代わりに {{domxref("PerformanceNavigationTiming")}} インターフェイスを使用してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("Performance")}} インターフェイス
