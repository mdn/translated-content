---
title: ウェブ暗号化 API
slug: Web/API/Web_Crypto_API
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{DefaultAPISidebar("Web Crypto API")}}{{securecontext_header}}{{AvailableInWorkers}}

**ウェブ暗号化 API** (Web Crypto API) は、暗号化を使用してシステムを構築するためにスクリプトが暗号化プリミティブを使用することを可能にするインターフェイスです。

一部のブラウザーでは、{{domxref("Crypto")}} というインターフェイスが明確に定義されておらず、暗号化されていなくても実装されていました。混乱を避けるために、このインターフェイスのメソッドとプロパティはウェブ暗号化 API を実装しているブラウザーから削除され、ウェブ暗号化 API のすべてのメソッドは新しいインターフェイス、つまり {{domxref("SubtleCrypto")}} で利用可能になりました。{{domxref("Crypto.subtle")}} プロパティはそれを実装しているオブジェクトへのアクセスを提供します。

> [!WARNING]
> ウェブ暗号化 API は、低レベルの暗号化プリミティブを多数提供しています。それらは非常に使い方を間違えやすく、そして関連する落とし穴は非常に微妙である場合もあります。
>
> 基本的な暗号機能を正しく使用していると仮定しても、安全な鍵管理と全体的なセキュリティシステムの設計を正しく理解するのは非常に難しく、一般的にセキュリティ分野のスペシャリストの領域です。
>
> セキュリティシステムの設計と実装に誤りがあると、システムのセキュリティが完全に無効になる可能性があります。
>
> 学んで実験することは大切ですが、この分野に精通した専門家があなたの成果物を徹底的にレビューするまでは、そのセキュリティを保証したり、ほのめかしたりしないようにしてください。[Crypto 101 コース](https://www.crypto101.io/)は、安全なシステムの設計と実装について学ぶための素晴らしい入門先となるでしょう。

## インターフェイス

- {{domxref("Crypto")}}
  - : 暗号学的に強固な乱数ジェネレーターなどの基本的な暗号化機能を提供し、{{domxref("SubtleCrypto")}} オブジェクトを介して暗号プリミティブにアクセスできます。
    この型のオブジェクトには、グローバルスコープ内で {{domxref("Window.crypto")}} または {{domxref("WorkerGlobalScope.crypto")}} を使用してアクセスできます。
- {{domxref("SubtleCrypto")}}
  - : 鍵の生成、暗号化、復号、鍵のラッピングおよびアンラッピングといった具合に、低レベルの暗号化機能を提供するオブジェクトを表します。
- {{domxref("CryptoKey")}}
  - : 暗号化{{glossary("key", "鍵")}}を表します。これは、 {{domxref("SubtleCrypto")}} のメソッド {{domxref("SubtleCrypto.generateKey", "generateKey()")}}、 {{domxref("SubtleCrypto.deriveKey", "deriveKey()")}}、{{domxref("SubtleCrypto.importKey", "importKey()")}}、{{domxref("SubtleCrypto.unwrapKey", "unwrapKey()")}} のいずれかから取得されたものです。

### 辞書

- {{domxref("AesCbcParams")}}
  - : [AES-CBC](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-cbc) アルゴリズムを使用する場合に、`algorithm` 引数として {{domxref("SubtleCrypto.encrypt()")}}、{{domxref("SubtleCrypto.decrypt()")}}、 {{domxref("SubtleCrypto.wrapKey()")}}、または {{domxref("SubtleCrypto.unwrapKey()")}} に渡すべきオブジェクトを表します。
- {{domxref("AesCtrParams")}}
  - : [AES-CTR](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-ctr) アルゴリズムを使用する場合に、`algorithm` 引数として {{domxref("SubtleCrypto.encrypt()")}}、{{domxref("SubtleCrypto.decrypt()")}}、 {{domxref("SubtleCrypto.wrapKey()")}}、または {{domxref("SubtleCrypto.unwrapKey()")}} に渡すべきオブジェクトを表します。
- {{domxref("AesGcmParams")}}
  - : [AES-GCM](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) アルゴリズムを使用する場合に、`algorithm` 引数として {{domxref("SubtleCrypto.encrypt()")}}、{{domxref("SubtleCrypto.decrypt()")}}、 {{domxref("SubtleCrypto.wrapKey()")}}、または {{domxref("SubtleCrypto.unwrapKey()")}} に渡すべきオブジェクトを表します。
- {{domxref("AesKeyGenParams")}}
  - : AES キーを生成する際、つまりアルゴリズムが [AES-CBC](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-cbc)、[AES-CTR](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-ctr)、[AES-GCM](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-gcm)、[AES-KW](/ja/docs/Web/API/SubtleCrypto/wrapKey#aes-kw) のいずれかとして指定された場合に、 `algorithm` 引数として{{domxref("SubtleCrypto.generateKey()")}} に渡すべきオブジェクトを表します。
- {{domxref("CryptoKeyPair")}}
  - : 非対称暗号アルゴリズムで使用されている公開鍵と秘密鍵のペアを表します。
- {{domxref("EcKeyGenParams")}}
  - : 楕円曲線ベースの鍵ペアを生成する際、つまりアルゴリズムが [ECDSA](/ja/docs/Web/API/SubtleCrypto/sign#ecdsa) または [ECDH](/ja/docs/Web/API/SubtleCrypto/deriveKey#ecdh) のどちらかとして識別される場合に、`algorithm` 引数として {{domxref("SubtleCrypto.generateKey()")}} に渡すべきオブジェクトを表します。
- {{domxref("EcKeyImportParams")}}
  - : 楕円曲線ベースの鍵ペアを生成する際、つまりアルゴリズムが [ECDSA](/ja/docs/Web/API/SubtleCrypto/sign#ecdsa) または [ECDH](/ja/docs/Web/API/SubtleCrypto/deriveKey#ecdh) のどちらかとして識別される場合に、`algorithm` 引数として {{domxref("SubtleCrypto.importKey()")}} または {{domxref("SubtleCrypto.unwrapKey()")}} に渡すべきオブジェクトを表します。
- {{domxref("EcdhKeyDeriveParams")}}
  - : [ECDH](/ja/docs/Web/API/SubtleCrypto/deriveKey#ecdh) アルゴリズムを使用する場合、`algorithm` 引数として {{domxref("SubtleCrypto.deriveKey()")}} に渡すべきオブジェクトを表します。
- {{domxref("EcdsaParams")}}
  - : [ECDSA](/ja/docs/Web/API/SubtleCrypto/sign#ecdsa) アルゴリズムを使用する際、`algorithm` 引数として {{domxref("SubtleCrypto.sign()")}} または {{domxref("SubtleCrypto.verify()")}} に渡すべきオブジェクトを表します。
- {{domxref("HkdfParams")}}
  - : [HKDF](/ja/docs/Web/API/SubtleCrypto/deriveKey#hkdf) アルゴリズムを使用する場合、`algorithm` 引数として {{domxref("SubtleCrypto.deriveKey()")}} に渡すべきオブジェクトを表します。
- {{domxref("HmacImportParams")}}
  - : [HMAC](/ja/docs/Web/API/SubtleCrypto/sign#hmac) アルゴリズムのキーを生成する際、`algorithm` 引数として {{domxref("SubtleCrypto.importKey()")}} または {{domxref("SubtleCrypto.unwrapKey()")}} に渡すべきオブジェクトを表します。
- {{domxref("HmacKeyGenParams")}}
  - : [HMAC](/ja/docs/Web/API/SubtleCrypto/sign#hmac) アルゴリズム用の鍵を生成する際、`algorithm` 引数として {{domxref("SubtleCrypto.generateKey()")}} に渡すべきオブジェクトを表します。
- {{domxref("Pbkdf2Params")}}
  - : [PBKDF2](/ja/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2) アルゴリズムを使用する場合、`algorithm` 引数として {{domxref("SubtleCrypto.deriveKey()")}} に渡すべきオブジェクトを表します。
- {{domxref("RsaHashedImportParams")}}
  - : RSA ベースの鍵ペアをインポートする際、つまりアルゴリズムが [RSASSA-PKCS1-v1_5](/ja/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5)、[RSA-PSS](/ja/docs/Web/API/SubtleCrypto/sign#rsa-pss)、[RSA-OAEP](/ja/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) のいずれかとして識別される場合に、`algorithm` 引数として {{domxref("SubtleCrypto.importKey()")}} または {{domxref("SubtleCrypto.unwrapKey()")}} に渡すべきオブジェクトを表します。
- {{domxref("RsaHashedKeyGenParams")}}
  - : RSA ベースの鍵ペアを生成する際、つまりアルゴリズムが [RSASSA-PKCS1-v1_5](/ja/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5)、[RSA-PSS](/ja/docs/Web/API/SubtleCrypto/sign#rsa-pss)、[RSA-OAEP](/ja/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) のいずれかとして識別される場合に、`algorithm `引数として {{domxref("SubtleCrypto.generateKey()")}} に渡されるべきオブジェクトを表します。
- {{domxref("RsaOaepParams")}}
  - : [RSA_OAEP](/ja/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) アルゴリズムを使用する場合に、`algorithm` 引数として {{domxref("SubtleCrypto.encrypt()")}}、{{domxref("SubtleCrypto.decrypt()")}}、{{domxref("SubtleCrypto.wrapKey()")}}、{{domxref("SubtleCrypto.unwrapKey()")}} に渡すべきオブジェクトを表します。
- {{domxref("RsaPssParams")}}
  - : [RSA-PSS](/ja/docs/Web/API/SubtleCrypto/sign#rsa-pss) アルゴリズムを使用する場合、`algorithm` 引数として {{domxref("SubtleCrypto.sign()")}} または {{domxref("SubtleCrypto.verify()")}} に渡すべきオブジェクトを表します。

### 他インターフェイスへの拡張

- {{domxref("Window.crypto")}}
  - : メインスレッドのスコープ内でグローバルオブジェクトに関連付けられた {{domxref("Crypto")}} オブジェクトを表します。
- {{domxref("WorkerGlobalScope.crypto")}}
  - : ワーカースコープ内のグローバルオブジェクトに関連付けられた {{domxref("Crypto")}} オブジェクトを表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
