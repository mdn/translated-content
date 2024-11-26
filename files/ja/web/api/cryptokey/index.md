---
title: CryptoKey
slug: Web/API/CryptoKey
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

**`CryptoKey`** は[ウェブ暗号化 API](/ja/docs/Web/API/Web_Crypto_API) のインターフェイスで、{{domxref("SubtleCrypto")}} メソッドの {{domxref("SubtleCrypto.generateKey", "generateKey()")}}、{{domxref("SubtleCrypto.deriveKey", "deriveKey()")}}、{{domxref("SubtleCrypto.importKey", "importKey()")}}、{{domxref("SubtleCrypto.unwrapKey", "unwrapKey()")}} のいずれかから取得した{{glossary("key", "暗号鍵")}}を表します。

セキュリティ上の理由により、`CryptoKey` インターフェイスは[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)でのみ使用することができます。

## インスタンスプロパティ

- {{domxref("CryptoKey.type")}} {{ReadOnlyInline}}

  - : このオブジェクトが表すキーの種類を表します。これは `"secret"`、`"private"`、`"public"` のいずれかの値を取ります。

- {{domxref("CryptoKey.extractable")}} {{ReadOnlyInline}}

  - : 論理値で、[`SubtleCrypto.exportKey()`](/ja/docs/Web/API/SubtleCrypto/exportKey) または [`SubtleCrypto.wrapKey()`](/ja/docs/Web/API/SubtleCrypto/wrapKey) を使用してキーを抽出できるかどうかを示します。

- {{domxref("CryptoKey.algorithm")}} {{ReadOnlyInline}}

  - : このキーを使用することができるアルゴリズムと、関連する追加の引数を記述したオブジェクトです。

- {{domxref("CryptoKey.usages")}} {{ReadOnlyInline}}

  - : 文字列の配列 ({{jsxref("Array")}}) で、このキーで何ができるかを示します。配列の要素に利用可能な値は `"encrypt"`, `"decrypt"`, `"sign"`, `"verify"`, `"deriveKey"`, `"deriveBits"`, `"wrapKey"`, `"unwrapKey"` です。

## 例

`SubtleCrypto` メソッドの例では、よく `CryptoKey` オブジェクトを使用しています。

- [`SubtleCrypto.generateKey()`](/ja/docs/Web/API/SubtleCrypto/generateKey)
- [`SubtleCrypto.deriveKey()`](/ja/docs/Web/API/SubtleCrypto/deriveKey)
- [`SubtleCrypto.importKey()`](/ja/docs/Web/API/SubtleCrypto/importKey)
- [`SubtleCrypto.exportKey()`](/ja/docs/Web/API/SubtleCrypto/exportKey)
- [`SubtleCrypto.wrapKey()`](/ja/docs/Web/API/SubtleCrypto/wrapKey)
- [`SubtleCrypto.unwrapKey()`](/ja/docs/Web/API/SubtleCrypto/unwrapKey)
- [`SubtleCrypto.encrypt()`](/ja/docs/Web/API/SubtleCrypto/encrypt)
- [`SubtleCrypto.decrypt()`](/ja/docs/Web/API/SubtleCrypto/decrypt)
- [`SubtleCrypto.sign()`](/ja/docs/Web/API/SubtleCrypto/sign)
- [`SubtleCrypto.verify()`](/ja/docs/Web/API/SubtleCrypto/verify)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ暗号化 API](/ja/docs/Web/API/Web_Crypto_API)
- [ウェブセキュリティ](/ja/docs/Web/Security)
- [プライバシー、権限、情報セキュリティ](/ja/docs/Web/Privacy)
- {{domxref("Crypto")}} および {{domxref("Crypto.subtle")}}
