---
title: WakeLock
slug: Web/API/WakeLock
tags:
  - インターフェイス
  - リファレンス
  - 画面起動ロック API
  - 起動ロック
  - 画面
browser-compat: api.WakeLock
translation_of: Web/API/WakeLock
---
{{securecontext_header}}{{DefaultAPISidebar("Screen Wake Lock API")}}

**`WakeLock`** は[画面起動ロック API](/ja/docs/Web/API/Screen_Wake_Lock_API) のインターフェイスで、アプリケーションが動作し続ける必要があるときに、端末の画面が暗くなったりロックされたりすることを防ぐためのものです。

システムの起動ロックはグローバルの {{domxref('Navigator.wakeLock')}} プロパティで公開されています。

## メソッド

- `{{domxref("WakeLock.request", "request")}}`
  - : {{domxref("WakeLockSentinel")}} オブジェクトを要求し、 {{domxref("WakeLockSentinel")}} オブジェクトで解決する {{jsxref("Promise")}} を返します。

## 例

以下の非同期関数は、 {{domxref("WakeLockSentinel")}} オブジェクトを要求します。{{domxref("WakeLock.request")}} メソッドはブラウザーが何らかの理由でリクエストを拒否した場合を想定して、 `try...catch` 文で囲まれています。

```js
try {
  const wakeLock = await navigator.wakeLock.request('screen');
} catch (err) {
  // 起動ロックの要求に失敗 - 通常は、バッテリー低下などシステムに起因する。
  console.log(`${err.name}, ${err.message}`);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
