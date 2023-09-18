---
title: "Navigator: wakeLock プロパティ"
short-title: wakeLock
slug: Web/API/Navigator/wakeLock
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{ApiRef("Screen Wake Lock API")}}{{securecontext_header}}

**`wakeLock`** は読み取り専用のプロパティで、 {{DOMxRef("WakeLock")}} インターフェイスを返します。これにより、文書が画面起動ロックを取得することができます。画面起動ロックが有効であれば、ユーザーエージェントは端末が画面を暗くしたり、画面を完全にオフにしたり、スクリーンセーバーを表示したりすることを防ぐよう試みることができます。

## 構文

```js-nolint
navigator.wakeLock
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("WakeLock.request","WakeLock.request()")}}
- [画面起動ロック API](/ja/docs/Web/API/Screen_Wake_Lock_API)
- [ブログ投稿 - Stay awake with the Screen Wake Lock API](https://web.dev/wake-lock/)
