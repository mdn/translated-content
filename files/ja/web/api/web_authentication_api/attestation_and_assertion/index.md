---
title: アテステーションとアサーション
slug: Web/API/Web_Authentication_API/Attestation_and_Assertion
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{DefaultAPISidebar("Web Authentication API")}}

WebAuthn の登録と認証で使用される資格情報には 2 種類があります。これらは名前も目的も似ていますが、違いを理解することは、最初につまづく点かもしれません。以下の節では、登録時に発生するアテステーション (attestation) と、認証時に発生するアサーション (assertion) について説明します。

## アテステーション

認証器がサービスに新しい鍵ペアを登録する際、認証器は公開鍵をアテステーション証明書で署名します。このアテステーション証明書は製造時に認証器に組み込まれ、機器モデル固有のものです。つまり、特定の時点または特定の製造ロットで製造された「Samsung Galaxy S8」端末はすべて、同じアテステーション証明書を持ちます。

アテステーションは、ウェブ認証 API を通じて[AuthenticatorAttestationResponse](/ja/docs/Web/API/AuthenticatorAttestationResponse)として返されます。アテステーションの書式には、 2 つの基本的な {{jsxref("ArrayBuffer")}} オブジェクトが含まれています。

- **clientDataJSON** - ブラウザーが認証を依頼された際に認識したものの JSON 表現が含まれている ArrayBuffer です。
- [attestationObject](/ja/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) - 新規に生成された鍵ペアが、その認証器によって作成されたことを示す暗号学的アテステーション。この中には以下のものが含まれています。
  - [認証器データ](/ja/docs/Web/API/Web_Authentication_API/Authenticator_data)には `attestedCredentialData` フィールドがあり、これはさらに `credentialId` と `credentialPublicKey` を含んでいます。 `attestedCredentialData` はアテステーションで用いられるオプションのフィールドです。これは AuthenticatorAssertionResponse の中で使用される場合は含まれません。
  - アテステーション文は、認証依頼者 (RP) がアテステーションをリクエストするか否かによってオプションで存在します。一般的に、RP がアテステーションをリクエストすることは推奨されないため、この文は存在しない可能性が高いです。

端末によってアテステーションの書式は異なります。[WebAuthn で事前定義されているアテステーションの書式](https://w3c.github.io/webauthn/#sctn-defined-attestation-formats)は次のとおりです。

- **Packed** - 汎用的なアテステーション形式で、 WebAuthn 認証器としての機能のみを持つ機器（セキュリティキーなど）で一般的に使用されています。
- **TPM** - 信頼プラットフォームモジュール (TPM) は、信頼プラットフォームグループ (TPG) による一連の仕様です。このアテステーション形式はデスクトップコンピューターで一般的に見られ、 Windows Hello は推奨アテステーション形式として使用します。
- **Android Key Attestation** - Android O で追加された機能の 1 つが Android Key Attestation であり、これにより Android オペレーティングシステムは鍵を証明することができます。
- **Android SafetyNet** - Android Key Attestation 導入以前は、 Android 端末における唯一の選択肢は Android SafetyNet アテステーションを作成することでした。
- **FIDO U2F** - FIDO U2F 標準を実装するセキュリティキーはこの書式を使用します。
- **none** - `navigator.credentials.create()` の `attestation` 引数が `none` に設定されている場合、ブラウザーは、サイトがアテステーションデータを参照したり、認証器のレスポンスからアテステーションデータが除去したりすることを許可してよいかをユーザーに確認するプロンプトを表示することがあります。

アテステーションの目的は、新しく生成された鍵ペアが特定の端末から発行されたことを暗号学的にに証明することです。これにより、新しく生成された鍵ペアに対する信頼の根拠が提供されると同時に、使用されている端末の属性（秘密鍵の保護方法、生体認証が使用されるかどうかとその種類、端末が認証済みかどうかなど）を特定することが可能になります。アテステーションは信頼の根拠を確立する機能を提供する一方で、その信頼の根拠自体を検証する必要性はあまりない点に留意すべきである。新規アカウントの認証器登録時には通常、まず使用時認証 (TOFU) モデルが適用され、既存アカウントへの認証器追加時にはユーザーは既に認証済みであり、安全なセッションが確立されています。

## アサーション

ユーザーがサービスへのログインを選択した場合、サーバーはチャレンジを送信し、認証器は前回そのサービスに登録された鍵ペアで署名します。これによりアサーションが作成されます。アテステーションとは異なり、アサーションの形式は使用されている端末に関係なく常に同じです。

アサーションは、WebAuthn API を通じて [AuthenticatorAssertionResponse](/ja/docs/Web/API/AuthenticatorAssertionResponse) として、返されます。アサーションの形式は、 4 つの基本的な ArrayBuffer が含まれているだけの、ごく単純なものです。

- [clientDataJSON](/ja/docs/Web/API/AuthenticatorResponse/clientDataJSON) - アテステーションと同様。ブラウザーが認証を要求された際に認識したものを JSON 形式で表現している ArrayBuffer です。
- [authenticatorData](/ja/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) - 認証器によって作成・使用されているデータ（[認証器データ](/ja/docs/Web/API/Web_Authentication_API/Authenticator_data)も参照）。
- **signature** - 登録時に作成された公開鍵をつけて検証可能な、clientDataJSON および authenticatorData 上の署名です。
- **userHandle** - オプション。（ヌル可能な）ユーザー識別子。ユーザー名、ユーザー名のハッシュなどを指定することがあります。サービスワーカースクリプトが資格情報にスコープを付与するために使用されている。最大長は 64 バイトです。古い認証器 (U2F) はこの出力に対応していません。

アサーションの署名には、アテステーションとは異なる鍵ペアが使用されることに留意することが重要です。アサーションは、登録時に生成されたサービスの鍵ペアを使用して署名されます。一方、アテステーションは、同一機種のすべて のモデルに焼き込まれたアテステーション秘密鍵とアテステーション証明書を使用して署名されます（自己アテステーションの場合を除く）。
