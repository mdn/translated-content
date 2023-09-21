---
title: "Navigator: credentials プロパティ"
short-title: credentials
slug: Web/API/Navigator/credentials
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{securecontext_header}}{{APIRef("")}}

**`credentials`** は {{domxref("Navigator")}} インターフェイスのプロパティで、リクエストの資格情報のメソッドを公開する {{domxref("CredentialsContainer")}} インターフェイスを返します。 {{domxref("CredentialsContainer")}} インターフェイスはログインやログアウトに成功した場合など、興味深いイベントが発生したことをユーザーエージェントに通知したりもします。このインターフェイスは機能検出に使用することができます。

## 値

{{domxref("CredentialsContainer")}} インターフェイスです。

## 例

```js
if ("credentials" in navigator) {
  navigator.credentials.get({ password: true }).then((creds) => {
    //資格情報付きで何かを行う
  });
} else {
  // 以前の方法でログインを扱う
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
