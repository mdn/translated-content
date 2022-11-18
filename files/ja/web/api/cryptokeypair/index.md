---
title: CryptoKeyPair
slug: Web/API/CryptoKeyPair
---

{{APIRef("Web Crypto API")}}

{{domxref("Web Crypto API")}} の辞書 **`CryptoKeyPair`** は、非対称暗号アルゴリズム (公開鍵暗号アルゴリズムとしても知られる) の鍵ペアを表す。

`CryptoKeyPair` のオブジェクトは、以下の非対称暗号アルゴリズムのいずれかを選択して {{domxref("SubtleCrypto.generateKey()")}} を用いることで得られる。

* RSASSA-PKCS1-v1_5
* RSA-PSS
* RSA-OAEP
* ECDSA
* ECDH

このオブジェクトは秘密鍵を保持する `privateKey` および公開鍵を保持する `publicKey` の2個のプロパティを持つ。これらはどちらも {{domxref("CryptoKey")}} のオブジェクトである。

## プロパティ

- `CryptoKeyPair.privateKey`
  - : 秘密鍵を表す {{domxref("CryptoKey")}} のオブジェクト。暗号化と復号のアルゴリズムでは、この鍵は復号に用いる。署名と署名検証のアルゴリズムでは、この鍵は署名に用いる。
- `CryptoKeyPair.publicKey`
  - : 公開鍵を表す {{domxref("CryptoKey")}} のオブジェクト。暗号化と復号のアルゴリズムでは、この鍵は暗号化に用いる。署名と署名検証のアルゴリズムでは、この鍵は署名検証に用いる。

## 例

`SubtleCrypto` のメソッドの例では、よく `CryptoKeyPair` が使われる。例えば以下がある。

- {{domxref("SubtleCrypto.generateKey()")}}
- {{domxref("SubtleCrypto.deriveKey()")}}
- {{domxref("SubtleCrypto.importKey()")}}
- {{domxref("SubtleCrypto.exportKey()")}}
- {{domxref("SubtleCrypto.wrapKey()")}}
- {{domxref("SubtleCrypto.unwrapKey()")}}
- {{domxref("SubtleCrypto.encrypt()")}}
- {{domxref("SubtleCrypto.decrypt()")}}
- {{domxref("SubtleCrypto.sign()")}}
- {{domxref("SubtleCrypto.verify()")}}

## 仕様書

{{Specifications}}

## 関連情報

- {{domxref("SubtleCrypto.generateKey")}}。
- {{domxref("SubtleCrypto.sign")}} および {{domxref("SubtleCrypto.verify")}}。
- {{domxref("SubtleCrypto.encrypt")}} および {{domxref("SubtleCrypto.decrypt")}}。
