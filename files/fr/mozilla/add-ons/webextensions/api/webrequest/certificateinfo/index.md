---
title: webRequest.CertificateInfo
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/CertificateInfo
tags:
  - API
  - Add-ons
  - CertificateInfo
  - Extensions
  - Reference
  - Type
  - WebExtensions
  - webRequest
translation_of: Mozilla/Add-ons/WebExtensions/API/webRequest/CertificateInfo
---
{{AddonSidebar()}}

Un objet décrivant un seul [certificat X.509](https://tools.ietf.org/html/rfc5280).

L'objet {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}} retourné par l'objet {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API inclut une propriété de  `certificats` qui est un tableau de ces objets.

## Type

Les valeurs de ce type sont des objets. Ils contiennent les propriétés suivantes :

- `fingerprint`

  - : `Object`. Un objet avec les propriétés suivantes :

    - `sha1`
      - : `String`. SHA-1 hash de l'encodage DER du certificat.
    - `sha256`
      - : `String`. SHA-256 hash de l'encodage DER du certificat.

- `isBuiltInRoot`
  - : `Boolean`. `true` si le certificat est l'une des racines de confiance installées dans le navigateur, sinon `false`.
- `issuer`

  - : `String`. Nom de l'organisation qui a délivré ce certificat, représenté par un nom distinctif et formaté sous la forme d'une liste de noms distinctifs relatifs séparés par des virgules, chacun de la forme "type=value".

    Par exemple: "CN=DigiCert SHA2 Secure Server CA,O=DigiCert Inc,C=US".

- `rawDER`
  - : `Array` de `Number`. Si [`webRequest.getSecurityInfo()`](/fr/Add-ons/WebExtensions/API/webRequest/getSecurityInfo) a été appelé avec l'option `rawDER` présent et mis à `true`, ceci contiendra l'encodage DER du certificat.
- `serialNumber`
  - : `String`. Le [numéro de série](https://tools.ietf.org/html/rfc5280#section-4.1.2.2) du certificat.
- `subject`

  - : `String`. Nom de l'organisation qui a délivré ce certificat, représenté par un nom distinctif et formaté sous la forme d'une liste de noms distinctifs relatifs séparés par des virgules, chacun de la forme "type=value".

    Par exemple: "CN=\*.cdn.mozilla.net,O=Mozilla Corporation,L=Mountain View,ST=California,C=US".

- `subjectPublicKeyInfoDigest`

  - : `Object`. Un objet contenant les propriétés suivantes :

    - `sha256`
      - : `String`. Base64 encodé SHA-256 hash de l'[information de clé publique](https://tools.ietf.org/html/rfc5280#section-4.1.2.7) codée DER.

- `validity`

  - : `Object`. Période de validité du certificat. Un objet contenant les propriétés suivantes :

    - `start`
      - : `Number`. Le début de la période de validité du certificat, en [millisecondes depuis l'époque](https://en.wikipedia.org/wiki/Unix_time).
    - `end`
      - : `Number`. La fin de la période de validité du certificat, en [millisecondes depuis l'époque](https://en.wikipedia.org/wiki/Unix_time).

## Compatibilité du navigateur

{{Compat("webextensions.api.webRequest.CertificateInfo", 10)}}

{{WebExtExamples}}
