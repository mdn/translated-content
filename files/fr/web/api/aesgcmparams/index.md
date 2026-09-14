---
title: AesGcmParams
slug: Web/API/AesGcmParams
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Crypto API")}}

Le dictionnaire **`AesGcmParams`** de [l'API Web Crypto](/fr/docs/Web/API/Web_Crypto_API) représente l'objet qui doit être passé en tant que paramètre `algorithm` dans {{DOMxRef("SubtleCrypto.encrypt()")}}, {{DOMxRef("SubtleCrypto.decrypt()")}}, {{DOMxRef("SubtleCrypto.wrapKey()")}} ou {{DOMxRef("SubtleCrypto.unwrapKey()")}}, lors de l'utilisation de l'algorithme [AES-GCM](/fr/docs/Web/API/SubtleCrypto/encrypt#aes-gcm).

Pour des détails sur la manière de fournir des valeurs appropriées pour ce paramètre, consultez la spécification pour AES-GCM&nbsp;: [NIST SP800-38D <sup>(angl.)</sup>](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf), en particulier la section 5.2.1.1 sur les données d'entrée.

## Propriétés d'instance

- `name`
  - : Une chaîne de caractères. Cela doit être défini sur `AES-GCM`.
- `iv`
  - : Un objet {{JSxRef("ArrayBuffer")}}, un objet {{JSxRef("TypedArray")}} ou un objet {{JSxRef("DataView")}} avec le vecteur d'initialisation (<abbr lang="en">IV</i>). Celui-ci doit être unique pour chaque opération de chiffrement effectuée avec une clé donnée. En d'autres termes&nbsp;: ne réutilisez jamais un vecteur d'initialisation avec la même clé. La spécification AES-GCM recommande que le vecteur d'initialisation soit long de 96 bits et qu'il contienne généralement des bits issus d'un générateur de nombres aléatoires. [La section 8.2 de la spécification <sup>(angl.)</sup>](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf#%5B%7B%22num%22%3A65%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C0%2C792%2Cnull%5D) présente les méthodes permettant de générer des IV. Il convient de noter que l'IV n'a pas besoin d'être secret, mais simplement unique&nbsp;: il est donc tout à fait possible, par exemple, de le transmettre en clair en même temps que le message chiffré.
- `additionalData` {{Optional_Inline}}
  - : Un objet {{JSxRef("ArrayBuffer")}}, un objet {{JSxRef("TypedArray")}} ou un objet {{JSxRef("DataView")}}. Il contient des données supplémentaires qui ne sont pas chiffrées, mais qui sont authentifiées en même temps que les données chiffrées. Si `additionalData` est fourni ici, les mêmes données doivent être fournies dans l'appel correspondant à [`decrypt()`](/fr/docs/Web/API/SubtleCrypto/decrypt)&nbsp;: si les données fournies à l'appel `decrypt()` ne correspondent pas aux données d'origine, le déchiffrement lève une exception. Cela vous permet d'authentifier des données associées sans avoir à les chiffrer.

    La longueur en bits de `additionalData` doit être inférieure à `2^64 - 1`.

    La propriété `additionalData` est optionnelle et peut être omise sans compromettre la sécurité de l'opération de chiffrement.

- `tagLength` {{Optional_Inline}}
  - : Un objet `Number`. Ce paramètre détermine la taille, en bits, de la balise d'authentification générée lors de l'opération de chiffrement et utilisée pour l'authentification lors du déchiffrement correspondant.

    La [spécification de l'API Web Crypto <sup>(angl.)</sup>](https://w3c.github.io/webcrypto/#aes-gcm-operations-encrypt) exige que cette valeur soit l'une des suivantes&nbsp;: 32, 64, 96, 104, 112, 120 ou 128. En revanche, la spécification AES-GCM recommande qu'il soit de 96, 104, 112, 120 ou 128, bien que 32 ou 64 bits puissent être acceptables dans certaines applications. Pour plus d'informations, voir [l'annexe C <sup>(angl.)</sup>](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf#%5B%7B%22num%22%3A92%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C0%2C792%2Cnull%5D) de la publication du NIST intitulée «&nbsp;Recommandations concernant les modes de fonctionnement des chiffrements par blocs&nbsp;».

    `tagLength` est facultatif et prend la valeur par défaut de 128 s'il n'est pas défini.

## Exemples

Voir les exemples pour {{DOMxRef("SubtleCrypto.encrypt()")}} et {{DOMxRef("SubtleCrypto.decrypt()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

Les navigateurs qui prennent en charge l'algorithme «&nbsp;AES-GCM&nbsp;» pour les méthodes {{DOMxRef("SubtleCrypto.encrypt()")}}, {{DOMxRef("SubtleCrypto.decrypt()")}}, {{DOMxRef("SubtleCrypto.wrapKey()")}} ou {{DOMxRef("SubtleCrypto.unwrapKey()")}} prennent en charge ce type.

## Voir aussi

- La méthode {{DOMxRef("SubtleCrypto.encrypt()")}}
- La méthode {{DOMxRef("SubtleCrypto.decrypt()")}}
- La méthode {{DOMxRef("SubtleCrypto.wrapKey()")}}
- La méthode {{DOMxRef("SubtleCrypto.unwrapKey()")}}
