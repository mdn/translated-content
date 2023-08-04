---
title: PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
slug: Web/API/PublicKeyCredential/isUserVerifyingPlatformAuthenticatorAvailable_static
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`isUserVerifyingPlatformAuthenticatorAvailable()`** は {{domxref("PublicKeyCredential")}} インターフェイスの静的メソッドで、ユーザー検証プラットフォーム認証機能が利用できる場合に `true` に解決される {{jsxref("Promise")}} を返すメソッドです。

ユーザー検証プラットフォーム認証機能は、クライアント端末の一部であり（一般に取り外し不可）、ユーザーを識別するためにユーザーの操作を必要とする多要素認証機能の一種です。一般的なユーザー検証プラットフォーム認証機能には、以下のものがあります。

- Touch ID または Face ID (macOS や iOS)
- Windows Hello (Windows)
- Android の端末アンロック（指紋認証、顔認証、PIN、など）

> **メモ:** このメソッドは最上位のコンテキストでのみ使用することができます。例えば {{HTMLElement("iframe")}} では使用できません。

## 構文

```js-nolint
isUserVerifyingPlatformAuthenticatorAvailable()
```

### 引数

なし。

### 返値

ユーザーを認証するプラットフォーム認証が利用できるかどうかを示す論理値に解決する {{jsxref("Promise")}} です。

> **メモ:** このメソッドは静的メソッドであり、インスタンスではなく {{domxref("PublicKeyCredential")}} インターフェイス上で直接呼び出されます。

> **メモ:** 以前の版の仕様では、論理値は、そのような認証装置が存在することを開示することに対するユーザーの同意も伝えていました。

## 例

```js
PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
  .then((available) => {
    if (available) {
      // We can proceed with the creation of a PublicKeyCredential
      // with this authenticator
    } else {
      // Use another kind of authenticator or a classical login/password
      // workflow
    }
  }).catch((err) => {
    // Something went wrong
    console.error(err);
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Windows Hello](https://docs.microsoft.com/windows-hardware/design/device-experiences/windows-hello)
- [Web Authentication and Windows Hello - MSDN Guide](https://docs.microsoft.com/archive/microsoft-edge/legacy/developer/)、特に [special considerations mentioning `isUserVerifyingPlatformAuthenticator()`](https://docs.microsoft.com/archive/microsoft-edge/legacy/developer/#special-considerations-for-windows-hello)
