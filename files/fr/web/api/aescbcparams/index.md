---
title: AesCbcParams
slug: Web/API/AesCbcParams
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{APIRef("Web Crypto API")}}

Le dictionnaire **`AesCbcParams`** de [l'API Web Crypto](/fr/docs/Web/API/Web_Crypto_API) représente l'objet qui doit être passé en tant que paramètre `algorithm` dans {{DOMxRef("SubtleCrypto.encrypt()")}}, {{DOMxRef("SubtleCrypto.decrypt()")}}, {{DOMxRef("SubtleCrypto.wrapKey()")}}, ou {{DOMxRef("SubtleCrypto.unwrapKey()")}}, lors de l'utilisation de l'algorithme [AES-CBC](/fr/docs/Web/API/SubtleCrypto/encrypt#aes-cbc).

## Propriétés d'instance

- `name`
  - : Une chaîne de caractères. Cela doit être défini sur `AES-CBC`.
- `iv`
  - : Un objet {{JSxRef("ArrayBuffer")}}, un objet {{JSxRef("TypedArray")}} ou un objet {{JSxRef("DataView")}}. Le vecteur d'initialisation. Il doit faire 16 octets, être impossible à prédire et, de préférence être aléatoire d'un point de vue cryptographique. Il n'est toutefois pas nécessaire qu'il soit secret (il peut par exemple être transmis en clair avec le texte chiffré).

## Exemples

Voir les exemples pour {{DOMxRef("SubtleCrypto.encrypt()")}} et {{DOMxRef("SubtleCrypto.decrypt()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

Les navigateurs qui prennent en charge l'algorithme «&nbsp;AES-CBC&nbsp;» pour les méthodes {{DOMxRef("SubtleCrypto.encrypt()")}}, {{DOMxRef("SubtleCrypto.decrypt()")}}, {{DOMxRef("SubtleCrypto.wrapKey()")}}, ou {{DOMxRef("SubtleCrypto.unwrapKey()")}} prennent en charge ce type.

## Voir aussi

- Le mode CBC est défini dans la section 6.2 du [standard NIST SP800-38A <sup>(angl.)</sup>](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D)
- La méthode {{DOMxRef("SubtleCrypto.encrypt()")}}
- La méthode {{DOMxRef("SubtleCrypto.decrypt()")}}
- La méthode {{DOMxRef("SubtleCrypto.wrapKey()")}}
- La méthode {{DOMxRef("SubtleCrypto.unwrapKey()")}}
