---
title: identity.launchWebAuthFlow
slug: Mozilla/Add-ons/WebExtensions/API/identity/launchWebAuthFlow
tags:
  - API
  - Add-ons
  - Extensions
  - Identity
  - Method
  - Reference
  - WebExtensions
  - launchWebAuthFlow
translation_of: Mozilla/Add-ons/WebExtensions/API/identity/launchWebAuthFlow
---
{{AddonSidebar()}}

Effectue la première partie d'un flux [OAuth2](https://oauth.net/2/) y compris l'authentification de l'utilisateur et l'autorisation du client.

Le seul paramètre obligatoire de cette fonction est l'URL d'autorisation du fournisseur de services, qui doit contenir un certain nombre de paramètres d'URL, y compris l'[URL de redirection](/fr/Add-ons/WebExtensions/API/identity#Getting_the_redirect_URL) et l'[ID client](/fr/Add-ons/WebExtensions/API/identity#Registering_your_add-on) de l'extension. Le fournisseur de service alors :

- authentifie l'utilisateur auprès du fournisseur de services, si nécessaire (c'est-à-dire: s'ils ne sont pas déjà connectés)
- demande à l'utilisateur d'autoriser l'extension à accéder aux données demandées, si nécessaire (c'est-à-dire : si l'utilisateur n'a pas déjà autorisé l'extension)

Notez que si aucune authentification ou autorisation n'est nécessaire, cette fonction se terminera silencieusement, sans interaction de l'utilisateur.

Cette fonction prend également un paramètre facultatif `interactif`: si cette valeur est omise ou définie sur false, le flux est forcé de se terminer en mode silencieux. Dans ce cas, si l'utilisateur doit s'authentifier ou autoriser, l'opération échouera tout simplement.

Cette fonction renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise): si l'authentification et l'autorisation ont abouti, la promesse est remplie avec une URL de redirection contenant un certain nombre de paramètres d'URL. En fonction du flux OAuth2 implémenté par le fournisseur de services en question, l'extension devra passer par d'autres étapes pour obtenir un code d'accès valide, qu'elle pourra ensuite utiliser pour accéder aux données de l'utilisateur.

S'il y a une erreur, la promesse est rejetée avec un message d'erreur. Les conditions d'erreur peuvent inclure :

- l'URL du fournisseur de services n'a pas pu être atteinte
- l'ID du client ne correspond pas à l'ID d'un client enregistré
- l'URL de redirection ne correspond à aucune URL de redirection enregistrée pour ce client
- l'utilisateur ne s'est pas authentifié avec succès
- l'utilisateur n'a pas autorisé l'extension
- Le paramètre `interactif` a été omis ou faux, mais l'interaction de l'utilisateur aurait été nécessaire pour autoriser l'extension.

## Syntaxe

```js
var authorizing = browser.identity.launchWebAuthFlow(
  details   // object
)
```

### Paramètres

- `details`

  - : `object`. Options pour le flux, contenant les propriétés suivantes :

    - `url`

      - : `string`. URL fournie par le fournisseur de services OAuth2 pour obtenir un jeton d'accès. Les détails de cette URL doivent figurer dans la documentation du fournisseur de services en question, mais les paramètres d'URL doivent toujours inclure :

        - redirect_uri: ceci représente l'URI que votre extension est redirigée lorsque le flux est terminé. Il n'est pas nécessaire pour que le flux fonctionne du côté navigateur s'il correspond à l'URL de redirection générée. Voir [Obtenir l'URL de redirection](/fr/Add-ons/WebExtensions/API/identity#Getting_the_redirect_URL).

    - `interactive` {{optional_inline}}

      - : `boolean`. Si omis ou `false`, force le flux à se terminer en silence, sans interaction de l'utilisateur.

        Si l'utilisateur est déjà connecté et a déjà accordé l'accès pour l'extension, `launchWebAuthFlow()` peut se terminer en mode silencieux, sans interaction de l'utilisateur. Sinon (si le fournisseur de services a besoin que l'utilisateur se connecte ou autorise l'extension), `launchWebAuthFlow()` invite l'utilisateur, c'est-à-dire que le flux sera interactif.

        Les extensions ne doivent pas lancer de flux interactifs sauf en réponse à une action de l'utilisateur. Cependant, parfois les extensions veulent toujours accéder aux données de l'utilisateur sans une action directe de l'utilisateur (par exemple, imaginez une extension qui veut accéder aux données lorsque le navigateur se lance).

        TC'est le but de l'`interactif`: Si vous omettez `interactif` ou le définissez sur `false`, le flux est forcé de conclure en silence : si le fournisseur de services doit interagir avec l'utilisateur, le flux échouera tout simplement. Donc en règle générale: mettez `interactif` à `true` si vous lancez le flux en réponse à une action de l'utilisateur, et omettez le sinon.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise). Si l'extension est autorisée avec succès, elle sera remplie avec une chaîne contenant l'URL de redirection. L'URL inclura un paramètre qui est un jeton d'accès ou qui peut être échangé contre un jeton d'accès, en utilisant le flux documenté pour le fournisseur de services particulier.

## Compatibilité du navigateur

{{Compat("webextensions.api.identity.launchWebAuthFlow")}}

## Exemples

Cette fonction autorise une extension des données Google d'un utilisateur, conformément à la documentation disponible à l'adresse  <https://developers.google.com/identity/protocols/OAuth2UserAgent>. La validation du jeton d'accès renvoyé n'est pas affichée ici :

```js
function validate(redirectURL) {
  // validate the access token
}

function authorize() {
  const redirectURL = browser.identity.getRedirectURL();
  const clientID = "664583959686-fhvksj46jkd9j5v96vsmvs406jgndmic.apps.googleusercontent.com";
  const scopes = ["openid", "email", "profile"];
  let authURL = "https://accounts.google.com/o/oauth2/auth";
  authURL += `?client_id=${clientID}`;
  authURL += `&response_type=token`;
  authURL += `&redirect_uri=${encodeURIComponent(redirectURL)}`;
  authURL += `&scope=${encodeURIComponent(scopes.join(' '))}`;

  return browser.identity.launchWebAuthFlow({
    interactive: true,
    url: authURL
  });
}

function getAccessToken() {
  return authorize().then(validate);
}
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.identity`](https://developer.chrome.com/extensions/identity).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
