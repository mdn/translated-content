---
title: "IdleDeadline: didTimeout プロパティ"
short-title: didTimeout
slug: Web/API/IdleDeadline/didTimeout
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Background Tasks")}}

**`didTimeout`** は **{{domxref("IdleDeadline")}}** インターフェイスの読み取り専用プロパティで、{{domxref("Window.requestIdleCallback()")}} によって確立されたアイドルコールバックが、タイムアウト期間の満了により実行されているかどうかを示します。

`didTimeout` が `true` の場合、この `IdleDeadline` オブジェクトの {{domxref("IdleDeadline.timeRemaining", "timeRemaining()")}} メソッドはおよそ 0 を返します。

アイドルコールバックは、ユーザーエージェントが十分なアイドル時間を確保できない場合でも、実行すべきタスクが確実に実行されるよう、タイムアウトの概念に対応しています。通常コールバックは、ブラウザーが忙しすぎて時間を確保できない場合でもアクションを実行する必要がある場合、`didTimeout` の値をチェックします。必要なタスクを実行するか、理想的には最小限の作業（処理を継続させるために実行可能な最小限の作業）を実行して対応し、その後新しいコールバックをスケジュールして残りの作業を完了させるよう再試行すべきです。

## 値

論理値で、 `true` の場合、このコールバックはタイムアウト期間の満了により実行されており、 `false` の場合、このコールバックはユーザーエージェントがアイドル状態であると判断したために実行されています。

## 例

[完全な例](/ja/docs/Web/API/Background_Tasks_API#例)は、[バックグラウンドタスク API の協調スケジューリング](/ja/docs/Web/API/Background_Tasks_API)の記事で紹介しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [バックグラウンドタスクの協調スケジューリング](/ja/docs/Web/API/Background_Tasks_API)
- {{domxref("IdleDeadline")}}
- {{domxref("Window.requestIdleCallback()")}}
- {{domxref("Window.cancelIdleCallback()")}}
