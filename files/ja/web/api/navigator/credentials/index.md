---
title: Navigator.credentials
slug: Web/API/Navigator/credentials
---

{{securecontext_header}}{{APIRef("")}}

**`credentials`** は {{domxref("Navigator")}} インターフェイスのプロパティで、リクエストの資格情報のメソッドを公開する {{domxref("CredentialsContainer")}} インターフェイスを返します。 {{domxref("CredentialsContainer")}} インターフェイスはサインインやサインアウトに成功した場合など、興味深いイベントが発生したことをユーザーエージェントに通知したりもします。このインターフェイスは機能検出に使用することができます。

## 構文

```
var credentialsContainer = navigator.credentials
```

### Value

{{domxref("CredentialsContainer")}} インターフェイスです。

## 例

```js
if ("credentials" in navigator) {
  navigator.credentials.get({ password: true }).then(function (creds) {
    //資格情報付きで何かを行う
  });
} else {
  //Handle sign-in the way you did before.
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.Navigator.credentials")}}
