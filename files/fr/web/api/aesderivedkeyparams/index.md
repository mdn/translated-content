---
title: AesDerivedKeyParams
slug: Web/API/AesDerivedKeyParams
l10n:
  sourceCommit: 63774786a6abccda8e70ad62429aa39571aba878
---

{{APIRef("Web Crypto API")}}

Le dictionnaire **`AesDerivedKeyParams`** de [l'API Web Crypto](/fr/docs/Web/API/Web_Crypto_API) représente l'objet qui doit être passé en tant que paramètre `derivedKeyType` dans {{DOMxRef("SubtleCrypto.deriveKey()")}}, lors de la dérivation d'une clé AES&nbsp;: c'est-à-dire lorsque l'algorithme est identifié comme [AES-CBC](/fr/docs/Web/API/SubtleCrypto/encrypt#aes-cbc), [AES-CTR](/fr/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-GCM](/fr/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) ou [AES-KW](/fr/docs/Web/API/SubtleCrypto/wrapKey#aes-kw).

## Propriétés d'instance

- `name`
  - : Une chaîne de caractères. Cela doit être défini sur `AES-CBC`, `AES-CTR`, `AES-GCM` ou `AES-KW`, en fonction de l'algorithme que vous souhaitez utiliser.
- `length`
  - : Un objet `Number` — la longueur en bits de la clé à générer. Cela doit être l'une des valeurs suivantes&nbsp;: 128, 192 ou 256.

## Exemples

Voir les exemples pour {{DOMxRef("SubtleCrypto.deriveKey()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

Les navigateurs qui prennent en charge l'un des algorithmes basés sur AES pour la méthode {{DOMxRef("SubtleCrypto.deriveKey()")}} prennent en charge ce type.

## Voir aussi

- La méthode {{DOMxRef("SubtleCrypto.generateKey()")}}
