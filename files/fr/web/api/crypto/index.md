---
title: Crypto
slug: Web/API/Crypto
translation_of: Web/API/Crypto
---
{{APIRef("Web Crypto API")}}

L'interface **`Crypto`** représente les fonctions cryptographiques de base dans notre contexte actuel. Elle permet d'accéder à de solides générateur de nombres aléatoires dédiés à la cryptographie ainsi qu'aux principales primitives cryptographiques.

Un objet avec cette interface est disponible dans le contexte web de la page via la propriété {{domxref("Window.crypto")}}.

## Propriétés

_Cette interface implémente les propriétés définies dans {{domxref("RandomSource")}}._

- {{domxref("Crypto.subtle")}} {{experimental_inline}}{{readOnlyInline}}
  - : Retourne un objet {{domxref("SubtleCrypto")}} procurant un accès aux principales primitives cryptographiques, comme le hashage, les signatures, le chiffrement ou le déchiffrement.

## Methodes

_Cette interface implémente les méthodes définies dans {{domxref("RandomSource")}}._

- {{domxref("RandomSource.getRandomValues()") }}
  - : Rempli le {{ jsxref("TypedArray") }} passé avec des valeurs aléatoires utilisables pour la cryptographie.

## Spécifications

| Spécification                                                                    | Statut                               | Commentaire         |
| -------------------------------------------------------------------------------- | ------------------------------------ | ------------------- |
| {{SpecName("Web Crypto API", "#crypto-interface", "Crypto")}} | {{Spec2("Web Crypto API")}} | Definition initiale |

## Voir aussi

- [Components.utils.importGlobalProperties](/en-US/docs/Components.utils.importGlobalProperties)
