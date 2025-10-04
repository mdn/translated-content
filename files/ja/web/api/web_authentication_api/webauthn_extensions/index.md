---
title: ウェブ認証の拡張機能
slug: Web/API/Web_Authentication_API/WebAuthn_extensions
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("Web Authentication API")}}

[ウェブ認証 API](/ja/docs/Web/API/Web_Authentication_API) には拡張機能システムが備わっています。これは、資格情報の作成時 ({{domxref("CredentialsContainer.create()", "navigator.credentials.create()")}}) または認証 ({{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}}) 操作時にリクエストできる追加機能です。本記事では、ウェブ認証 (WebAuthn) 拡張機能のリクエスト方法、それらのリクエストに対する応答情報の取得方法、利用可能な拡張機能（ブラウザーの対応状況や想定される入力・出力を含む）について説明します。

## WebAuthn 拡張機能の使い方

{{domxref("CredentialsContainer.create()", "navigator.credentials.create()")}} または {{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}} を呼び出す際、WebAuthnフローを開始するために必要な `publicKey` オブジェクト引数には、`extensions` プロパティを含めることができます。`extensions` の値はそれ自体がオブジェクトであり、そのプロパティは、呼び出すメソッドにおいて信頼当事者が使用をリクエストしたい拡張機能の入力値となります。

裏側では、入力はユーザーエージェントや認証者によって処理されます。

たとえば、`create()` 呼び出しの `publicKey` オブジェクトでは、次の 2 つの拡張機能の使用をリクエストしたい場合があります。

1. `credProps` 拡張機能。 認証依頼者は `credProps` を設定することで、登録後に資格情報が常駐/検出可能かどうかをブラウザーが認証依頼者に通知するようリクエストします。これは `publicKey.authenticatorSelection.residentKey = "preferred"` で `create()` を呼び出す際に有用です。これをリクエストするには、ブラウザが認証情報を作成する際に `publicKey.extensions.credProps = true` も設定する必要があります。使用される認証器の種類によっては、その認証情報は検出可能になります（例: FIDO2 認証器は通常検出可能にします。FIDO1/U2F セキュリティキーは非検出可能になります）。`credProps` はユーザーエージェントのみによって処理されます。
2. `minPinLength` 拡張機能により、認証依頼者は認証者の最小 PIN 長をリクエストできます。これには `extensions.minPinLength` が `true` に設定されている必要があります。`minPinLength` は認証者によって処理され、ユーザーエージェントは入力データを認証者に渡す役割のみを担います。

```js
const publicKey = {
  challenge: new Uint8Array([117, 61, 252, 231, 191, 241 /* … */]),
  rp: { id: "acme.com", name: "ACME Corporation" },
  user: {
    id: new Uint8Array([79, 252, 83, 72, 214, 7, 89, 26]),
    name: "jamiedoe",
    displayName: "Jamie Doe",
  },
  pubKeyCredParams: [{ type: "public-key", alg: -7 }],
  authenticatorSelection: {
    residentKey: "preferred",
  },
  extensions: {
    credProps: true,
    minPinLength: true,
  },
};
```

次に、`publicKey` オブジェクトを `create()` 呼び出しに渡して、認証情報の作成フローを開始できます。

```js
navigator.credentials.create({ publicKey });
```

## 拡張機能リクエスト結果の取得

`create()` 呼び出しが成功した場合、 {{jsxref("Promise")}} を返し、その {{domxref("PublicKeyCredential")}} オブジェクトで解決します。拡張機能の処理が完了すると、処理結果は応答で通知されます（ただし、すべてのケースで通知されるわけではありません。拡張機能の出力がない場合もあります）。

```js
navigator.credentials
  .create({ publicKey })
  .then((publicKeyCred) => {
    const myClientExtResults = publicKeyCred.getClientExtensionResults();
    // myClientExtResults には "credProps" 拡張機能の処理結果が出力されます

    const authData = publicKeyCred.response.getAuthenticatorData();
    // authData には認証データが含まれ、これには認証拡張処理の結果、すなわち minPinLength が含まれます
  })
  .catch((err) => {
    console.error(err);
  });
```

上記のコードスニペットが示すように、出力拡張機能の結果を確認できる場所は 2 か所あります。

1. クライアント（ユーザーエージェント）拡張処理の結果は、{{domxref("PublicKeyCredential.getClientExtensionResults()")}} メソッドを呼び出すことで取得できます。これにより、各エントリーが拡張機能の識別子文字列をキーとし、クライアントによる拡張処理の出力を値とする {{jsxref("Map", "map")}} が返されます。上記の例では、ブラウザーが `credProps` 拡張機能に対応しており、それが正しく処理された場合、`myClientExtResults` マップオブジェクトには `"credProps"` というエントリーが 1 つ含まれ、その値は `{ rk: true }` となります。これにより、作成された資格情報が実際に検出可能であることが確認されます。

2. この操作の認証データで、認証拡張機能処理の結果を確認できます。
   - `create()` 呼び出しが成功して返された `PublicKeyCredential` の場合、これは {{domxref("AuthenticatorAttestationResponse.getAuthenticatorData", "publicKeyCredential.response.getAuthenticatorData()")}} の呼び出しによって返すことができます。
   - `get()` 呼び出しが成功して返される `PublicKeyCredential` の場合、これは{{domxref("AuthenticatorAssertionResponse.authenticatorData", "publicKeyCredential.response.authenticatorData")}} プロパティで確認できます。

   認証器データは、一貫した構造を持つ {{jsxref("ArrayBuffer")}} の形式を取ります — [認証器データ](/ja/docs/Web/API/Web_Authentication_API/Authenticator_data)を参照してください。認証拡張機能の結果データは常に末尾のセクションに配置され、結果を表す [CBOR マップ](https://cbor.io/)として格納されます。完全な認証データ構造の詳細な説明については、{{domxref("AuthenticatorAssertionResponse.authenticatorData")}} を参照してください。

   例に戻ると、認証依頼者が `minPinLength` 値の受信を許可されている場合、認証データには `"minPinLength": uint` の書式でその表現が含まれます。

## 利用可能な拡張機能

以下の拡張機能は、利用可能なすべての拡張機能の網羅的なリストではありません。標準化され、少なくとも1つのレンダリングエンジンが対応していることが確認されている拡張機能のみを記載することにしました。

### `appid`

- 使用場面: 認証 ({{domxref("CredentialsContainer.get()","get()")}})
- 処理元: ユーザーエージェント
- 仕様書: [FIDO AppID Extension (appid)](https://w3c.github.io/webauthn/#sctn-appid-extension)

認証依頼者が、従来の FIDO U2F JavaScript API を使用して事前に登録された認証情報に対してアサーションを要求することを可能にし、認証情報の再登録の手間を回避します。`appid` は、 WebAuthn における `rpId` に相当する API の識別子です（ただし、`appid` は URL 形式であるのに対し、`rpId` はドメイン形式であることに留意してください）。

#### 入力

`publicKey` の `extensions` プロパティには、`appid` プロパティが含まれている必要があります。その値は、古い API で使用されるアプリケーション識別子です。例を示します。

```js
({
  extensions: {
    appid: "https://accounts.example.com",
  },
});
```

また、 FIDO U2F 資格情報の ID を `publicKey` の `allowCredentials` プロパティにリストする必要があります。例を示します。

```js
({
  allowCredentials: [
    {
      id: arrayBuffer, // デコードされたバイナリー形式の id が必要
      transports: ["nfc", "usb"],
      type: "public-key",
    },
  ],
});
```

#### 出力

アサーションで `appid` が正常に使用された場合、`appid: true` を出力します。それ以外の場合は `appid: false` を出力します。

### `appidExclude`

- 使用場面: 登録 ({{domxref("CredentialsContainer.create()","create()")}})
- 処理元: ユーザーエージェント
- 仕様書: [FIDO AppID Exclusion Extension (appidExclude)](https://w3c.github.io/webauthn/#sctn-appid-exclude-extension)

認証依頼者は、登録時に古い FIDO U2F JavaScript API を使用して事前に登録された指定された資格情報を含む認証子を登録から除外できます。これは、既定では `excludeCredentials` フィールドの内容が WebAuthn 資格情報と見なされるため必要です。この拡張機能を使用する場合、`excludeCredentials` 内に古い FIDO U2F 資格情報を含めることができ、それらはそのように認識されます。

#### 入力

`publicKey` の `extensions` プロパティに、`appidExclude` プロパティを含める必要があります。その値は、古い FIDO U2F 資格情報による認証器の除外を要求する認証依頼者の識別子です。例を示します。

```js
({
  extensions: {
    appidExclude: "https://accounts.example.com",
  },
});
```

それから、次のように FIDO U2F 資格情報を `publicKey` の `excludeCredentials` プロパティに列挙することができます。

```js
({
  excludeCredentials: [
    {
      id: arrayBuffer, // デコードされたバイナリー形式の id が必要
      transports: ["nfc", "usb"],
      type: "public-key",
    },
  ],
});
```

#### 出力

拡張機能が操作された場合、`appidExclude: true` を出力します。それ以外の場合は `appidExclude: false` を出力します。

### `credProps`

- 使用場面: 登録 ({{domxref("CredentialsContainer.create()","create()")}})
- 処理元: ユーザーエージェント
- 仕様書: [Credential Properties Extension (credProps)](https://w3c.github.io/webauthn/#sctn-authenticator-credential-properties-extension)

認証依頼者が、作成された資格情報に関する追加情報/プロパティを要求できるようにします。これは現在、`publicKey.authenticatorSelection.residentKey = "preferred"` を指定して `create()` を呼び出す場合にのみ有用です。作成された資格情報が検出可能かどうかに関する情報を要求します。

#### 入力

`publicKey` の `extensions` には、`credProps` プロパティの値が `true` で含まれている必要があります。

```js
({
  extensions: {
    credProps: true,
  },
});
```

また、`authenticatorSelection.requireResidentKey` を `true` に設定する必要があります。これは常駐キーが必須であることを示します。

```js
({
  authenticatorSelection: {
    requireResidentKey: true,
  },
});
```

#### 出力

登録された {{domxref("PublicKeyCredential")}} がクライアント側で検出可能な資格情報である場合、以下のものを出力します。

```js
({
  credProps: {
    rk: true,
  },
});
```

出力で `rk` が `false` に設定されている場合、その資格情報はサーバーサイドの資格情報です。出力に `rk` が存在しない場合、その資格情報がクライアント側で検出可能かサーバー側かは不明です。

### `credProtect`

- 使用場面: 登録 ({{domxref("CredentialsContainer.create()","create()")}})
- 処理元: 認証器
- 仕様書: [Credential Protection (credProtect)](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-credProtect-extension)

認証依頼者が、資格情報の作成時に資格情報保護ポリシーの最低要件を指定することができます。

#### 入力

`publicKey` の `extensions` プロパティには、作成する資格情報の保護レベルを指定する `credentialProtectionPolicy` プロパティと、指定されたポリシーに準拠しない資格情報を作成する代わりに `create()` 呼び出しを失敗させるかどうかを指定する論理値 `enforceCredentialProtectionPolicy` プロパティを含める必要があります。

```js
({
  extensions: {
    credentialProtectionPolicy: "userVerificationOptional",
    enforceCredentialProtectionPolicy: true,
  },
});
```

利用可能な `credentialProtectionPolicy` の値は以下の通りです。

- `"userVerificationOptional"` {{Experimental_Inline}}
  - : ユーザー認証は任意です。認証処理のために認証システムに送信される対応する `credProtect` 値は `0x01` です。
- `"userVerificationOptionalWithCredentialIDList"`
  - : ユーザー認証は、認証情報が検出可能（つまりクライアント側で検出可能）な場合にのみオプションとなります。処理のために認証器に送信される同等の `credProtect` 値は `0x02` です。
- `"userVerificationRequired"`
  - : ユーザー認証は常に必須です。認証処理のために認証システムに送信される対応する `credProtect` 値は `0x03` です。

> [!NOTE]
> Chromium はリクエストの種類に応じて、既定で `userVerificationOptionalWithCredentialIDList` または `userVerificationRequired` を設定します。
>
> - Chromium は、`residentKey` が `preferred` または `required` に設定されている場合、資格情報を作成する際に `userVerificationOptionalWithCredentialIDList` の保護レベルを要求します（`requireResidentKey` の設定は `required` と同様に扱われます）。これにより、セキュリティキーを物理的に所持しているだけでは、特定の `rpId` に対して発見可能な資格情報が照会されることはありません。
> - さらに、`residentKey` が `required` で `userVerification` が推奨される場合、保護レベルは `userVerificationRequired` に引き上げられます。これにより、セキュリティキーを物理的に所持しているだけでは、ユーザー認証を必要としないサイトへのログインが不可能になります（完全な保護ではありません。サイト運営者はユーザーのセキュリティを十分考えてみる必要があります）。
> - サイトが明示的な `credProtect` レベルをリクエストされた場合、その設定がこれらの既定を上書きします。セキュリティキーの既定がより高い場合、これらの既定が保護レベルをより低くすることはありません。
>
> `enforceCredentialProtectionPolicy` の値が `true` の場合、ポリシーが遵守できないと `create()` 呼び出しは失敗します（例えば、ユーザー検証が要求されるが、認証器がユーザー 検証に未対応の場合など）。`false` の場合、システムはポリシーに準拠する資格情報の作成を可能なかぎり試みますが、それが不可能である場合、可能な限りポリシーに準拠した資格情報を作成します。

#### 出力

`create()` 呼び出しが成功した場合、認証データには設定ポリシーを表す `credProtect` 値の表現が次の方法で含まれます。

```js
({ credProtect: 0x01 });
```

### `largeBlob`

- 使用場面: 登録 ({{domxref("CredentialsContainer.create()","create()")}}) and authentication ({{domxref("CredentialsContainer.get()","get()")}})
- 処理元: ユーザーエージェント
- 仕様書: [Large blob storage extension (largeBlob)](https://w3c.github.io/webauthn/#sctn-large-blob-extension)

認証依頼者が、資格情報に関連付けられたブロブを認証器に保存できるようにします。例えば、集中型認証サービスを実行する代わりに、証明書を直接保存したい場合などです。

#### 入力

`create()` の呼び出し時、`publicKey` の `extensions` プロパティには、以下のオブジェクト構造を持つ `largeBlob` プロパティが含まれている必要があります。

```js
({
  extensions: {
    largeBlob: {
      support: "required",
    },
  },
});
```

`support` プロパティの値は文字列であり、次のいずれかに設定できます。

- `"preferred"`: 資格情報は、可能であればブロブを格納することができる認証器で作成されますが、そうでない場合でも作成されます。出力のプロパティ "supported" は、認証器がブロブを格納するためにできるかどうかを報告します。
- `"required"`: 資格情報は、ブロブを格納するために認証器で作成されます。これが不可能な場合、`create()` 呼び出しは失敗します。

`get()` 呼び出し時、`publicKey` の `extensions` プロパティには `largeBlob` プロパティが含まれている必要があり、その `largeBlob` プロパティには `read` または `write` のいずれか一方のサブプロパティが存在しなければなりません（両方が存在する場合、`get()` は失敗します）。

`read` プロパティは論理値です。`true` の値は、認証依頼者が、アサーションされた資格情報に関連付けられた前回書き込まれたブロブを取得したいことを示します。

```js
({
  extensions: {
    largeBlob: {
      read: true,
    },
  },
});
```

`write` プロパティは、認証依頼者が既存の資格情報とともに格納するために、ブロブを表す {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}} を値として取ります。

```js
({
  extensions: {
    largeBlob: {
      write: arrayBuffer,
    },
  },
});
```

> [!NOTE]
> 書き込み認証操作が成功するためには、 `publicKey.allowCredentials` には、ブロブとともに格納される資格情報を表す単一の要素のみが含まれている必要があります。

#### 出力

登録された資格情報がブロブを格納することができる場合、 `create()` 呼び出しが成功すると、次の拡張機能の出力が得られます。

```js
({
  largeBlob: {
    supported: true, // ブロブが格納できないと false
  },
});
```

`get()` 読み出し呼び出しが成功した場合、拡張機能の出力でブロブを {{jsxref("ArrayBuffer")}} として利用できる状態にします。

```js
({
  largeBlob: {
    blob: arrayBuffer,
  },
});
```

> [!NOTE]
> 失敗した場合、`largeBlob` オブジェクトが返されますが、 `blob` は存在するわけではありません。

`get()` 書き込み呼び出しは、拡張機能の出力において `written` 論理値を用いて書き込み操作の成功可否を示します。 `true` 値は関連付けられた認証器への書き込みが成功したということになり、`false` は失敗したということになります。

```js
({
  largeBlob: {
    written: true,
  },
});
```

### `minPinLength`

- 使用場面: 登録 ({{domxref("CredentialsContainer.create()","create()")}})
- 処理元: 認証器
- 仕様書: [Minimum PIN Length Extension (minPinLength)](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-minpinlength-extension)

認証依頼者が認証器の最小 PIN 長をリクエストすることができます。

#### 入力

`publicKey` の `extensions` プロパティには、 `minPinLength` プロパティが `true` の値で含まれていなければなりません。

```js
({
  extensions: {
    minPinLength: true,
  },
});
```

#### 出力

認証依頼者が `minPinLength` 値の受信を許可されている場合（その `rpId` が認証器の許可済み認証依頼先リストに存在する場合）、認証器データには次の方法でその値が表現されます。

```js
({ minPinLength: uint });
```

認証依頼者が認証されていない場合、この拡張機能は無視され、`"minPinLength"` の出力値は指定されません。

### `payment`

- 使用場面: 登録 ({{domxref("CredentialsContainer.create()","create()")}})
- 処理元: ユーザーエージェント
- 仕様書: [Secure Payment Confirmation](https://w3c.github.io/secure-payment-confirmation/)

認証依頼者が、WebAuthn 資格情報の作成を要求することができるようにします。この資格情報は、認証依頼者およびその他の当事者 の両方によって、セキュアペイメント確認をつけて使用することができます。詳細は[セキュアペイメント確認の使用](/ja/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation)を参照してください。

#### 入力

`payment` 拡張機能の入力は、[AuthenticationExtensionsPaymentInputs 辞書](https://w3c.github.io/secure-payment-confirmation/#dictdef-authenticationextensionspaymentinputs)で定義されます。

- `isPayment`
  - : 論理値で、拡張機能が有効であることを示します。
- `rpID`
  - : 使用される資格情報の[認証依頼者](https://w3c.github.io/webauthn/#relying-party)の ID。認証時のみ使用され、登録時には使用されません。
- `topOrigin`
  - : 最上位フレームのオリジン。認証時のみ使用され、登録時には使用されません。
- `payeeName`
  - : ユーザーに表示された受取人名（存在する場合）。認証時のみ使用され、登録時には使用されません。
- `payeeOrigin`
  - : ユーザーに表示させた受取人のオリジン（存在する場合）。認証時のみ使用され、登録時には使用されません。
- `total`
  - : ユーザーに表示された取引金額。認証時のみ使用され、登録時には使用されませ ん。合計額は [PaymentCurrencyAmount](https://w3c.github.io/payment-request/#dom-paymentcurrencyamount) 型です。
- `instrument`
  - : ユーザーに表示された機器の詳細情報。認証時のみ使用され、登録時には使用されませ ん。機器は [PaymentCredentialInstrument](https://w3c.github.io/secure-payment-confirmation/#dictdef-paymentcredentialinstrument) 型です。

#### 出力

なし

### `prf`

- 使用場面: 登録 ({{domxref("CredentialsContainer.create()","create()")}}) and authentication ({{domxref("CredentialsContainer.get()","get()")}})
- 処理元: ユーザーエージェント
- 仕様書: [Pseudo-random function extension (prf)](https://w3c.github.io/webauthn/#prf-extension)

認証依頼者が、資格情報に関連付けられた擬似乱数関数 (PRF) から、1 つまたは 2 つの入力に対する出力を取得することができるようにします。
PRF は効率的に[ランダムオラクル](https://en.wikipedia.org/wiki/Random_oracle)です。指定された入力に対してランダムな値を返す関数ですが、同じ入力に対しては常に同じ値を返す関数です。

ユーザーの資格情報に関連付けられた乱数を生成するジェネレーター機能は、数多くの暗号アプリケーションにおいて有益です。
例えば、機密データの暗号化に使用する対称鍵を生成するために使用できます。その鍵は、選択されているシードと関連付けられた認証器を持つユーザーのみが復号することができます。
同様に、エンドツーエンド暗号化用の対称鍵を作成するためにも使用できます。この鍵はサーバーからの値をシードとして選択されており、その資格情報とセッションに対して固有のものです。

この拡張機能により、{{jsxref("ArrayBuffer")}} または {{jsxref("TypedArray")}} 型のバッファーを認証器に渡すことができるようになります。認証器は、関連付けられた資格情報の PRF をつけてその値を評価した結果を返します。
これは、認証ワークフローの一部として、アサーション内でするのが最適です。結果を評価する対象となる資格情報を指定します。
同時に資格情報を作成する際にも実行可能です。ただし、資格情報作成時に出力 の生成に対応している認証器は少数です。

#### 入力

`create()` 呼び出しの際、`publicKey` の `extensions` プロパティには、`prf` プロパティが含まれている場合があります。これは、`first` プロパティとオプションの `second` プロパティを持つ `eval` オブジェクトを有します。
これらのプロパティは、{{jsxref("ArrayBuffer")}} または {{jsxref("TypedArray")}} のインスタンスであり、資格情報用の PRF に渡す値を含まれています。

例えば、下記の定義は、新しい資格情報を作成する際に、サーバーが提供するシークレットから新しい対称キーを生成するために使用されていることがあります。

```js
({
  extensions: {
    prf: {
      eval: { first: new TextEncoder().encode("Salt for new symmetric key") },
    },
  },
});
```

オプションの `second` プロパティは、資格情報に対して 2 つのランダム値を生成する必要がある場合に使用できます。例えば、暗号化キーがそれぞれのセッションで回転させるワークフローなどが該当します。
このようなワークフローの例として、それぞれのセッションでは 2 つのソルトを渡します。`first` ソルトは前回のセッションデータを復号するために使用できる値を返し、`second` ソルトは今回のセッションデータを暗号化するために使用できる値を返します。
後続のセッションでは、`second` ソルトが `first` ソルトの位置に移動されるため、具体的なソルトが有益に悪用される可能性のある有効期間は制限されます。

```js
({
  extensions: {
    prf: {
      eval: {
        first: currentSessionKey, // 現在のセッションのソルト
        second: nextSessionKey, // 次のセッションのソルト
      },
    },
  },
});
```

`create()` 呼び出しは、次の例外が発生した場合に失敗することがあります。

- `NotSupportedError` {{domxref("DomException")}}
  - `evalByCredential` キーが `eval `オブジェクトに存在します。

なお、資格情報を作成する際に PRF を評価することに対応していないことがあります。この場合は出力に報告されます。
下記に示すように、アサーション内で PRF の評価を試すことも可能です。

`get()` 呼び出し中、`publicKey` の `extensions` プロパティには、`evalByCredential` サブプロパティを付けている `prf` プロパティが含まれていることがあります。
これは、{{glossary("Base64")}} の URL エンコードされた資格情報 ID を、上記と同じ方法で評価するオブジェクトに対応付けられるオブジェクトです。
言い換えれば、このことにより異なる資格情報に対して評価する値を指定することができます。

```js
({
  extensions: {
    prf: {
      evalByCredential: {
        "<credentialId>": { first: bufferOne, second: bufferTwo },
        // …
        "<credentialId2>": {
          first: anotherBufferOne,
          second: anotherBufferTwo,
        },
      },
    },
  },
});
```

`get()` 呼び出しは、次の例外で拒否されることがあります。

- `NotSupportedError` {{domxref("DomException")}}
  - : `eval` が `prf` オブジェクトである場合、または `allowCredentials` が空で `evalByCredential` が空でない場合。
- `SyntaxError` {{domxref("DomException")}}
  - : `evalByCredential` のキーは、空文字列であるか、有効な Base64 URL エンコード方式ではないか、[`publicKey.allowCredentials`](/ja/docs/Web/API/PublicKeyCredentialRequestOptions#allowcredentials) で許可された要素の ID と一致しない場合。

#### 出力

登録された資格情報が資格情報作成時にPRFの使用が対応している場合、`create()` の呼び出しに成功すると、次の拡張機能の出力が行われます。

```js
({
  prf: {
    enabled: true, // PRF は資格情報の生成に使用できる
    results: { first: outputBuffer1, second: outputBuffer2 },
  },
});
```

`enabled` プロパティは、資格情報を生成する際にPRFが使用できるかどうかを示します。
`first` および `second` プロパティには、入力に対する `first` および `second` の評価結果が含まれます。対応する入力が指定されていない場合、`second` は省略されます。

認証器が作成時に PRF を使用することに対応していない場合、`create()` の出力は次のようになります。

```js
({
  prf: {
    enabled: false, // 資格情報の作成時に PRF が利用できない
  },
});
```

`get()` は同じ `prf` オブジェクトを `create()` と同じ構造で返しますが、`enabled` キーを省略します。
このオブジェクトには、ユーザーが選択した資格情報の入力に対応する PRF 値が含まれています。

```js
({
  prf: {
    results: { first: outputBuffer1, second: outputBuffer2 },
  },
});
```

なお、`enabled` は `create()` の出力としてのみ存在し、資格情報作成時に認証器が PRF に対応しているかどうかを示します。
認証器が PRF にまったく対応していない場合、`get()` 呼び出しの結果は次のようになります。

```js
({
  prf: {},
});
```

## 仕様書

WebAuthn 拡張機能が指定されている場所は複数あります。 IANA の [WebAuthn Extension Identifiers](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-extension-ids) では、すべての拡張機能のレジストリーを提供していますが、一部は非推奨であることがあります。

{{Specifications}}

## ブラウザーの互換性

WebAuthn 拡張機能の互換性データは、2 つの表に分類されています。認証情報の登録時 ({{domxref("CredentialsContainer.create()","create()")}}) に使用できる拡張機能と、認証時 ({{domxref("CredentialsContainer.get()","get()")}}) に使用できる拡張機能です。一部の拡張機能は両方の操作で使用できます。

{{Compat}}
