---
title: webRequest.SecurityInfo
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/SecurityInfo
tags:
  - API
  - Add-ons
  - Reference
  - SecurityInfo
  - Type
  - WebExtensions
  - webRequest
translation_of: Mozilla/Add-ons/WebExtensions/API/webRequest/SecurityInfo
---
{{AddonSidebar()}}

Objet décrivant les propriétés de sécurité d'une requête Web particulière. Un objet de ce type est retourné depuis l'API {{WebExtAPIRef("webRequest.getSecurityInfo()")}}.

Si la requête n'est pas sécurisée par [TLS](/fr/docs/Glossaire/TLS), alors cet objet ne contiendra que l'état de la propriété `state`, dont la valeur sera `"insecure"`.

## Type

Les valeurs de ce type sont des objets. Ils contiennent les propriétés suivantes :

- `certificates`

  - : `Array` de {{WebExtAPIRef("webRequest.CertificateInfo", "CertificateInfo")}}. Si {{WebExtAPIRef("webRequest.getSecurityInfo()")}} a été appelé avec l'option `certificateChain` présente et définie sur `true`, cela contiendra un objet `CertificateInfo` pour chaque certificat de la chaîne, depuis le certificat du serveur jusqu'à et y compris la racine de confiance.

    Sinon, il contiendra un seul objet `CertificateInfo`, pour le certificat du serveur.

- `certificateTransparencyStatus` {{optional_inline}}

  - : `String`. Indique l'état de la [transparence des certificats](https://www.certificate-transparency.org/) pour la connexion. Ceci peut prendre l'une des valeurs suivantes :

    - "not_applicable"
    - "policy_compliant"
    - "policy_not_enough_scts"
    - "policy_not_diverse_scts"

- `cipherSuite` {{optional_inline}}
  - : `String`. Suite de chiffrement utilisée pour la connexion, formatée selon la [specification TLS ](https://tools.ietf.org/html/rfc5246#appendix-A.5): par exemple, "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256".
- `errorMessage` {{optional_inline}}

  - : `String`. S'il y a eu un problème avec le protocole TLS  (for example, the certificate had expired, or a trusted root could not be found, or a certificate was revoked) then `status` will be "broken" and the `errorMessage` property will contain a string describing the error, taken from Firefox's internal list of error codes.

    Note though that at present you can only call `getSecurityInfo()` in the `onHeaderReceived` listener, and the `onHeaderReceived` event is not fired when the handshake fails. So in practice this will never be set.

- `hpkp` {{optional_inline}}
  - : `Boolean`. `true` si l'hôte utilise [Public Key Pinning](/fr/docs/Web/Security/Public_Key_Pinning), sinon `false`.
- `hsts` {{optional_inline}}
  - : `Boolean`. `true` si l'hôte utilise [Strict Transport Security](/fr/docs/Sécurité/HTTP_Strict_Transport_Security), sinon `false`.
- `isDomainMismatch` {{optional_inline}}
  - : `Boolean`. `true` si le nom de domaine du serveur ne correspond pas au nom de domaine dans son certificat, sinon `false`.
- `isExtendedValidation` {{optional_inline}}
  - : `Boolean`. `true` si le serveur possède un [Extended Validation Certificate](https://en.wikipedia.org/wiki/Extended_Validation_Certificate), sinon `false`.
- `isNotValidAtThisTime` {{optional_inline}}
  - : `Boolean`. `true` si l'heure actuelle tombe en dehors de la période de validité du certificat de serveur (c'est-à-dire que le certificat a expiré ou n'est pas encore valide), sinon `false`.
- `isUntrusted` {{optional_inline}}
  - : `Boolean`. `true` si une chaîne de retour à un certificat racine de confiance n'a pas pu être construite, sinon `false`.
- `keaGroupName` {{optional_inline}}
  - : `String`. Si `state` est "sécurisé" cela décrit l'algorithme d'échange de clé utilisé dans cette requête.
- `protocolVersion` {{optional_inline}}

  - : `String`. Version du protocole TLS utilisé. L'un des :

    - "TLSv1"
    - "TLSv1.1"
    - "TLSv1.2"
    - "TLSv1.3"
    - "inconnu" (si la version n'est pas valide)

- `signatureSchemeName` {{optional_inline}}
  - : `String`. Si `state` est "sécurisé", cela décrit le schéma de signature utilisé dans cette requête.t.
- `state`

  - : `String`. État de la connexion. L'un des :

    - "broken": la poignée de main TLS a échoué (par exemple, le certificat a expiré)
    - "insecure": la connexion n'est pas une connexion TLS
    - "secure": la connexion est une connexion TLS sécurisée
    - "weak": la connexion est une connexion TLS mais est considérée comme faible. Vous pouvez examiner les `weaknessReasons` pour découvrir le problème.

    Notez cependant qu'actuellement, vous ne pouvez appele `getSecurityInfo()` que dans l'écouteur `onHeaderReceived`, et l'événement `onHeaderReceived` n'est pas déclenché lorsque la poignée de main échoue. Ainsi, dans la pratique, il ne sera jamais réglé sur "cassé".

- `weaknessReasons` {{optional_inline}}
  - : `String`. Si l'`état` est "faible", cela indique la raison. Actuellement, il ne peut contenir qu'une seule valeur "chiffre", ce qui indique que la suite de chiffres négociée est considérée comme faible.

## Compatibilité du navigateur

{{Compat("webextensions.api.webRequest.SecurityInfo", 10)}}

{{WebExtExamples}}
