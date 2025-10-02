---
title: "CredentialsContainer: create() メソッド"
short-title: create()
slug: Web/API/CredentialsContainer/create
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

**`create()`** は {{domxref("CredentialsContainer")}} インターフェイスのメソッドで、新しい{{glossary("credential", "資格情報")}}を作成します。この資格情報は保存され、後で {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} メソッドを使用して取得できます。取得した認証情報は、ウェブサイトがユーザーを認証するために使用できます。

このメソッドは、3 種類の異なる資格情報に対応しています。

- パスワード資格情報: ユーザーがパスワードを使用してログインできるようにしま。
- 連合資格情報: ユーザーが連合 ID プロバイダーを使用してログインできるようにします。
- 公開鍵資格情報: ユーザーがプラットフォームに組み込まれた生体認証リーダーや取り外し可能なハードウェアトークンなどの認証装置を使用してログインできるようにします。

[連合資格情報管理 API (FedCM)](/ja/docs/Web/API/FedCM_API) が、連合資格情報型を置き換えていることに注意してください。

## 構文

```js-nolint
create()
create(options)
```

### 引数

- `options` {{optional_inline}}
  - : リクエストされた新しい `Credentials` オブジェクトのオプションを格納するオブジェクト。以下のプロパティを格納することができます。
    - `signal` {{optional_inline}}
      - : 進行中の `create()` 処理を中止させるための {{domxref("AbortSignal")}} オブジェクトのインスタンスです。中止された操作は、（完全に処理が終了した後に中止を受け取った場合は）正常に完了することもあれば、`AbortError` の {{domxref("DOMException")}} で拒否されることもあります。

    以下のプロパティはそれぞれ、作成する「資格情報の種類」を表します。1 つだけを指定する必要があります。
    - `federated` {{optional_inline}}
      - : 連合 ID プロバイダーの資格情報を作成するための要件を格納した {{domxref("FederatedCredentialInit")}} オブジェクトです。
    - `password` {{optional_inline}}
      - : パスワード資格情報を作成するための要件を格納した {{domxref("PasswordCredentialInit")}} オブジェクトです。
    - `publicKey` {{optional_inline}}
      - : 公開鍵資格情報を作成するための要件を格納した {{domxref("PublicKeyCredentialCreationOptions")}} オブジェクトです。 `create()` 呼び出しにより、ユーザーエージェントが認証器を介して新しい資格情報を生成するようリクエストします。これは、新規アカウントの登録、または既存アカウントへの新しい非対称鍵ペアの関連付けのいずれかの目的で行われます。

        > [!NOTE]
        > `create()` を `publicKey` 引数付きで使用すると、 {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)がサーバーに設定されている場合にブロックされることがあります。

### 返値

以下のいずれかに解決する {{jsxref("Promise")}} です。

- {{domxref("FederatedCredential")}}: 資格情報の種類が `federated` であった場合。
- {{domxref("PasswordCredential")}}: 資格情報の種類が `password` であった場合。
- {{domxref("PublicKeyCredential")}}: 資格情報の種類が `publicKey` であった場合。

資格情報オブジェクトを作成できない場合、このプロミスは `null` で解決されます。

### 例外

- {{jsxref("TypeError")}}
  - : {{domxref("PasswordCredential")}} 作成リクエストで、`id`、`origin`、`password` が指定されなかった（空だった）場合。
- `NotAllowedError` {{domxref("DOMException")}}
  - : 以下のような原因で発生します。
    - {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)により、使用がブロックされた。
    - この関数がオリジンをまたいで呼び出されたが、iframe の [`allow`](/ja/docs/Web/HTML/Reference/Elements/iframe#allow) 属性に適切な {{HTTPHeader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} ポリシーが設定されていない。
    - この関数がオリジン間で呼び出されたが、`<iframe>` で{{glossary("transient activation", "一時的な有効化")}}が行われていない。
    - [検出可能な資格情報](/ja/docs/Web/API/Web_Authentication_API#検出可能な資格情報と条件付き仲介)の作成を試みているが（`create()` 呼び出しの {{domxref("PublicKeyCredentialCreationOptions")}} オプションで [`residentKey`](/ja/docs/Web/API/PublicKeyCredentialCreationOptions#residentkey) を `required`に設定して）、ユーザーが検出可能な資格情報に対応するセキュリティキーを所持しておらず、操作をキャンセルする。
- `AbortError` {{domxref("DOMException")}}
  - : 操作が中止された。

## 例

### パスワード資格情報の作成

この例では、パスワード資格情報を {{domxref("PasswordCredentialInit")}} から作成します。

```js
const credInit = {
  id: "1234",
  name: "Serpentina",
  origin: "https://example.org",
  password: "the last visible dog",
};

const makeCredential = document.querySelector("#make-credential");

makeCredential.addEventListener("click", async () => {
  const cred = await navigator.credentials.create({
    password: credInit,
  });
  console.log(cred.name);
  // Serpentina
  console.log(cred.password);
  // the last visible dog
});
```

### 連合資格情報の作成

この例では、連合資格情報を {{domxref("FederatedCredentialInit")}} オブジェクトから作成します。

```js
const credInit = {
  id: "1234",
  name: "Serpentina",
  origin: "https://example.org",
  protocol: "openidconnect",
  provider: "https://provider.example.org",
};

const makeCredential = document.querySelector("#make-credential");

makeCredential.addEventListener("click", async () => {
  const cred = await navigator.credentials.create({
    federated: credInit,
  });
  console.log(cred.name);
  console.log(cred.provider);
});
```

### 公開鍵資格情報の作成

この例では、公開鍵資格情報を {{domxref("PublicKeyCredentialCreationOptions")}} オブジェクトから作成します。

```js
const publicKey = {
  challenge: challengeFromServer,
  rp: { id: "acme.com", name: "ACME Corporation" },
  user: {
    id: new Uint8Array([79, 252, 83, 72, 214, 7, 89, 26]),
    name: "jamiedoe",
    displayName: "Jamie Doe",
  },
  pubKeyCredParams: [{ type: "public-key", alg: -7 }],
};

const publicKeyCredential = await navigator.credentials.create({ publicKey });
```

`create()` の呼び出しに成功すると、 {{domxref("PublicKeyCredential")}} オブジェクトインスタンスに解決するプロミスを返します。これは、後に WebAuthn {{domxref("CredentialsContainer.get()", "get()")}} 呼び出しでユーザーを認証するために使用できる公開鍵資格情報を表しています。その {{domxref("PublicKeyCredential.response")}} プロパティには {{domxref("AuthenticatorAttestationResponse")}} オブジェクトが格納され、認証データ、公開鍵、転送メカニズムなど、いくつかの有益な情報にアクセスすることができます。

```js
navigator.credentials.create({ publicKey }).then((publicKeyCredential) => {
  const response = publicKeyCredential.response;

  // attestationObject ArrayBuffer にアクセス
  const attestationObj = response.attestationObject;

  // client JSON にアクセス
  const clientJSON = response.clientDataJSON;

  // 認証器データの ArrayBuffer を返す
  const authenticatorData = response.getAuthenticatorData();

  // 公開鍵の ArrayBuffer を返す
  const pk = response.getPublicKey();

  // 公開鍵アルゴリズム識別子を返す
  const pkAlgo = response.getPublicKeyAlgorithm();

  // 許可されたトランスポートの配列を返す
  const transports = response.getTransports();
});
```

このデータの一部は、この資格情報に対する将来の認証処理のためにサーバーに格納する必要があります。例えば、公開鍵、使用するアルゴリズム、許可されるトランスポートなどです。

> [!NOTE]
> 全体的にどのように作業が流れるかについての詳しい情報は、[キーペアを生成してユーザーを登録](/ja/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
