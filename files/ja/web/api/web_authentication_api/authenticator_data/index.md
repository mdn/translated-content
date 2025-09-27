---
title: 認証器データ
slug: Web/API/Web_Authentication_API/Authenticator_data
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("Web Authentication API")}}

認証器データ構造には、認証器が資格情報作成または認証リクエストを処理した際の情報が含まれています。例えば、認証依存者 ID ハッシュ (`rpIdHash`)、署名カウンター、ユーザー存在確認検査、ユーザー検証フラグ、および認証器が処理した拡張機能などです。このページでは、このデータ構造に含まれている内容について説明します。

## 認証器データへのアクセス

認証器データはブラウザーが {{jsxref("ArrayBuffer")}} として利用できる状態になっており、複数の方法でアクセスできます。 最も便利な方法は以下の 2 つです。

- {{domxref("AuthenticatorAssertionResponse.authenticatorData", "PublicKeyCredential.response.authenticatorData")}} プロパティは、成功した {{domxref("CredentialsContainer.create", "navigator.credentials.create()")}} （資格情報作成）呼び出しから返される {{domxref("PublicKeyCredential")}} で利用できます。
- {{domxref("AuthenticatorAttestationResponse.getAuthenticatorData", "PublicKeyCredential.response.getAuthenticatorData()")}} メソッドを介してアクセス可能であり、これは成功した {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} （認証）呼び出しから返される {{domxref("PublicKeyCredential")}} で利用できます。

## データ構造

認証器データの {{jsxref("ArrayBuffer")}} は 37 バイト以上の長さで、以下のフィールドを含んでいます。

- **rpIdHash** (32 bytes)
  - : この資格情報がスコープされる[認証依頼者 ID](https://w3c.github.io/webauthn/#relying-party-identifier) の SHA-256 ハッシュです。サーバーは、フィッシングや その他の中間者攻撃を防ぐため、このハッシュが自分自身で認証依頼者の SHA256 ハッシュと一致することを保証します。
- **flags** (1 bytes)
  - : 認証器によって関連付けられた様々な属性を示すビットフィールド。ビットは次の通りです。ビット 0 が最下位ビットであり、下記で特に言及されていないビットはすべて「将来の使用のために予約」されています。
    - ビット 0、ユーザー存在確認 (UP): 設定されている（つまり `1`）の場合、認証器はユーザーが存在することを何らかのユーザー存在確認検査（TUP、例えば認証器のボタンに触れることなど）を通じて検証した。
    - ビット 2、ユーザー検証 (UV): 設定されている場合、認証器は生体認証、PIN、またはそれ以外にもメソッドを通じて実際のユーザーを検証した。
    - ビット 3、バックアップ適格性 (BE): 設定されている場合、認証者がアサーションを生成するために使用する公開鍵認証情報ソースはバックアップ適格である。これは、何らかの方法（例えばクラウド経由またはローカルネットワーク同期）でバックアップ可能であり、したがって生成元の認証器以外の認証器にも存在するということである。バックアップ適格な資格情報ソースは、そのため同時にマルチ端末資格情報としても知られています。
    - ビット 4、バックアップ状態 (BS): 設定した場合、公開鍵の資格情報ソースは現在バックアップされています（コンテキストはビット 3 を参照）。
    - ビット 6、認証済み資格情報データ (AT): 設定した場合、認証済み資格情報データが、この `authenticatorData` の最初の 37 バイトの直後に続きます。
    - ビット 7、拡張データ (ED): 設定した場合、拡張データが存在します。拡張データは、認証済み資格情報データが存在する場合、その後に続きます。認証済み資格情報データが存在しない場合、 `authenticatorData` の最初の 37 バイトの直後に続きます。

- **signCount** （4 バイト）
  - : 認証器が対応している場合、署名カウンター（対応していない場合は 0 に設定する）。サーバーはオプションでこのカウンターを使用して認証器の複製を検出することができます。
- **attestedCredentialData** （可変長）
  - : 作成された認証情報。これは {{domxref("CredentialsContainer.create", "navigator.credentials.create()")}} 呼び出し中にのみ紹介します。次の書式に従ったバイト列です。
    - **AAGUID** （16 バイト）: 認証器アテステーショングローバル一意識別子 (Authenticator Attestation Globally Unique Identifier) は、認証器のモデル（認証器の特定のインスタンスではない）を識別する固有の番号です。認証依頼者は、[FIDO メタデータサービス](https://fidoalliance.org/metadata/)を介してそのメタデータステートメントを検索することにより、この識別子を使用して認証器の特性を探すことができます。これは、企業展開や規制要件により特定の種類の認証器の使用が義務付けられている場合など、特定の状況で関連性があります。それ以外の場合は無視すべきです。

    - **_credentialIdLength_** （2 バイト）: これらのバイトに続く資格情報 ID の長さ。
    - **_credentialId_** （可変長）: この資格情報の固有の識別子。これにより、将来の認証においてリクエストすることができます。資格情報の長さは「_credentialIdLength_」バイトです。
    - **credentialPublicKey** （可変長）: [COSE](https://datatracker.ietf.org/doc/html/rfc8152)でエンコードされた公開鍵。この公開鍵はユーザーのアカウントに関連付けられたサーバーに格納されるために格納され、今後の認証で使用される（すなわち、使用されている）公開鍵です。認証依頼者は、{{domxref("AuthenticatorAttestationResponse.getPublicKey()")}} メソッドを通じて、COSE エンコードされた認証器データ解析なしに、その DER エンコードの形で取得することが可能です。

- **extensions** （可変長）
  - : オプションの [CBOR](https://datatracker.ietf.org/doc/html/rfc7049) マップで、認証器が処理した拡張機能からのレスポンス出力を保持します。

    拡張機能はオプションであり、ブラウザーによって認識される拡張機能が異なることがあります。ブラウザーが拡張機能を処理するかどうかは常にオプションです。指定された拡張機能を認識しないブラウザーは、単にそれを無視します。拡張機能の使用方法や、各ブラウザーが対応している拡張機能については、[Web Authentication extensions](/ja/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) を参照してください。

    > [!NOTE]
    > 認証器データには、認証器によって処理された拡張機能の結果のみが含まれています。ブラウザー（クライアント）によって処理された拡張機能の結果は、 {{domxref("PublicKeyCredential.getClientExtensionResults")}} 経由でアクセスすることが可能です。

## 関連情報

[Authenticator data definition in the WebAuthn specification](https://w3c.github.io/webauthn/#sctn-authenticator-data)
