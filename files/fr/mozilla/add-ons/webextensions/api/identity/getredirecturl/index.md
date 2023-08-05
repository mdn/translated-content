---
title: identity.getRedirectURL()
slug: Mozilla/Add-ons/WebExtensions/API/identity/getRedirectURL
---

{{AddonSidebar()}}

Génère une URL que vous pouvez utiliser comme URL de redirection.

L'URL est dérivée de l'ID de votre extension. Si vous utilisez cette fonction, vous devrez probablement définir explicitement l'ID de votre extension à l'aide de la clé des [`applications`](/fr/Add-ons/WebExtensions/manifest.json/applications) (sinon, chaque fois que vous installerez [temporairement l'extension](/fr/Add-ons/WebExtensions/Temporary_Installation_in_Firefox), vous obtiendrez une URL de redirection différente).

Voir [Obtenir une URL de redirection](/fr/Add-ons/WebExtensions/API/identity#Getting_the_redirect_URL) pour plus d'informations sur les URL de redirection.

## Syntaxe

```js
var redirectURL = browser.identity.getRedirectURL();
```

### Paramètres

None.

### Valeur retournée

Une chaîne contenant une valeur d'URL de redirection.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Obtenez l'URL de redirection :

```js
var redirectURL = browser.identity.getRedirectURL();
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.identity`](https://developer.chrome.com/extensions/identity).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
