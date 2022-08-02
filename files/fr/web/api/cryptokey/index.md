---
title: CryptoKey
slug: Web/API/CryptoKey
tags:
  - API
  - Interface
  - Reference
  - Web Crypto API
translation_of: Web/API/CryptoKey
---
{{APIRef("Web Crypto API")}}

L'interface **`CryptoKey`** représente une {{glossary("clef")}} cryptographique dérivé d'un algorithme de clef spécifique.

Un objet `CryptoKey` peut être obtenu en utilisant : {{domxref("SubtleCrypto.generateKey()")}}, {{domxref("SubtleCrypto.deriveKey()")}} ou {{domxref("SubtleCrypto.importKey()")}}

## Propriétés

_Cette interface n'hérite d'aucune propriété._

- {{domxref("CryptoKey.type")}}
  - : Retourne une énumération de valeurs représentant un type de clef, une clef secrète (pour un algorithme symétriques), une clef publique ou privée (pour un algorithme asymétrique)
- {{domxref("CryptoKey.extractable")}}
  - : Retourne un {{jsxref("booléen")}} indiquant si l'information peut être extraite de l'application ou non.
- {{domxref("CryptoKey.algorithm")}}
  - : Retourne un objet opaque représentant un chiffre particulier avec lequel la clé doit être utilisée avec.
- {{domxref("CryptoKey.usages")}}
  - : Retourne un tableau contenant une énumération de valeurs indiquant quel est la clé qui peut être utilisée.

## Méthodes

_Cette interface n'hérite et n'implémente aucune méthode._

## Spécifications

| Spécification                                                                        | Statut                                   | Commentaire          |
| ------------------------------------------------------------------------------------ | ---------------------------------------- | -------------------- |
| {{ SpecName('Web Crypto API', '#dfn-CryptoKey', 'CryptoKey') }} | {{ Spec2('Web Crypto API') }} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.CryptoKey")}}

## Voir aussi

- [Web Crypto API](/fr/docs/Web/API/Web_Crypto_API)
- [Sécurité du Web](/fr/docs/Web/Security)
- [Vie privée, autorisations et sécurité de l'information](/fr/docs/Web/Privacy)
- {{domxref("Crypto")}} et {{domxref("Crypto.subtle")}}.
