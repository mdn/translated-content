---
title: "AudioParam: cancelAndHoldAtTime() メソッド"
short-title: cancelAndHoldAtTime()
slug: Web/API/AudioParam/cancelAndHoldAtTime
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

**`cancelAndHoldAtTime()`** は {{domxref("AudioParam")}} インターフェイスのメソッドで、将来 `AudioParam` に予定されていた変更をすべてキャンセルしますが、指定された時刻に他のメソッドを使用してさらに変更が加えられるまでその値を保持します。

## 構文

```js-nolint
cancelAndHoldAtTime(cancelTime)
```

### 引数

- `cancelTime`
  - : すべてのスケジュールされた変更が取り消される、 [`AudioContext`](/ja/docs/Web/API/AudioContext) が最初に作成されてからからの時間（秒単位）を表します。

### 返値

呼び出された {{domxref("AudioParam")}} への参照です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
