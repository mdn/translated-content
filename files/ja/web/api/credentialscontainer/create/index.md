---
title: "CredentialsContainer: create() メソッド"
short-title: create()
slug: Web/API/CredentialsContainer/create
l10n:
  sourceCommit: 314cb0ba882e2c59204e7729aeb948df6f402b1f
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

**`create()`** は {{domxref("CredentialsContainer")}} インターフェイスのメソッドで、指定されたオプションに基づく新しい資格情報のインスタンスに解決する {{jsxref("Promise")}} を返します。このインスタンスの情報は保存することができ、後で {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} でユーザー認証に使用することができます。

これは、大きく異なる目的を持つ、複数の異なる資格情報関連 API で使用されます。

- [資格情報管理 API](/ja/docs/Web/API/Credential_Management_API) は、`create()` を使用して基本的なフェデレーション資格情報またはユーザー名/パスワードの資格情報を作成します。
- [ウェブ認証 API](/ja/docs/Web/API/Web_Authentication_API) では、`create()` を使用して（非対称暗号に基づく）公開鍵資格情報を作成します。

下記のリファレンスページでは、まず構文の節で、異なる API すべてに適用される一般的なメソッド呼び出し構造と引数を説明しています。この部分の後で、各 API に固有の引数、返値、例を提供する別個の節に分けています。

> [!NOTE]
> このメソッドは最上位の{{glossary("browsing context", "閲覧コンテキスト")}}（すなわち、ブラウザータブ内で直接実行している文書で、他の文書に埋め込まれていないもの）に限定されます。`<iframe>` 要素内から呼び出すと、何もせずに解決します。

## 一般的な構文

```js-nolint
create()
create(options)
```

### 引数

- `options` {{optional_inline}}

  - : リクエストされた新しい `Credentials` オブジェクトのオプションを格納するオブジェクト。以下のプロパティを格納することができます。

    - `signal` {{optional_inline}}
      - : 進行中の `create()` 処理を中止させるための {{domxref("AbortSignal")}} オブジェクトのインスタンスです。中止された操作は、（完全に処理が終了した後に中止を受け取った場合は）正常に完了することもあれば、"`AbortError`" の {{domxref("DOMException")}} で拒否されることもあります。

    以下のプロパティはそれぞれ、作成する _資格情報の種別_ を表します。指定できるのは1つだけです：

    - `federated` {{optional_inline}}
      - : フェデレーション ID プロバイダーの資格情報を作成するための要件を格納したオブジェクトです。[フェデレーション資格情報管理 API (FedCM)](/ja/docs/Web/API/FedCM_API) は、この資格情報の種類よりも優先されることに注意してください。詳細は下記の[資格情報管理 API](#資格情報管理_api) の節を参照してください。
    - `password` {{optional_inline}}
      - : パスワード資格情報を作成するための要件を格納したオブジェクトです。詳細は下記の[資格情報管理 API](#資格情報管理_api) の節を参照してください。
    - `publicKey` {{optional_inline}}
      - : 公開鍵資格情報を作成するための要件を格納したオブジェクトです。`create()` の呼び出しを発生させ、ユーザーエージェントが認証機能を使って新しい資格情報を作成するようにリクエストします。詳細は下記の[ウェブ認証 API](#ウェブ認証_api) の節を参照してください。

## 資格情報管理 API

[資格情報管理 API](/ja/docs/Web/API/Credential_Management_API) は、ウェブサイトがパスワードや連携した資格情報を格納したり取得したりすることができます。これらの機能により、ユーザーはパスワードを入力せずにログインしたり、サイトにログインするために使用したフェデレーションアカウントを確認したり、期限切れのセッションで明示的なログインフローを行わずにセッションを再開することができます。

### `federated` オブジェクトの構造

`federated` には以下のプロパティを設定することができます。

- `iconURL` {{optional_inline}}
  - : この資格情報と関連付けられるアイコンまたはアバターの URL を表す文字列。
- `id`
  - : この資格情報の固有の ID を表す文字列です。
- `name` {{optional_inline}}
  - : この資格情報のユーザー名を表す文字列です。
- `origin`
  - : この資格情報のオリジンを表す文字列です。{{domxref("FederatedCredential")}} オブジェクトはオリジンに紐付いており、使用することを指定したオリジンでのみ使用することができます。
- `protocol` {{optional_inline}}
  - : 資格情報のフェデレーション ID プロバイダーのプロトコルを表す文字列（例えば、`"openidconnect"`）。
- `provider`
  - : 資格情報のフェデレーション ID プロバイダーを表す文字列です（例えば `"https://www.facebook.com"` や `"https://accounts.google.com"`）。

### `password` オブジェクトの構造

`password` オブジェクトは、オブジェクトリテラルへの参照か {{domxref("HTMLFormElement")}} になります。どちらの場合も、以下のデータを提供する必要があります。

- `iconURL` {{optional_inline}}
  - : 資格情報と関連付けられるアイコンまたはアバターの URL を表す文字列。
- `id`
  - : この資格情報の固有の ID を表す文字列です。
- `name` {{optional_inline}}
  - : この資格情報のユーザー名を表す文字列です。
- `origin`
  - : この資格情報のオリジンを表す文字列です。{{domxref("PasswordCredential")}} オブジェクトはオリジンに紐付いており、使用することを指定したオリジンでのみ使用することができます。
- `password`
  - : 資格情報のパスワードを表す文字列です。

文字列リテラルの場合、プロパティはそのまま提供されます。{{domxref("HTMLFormElement")}} の場合、フォーム入力フィールド（これは {{htmlelement("input")}}、{{htmlelement("select")}}、{{htmlelement("textarea")}} 要素）を用いて、以下の `name` 属性の値で提供する必要があります。

- `id`: `"username"`
- `name`: `"name"` または `"nickname"`
- `iconURL`: `"photo"`
- `password`: `"new-password"` または `"current-password"`

この例外は `origin` で、これは {{domxref("HTMLFormElement") }} が格納されている文書のオリジンに設定されます。

### 返値

指定された引数に一致する {{domxref("Credential")}} インスタンスに解決する {{jsxref("Promise")}} を返します。

- 作成した資格情報の種類が `federated` オブジェクトであった場合、返すインスタンスは {{domxref("FederatedCredential")}} となります。
- 作成した資格情報が `password` オブジェクトであった場合、返すインスタンスは {{domxref("PasswordCredential")}} となります。

単一の資格情報を正常に生成できない場合、プロミスは `null` に解決されます。

### 例外

- {{jsxref("TypeError")}}
  - : {{domxref("PasswordCredential")}} 作成リクエストの場合、`id`、`origin`、`password` が指定されなかった（空だった）。

### 例

```js
navigator.credentials
  .create({
    password: {
      id: "ergnjregoith5y9865jhokmfdskl;vmfdl;kfd...",
      name: "fluffybunny",
      origin: "example.com",
      password: "fluffyhaxx0r",
    },
  })
  .then((pwdCred) => {
    console.log(pwdCred.name);
  });
```

## ウェブ認証 API

[ウェブ認証 API](/ja/docs/Web/API/Web_Authentication_API) は、公開鍵暗号方式による強力な認証を可能にし、パスワードレス認証や SMS を使わない安全な多要素認証 (MFA) を実現します。詳細な使用情報については、リンク先の API ランディングページを確認してください。

> **メモ:** `create()` を `publicKey` 引数付きで使用すると、サーバーに {{HTTPHeader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)が設定されている場合、ブロックされることがあります。

### `publicKey` オブジェクトの構造

`publicKey` オブジェクトには以下のプロパティを設定することができます。

- `attestation` {{optional_inline}}

  - : 資格情報作成時に認証ステートメント（すなわち、認証子とそのデータの真正性の検証可能な証拠の提供）をどのように伝えるかについて、信頼当事者 (relying party) の環境設定を指定する文字列です。値は以下のいずれかです。

    - `"none"`

      - : 信頼当事者が認証者の検証に関心を持っていないことを指定します。これは、認証プロセスをより円滑にするために、識別情報を中継するために頼っているサーバーへの往復や、認証認証局(CA)への往復に対するユーザーの追加同意を避けるためかもしれません。もし `attestation` の値として `"none"` が選ばれ、認証局が認証ステートメントを生成するために CA を使用することを指示した場合、クライアントアプリは認証ステートメントを "None" に置き換えて、認証ステートメントが使用できないことを示します。

    - `"direct"`

      - : 信頼当事者が、認証者が生成した認証ステートメントの受信を希望することを指定します。

    - `"enterprise"`

      - : 信頼当事者が、固有の識別情報を含めることができる認証ステートメントを受け取りたいことを指定します。これは、組織が登録を固有の認証子に結びつけることを望む、企業内の制御する展開のために意図されています。

    - `"indirect"`
      - : 信頼当事者が検証可能な認証ステートメントを受信することを指定しますが、その受信方法をクライア ントが決定することを許可します。例えば、クライアントは、ユーザーのプライバシーを保護するために、認証者のアサーションステートメントを匿名化 CA が生成したものと置き換えることを選ぶことができます。

    `attestation` を除外すると、既定値で `"none"` となります。

- `attestationFormats` {{optional_inline}}

  - : 信頼当事者が、認証機関が使用する認証ステートメント形式に対する設定を指定する文字列の配列です。値は、環境設定の高いものから低いものへと並べられ、ヒントとみなされる必要があります。認証者は、異なる形式で認証ステートメントを発行することを選ぶかもしれません。有効な形式の一覧は、[WebAuthn Attestation Statement Format Identifiers](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-attestation-statement-format-ids) を参照してください。

    省略した場合、`attestationFormats`の既定値は空の配列となります。

- `authenticatorSelection` {{optional_inline}}

  - : そのプロパティは、資格情報作成処理のために潜在的な認証子をフィルタリングするために使用される基準であるオブジェクトです。このオブジェクトには、プロパティを格納することができます。

    - `authenticatorAttachment` {{optional_inline}}

      - : 選ばれた認証子に対して、どの認証子添付型を許可すべきかを示す文字列です。使用可能な値は以下の通りです。

        - `"platform"`
          - : 認証器は WebAuthn が動作する機器 (**プラットフォーム認証器**と呼ぶ) の一部であるため、WebAuthn はプラットフォーム固有の API など、そのプラットフォームで利用できるトランスポートを使用して認証器と通信します。プラットフォーム認証器にバインドされた公開鍵資格情報は、**プラットフォーム資格情報**と呼ばれます。
        - `"cross-platform"`

          - : 認証器は WebAuthn が動作している機器（異なる機器間を移動できるため **ローミング認証器**と呼ばれる）の一部ではないため、WebAuthn は Bluetooth や NFC などのクロスプラットフォーム伝送プロトコルを使用して通信します。ローミング認証器にバインドされた公開鍵資格情報は、**ローミング資格情報**と呼ばれます。

            省略すると、資格情報作成処理に、プラットフォームまたはクロスプラットフォームの任意の型 の認証子を選択できます。

    - `requireResidentKey` {{optional_inline}}

      - : 論理値です。このプロパティは非推奨ですが、WebAuthn Level 1 との後方互換性を保つために一部の実装ではまだ利用できます。`residentKey` が `"required"` に設定されている場合、値は `true` に設定する必要があります。

        省略した場合、`requireResidentKey` の既定値は `false` となります。

    - `residentKey` {{optional_inline}}

      - : 信頼当事者が**クライアント側発見可能資格情報**（すなわち、信頼当事者が資格 ID を提供しない認証リクエストで使用可能なもの - {{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}} が `allowCredentials` 値が空の状態で呼ばれる）をどの程度作成したいかを指定する文字列です。その代わり、**サーバー側資格情報**で、信頼当事者が `get()` `allowCredentials` 値で資格情報 ID を提供しなければなりません。
        使用可能な値は以下の通りです。

        - `"discouraged"`
          - : 信頼当事者は、サーバー側資格情報の作成をできれば好ましいと考えるが、クライアント側発見可能資格情報を受け入れます。
        - `"preferred"`
          - : 信頼当事者は、クライアント側の発見可能な資格情報の作成を強く希望しますが、サーバー側の資格情報 も受け入れられます。ユーザーエージェントは、発見可能な資格情報を作成するために、必要であればユーザー検証を設定するようにユーザーをガイドする必要があります。これは `userVerification` 設定に優先します。
        - `"required"`
          - : 信頼当事者は、クライアント側発見可能資格情報を必要とします。生成できない場合は、エラーが発生します。

        省略した場合、 `residentKey` は `requireResidentKey`が `true` ならば `"required"` に、そうでなければ `"discouraged"` に既定値として設定されます。

    - `userVerification` {{optional_inline}}

      - : `create()` 処理に関するユーザー検証のための信頼当事者の要件を指定する文字列です。使用可能な値は以下の通りです。

        - `"discouraged"`
          - : 信頼当事者は、ユーザーの使い勝手の低下を最小限に抑えるという観点から、`create()`操作のためのユーザー検証を行わないことを選択します。
        - `"preferred"`
          - : 信頼当事者は `create()` の処理にユーザーの環境設定を優先しますが、ユーザー認証が行えない場合でも失敗することはありません。
        - `"required"`
          - : 信頼当事者が `create()` 操作にユーザー認証を要求します。ユーザー認証を実行できない場合は、エラーが発生します。

        省略した場合、`userVerification` の既定値は `"preferred"` となります。

- `challenge`

  - : 信頼当事者のサーバーから提供された {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、または {{jsxref("DataView")}} で、 [cryptographic challenge](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) として使用されます。この値は認証者によって署名され、署名は {{domxref("AuthenticatorAttestationResponse.attestationObject")}} の一部として送り返される。

- `excludeCredentials` {{optional_inline}}

  - : このユーザーアカウントに割り当てられた既存の資格情報を記述するオブジェクトの {{jsxref("Array")}} です（`user.id` で識別されます）。これは信頼当事者によって提供され、ユーザーエージェントによって調べられます。指定したユーザーアカウントに割り当てられた資格情報をすでに持っている認証子に対して、新しい公開鍵資格情報を作成することを避けるためです。各項目は、以下の形式でなければなりません。

    - `id`

      - : 既存の資格情報を表す {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}} のいずれかです。

    - `transports` {{optional_inline}}

      - : 許可されるトランスポートを表す文字列の配列 ({{jsxref("Array")}}) です。使用可能なトランスポートは、`"ble"`、`"hybrid"`、"internal"`、"nfc"`、`"usb"` です（詳細は {{domxref("AuthenticatorAttestationResponse.getTransports", "getTransports()")}} を参照）。

    - `type`
      - : 作成する公開鍵資格情報の種類を定義する文字列。これは現在 1 つの値 `"public-key"` を導きますが、将来的にはさらに多くの値が追加されるかもしれません。

    `create()` の呼び出しが認証子で重複した公開鍵認証情報を作成しようとしている場合、ユーザーエージェントは異なる認証子を使用して認証情報を作成するようにユーザーをガイドするか、それが不可能な場合は失敗します。

    `excludeCredentials` が省略された場合、既定値として空の配列が指定されます。

- `extensions` {{optional_inline}}

  - : リクエストされた拡張機能の入力値を表すプロパティを格納したオブジェクトです。これらの拡張は、資格情報作成プロセス中にクライアントまたは認証者による追加処理を指定するために使用します。この例には、返す資格情報が発見可能かどうか、信頼当事者が資格情報に関連する大きな blob データを格納できるかどうかなどを指定することが含まれます。

    拡張機能はオプションであり、ブラウザーの種類によっては異なる拡張機能を認識することがあります。ブラウザーが指定された拡張機能を認識しない場合、それを無視するだけです。拡張機能を使用する際の情報や、どの拡張機能がどのブラウザーで対応しているかについては、[ウェブ認証拡張機能](/ja/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) を参照してください。

- `pubKeyCredParams`

  - : 信頼当事者が対応している鍵の種類と署名アルゴリズムを指定するオブジェクトの({{jsxref("Array")}}) で、最も好ましいものから最も好ましくないものへと並べる。クライアントと認証器は、使用可能な最も好ましい種類の資格情報を作成するよう最善の努力をします。これらのオブジェクトは、以下のプロパティを格納します。

    - `alg`

      - : [COSE アルゴリズム識別子](https://www.iana.org/assignments/cose/cose.xhtml#algorithms)に等しい数値です。この資格情報 の種類に使用する暗号化アルゴリズムを表します。広範囲の認証者を対応したい信頼当事者は、指定された選択肢に少なくとも以下の値を含めることが推奨されます。

        - `-8`: Ed25519
        - `-7`: ES256
        - `-257`: RS256

    - `type`
      - : 作成する公開鍵資格情報の種類を定義する文字列。これは現在 1 つの値 `"public-key"` を取りますが、将来的にはより多くの値を追加する可能性があります。

    掲載されている資格情報のいずれもが作成できない場合、`create()` 操作は失敗します。

- `rp`

  - : 資格情報の作成をリクエストされた信頼当事者を記述しているオブジェクト。以下のプロパティを格納することができます。

    - `id` {{optional_inline}}

      - : 信頼当事者の ID を表す文字列。公開鍵資格情報は、登録した信頼当事者（{{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}} 呼び出しの `publicKey.rpId` で識別）と同じ認証にしか使用できません。ID は一致している必要があります。

        `id` には標準のオリジンのようにポートやスキームを含めることはできませんが、ドメインスキームは `https` スキームである必要があります。`id` は元の実質的なドメイン、またはそのドメインサフィックスと同じである必要があります。例えば、信頼当事者のオリジンが `https://login.example.com:1337` の場合、次の `id` が有効です。

        - `login.example.com`
        - `example.com`

        しかし、下記のものは有効にはなりません。

        - `m.login.example.com`
        - `com`

        省略した場合、`id` は文書のオリジンを既定値とします。上記の例では `login.example.com` となります。

    - `name`
      - : 信頼当事者の名前を表す文字列（例：`"Facebook"`）。 これは、WebAuthn を作成したり、処理を検証したりするときに、ユーザーが表示する名前です。

- `timeout` {{optional_inline}}

  - : 呼び出されるウェブアプリケーションが作成処理を完了するまでの待ち時間を示すミリ秒単位の数値ヒントです。このヒントは、ブラウザーによって上書きされる可能性があります。

- `user`

  - : 資格情報が生成されるユーザーアカウントを記述しているオブジェクトです。以下のプロパティを格納することができます。

    - `displayName`

      - : 人間にとってわかりやすいユーザーの表示名（例えば、`"John Doe"`）を提供する文字列で、信頼当事者の初期登録時にユーザーによって設定されるものです。

    - `id`

      - : ユーザーアカウントに対して固有のIDを表す {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}} です。この値は最大 64 バイトの長さを持ち、ユーザーに表示されることを意図していません。

    - `name`
      - : `displayName` が似ている異なるアカウントを判別するのに役立つ、ユーザーアカウントの親しみやすい識別子を提供する文字列です。この例では、メールアドレス（例えば "john.doe@example.com"`）、電話番号（例えば "+12345678901"`）、または他にもユーザーアカウントの識別子（例えば "johndoe667"`）が考えられます。

- `hints` {{optional_inline}}

  - : ユーザーエージェントがユーザーに提供すべき認証 UI のヒントを示す文字列の配列です。

    値は以下のいずれかになります。

    - `"security-key"`
      - : 認証には、鍵を提供するための別個の専用物理端末が要求されます。
    - `"client-device"`
      - : ユーザーは自分自身で携帯電話などの端末を使用して認証します。
    - `"hybrid"`
      - : 認証は、認可/認証メソッドの組み合わせに頼っており、ユーザーベースとサーバーベースの両方のメカニズムに頼っている可能性があります。

### 返値

指定された引数に一致する {{domxref("PublicKeyCredential")}} インスタンスに解決する {{jsxref("Promise")}} です。資格情報オブジェクトを作成できない場合、プロミスは `null` で解決されます。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : 以下のような原因で発生します。
    - {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)により、使用がブロックされました。
    - この関数がオリジン間で呼び出されましたが、iframe の [`allow`](/ja/docs/Web/HTML/Element/iframe#allow) 属性に適切な {{HTTPHeader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} ポリシーが設定されていません。
    - この関数がオリジン間で呼び出されましたが、`<iframe>` は{{glossary("transient activation", "一時的な有効化")}}が行われていません。

## 例

以下のスニペットは、WebAuthn の `publicKey` オプションを指定した典型的な `create()` 呼び出しを示しています。

```js
const publicKey = {
  challenge: new Uint8Array([117, 61, 252, 231, 191, 241, ...]),
  rp: { id: "acme.com", name: "ACME Corporation" },
  user: {
    id: new Uint8Array([79, 252, 83, 72, 214, 7, 89, 26]),
    name: "jamiedoe",
    displayName: "Jamie Doe"
  },
  pubKeyCredParams: [ {type: "public-key", alg: -7} ]
}

navigator.credentials.create({ publicKey })
```

`create()` の呼び出しに成功すると、 {{domxref("PublicKeyCredential")}} オブジェクトインスタンスに解決するプロミスを返します。これは、後に WebAuthn {{domxref("CredentialsContainer.get()", "get()")}} 呼び出しでユーザーを認証するために使用できる公開鍵資格情報を表しています。その {{domxref("PublicKeyCredential.response")}} プロパティには {{domxref("AuthenticatorAttestationResponse")}} オブジェクトが格納され、認証データ、公開鍵、転送メカニズムなど、いくつかの有益な情報にアクセスすることができます。

```js
navigator.credentials.create({ publicKey }).then((publicKeyCredential) => {
  const response = publicKeyCredential.response;

  // Access attestationObject ArrayBuffer
  const attestationObj = response.attestationObject;

  // Access client JSON
  const clientJSON = response.clientDataJSON;

  // Return authenticator data ArrayBuffer
  const authenticatorData = response.getAuthenticatorData();

  // Return public key ArrayBuffer
  const pk = response.getPublicKey();

  // Return public key algorithm identifier
  const pkAlgo = response.getPublicKeyAlgorithm();

  // Return permissible transports array
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
