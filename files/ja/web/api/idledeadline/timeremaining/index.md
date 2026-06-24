---
title: "IdleDeadline: timeRemaining() メソッド"
short-title: timeRemaining()
slug: Web/API/IdleDeadline/timeRemaining
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("Background Tasks")}}

**`timeRemaining()`** は {{domxref("IdleDeadline")}} インターフェイスのメソッドで、ユーザーエージェントが現在のアイドル期間に残っていると推定するミリ秒数を返します。このコールバックはいつでもこのメソッドを呼び出して、戻る前にどれだけの時間作業を続けられるかを判定できます。たとえば、コールバックがタスクを終了し、次のタスクを開始する場合、`timeRemaining()` を呼び出して次のタスクを完了するのに十分な時間があるかどうかを確認できます。十分な時間がない場合、コールバックはすぐに戻るか、残りの時間で他の作業を探すことができます。

`timeRemaining()` が 0 に達する頃には、コールバックはユーザーエージェントのイベントループに制御を戻すことが推奨されます。

## 構文

```js-nolint
timeRemaining()
```

### 引数

なし。

### 返値

{{domxref("DOMHighResTimeStamp")}} を返します。これは、現在のアイドル時間に残っているとユーザーエージェントが推定するミリ秒数を表す浮動小数点値です。この値は理想的には約 5 マイクロ秒以内の精度でです。

{{domxref("IdleDeadline")}} オブジェクトの {{domxref("IdleDeadline.didTimeout", "didTimeout")}} プロパティが `true` の場合、このメソッドは 0 を返します。

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
