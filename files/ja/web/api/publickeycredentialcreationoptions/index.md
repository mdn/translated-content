---
title: PublicKeyCredentialCreationOptions
slug: Web/API/PublicKeyCredentialCreationOptions
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`PublicKeyCredentialCreationOptions`** 辞書は、{{domxref("CredentialsContainer.create()")}} に `publicKey` オプションの値として渡されるオブジェクトを表します。つまり、[ウェブ認証 API](/ja/docs/Web/API/Web_Authentication_API) を使って `create()` で公開鍵資格情報を作成する際に渡すオブジェクトです。

## インスタンスプロパティ

- `attestation` {{optional_inline}}
  - : 資格情報の作成中にアテステーション文 (認証器とそのデータの真正性を検証できる証拠) をどのように伝達するかについて、認証依頼者 (RP) の希望を指定する文字列です。値は次のいずれかです。
    - `"none"`
      - : 認証依頼者が認証器のアテステーションを必要としていないことを示します。認証プロセスを円滑にするため、識別情報を中継する認証依頼者サーバーとの追加の通信についてユーザーに同意を求めないようにしたり、アテステーション認証局 (CA) との通信を避けたりする目的で指定できます。`attestation` に `"none"` が指定され、認証器が CA を使用してアテステーション文を生成すると通知した場合、クライアントアプリはそれを `"None"` アテステーション文に置き換えます。これは、利用可能なアテステーション文がないことを示します。

    - `"direct"`
      - : 認証器が生成したとおりのアテステーション文を認証依頼者が受け取ることを希望します。

    - `"enterprise"`
      - : 認証依頼者が、一意に識別できる情報を含む可能性のあるアテステーション文を受け取ることを希望します。組織が登録を特定の認証器に関連付けたい場合など、企業内の管理された環境での利用を想定しています。

    - `"indirect"`
      - : 認証依頼者は検証可能なアテステーション文の受け取りを希望しますが、受け取り方法の決定はクライアントに委ねます。例えば、クライアントはユーザーのプライバシーを保護するため、認証器のアサーション文を匿名化認証局 (Anonymization CA) が生成したものに置き換えることができます。

    `attestation` を省略した場合、デフォルトは `"none"` です。

- `attestationFormats` {{optional_inline}}
  - : 認証器が使用するアテステーション文の形式について、認証依頼者の希望を指定する文字列の配列です。値は希望度の高いものから順に並べますが、これはヒントであり、認証器は別の形式のアテステーション文を発行することがあります。有効な形式の一覧は、[WebAuthn Attestation Statement Format Identifiers](https://www.iana.org/assignments/webauthn#webauthn-attestation-statement-format-ids) を参照してください。

    省略した場合、`attestationFormats` のデフォルトは空の配列です。

- `authenticatorSelection` {{optional_inline}}
  - : 資格情報作成操作で候補となる認証器を絞り込む条件をプロパティに持つオブジェクトです。次のプロパティを含めることができます。
    - `authenticatorAttachment` {{optional_inline}}
      - : 選択できる認証器の接続形態を示す文字列です。値は次のいずれかです。
        - `"platform"`
          - : 認証器は WebAuthn を実行している端末の一部です (**プラットフォーム認証器**と呼ばれます)。WebAuthn は、プラットフォーム固有の API など、そのプラットフォームで利用できるトランスポートを使って認証器と通信します。プラットフォーム認証器に関連付けられた公開鍵資格情報は、**プラットフォーム資格情報**と呼ばれます。
        - `"cross-platform"`
          - : 認証器は WebAuthn を実行している端末の一部ではありません。異なる端末間を移動できるため、**ローミング認証器**と呼ばれます。WebAuthn は Bluetooth や NFC などのクロスプラットフォームのトランスポートプロトコルを使って認証器と通信します。ローミング認証器に関連付けられた公開鍵資格情報は、**ローミング資格情報**と呼ばれます。

            省略した場合、資格情報作成操作ではプラットフォームまたはクロスプラットフォームのいずれの認証器も選択できます。

    - `requireResidentKey` {{optional_inline}}
      - : 論理値です。`true` に設定すると、認証依頼者が[検出可能な資格情報](/ja/docs/Web/API/Web_Authentication_API#検出可能な資格情報と条件付き仲介)の作成を希望していることを示します。

        このオプションは後方互換性のためにのみ保持されています。呼び出し側は代わりに [`residentKey`](#residentkey) オプションを使用してください。`residentKey` が指定され、対応している場合、`requireResidentKey` は無視されます。`residentKey` が `"required"` に設定されている場合に限り、`requireResidentKey` を `true` に設定してください。

        デフォルトは `false` です。

    - `residentKey` {{optional_inline}}
      - : 認証依頼者が[検出可能な資格情報](/ja/docs/Web/API/Web_Authentication_API#検出可能な資格情報と条件付き仲介)の作成をどの程度希望するかを指定する文字列です。値は次のいずれかです。
        - `"discouraged"`
          - : 認証依頼者はサーバー側資格情報の作成を希望しますが、クライアント側の検出可能な資格情報も受け入れます。
        - `"preferred"`
          - : 認証依頼者は検出可能な資格情報の作成を強く希望しますが、検出不可能な資格情報も受け入れます。検出可能な資格情報の作成にユーザー検証の設定が必要な場合、ユーザーエージェントは設定を案内するべきです。この値は `userVerification` の設定より優先されます。
        - `"required"`
          - : 認証依頼者は検出可能な資格情報を必須とします。作成できない場合、`NotAllowedError` の {{domxref("DOMException")}} が発生します。詳しくは [`create()` の例外一覧](/ja/docs/Web/API/CredentialsContainer/create#例外)を参照してください。

        省略した場合、`requireResidentKey` が `true` なら `residentKey` のデフォルトは `"required"` で、それ以外の場合は `"discouraged"` です。

    - `userVerification` {{optional_inline}}
      - : `create()` 操作でのユーザー検証に関する認証依頼者の要件を指定する文字列です。値は次のいずれかです。
        - `"discouraged"`
          - : ユーザー体験への影響を最小限に抑えるため、認証依頼者は `create()` 操作でのユーザー検証を希望しません。
        - `"preferred"`
          - : 認証依頼者は `create()` 操作でのユーザー検証を希望しますが、ユーザー検証を実行できなくても失敗にはしません。
        - `"required"`
          - : 認証依頼者は `create()` 操作でのユーザー検証を必須とします。ユーザー検証を実行できない場合、エラーが発生します。

        省略した場合、`userVerification` のデフォルトは `"preferred"` です。

- `challenge`
  - : 認証依頼者のサーバーが提供する {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、または {{jsxref("DataView")}} で、[暗号学的チャレンジ](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication)<sup>(英語)</sup>として使用します。この値は認証器によって署名され、署名は {{domxref("AuthenticatorAttestationResponse.attestationObject")}} の一部として返されます。

- `excludeCredentials` {{optional_inline}}
  - : このユーザーアカウント (`user.id` で識別) にすでに関連付けられている資格情報を記述するオブジェクトの {{jsxref("Array")}} です。認証依頼者が指定し、ユーザーエージェントが確認することで、指定されたユーザーアカウントの資格情報がすでに関連付けられている認証器に、新しい公開鍵資格情報が作成されるのを防ぎます。各項目は次の形式です。
    - `id`
      - : 既存の資格情報 ID を表す {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、または {{jsxref("DataView")}} です。

    - `transports` {{optional_inline}}
      - : 使用可能なトランスポートを表す文字列の {{jsxref("Array")}} です。トランスポートには `"ble"`、`"hybrid"`、`"internal"`、`"nfc"`、`"usb"` があります。詳しくは {{domxref("AuthenticatorAttestationResponse.getTransports", "getTransports()")}} を参照してください。

    - `type`
      - : 作成する公開鍵資格情報の種類を定義する文字列です。現在指定できる値は `"public-key"` のみですが、将来ほかの値が追加される可能性があります。

    `create()` の呼び出しで認証器に重複する公開鍵資格情報を作成しようとした場合、ユーザーエージェントは別の認証器で資格情報を作成するようユーザーに案内します。それができない場合、処理は失敗します。

    `excludeCredentials` を省略した場合、デフォルトは空の配列です。

- `extensions` {{optional_inline}}
  - : 要求する拡張機能の入力値を表すプロパティを含むオブジェクトです。これらの拡張機能は、資格情報の作成中にクライアントまたは認証器が追加処理を指定するために使われます。例えば、返される資格情報を検出可能にするかどうかや、認証依頼者が資格情報に関連付けられた大きなブロブデータを保存できるかどうかを指定できます。

    拡張機能は任意であり、ブラウザーによって認識する拡張機能が異なる場合があります。クライアントが拡張機能を処理するかどうかも任意です。ブラウザーが拡張機能を認識しない場合は無視します。拡張機能の使い方や、各ブラウザーが対応する拡張機能については、[ウェブ認証の拡張機能](/ja/docs/Web/API/Web_Authentication_API/WebAuthn_extensions)を参照してください。

- `hints` {{optional_inline}} {{experimental_inline}}
  - : 公開鍵資格情報を作成する際、ブラウザーがユーザーにどのような UI を提供するべきかを示すヒントの文字列配列です。

    文字列には次のいずれかを指定できます。
    - `"security-key"`
      - : 資格情報の作成に、YubiKey などの独立した物理セキュリティキーを使うよう UI で推奨します。
    - `"client-device"`
      - : RP クライアントへのアクセスに使用しているのと同じ端末で利用できる認証器を使うよう UI で推奨します。これは `authenticatorAttachment` の [`platform`](#platform) 値に相当します。
    - `"hybrid"`
      - : スマートフォン上の認証器アプリなど、汎用認証器を使うよう UI で推奨します。例えば、ノート PC とスマートフォンを組み合わせるなど、複数の端末を使って認証する方法を優先します。

    `authenticatorAttachment` の [`cross-platform`](#cross-platform) 値は、基本的に `hints` オプションの `security-key` と `hybrid` の組み合わせです。Bluetooth に対応していない端末で RP が `attachment: "cross-platform"` を指定した場合、表示される UI は `hints: "security-key"` の UI に似たものになる可能性があります。

    配列に複数の文字列を含める場合、並び順は希望度の高い順を示します。ヒントを尊重するブラウザーは、理解できる最初の値を使用するべきです。

    `hints` オプションは、選択しなかった選択肢を完全に隠す [`authenticatorAttachment`](#authenticatorattachment) オプションよりも柔軟に、資格情報作成時の UI の希望を指定できます。また、`authenticatorAttachment` では指定できない、セキュリティキーまたはハイブリッドのどちらかを優先する指定もできます。

    指定した `hints` は、`authenticatorAttachment` オプションが示すヒントと矛盾する場合があります。矛盾する場合は `hints` が優先されます。また、例えばヒントされた種類の認証器をユーザーの端末で使用できない場合など、特定の状況ではブラウザーが `hints` を無視することもあります。

    コードと UI の具体例については、[Chrome における WebAuthn のヒント、Related Origin Requests、JSON シリアライズの紹介](https://developer.chrome.com/blog/passkeys-updates-chrome-129#hints)<sup>(英語)</sup>を参照してください。

- `pubKeyCredParams`
  - : 認証依頼者が対応する鍵の種類と署名アルゴリズムを指定するオブジェクトの {{jsxref("Array")}} です。希望度の高いものから順に並べます。クライアントと認証器は、可能な限り希望度が最も高い種類の資格情報を作成します。オブジェクトには次のプロパティを含めます。
    - `alg`
      - : この資格情報の種類で使用する暗号アルゴリズムを表す、[COSE Algorithm Identifier](https://www.iana.org/assignments/cose#algorithms) に等しい数値です。幅広い認証器に対応する場合、認証依頼者は選択肢に少なくとも次の値を含めることを推奨します。
        - `-8`: EdDSA
        - `-7`: ES256
        - `-257`: RS256

    - `type`
      - : 作成する公開鍵資格情報の種類を定義する文字列です。現在指定できる値は `"public-key"` のみですが、将来ほかの値が追加される可能性があります。

    一覧にある資格情報の種類をどれも作成できない場合、`create()` 操作は失敗します。

- `rp`
  - : 資格情報の作成を要求した認証依頼者を記述するオブジェクトです。次のプロパティを含めることができます。
    - `id` {{optional_inline}}
      - : 認証依頼者の ID を表す文字列です。公開鍵資格情報は、登録されたのと同じ認証依頼者に対する認証にのみ使用できます。これは {{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}} の呼び出しにおける `publicKey.rpId` で識別され、ID が一致している必要があります。

        `id` にポートやスキームを含めることはできませんが、ドメインのスキームは `https` でなければなりません。`id` はオリジンの有効ドメイン、またはそのドメインのサフィックスと一致する必要があります。例えば、認証依頼者のオリジンが `https://login.example.com:1337` の場合、次の `id` は有効です。
        - `login.example.com`
        - `example.com`

        次の `id` は無効です。
        - `m.login.example.com`
        - `com`

        省略した場合、`id` のデフォルトは文書のオリジンです。上記の例では `login.example.com` になります。

    - `name`
      - : 認証依頼者の名前を表す文字列です (例: `"Facebook"`)。WebAuthn 操作の作成または検証時にユーザーに表示される名前です。

- `timeout` {{optional_inline}}
  - : 資格情報作成操作が完了するまで呼び出し元のウェブアプリが待つ時間を示す、ミリ秒単位の数値ヒントです。ブラウザーによって上書きされることがあります。

- `user`
  - : 資格情報を生成するユーザーアカウントを記述するオブジェクトです。次のプロパティを含めることができます。
    - `displayName`
      - : 人間が読みやすいユーザー表示名を表す文字列です (例: `"Maria Sanchez"`)。認証依頼者への初回登録時にユーザーが設定します。

    - `id`
      - : ユーザーアカウントの一意な ID を表す {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、または {{jsxref("DataView")}} です。この値の最大長は 64 バイトで、ユーザーへの表示を意図していません。

    - `name`
      - : `displayName` が似ている複数のアカウントを区別するための、人間が読みやすいユーザーアカウント識別子を表す文字列です。メールアドレス (例: `"elaina.sanchez@example.com"`)、電話番号 (例: `"+12345678901"`)、または他の種類のユーザーアカウント識別子 (例: `"ElainaSanchez667"`) を指定できます。

## 例

### 公開鍵資格情報の作成

この例では、必須プロパティのみを指定し、残りにはデフォルト値を使用して `PublicKeyCredentialCreationOptions` を作成します。

次に、このオブジェクトを `navigator.credentials.create()` に渡して、新しい公開鍵資格情報を作成します。

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

`create()` の呼び出しが成功すると、公開鍵資格情報を表す {{domxref("PublicKeyCredential")}} オブジェクトインスタンスで解決されるプロミスが返されます。この資格情報は、後で WebAuthn の {{domxref("CredentialsContainer.get()", "get()")}} 呼び出しによるユーザー認証に使用できます。その {{domxref("PublicKeyCredential.response")}} プロパティには {{domxref("AuthenticatorAttestationResponse")}} オブジェクトが含まれ、認証器データ、公開鍵、トランスポート機構など、いくつかの有用な情報にアクセスできます。

```js
navigator.credentials.create({ publicKey }).then((publicKeyCredential) => {
  const response = publicKeyCredential.response;

  // attestationObject の ArrayBuffer を取得
  const attestationObj = response.attestationObject;

  // クライアント JSON を取得
  const clientJSON = response.clientDataJSON;

  // 認証器データの ArrayBuffer を取得
  const authenticatorData = response.getAuthenticatorData();

  // 公開鍵の ArrayBuffer を取得
  const pk = response.getPublicKey();

  // 公開鍵アルゴリズム識別子を取得
  const pkAlgo = response.getPublicKeyAlgorithm();

  // 許可されたトランスポートの配列を取得
  const transports = response.getTransports();
});
```

このデータの一部は、この資格情報を使った今後の認証操作のためにサーバーに保存する必要があります。例えば、公開鍵、使用したアルゴリズム、許可されたトランスポートなどです。

全体の流れについて詳しくは、[鍵ペアの生成とユーザーの登録](/ja/docs/Web/API/Web_Authentication_API#鍵ペアの生成とユーザーの登録)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
