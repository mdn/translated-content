---
title: 認証依頼者の連合ログイン
slug: Web/API/FedCM_API/RP_sign-in
l10n:
  sourceCommit: 7f138099644a02640a903b2abc39e685ca8ca7cd
---

{{DefaultAPISidebar("FedCM API")}}

この記事では、{{glossary("Relying party", "認証依頼者")}} (RP) が[連合資格情報管理 (FedCM) API](/ja/docs/Web/API/FedCM_API) を使用し、{{glossary("Identity provider", "ID プロバイダー")}} (IdP) を経由して連合ログインを実行する手順について説明します。

## `get()` メソッドの呼び出し

RP は、{{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} を `identity` オプション付きで呼び出し、ユーザーに対して、既存の IdP アカウントから選択して RP にログインするオプションを提供するよう要求することができます。IdP は、clientId によって RP を識別します。この clientId は、それぞれの IdP が独自の IdP 固有のプロセスを通じて RP に発行したものです。選択された IdP は、[ログインフロー](#fedcm_のログインフロー)の過程でブラウザーに指定された資格情報（クッキー）を使用して、ログインを試みている特定のユーザーを識別します。

ユーザーが一度も IdP にログインしたことがない場合、またはログアウトしている場合、 `CredentialsContainer.get()` はエラーを返して処理を拒否し、RP はユーザーを IdP のページに誘導して、ログインまたはアカウント作成を行わせることが可能です。

それ以外の場合、選択した IdP によってユーザー ID の検証が成功すると、`CredentialsContainer.get()` は、{{domxref("IdentityCredential")}} オブジェクトで履行されるプロミスを返します。

### `IdentityCredential.token` オブジェクト

`IdentityCredential` には `token` プロパティが含まれており、RP はこのプロパティを使用してユーザーをログインさせることができます。

FedCM API では、`token` オブジェクトの構造や、RP がそれをどのように扱うのが最適かについては定義されていません。これらは、IdP が実装する連合アイデンティティプロトコルに完全に依存します。

例えば、[FedCM for OAuth](https://github.com/aaronpk/oauth-fedcm-profile) プロファイルでは、FedCM を使用して [OpenID Connect (OIDC)](/ja/docs/Web/Security/Authentication/Federated_identity#openid_connect) プロトコルを実装する方法が説明されていますが、 `CredentialsContainer.get()`によって返されるトークンは、OAuth の認証コードです。RP はこのコードを使用して、IdP のトークンエンドポイントからアイデンティティトークンを取得します。

RP が特定の IdP との連携を選択した場合、IdP は返された `token` 値の使用方法に関する指示を提供します。

### リクエストの例

一般的リクエストは、次のようなものになります。

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      context: "signup",
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
          params: {/* IdP 固有の引数 */},
          loginHint: "user1@example.com",
        },
        {
          // ...
        },
      ],
    },
  });
}
```

`identity.providers` プロパティには、それぞれの IdP の設定ファイルへのパス (`configURL`) および IdP から発行された RP のクライアント識別子 (`clientId`) を指定する 1 つ以上のオブジェクトを含む配列が渡されます。

前回の例には、いくつかのオプション機能も含まれています。

- `identity.context` は、ユーザーが FedCM を使用して認証を行うコンテキストを指定します。例えば、このアカウントへの初回登録なのか、それとも既存のアカウントでのログインなのかといったことです。ブラウザーはこの情報を使用して、コンテキストに合わせて FedCM UI の表示内容を調整します。
- `params` プロパティには、この IdP が必要とする引数が含まれます。その構造と内容は、各 IdP によって定められます。
- `loginHint` プロパティは、ユーザーのログイン時にブラウザーが紹介すべきアカウントの選択肢に関するヒントを提供します。このヒントは、IdP が [アカウント一覧エンドポイント](/ja/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) で提供する `login_hints` の値と一致します。

ブラウザーはIdPの構成ファイルをリクエストし、下記に詳述するログインフローを実行します。ブラウザーが提供するUIにおいて、ユーザーがどのような操作を期待できるかについての情報は、[リレーリング パーティ側で FedCM を使用して ID ソリューションを実装する](https://developer.chrome.com/docs/identity/fedcm/implement/relying-party)を参照してください。

## FedCM のログインフロー

ログインフローには、RP アプリ、ブラウザー自体、IdP の 3 つの当事者が関わっています。次の図は、そのフローを視覚的にまとめたものです。

![下記で詳しく記述するフローを視覚的に表したもの](fedcm-flow.png)

フローは以下の通りです。

1. RP は {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} を呼び出して、ログインフローを始めます。

2. それぞれの IdP に対して指定された `configURL` から、ブラウザーは 2 つのファイルをリクエストします。
   1. well-known ファイル (`/.well-known/web-identity`)。これは、`configURL` の{{glossary("registrable domain", "登録可能なドメイン")}}で利用できる `/.well-known/web-identity` から取得できます。
   2. `configURL` で利用できる [IdP 設定ファイル](/ja/docs/Web/API/FedCM_API/IDP_integration#構成ファイルとエンドポイントの提供) (`/config.json`)。

   これらはどちらも [`GET`](/ja/docs/Web/HTTP/Reference/Methods/GET) リクエストであり、クッキーを含まず、リダイレクトにも追従しません。これにより、IdP がリクエストの送信者や、接続を試みている RP を特定することを事実上防ぐことができます。

   FedCM　を介してブラウザーから送信されるすべてのリクエストには、{{glossary("CSRF")}} 攻撃を防ぐため、`{{httpheader("Sec-Fetch-Dest")}}: webidentity` というヘッダーが含まれます。すべての IdP エンドポイントは、このヘッダーが含まれていることを確認しなければなりません。

3. IdP は、リクエストされた well-known ファイルと `config.json` ファイルを応答として返します。ブラウザーは、`get()` リクエストに含まれる設定ファイルの URL を、well-known ファイル内の有効な設定 URL のリストと照合して検証します。

4. ブラウザーの [IdP のログイン状態](/ja/docs/Web/API/FedCM_API/IDP_integration#ログイン状態_api_を使用してログイン状態を更新する) が `「logged-in」` に設定されている場合、ブラウザーは [`accounts_endpoint`](/ja/docs/Web/API/FedCM_API/IDP_integration#アカウントリストのエンドポイント)に対して、認証情報を伴うリクエスト（つまり、ログイン中のユーザーを識別するクッキーを含むリクエスト）を送信し、ユーザーのアカウント詳細を取得します。このクッキーを含む `GET` リクエストですが、`client_id` 引数や {{httpheader("Origin")}} ヘッダーは含まれません。これにより、IdP がユーザーがどの RP にログインしようとしているかを知ることを防ぎます。その結果、返されるアカウントの一覧は RP に依存しません。

   > [!NOTE]
   > IdP のログイン状態がすべて `"logged-out"` の場合、`get()` の呼び出しは `NetworkError` の {{domxref("DOMException")}} を返して失敗し、どの IdP の `accounts_endpoint` に対してもリクエストを行いません。この場合、適切な IdP にログインするようユーザーに促すなど、フローの処理は開発者に委ねられます。なお、IdP のログイン状態が RP に漏洩するのを避けるため、拒否処理に多少の遅延がある場合があります。

5. IdP は、その `accounts_endpoint` からリクエストされたアカウント情報を応答として返します。これらは、その IdP に関連付けられたすべての RP について、ユーザーの IdP クッキーに関連付けられたすべてのアカウントの配列です。

6. {{optional_inline}} IdP の設定ファイルに記載されている場合、ブラウザーは RP の利用規約およびプライバシーポリシーのページへのリンクを取得するために、[`client_metadata_endpoint`](/ja/docs/Web/API/FedCM_API/IDP_integration#the_client_metadata_endpoint) に対して、認証情報を伴わないリクエストを送信します。これは `GET` リクエストであり、`get()` の呼び出しに引数として渡された `clientId` をつけており、クッキーは含まれていません。

7. {{optional_inline}} IdP は、`client_metadata_endpoint` からリクエストされた URL で応答します。

8. ブラウザーは、前回のリクエストで取得した情報をもとに、ユーザーに IdP（複数の場合）と、RP にログインするためのアカウントを選択するよう求める UI を作成します。また、この UI では、ユーザーが選択した連合 IdP アカウントを使用して RP にログインすることへの許可も求められます。

   > [!NOTE]
   > この段階において、ユーザーが現在のブラウザーインスタンスで前回連合 RP アカウントによる認証を済ませている場合（つまり、RP で新しいアカウントを作成したか、既存のアカウントを使用して RP のウェブサイトにログインしたことがある場合）、[`mediation`](/ja/docs/Web/API/CredentialsContainer/get#mediation) オプションの設定に応じて、**自動再認証**が可能になる場合があります。その場合、`get()` が呼び出されるとすぐに、ユーザーは資格情報を入力することなく自動的にログインされます。詳細については、[自動再認証](#自動再認証)の節を参照してください。

9. ユーザーがその権限を許可した場合、ブラウザーは [`id_assertion_endpoint`](/ja/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) に対して資格情報を伴うリクエストを行い、選択されたアカウントについて、指定された IdP から検証トークンを要求します。

   資格情報は、HTTP の [`POST`](/ja/docs/Web/HTTP/Reference/Methods/POST) リクエストで、クッキーおよび `application/x-www-form-urlencoded` のコンテンツタイプとともに送信されます。

   呼び出しが失敗した場合、[ID アサーションのエラーレスポンス](/ja/docs/Web/API/FedCM_API/IDP_integration#id_アサーションエラーのレスポンス)で説明されているとおり、エラーが返され、`get()` によって返されたプロミスはそのエラーにより拒否されます。

10. 選択された IdP は、RP から送信されたアカウント ID が、すでにログイン済みのアカウントの ID と一致しているか、また `Origin` が IdP に事前に登録されている RP のオリジンと一致しているかを確認します。すべて問題がなければ、リクエストされた検証トークンを返します。

    > [!NOTE]
    > RP のオリジンは、RP が IdP と最初に連携する際、完全に別のプロセスを通じて IdP に登録されます。このプロセスは IdP ごとに異なります。

11. フローが完了すると、`get()` プロミスは {{domxref("IdentityCredential")}} オブジェクトで解決され、これにより RP のさらなる機能が利用可能になります。特に注目すべきは、このオブジェクトにはトークンが含まれており、RP はこのトークンが IdP から発行されたものであることを（証明書を使用して）検証できるほか、ログインしたユーザーに関する信頼できる情報が含まれている点です。RP がトークンの有効性を確認すると、その情報を用いてユーザーのログイン処理や新しいセッションの開始、サービスへの登録などを行うことができます。トークンの形式や構造は IdP によって異なり、FedCM API とは関係ありません（RP は IdP の指示に従う必要があります）。

## アクティブモードとパッシブモード

RP ユーザーが FedCM API を介してログインする際、ブラウザーが提供する UI モードには、**`active`** モードと **`passive`** モードの 2 種類があります。ログインにどちらのモードが使用されるかは、`identity` オブジェクトの [`mode`](/ja/docs/Web/API/IdentityCredentialRequestOptions#mode) オプションによって制御されます。

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      mode: active,
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
        },
      ],
    },
  });
}
```

`mode` のデフォルト値は `passive` です。`mode` が設定されていない場合、または明示的に `passive` に設定されている場合、ブラウザーはユーザーによる直接的な操作なしに、`get()` 呼び出しを通じてログインフローを開始できます。例えば、ユーザーがログインページにアクセスした直後に、そのユーザーがログインに利用できる IdP アカウントを持っている場合に限り、ログインフローを開始したい場合などが考えられます。このモードでは、通常、ブラウザーは `providers` オブジェクトで指定されたすべてのログインオプションを含むログインダイアログウィンドウをユーザーに表示します。ユーザーは自分に最適なオプションを選択し、適切な資格情報を入力することができます。

`mode` が `active` に設定されている場合、ブラウザーはボタンクリックなどのユーザー操作によってログインフローが開始される必要があります（{{glossary("transient activation", "一時的な有効化")}}が必要です）。また、`providers` オブジェクトの長さは `1` のみと制限され、それ以外の場合、`get()` プロミスでリジェクトが発生します。このモードは通常、RP が IdP の選択肢ごとに別個のボタンを用意したい場合に使用されます。ユーザーがそれらのボタンのいずれかをクリックすると、そのアカウントの資格情報を入力するだけで済む簡略化されたウィンドウが現れます。

Google Chrome でさまざまな UI モードがどのように表示されるかの例については、developer.chrome.com の [FedCM UI モード](https://developer.chrome.com/docs/identity/fedcm/overview#fedcm_ui_modes) を参照してください。

## 自動再認証

FedCM の自動再認証機能により、ユーザーは FedCM を使用した初回認証後に、RP に再度ログインしようとする際、自動的に再認証を行うことができます。「初回認証」とは、ユーザーが同じブラウザーインスタンス上で、RP ウェブサイトにおいて FedCM のログインダイアログを介して最初にアカウントを作成したり、RP のウェブサイトにログインしたりする時点を指します。

初回認証後、自動再認証機能を使用することで、「...として続行」といった確認プロンプトをユーザーに表示させることなく、RP のウェブサイトに自動的に再ログインできます。ユーザーが具体的なアカウントでの連合ログインを最近許可している場合、直ちに別の明示的なユーザー確認を強制しても、プライバシーやセキュリティ上の好ましいことはありません。

自動再認証の動作は、`get()` 呼び出しにおける [`mediation`](/ja/docs/Web/API/CredentialsContainer/get#mediation) オプションによって制御されます。

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
        },
      ],
    },
    mediation: "optional", // これがデフォルト
  });

  // 自動再認証が発生した場合、isAutoSelected は true になる
  const isAutoSelected = identityCredential.isAutoSelected;
}
```

`mediation` が `optional` または `silent` に設定されている場合、自動再認証が可能です。

これらの `mediation` オプションをつけて設定すると、以下の条件下で自動再認証が行われます：

- FedCM が利用できる状態です。例えば、ユーザーがグローバル設定または RP の設定で FedCM を無効にしていない場合などです。
- ユーザーが、このブラウザーで FedCM 経由で RP のウェブサイトにログインした際、使用したアカウントが 1 つだけである場合。複数の IdP 用のアカウントが存在する場合、ユーザーは自動的に再認証されません。
- ユーザーがそのアカウントで IdP にログインしている状態であること。
- 過去 10 分以内に自動再認証が現れていないこと。この制限は、ユーザーがログアウトした後に自動再認証が行われるのを防ぐために設けられています。そうしないと、とても混乱するユーザー体験になってしまうためです。
- 前回のログイン後、RP が {{domxref("CredentialsContainer.preventSilentAccess", "preventSilentAccess()")}} を呼び出していないこと。これは、必要に応じて RP が自動再認証を明示的に無効にするために使用できます。
- UI モードが[パッシブ](#アクティブモードとパッシブモード)であること。

これらの条件が満たされると、`get()` が呼び出された直後に、ユーザーの自動再認証が始まります。自動再認証が成功した場合、ユーザーは確認プロンプトが示されることなく、以前と同じ IdP アカウントと検証済みのトークンを使用して、RP サイトに再度ログインします。

自動再認証が失敗した場合の挙動は、選択された `mediation` の値によって異なります。

- `optional`: ユーザーには必ずダイアログボックスが表示され、再度確認を要求されます。そのため、このオプションは、RP のログインページなど、ユーザーの操作フローが途切れていないページで使用するのが傾向があると言えます。
- `silent`: `get()` プロミスは拒否され、開発者はユーザーをログインページに戻して、プロセスを最初からやり直せるように処理する必要があります。このオプションは、ユーザーの操作がスムーズに進んでおり、完了するまでログイン状態を維持する必要があるページ、例えば EC サイトのチェックアウトフローのページなどで有効です。

> [!NOTE]
> {{domxref("IdentityCredential.isAutoSelected")}} プロパティは、連合ログインが自動再認証を使用して実行されたかどうかを示す指標となります。これは、API のパフォーマンスを評価し、それに応じてユーザー体験 (UX) を改善するのに役立ちます。また、このプロパティが利用できない場合、ユーザーに対して明示的なユーザー介入によるログインが求められることがあります。これは、`mediation: required` を指定した `get()` 呼び出しとなります。

## 連合ログインの切断

RP は、{{domxref("IdentityCredential.disconnect_static", "IdentityCredential.disconnect()")}} を呼び出すことで、指定された連合ログインアカウントを関連付けられた IdP から切り離すことができます。この関数は、最上位の RP フレームから呼び出すことができます。

```js
IdentityCredential.disconnect({
  configURL: "https://idp.example.com/config.json",
  clientId: "rp123",
  accountHint: "account456",
});
```

`disconnect()` 呼び出しが動作するためには、IdP の設定ファイルに [`disconnect_endpoint`](/ja/docs/Web/API/FedCM_API/IDP_integration#disconnect_エンドポイント) が記載されている必要があります。基盤となる HTTP 通信の詳細については、[disconnect エンドポイント](/ja/docs/Web/API/FedCM_API/IDP_integration#disconnect_エンドポイント)を参照してください。

## 関連情報

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview) - developer.chrome.com (2023)
