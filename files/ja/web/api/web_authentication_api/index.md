---
title: ウェブ認証 API
slug: Web/API/Web_Authentication_API
l10n:
  sourceCommit: 4f8c4b31478742a2a39fdb03993d08fc1c90bbea
---

{{securecontext_header}}{{DefaultAPISidebar("Web Authentication API")}}

ウェブ認証 API (WebAuthn) は、公開鍵暗号を用いて強力な認証を可能にする[資格情報管理 API](/ja/docs/Web/API/Credential_Management_API) の拡張機能で、パスワードレス認証や、 SMS テキストを用いない安全な多要素認証 (MFA) を実現します。

## WebAuthn の概念と使い方

ウェブ認証 API (WebAuthn) は、パスワードや SMS のテキストを使用するのではなく、[公開鍵暗号](https://ja.wikipedia.org/wiki/公開鍵暗号)を使用して、ウェブサイトで登録、認証、[多要素認証](https://ja.wikipedia.org/wiki/多要素認証)を行います。これにはいくつかの利点があります。

- **フィッシングからの保護:** 偽のログインサイトを作成した攻撃者は、ユーザーとしてログインすることができません。サイトの[オリジン](/ja/docs/Glossary/Origin)で署名が変わるためです。
- **情報漏洩の影響を軽減:** 開発者は公開鍵をハッシュ化する必要がありません。攻撃者が認証に使用した公開鍵にアクセスしても、秘密鍵が必要なため認証ができないためです。
- **パスワード攻撃が無効：** ユーザーによってはパスワードを再利用する可能性があり、攻撃者は別のウェブサイト用にユーザーのパスワードを（例えば、データ漏洩を介して）取得する可能性があります。また、テキストのパスワードは、デジタル署名よりも総当たりがはるかに容易です。

多くのウェブサイトには既に、ユーザーが新規アカウントを登録したり既存アカウントにログインしたりできるページが存在します。 WebAuthn は、このシステムの認証部分を置き換えたり、強化したりする役割を果たします。これは[資格情報管理 API](/ja/docs/Web/API/Credential_Management_API) を拡張し、ユーザーエージェントと認証器 (authenticator) の間のやりとりを抽象化するとともに、以下の新機能を提供します。

- {{domxref("CredentialsContainer.create()", "navigator.credentials.create()")}} を `publicKey` オプション付きで使用すると、ユーザーエージェントは認証器を通して新たな資格情報を生成します。新しいアカウントの登録、または既存のアカウントへの新しい非対称鍵ペアの関連付けのためにこれを行います。
  - 新しいアカウントを登録する際、これらの資格情報はサーバー（サービスまたは[認証依頼者](https://en.wikipedia.org/wiki/Relying_party)（以下 RP、relying party）とも呼ばれる）に登録され、のちのログインで使用することができます。
  - 非対称鍵ペアは認証器に保存され、これを例えば多要素認証 (MFA) の際に、ユーザーを RP で認証するために使用することができます。認証器は Windows Hello などのように OS に組み込むこともできますし、 USB や Bluetooth セキュリティキーなどの物理的なトークン機器とすることもできます。
- {{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}} を `publicKey` オプション付きで使用すると、ユーザーエージェントは既存の資格情報一式を、RP の認証に使用します（前述のように、プライマリログインとして、または MFA における追加要素の提供として）。

最も基本的な形としては、`create()` と `get()` の両方が、「チャレンジ」と呼ばれるとても大きな乱数をサーバーから受け取り、秘密鍵によって署名されたチャレンジをサーバーに返します。これは、ネットワーク上で秘密情報を一切漏らすことなく、ユーザーが認証に必要な秘密鍵を保持していることをサーバーに証明することができます。

> [!NOTE]
> 「チャレンジ」は、少なくとも 16 バイトのサイズのランダムな情報のバッファーでなければなりません。

### 鍵ペアの生成とユーザーの登録

資格情報の作成プロセスがどのように機能するかを説明するために、ユーザーが RP に対して資格情報を登録しようとする際に発生する一般的な流れを以下に記述します。

1. RP サーバーは、適切な保護された仕組み（[フェッチ](/ja/docs/Web/API/Fetch_API)や [XMLHttpRequest](/ja/docs/Web/API/XMLHttpRequest) など）を使用して、ユーザー情報とRP 情報を、登録処理を担当するウェブアプリケーションに「チャレンジ」と共に送信します。

   > [!NOTE]
   > RP サーバーとウェブアプリケーション間で情報を共有する形式は、アプリケーション次第です。
   > 推奨される方法は、資格情報および資格情報オプションに対して {{glossary("JSON type representation", "JSON 型表現")}}オブジェクトを交換することです。
   > `PublicKeyCredential` には、JSON 表現から認証 API で要求される形式への変換を行うための便利なメソッドが用意されています。 {{domxref("PublicKeyCredential.parseCreationOptionsFromJSON_static", "parseCreationOptionsFromJSON()")}}、{{domxref("PublicKeyCredential.parseRequestOptionsFromJSON_static", "parseRequestOptionsFromJSON()")}}、{{domxref("PublicKeyCredential.toJSON()")}} です。

2. ウェブアプリは、RP 代わりに、 {{domxref("CredentialsContainer.create()", "navigator.credentials.create()")}} 呼び出しを通じて、認証器による新しい認証情報の生成を開始します。この呼び出しには `publicKey` オプションが渡され、端末の機能（生体認証などによる独自のユーザー認証を提供するかどうかなど）を指定します。

   一般的な `create()` 呼び出しは、次のようなものになります。

   ```js
   let credential = await navigator.credentials.create({
     publicKey: {
       challenge: new Uint8Array([117, 61, 252, 231, 191, 241 /* … */]),
       rp: { id: "acme.com", name: "ACME Corporation" },
       user: {
         id: new Uint8Array([79, 252, 83, 72, 214, 7, 89, 26]),
         name: "jamiedoe",
         displayName: "Jamie Doe",
       },
       pubKeyCredParams: [{ type: "public-key", alg: -7 }],
     },
   });
   ```

   `create()` 呼び出しの引数は、改ざん防止のため、署名された SHA-256 ハッシュと共に認証器に渡されます。

3. 認証器はユーザーの同意を取得した後、鍵ペアを生成し、公開鍵とオプションの署名付きアテステーション (attestation) をウェブアプリに返します。これは、 `create()` 呼び出しが返す {{jsxref("Promise")}} が履行された際に、 {{domxref("PublicKeyCredential")}} オブジェクトインスタンスの形式で提供されます（{{domxref("PublicKeyCredential.response")}} プロパティにはアテステーションが含まれます）。

4. ウェブアプリは、適切な仕組みを使用して再度、{{domxref("PublicKeyCredential")}} を RP サーバーに転送します。

5. RP サーバーは、公開鍵とユーザー ID を組み合わせて保存し、将来の認証のために資格情報を記憶します。このプロセスの中で、登録が完全に行われ改ざんされていないことを確認するための一連のチェックを実行します。これには以下のもの含まれます。
   1. 送信されたチャレンジと同一のチャレンジであることを確認する。
   2. オリジンが想定されたオリジンであることを確認する。
   3. 署名およびアテステーションが、最初の場面で鍵ペアを生成するために認証器の特定のモデルに対して、正しい証明書チェーンを使用していることを検証する。

> [!WARNING]
> アテステーションは、RP が認証器の出所を判断する手段を提供します。RP は、認証器の許可リストを保持しようとすべきではありません。

### ユーザーの認証

ユーザーが WebAuthn に登録されたら、サービスに対して認証（ログイン）を行うことができます。認証フローは登録フローと類似していますが、主な違いは以下の通りです。

1. ユーザーまたは RP の情報を必要としない。
2. 認証器の鍵ペアではなく、サービス用に事前に生成された鍵ペアを使用してアサーションを作成する。

一般的な認証フローは以下の通りです。

1. RP は「チャレンジ」を生成し、RP およびユーザーの資格情報のリストと共にユーザーエージェントへ、適切な保護された機構を用いて送信する。また、資格情報の検索先、例えばローカル内蔵認証器、USB や BLE 経由の外部認証器などを指定することもできる。

2. ブラウザーは {{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}} 呼び出しを介して、認証器にチャレンジの署名を依頼し、その際に `publicKey` オプションで証明書を渡す。

   一般的な `get()` 呼び出しは次のようになります。

   ```js
   let credential = await navigator.credentials.get({
     publicKey: {
       challenge: new Uint8Array([139, 66, 181, 87, 7, 203 /* … */]),
       rpId: "acme.com",
       allowCredentials: [
         {
           type: "public-key",
           id: new Uint8Array([64, 66, 25, 78, 168, 226, 174 /* … */]),
         },
       ],
       userVerification: "required",
     },
   });
   ```

   `get()` 呼び出しの引数は、認証を処理するために認証器に渡されます。

3. 認証器が指定された資格情報のいずれかを含み、かつチャレンジへの署名が成功した場合、ユーザーの同意を得た後、署名付きアサーションをウェブアプリに返す。これは、 `get()` 呼び出しが返す {{jsxref("Promise")}} が履行された際に、 {{domxref("PublicKeyCredential")}} オブジェクトインスタンスの形式で提供される（{{domxref("PublicKeyCredential.response")}} プロパティにアサーション情報が含まれる）。

4. ウェブアプリは署名付きアサーションを RP サーバーに転送し、RP が検証します。この検証では以下の点をチェックします。
   1. 登録リクエスト時に保存された公開鍵を使用して、認証器による署名を検証する。
   2. 認証者が署名したチャレンジが、サーバーによって生成されたチャレンジと一致することを確認する。
   3. このサービスに対して期待される RP の ID であることを確認する。

5. サーバーによる検証が完了すると、認証フローは成功と見なされます。

### 検出可能な資格情報と条件付き仲介

**検出可能な資格情報**は、認証器から取得されます（ブラウザーによって検出されます）。これは、ユーザーが RP のウェブアプリにログインする際のログインオプションとして提供されます。これに対し、検出可能でない資格情報は、RP のサーバーによって提供され、ブラウザーがログインオプションとして提示します。

検出可能な資格情報 ID および[ユーザー名](/ja/docs/Web/API/PublicKeyCredentialCreationOptions#name_2)や[表示名](/ja/docs/Web/API/PublicKeyCredentialCreationOptions#displayname)などの関連メタデータは、ブラウザーのパスワードマネージャー、 認証アプリ、ハードウェアソリューション（YubiKey など）といったクライアント側の認証器に格納するために保存されます。この情報を認証器で利用できる状態にすることで、ユーザーは資格情報を入力せずに便利にログインできるし、その資格情報をアサーションする際に、RP は [`credentialId`](/ja/docs/Web/API/PublicKeyCredentialRequestOptions#id) を提供する必要を持ちません（ただし、必要に応じて提供することは可能です。RP が資格情報をアサーションする場合は、検出可能でないワークフローに従います）。

検出可能な資格情報は、[`create()`](/ja/docs/Web/API/CredentialsContainer/create) の呼び出しで [`residentKey`](/ja/docs/Web/API/PublicKeyCredentialCreationOptions#residentkey) を指定することで作成されます。新しい資格情報の`credentialId`、ユーザーメタデータ、公開鍵は、前述のように認証器に格納されるだけでなく、ウェブアプリにも返され、 RP サーバーに保存されます。

認証において、 RP サーバーは**条件付き仲介**を指定して [`get()`](/ja/docs/Web/API/CredentialsContainer/get) を呼び出す際に**条件付き仲介**を指定します。具体的には、[`mediation`](/ja/docs/Web/API/CredentialsContainer/get#mediation) を `conditional` に設定し、空の [`allowCredentials`](/ja/docs/Web/API/PublicKeyCredentialRequestOptions#allowcredentials) リスト（つまり、検出可能な資格情報のみが表示可能であるということ）、およびチャレンジを指定します。

条件付き仲介では、認証器で得られる検出可能な資格情報が、資格情報を要求しているオリジンとともに、モーダルダイアログではなく非モーダル UI でユーザーに表示ます。具体的には、ログインフォームで利用できる認証情報を自動入力するということです。検出可能な資格情報に保存されたメタデータは、ユーザーがログイン時に資格情報を選択するための参考になるよう表示できます。ログインフォームで検出可能な資格情報を表示するには、フォームフィールドに [`autocomplete="webauthn"`](/ja/docs/Web/HTML/Reference/Attributes/autocomplete#webauthn) を同時に記載する必要があります。

繰り返しますが、RP は認証器に、何の資格情報をユーザーに提示すべきかを指示しません。代わりに、認証器が利用可能な資格情報のリストを提供します。ユーザーが資格情報を選択すると、認証器はそれに対応する秘密鍵でチャレンジに署名し、ブラウザーは署名済みチャレンジとその`credentialId`を RP サーバーに返します。

RP サーバーにおけるその後の認証プロセスは、検出可能でない資格情報の場合と同様です。

> [!NOTE]
> 特定のユーザーエージェントで条件付き仲介が利用可能かどうかは、 {{domxref("PublicKeyCredential.isConditionalMediationAvailable()")}} メソッドを呼び出すことで確認できます。

[パスキー](https://passkeys.dev/)は、検出可能な認証情報の重要な使用例です。実装の詳細については、[パスワードレスログイン用のパスキーを作成する（英語）](https://web.dev/articles/passkey-registration)および[フォームの自動入力によるパスキーでのログイン（英語）](https://web.dev/articles/passkey-form-autofill)を参照してください。検出可能な資格情報に関するより一般的な情報については、[検出可能な資格情報の詳細解説（英語）](https://web.dev/articles/webauthn-discoverable-credentials)も参照してください。

条件付き仲介が認証に使用される場合、サイレントアクセス防止フラグ（{{domxref("CredentialsContainer.preventSilentAccess()")}} 参照）は実際の値に関わらず `true` と 扱われます。適用可能な資格情報が検出された場合、条件付きの動作は常に何らかのユーザー仲介を伴います。

> [!NOTE]
> 資格情報が検出されなかった場合、非モーダルダイアログは表示されず、ユーザーエージェントは資格情報の種類に応じて（例えば、資格情報を持つ機器の挿入など）、ユーザーにアクションを促すことができます。

#### 検出可能な資格情報の同期方法

ユーザーの認証器に格納されている検出可能な資格情報については、RP のサーバーと同期しなくなる可能性があります。これは、ユーザーが認証器を更新せずに、 RP ウェブアプリ上で認証情報を削除したり、ユーザー名/表示名を変更したりした場合に生じる可能性があります。

この API は、RP サーバーが認証器に変更のシグナルを送信し、格納される資格情報を更新できるようにするための方法を提供します。

- {{domxref("PublicKeyCredential.signalAllAcceptedCredentials_static", "PublicKeyCredential.signalAllAcceptedCredentials()")}}: 認証器に対して、 RP サーバーが特定のユーザーに対して保持しているすべての有効な資格情報 ID をシグナルします。
- {{domxref("PublicKeyCredential.signalCurrentUserDetails_static", "PublicKeyCredential.signalCurrentUserDetails()")}}: 特定のユーザーが RP サーバー上でユーザー名や表示名を更新していることを、認証器にシグナルします。
- {{domxref("PublicKeyCredential.signalUnknownCredential_static", "PublicKeyCredential.signalUnknownCredential()")}}: RP サーバーが資格情報 ID を認識しなかったことを認証器にシグナルします。

`signalUnknownCredential()` と `signalAllAcceptedCredentials()` は、目的が似ているように見えるかもしれませんが、それぞれどのような状況で使用すべきでしょうか？

- `signalAllAcceptedCredentials()` は、ログインに成功した後、およびユーザーがログイン状態で資格情報の状態を更新したい場合に呼び出す必要があります。このメソッドは、そのユーザーに対する `credentialId` のリスト全体を共有するため、ユーザーが認証されている場合にのみ呼び出す必要があります。ユーザーが認証されていない状態で呼び出すと、プライバシー漏洩が発生します。
- `signalUnknownCredential()` は、ログイン失敗後に呼び出すべきです。これにより、選択された認証情報の `credentialId` が検証不能であり、除去されるべきであることを認証器にシグナルとして送ります。このメソッドは、ユーザーが認証されていない状態でも安全に呼び出せます。なぜなら、認証器に渡すのは単一の `credentialId`（クライアントが直前に認証を試みたもの）のみで、ユーザー情報は一切含まれないからです。

### クライアントの能力に基づいた独自のワークフローのカスタマイズ

登録とログインのワークフローは、WebAuthn クライアント（ブラウザー）の機能に基づいて、独自のカスタマイズが可能です。 {{domxref("PublicKeyCredential.getClientCapabilities_static", "PublicKeyCredential.getClientCapabilities()")}} 静的メソッドを使用することができます。このメソッドはオブジェクトを返し、それぞれのキーは WebAuthn の機能または拡張を参照し、それぞれの値はその機能に対応しているかどうかを示す論理値です。

これは、例えば以下のことをチェックするために使用することができます。

- クライアントのパスキーや生体認証などの様々な認証方式についての対応状況。
- クライアントが [RP と認証器の資格情報を同期させる方法に対応しているか](#検出可能な資格情報の同期方法)。
- クライアントが、同一オリジンを持つ異なるウェブサイトで単一のパスキーを使用することを許可するかどうか。

以下のコードは、`getClientCapabilities()` を使用して、クライアントが生体認証によるユーザー認証に対応しているかどうかを確認する方法を示しています。
実際の動作はサイトによって異なることに注意してください。
生体認証を必須とするサイトでは、ログイン UI を置き換え、生体認証が必要である旨と、ユーザーが別のブラウザーや端末を試すよう促すメッセージを表示することができます。

```js
async function checkIsUserVerifyingPlatformAuthenticatorAvailable() {
  const capabilities = await PublicKeyCredential.getClientCapabilities();
  // 機能の確認: userVerifyingPlatformAuthenticator
  if (capabilities.userVerifyingPlatformAuthenticator) {
    // 生体認証に対応している場合に行う処理
  } else {
    // 生体認証に対応していない場合に行う処理
  }
}
```

## API へのアクセス制御

WebAuthnの利用可否は、[権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)を使用して制御できます。特に以下の 2 つのディレクティブを指定します：

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}}: {{domxref("CredentialsContainer.create", "navigator.credentials.create()")}} に `publicKey` オプションを使用した場合の利用可否を制御します。
- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}}: {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} に `publicKey` オプションを使用した場合の利用可否を制御します。

両方のディレクティブとも、既定の許可リスト値は `"self"` です。これは、既定ではこれらのメソッドが最上位の文書コンテキストで使用できることを意味します。
さらに、`get()` は最上位の文書と同じオリジンから読み込まれた、その中に含まれる閲覧コンテキストでも使用できます。
`get()` および `create()` は、最上位の文書とは異なるオリジンから読み込まれた、入れ子にされた閲覧コンテキスト（つまり、異なるオリジンの `<iframes>` 内）で、`Permissions-Policy` の [`publickey-credentials-get`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-get) および [`publickey-credentials-create`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-create) ディレクティブによって許可されている場合に限ります。
オリジンをまたいだ `create()` 呼び出しにおいて、[iframe の `allow=`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) によって許可が与えられた場合、そのフレームは{{glossary("Transient activation", "一時的な有効化")}}もされていなければなりません。

> [!NOTE]
> ポリシーがこれらのメソッドの使用を禁止している場合、それらが返す{{jsxref("Promise", "プロミス", "", 1)}}は `NotAllowedError` の {{domxref("DOMException")}} で拒否されます。

### 基本的なアクセス制御

特定のサブドメインのみへのアクセスを許可したい場合は、次のように指定できます。

```http
Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
Permissions-Policy: publickey-credentials-create=("https://subdomain.example.com")
```

### `<iframe>` 内に埋め込まれた `create` および `get()` 呼び出しを許可

`<iframe>` 内で `get()` または `create()` による認証を行う場合、以下の手順に従ってください。

1. RP サイトを埋め込むサイトは、 `allow` 属性で許可する必要があります。
   - `get()` を使用する場合:

     ```html
     <iframe
       src="https://auth.provider.com"
       allow="publickey-credentials-get *">
     </iframe>
     ```

   - `create()` を使用する場合:

     ```html
     <iframe
       src="https://auth.provider.com"
       allow="publickey-credentials-create 'self' https://a.auth.provider.com https://b.auth.provider.com">
     </iframe>
     ```

     `create()` がオリジンをまたいで呼び出される場合、 `<iframe>` には{{glossary("Transient activation", "一時的な有効化")}}も必要です。

2. RP サイトは、`Permissions-Policy` ヘッダーを介して上記のアクセスに対して許可する必要があります。

   ```http
   Permissions-Policy: publickey-credentials-get=*
   Permissions-Policy: publickey-credentials-create=*
   ```

   または、特定の URL のみが `<iframe>` 内で依存先サイトを表示できるようにします。

   ```http
   Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
   Permissions-Policy: publickey-credentials-create=("https://*.auth.provider.com")
   ```

## インターフェイス

- {{domxref("AuthenticatorAssertionResponse")}}
  - : サービスに対し、認証者が {{domxref("CredentialsContainer.get()")}} 呼び出しによって開始された認証要求を正常に処理するために必要な鍵ペアを保持していることを証明します。`get()` の {{jsxref("Promise")}} が履行された際に取得される {{domxref("PublicKeyCredential")}} インスタンスの {{domxref("PublicKeyCredential.response", "response")}} プロパティで利用可能です。
- {{domxref("AuthenticatorAttestationResponse")}}
  - : WebAuthn 資格情報の登録結果（つまり、{{domxref("CredentialsContainer.create()")}} の呼び出し）。これには、サーバーが WebAuthn アサーションを実行するために必要な資格情報に関する情報が含まれます。例えば、資格情報 ID や公開鍵などです。`create()` の {{jsxref("Promise")}} が履行された際に取得される {{domxref("PublicKeyCredential")}} インスタンスの {{domxref("PublicKeyCredential.response", "response")}} プロパティで利用可能です。
- {{domxref("AuthenticatorResponse")}}
  - : {{domxref("AuthenticatorAttestationResponse")}} および {{domxref("AuthenticatorAssertionResponse")}} の基本インターフェイスです。
- {{domxref("PublicKeyCredential")}}
  - : 公開鍵 / 秘密鍵ペアに関する情報を提供します。これは、パスワードの代わりにフィッシング攻撃やデータ侵害に耐性のある非対称鍵ペアを使用してサービスにログインするための認証情報です。 {{jsxref("Promise")}} が {{domxref("CredentialsContainer.create", "create()")}} または {{domxref("CredentialsContainer.get", "get()")}} の呼び出しを通じて返され解決されたときに取得されます。

## 他のインターフェイスへの拡張

- {{domxref("CredentialsContainer.create()")}} の `publicKey` オプション
  - : `create()` を `publicKey` オプション付きで呼び出すと、前述のように認証器を介して新しい非対称鍵資格情報の作成が開始されます。
- {{domxref("CredentialsContainer.get()")}} の `publicKey` オプション
  - : `get()` を `publicKey` オプション付きで呼び出すと、ユーザーエージェントは既存の資格情報セットを使用して信頼先への認証を実行するよう指示されます。

## 例

### デモサイト

- [Mozilla デモ](https://webauthn.bin.coffee/)ウェブサイトとその[ソースコード](https://github.com/jcjones/webauthn.bin.coffee)。
- [Google デモ](https://try-webauthn.appspot.com/)ウェブサイトとその[ソースコード](https://github.com/google/webauthndemo)。
- [WebAuthn.io デモ](https://webauthn.io/)ウェブサイトとその[ソースコード](https://github.com/duo-labs/webauthn.io)。
- [github.com/webauthn-open-source](https://github.com/webauthn-open-source) とその[クライアントソースコード](https://github.com/webauthn-open-source/webauthn-simple-app)と[サーバーソースコード](https://github.com/webauthn-open-source/fido2-lib)

### 使用法の例

> [!NOTE]
> セキュリティの観点から、ウェブ認証の呼び出し（{{domxref("CredentialsContainer.create", "create()")}} や {{domxref("CredentialsContainer.get","get()")}}）が保留されている間にブラウザーウィンドウのフォーカスが失われると、呼び出しはキャンセルされます。

```js
// 登録のサンプル引数
const createCredentialDefaultArgs = {
  publicKey: {
    // 認証依頼者（別名、RP、サービス）:
    rp: {
      name: "Acme",
    },
    // User:
    user: {
      id: new Uint8Array(16),
      name: "carina.p.anand@example.com",
      displayName: "Carina P. Anand",
    },
    pubKeyCredParams: [
      {
        type: "public-key",
        alg: -7,
      },
    ],
    attestation: "direct",
    timeout: 60000,
    challenge: new Uint8Array([
      // サーバーから暗号学的にランダムな値が送られていなければならない
      0x8c, 0x0a, 0x26, 0xff, 0x22, 0x91, 0xc1, 0xe9, 0xb9, 0x4e, 0x2e, 0x17,
      0x1a, 0x98, 0x6a, 0x73, 0x71, 0x9d, 0x43, 0x48, 0xd5, 0xa7, 0x6a, 0x15,
      0x7e, 0x38, 0x94, 0x52, 0x77, 0x97, 0x0f, 0xef,
    ]).buffer,
  },
};

// ログインのサンプル引数
const getCredentialDefaultArgs = {
  publicKey: {
    timeout: 60000,
    // allowCredentials: [newCredential] // 下記参照
    challenge: new Uint8Array([
      // サーバーから暗号学的にランダムな値が送られていなければならない
      0x79, 0x50, 0x68, 0x71, 0xda, 0xee, 0xee, 0xb9, 0x94, 0xc3, 0xc2, 0x15,
      0x67, 0x65, 0x26, 0x22, 0xe3, 0xf3, 0xab, 0x3b, 0x78, 0x2e, 0xd5, 0x6f,
      0x81, 0x26, 0xe2, 0xa6, 0x01, 0x7d, 0x74, 0x50,
    ]).buffer,
  },
};

// 新しい認証情報の作成/登録
navigator.credentials
  .create(createCredentialDefaultArgs)
  .then((cred) => {
    console.log("NEW CREDENTIAL", cred);
    // 通常はサーバーから利用可能なアカウントの認証情報が送られてきますが
    // この例では上からコピーしただけです。
    const idList = [
      {
        id: cred.rawId,
        transports: ["usb", "nfc", "ble"],
        type: "public-key",
      },
    ];
    getCredentialDefaultArgs.publicKey.allowCredentials = idList;
    return navigator.credentials.get(getCredentialDefaultArgs);
  })
  .then((assertion) => {
    console.log("ASSERTION", assertion);
  })
  .catch((err) => {
    console.log("ERROR", err);
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
