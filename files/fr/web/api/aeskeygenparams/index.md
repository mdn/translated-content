---
title: AesKeyGenParams
slug: Web/API/AesKeyGenParams
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{APIRef("Web Crypto API")}}

Le dictionnaire **`AesKeyGenParams`** de [l'API Web Crypto](/fr/docs/Web/API/Web_Crypto_API) représente l'objet qui doit être passé en tant que paramètre `algorithm` dans {{DOMxRef("SubtleCrypto.generateKey()")}}, lors de la dérivation d'une clé AES&nbsp;: c'est-à-dire lorsque l'algorithme est identifié comme [AES-CBC](/fr/docs/Web/API/SubtleCrypto/encrypt#aes-cbc), [AES-CTR](/fr/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-GCM](/fr/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) ou [AES-KW](/fr/docs/Web/API/SubtleCrypto/wrapKey#aes-kw).

## Propriétés d'instance

- `name`
  - : Une chaîne de caractères. Cela doit être défini sur `AES-CBC`, `AES-CTR`, `AES-GCM` ou `AES-KW`, selon l'algorithme que vous souhaitez utiliser.
- `length`
  - : Un objet `Number` — la longueur en bits de la clé à générer. Cela doit être l'une des valeurs suivantes&nbsp;: 128, 192 ou 256.

## Exemples

Voir les exemples pour {{DOMxRef("SubtleCrypto.generateKey()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

Les navigateurs qui prennent en charge l'un des algorithmes basés sur AES pour la méthode {{DOMxRef("SubtleCrypto.generateKey()")}} prennent en charge ce type.

## Voir aussi

- La méthode {{DOMxRef("SubtleCrypto.generateKey()")}}
