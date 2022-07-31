---
title: PublicKeyCredential
slug: Web/API/PublicKeyCredential
tags:
  - API
  - Interface
  - PublicKeyCredential
  - Reference
  - Web Authentication API
  - WebAuthn
translation_of: Web/API/PublicKeyCredential
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

L'interface **`PublicKeyCredential`** fournit des informations relative à la paire constituée par une clé publique et une clé privée. Cette paire constitue une information d'authentification qui permet de se connecter à un service en utilisant un paire de clé asymétrique (permettant de prévenir les attaques par _phishing_ ou liées à des fuites de données).

Cette interface hérite de {{domxref("Credential")}} et a été créée pour l'[API Web Authentication](/fr/docs/Web/API/Web_Authentication_API) qui étend [l'API Credential Management](/fr/docs/Web/API/Credential_Management_API).

Les autres interfaces qui héritent de {{domxref("Credential")}} sont :

- {{domxref("PasswordCredential")}}
- {{domxref("FederatedCredential")}}.

## Propriétés

- {{domxref("PublicKeyCredential.type")}} {{ReadOnlyInline()}}
  - : Propriété héritée depuis {{domxref("Credential")}}. Dans le cas de `PublicKeyCredentials`, cette propriété vaut toujours `"public-key"`.
- {{domxref("PublicKeyCredential.id")}} {{ReadOnlyInline()}}
  - : Propriété héritée depuis {{domxref("Credential")}} et surchargée afin de correspondre à l'[encodage en base64url](/fr/docs/Web/API/WindowBase64/Décoder_encoder_en_base64) de `PublicKeyCredential.rawId`.
- {{domxref("PublicKeyCredential.rawId")}} {{ReadOnlyInline()}}
  - : Un objet {{domxref("ArrayBuffer")}} qui contient l'identifiant unique global/universel pour cette instance `PublicKeyCredential`. Cet identifiant peut être utilisé afin de rechercher les informations d'authentification avec les futurs appels à {{domxref("CredentialsContainer.get")}}.
- {{domxref("PublicKeyCredential.response")}} {{ReadOnlyInline()}}

  - : Une instance {{domxref("AuthenticatorResponse")}}. Cette instance est de type :

    - {{domxref("AuthenticatorAttestationResponse")}} si l'objet `PublicKeyCredential` a été créé grâce à un appel à [`create()`](/fr/docs/Web/API/CredentialsContainer/create)
    - {{domxref("AuthenticatorAssertionResponse")}} si l'objet `PublicKeyCredential` a été créé grâce à un appel à [`get()`](/fr/docs/Web/API/CredentialsContainer/get).

## Méthodes

- {{domxref("PublicKeyCredential.getClientExtensionResults()")}}
  - : Si au moins une extension est demandée, cette méthode renverra le résultat du traitement de ces extensions.

## Spécifications

| Spécification                    | État                         | Commentaires         |
| -------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('WebAuthn')}} | {{Spec2('WebAuthn')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PublicKeyCredential")}}
