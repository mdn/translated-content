---
title: 連合資格情報管理 (FedCM) API
slug: Web/API/FedCM_API
l10n:
  sourceCommit: 6722199b4d63fad3c33db1146af380fc98b6c202
---

{{SeeCompatTable}}{{DefaultAPISidebar("FedCM API")}}

**連合資格情報管理 API**（または _FedCM API_）は、{{glossary("Identity provider", "アイデンティティプロバイダー")}} (IdP) に標準的な仕組みを提供し、[サードパーティクッキー](/ja/docs/Web/Privacy/Guides/Third-party_cookies)やリダイレクトを必要とせずに、プライバシーを保護した形でウェブ上でアカウント連携サービスを提供するための標準的な仕組みを提供します。これには、ウェブサイトへのログインやサインアップなどの操作において、連合認証を利用することができる JavaScript API が含まれています。

## FedCM の概要

アイデンティティ連合とは、e コマースサイトやソーシャルネットワーキングサイトなど、ユーザーの登録やログインを要求されるウェブサイト（{{glossary("Relying party", "認証依頼者")}}、または RP とも呼ばれる）が、Google、Facebook/Meta、GitHub などの信頼できるサードパーティーアイデンティティプロバイダー (IdP) に対して、ユーザー認証を委任する仕組みのことです。

RP は IdP と連携することができるため、ユーザーは IdP に登録済みのアカウントを使用してログインすることができます。少数の専用 IdP を介したアイデンティティ連合は、それぞれのサイトが別個のユーザー名とパスワードを用いて独自のログイン機能を管理する場合と比較して、セキュリティ、消費者の信頼、使い勝手の面でウェブ認証を改善しました。

問題は、従来のアイデンティティ連合が {{htmlelement("iframe")}} やリダイレクト、サードパーティクッキーに頼っている点にあります。これらはサードパーティによるトラッキングにも利用されています。ブラウザーはユーザーのプライバシー保護のため、これらの機能の使用を制限していますが、その副作用として、トラッキングを目的としない正当な用途（アイデンティティ連合を含む）の実装が難しくなっているのです。

これは、連合ログイン全般に影響を与えるほか、もっと具体的な ID 連合の用途にも影響を及ぼします。

- [OIDC フロントチャネルログアウト](https://openid.net/specs/openid-connect-frontchannel-1_0.html): このフローでは、IDP が RP の `<iframe>` を複数埋め込む必要があり、これらは RP のクッキーに依存しています。
- ソーシャルウィジェット: ソーシャルウィジェットを提供するには、RP の最上位オリジンから IDP のサードパーティクッキーが指定されている必要があります。
- パーソナライズされたボタン: RP オリジン内の {{htmlelement("button")}} にパーソナライズされたログイン情報を表示させる機能は、サードパーティクッキーが要求される IdP の `<iframe>` として実装されています。
- 最上位ナビゲーションやポップアップを伴わないセッションの更新。

FedCM は、この問題を解決することを目的としており、ウェブ上での連合 ID フローのための専用の仕組みを提供するとともに、対応ブラウザーが R P上で特別な UI の要素を表示することができることで、ユーザーがログインに使用する IdP アカウントを選択することができます。

FedCM API を使用する方法には 2 つの部分があり、これについては下記リンク先のガイドで網羅されています。

1. [FedCM との IdP 連携](/ja/docs/Web/API/FedCM_API/IDP_integration) — RP が IdP と連携するために、IdP が提供する必要があるもの。
2. [RP の連合ログイン](/ja/docs/Web/API/FedCM_API/RP_sign-in) — RPが、ユーザーのIdPアカウントを使用してログインを行うために使用する FedCM 機能です。FedCM ログインリクエストは、{{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} メソッドを使用して開始されます。

> [!NOTE]
> [Google ログイン](https://developers.google.com/identity/gsi/web/guides/overview)は、すでに FedCM に対応している IdP の一例です。[FedCM への移行](https://developers.google.com/identity/gsi/web/guides/fedcm-migration) では、Google ログインを現在使用するアプリを連合ログインに移行したい RP 向けの手順を提供しています。

## 権限ポリシー統合と `<iframe>` の対応

{{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} の[権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)を使用することで、FedCM の使用権限を制御することができます。
仕様上、以下のメソッドの使用が許可されています。

- {{domxref("CredentialsContainer.get()")}}
- {{domxref("IdentityCredential.disconnect_static", "IdentityCredential.disconnect()")}}
- {{domxref("IdentityProvider.getUserInfo_static", "IdentityProvider.getUserInfo()")}}

開発者は、`allow` 属性を使用すれば、{{htmlelement("iframe")}} が FedCM を使用することを明示的に許可することができます。

```html
<iframe src="3rd-party.example" allow="identity-credentials-get"></iframe>
```

`<iframe>` 内で FedCM を利用できることで、次のような用途が実現できます。

- 大規模なサイトでは、サードパーティーのログインスクリプトが最上位のフレームを制御することを望まないでしょう。その代わりに、そのスクリプトを追加し、{{htmlelement("iframe")}} 内から FedCM を呼び出すことを望むでしょう。
- 一部の `<iframe>` では、それ自体で連合認証が要求されることがあります。

## インターフェイス

- {{domxref("IdentityCredential")}}
  - : 連合認証が成功した際に生成されるユーザー ID 資格情報を表します。`identity` オプションを含む {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} の呼び出しが成功すると、{{domxref("IdentityCredential")}} インスタンスが履行されます。
- {{domxref("IdentityCredentialError")}}
  - : ユーザーが連合資格情報を使用した認証を要求した後、ユーザーエージェントが ID アサーションを受信しなかったことを示す認証エラーを表します。
- {{domxref("IdentityProvider")}}
  - : IdP を表し、関連する情報や機能へのアクセスを提供します。
- {{domxref("NavigatorLogin")}}
  - : IdP のログイン機能を定義します。これには、[IdP のログインステータスを更新する](/ja/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api)ための {{domxref("NavigatorLogin.setStatus", "Navigator.login.setStatus()")}} メソッドが含まれています。

## 他のインターフェイスへの拡張

- {{domxref("CredentialsContainer.get()")}}, the `identity` option.
  - : `identity` は、認証依頼者 (RP) のウェブサイトがユーザーのログインに使用できる、連合 IdP の詳細情報を含むオブジェクトです。これに対して `get()` を呼び出すと、ユーザーが IdP を通じて RP にログインするためのリクエストが発生します。
- {{domxref("Navigator.login")}}
  - : ブラウザーの {{domxref("NavigatorLogin")}} オブジェクトへのアクセスを提供します。

## HTTP ヘッダー

- {{httpheader("Set-Login")}}
  - : HTTP 経由で[ログインステータスの更新](/ja/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api)を行うための HTTP メカニズムを指定します。

## 例

コード例については、次を参照してください。

- [Implement an identity solution with FedCM on the Identity Provider side](https://developer.chrome.com/docs/identity/fedcm/implement/identity-provider) - developer.chrome.com (2025)
- [Implement an identity solution with FedCM on the Relying Party side](https://developer.chrome.com/docs/identity/fedcm/implement/relying-party) - developer.chrome.com (2025)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview)
