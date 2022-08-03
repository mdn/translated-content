---
title: permissions.request()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/request
tags:
  - API
  - Add-ons
  - Method
  - Permissions
  - Reference
  - WebExtensions
  - request
translation_of: Mozilla/Add-ons/WebExtensions/API/permissions/request
---
{{AddonSidebar()}}

Demandez l'ensemble des permissions répertoriées dans l'objet {{WebExtAPIRef("permissions.Permissions")}}.

L'argument `Permissions` peut contenir soit une propriété  `origins` , qui est un tableau de [permissions d'hôte](/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions), soit une propriété `permissions` , qui est un tableau de [permissions d'API](/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions), ou les deux. Les permissions doivent provenir de l'ensemble des permissions définies dans la clé  [`optional_permissions`](/fr/Add-ons/WebExtensions/manifest.json/optional_permissions) du manifest.json. La propriété `origins` qui correspondent à un sous-ensemble des hôtes correspondant à une permission facultative : par exemple, si optional_permissions inclut "\*://mozilla.org/", alors  `permissions.origins` peut inclure  "https\://developer.mozilla.org/".

La demande ne peut être faite qu'à l'intérieur du gestionnaire pour une [action utilisateur](/fr/Add-ons/WebExtensions/User_actions).

Selon les circonstances, le navigateur traitera probablement la demande en demandant à l'utilisateur s'il doit accorder les permissions demandées. Une seule requête est faite pour toutes les permissions demandées: donc toutes les permissions sont accordées ou aucune d'entre elles ne l'est.

Toutes les autorisations accordées sont conservées par l'extension, même en cas de mise à niveau et de désactivation / activation du cycle.

Il s'agit d'une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var requesting = browser.permissions.request(
  permissions                // Permissions object
)
```

### Paramètres

- `permissions`
  - : Un objet {{WebExtAPIRef("permissions.Permissions")}}

### Return value

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec `true` si l'extension a reçu toutes les permissions répertoriées dans l'argument des `permissions` , ou `false` dans le cas contraire.

## Compatibilité du navigateur

{{Compat("webextensions.api.permissions.request")}}

## Exemples

Ce code ajoute un gestionnaire de clics qui demande diverses permissions, puis enregistre le résultat de la demande et les permissions de l'extension une fois la requête terminée.

```js
const permissionsToRequest = {
  permissions: ["bookmarks", "history"],
  origins: ["https://developer.mozilla.org/"]
}

function requestPermissions() {

  function onResponse(response) {
    if (response) {
      console.log("Permission was granted");
    } else {
      console.log("Permission was refused");
    }
    return browser.permissions.getAll();
  }

  browser.permissions.request(permissionsToRequest)
    .then(onResponse)
    .then((currentPermissions) => {
    console.log(`Current permissions:`, currentPermissions);
  });
}

document.querySelector("#request").addEventListener("click", requestPermissions);
```

{{WebExtExamples}}

> **Note :**
>
> Actuellement un [bug avec la demande d'origines](https://bugzilla.mozilla.org/show_bug.cgi?id=1411873) et la [demande des permissions sur la page about:addons](https://bugzilla.mozilla.org/show_bug.cgi?id=1382953).
>
> Cette API est basée sur l'API Chromium [`chrome.permissions`](https://developer.chrome.com/extensions/permissions).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
