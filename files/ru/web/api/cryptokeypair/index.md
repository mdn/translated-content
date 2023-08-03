---
title: CryptoKeyPair
slug: Web/API/CryptoKeyPair
---

{{APIRef("Web Crypto API")}}

**`CryptoKeyPair`** из [Web Crypto API](/ru/docs/Web/API/Web_Crypto_API) представляет собой пару ключей для ассиметричных криптографических алгоритмов, также известных как алгоритмы с публичным-приватным ключом.

Объект `CryptoKeyPair` может быть получен с помощью {{domxref("SubtleCrypto.generateKey()")}}, используя один из следующих алгоритмов: RSASSA-PKCS1-v1_5, RSA-PSS, RSA-OAEP, ECDSA, или ECDH.

У него всего два свойства, оба объекты [`CryptoKey`](/ru/docs/Web/API/CryptoKey): свойства `privateKey`, содержащее приватный ключ, и `publicKey` с публичным ключом.

## Свойства

- `CryptoKeyPair.privateKey`
  - : Объект [`CryptoKey`](/ru/docs/Web/API/CryptoKey), представляющее приватный ключ. В криптографических алгоритмах используется для расшифровывания и подписи.
- `CryptoKeyPair.publicKey`
  - : Объект [`CryptoKey`](/ru/docs/Web/API/CryptoKey), представляющее публичный ключ. В криптографических алгоритмах используется для зашифровывания и проверки подлинности подписи.

## Примеры

Методы `SubtleCrypto` обычно используют объекты `CryptoKeyPair`. Примеры:

- [`SubtleCrypto.generateKey()`](/ru/docs/Web/API/SubtleCrypto/generateKey)
- [`SubtleCrypto.deriveKey()`](/ru/docs/Web/API/SubtleCrypto/deriveKey)
- [`SubtleCrypto.importKey()`](/ru/docs/Web/API/SubtleCrypto/importKey)
- [`SubtleCrypto.exportKey()`](/ru/docs/Web/API/SubtleCrypto/exportKey)
- [`SubtleCrypto.wrapKey()`](/ru/docs/Web/API/SubtleCrypto/wrapKey)
- [`SubtleCrypto.unwrapKey()`](/ru/docs/Web/API/SubtleCrypto/unwrapKey)
- [`SubtleCrypto.encrypt()`](/ru/docs/Web/API/SubtleCrypto/encrypt)
- [`SubtleCrypto.decrypt()`](/ru/docs/Web/API/SubtleCrypto/decrypt)
- [`SubtleCrypto.sign()`](/ru/docs/Web/API/SubtleCrypto/sign)
- [`SubtleCrypto.verify()`](/ru/docs/Web/API/SubtleCrypto/verify)

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("SubtleCrypto.generateKey")}}.
- {{domxref("SubtleCrypto.sign")}} and {{domxref("SubtleCrypto.verify")}}.
- {{domxref("SubtleCrypto.encrypt")}} and {{domxref("SubtleCrypto.decrypt")}}.
