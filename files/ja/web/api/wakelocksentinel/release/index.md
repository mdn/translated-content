---
title: WakeLockSentinel.release()
slug: Web/API/WakeLockSentinel/release
tags:
  - API
  - Method
  - リファレンス
  - 画面起動ロック API
  - 起動ロック
  - WakeLockSentinel
  - 画面
browser-compat: api.WakeLockSentinel.release
translation_of: Web/API/WakeLockSentinel/release
---
{{securecontext_header}}{{DefaultAPISidebar("Screen Wake Lock API")}}

**`release()`** は {{domxref("WakeLockSentinel")}} インターフェイスのメソッドで、 {{domxref("WakeLockSentinel")}} を返し、この見張り (sentinel) の解放に成功したら解決する {{jsxref("Promise")}} を返します。

## 構文

```js
WakeLockSentinel.release().then(...);
```

### 引数

なし。

### 返値

`undefined` で解決する {{jsxref("Promise")}} を返します。

### 例外

例外は発生しません。起動ロックが解放されたかどうかを確認するには {{domxref("WakeLockSentinel/release_event", "release")}} イベントを待ち受けしてください。

## 例

この例では、ユーザーがボタンをクリックすると {{domxref("WakeLockSentinel")}} が解放されます。

```js
wakeLockOffButton.addEventListener('click', () => {
  WakeLockSentinel.release();
})
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("WakeLockSentinel")}}
- {{DOMxRef("WakeLock.request", "navigator.wakeLock.request()")}}
