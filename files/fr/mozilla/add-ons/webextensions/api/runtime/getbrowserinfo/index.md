---
title: runtime.getBrowserInfo()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getBrowserInfo
---

{{AddonSidebar}}

Renvoie les informations sur le navigateur dans lequel l'extension est installée.

Il s'agit d'une fonction asynchrone qui renvoie une {{JSxRef("Promise")}}.

## Syntaxe

```js
var gettingInfo = browser.runtime.getBrowserInfo();
```

### Paramètres

None.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un objet qui a les propriétés suivantes :

- **`name`**: Valeur de chaîne représentant le nom du navigateur, par exemple "Firefox".
- **`vendor`**: Valeur de chaîne représentant le fournisseur du navigateur, par exemple "Mozilla".
- **`version`**: Chaîne représentant la version du navigateur, par exemple "51.0" or "51.0a2".
- **`buildID`**: Chaine représentant la version spécifique du navigateur, par exemple "20161018004015".

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Obtenir et enregistrer le nom du navigateur :

```js
function gotBrowserInfo(info) {
  console.log(info.name);
}

var gettingInfo = browser.runtime.getBrowserInfo();
gettingInfo.then(gotBrowserInfo);
```

{{WebExtExamples}}

> **Note :**
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
