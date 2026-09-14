---
title: "CredentialsContainer: get() メソッド"
short-title: get()
slug: Web/API/CredentialsContainer/get
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

**`get()`** は {{domxref("CredentialsContainer")}} インターフェイスのメソッドで、単一の{{glossary("credential", "資格情報")}}で解決する {{jsxref("Promise")}} を返します。この認証情報は、ユーザーをウェブサイトに認証するために使用できます。

このメソッドは単一のオプション引数 `options` を受け付けます。これには以下のものを含めることができます。

- `mediation` プロパティは、ユーザーに操作への参加を求める方法と可否を示します。
  これは例えば、保存された認証情報を使用して、サイトがユーザーをサイレントにログインさせられるかどうかを制御します。
- `signal` プロパティは、{{domxref("AbortController")}} を使用して操作をキャンセルすることができます。
- 1 つ以上のプロパティ — `password`、`federated`、`identity`、`otp`、`publicKey` — が、リクエストされた[資格情報の種類](/ja/docs/Web/API/Credential_Management_API/Credential_types)を示します。設定されている場合、これらのプロパティの値には、リクエストされた種類の適切な資格情報を見つけるためにブラウザーが必要とする引数を含みます。

APIは常に単一の資格情報または`null`で履行される。複数の資格情報が利用できる状態で、ユーザーによる選択ができる場合、ブラウザはユーザーに単一の資格情報を選択するよう依頼する。

## 構文

```js-nolint
get()
get(options)
```

### 引数

- `options` {{optional_inline}}
  - : リクエストに対するオプションが含まれているオブジェクト。以下のプロパティを含むことができます。
    - `mediation` {{optional_inline}}
      - : 文字列で、クライアントアプリへアクセスするごとにユーザーがログインを要求されるかどうかを示します。値は次のいずれかです。
        - `"conditional"`
          - : 検出された資格情報は、資格情報をリクエストしているオリジンとともに、モーダルでないダイアログボックスでユーザーに示されます。実際には、このことは資格情報の自動入力（オートフィル）が利用できるということです。この機能の詳細な使用方法については、 [Sign in with a passkey through form autofill](https://web.dev/articles/passkey-form-autofill) を参照してください。 {{domxref("PublicKeyCredential.isConditionalMediationAvailable_static", "PublicKeyCredential.isConditionalMediationAvailable()")}} も同時に有益な情報を提供します。

        - `"optional"`
          - : その操作において、ユーザー介入なしで資格情報を引き渡すことが可能である場合、ユーザー介入なしの自動再認証が可能となります。ユーザー介入が必要な場合、ユーザーエージェントはユーザーに認証を依頼します。この値は、ユーザーがログインダイアログボックスを目にして驚いたり混乱したりしないという合理的な確信が持てる状況を意図しています。例えば、自動的にユーザーがログインしないサイトで、ユーザーが「ログイン/サインアップ」ボタンをクリックした直後などが該当します。

        - `"required"`
          - : ユーザーには常に認証が要求されます。この値は、ユーザー認証を強制したい状況、例えば、（クレジットカード決済の確認など）機密性の高い操作実行時やユーザー切り替え時に再認証を要求する場合を意図しています。

        - `"silent"`
          - : ユーザーには認証を依頼されません。ユーザーエージェントは、できる限り自動的にユーザーを再認証してログインします。同意が必要な場合、プロミスは `null` で履行される。この値は、ウェブアプリ訪問時に、できる限り自動的にユーザーをログインできる場合に自動的にログインするよう意図しており、それができない場合は混乱を招くログインダイアログを表示しないようするためのものです。代わりに、ユーザーが明示的に「ログイン/サインアップ」ボタンをクリックするのを待つことが望ましい場合です。

        既定値は `"optional"` です。

        > [!NOTE]
        > [連合認証 (FedCM API)](/ja/docs/Web/API/FedCM_API) リクエストにおいて、`mediation` の値が `optional` または `silent` である場合、[自動再認証](/ja/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication)が試行されることがあります。これが発生するか否かは、検証中に IdP の `id_assertion_endpoint` に送信される [`is_auto_selected`](/ja/docs/Web/API/FedCM_API/IDP_integration#is_auto_selected) 引数によって伝えられ、{{domxref("IdentityCredential.isAutoSelected")}} プロパティによって認証依頼者 (RP) に伝えられます。これは、パフォーマンス評価、セキュリティ要件（IdP が自動再認証要求を拒否し、常にユーザーの介入を必要としたい場合）、および一般的な UX（IdP またはRP が自動ログインと非自動ログインの体験に対して異なる UX を表示したい場合）に有益です。

    - `signal` {{optional_inline}}
      - : 進行中の `get()` 操作を中止できる {{domxref("AbortSignal")}} オブジェクトインスタンス。中止される操作は、通常通り完了する場合（一般的に操作完了後に中止信号を受信した場合）と、`AbortError` {{domxref("DOMException")}} で拒否されることがあります。

    - `password` {{optional_inline}}
      - : このオプションは、ブラウザーに保存されている[パスワード](/ja/docs/Web/API/Credential_Management_API/Credential_types#パスワード)を {{domxref("PasswordCredential")}} オブジェクトとして取得するよう依頼します。論理値です。
    - `identity` {{optional_inline}}
      - : このオプションは、[連合アイデンティティ資格情報](/ja/docs/Web/API/Credential_Management_API/Credential_types#連合アイデンティティ資格情報) を {{domxref("IdentityCredential")}} オブジェクトとして取得するようブラウザーに依頼します。これには[連合資格情報管理 API](/ja/docs/Web/API/FedCM_API) を使用します。

        このオプションの値は、ウェブサイトが使用する特定の ID プロバイダーの詳細が含まれている {{domxref("IdentityCredentialRequestOptions")}} オブジェクトです。

    - `federated` {{optional_inline}}
      - : このオプションは、ブラウザーに[連合アイデンティティ資格情報](/ja/docs/Web/API/Credential_Management_API/Credential_types#連合アイデンティティ資格情報) を {{domxref("FederatedCredential")}} オブジェクトとして取得するよう依頼します。このインターフェイスはすでに廃止されており、利用できる場合は `identity` オプションの使用を推奨します。

        このオプションの値は、次のプロパティが設定されたオブジェクトです。
        - `protocols`
          - : リクエストされた資格情報の連合 ID プロバイダーのプロトコルを表す文字列の配列（`"openidconnect"` など）。
        - `providers`
          - : 連合 ID プロバイダーを表す文字列の配列（例えば `"https://www.facebook.com"` や `"https://accounts.google.com"`）。

    - `otp` {{optional_inline}}
      - : このオプションは、ブラウザーに[ワンタイムパスワード (OTP)](/ja/docs/Web/API/Credential_Management_API/Credential_types#ワンタイムパスワード) を {{domxref("OTPCredential")}} オブジェクトとして取得するよう依頼します。

        このオプションの値は文字列の配列であり、文字列値 `"sms"` のみが含まれていることがあります。

    - `publicKey` {{optional_inline}}
      - : このオプションは、ブラウザーに[ウェブ認証 API を使用して署名されたアサーション](/ja/docs/Web/API/Credential_Management_API/Credential_types#ウェブ認証アサーション)を {{domxref("PublicKeyCredential")}} として取得するよう要求します。

        このオプションの値は {{domxref("PublicKeyCredentialRequestOptions")}} オブジェクトです。

### 返値

{{jsxref("Promise")}} で、以下のいずれかの {{domxref("Credential")}} のサブクラスで解決します。

- {{domxref("PasswordCredential")}}
- {{domxref("IdentityCredential")}}
- {{domxref("FederatedCredential")}}
- {{domxref("OTPCredential")}}
- {{domxref("PublicKeyCredential")}}

`get()` 呼び出しで[条件付き仲介](#mediation)が指定された場合、ブラウザーの UI ダイアログを表示させて、利用可能な自動入力候補からユーザーがログイン用アカウントを選択するまでプロミスを待機中にします。

- ユーザーがブラウザ UI ダイアログの外でジェスチャーを行った場合、そのダイアログはプロミスが解決または拒否されず、ユーザーに表示されるエラー状態を発生させることなく閉じられます。
- ユーザーが資格情報を選択した場合、関連する {{domxref("PublicKeyCredential")}} が呼び出し側に返されます。

単一の資格情報が明確な形で取得できない場合、プロミスは `null` で解決されます。

### 例外

- `AbortError` {{domxref("DOMException")}}
  - : このメソッドの [`signal`](#signal) オプションに関連付けられた {{domxref("AbortController")}} の {{domxref("AbortController.abort", "abort()")}} メソッドの呼び出しにより、リクエストは中止された。

- {{domxref("IdentityCredentialError")}}
  - : {{domxref("IdentityCredential")}} をリクエストされた際、[ID アサーションエンドポイント](/ja/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint)へのリクエストが認証を検証できず、理由に関する情報が含まれているエラーレスポンスで拒否された。

- `NetworkError` {{domxref("DOMException")}}
  - : {{domxref("IdentityCredential")}} をリクエストした際、{{glossary("identity provider", "ID プロバイダー")}} (IdP) が 60 秒以内に応答しなかった、提供された資格情報が無効/見つからなかった、またはブラウザーの IdP ログイン状態が `"logged-out"` に設定されていた（FedCM ログイン状態の詳細については[ログイン状態 API を使用したログイン状態の更新](/ja/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api)を参照）。後者の場合、 IdP のログイン状態が RP に漏洩することを防ぐため、拒否処理に遅延が生じる可能性があります。

- `NotAllowedError` {{domxref("DOMException")}}
  - : 以下の状況のいずれかで発生します。
    - ユーザーがリクエストを中止した。

    - この API の使用が、以下の[権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)のいずれかによってブロックされた。
      - {{HTTPHeader("Permissions-Policy/identity-credentials-get","identity-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/publickey-credentials-get","publickey-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/otp-credentials","otp-credentials")}}

    - 呼び出し元のオリジンが[不透明オリジン](/ja/docs/Web/HTTP/Reference/Headers/Origin#null)であった。

- `SecurityError` {{domxref("DOMException")}}
  - : 呼び出し元のドメインが、有効なドメインではない。

## 例

### 連合アイデンティティ資格情報を受け取る

認証依頼者は、`identity` オプション付きで `get()` を呼び出すことで、アイデンティティ連携を利用して、ユーザーが ID プロバイダー (IdP) 経由で認証依頼者にログインするよう要求できます。典型的なリクエストは次のようになります。

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
          nonce: "******",
        },
      ],
    },
  });
}
```

詳細については、[連合資格情報管理 (FedCM) API](/ja/docs/Web/API/FedCM_API) を参照してください。この呼び出しにより、[FedCM ログインフロー](/ja/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow)で説明されているログインフローが開始されます。

`context`および`loginHint`拡張機能を含む同様の呼び出しは、次のようになります。

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      context: "signup",
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
          nonce: "******",
          loginHint: "user1@example.com",
        },
      ],
    },
  });
}
```

ID プロバイダーが [ID アサーションエンドポイント](/ja/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint)へのリクエストを検証できない場合、 `CredentialsContainer.get()` から返されるプロミスが拒否されます。

```js
async function signIn() {
  try {
    const identityCredential = await navigator.credentials.get({
      identity: {
        providers: [
          {
            configURL: "https://accounts.idp.example/config.json",
            clientId: "********",
            nonce: "******",
          },
        ],
      },
    });
  } catch (e) {
    // Handle the error in some way, for example provide information
    // to help the user succeed in a future sign-in attempt
    console.error(e);
  }
}
```

### 公開鍵資格情報の取得

以下のスニペットは、 WebAuthn の `publicKey` オプションを使用した典型的な `get()` 呼び出しを示しています。

```js
const publicKey = {
  challenge: new Uint8Array([139, 66, 181, 87, 7, 203 /* ,… */]),
  rpId: "acme.com",
  allowCredentials: [
    {
      type: "public-key",
      id: new Uint8Array([64, 66, 25, 78, 168, 226, 174 /* ,… */]),
    },
  ],
  userVerification: "required",
};

navigator.credentials.get({ publicKey });
```

`get()` の呼び出しが成功すると、WebAuthn の {{domxref("CredentialsContainer.create()", "create()")}} によって事前に作成され、ユーザーの認証に使用された公開鍵認証情報を表す {{domxref("PublicKeyCredential")}} オブジェクトインスタンスで解決するプロミスが返されます。その {{domxref("PublicKeyCredential.response")}} プロパティには、認証器データ、署名、ユーザーハンドルなど、いくつかの有用な情報へのアクセスを提供する {{domxref("AuthenticatorAssertionResponse")}} オブジェクトが含まれています。

```js
navigator.credentials.get({ publicKey }).then((publicKeyCredential) => {
  const response = publicKeyCredential.response;

  // Access authenticator data ArrayBuffer
  const authenticatorData = response.authenticatorData;

  // Access client JSON
  const clientJSON = response.clientDataJSON;

  // Access signature ArrayBuffer
  const signature = response.signature;

  // Access userHandle ArrayBuffer
  const userHandle = response.userHandle;
});
```

このデータの一部はサーバー上に保存する必要があります。例えば、認証者が資格情報作成に使用された本物の秘密鍵を所有していることを証明するための `signature` や、ユーザーを資格情報、ログイン試行、その他のデータと関連付けるための `userHandle` などです。

全体的なフローの詳細については、[ユーザー認証](/ja/docs/Web/API/Web_Authentication_API#ユーザーの認証)を参照してください。

### ワンタイムパスワードの取得

以下のコードは、SMS メッセージが到着した際にブラウザーの許可フローを起動します。許可が与えられた場合、プロミスは `OTPCredential` オブジェクトで解決されます。含まれる `code` 値は、{{htmlelement("input")}} フォーム要素の値として設定され、その後送信されます。

```js
navigator.credentials
  .get({
    otp: { transport: ["sms"] },
    signal: ac.signal,
  })
  .then((otp) => {
    input.value = otp.code;
    if (form) form.submit();
  })
  .catch((err) => {
    console.error(err);
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
