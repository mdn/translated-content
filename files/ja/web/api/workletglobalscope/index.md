---
title: WorkletGlobalScope
slug: Web/API/WorkletGlobalScope
l10n:
  sourceCommit: 92ddca57f093fcae13e474f1eedca2946359f131
---

{{APIRef("HTM DOM")}}{{SecureContext_Header}}

**`WorkletGlobalScope`** インターフェイスは、特定のワークレットスコープクラスの継承元となる抽象クラスです。それぞれの `WorkletGlobalScope` が新しいグローバル環境を定義します。

> [!NOTE]
> 通常このインターフェイスを扱う必要はありません。これは派生クラスが作成されることを意図した基底インターフェイスです。{{domxref("AudioWorklet")}} オブジェクトの中で派生クラスの {{domxref("AudioWorkletGlobalScope")}} が見つかり、{{domxref("PaintWorklet")}} オブジェクトの内部で {{domxref("PaintWorkletGlobalScope")}} が見つかるでしょう。

## インスタンスプロパティ

なし

## インスタンスメソッド

なし

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("AudioWorkletGlobalScope")}}
- {{domxref("PaintWorkletGlobalScope")}}
