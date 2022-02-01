---
title: AuthenticatorAssertionResponse.authenticatorData
slug: Web/API/AuthenticatorAssertionResponse/authenticatorData
tags:
  - API
  - Propriété
  - Reference
  - Web Authentication API
  - WebAuthn
translation_of: Web/API/AuthenticatorAssertionResponse/authenticatorData
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("Web Authentication API")}}

La propriété **`authenticatorData`** (rattachée à  l'interface {{domxref("AuthenticatorAssertionResponse")}}) fournit un {{jsxref("ArrayBuffer")}} qui contient les informations relatives à l'authenticateur tels que :

- l'empreinte d'identifiant (rpIdHash pour _Relying Party ID Hash_)
- un compteur de signature
- un test quant à la présence de l'utilisateur
- des marqueurs (_flags_) de vérification de l'utilisateur
- les éventuelles extensions traitées par l'authenticateur

Cette propriété est signée par l'authenticateur (c'est l'un des deux champs qui est signé).

## Syntaxe

```js
var authnrData = assertion.response.authnrData;
```

### Valeur

Un objet {{jsxref("ArrayBuffer")}} dont la propriété {{jsxref("ArrayBuffer.byteLength")}} indique qu'il mesure au moins 37 octets et qui contient les champs suivants :

- **`rpIdHash`** (32 octets) - Une empreinte SHA256 de l'identifiant de la partie fiable (i.e. - le domaine) tel que vu par le navigateur. Le serveur s'assurera ensuite que cette empreinte correspond à sa propre origine afin d'empêcher les tentatives de hameçonnage (_phishing_) ou d'autres attaques de l'homme du milieu (_man-in-the-middle_).
- **`flags`** (1 octet) - Une série de bits qui indique les différents attributs validés par l'authenticateur. Les bits sont décrits comme suit (où le bit 0 correspond au bit de poids faible) (tous les bits ne sont pas mentionnés car certains sont réservés pour une utilisation future) :

  - Bit 0 : Présence de l'utilisateur (_User Presence_ - UP) : si ce bit est actif, cela signifie que l'authenticateur a validé la présence de l'utilisateur par un test de présence (_Test of User Presence_ - TUP). Cela peut notamment correspondre à l'appui sur un bouton de l'authenticateur.
  - Bit 2 : Vérification de l'utilisateur (_User Verification_ - UV) : si ce bit est actif, cela signifie que l'authenticateur a vérifié l'utilisateur en question via une méthode d'authentification (biométrique, code PIN, autre).
  - Bit 6 : Présence des données d'authentification vérifiées (_Attested Credential Data_ - AT) : si ce bit est actif, le champ `attestedCredentialData` suivra immédiatement après les 37 premiers octets de cet objet.
  - Bit 7 : Présence des données d'extension (_Extension data_ - ED) : si ce bit est actif, les données d'extensions suivront le champ `attestedCredentialData` s'il est présent ou seront situées après les 37 premiers octets de cet objet sinon.

- **`signCount`** (4 octets) : un compteur de signature provenant de l'authenticateur. Cela permet au serveur de détecter un éventuel clonage de l'authenticateur.
- **`attestedCredentialData`** (longueur variable) : les informations d'authentification qui ont été créées. Ce champ est uniquement présent lors d'un appel à `navigator.credentials.create()`. Ces informations sont représentées par une séquence d'octets au format suivant :

  - **`AAGUID`** (16 octets) - _Authenticator Attestation Globally Unique Identifier_, un identifiant universel unique pour l'attestation de l'authenticateur qui identifie le modèle de l'authenticateur (pas cet exemplaire en particulier) afin qu'une autre partie puisse comprendre les caractéristiques de l'authenticateur en consultant ses méta-données.
  - **`credentialIdLength`** (2 octets) - la longueur, en octets, de l'identifiant d'authentification qui suit ces octets.
  - **`credentialId`** (longueur variable) - un identifiant unique pour ces informations d'authentification et qui pourra être demandé pour de futures authentifications. Cette information mesure `credentialIdLength` octets.
  - **`credentialPublicKey`** (longueur variable) - une clé publique encodée au format [COSE](https://tools.ietf.org/html/rfc8152). Cette clé publique sera stockée sur le serveur et associée au compte de l'utilisateur afin d'être utilisée pour de futures authentifications.

- **`extensions`** (longueur variable) - Une carte optionnelle, encodée au format [CBOR](https://tools.ietf.org/html/rfc7049), et qui contient les extensions de l'authenticateur.

## Exemples

TBD

## Specifications

| Spécification                    | État                         | Commentaires         |
| -------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('WebAuthn')}} | {{Spec2('WebAuthn')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.AuthenticatorAssertionResponse")}}
