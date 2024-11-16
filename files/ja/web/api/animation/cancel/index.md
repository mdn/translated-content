---
title: "Animation: cancel() メソッド"
short-title: cancel()
slug: Web/API/Animation/cancel
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

ウェブアニメーション API の **`cancel()`** は {{domxref("Animation")}} インターフェイスのメソッドで、このアニメーションによって引き起こされたすべての {{domxref("KeyframeEffect")}}を初期化し、再生を中止します。

> [!NOTE]
> アニメ―ションをキャンセルした時、{{domxref("Animation.startTime", "startTime")}} と {{domxref("Animation.currentTime", "currentTime")}} は、 `null` に設定されます。

## 構文

```js-nolint
cancel()
```

### 引数

なし。

### 返値

なし。

### 例外

このメソッドは、直接は例外を発生しません。しかし、キャンセル時にアニメーションの {{domxref("Animation.playState", "playState")}} が `"idle"` 以外の場合、 {{domxref("Animation.finished", "current finished promise", "", 1)}} は {{domxref("DOMException")}} の `AbortError` で拒否されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("KeyframeEffect")}}
- {{domxref("Animation")}}
- {{domxref("Animation.playState")}}
- {{domxref("Animation.finished")}} はこのアニメーションの `playState` が `"idle"` でなくなると拒否されるこの操作のプロミスを返します。
