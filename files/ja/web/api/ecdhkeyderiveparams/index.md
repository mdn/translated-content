---
title: EcdhKeyDeriveParams
slug: Web/API/EcdhKeyDeriveParams
l10n:
  sourceCommit: 223d903a52fb6a381b7c14f10e956822af38930c
---

{{ APIRef("Web Crypto API") }}

[ウェブ暗号化 API](/ja/docs/Web/API/Web_Crypto_API) の **`EcdhKeyDeriveParams`** 辞書は、[ECDH](/ja/docs/Web/API/SubtleCrypto/deriveKey#ecdh) および [X25519](/ja/docs/Web/API/SubtleCrypto/deriveKey#x25519) アルゴリズムを用いる際、{{domxref("SubtleCrypto.deriveKey()")}} や {{domxref("SubtleCrypto.deriveBits()")}} の引数 `algorithm` として渡すオブジェクトを表します。

ECDH により、それぞれが公開鍵と秘密鍵からなる鍵ペアを持った 2 人が共有の秘密を導出することができます。彼らは公開鍵を交換し、自分の秘密鍵と相手の公開鍵を組み合わせて用いることにより、彼らが共有し、他の誰も知らない秘密の鍵を導出できます。

そのため、ECDH の `deriveKey()` で用いるパラメーターには相手の公開鍵が含まれ、これは自分の秘密鍵と組み合わせて共有の秘密を導出するために用いられます。

## インスタンスプロパティ

- `name`
  - : 文字列です。
    用いるアルゴリズムに応じて、`ECDH` または `X25519` に設定してください。
- `public`
  - : 相手の公開鍵を表す {{domxref("CryptoKey")}} オブジェクトです。

## 例

{{domxref("SubtleCrypto.deriveKey()")}} および {{domxref("SubtleCrypto.deriveBits()")}} の例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{domxref("SubtleCrypto.deriveKey()")}} メソッドで "ECDH" または "X25519" アルゴリズムに対応しているブラウザーは、この型に対応しているはずです。

## 関連情報

- {{domxref("SubtleCrypto.deriveKey()")}}
- {{domxref("SubtleCrypto.deriveBits()")}}
