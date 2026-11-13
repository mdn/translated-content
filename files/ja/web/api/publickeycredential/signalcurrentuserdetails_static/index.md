---
title: "PublicKeyCredential: signalCurrentUserDetails() 静的メソッド"
short-title: signalCurrentUserDetails()
slug: Web/API/PublicKeyCredential/signalCurrentUserDetails_static
l10n:
  sourceCommit: a060aa315813bd1e69e4a43d7aed241f649e7e0d
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`signalCurrentUserDetails()`** は {{domxref("PublicKeyCredential")}} インターフェイスの静的メソッドで、特定のユーザーが [認証依頼者](https://en.wikipedia.org/wiki/Relying_party) (RP) サーバー上でユーザー名や表示名を更新したことを、認証器に通知します。

これにより、認証器はユーザーアカウントの詳細情報を更新し、RP が保持する情報との同期を保つことができます。この機能は、現在のユーザーが認証されている場合（ログイン後、または RP のウェブアプリ上で資格情報に関連付けられたメタデータを変更した場合）にのみ使用すべきです。

## 構文

```js-nolint
signalCurrentUserDetails(options)
```

### 引数

- `options`
  - : 更新されたユーザー情報を表すオブジェクトで、以下のプロパティが含まれています。
    - `displayName`
      - : 更新されたユーザーの [`displayName`](/ja/docs/Web/API/PublicKeyCredentialCreationOptions#displayname) を表す文字列。
    - `name`
      - : 更新されたユーザーの [`name`](/ja/docs/Web/API/PublicKeyCredentialCreationOptions#name_2) を表す文字列。
    - `rpId`
      - : シグナルを送信した [`RP の ID`](/ja/docs/Web/API/PublicKeyCredentialCreationOptions#id_2) を表す文字列。
    - `userId`
      - : この資格情報が関連付けられている [`ユーザーの ID`](/ja/docs/Web/API/PublicKeyCredentialCreationOptions#id_3) を表す、Base64URL で符号化された文字列。

### 返値

{{jsxref("undefined")}} で解決する {{jsxref("Promise")}} です。

### 例外

このプロミスには、以下の例外で拒否されます。

- `SecurityError` {{domxref("DOMException")}}
  - : RP のドメインが有効ではありません。
- `TypeError` {{domxref("DOMException")}}
  - : `credentialId` は、有効な base64url で符号化された文字列ではありません。

## 解説

ユーザーの認証器に格納されている [検出可能な資格情報](/ja/docs/Web/API/Web_Authentication_API#検出可能な資格情報と条件付き仲介)（例えば、[パスキー](/ja/docs/Web/Security/Authentication/Passkeys)）に関する情報が、サーバーとの同期を失う可能性があります。この状態は、ユーザーが RP のウェブアプリ上でユーザー名や表示名を更新した際、認証器を更新しなかった場合に発生する可能性があります。

次に、ユーザーが検出可能な資格情報を使用してログインしようとすると、関連する UI 上ではまだ古いユーザー名や表示名が付いた資格情報が表示されるため、ユーザーに混乱を招く可能性があります。

この課題を避けるには、ユーザーがユーザーアカウントの詳細を更新したりログインしたりするたびに、RP ウェブアプリで `signalCurrentUserDetails()` を呼び出し、ユーザー情報が更新されたことを認証器に指示する必要があります。この情報の処理方法は認証器次第ですが、指定された更新内容に基づいてユーザー情報を同期することが期待されます。

## 例

### 現在のユーザーの詳細情報のシグナル

この例では、`signalCurrentUserDetail()` メソッドを呼び出し、ユーザーが RP で編集したばかりの資格情報の詳細を渡します。その結果、認証器は、RP との同期が保たれるよう、自分自身で資格情報のコピーを更新する必要があります。

```js
if (PublicKeyCredential.signalCurrentUserDetails) {
  await PublicKeyCredential.signalCurrentUserDetails({
    rpId: "example.com",
    userId: "M2YPl-KGnA8", // base64url で符号化されたユーザー ID
    name: "a.new.email.address@example.com", // ユーザー名
    displayName: "Maria Sanchez",
  });
} else {
  // ユーザーに対し、認証器で登録情報を更新するよう促す
}
```

その他のサンプルコードについては、 [Keep passkeys consistent with credentials on your server with the Signal API](https://developer.chrome.com/docs/identity/webauthn-signal-api) - developer.chrome.com (2024) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("PublicKeyCredential.signalAllAcceptedCredentials_static", "PublicKeyCredential.signalAllAcceptedCredentials()")}}
- {{domxref("PublicKeyCredential.signalUnknownCredential_static", "PublicKeyCredential.signalUnknownCredential()")}}
- [Keep passkeys consistent with credentials on your server with the Signal API](https://developer.chrome.com/docs/identity/webauthn-signal-api) - developer.chrome.com (2024)
