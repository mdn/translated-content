---
title: CredentialsContainer
slug: Web/API/CredentialsContainer
l10n:
  sourceCommit: c91c87d7da181194f3786abfcb2f27d2b885fb91
---

{{APIRef("Credential Management API")}}{{securecontext_header}}

**`CredentialsContainer`** は[資格情報管理 API](/ja/docs/Web/API/Credential_Management_API) のインターフェイスで、資格情報をリクエストし、ログインに成功したりログアウトが発生したりしたときに、ユーザーエージェントに通知するメソッドを公開します。このインターフェイスは {{domxref('Navigator.credentials')}} からアクセスできます。

## インスタンスプロパティ

なし。

## インスタンスメソッド

- {{domxref("CredentialsContainer.create()")}}
  - : {{jsxref("Promise")}} を返します。これは、指定されたオプションに基づく新しい {{domxref("Credential")}} インスタンスで解決します。 `Credential` オブジェクトが作成できない場合は `null` になります。例外が発生すると、 {{jsxref("Promise")}} が拒否されることがあります。
- {{domxref("CredentialsContainer.get()")}}
  - : {{jsxref("Promise")}} を返します。これは、指定された引数に一致する {{domxref("Credential")}} インスタンスで解決されます。
- {{domxref("CredentialsContainer.preventSilentAccess()")}}
  - : 現在のオリジンへの今後の訪問で自動ログインを許可するかどうかを指定するフラグを設定し、空の {{jsxref("Promise")}} を返します。例えば、ユーザーがウェブサイトからログアウトした後、次回のサイト訪問時に自動的にログインされないようにするために、このメソッドを呼び出すことができます。仕様の以前のバージョンでは、このメソッドは `requireUserMediation()` と呼ばれていました。 対応の詳しい情報は[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。
- {{domxref("CredentialsContainer.store()")}}
  - : 提供された {{domxref("Credential")}} インスタンスの中にユーザーのための一連の資格情報を格納し、そのインスタンスを {{jsxref("Promise")}} で返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
