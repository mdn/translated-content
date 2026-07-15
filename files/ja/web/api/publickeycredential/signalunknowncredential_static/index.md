---
title: "PublicKeyCredential: signalUnknownCredential() 静的メソッド"
short-title: signalUnknownCredential()
slug: Web/API/PublicKeyCredential/signalUnknownCredential_static
l10n:
  sourceCommit: a060aa315813bd1e69e4a43d7aed241f649e7e0d
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`signalUnknownCredential()`** は {{domxref("PublicKeyCredential")}} インターフェイスの静的メソッドで、[資格情報 ID](/ja/docs/Web/API/PublicKeyCredentialRequestOptions#id) が[認証依頼者](https://en.wikipedia.org/wiki/Relying_party) (RP) サーバーによって認識されなかったことを、認証システムに通知します。

これにより、認証器は、削除されたアカウントや、認証器上で生成・保存されたもののサーバー上で適切に更新されていないアカウントなど、RP によって許可されていない資格情報を除去することができます。通常、このメソッドは、RP がアカウントの詳細情報を利用できなかったためにログインに失敗した後に呼び出されます。機密情報を公開しないため、現在のユーザーが認証されていない場合でも使用することができます。

## 構文

```js-nolint
signalUnknownCredential(options)
```

### 引数

- `options`
  - : 認識されていない資格情報を表すオブジェクトで、以下のプロパティが含まれています。
    - `credentialId`
      - : 認識されていない [資格情報 `id`](/ja/docs/Web/API/PublicKeyCredentialRequestOptions#id) を表す base64url 符号化された文字列。
    - `rpId`
      - : シグナルを送信した [`RP の ID`](/ja/docs/Web/API/PublicKeyCredentialCreationOptions#id_2) を表す文字列。

### 返値

{{jsxref("undefined")}} で解決する {{jsxref("Promise")}} です。

### 例外

このプロミスには、以下の例外で拒否されます。

- `SecurityError` {{domxref("DOMException")}}
  - : RP のドメインが有効ではありません。
- `TypeError` {{domxref("DOMException")}}
  - : `credentialId` は、有効な base64url で符号化された文字列ではありません。

## 解説

ユーザーの認証器に格納されている[検出可能な資格情報](/ja/docs/Web/API/Web_Authentication_API#検出可能な資格情報と条件付き仲介)（例えば、[パスキー](/ja/docs/Web/Security/Authentication/Passkeys)）に関する情報が、サーバーとの同期を失う可能性があります。この現象は通常、ユーザーが RP のウェブアプリから資格情報を削除した際、認証器を更新しなかった場合に発生します。

ユーザーが「検出可能な資格情報」を使用してログインしようとすると、認証器から一連の資格情報が表示され、その中から選べます。選択された資格情報は、ログイン処理を行うために RP のウェブアプリに返されます。ユーザーが RP サーバーから削除された資格情報を選択した場合、その資格情報は認識されず、ログインは失敗します。これは、成功するはずの資格情報のみが表示されることを期待しているユーザーにとって、混乱することになります。

この課題を軽減するため、検出可能な資格情報ベースのログインが失敗するたびに、RP のウェブアプリで `signalUnknownCredential()` を呼び出し、資格情報 ID が認識されなかったことを認証器に通知する必要があります。

この情報の処理方法は認証器の裁量に委ねられますが、認証器と認証依頼者に保存されているデータに不一致が生じないよう、関連する資格情報を削除することが期待されます。

さらに、ウェブアプリが認証器上で検出可能な資格情報を作成できたものの、何らかの理由でその資格情報をサーバーにアップロードできない場合にも、`signalUnknownCredential()` が呼び出される可能性があります。

`signalUnknownCredential()` は、機密情報を公開しないため、現在のユーザーが認証されていない場合でも呼び出すことができます。

## 例

### 認識されていない資格情報を通知する

この例では、[`get()`](/ja/docs/Web/API/CredentialsContainer/get) 呼び出しを通じて、検出可能な資格情報を使用してログインを試みます。資格情報は正常に返され、その ID と内容が定数に格納されます。

内容は、ユーザーをログインさせるために [`fetch()`](/ja/docs/Web/API/Window/fetch) リクエストを介して RP サーバーに送信されますが、RP がそのユーザーを認識しないため（例えば、その資格情報が以前に RP から削除されていたためなど）、リクエストは {{httpstatus("404")}} レスポンスで失敗します。

その結果、`rpId` と資格情報 ID を引数として `signalUnknownCredential()` メソッドを呼び出し、その資格情報について RP が認識していないことを認証器に通知します。これにより、認証器は、同じ問題が再発しないよう、その資格情報を削除するはずです。

```js
const credential = await navigator.credentials.get({
  challenge: new Uint8Array([139, 66, 181, 87, 7, 203 /* … */]),
  rpId: "example.com",
  allowCredentials: [],
  // allowCredentials リストが空の場合、ユーザーには
  // 検出可能な資格情報のみを紹介する
});

// base64url で符号化された資格情報 ID、
// たとえば "vI0qOggiE3OT01ZRWBYz5l4MEgU0c7PmAA"
const credID = credential.id;
// RP サーバーに送信する内容を取得する
const payload = credential.toJSON();

const result = await fetch("/login", {
  // fetch() のオプションで、リクエスト本文に内容が含まれる
});

// 資格情報の不足による認証失敗を検出する
if (result.status === 404) {
  if (PublicKeyCredential.signalUnknownCredential) {
    await PublicKeyCredential.signalUnknownCredential({
      rpId: "example.com",
      credentialId: credID,
    });
  } else {
    // ユーザーに対し、認証器から資格情報を削除するよう促す
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("PublicKeyCredential.signalAllAcceptedCredentials_static", "PublicKeyCredential.signalAllAcceptedCredentials()")}}
- {{domxref("PublicKeyCredential.signalCurrentUserDetails_static", "PublicKeyCredential.signalCurrentUserDetails()")}}
- [Keep passkeys consistent with credentials on your server with the Signal API](https://developer.chrome.com/docs/identity/webauthn-signal-api) - developer.chrome.com (2024)
