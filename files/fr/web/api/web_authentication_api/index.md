---
title: API Web Authentication
slug: Web/API/Web_Authentication_API
l10n:
  sourceCommit: e36933af935b26e901fee047cc2b381d73473fe5
---

{{securecontext_header}}{{DefaultAPISidebar("Web Authentication API")}}

L'API <i lang="en">Web Authentication</i> est une extension de l'API [<i lang="en">Credential Management</i>](/fr/docs/Web/API/Credential_Management_API) qui permet une authentification forte, basée sur la cryptographie à clé publique, rendant possible une authentification sans mot de passe ou l'implémentation d'une authentification avec un deuxième facteur, sans passer par des SMS.

## Concepts et utilisation de l'API <i lang="en">Web Authentication</i>

L'API <i lang="en">Web Authentication</i> (qu'on pourrait traduire en «&nbsp;authentification web&nbsp;»), généralement désignée par le terme WebAuthn, utilise [la cryptographie asymétrique (à clé publique)](https://fr.wikipedia.org/wiki/Cryptographie_asymétrique) plutôt que des mots de passe ou des SMS pour l'enregistrement, l'authentification et [l'authentification forte](https://fr.wikipedia.org/wiki/Authentification_forte) sur les sites web. Cela présente différents avantages&nbsp;:

- Protection contre l'hameçonnage (<i lang="en">phishing</i>)
  - : Une personne malveillante qui crée un faux site de connexion ne peut pas récupérer les informations de l'utilisatrice ou de l'utilisateur, car la signature change avec [l'origine](/fr/docs/Glossary/Origin) du site.
- Réduction de l'impact pour les fuites de données
  - : Les équipes de développement n'ont pas besoin de calculer l'empreinte d'une clé publique. Si un acteur malveillant obtient la clé publique utilisée pour vérifier l'authentification, il ne peut pas s'authentifier sans la clé privée.
- Invulnérabilité aux attaques basées sur les mots de passe
  - : Certaines personnes réutilisent des mots de passe entre plusieurs sites. Si le mot de passe est connu de quelqu'un d'autre, ce dernier peut s'authentifier à la place. Par ailleurs, certains services peuvent être ciblés par des attaques par force brute. En utilisant une signature numérique, on n'utilise pas de mot de passe et ces attaques ne s'appliquent plus.

De nombreux sites web ont des pages qui permettent de créer un compte ou de s'authentifier avec un compte existant. L'API <i lang="en">Web Authentication</i> peut remplacer ou compléter les fonctionnalités de ces pages. À l'instar des autres formes fournies par [l'API <i lang="en">Credential Management</i>](/fr/docs/Web/API/Credential_Management_API), l'API <i lang="en">Web Authentication</i> possède deux méthodes qui correspondent respectivement à l'enregistrement et à la connexion&nbsp;:

- [`navigator.credentials.create()`](/fr/docs/Web/API/CredentialsContainer/create)
  - : Lorsqu'elle est utilisée avec l'option `publicKey`, elle crée de nouvelles informations d'authentification pour enregistrer un nouveau compte ou pour associer une nouvelle paire de clés asymétrique avec un compte existant.
- [`navigator.credentials.get()`](/fr/docs/Web/API/CredentialsContainer/get)
  - : Lorsqu'elle est utilisée avec l'option `publicKey`, elle utilise des informations d'authentification existantes afin de s'authentifier sur un service, pour connecter la personne ou comme deuxième facteur d'authentification.

> **Note :** Ces deux méthodes, `create()` et `get()`, doivent être utilisées depuis [un contexte securisé](/fr/docs/Web/Security/Secure_Contexts) (c'est-à-dire que la connexion au serveur soit en HTTPS ou que le site soit servi depuis localhost). Elles ne seront pas disponibles si le navigateur n'est pas dans un tel contexte.

Dans leurs formes les plus simples, `create()` et `get()` reçoivent un grand nombre aléatoire appelé «&nbsp;challenge&nbsp;» de la part du serveur et renvoient au serveur le challenge signé avec la clé privée. Cela prouve au serveur que la personne est en possession de la clé privée requise pour l'authentification, sans révéler de secrets sur le réseau.

Afin de comprendre le rôle général des méthodes `create()` et `get()`, il faut les resituer entre les deux composants qui existent en dehors du navigateur&nbsp;:

- Le serveur
  - : L'API <i lang="en">Web Authentication</i> a pour but d'enregistrer des informations d'authentification sur un serveur (parfois aussi mentionné sous l'appellation service ou [<i lang="en">relying party</i> (RP) en anglais (qu'on peut traduire en tiers de confiance)](https://en.wikipedia.org/wiki/Relying_party)) pour que ces informations puissent être utilisées ultérieurement pour authentifier la personne sur ce même serveur.
- L'authentificateur
  - : Les informations d'authentification sont créées et stockées sur un appareil appelé authentificateur. Il s'agit d'un concept récent pour l'authentification. Lors d'une authentification avec un mot de passe, le mot de passe est mémorisé par la personne et aucun autre appareil n'est nécessaire. En utilisant WebAuthn, le mot de passe se voit replacé par une paire de clés stockées dans l'authentificateur. Cet authentificateur peut être embarqué dans l'agent utilisateur, dans le système d'exploitation (par exemple Windows Hello) ou être un jeton physique comme une clé de sécurité USB ou Bluetooth.

### Enregistrement

Un enregistrement classique s'effectue en six étapes, comme illustré dans la figure qui suit et décrit ensuite. Les données nécessaires sont ici simplifiées, car il s'agit de fournir un aperçu. L'ensemble des champs nécessaires et optionnels ainsi que leur signification sont décrits dans le dictionnaire [`PublicKeyCredentialCreationOptions`](/fr/docs/Web/API/CredentialsContainer/create). De même, l'ensemble des champs associés à la réponse est décrit dans la page de l'interface [`PublicKeyCredential`](/fr/docs/Web/API/PublicKeyCredential) (où [`PublicKeyCredential.response`](/fr/docs/Web/API/PublicKeyCredential/response) correspond à l'interface [`AuthenticatorAttestationResponse`](/fr/docs/Web/API/AuthenticatorAttestationResponse)) On notera que pour le développement d'une application sur la partie JavaScript, seules les étapes 1 et 5 où on appelle/gère le retour de la fonction `create()` sont nécessaires. Toutefois, les étapes 2, 3, et 4 sont essentielles pour bien comprendre le traitement qui a lieu dans le navigateur et l'authentificateur et ce que les données renvoyées signifient.

![Diagramme représentant les composants en jeu et les flux de données pour un enregistrement à l'aide de l'API Web Authentication](webauthn_registration_r4.png)

_Figure 1 - Un diagramme illustrant la suite d'actions pour l'enregistrement d'un compte à l'aide de l'API Web Authentication et le flux des données importantes pour chaque action._

Pour commencer (l'étape 0 dans le diagramme), l'application effectue la requête d'enregistrement initiale. Le protocole et le format utilisés pour cette requête ne font pas partie de l'API Web Authentication.

Les étapes suivantes sont&nbsp;:

1. **Le serveur envoie le challenge, les informations liées à l'utilisatrice ou à l'utilisateur et les informations relatives au tiers de confiance.**

   - Ces informations sont envoyées au programme JavaScript. Le protocole de communication avec le serveur ne fait pas partie de la spécification de l'API Web Authentication. Il s'agit généralement d'une communication via HTTPS en [REST](/fr/docs/Glossary/REST) (et qui utilisera probablement [l'API Fetch](/fr/docs/Web/API/Fetch_API) ou encore [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest)) (en théorie, tout protocole sécurisé peut être utilisé). Les paramètres reçus du serveur seront passés lors de l'appel à [`create()`](/fr/docs/Web/API/CredentialsContainer/create) (généralement avec peu ou pas de modification) qui renverra [une promesse](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) dont la valeur de résolution sera un objet [`PublicKeyCredential`](/fr/docs/Web/API/PublicKeyCredential) contenant un objet [`AuthenticatorAttestationResponse`](/fr/docs/Web/API/AuthenticatorAttestationResponse).

   > **Attention :** Il est absolument nécessaire que le challenge soit un tampon mémoire d'informations aléatoires (d'au moins 16 octets) et qui soit généré sur le serveur afin de garantir la sécurité du processus d'enregistrement.

2. **Le navigateur appelle `authenticatorMakeCredential()` qui sollicite l'authentificateur.**

   - Dans ses rouages internes, le navigateur valide les paramètres et utilise des valeurs par défaut pour les paramètres non renseignés. Cela devient [`AuthenticatorResponse.clientDataJSON`](/fr/docs/Web/API/AuthenticatorResponse/clientDataJSON). Un paramètre majeur est l'origine. Celle-ci est enregistrée au sein de `clientData` afin que l'origine puisse être vérifiée par le serveur ultérieurement. Les paramètres de l'appel à `create()` sont transmis à l'authentificateur avec une empreinte SHA-256 de `clientDataJSON` (seule une empreinte est envoyée, car la communication avec l'authentificateur peut se faire via un canal de communication à faible bande passante comme le NFC ou le Bluetooth), l'authentificateur va signer l'empreinte pour s'assurer qu'elle n'a pas été corrompue.

3. **L'authentificateur crée une nouvelle paire de clés et une attestation.**

   - Avant de faire quoi que ce soit, l'authentificateur demandera généralement une vérification de la part de la personne. Cela peut être la saisie d'un code, l'utilisation d'une empreinte digitale ou rétinienne, etc. Il s'agit de prouver que la personne est présente et consent à l'enregistrement. Après cette vérification, l'authentificateur créera une nouvelle paire de clés asymétrique et stockera la clé privée de façon sécurisée afin qu'elle puisse être utilisée à l'avenir. La clé publique devient une composante de l'attestation qui est signée par l'authentificateur à l'aide d'une clé privée qui a été gravée dans l'authentificateur lors de sa fabrication et qui possède une chaîne de certificats qui permet de remonter jusqu'à une autorité de confiance.

4. **L'authentificateur renvoie les données au navigateur.**

   - La nouvelle clé publique, un identifiant d'authentification globalement unique ainsi que les autres données de l'attestation sont renvoyées au navigateur et deviennent `attestationObject`.

5. **Le navigateur crée les données finales et l'application envoie la réponse au serveur.**

   - La promesse fournie par `create()` est résolue en un objet [`PublicKeyCredential`](/fr/docs/Web/API/PublicKeyCredential), possédant une propriété [`PublicKeyCredential.rawId`](/fr/docs/Web/API/PublicKeyCredential/rawId) qui correspond à l'identifiant d'authentification globalement unique et une propriété [`PublicKeyCredential.response`](/fr/docs/Web/API/PublicKeyCredential/response) contenant le reste de la réponse sous la forme d'un objet [`AuthenticatorAttestationResponse`](/fr/docs/Web/API/AuthenticatorAttestationResponse) qui contient [`AuthenticatorResponse.clientDataJSON`](/fr/docs/Web/API/AuthenticatorResponse/clientDataJSON) et [`AuthenticatorAttestationResponse.attestationObject`](/fr/docs/Web/API/AuthenticatorAttestationResponse/attestationObject). Cet objet [`PublicKeyCredential`](/fr/docs/Web/API/PublicKeyCredential) est renvoyé au serveur en utilisant le format et le protocole voulu.

   > **Note :** Les propriétés qui sont des `ArrayBuffer` doivent être encodés en base64 ou d'une autre façon.

6. **Le serveur valide et finalise l'enregistrement.**

   1. Pour finir, le serveur réalise une suite de vérification pour s'assurer que l'enregistrement est terminé et qu'il n'y a pas eu de corruption. Parmi ces vérifications, on a&nbsp;:

      1. La vérification que le challenge reçu correspond bien au challenge envoyé&nbsp;;
      2. La vérification que l'origine correspond bien à l'origine attendu&nbsp;;
      3. La validation de la signature de l'empreinte des données du client et de l'attestation en utilisant la chaîne de certificats associée au modèle de l'authentificateur.

      > **Note :** La liste complète des étapes de validation [est détaillée dans la spécification de l'API](https://w3c.github.io/webauthn/#registering-a-new-credential).

   2. Si toutes les vérifications sont réussies, le serveur enregistre la nouvelle clé publique pour le compte de la personne afin qu'elle puisse être utilisée par la suite (quand la personne s'authentifiera).

### Authentification

Lorsqu'une personne s'est enregistrée avec cette API, elle peut s'authentifier par la suite (autrement dit se connecter au service). Le processus d'authentification est similaire à celui d'enregistrement. La figure qui suit ressemble donc à la première. Les différences fondamentales entre l'enregistrement et l'authentification sont&nbsp;:

- L'authentification ne nécessite pas d'informations de la personne ou du tiers de confiance
- L'authentification crée une assertion basée sur la paire de clés précédemment générée pour le service plutôt qu'une attestation utilisant la paire de clés gravée dans l'authentificateur à la fabrication.

Là encore, la description qui suit est un aperçu général qui n'explore pas tous les détails et fonctionnalités de l'API <i lang="en">Web Authentication</i>. Les options qui concernent l'authentification sont décrites dans le dictionnaire [`PublicKeyCredentialRequestOptions`](/fr/docs/Web/API/PublicKeyCredentialRequestOptions), et les données résultantes sont décrites via l'interface [`PublicKeyCredential`](/fr/docs/Web/API/PublicKeyCredential) (dont la propriété [`PublicKeyCredential.response`](/fr/docs/Web/API/PublicKeyCredential/response) implémente l'interface [`AuthenticatorAssertionResponse`](/fr/docs/Web/API/AuthenticatorAssertionResponse)).

![Diagramme représentant les composants en jeu et les flux de données pour une authentification à l'aide de l'API Web Authentication](<mdn_webauthn_authentication_(r1).png>)

_Figure 2 - Un diagramme semblable au premier qui illustre la suite d'actions pour l'authentification et les données associées à chaque action._

Pour commencer (il s'agit de l'étape 0 sur le diagramme), l'application effectue la requête d'authentification initiale. Le protocole et le format utilisés pour cette requête ne sont pas dans le périmètre de l'API <i lang="en">Web Authentication</i>.

On a ensuite ces étapes pour l'authentification&nbsp;:

1. **Le serveur envoie un challenge.**

   - Le serveur envoie un challenge au programme JavaScript. Le protocole de communication n'est pas détaillé par la spécification. Généralement, on a une requête HTTPS [REST](/fr/docs/Glossary/REST) (qui utilise [l'API Fetch](/fr/docs/Web/API/Fetch_API) ou encore [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest)), mais il peut s'agir, en théorie, de n'importe quel protocole sécurisé. Les paramètres reçus du serveur sont passés à l'appel de la méthode [`get()`](/fr/docs/Web/API/CredentialsContainer/get) avec peu ou pas de modification.

   > **Attention :** Il est crucial que le challenge soit un tampon d'informations aléatoires (au moins 16 octets) et que celui-ci ait été généré sur le serveur pour garantir la sécurité du processus d'authentification.

2. **Le navigateur appelle `authenticatorGetCredential()` qui sollicite l'authentificateur.**

   - Dans ses rouages internes, le navigateur valide les paramètres et utilise des valeurs par défaut pour les paramètres non renseignés. Cela devient [`AuthenticatorResponse.clientDataJSON`](/fr/docs/Web/API/AuthenticatorResponse/clientDataJSON). Un des paramètres les plus importants est l'origine, enregistrée dans `clientData` afin qu'elle puisse être vérifiée par le serveur par la suite. Les paramètres passés à `get()` sont transmis à l'authentificateur avec une empreinte SHA-256 de `clientDataJSON` (seule une empreinte est envoyée, car la communication avec l'authentificateur peut se faire via un canal de communication à faible bande passante comme le NFC ou le Bluetooth), l'authentificateur va signer l'empreinte pour s'assurer qu'elle n'a pas été corrompue.

3. **L'authentificateur crée une assertion.**

   - L'authentificateur trouve des informations d'authentification associées au service qui correspond à l'identifiant du tiers de confiance et demande à la personne son consentement pour l'authentification. Si ces deux étapes sont réussies, l'authentificateur crée une nouvelle assertion en signant `clientDataHash` et `authenticatorData` avec la clé privée générée pour ce compte pendant l'enregistrement.

4. **L'authentificateur renvoie les données au navigateur.**

   - L'authentificateur renvoie `authenticatorData` et la signature de l'assertion au navigateur.

5. **Le navigateur crée les données finales et l'application envoie sa réponse au serveur.**

   - Le navigateur résout [la promesse](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) en un objet [`PublicKeyCredential`](/fr/docs/Web/API/PublicKeyCredential) ayant une propriété [`PublicKeyCredential.response`](/fr/docs/Web/API/PublicKeyCredential/response). L'application JavaScript transmet alors ces données au serveur en utilisant le format et le protocole de son choix.

6. **Le serveur valide les données reçues et finalise l'authentification.**

   1. À la réception de la réponse à la requête d'authentification, le serveur réalise une validation de la réponse avec différentes étapes comme&nbsp;:

      1. Utiliser la clé publique enregistrée lors de la requête d'enregistrement afin de valider la signature de l'authentificateur.
      2. Vérifier que le challenge signé par l'authenticateur correspond à celui généré par le serveur.
      3. Vérifier que l'identifiant du tiers de confiance est celui attendu pour ce service.

      > **Note :** La liste complète des étapes de validation d'une assertion [est détaillée dans la spécification de l'API](https://w3c.github.io/webauthn/#verifying-assertion).

   2. Si la validation est réussie, le serveur notera que la personne est authentifiée. Bien que cela ne soit pas dans le périmètre de la spécification de l'API, cela pourra par exemple se traduire par le dépôt d'un cookie pour la session de la personne.

## Interfaces

- [`Credential`](/fr/docs/Web/API/Credential) {{experimental_inline}}
  - : Fournit des informations sur une entité comme préalable à une décision de confiance.
- [`CredentialsContainer`](/fr/docs/Web/API/CredentialsContainer)
  - : Expose des méthodes pour demander des informations d'authentification et notifier l'agent utilisateur lorsque des évènements comme une connexion ou une déconnexion sont réussis. Cette interface est accessible via [`Navigator.credentials`](/fr/docs/Web/API/Navigator/credentials). La spécification <i lang="en">Web Authentication</i> ajoute une propriété d'option `publicKey` aux méthodes [`CredentialsContainer.create()`](/fr/docs/Web/API/CredentialsContainer/create) et [`CredentialsContainer.get()`](/fr/docs/Web/API/CredentialsContainer/get) afin de créer une nouvelle paire de clés ou d'obtenir une authentification à partir d'une paire de clés existante.
- [`PublicKeyCredential`](/fr/docs/Web/API/PublicKeyCredential)
  - : Fournit des informations à propos d'une paire de clés publique et privée, composant les informations pour l'authentification à un service (fonctionnant sur une paire de clés asymétrique évitant les risques d'hameçonnage et de fuite des données qu'on rencontre lorsqu'on utilise des mots de passe).
- [`AuthenticatorResponse`](/fr/docs/Web/API/AuthenticatorResponse)
  - : L'interface de base pour [`AuthenticatorAttestationResponse`](/fr/docs/Web/API/AuthenticatorAttestationResponse) et [`AuthenticatorAssertionResponse`](/fr/docs/Web/API/AuthenticatorAssertionResponse), qui fournit une racine de confiance cryptographique pour une paire de clés, renvoyées respectivement par [`CredentialsContainer.create()`](/fr/docs/Web/API/CredentialsContainer/create) et [`CredentialsContainer.get()`](/fr/docs/Web/API/CredentialsContainer/get). Les interfaces enfant contiennent des informations du navigateur comme l'origine du challenge. On pourra obtenir un objet implémentant cette interface en consultant la propriété [`PublicKeyCredential.response`](/fr/docs/Web/API/PublicKeyCredential/response).
- [`AuthenticatorAttestationResponse`](/fr/docs/Web/API/AuthenticatorAttestationResponse)
  - : Le type d'objet renvoyé par [`CredentialsContainer.create()`](/fr/docs/Web/API/CredentialsContainer/create) lorsqu'on lui passe un objet [`PublicKeyCredential`](/fr/docs/Web/API/PublicKeyCredential) et qui fournit une racine de confiance cryptographique pour la nouvelle paire de clés qui a été générée.
- [`AuthenticatorAssertionResponse`](/fr/docs/Web/API/AuthenticatorAssertionResponse)
  - : Le type d'objet renvoyé par [`CredentialsContainer.get()`](/fr/docs/Web/API/CredentialsContainer/get) lorsqu'on lui passe un objet [`PublicKeyCredential`](/fr/docs/Web/API/PublicKeyCredential) et qui fournit une preuve à un service qu'il dispose d'une paire de clés et que la requête d'authentification est valide et approuvée.

## Options

- [`PublicKeyCredentialCreationOptions`](/fr/docs/Web/API/CredentialsContainer/create)
  - : Les options passées à [`CredentialsContainer.create()`](/fr/docs/Web/API/CredentialsContainer/create).
- [`PublicKeyCredentialRequestOptions`](/fr/docs/Web/API/PublicKeyCredentialRequestOptions)
  - : Les options passées à [`CredentialsContainer.get()`](/fr/docs/Web/API/CredentialsContainer/get).

## Exemples

### Sites de démonstration

- [webauthn.io](https://github.com/duo-labs/webauthn.io), un site web de démonstration et [son code source](https://github.com/duo-labs/webauthn.io)
- [github.com/webauthn-open-source](https://github.com/webauthn-open-source) avec&nbsp;:
  - [le code source côté client](https://github.com/webauthn-open-source/webauthn-simple-app)
  - [le code source côté serveur](https://github.com/webauthn-open-source/fido2-lib)
- [webauthn.bin.coffee](https://webauthn.bin.coffee/), un site web de démonstration construit par J.C. Jones, ainsi que [le code source](https://github.com/jcjones/webauthn.bin.coffee).
- [try-webauthn.appspot.com](https://try-webauthn.appspot.com/), un site web de démonstration de Google, ainsi que [le code source](https://github.com/google/webauthndemo).
- [Une implémentation OWASP d'un portail SSO utilisant l'API <i lang="en">Web Authentication</i>](https://owasp.org/www-project-sso/)

### Exemple d'utilisation

> **Attention :** Pour des raisons de sécurité, les appels à [`create()`](/fr/docs/Web/API/CredentialsContainer/create) et [`get()`](/fr/docs/Web/API/CredentialsContainer/get) sont annulés si la fenêtre du navigateur perd le focus lorsque l'appel est en attente.

```js
// des arguments d'exemple pour un enregistrement
const createCredentialDefaultArgs = {
  publicKey: {
    // rp pour Relying Party (c'est-à-dire le service) :
    rp: {
      name: "Acme",
    },

    // utilisatrice/utilisateur :
    user: {
      id: new Uint8Array(16),
      name: "jean.biche@example.com",
      displayName: "Jean Biche",
    },

    pubKeyCredParams: [
      {
        type: "public-key",
        alg: -7,
      },
    ],

    attestation: "direct",

    timeout: 60000,

    challenge: new Uint8Array([
      // doit être un nombre cryptographiquement aléatoire fourni par le serveur
      0x8c, 0x0a, 0x26, 0xff, 0x22, 0x91, 0xc1, 0xe9, 0xb9, 0x4e, 0x2e, 0x17, 0x1a,
      0x98, 0x6a, 0x73, 0x71, 0x9d, 0x43, 0x48, 0xd5, 0xa7, 0x6a, 0x15, 0x7e, 0x38,
      0x94, 0x52, 0x77, 0x97, 0x0f, 0xef,
    ]).buffer,
  },
};

// des arguments d'exemple pour une authentification
const getCredentialDefaultArgs = {
  publicKey: {
    timeout: 60000,
    // allowCredentials: [newCredential] // voir ci-dessous
    challenge: new Uint8Array([
      // doit être un nombre cryptographiquement aléatoire fourni par le serveur
      0x79, 0x50, 0x68, 0x71, 0xda, 0xee, 0xee, 0xb9, 0x94, 0xc3, 0xc2, 0x15, 0x67,
      0x65, 0x26, 0x22, 0xe3, 0xf3, 0xab, 0x3b, 0x78, 0x2e, 0xd5, 0x6f, 0x81, 0x26,
      0xe2, 0xa6, 0x01, 0x7d, 0x74, 0x50,
    ]).buffer,
  },
};

// enregistrer / créer de nouvelles informations d'authentification
navigator.credentials
  .create(createCredentialDefaultArgs)
  .then((cred) => {
    console.log("Nouvelles informations d'authentification ", cred);

    // normalement on récupère des identifiants d'un compte existant de la part du serveur
    // pour cet exemple, nous allons copier ceux écrits avant…
    const idList = [
      {
        id: cred.rawId,
        transports: ["usb", "nfc", "ble"],
        type: "public-key",
      },
    ];
    getCredentialDefaultArgs.publicKey.allowCredentials = idList;
    return navigator.credentials.get(getCredentialDefaultArgs);
  })
  .then((assertion) => {
    console.log("Assertion", assertion);
  })
  .catch((err) => {
    console.log("Erreur", err);
  });
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
