---
title: 'WakeLockSentinel: release イベント'
slug: Web/API/WakeLockSentinel/release_event
tags:
  - Event Handler
  - プロパティ
  - 画面 Wake Lock API
  - 起動ロック
  - WakeLockSentinel
  - 画面
  - 画面 wake lock
browser-compat: api.WakeLockSentinel.release_event
translation_of: Web/API/WakeLockSentinel/release_event
---
{{securecontext_header}}{{DefaultAPISidebar("Screen Wake Lock API")}}

**`release`** は {{domxref("WakeLockSentinel")}} インターフェイスのイベントで、この見張りオブジェクトのハンドルが解放されたときに発行されます。

{{domxref("WakeLockSentinel")}} は `release()` メソッドにより手動で解放したり、プラットフォームの起動ロックにより自動的に解放されたりします。これは、文書がアクティブでなくなった場合や、見えなくなった場合、端末の電力が低下した場合、ユーザーが省電力モードをオンにした場合に発生する可能性があります。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などで用いるか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('release', event => { })

onrelease = event => { }
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

この例では、起動ロックが解放されたときに UI を更新します。

```js
wakeLock.addEventListener('release', () => {

  // if wake lock is released alter the UI accordingly
  statusElement.textContent = 'Wake Lock has been released';
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
