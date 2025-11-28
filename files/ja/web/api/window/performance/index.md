---
title: "Window: performance プロパティ"
short-title: performance
slug: Web/API/Window/performance
l10n:
  sourceCommit: 54962bbd1d367115cfd01b4e1ba6b552e8b68eb7
---

{{APIRef("Performance API")}}

**`performance`** は {{domxref("Window")}} インターフェイスのプロパティで、{{domxref("Performance")}} オブジェクトを返します。このオブジェクトは、ウィンドウのスコープ内で実行されているコードのパフォーマンス情報を収集するために使用できます。

パフォーマンス項目はコンテキストごとに記録されます。メインスレッド（または他のワーカー）でマークを作成した場合、ワーカースレッドではそのマークを見ることはできません。その逆も同様です。

### 値

それが公開する API によって提供されるパフォーマンスおよびタイミング関連情報へのアクセスを提供する {{domxref("Performance")}} オブジェクト。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WorkerGlobalScope.performance")}}
