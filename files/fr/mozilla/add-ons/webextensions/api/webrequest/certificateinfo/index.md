---
title: webRequest.CertificateInfo
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/CertificateInfo
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Un objet décrivant un seul [certificat X.509 <sup>(angl.)</sup>](https://tools.ietf.org/html/rfc5280).

L'objet {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}} retourné par l'objet {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API inclut une propriété de `certificats` qui est un tableau de ces objets.

## Type

Les valeurs de ce type sont des objets. Ils contiennent les propriétés suivantes&nbsp;:

- `fingerprint`
  - : `Object`. Un objet avec les propriétés suivantes&nbsp;:
    - `sha1`
      - : `String`. SHA-1 hash de l'encodage DER du certificat.
    - `sha256`
      - : `String`. SHA-256 hash de l'encodage DER du certificat.

- `isBuiltInRoot`
  - : `Boolean`. `true` si le certificat est l'une des racines de confiance installées dans le navigateur, sinon `false`.
- `issuer`
  - : `String`. Le nom distinctif de l'organisation qui a délivré ce certificat, formaté sous la forme d'une liste de noms distinctifs relatifs séparés par des virgules, chacun de la forme `"type=value"`.

    Par exemple&nbsp;: `"CN=DigiCert SHA2 Secure Server CA,O=DigiCert Inc,C=US"`.

- `rawDER`
  - : `Array` de `Number`. Si [`webRequest.getSecurityInfo()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/getSecurityInfo) a été appelé avec l'option `rawDER` présent et mis à `true`, ceci contient l'encodage DER du certificat.
- `serialNumber`
  - : `String`. Le [numéro de série <sup>(angl.)</sup>](https://tools.ietf.org/html/rfc5280#section-4.1.2.2) du certificat.
- `subject`
  - : `String`. Le nom distinctif de l'entité à laquelle le certificat a été délivré, formaté sous la forme d'une liste de noms distinctifs relatifs séparés par des virgules, chacun de la forme `"type=value"`.

    Par exemple&nbsp;: `"CN=\*.cdn.mozilla.net,O=Mozilla Corporation,L=Mountain View,ST=California,C=US"`.

- `subjectPublicKeyInfoDigest`
  - : `Object`. Un objet contenant les propriétés suivantes&nbsp;:
    - `sha256`
      - : `String`. Base64 encodé SHA-256 hash de [l'information de clé publique <sup>(angl.)</sup>](https://tools.ietf.org/html/rfc5280#section-4.1.2.7) codée DER.

- `validity`
  - : `Object`. Période de validité du certificat. Un objet contenant les propriétés suivantes&nbsp;:
    - `start`
      - : `Number`. Le début de la période de validité du certificat, en [millisecondes depuis l'époque <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Unix_time).
    - `end`
      - : `Number`. La fin de la période de validité du certificat, en [millisecondes depuis l'époque <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Unix_time).

{{WebExtExamples}}

## Compatibilité des navigateurs

{{Compat}}
