---
title: Storage.length
slug: Web/API/Storage/length
tags:
  - API
  - Propriété
  - Reference
  - Stockage
  - Web Stockage
translation_of: Web/API/Storage/length
---
{{APIRef("Web Storage API")}}

La propriété en lecture seule de l'interface {{domxref("Storage")}} retourne un entier représentant le nombre d'items stockés dans l'objet `Storage`.

## Syntaxe

    var aLength = storage.length;

### Retour

Un entier.

## Exemple

La fonction suivante ajoute trois éléments au localStorage du domaine courant puis retourne le nombre d'éléments dans le storage:

```js
function populateStorage() {
  localStorage.setItem('bgcolor', 'yellow');
  localStorage.setItem('font', 'Helvetica');
  localStorage.setItem('image', 'cats.png');

  localStorage.length; // retourne 3 si localStorage est vide au préalable
}
```

> **Note :** Pour voir ceci utilisé dans un exemple concret, regardez notre [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/).

## Spécifications

| Spécification                                                                                                    | Statut                           | Commentaire |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', 'webstorage.html#dom-storage-length', 'Storage.length')}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.Storage.length")}}

## Voir aussi

- [Utilisation de l'API de stockage web](/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
