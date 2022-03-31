---
title: FileRequest.onprogress
slug: Web/API/FileRequest/onprogress
tags:
  - API
  - DOM
  - Fichier
  - Propriétés
translation_of: Web/API/FileRequest/onprogress
---
{{APIRef("File System API")}} {{non-standard_header}}

Cette propriété spécifie une fonction de rappel devant être exécutée de façon répétée pendant que l'opération représentée par un objet  {{ domxref("FileRequest") }} est en cours.

## Syntaxe

    instanceOfFileRequest.onprogress = function;

Où `instanceOfFileRequest` est un objet {{ domxref("FileRequest") }} et `function` est la fonction JavaScript à exécuter.

Chaque fois que la fonction callback est appelée, elle obtient un objet en tant que premier paramètre. Ces objets contiennent deux propriétés :

- `loaded`
  - : Un nombre représentant la quantité actuelle d'octets traités par l'opération.
- `total`
  - : Un nombre représentant le nombre total d'octets qui seront traités par l'opération.

## Exemple

```js
// Supposons 'request' qui est un objet FileRequest

request.onprogress = function (status) {
  var progress = document.querySelector('progress');

  progress.value = status.loaded;
  progress.max   = status.total;
}
```

## Spécification

Ne fait partie d'aucune spécification.

## Voir aussi

- {{ domxref("DOMRequest") }}
- {{ domxref("LockedFile") }}
