---
title: "CryptoKey: type プロパティ"
short-title: type
slug: Web/API/CryptoKey/type
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Crypto API")}}{{SecureContext_Header}}

**`type`** は {{DOMxRef("CryptoKey")}} インターフェイスの読み取り専用プロパティで、オブジェクトが表すキーの種類を示します。以下の値を示します。

- `"secret"`: このキーは{{Glossary("Symmetric-key cryptography", "対象鍵暗号")}}で使用する秘密鍵です。
- `"private"`: このキーは{{Glossary("Public-key cryptography", "非対称鍵暗号")}}の [`CryptoKeyPair`](/ja/docs/Web/API/CryptoKeyPair) の秘密鍵側です。
- `"public"`: このキーは{{Glossary("Public-key cryptography", "非対称鍵暗号")}}の [`CryptoKeyPair`](/ja/docs/Web/API/CryptoKeyPair) の公開鍵側です。

## 値

文字列で、`"secret"`、`"private"`、`"public"` のいずれかです。

## 例

この関数は、{{domxref("SubtleCrypto.verify()")}} と引数で指定された公開鍵を使用してメッセージを検証します。 キーが公開鍵でない場合、そのような検証は基本的に安全ではないため、常に `"invalid"` を返します。

```js
async function verifyMessage(publicKey) {
  const signatureValue = document.querySelector(
    ".rsassa-pkcs1 .signature-value",
  );
  signatureValue.classList.remove("valid", "invalid");

  let result = false; // 既定では無効

  if (publicKey.type === "public") {
    const encoded = getMessageEncoding();
    result = await window.crypto.subtle.verify(
      "RSASSA-PKCS1-v1_5",
      publicKey,
      signature,
      encoded,
    );
  }

  signatureValue.classList.add(result ? "valid" : "invalid");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
