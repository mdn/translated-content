---
title: "CredentialsContainer: preventSilentAccess() メソッド"
short-title: preventSilentAccess()
slug: Web/API/CredentialsContainer/preventSilentAccess
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

**`preventSilentAccess()`** は {{domxref("CredentialsContainer")}} インターフェイスのメソッドで、現在のオリジンへの今後の訪問で自動ログインを許可するかどうかを指定するフラグを設定し、それから `undefined` に解決する {{jsxref("Promise")}} を返します。
例えば、ユーザーがウェブサイトからログアウトした後、次回サイト訪問時に自動的にログインされないようにするために、このメソッドを呼び出すことができます。
仲介はオリジンごとに異なり、ブラウザーに保存された認証情報の追加チェックポイントとして機能し、アカウントのログイン状態をユーザーに通知します。このメソッドは通常、ユーザーがウェブサイトからログアウトした後に呼び出され、このユーザーのログイン情報が次回サイト訪問時に自動的に渡されないようにします。

{{domxref("PublicKeyCredential")}} を使用する場合、このメソッドは通常は効果がありません。このような認証手段は通常、ユーザーの操作を必要とします。ただし、特定の認証手段が除外される可能性はあり、そうでなければ暗黙で動作する可能性があります。

仕様書の早期のバージョンでは、このメソッドは `requireUserMediation()` と呼ばれていました。
[ブラウザーの互換性](/ja/docs/Web/API/CredentialsContainer#ブラウザーの互換性)の節に対応状況の詳細があります。

## 構文

```js-nolint
preventSilentAccess()
```

### 引数

なし。

### 返値

{{jsxref("Promise")}} で、 `undefined` に解決します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
