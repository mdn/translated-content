---
title: Storage.setItem()
slug: Web/API/Storage/setItem
tags:
  - API
  - Méthode
  - Stockage
  - Stockage Web
translation_of: Web/API/Storage/setItem
---
{{APIRef("Web Storage API")}}

La méthode `setItem()` de l'interface {{domxref("Storage")}}, lorsque lui sont passées le duo clé-valeur, les ajoute à l'emplacement de stockage, sinon elle met à jour la valeur si la clé existe déjà.

## Syntaxe

    storage.setItem(nomClé, valeurClé);

### Paramètres

- _nomClé_
  - : C'est une {{domxref("DOMString")}} contenant le nom de la clé que l'on souhaite créer/modifier.
- _valeurClé_
  - : C'est une {{domxref("DOMString")}} contenant la valeur associée à son nom de clé que l'on souhaite créer/modifier.

### Retourne

_Aucune valeur de retour._

### Exceptions

`setItem()` peut émettre une exception si l'emplacement de stockage est plein. En particulier pour Safari mobile (depuis iOS 5), elle émettra une exception si l'utilisateur passe en navigation privée (contrairement aux autres navigateur qui autorisent le stockage même en navigation privée en utilisant un conteneur de données séparé, Safari met son quota de stockage à 0 octets).
Par conséquent les développeurs devraient être sûrs de toujours de **systématiquement capturer toute possible exception venant de setItem().**

## Exemple

La fonction suivante crée trois éléments à l'intérieur du stockage local.

```js
function remplissageStockage() {
  localStorage.setItem('bgcolor', 'red');
  localStorage.setItem('font', 'Helvetica');
  localStorage.setItem('image', 'myCat.png');
}
```

> **Note :** Pour voir ceci utilisé dans un exemple concret, regardez notre [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/).

## Spécifications

| Spécification                                                                                                    | Statut                           | Commentaire |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', 'webstorage.html#dom-storage-setitem', 'Storage.setItem')}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.Storage.setItem")}}

## Voir aussi

- [Storage.getItem()](/fr/docs/Web/API/Storage/getItem)
- [Storage.removeItem()](/fr/docs/Web/API/Storage/removeItem)
- [Utilisation de l'API Web Storage](/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
