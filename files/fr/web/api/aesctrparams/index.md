---
title: AesCtrParams
slug: Web/API/AesCtrParams
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

{{APIRef("Web Crypto API")}}

Le dictionnaire **`AesCtrParams`** de [l'API Web Crypto](/fr/docs/Web/API/Web_Crypto_API) représente l'objet qui doit être passé en tant que paramètre `algorithm` dans {{DOMxRef("SubtleCrypto.encrypt()")}}, {{DOMxRef("SubtleCrypto.decrypt()")}}, {{DOMxRef("SubtleCrypto.wrapKey()")}}, ou {{DOMxRef("SubtleCrypto.unwrapKey()")}}, lors de l'utilisation de l'algorithme [AES-CTR](/fr/docs/Web/API/SubtleCrypto/encrypt#aes-ctr).

AES est un chiffrement par blocs, ce qui signifie qu'il divise le message en blocs et chiffre chaque bloc individuellement. En mode CTR, chaque fois qu'un bloc du message est chiffré, un bloc supplémentaire de données est mélangé. Ce bloc supplémentaire est appelé le «&nbsp;bloc compteur&nbsp;».

Une valeur de bloc compteur donnée ne doit jamais être utilisée plus d'une fois avec la même clé&nbsp;:

- Étant donné un message de _n_ blocs, un bloc compteur différent doit être utilisé pour chaque bloc.
- Si la même clé est utilisée pour chiffrer plusieurs messages, un bloc compteur différent doit être utilisé pour tous les blocs de tous les messages.

En général, c'est réalisé en divisant la valeur initiale du bloc compteur en deux parties concaténées&nbsp;:

- Un {{Glossary("Nonce", "nombre unique")}} (c'est-à-dire un nombre qui ne peut être utilisé qu'une seule fois). La partie nombre unique du bloc reste la même pour chaque bloc du message. Chaque fois qu'un nouveau message doit être chiffré, un nouveau nombre unique est choisi. Les nombres uniques n'ont pas besoin d'être secrets, mais ils ne doivent pas être réutilisés avec la même clé.
- Un compteur. Cette partie du bloc est incrémentée chaque fois qu'un bloc est chiffré.

Essentiellement&nbsp;: le nombre unique doit garantir que les blocs compteur ne sont pas réutilisés d'un message à l'autre, tandis que le compteur doit garantir que les blocs compteur ne sont pas réutilisés au sein d'un même message.

> [!NOTE]
> Voir [l'annexe B du standard NIST SP800-38A <sup>(angl.)</sup>](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D) pour plus d'informations.

## Propriétés d'instance

- `name`
  - : Une chaîne de caractères. Cela doit être défini sur `AES-CTR`.
- `counter`
  - : Un objet {{JSxRef("ArrayBuffer")}}, un objet {{JSxRef("TypedArray")}}, ou un objet {{JSxRef("DataView")}} — la valeur initiale du bloc compteur. Cela doit faire 16 octets (la taille du bloc AES). Les bits `length` les plus à droite de ce bloc sont utilisés pour le compteur, et le reste est utilisé pour le nombre unique. Par exemple, si `length` est défini sur 64, alors la première moitié de `counter` est le nombre unique et la seconde moitié est utilisée pour le compteur.
- `length`
  - : Un objet `Number` — le nombre de bits du bloc de compteur utilisés pour le compteur proprement dit. Le compteur doit être suffisamment grand pour éviter tout dépassement&nbsp;: si le message comporte `n` blocs et que le compteur a une longueur de `m` bits, alors la condition suivante doit être vérifiée&nbsp;: `n <= 2^m`. Le standard [NIST SP800-38A <sup>(angl.)</sup>](https://csrc.nist.gov/pubs/sp/800/38/a/final), qui définit le CTR, recommande que le compteur occupe la moitié du bloc de comptage (voir [Annexe B.2 <sup>(angl.)</sup>](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A73%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D)), ce qui correspond à 64 pour l'AES.

## Exemples

Voir les exemples pour {{DOMxRef("SubtleCrypto.encrypt()")}} et {{DOMxRef("SubtleCrypto.decrypt()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

Les navigateurs qui prennent en charge l'algorithme «&nbsp;AES-CTR&nbsp;» pour les méthodes {{DOMxRef("SubtleCrypto.encrypt()")}}, {{DOMxRef("SubtleCrypto.decrypt()")}}, {{DOMxRef("SubtleCrypto.wrapKey()")}}, ou {{DOMxRef("SubtleCrypto.unwrapKey()")}} prennent en charge ce type.

## Voir aussi

- Le mode CBC est défini dans la section 6.2 du [standard NIST SP800-38A <sup>(angl.)</sup>](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D)
- La méthode {{DOMxRef("SubtleCrypto.encrypt()")}}
- La méthode {{DOMxRef("SubtleCrypto.decrypt()")}}
- La méthode {{DOMxRef("SubtleCrypto.wrapKey()")}}
- La méthode {{DOMxRef("SubtleCrypto.unwrapKey()")}}
