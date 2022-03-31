---
title: AuthenticatorAttestationResponse
slug: Web/API/AuthenticatorAttestationResponse
tags:
  - API
  - AuthenticatorAttestationResponse
  - Interface
  - Reference
  - Web Authentication API
  - WebAuthn
translation_of: Web/API/AuthenticatorAttestationResponse
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

L'interface **`AuthenticatorAttestationResponse`**, rattachée à l'[API Web Authentication](/en-US/docs/Web/API/Web_Authentication_API), est renvoyée par un appel à {{domxref('CredentialsContainer.create()')}} lorsqu'un objet {{domxref('PublicKeyCredential')}} est passé à la méthode. Elle fournit une racine cryptographique de confiance pour la nouvelle paire de clés qui a été générée.

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

| Spécification                    | État                         | Commentaires         |
| -------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('WebAuthn')}} | {{Spec2('WebAuthn')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.AuthenticatorAttestationResponse")}}
