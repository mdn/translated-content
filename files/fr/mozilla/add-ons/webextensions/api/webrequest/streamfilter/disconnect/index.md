---
title: webRequest.StreamFilter.disconnect()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/disconnect
tags:
  - API
  - Add-ons
  - Extensions
  - StreamFilter.disconnect
  - WebExtensions
  - webRequest
translation_of: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/disconnect
---
{{AddonSidebar()}}Déconnecte le filtre de la requête. Après cela, le navigateur continuera à traiter la réponse, mais plus aucun événement de filtrage ne se déclenchera, et plus aucun appel de fonction de filtrage n'aura d'effet.Notez la différence entre cette fonction et {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}}. Avec  `disconnect()`, le navigateur continuera à traiter d'autres données de réponse, mais il ne sera pas accessible par le filtre. Avec `close()`, le navigateur ignorera toutes les données de réponse qui n'ont pas déjà été transmises au moteur de rendu.

Vous devriez toujours appeler `disconnect()` ou `close()` une fois que vous n'avez plus besoin d'interagir avec la réponse.

Vous ne pouvez pas appeler cette fonction avant que l'événement {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}} ne soit déclenché.

## Syntaxe

```js
filter.disconnect()
```

### Paramètres

None.

### Valeur retournée

None.

## Compatibilité du navigateur

{{Compat("webextensions.api.webRequest.StreamFilter.disconnect", 10)}}

## Exemples

Cet exemple précèdera "preface text" au corps de la réponse. Il se déconnecte ensuite, de sorte que le corps de réponse d'origine se charge normalement :

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onstart = event => {
    console.log("started");
    let encoder = new TextEncoder();
    filter.write(encoder.encode("preface text"));
    filter.disconnect();
  }
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://example.org/"], types: ["main_frame"]},
  ["blocking"]
);
```

{{WebExtExamples}}
