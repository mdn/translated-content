---
title: OfflineAudioContext.suspend()
slug: Web/API/OfflineAudioContext/suspend
l10n:
  sourceCommit: 2b8f5d9a29f00aea5d2edfa78d1fb90c51752858
---

{{ APIRef("Web Audio API") }}

**`suspend()`** は {{ domxref("OfflineAudioContext") }} インターフェイスのメソッドで、指定した時刻に音声コンテキストの時間進行の停止をスケジュールし、プロミスを返します。これは一般に、 OfflineAudioContext 上で音声グラフを同期的に操作する時刻に使用されます。

サスペンドの最大精度はレンダー量のサイズであり、指定したサスペンド時刻は最も近いレンダー量の境界に切り捨てられることに注意してください。
このため、同じ量子化フレームで複数のサスペンドをスケジュールすることはできません。また、正確なサスペンドを確保するために、スケジューリングはコンテキストが実行されていない間に行われるべきです。

## 構文

```js-nolint
suspend(suspendTime)
```

### 引数

- `suspendTime`
  - : 数値で、停止時間を秒単位で指定します。

### 返値

{{jsxref("Promise")}} で、 {{jsxref('undefined')}} に解決します。

### 例外

例外が発生した場合、プロミスは拒否されます。

- `InvalidStateError` {{domxref("DOMException")}}
  - : 量子化フレーム番号が以下のいずれかである場合に返されます。
    - 負の数
    - 現在の時刻よりいくつか小さいか等しい。
    - レンダリング総時間より大きいか、等しい。
    - 同じ時刻に他のサスペンドによってスケジュールされている。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
