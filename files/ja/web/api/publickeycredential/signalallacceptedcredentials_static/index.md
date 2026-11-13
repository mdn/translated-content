---
title: "PublicKeyCredential: signalAllAcceptedCredentials() 静的メソッド"
short-title: signalAllAcceptedCredentials()
slug: Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static
l10n:
  sourceCommit: a060aa315813bd1e69e4a43d7aed241f649e7e0d
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`signalAllAcceptedCredentials()`** は {{domxref("PublicKeyCredential")}} インターフェイスの静的メソッドで、[認証依頼者](https://en.wikipedia.org/wiki/Relying_party) (RP) サーバーが具体的なユーザーについて保持している、すべての有効な[資格情報 ID](/ja/docs/Web/API/PublicKeyCredentialRequestOptions#id) を認証器に通知します。

これにより、認証器は資格情報情報を更新し、削除されたアカウントの資格情報など、RP によって認識できなくなったすべての資格情報を除去することができます。このメソッドは、ユーザーが RP に対して認証を行うたびに呼び出す必要があります。

`signalAllAcceptedCredentials()` は、ユーザーに属する機密情報を公開することになるため、現在のユーザーが認証されたとき（登録またはログイン後、あるいはユーザーが資格情報を削除したとき）にのみ呼び出す必要があります。

## 構文

```js-nolint
signalAllAcceptedCredentials(options)
```

### 引数

- `options`
  - : 有効な資格情報を表すオブジェクトで、以下のプロパティが含まれています．
    - `allAcceptedCredentialIds`
      - : まだ有効な [資格情報の `id`](/ja/docs/Web/API/PublicKeyCredentialRequestOptions#id) を表す、Base64URL で符号化された文字列の配列。
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
  - : `userId` または `allAcceptedCredentialIds` のどちらかの要素が、有効な base64url で符号化された文字列ではありません。

## 解説

ユーザーの認証器に格納されている[検出可能な資格情報](/ja/docs/Web/API/Web_Authentication_API#検出可能な資格情報と条件付き仲介)（例えば、[パスキー](/ja/docs/Web/Security/Authentication/Passkeys)）に関する情報が、サーバーとの同期がずれてしまう可能性があります。この現象は通常、ユーザーが RP のウェブアプリから資格情報を削除した際、認証器を更新しなかった場合に発生します。

ユーザーが「検出可能な資格情報」を使用してログインしようとすると、認証器から一連の資格情報が表示され、その中から選べます。選択された資格情報は、ログイン処理を行うために RP のウェブアプリに返されます。ユーザーが RP サーバーから削除された資格情報を選択した場合、その資格情報は認識されず、ログインは失敗します。これは、成功するはずの資格情報のみが表示されることを期待しているユーザーにとって、混乱を招く使い勝手となります。

この課題を軽減するため、ユーザーが資格情報を削除したりログインしたりするたびに、RP ウェブアプリは `signalAllAcceptedCredentials()` を呼び出し、そのユーザーに対してどの資格情報が今も有効であるかを認証器に指示する必要があります。この情報をどのように処理するかは認証器に委ねられますが、指定された資格情報リストと情報を同期させることが期待されています。リストに現れない資格情報は除去されるべきであり、これにより、ログイン UI に存在しない資格情報がユーザーに提示されることを防ぐことができます。

> [!WARNING]
> `signalAllAcceptedCredentials()` を呼び出す際は注意が必要です。リストに含まれていない有効な資格情報は、認証器から削除されることを意図しており、その結果、ユーザーはその資格情報を使用してログインできなくなります。空のリストを渡すと、ユーザーの資格情報がすべて削除される可能性があります。一部の認証器では、前回削除された資格情報 ID をリストに記載して `signalAllAcceptedCredentials()` を再度呼び出すことで、資格情報を復元できる場合があります。

`signalAllAcceptedCredentials()` は、現在のユーザーが認証された場合にのみ呼び出すべきです。これは、ユーザーに属する機密情報を公開してしまうためです。RP サーバー上に存在しない資格情報でログインを試みたためにユーザーが認証されなかった場合は、代わりに、認識されない資格情報を引数として {{domxref("PublicKeyCredential.signalUnknownCredential_static", "PublicKeyCredential.signalUnknownCredential()")}} を呼び出し、認証器がその資格情報を削除できるようにする必要があります。より詳細な比較については、[検出可能な資格情報の同期方法](/ja/docs/Web/API/Web_Authentication_API#検出可能な資格情報と条件付き仲介)を参照してください。

## 例

### 資格情報の受け入れを示す

この例では、`signalAllAcceptedCredentials()` メソッドを呼び出し、ユーザーが所有するすべての資格情報の詳細（ログインに使用したばかりのものを含む）を渡します。その結果、認証器は、RP との同期が保たれるよう、自身の資格情報のコピーを更新する必要があります。

```js
if (PublicKeyCredential.signalAllAcceptedCredentials) {
  await PublicKeyCredential.signalAllAcceptedCredentials({
    rpId: "example.com",
    userId: "M2YPl-KGnA8", // base64url で符号化されたユーザー ID
    allAcceptedCredentialIds: [
      // base64url で符号化された資格情報 ID
      "vI0qOggiE3OT01ZRWBYz5l4MEgU0c7PmAA",
      // …
    ],
  });
}
```

その他のサンプルコードについては、 [Keep passkeys consistent with credentials on your server with the Signal API](https://developer.chrome.com/docs/identity/webauthn-signal-api) on developer.chrome.com (2024) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("PublicKeyCredential.signalCurrentUserDetails_static", "PublicKeyCredential.signalCurrentUserDetails()")}}
- {{domxref("PublicKeyCredential.signalUnknownCredential_static", "PublicKeyCredential.signalUnknownCredential()")}}
- [Keep passkeys consistent with credentials on your server with the Signal API](https://developer.chrome.com/docs/identity/webauthn-signal-api) - developer.chrome.com (2024)
