---
title: Navigator.wakeLock
slug: Web/API/Navigator/wakeLock
tags:
  - API
  - リファレンス
  - Screen Wake Lock API
browser-compat: api.Navigator.wakeLock
translation_of: Web/API/Navigator/wakeLock
---
{{ApiRef("Screen Wake Lock API")}}{{SeeCompatTable}}{{securecontext_header}}

**`wakeLock`** は読み取り専用のプロパティで、 {{DOMxRef("WakeLock")}} インターフェイスを返します。これにより、文書が画面起動ロックを取得することができます。画面起動ロックが有効であれば、ユーザーエージェントは端末が画面を暗くしたり、画面を完全にオフにしたり、スクリーンセーバーを表示したりすることを防ぐよう試みることができます。

## 構文

```js
const wakeLock = navigator.wakeLock;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("WakeLock.request","WakeLock.request()")}}
- [Screen Wake Lock API](/en-US/docs/Web/API/Screen_Wake_Lock_API)
- [Blog post - Stay awake with the Screen Wake Lock API](https://web.dev/wakelock/)
