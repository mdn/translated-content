---
title: AuthenticatorAttestationResponse
slug: Web/API/AuthenticatorAttestationResponse
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

L'interface **`AuthenticatorAttestationResponse`**, rattachée à l'[API Web Authentication](/fr/docs/Web/API/Web_Authentication_API), est renvoyée par un appel à {{domxref('CredentialsContainer.create()')}} lorsqu'un objet {{domxref('PublicKeyCredential')}} est passé à la méthode. Elle fournit une racine cryptographique de confiance pour la nouvelle paire de clés qui a été générée.

## Propriétés

- `AuthenticatorAttestationResponse.clientDataJSON`
  - : Les données relatives aux client pour l'authentification telles que l'origine et le _challenge_. La propriété {{domxref("AuthenticatorAttestationResponse.clientDataJSON","clientDataJSON")}} est héritée de l'interface {{domxref("AuthenticatorResponse")}}.
- {{domxref("AuthenticatorAttestationResponse.attestationObject")}}
  - : Un objet {{domxref("ArrayBuffer")}} qui contient les données de l'authenticateur ainsi qu'une instruction d'attestation pour la nouvelle paire de clés.

## Méthodes

Aucune.

## Exemples

TBD

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
