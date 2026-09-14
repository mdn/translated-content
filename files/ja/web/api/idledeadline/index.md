---
title: IdleDeadline
slug: Web/API/IdleDeadline
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef("Background Tasks")}}

`IdleDeadline` インターフェイスは、{{domxref("Window.requestIdleCallback()")}} の呼び出しによって確立されるアイドルコールバックの入力引数のデータ型として使用されます。このインターフェイスは、ユーザーエージェントがアイドル状態を維持すると推定する残り時間を判定できるメソッド {{domxref("IdleDeadline.timeRemaining", "timeRemaining()")}} と、コールバックがタイムアウト期間の満了により実行されているかどうかを判定できるプロパティ {{domxref("IdleDeadline.didTimeout", "didTimeout")}} を提供します。

リクエストコールバックの仕組みについて詳しくは、[バックグラウンドタスクの協調スケジューリング](/ja/docs/Web/API/Background_Tasks_API)を参照してください。

## インスタンスプロパティ

- {{domxref("IdleDeadline.didTimeout")}} {{ReadOnlyInline}}
  - : 論理値で、`true` の場合、このコールバックはタイムアウト期間の満了により実行されています。

## インスタンスメソッド

- {{domxref("IdleDeadline.timeRemaining()")}}
  - : {{domxref("DOMHighResTimeStamp")}} を返します。これは、現在のアイドル時間に残っているとユーザーエージェントが推定するミリ秒数を表す浮動小数点値です。 アイドル時間が終了している場合、値は 0 になります。コールバックはこれを繰り返し呼び出して、戻る前にさらに作業を行うのに十分な時間が残っているかどうかを確認できます。

## 例

[完全な例](/ja/docs/Web/API/Background_Tasks_API#例)は、[バックグラウンドタスク API の協調スケジューリング](/ja/docs/Web/API/Background_Tasks_API)の記事で紹介しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [バックグラウンドタスク API の協調スケジューリング](/ja/docs/Web/API/Background_Tasks_API)
- {{domxref("Window.requestIdleCallback()")}}
- {{domxref("Window.cancelIdleCallback()")}}
