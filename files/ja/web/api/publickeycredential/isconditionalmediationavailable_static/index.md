---
title: "PublicKeyCredential: isConditionalMediationAvailable() 静的メソッド"
short-title: isConditionalMediationAvailable()
slug: Web/API/PublicKeyCredential/isConditionalMediationAvailable_static
l10n:
  sourceCommit: a060aa315813bd1e69e4a43d7aed241f649e7e0d
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`isConditionalMediationAvailable()`** は {{domxref("PublicKeyCredential")}} インターフェイスの静的メソッドで、[条件付き仲介](/ja/docs/Web/API/Web_Authentication_API#autofill_ui) が利用できる場合に `true` として解決する {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
PublicKeyCredential.isConditionalMediationAvailable()
```

### 引数

なし。

### 返値

条件付き仲介が利用できるかどうかを示す論理値に解決される {{jsxref("Promise")}} です。

### 例外

返される {{jsxref("Promise")}} は、以下の値で拒否されることがあります。

- `SecurityError` {{domxref("DOMException")}}
  - : RP のドメインが有効ではありません。

## 例

条件付き WebAuthn API 呼び出しを呼び出す前に、以下の点を調べます。

- ブラウザーがウェブ認証 API に対応しているか。
- ブラウザーが条件付き仲介に対応しているか。

```js
// `window.PublicKeyCredential` が利用できれば、WebAuthn を使用できる
if (
  window.PublicKeyCredential &&
  PublicKeyCredential.isConditionalMediationAvailable
) {
  // 条件付き仲介が利用できるかどうかを調べる
  const isCMA = await PublicKeyCredential.isConditionalMediationAvailable();
  if (isCMA) {
    // WebAuthn 認証を呼び出す
    const publicKeyCredentialRequestOptions = {
      // サーバーが生成したチャレンジ
      challenge: challengeFromServer,
      // 登録時に使用された RP ID
      rpId: "example.com",
    };

    const credential = await navigator.credentials.get({
      publicKey: publicKeyCredentialRequestOptions,
      signal: abortController.signal,
      // 条件付き UI を有効にするには、'conditional' を指定する
      mediation: "conditional",
    });
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
