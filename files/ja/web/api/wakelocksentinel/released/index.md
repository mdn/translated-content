---
title: WakeLockSentinel.released
slug: Web/API/WakeLockSentinel/released
tags:
  - プロパティ
  - 読み取り専用
  - 画面起動ロック API
  - WakeLockSentinel
browser-compat: api.WakeLockSentinel.released
translation_of: Web/API/WakeLockSentinel/released
---
{{DefaultAPISidebar("Screen Wake Lock API")}}

**`released`** は {{domxref("WakeLockSentinel")}} インターフェイスのプロパティで、 {{domxref("WakeLockSentinel")}} がまだ解放されていないかどうかを示す論理値を返します。

## 構文

```js
var released = sentinel.released;
```

### 値

論理値で、最初は `false` であり、 {{domxref("WakeLockSentinel")}} が解放され（{{domxref("WakeLockSentinel.release()")}} が呼び出されるか、または自動的にロックが解除され） {{domxref("WakeLockSentinel/release_event", "release")}} イベントが発行された後は `true` となって変化しない値です。

## 例

この例は、 **`released`** の値が {{domxref("WakeLockSentinel")}} のライフライクルの中でどのように変化するかを示します。

```js
const sentinel = await navigator.wakeLock.request('screen');
console.log(sentinel.released);  // "false" と出力

sentinel.onrelease = () => {
  console.log(sentinel.released);  // "true" と出力
};

await sentinel.release();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
