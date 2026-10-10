---
title: Web Crypto API
slug: Web/API/Web_Crypto_API
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{DefaultAPISidebar("Web Crypto API")}}{{securecontext_header}}{{AvailableInWorkers}}

**Web Crypto API**는 스크립트에서 기본적인 암호화를 사용하여 시스템을 구축할 수 있도록 돕는 인터페이스입니다.

일부 브라우저에서는 Crypto 인터페이스를 명확하게 정의하지 않거나 암호학적으로 안전하지 않은 상태로 구현하였습니다.
혼란을 피하기 위해 이러한 인터페이스와 메서드, 속성들을 Web Crypto API를 제공하는 브라우저에서 제거되었으며, 모든 Web Crypto API 메서드는 새로운 인터페이스인 {{domxref("SubtleCrypto")}}에서 사용할 수 있습니다.
{{domxref("Crypto.subtle")}} 속성은 해당 속성을 구현하는 SubtleCrypto 객체에 대한 접근 권한을 제공합니다.

> [!WARNING]
> Web Crypto API는 여러가지 저수준 암호화에 대한 기본 요소를 제공합니다. 이러한 요소들은 잘못 사용되기 쉽고, 이로 인해 미묘한 문제가 발생할 수 있습니다.
>
> 암호화 기능을 올바르게 사용한다고 가정하더라도, 안전한 키 관리와 전반적인 보안 시스템을 설계하고 구현하는 것은 매우 어렵고, 일반적으로 보안 전문가의 영역입니다.
>
> 보안 시스템 설계 및 구현 과정에서 발생한 오류로 인해 시스템 보안이 완전히 무력화될 수도 있습니다.
>
> 실제로 사용하기 전에 배우고 실험해 보시길 바랍니다. 하지만 해당 분야의 전문가가 검토하기 전까지는 작업의 보안을 보장하거나 암시하지 마십시오. [Crypto 101 Course](https://www.crypto101.io/)는 보안 시스템의 설계 및 구현에 대한 학습을 시작하기 좋은 사이트입니다.

## 인터페이스

- {{domxref("Crypto")}}
  - : 강력한 난수 생성기 및 {{domxref("SubtleCrypto")}} 객체를 통한 암호화 기본 기능을 제공합니다.
    Crypto는 {{domxref("Window.crypto")}} 또는 {{domxref("WorkerGlobalScope.crypto")}}를 사용해서 전역 범위에서 접근할 수 있습니다.
- {{domxref("SubtleCrypto")}}
  - : 키 생성, 암호화, 복호화와 키 랩/언랩 등을 위한 저수준 암호화를 제공하는 객체를 나타냅니다.
- {{domxref("CryptoKey")}}
  - : {{domxref("SubtleCrypto")}} 인터페이스의 {{domxref("SubtleCrypto.generateKey", "generateKey()")}}, {{domxref("SubtleCrypto.deriveKey", "deriveKey()")}}, {{domxref("SubtleCrypto.importKey", "importKey()")}}, {{domxref("SubtleCrypto.unwrapKey", "unwrapKey()")}} 메서드들로부터 얻어진 암호화 키를 나타냅니다.

### 객체 파라미터

- {{domxref("AesCbcParams")}}
  - : [AES-CBC](/ko/docs/Web/API/SubtleCrypto/encrypt#aes-cbc) 알고리즘을 사용할 때 {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}}, {{domxref("SubtleCrypto.unwrapKey()")}} 메서드의 `algorithm` 파라미터로 전달되어야 하는 객체를 나타냅니다.
- {{domxref("AesCtrParams")}}
  - : [AES-CTR](/ko/docs/Web/API/SubtleCrypto/encrypt#aes-ctr) 알고리즘을 사용할 때 {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}}, {{domxref("SubtleCrypto.unwrapKey()")}} 메서드의 `algorithm` 파라미터로 전달되어야 하는 객체를 나타냅니다.
- {{domxref("AesGcmParams")}}
  - : [AES-GCM](/ko/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) 알고리즘을 사용할 때 {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}}, {{domxref("SubtleCrypto.unwrapKey()")}} 메서드의 `algorithm` 파라미터로 전달되어야 하는 객체를 나타냅니다.
- {{domxref("AesKeyGenParams")}}
  - : AES 키를 생성할 때 사용되는 알고리즘이 [AES-CBC](/ko/docs/Web/API/SubtleCrypto/encrypt#aes-cbc), [AES-CTR](/ko/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-GCM](/ko/docs/Web/API/SubtleCrypto/encrypt#aes-gcm), [AES-KW](/ko/docs/Web/API/SubtleCrypto/wrapKey#aes-kw) 중 하나일 경우, {{domxref("SubtleCrypto.generateKey()")}} 메서드의 `algorithm` 파라미터에 전달되어야 하는 객체를 나타냅니다.
- {{domxref("CryptoKeyPair")}}
  - : 비대칭 암호화 알고리즘에 사용되는 공개 키와 개인 키 쌍을 나타냅니다.
- {{domxref("EcKeyGenParams")}}
  - : 타원 곡선 기반 키 쌍을 생성할 때 [ECDSA](/ko/docs/Web/API/SubtleCrypto/sign#ecdsa) 혹은 [ECDH](/ko/docs/Web/API/SubtleCrypto/deriveKey#ecdh) 알고리즘을 사용하는 경우, {{domxref("SubtleCrypto.generateKey()")}} 메서드의 `algorithm` 파라미터에 전달되어야 하는 객체를 나타냅니다.
- {{domxref("EcKeyImportParams")}}
  - : 타원 곡선 기반 키 쌍을 생성할 때 [ECDSA](/ko/docs/Web/API/SubtleCrypto/sign#ecdsa) 혹은 [ECDH](/ko/docs/Web/API/SubtleCrypto/deriveKey#ecdh) 알고리즘을 사용하는 경우, {{domxref("SubtleCrypto.importKey()")}}, {{domxref("SubtleCrypto.unwrapKey()")}} 메서드의 `algorithm` 파라미터에 전달되어야 하는 객체를 나타냅니다.
- {{domxref("EcdhKeyDeriveParams")}}
  - : [ECDH](/ko/docs/Web/API/SubtleCrypto/deriveKey#ecdh) 알고리즘을 사용할 때 {{domxref("SubtleCrypto.deriveKey()")}} 메서드의 `algorithm` 파라미터에 전달되어야 하는 객체를 나타냅니다.
- {{domxref("EcdsaParams")}}
  - : [ECDSA](/ko/docs/Web/API/SubtleCrypto/sign#ecdsa) 알고리즘을 사용할 때 {{domxref("SubtleCrypto.sign()")}}, {{domxref("SubtleCrypto.verify()")}} 메서드의 `algorithm` 파라미터에 전달되어야 하는 객체를 나타냅니다.
- {{domxref("HkdfParams")}}
  - : [HKDF](/ko/docs/Web/API/SubtleCrypto/deriveKey#hkdf) 알고리즘을 사용할 때 {{domxref("SubtleCrypto.deriveKey()")}} 메서드의 `algorithm` 파라미터에 전달되어야 하는 객체를 나타냅니다.
- {{domxref("HmacImportParams")}}
  - : [HMAC](/ko/docs/Web/API/SubtleCrypto/sign#hmac) 알고리즘에 대한 키를 생성할 때 {{domxref("SubtleCrypto.importKey()")}}, {{domxref("SubtleCrypto.unwrapKey()")}} 메서드의 `algorithm` 파라미터에 전달되어야 하는 객체를 나타냅니다.
- {{domxref("HmacKeyGenParams")}}
  - : [HMAC](/ko/docs/Web/API/SubtleCrypto/sign#hmac) 알고리즘에 대한 키를 생성할 때 {{domxref("SubtleCrypto.generateKey()")}} 메서드의 `algorithm` 파라미터에 전달되어야 하는 객체를 나타냅니다.
- {{domxref("Pbkdf2Params")}}
  - : [PBKDF2](/ko/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2) 알고리즘을 사용할 때 {{domxref("SubtleCrypto.deriveKey()")}} 메서드의 `algorithm` 파라미터에 전달되어야 하는 객체를 나타냅니다.
- {{domxref("RsaHashedImportParams")}}
  - : RSA 기반의 쌍을 가져올 때 알고리즘이 [RSASSA-PKCS1-v1_5](/ko/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/ko/docs/Web/API/SubtleCrypto/sign#rsa-pss), [RSA-OAEP](/ko/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) 중 하나로 지정된 경우, {{domxref("SubtleCrypto.importKey()")}}, {{domxref("SubtleCrypto.unwrapKey()")}} 메서드의 `algorithm` 파라미터에 전달되어야 하는 객체를 나타냅니다.
- {{domxref("RsaHashedKeyGenParams")}}
  - : RSA 기반의 키 쌍을 생성할 때 사용하는 알고리즘이 [RSASSA-PKCS1-v1_5](/ko/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/ko/docs/Web/API/SubtleCrypto/sign#rsa-pss), [RSA-OAEP](/ko/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) 중 하나일 경우, {{domxref("SubtleCrypto.generateKey()")}} 메서드의 `algorithm` 파라미터에 전달되어야 하는 객체를 나타냅니다.
- {{domxref("RsaOaepParams")}}
  - : [RSA_OAEP](/ko/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) 알고리즘을 사용할 때 {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}}, {{domxref("SubtleCrypto.unwrapKey()")}} 메서드의 `algorithm` 파라미터로 전달되어야 하는 객체를 나타냅니다.
- {{domxref("RsaPssParams")}}
  - : [RSA-PSS](/ko/docs/Web/API/SubtleCrypto/sign#rsa-pss) 알고리즘을 사용할 때 {{domxref("SubtleCrypto.sign()")}}, {{domxref("SubtleCrypto.verify()")}} 메서드의 `algorithm` 파라미터에 전달되어야 하는 객체를 나타냅니다.

### 다른 인터페이스에 대한 확장

- {{domxref("Window.crypto")}}
  - : 메인 스레드 스코프에서 전역 객체에 포함된 {{domxref("Crypto")}} 객체를 나타냅니다.
- {{domxref("WorkerGlobalScope.crypto")}}
  - : 웹 워커 스코프에서 전역 객체에 포함된 {{domxref("Crypto")}} 객체를 나타냅니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
