---
title: FedCM によるアイデンティティプロバイダー連携
slug: Web/API/FedCM_API/IDP_integration
l10n:
  sourceCommit: 30bb7c6b5b9f3e19276a8c528134fe78f131c9a5
---

{{DefaultAPISidebar("FedCM API")}}

この記事では、{{glossary("Identity provider", "アイデンティティプロバイダー")}} (IdP) が、連合資格情報管理 (FedCM) API と連携するために必要なすべての手順について詳しく説明します。

## IdP 連携の手順

FedCM と連携するには、IdP は以下の手順を実行する必要があります。

1. [well-known ファイルを提供](#well-known_ファイルを提供)して IdP を識別する。
2. アカウントの一覧表示およびアサーションの発行（およびオプションでクライアントのメタデータ）のために、[構成ファイルとエンドポイントを提供する](#構成ファイルとエンドポイントの提供)。
3. ログイン状態 API を使用して、[ログイン状態を更新する](#ログイン状態_api_を使用してログイン状態を更新する)。

## well-known ファイルを提供

潜在的なプライバシーの問題として、[IdP が、明示的な同意なしに、ユーザーが認証依頼者 (RP) にアクセスしたかどうかを判別できる](https://github.com/w3c-fedid/FedCM/issues/230)という問題が存在します。これはトラッキングに関連する課題であるため、IdP は自身の身元を確認し、この課題を軽減するために、well-known ファイルを提供することが要求されます。

この well-known ファイルは、認証情報を必要としない [`GET`](/ja/docs/Web/HTTP/Reference/Methods/GET) を通じてリクエストされますが、このリクエストはリダイレクトを追跡しないため、IdP がリクエストの発信者や、どの {{glossary("Relying party", "RP")}} が接続を試みているかを知るのを防ぐことができます。

well-known ファイルは、IdP の 登録可能なドメイン の `/.well-known/web-identity` から提供しなければなりません。例えば、IdP のエンドポイントが `https://accounts.idp.example/` で提供されている場合、`https://idp.example/.well-known/web-identity` で well-known ファイルを提供する必要があります。well-known ファイルのコンテンツは、以下の JSON 構造です。

```json
{
  "provider_urls": ["https://accounts.idp.example/config.json"]
}
```

`provider_urls` メンバーには、RP が IdP と対話するために使用できる、有効な IdP 設定ファイルを指す URL の配列が含まれている必要があります。現在、この配列の長さは 1 に制限されています。

## HTTP の `Sec-Fetch-Dest` ヘッダー

FedCM を介してブラウザーから送信されるすべてのリクエストには、`{{httpheader("Sec-Fetch-Dest")}}: webidentity` ヘッダーが記載されます。資格情報リクエストを受信するすべての IdP エンドポイント（つまり、`accounts_endpoint` および `id_assertion_endpoint`）は、{{glossary("CSRF")}} 攻撃から保護するために、このヘッダーが含まれていることを確認する必要があります。

## 構成ファイルとエンドポイントの提供

IdPの構成ファイルには、ブラウザーがアイデンティティ連係フローを処理し、ログインを管理するために必要なエンドポイントの一覧が提供されます。これらのエンドポイントは、構成ファイルと同じオリジンである必要があります。

ブラウザーは、[`GET`](/ja/docs/Web/HTTP/Reference/Methods/GET) メソッドを使用して、資格情報なしで構成ファイルへのリクエストを行います。このリクエストはリダイレクトを追跡しません。これにより、IdP がリクエストの送信者や、接続を試みているRPを把握するのを効果的に防ぐことができます。

設定ファイル（この例では `https://accounts.idp.example/config.json` にホストされています）は、以下の JSON 構造である必要があります。

```json
{
  "accounts_endpoint": "/accounts.php",
  "account_label": "developer",
  "supports_use_other_account": true,
  "client_metadata_endpoint": "/client_metadata.php",
  "disconnect_endpoint": "/disconnect.php",
  "id_assertion_endpoint": "/assertion.php",
  "login_url": "/login",
  "branding": {
    "background_color": "green",
    "color": "0xFFEEAA",
    "icons": [
      {
        "url": "https://idp.example/icon.ico",
        "size": 25
      }
    ]
  }
}
```

プロパティは以下の通りです。

- `accounts_endpoint`
  - : アカウント一覧エンドポイントの URL。このエンドポイントからは、ユーザーが IdP に現在ログインしているアカウントの一覧が返されます。ブラウザーはこれを使用して、ブラウザーが提供する FedCM UI 上でユーザーに表示させるログイン選択肢の一覧を作成します。
- `account_label` {{optional_inline}}
  - : この文字列を指定すると、この IdP が連合認証に使用される際に、返されるべきアカウントのサブセットの識別子が指定されます。`get()` リクエストが行われた場合、[アカウントエンドポイント](#アカウントリストのエンドポイント)からは、`label_hints` 引数がこの文字列と一致するアカウントのみが返されます。
- `supports_use_other_account` {{optional_inline}}
  - : 論理値で、デフォルトは `false` です。`true` に設定すると、ユーザーは現在ログインしているアカウントとは異なるアカウントでログイン可能になります（IdP が複数のアカウントに対応している場合）。これは、[アクティブモード](/ja/docs/Web/API/IdentityCredentialRequestOptions#active) を指定した `get()` 呼び出しにのみ適用されます。
    > [!NOTE]
    > ブラウザーのログイン画面では、このボタンは同様に「別のアカウントを選択」といったボタンとして表示されるでしょう。
- `client_metadata_endpoint` {{optional_inline}}
  - : FedCM UI で使用する、クライアントメタデータエンドポイントの URL。このエンドポイントは、RP のメタデータおよび利用規約ページへの URL を指定します。
- `disconnect_endpoint` {{optional_inline}}
  - : RP が {{domxref("IdentityCredential.disconnect_static", "IdentityCredential.disconnect()")}} メソッドを介して IdP からの接続を切断するために使用する、切断エンドポイントの URL。
- `id_assertion_endpoint`
  - : ID アサーションエンドポイントの URL。ここに有効なユーザー資格情報を送信すると、RP が認証の検証に使用することができる検証トークンが返される。
- `login_url`
  - : ユーザーが IdP にログインするためのログインページの URL。
- `branding` {{optional_inline}}
  - : IdP の希望に応じて外観をカスタマイズするために、ブラウザーが提供する FedCM UI で使用されるブランド情報を記述します。指定されたアイコンのサイズは、パッシブモードでは `25` (`25px`) 以上、アクティブモードでは `40` (`40px`) 以上でなければなりません（詳細については、[アクティブモードとパッシブモード](/ja/docs/Web/API/FedCM_API/RP_sign-in#アクティブモードとパッシブモード)を参照してください）。

以下の表は、FedCM API によって行われるさまざまなリクエストをまとめたものです。

| エンドポイント/リソース    | メソッド | 資格情報（クッキー付き） | {{httpheader("Origin")}} を含む |
| -------------------------- | -------- | ------------------------ | ------------------------------- |
| `well-known`/`config.json` | `GET`    | なし                     | なし                            |
| `accounts_endpoint`        | `GET`    | あり                     | なし                            |
| `client_metadata_endpoint` | `GET`    | なし                     | あり                            |
| `disconnect_endpoint`      | `POST`   | あり                     | あり                            |
| `id_assertion_endpoint`    | `POST`   | あり                     | あり                            |

> [!NOTE]
> これらのエンドポイントが呼び出される FedCM フローの詳細については、[FedCM ログインフロー](/ja/docs/Web/API/FedCM_API/RP_sign-in#fedcm_のログインフロー)を参照してください。

> [!NOTE]
> FedCM API がここで説明するエンドポイントに対して行うリクエストは、プライバシー保護の観点から、リダイレクトを追跡することは許可されていません。

### アカウントリストのエンドポイント

ブラウザーは、`GET`メソッドを使用してこのエンドポイントにリクエストを送信します。このリクエストには、`client_id` 引数、{{httpheader("Origin")}} ヘッダー、{{httpheader("Referer")}} ヘッダーが含まれていません。これにより、IdP がユーザーがどの RP にログインしようとしているかを把握できないようにしています。

例を示します。

```http
GET /accounts.php HTTP/1.1
Host: idp.example
Accept: application/json
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
```

このリクエストには資格情報が含まれています。つまり、IdPのサイト用のクッキーが含まれており、IdPはこれを使用して、ユーザーがどのIdPアカウントにログインしたかを確認することができます。

なお、このエンドポイントに対するブラウザーのリクエストはサイト間リクエストであるため、クッキーには [`SameSite`](/ja/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) 属性の値が `None` であるもののみが含まれます。つまり、IdP は[クロスサイトリクエストフォージェリー (CSRF)](/ja/docs/Web/Security/Attacks/CSRF) 攻撃に対する防御策の一環として `SameSite` を使用できないため、代替の防御策を実装しなければなりません。

このレスポンスには、ユーザーが現在ログインしているすべての IdP アカウントのリスト（特定の RP に限定されない）が、以下の JSON 構造で返されます。

```json
{
  "accounts": [
    {
      "id": "elaina_maduro",
      "given_name": "Elaina",
      "name": "Elaina Maduro",
      "email": "elaina_maduro@idp.example",
      "tel": "+491234567890",
      "username": "elaina420",
      "picture": "https://idp.example/profile/123",
      "approved_clients": ["123", "456", "789"],
      "domain_hints": ["rp1.example.com", "rp3.example.com"],
      "label_hints": ["developer", "admin"],
      "login_hints": ["elaina_maduro", "elaina_maduro@idp.example"]
    },
    {
      "id": "elly",
      "given_name": "Elly",
      "username": "elly123",
      "email": "Elly@idp.example",
      "picture": "https://idp.example/profile/456",
      "approved_clients": ["abc", "def", "ghi"],
      "domain_hints": ["rp1.example.com", "rp2.example.com"],
      "label_hints": ["developer", "test"],
      "login_hints": ["elly", "elly@idp.example"]
    }
  ]
}
```

これには以下の情報が記載されます。ここで、`name`、`email`、`username`、`tel` は任意ですが、少なくとも 1 つは存在する必要があり、かつ空であってはなりません。

- `id`
  - : ユーザーの固有の ID。
- `name` {{optional_inline}}
  - : ユーザーの苗字。
- `email` {{optional_inline}}
  - : ユーザーのメールアドレス。
- `tel` {{optional_inline}}
  - : ユーザーの電話番号。任意の書式で指定可能です。
- `username` {{optional_inline}}
  - : そのユーザーのユーザー名。
- `given_name` {{optional_inline}}
  - : ユーザーの下の名前。
- `picture` {{optional_inline}}
  - : ユーザーのアバター画像の URL。
- `approved_clients` {{optional_inline}}
  - : ユーザーが持つ RP クライアントの配列。
- `domain_hints` {{optional_inline}}
  - : そのアカウントに関連付けられたドメインの配列。RP は、[`domainHint`](/ja/docs/Web/API/IdentityCredentialRequestOptions#domainhint) プロパティを含む `get()` 呼び出しを行うことで、返されるアカウントをドメインごとに絞り込むことができます。
- `label_hints` {{optional_inline}}
  - : そのアカウントを識別するアカウントの種類のラベルを指定する文字列の配列です。設定ファイルで [`account_label`](#account_label) が指定されている場合、アカウント一覧エンドポイントからは、`label_hints` にそのラベルが含まれているアカウントのみが返されます。
- `login_hints` {{optional_inline}}
  - : アカウントを表す文字列の配列です。これらの文字列は、ブラウザーがユーザーに提示するログイン用アカウントオプションの一覧を絞り込むために使用されます。これは、関連する `get()` 呼び出しにおいて、[`identity.providers`](/ja/docs/Web/API/IdentityCredentialRequestOptions#providers) 内に `loginHint` プロパティが指定された場合に実行されます。`login_hints` 配列内の文字列が、指定された `loginHint` と一致するアカウントはすべて含まれます。

> [!NOTE]
> ユーザーがどの IdP アカウントにもログインしていない場合、エンドポイントは [HTTP 401 (Unauthorized)](/ja/docs/Web/HTTP/Reference/Status/401) を返す必要があります。

### クライアントメタデータのエンドポイント

ブラウザーは、`GET`メソッドを使用して、このエンドポイントに認証情報なしのリクエストを送信します。この際、`get()`呼び出しの引数として`clientId`が渡されます。

例を示します。

```http
GET /client_metadata.php?client_id=1234 HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Accept: application/json
Sec-Fetch-Dest: webidentity
```

リクエストが成功した場合のレスポンスには、RP のメタデータおよび利用規約のページへの URL が含まれます。これらは、ブラウザーが提供する FedCM UI で使用されます。これは JSON 構造に従う必要があります。

```json
{
  "privacy_policy_url": "https://rp.example/privacy_policy.html",
  "terms_of_service_url": "https://rp.example/terms_of_service.html"
}
```

### disconnect エンドポイント

{{domxref("IdentityCredential.disconnect_static", "IdentityCredential.disconnect()")}} を呼び出すと、ブラウザーは、オリジンをまたぐ {{httpmethod("POST")}} リクエストを、クッキーを含め、{{httpheader("Content-Type")}} を `application/x-www-form-urlencoded` にして、以下の情報を含めて切断エンドポイントに送信します。

- `account_hint`
  - : IdP が切断対象のアカウントを特定するために使用するアカウントヒントを指定する文字列。
- `client_id`
  - : RP のクライアント識別子を指定する文字列。

例を示します。

```http
POST /disconnect HTTP/1.1
Host: idp.example
Origin: rp.example
Content-Type: application/x-www-form-urlencoded
Cookie: 0x123
Sec-Fetch-Dest: webidentity

account_hint=account456&client_id=rp123
```

リクエストを受信すると、IdP サーバーは以下の処理を行う必要があります。

1. このリクエストに対しては、[CORS （オリジン間リソース共有）](/ja/docs/Web/HTTP/Guides/CORS)で応答します。
2. リクエストに HTTP の {{httpheader("Sec-Fetch-Dest")}} ヘッダーが含まれており、ディレクティブが `webidentity` であることを確認します。
3. {{httpheader("Origin")}} ヘッダーを、`client_id` によって特定された RP オリジンと照合します。一致しない場合は、プロミスを拒否します。
4. `account_hint` に一致するアカウントを探します。
5. RP に接続されているアカウントの一覧から、そのユーザーアカウントの接続を解除します。
6. 識別されたユーザーの `account_id` を JSON 書式で返答します。

   ```json
   {
     "account_id": "account456"
   }
   ```

> [!NOTE]
> IdP が RP に関連付けられているすべてのアカウントの接続を解除したい場合は、どの `account_id` とも一致しない文字列（例えば `"account_id": "*"`）を渡すことができます。

### ID アサーションエンドポイント

ブラウザーは、[`POST`](/ja/docs/Web/HTTP/Reference/Methods/POST) メソッドを使用し、コンテンツタイプを `application/x-www-form-urlencoded` として、このエンドポイントに資格情報を含むリクエストを送信します。このリクエストには、ログインの試行に関する詳細や、検証対象のアカウントに関する内容の本体も含まれます。

こんな感じになるはずです。

```http
POST /assertion.php HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Content-Type: application/x-www-form-urlencoded
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
account_id=123&client_id=client1234&disclosure_text_shown=true&is_auto_selected=true
```

このエンドポイントへのリクエストは、ユーザーが関連するブラウザーの UI からログインに使用できるアカウントを選択した結果として送信されます。有効なユーザー資格情報が送信されると、このエンドポイントは、アイデンティティ連携で使用している IdP が定める利用概要に従い、RP が自社のサーバー上でユーザーを検証するために使用できる検証トークンを応答として返す必要があります。RP がユーザーの検証を完了すると、そのユーザーをログインさせたり、サービスに登録させたりすることができます。

```json
{
  "token": "***********"
}
```

リクエストの本体には、以下の引数が含まれています。

- `client_id`
  - : RP のクライアント識別子（元の `get()` リクエストの `clientId` と一致する）。
- `account_id`
  - : ログイン対象のユーザーアカウントの固有の ID（アカウント一覧エンドポイントのレスポンスに含まれるユーザーの `id` と一致するもの）。
- `params` {{optional_inline}}
  - : 元の `get()` リクエストからの `params` オブジェクトのシリアライズ結果。
- `disclosure_text_shown`
  - : 開示テキストが表示されたかどうかを示す、`"true"` または `"false"` の文字列。開示テキストとは、ユーザーが IdP にログインしているものの、現在の RP に特定のアカウントを保有していない場合にユーザーに表示される情報（利用規約やプライバシーポリシーへのリンクを含めることができる場合もある）のことです（この場合、ユーザーは IdP の ID を使用して「…として続ける」を選択し、RP 上で対応するアカウントを生成する必要があります）。
- `is_auto_selected`
  - : `"true"` または `"false"` の文字列で、[自動再認証](/ja/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication)、すなわちユーザーの介入なしに、認証検証リクエストが発行されたかどうかを示します。これは、{{domxref("CredentialsContainer.get", "get()")}} の呼び出しにおいて、[`mediation`](/ja/docs/Web/API/CredentialsContainer/get#mediation) オプションの値が `"optional"` または `"silent"` に設定されている場合に発生する可能性があります。IdP にとって、パフォーマンス評価や、より高いセキュリティが求められる場合に備えて、自動再認証が行われたかどうかを把握しておくことは有用です。例えば、IdP は、明示的なユーザーの介入が要求されることを RP に指示するエラーコード（`mediation="required"`）を返すことができます。

> [!NOTE]
> {{domxref("CredentialsContainer.get", "get()")}} の呼び出しが成功した場合、`is_auto_selected` の値も {{domxref("IdentityCredential.isAutoSelected")}} プロパティを介して RP に同時に通知されます。

#### ID アサーションエンドポイントの CORS ヘッダー

ID アサーションエンドポイントのレスポンスには、{{httpheader("Access-Control-Allow-Origin")}} および {{httpheader("Access-Control-Allow-Credentials")}} ヘッダーを含める必要があり、`Access-Control-Allow-Origin` にはリクエスト元のオリジンを記載する必要があります。

```http
Access-Control-Allow-Origin: https://rp.example
Access-Control-Allow-Credentials: true
```

なお、`Access-Control-Allow-Origin` はリクエスト元 (RP) の特定のオリジンに設定する必要があり、ワイルドカード値 `*` を指定することはできません。

これらのヘッダーがない場合、リクエストはネットワークエラーにより失敗します。

#### ID アサーションエラーのレスポンス

IdP がトークンを発行できない場合（たとえば、クライアントが認証されていない場合など）、ID アサーションエンドポイントは、エラーの詳細を含むエラーレスポンスを返します。例を示します。

```json
{
  "error": {
    "code": "access_denied",
    "url": "https://idp.example/error?type=access_denied"
  }
}
```

エラーレスポンスのフィールドは次の通りです。

- `code` {{optional_inline}}
  - : 文字列。[OAuth 2.0 で指定されたエラー一覧](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) に掲載されている既知のエラー、または任意の文字列のどちらかです。
- `url` {{optional_inline}}
  - : URL。これは、エラーの修正方法やカスタマーサービスへの連絡先など、ユーザーに表示させるエラーに関する、読み取り可能な情報が記載されたウェブページである必要があります。この URL は、IdP の設定 URL と同じサイト内にあるものでなければなりません。

この情報は、いくつかの異なる方法で使用できます。

- ブラウザーは、ユーザーに対して何が問題だったかを伝える独自のUIを表示させることができます（例えば、[Chrome のドキュメント](https://privacysandbox.google.com/blog/fedcm-chrome-120-updates#error-api)を参照してください）。なお、IdP サーバーが利用できないためにリクエストが失敗した場合、当然ながら IdP サーバーから情報を返すことはできません。そのような場合、ブラウザーは一般的なメッセージでその旨を通知します。
- ログインを試行するために使用された関連付けられた RP {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} の呼び出しは、エラー情報を含む {{domxref("IdentityCredentialError")}} を返してそのプロミスを拒否します。RP はこのエラーをキャッチし、ブラウザーの独自の UI に続いて、ユーザーが次回のログインに成功できるよう役立つ情報を提供することができます。

## ログイン状態 API を使用してログイン状態を更新する

**ログイン状態 API** を使用すると、IdP は特定のブラウザーにおける自身のログイン（サインイン）状態をそのブラウザーに通知することができます。ここでいう「ログイン状態」とは、「現在のブラウザーで、IdP にユーザーがログインしているかどうか」を指します。ブラウザーはこの状態を IdP ごとに保存します。FedCM API はこれを利用して、IdP へのリクエスト数を削減します（IdP にログインしているユーザーがいなければ、アカウント情報を取得するためのリクエストに時間を費やす必要がないためです）。また、これにより[潜在的なタイミング攻撃](https://github.com/w3c-fedid/FedCM/issues/447)のリスクも軽減されます。

既知のそれぞれの IdP（その設定 URL によって識別される）について、ブラウザーはログイン状態を表す 3 値変数を保持しており、その値は以下の 3 つのいずれかになります。

- `"logged-in"`: IdP には、少なくとも 1 つのユーザーアカウントがログインしています。この段階では、RP やブラウザーはそれがどのユーザーであるかを知らないことに注意してください。特定のユーザーに関する情報は、FedCM フローの後の段階で、IdP の [`accounts_endpoint`](#アカウントリストのエンドポイント) から返されます。
- `"logged-out"`: 現在、すべての IdP アカウントからログアウトされています。
- `"unknown"`: この IdP のログイン状態は不明です。これがデフォルト値です。

### ログイン状態の設定

ユーザーが IdP にログインまたはログアウトした際、IdP はそのログイン状態を更新する必要があります。これには 2 つの方法があります。
- HTTP の {{httpheader("Set-Login")}} レスポンスヘッダーを、最上位のナビゲーションまたは同一オリジンのサブリソースへのリクエストで設定することができます。

  ```http
  Set-Login: logged-in

  Set-Login: logged-out
  ```

- {{domxref("NavigatorLogin.setStatus", "Navigator.login.setStatus()")}} メソッドは、IdP のオリジンから呼び出すことが可能です。

  ```js
  /* ログイン状態を設定 */
  navigator.login.setStatus("logged-in");

  /* ログアウト状態を設定 */
  navigator.login.setStatus("logged-out");
  ```

### ログイン状態が連合ログインのフローに与える影響

[RP が連合ログインを試行する](/ja/docs/Web/API/FedCM_API/RP_sign-in)際、ログイン状態を調べます。

- IdP のログイン状態が `"logged-in"` の場合、[アカウント一覧エンドポイント](#アカウントリストのエンドポイント)に対してリクエストが行われ、ログインに利用できるアカウントが、ブラウザーが指定する FedCM ダイアログにユーザーに表示されます。
- すべての IdP のログイン状態が `"logged-out"` の場合、FedCM の `get()` リクエストによって返されるプロミスは、アカウント一覧エンドポイントへのリクエストを行わずに拒否されます。このような場合、開発者は、例えばユーザーに適切な IdP にアクセスしてログインするよう促すなど、フローを適切に処理する必要があります。
- IdP のログイン状態が `"unknown"` の場合、アカウント一覧エンドポイントに対してリクエストが行われ、そのレスポンスに応じてログイン状態が更新されます。
  - エンドポイントが利用できるアカウントのリストを返した場合は、状態を `"logged-in"` に更新し、ブラウザーが指定する FedCM ダイアログでユーザーにログインオプションを表示させます。
  - エンドポイントがアカウントを返さない場合は、状態を `"logged-out"` に更新します。利用できる `logged-in` 状態の IdP が他にない場合、FedCM の `get()` リクエストによって返されるプロミスは拒否されます。

### ブラウザーと IdP のログイン状態がずれてしまった場合はどうなるのか

ログイン状態 API は IdP のログイン状態をブラウザーに通知しますが、ブラウザーと IdP の状態が同期しなくなる可能性があります。例えば、IdP のセッションが期限切れになると、すべてのユーザーアカウントがログアウトされた状態になるにもかかわらず、ログイン状態は `"logged-in"` のままになる場合があります（アプリケーションがログイン状態を `"logged-out"` に設定できなかったため）。このような場合、連合ログインを試みると、IdP のアカウント一覧エンドポイントへのリクエストが行われますが、セッションが利用できなくなったため、利用できるアカウントは返されません。

この場合、ブラウザーはダイアログで IdP のログインページを開くことで、ユーザーが IdP に動的にログインできるようにします（ログイン URL は、IdP の[設定ファイル](#provide_a_config_file_and_endpoints)内の `login_url` で探すことができます）。このフローの具体的な動作はブラウザーに委ねられています。例えば、[Chrome では同様に処理されます](https://privacysandbox.google.com/blog/fedcm-chrome-120-updates#what_if_the_user_session_expires_let_the_user_sign_in_through_a_dynamic_login_flow)。

ユーザーが IdP にログインすると、IdP は以下の処理を行う必要があります。

- [ログイン状態の設定](#ログイン状態の設定)を `"logged-in"` に設定することで、ユーザーがログインしたことをブラウザーに通知します。
- {{domxref("IdentityProvider.close_static", "IdentityProvider.close()")}} メソッドを呼んで、ログインダイアログを閉じます。

## 関連情報

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview) - developer.chrome.com (2023)
