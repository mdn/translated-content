---
title: SubtleCrypto
slug: Web/API/SubtleCrypto
---

{{APIRef("Web Crypto API")}}

Интерфейс **`SubtileCrypto`** представляет набор криптографических примитивов. Экземпляр **`SubtileCrypto`** доступен как {{domxref("Crypto.subtle")}}, в контексте window ({{domxref("Window.crypto")}}).

> **Предупреждение:** Per the spec: "Developers making use of the SubtleCrypto interface are expected to be aware of the security concerns associated with both the design and implementation of the various algorithms provided. The raw algorithms are provided in order to allow developers maximum flexibility in implementing a variety of protocols and applications, each of which may represent the composition and security parameters in a unique manner that necessitate the use of the raw algorithms."

## Свойства

_Интерфейс не наследует и не определяет собственные свойства._

## Методы

- {{domxref("SubtleCrypto.encrypt()")}}
  - : Возвращает {{jsxref("Promise")}} с данными, зашифрованными на основании исходного текста, алгоритма шифрования и ключа, переданных в качества аргументов.
- {{domxref("SubtleCrypto.decrypt()")}}
  - : Возвращает {{jsxref("Promise")}} с исходным текстом. В качества аргументов принимает зашифрованную строку, алгоритм шифрования и ключ.
- {{domxref("SubtleCrypto.sign()")}}
  - : Возвращает {{jsxref("Promise")}} с сигнатурой, полученной на основании текста, алгоритма шифрования и ключа, переданных в качества аргументов.
- {{domxref("SubtleCrypto.verify()")}}
  - : Возвращает {{jsxref("Promise")}} с {{jsxref("Boolean")}} значением, определяющим соответствует ли переданная сигнатура тексу, алгоритму шифрования и ключу, также переданным в качества аргументов.
- {{domxref("SubtleCrypto.digest()")}}
  - : Возвращает {{jsxref("Promise")}} с хеш-суммой сгенерированной на основании алгоритма шифрования и исходного текста, переданных в качества аргументов
- {{domxref("SubtleCrypto.generateKey()")}}
  - : Возвращает {{jsxref("Promise")}} с сгенерированным {{domxref("CryptoKey")}} для симметричных алгоритмов, или {{domxref("CryptoKeyPair")}} для асимметричных алгоритмов.
- {{domxref("SubtleCrypto.deriveKey()")}}
  - : Возвращает {{jsxref("Promise")}} с сгенерированным {{domxref("CryptoKey")}}, на основе переданных в качестве аргументов мастер-ключа и алгоритма шифрования.
- {{domxref("SubtleCrypto.deriveBits()")}}
  - : Возвращает {{jsxref("Promise")}} с буфером псевдо-случайных бит, полученных на основании мастер-ключа и алгоритма шифрования, переданных в качества аргументов.
- {{domxref("SubtleCrypto.importKey()")}}
  - : Returns a {{jsxref("Promise")}} of a {{domxref("CryptoKey")}} corresponding to the format, the algorithm, the raw key data, the usages and the extractability given as parameters.
- {{domxref("SubtleCrypto.exportKey()")}}
  - : Returns a {{jsxref("Promise")}} of a buffer containing the key in the format requested.
- {{domxref("SubtleCrypto.wrapKey()")}}
  - : Returns a {{jsxref("Promise")}} of a wrapped symmetric key for usage (transfer, storage) in insecure environments. The wrapped buffer returned is in the format given in parameters, and contains the key wrapped by the given wrapping key with the given algorithm.
- {{domxref("SubtleCrypto.unwrapKey()")}}
  - : Returns a {{jsxref("Promise")}} of a {{domxref("CryptoKey")}} corresponding to the wrapped key given in parameter.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Crypto")}} and {{domxref("Crypto.subtle")}}.
