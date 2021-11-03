---
title: AuthenticatorAssertionResponse
slug: Web/API/AuthenticatorAssertionResponse
tags:
  - API
  - AuthenticatorAssertionResponse
  - Interface
  - Reference
  - Web Authentification API
  - WebAuthn
translation_of: Web/API/AuthenticatorAssertionResponse
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

L'interface **`AuthenticatorAssertionResponse`**, rattachée à l'[API Web Authentication](/fr/docs/Web/API/Web_Authentication_API), est renvoyée par un appel à {{domxref('CredentialsContainer.get()')}} lorsqu'on a passé un objet {{domxref('PublicKeyCredential')}} en argument. Cette interface fournit une preuve à un service que l'objet possède une paire de clé et que la requête d'authentification est valide et approvée.

## Propriétés

- `AuthenticatorAssertionResponse.clientDataJSON`
  - : Les données du client pour l'authentification telles que l'origine et le _challenge_. La propriété {{domxref("AuthenticatorAttestationResponse.clientDataJSON","clientDataJSON")}} est héritée de {{domxref("AuthenticatorResponse")}}.
- {{domxref("AuthenticatorAssertionResponse.authenticatorData")}}

  - : Un objet {{jsxref("ArrayBuffer")}} contenant les informations sur l'authenticateur telles que :

    - l'empreinte d'identifiant (_Relying Party ID Hash_) `rpidHash`
    - un compteur de signature
    - un test de présence d'utilisateur
    - des marqueurs de vérification de l'utilisateur
    - les éventuelles extensions traitées par l'authentificateur

    Ce champ est l'un des deux champs qui est signé par l'authentificateur.

- {{domxref("AuthenticatorAssertionResponse.signature")}}
  - : Une signature d'assertion par rapport à {{domxref("AuthenticatorAssertionResponse.authenticatorData")}} et {{domxref("AuthenticatorResponse.clientDataJSON")}}. La signature d'assertion est créée avec la clé privée de la paire de clés (générée avec l'appel à `create()`) et est vérifiée avec la clé publique la même paire de clé.
- {{domxref("AuthenticatorAssertionResponse.userHandle")}}
  - : Un objet {{jsxref("ArrayBuffer")}} contenant un identifiant opaque pour l'utilisateur.

## Méthodes

Aucune.

## Exemples

TBD

## Spécifications

| Spécification                    | État                         | Commentaires         |
| -------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('WebAuthn')}} | {{Spec2('WebAuthn')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.AuthenticatorAssertionResponse")}}
