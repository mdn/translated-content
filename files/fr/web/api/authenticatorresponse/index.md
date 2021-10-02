---
title: AuthenticatorResponse
slug: Web/API/AuthenticatorResponse
tags:
  - API
  - Interface
  - Reference
  - Web Authentication API
  - Web Authn
translation_of: Web/API/AuthenticatorResponse
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

L'interface **`AuthenticatorResponse`**, rattachée à l'[API Web Authentication](/en-US/docs/Web/API/Web_Authentication_API), constitue l'interface de base pour les interfaces qui fournissent une racine cryptographique de confiance pour une paire de clés. Les interfaces filles contiennent des informations relatives au navigateur telles que l'origine du _challenge_ et qui peuvent être renvoyée par {{domxref("PublicKeyCredential.response")}}.

## Interfaces basées sur `AuthenticatorResponse`

Voici la liste des interfaces basées sur `AuthenticatorResponse`.

- {{domxref("AuthenticatorAssertionResponse")}}
- {{domxref("AuthenticatorAttestationResponse")}}

## Propriétés

- {{domxref("AuthenticatorResponse.clientDataJSON")}}
  - : Une chaîne de caractères [JSON](/fr/docs/Learn/JavaScript/Objects/JSON) stockée dans un {{domxref("ArrayBuffer")}} et qui représente les données du client passées à {{domxref("CredentialsContainer.create()")}} ou {{domxref("CredentialsContainer.get()")}}.

## Méthodes

Aucune.

## Spécifications

| Spécification                    | État                         | Commentaires         |
| -------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('WebAuthn')}} | {{Spec2('WebAuthn')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.AuthenticatorResponse")}}
