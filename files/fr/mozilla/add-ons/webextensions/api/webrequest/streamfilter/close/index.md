---
title: webRequest.StreamFilter.close()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/close
tags:
  - Add-ons
  - Extensions
  - Method
  - StreamFilter.close
  - WebExtensions
  - webRequest
translation_of: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/close
---
{{AddonSidebar()}}

Ferme la demande. Après cet appel, aucune autre donnée de réponse ne sera transmise au moteur de rendu du navigateur et aucun autre événement de filtrage ne sera donné à l'extension.

Notez la différence entre cette fonction et  {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}. Avec  `disconnect()`, le navigateur continuera à traiter d'autres données de réponse, mais il ne sera pas accessible par le filtre. Avec `close()`, le navigateur ignorera toutes les données de réponse qui n'ont pas déjà été transmises au moteur de rendu.

Vous devriez toujours appeler `close()` ou `disconnect()` une fois que vous n'avez plus besoin d'interagir avec la réponse.

Vous ne pouvez pas appeler cette fonction avant que l'événement  {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}} ne soit déclenché.

## Syntaxe

```js
filter.close()
```

### Paramètres

None.

### Valeur retournée

None.

## Compatibilité du navigateur

{{Compat("webextensions.api.webRequest.StreamFilter.close", 10)}}

## Exemples

Cet exemple remplacera le contenu de la page par "texte de remplacement"  :

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onstart = event => {
    console.log("started");
    let encoder = new TextEncoder();
    filter.write(encoder.encode("replacement content"));
    filter.close();
  }
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://example.org/"], types: ["main_frame"]},
  ["blocking"]
);
```

{{WebExtExamples}}
