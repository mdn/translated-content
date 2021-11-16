---
title: webRequest.getSecurityInfo()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/getSecurityInfo
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - getSecurityInfo
  - webRequest
translation_of: Mozilla/Add-ons/WebExtensions/API/webRequest/getSecurityInfo
---
{{AddonSidebar()}}

Utilisez cette fonction pour obtenir des informations détaillées sur la connexion [TLS](/fr/docs/Glossaire/TLS) associée à une demande particulière..

Vous passez à cette fonction la `requestId` pour la requête en question, et quelques paramètres supplémentaires optionnels. Il retourne une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera résolue à un objet {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}}.

Vous ne pouvez appeler cette fonction qu'à partir de l'écouteur  {{WebExtAPIRef("webRequest.onHeadersReceived")}}. La `requestId` peut être trouvée dans l'objet `details` object qui est passé dans l'écouteur.

Vous devez également passer l'option "blocking" à  `webRequest.onHeadersReceived.addListener()`. Ainsi, pour utiliser cette API, vous devez avoir la [permission de l'API](/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions) "webRequestBlocking", ainsi que les permissions normales nécessaires pour utiliser les écouteurs `webRequest`  (la permission "webRequest" et la [permission hôte](/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions) pour le hôte).

## Syntaxe

```js
var gettingInfo = browser.webRequest.getSecurityInfo(
  requestId,       // string
  options          // object
)
```

### Paramètres

- `requestId`
  - : `string`. ID de la requête pour laquelle vous souhaitez obtenir des informations de sécurité. Vous pouvez l'obtenir à partir de l'objet de `details` qui est passé dans n'importe quel écouteur d'événement `webRequest`.
- `options`

  - : `object`. Un objet qui peut contenir l'une des propriétés suivantes, toutes facultatives :

    - `certificateChain` {{optional_inline}}
      - : `boolean`. Si `true`, l'objet {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}} retourné inclura toute la chaîne de certificats jusqu'à et y compris la racine de confiance. Si `false`, 
        il n'inclura que le certificat du serveur. La valeur par défaut est `false`.
    - `rawDER` {{optional_inline}}
      - : `boolean`. Si true, chaque propriété {{WebExtAPIRef("webRequest.CertificateInfo", "CertificateInfo")}} dans le {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo.certificates")}} contiendra une propriété `rawDER`. Il contient le DER-encoded ASN.1 qui comprend les données du certificat.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui se résout en un objet {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}}.

## Compatibilité du navigateur

{{Compat("webextensions.api.webRequest.getSecurityInfo", 10)}}

## Exemples

Cet exemple écoute toutes les requêtes HTTPS à "mozilla.org" ou ses sous-domaines, et enregistre le nom de l'objet dans le certificat du serveur :

```js
async function logSubject(details) {
  try {
    let securityInfo = await browser.webRequest.getSecurityInfo(details.requestId, {});
    console.log(details.url);
    if (securityInfo.state === "secure" || securityInfo.state === "weak") {
      console.log(securityInfo.certificates[0].subject);
    }
  }
  catch(error) {
    console.error(error);
  }
}

browser.webRequest.onHeadersReceived.addListener(logSubject,
  {urls: ["https://*.mozilla.org/*"]},
  ["blocking"]
);
```

Cet exemple écoute toutes les requêtes HTTPS à "mozilla.org" ou ses sous-domaines, et enregistre le nom dans le certificat racine de confiance :

```js
async function logRoot(details) {
  try {
    let securityInfo = await browser.webRequest.getSecurityInfo(
      details.requestId,
      {"certificateChain": true}
    );
    console.log(details.url);
    if (securityInfo.state === "secure" || securityInfo.state === "weak") {
      console.log(securityInfo.certificates[securityInfo.certificates.length - 1].issuer);
    }
  }
  catch(error) {
    console.error(error);
  }
}

browser.webRequest.onHeadersReceived.addListener(logRoot,
  {urls: ["https://*.mozilla.org/*"]},
  ["blocking"]
);
```

{{WebExtExamples}}
